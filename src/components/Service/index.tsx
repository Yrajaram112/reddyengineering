'use client'
import serviceData from "./serviceData";
import SingleService from "./SingleService";

const Services = () => {
 
  return (
    <>
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center">
          {serviceData.map((blog) => (
            <div
              key={blog.id}
              className="w-full px-4 py-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
            >
              <SingleService service={blog} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;