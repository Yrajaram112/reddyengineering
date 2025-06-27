// import Image from "next/image";

const FounderSection = () => {
  return (
    <section id="founder" className="py-16 md:py-24 bg-white dark:bg-bg-color-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-primary dark:text-white">Our Founder</h2>
          <p className="mt-4 text-lg text-textBody dark:text-body-color-dark">
            Meet the leadership behind Reedy Engineering
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl mx-auto">
          {/* Founder Image */}
          {/* <div className="w-full md:w-1/3">
            <Image
              src="/images/people/prabhash.jpg"
              alt="Prabhash Kumar Shah"
              width={300}
              height={300}
              className="rounded-xl shadow-lg object-cover"
            />
          </div> */}

          {/* Founder Details */}
          <div className="w-full md:w-3/3">
            <h3 className="text-2xl font-semibold text-secondary dark:text-white mb-2">
              Prabhash Shah, PE
            </h3>
            <p className="text-base text-textBody dark:text-gray-300 mb-4">
              With over 15 years of experience in structural and civil engineering, Prabhash Shah leads Reedy Engineering with a commitment to excellence, client satisfaction, and community impact. Licensed as a Professional Engineer (PE), he brings both practical expertise and visionary leadership to every project.
            </p>

            {/* Message from Founder */}
            <div className="mt-6 border-l-4 border-primary pl-6 italic text-textBody dark:text-gray-300">
              &quot;At Reedy Engineering, we don&apos;t just build infrastructure — we build trust, reliability, and lasting impact. Every structure we design is a commitment to safety, sustainability, and service to the communities we call home.&quot;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
