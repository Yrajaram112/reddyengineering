import Image from "next/image";
import React from "react";

const projects = [
  { src: "/images/portfolio/bridge-assessment.avif", name: "Bridge Assessment - I-85" },
  { src: "/images/portfolio/retaining-wall.avif", name: "Retaining Wall Design - Greenville" },
  { src: "/images/portfolio/site-plan.avif", name: "Site Development - Commercial Lot" },
  { src: "/images/portfolio/road-rehab.avif", name: "Road Rehabilitation - Upstate SC" },
  { src: "/images/portfolio/steel-structure.avif", name: "Steel Structure Analysis - Warehouse" },
  { src: "/images/portfolio/foundation.avif", name: "Foundation Design - Industrial Facility" },
];

const PortfolioGallery = () => {
  return (
    <section id="about" className="pt-24 md:pt-28 lg:pt-32 bg-white dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900 dark:text-white tracking-tight">
          Project Portfolio
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((proj, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <Image
                src={proj.src}
                alt={proj.name}
                width={600}
                height={400}
                className="w-full h-60 object-cover transition-all duration-300 group-hover:opacity-80"
                priority={index < 2}
              />
              <div className="absolute inset-0 bg-[#1E3A8A]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-xl font-semibold tracking-wide">
                  {proj.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGallery;