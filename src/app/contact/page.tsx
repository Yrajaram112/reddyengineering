// import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Dream Big",
  description: "This is Contact Page",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      {/* <Breadcrumb
        pageName="Contact Us"
        description=""
      /> */}

      <Contact />
    </>
  );
};

export default ContactPage;
