import FounderSection from "./FounderSection";

const AboutSectionOne = () => {
  return (
    <section id="about" className="pt-26 md:pt-30 lg:pt-38 bg-white dark:bg-bg-color-dark">
      <div className="container mx-auto px-4">

        {/* Mission */}
        <div className="max-w-[80%] mx-auto flex flex-wrap items-center mb-16">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <h3 className="text-3xl font-bold text-primary dark:text-white">Our Mission</h3>
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-lg text-textBody dark:text-body-color-dark">
              To deliver civil and structural engineering solutions that stand the test of time,
              combining innovation, precision, and a deep commitment to the communities we serve across South Carolina.
            </p>
          </div>
        </div>

        {/* Vision */}
        <div className="max-w-[80%] mx-auto flex flex-wrap items-center mb-16">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <h3 className="text-3xl font-bold text-accent dark:text-white">Our Vision</h3>
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-lg text-textBody dark:text-body-color-dark">
              To be the trusted partner in infrastructure development, known for excellence in design,
              integrity in practice, and a relentless pursuit of better, safer, and more sustainable environments.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-secondary dark:text-white mb-6">Our Core Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-accent bg-opacity-20 dark:bg-secondary p-6 rounded-xl shadow-md autoZoomRotate">
              <h4 className="text-xl font-semibold mb-2 text-primary dark:text-white">Integrity</h4>
              <p className="text-textBody dark:text-gray-200">
                We uphold the highest standards of honesty, professionalism, and accountability in every project we undertake.
              </p>
            </div>
            <div className="bg-accent bg-opacity-20 dark:bg-secondary p-6 rounded-xl shadow-md autoZoomRotate">
              <h4 className="text-xl font-semibold mb-2 text-primary dark:text-white">Technical Excellence</h4>
              <p className="text-textBody dark:text-gray-200">
                We bring deep engineering expertise and rigorous attention to detail to deliver structurally sound, code-compliant solutions.
              </p>
            </div>
            <div className="bg-accent bg-opacity-20 dark:bg-secondary p-6 rounded-xl shadow-md autoZoomRotate">
              <h4 className="text-xl font-semibold mb-2 text-primary dark:text-white">Client-Centered Approach</h4>
              <p className="text-textBody dark:text-gray-200">
                We listen, collaborate, and tailor our services to meet our clients’ goals, timelines, and budgets.
              </p>
            </div>
            <div className="bg-accent bg-opacity-20 dark:bg-secondary p-6 rounded-xl shadow-md autoZoomRotate">
              <h4 className="text-xl font-semibold mb-2 text-primary dark:text-white">Community Impact</h4>
              <p className="text-textBody dark:text-gray-200">
                We are proud to contribute to the infrastructure and growth of South Carolina through safe, sustainable engineering solutions.
              </p>
            </div>
          </div>
        </div>

        <FounderSection/>
      </div>
    </section>
  );
};

export default AboutSectionOne;
