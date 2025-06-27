import React, { useEffect, useState } from "react";
import Modal from "react-modal";

interface EmailSendModalProps {
  isOpen: boolean;
  onClose: () => void;
  status: string;
}

const EmailSendModal: React.FC<EmailSendModalProps> = ({ isOpen, onClose, status }) => {
  const [progressWidth, setProgressWidth] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    let timeout: NodeJS.Timeout | undefined;

    const increaseProgress = () => {
      interval = setInterval(() => {
        setProgressWidth((prevWidth) => {
          if (prevWidth >= 100) {
            clearInterval(interval);
            clearTimeout(timeout);
            return 0;
          }
          return prevWidth + 1;
        });
      }, 23);
    };

    if (isOpen) {
      increaseProgress();

      timeout = setTimeout(() => {
        clearInterval(interval);
        setProgressWidth(0);
      }, 3000);
    } else {
      clearInterval(interval);
      clearTimeout(timeout);
      setProgressWidth(0);
    }

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="fixed inset-0 flex items-center justify-center z-[1055] outline-none"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <div className="bg-white w-800 h-400 px-16 py-10 rounded-lg shadow-md">
        <div className="relative h-2 bg-blue-200">
          <div
            className="absolute top-0 h-2 bg-blue-500"
            style={{ width: `${progressWidth}%` }}
          ></div>
        </div>
        {status}
      </div>
    </Modal>
  );
};

export default EmailSendModal;