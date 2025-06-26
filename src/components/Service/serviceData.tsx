import { Service } from "@/types/service";

const serviceData: Service[] = [
  {
    id: 1,
    title: "Land Surveying",
    paragraph:
      "Our Land Surveying department offers Tree & Topographical Surveys, ALTA/NSPS Land Title Surveys, Subdivision Plats, and As-built Surveys. We provide detailed and accurate land data to support informed decisions for both private and public projects.",
    image: "/images/services/land-surveying.avif",
    tags: ["surveying", "mapping", "land"],
  },
  {
    id: 2,
    title: "Water Resources Engineering",
    paragraph:
      "We specialize in stormwater management, floodplain analysis, drainage system design, and hydraulic modeling. Our team ensures compliance with environmental standards while providing effective and sustainable solutions to manage water resources.",
    image: "/images/services/water-resources.avif",
    tags: ["water", "drainage", "stormwater"],
  },
  {
    id: 3,
    title: "Master Planning",
    paragraph:
      "Our civil engineers provide comprehensive master planning services for residential, commercial, and municipal developments. We assess land use, infrastructure, utility systems, and regulatory constraints to deliver efficient, scalable plans.",
    image: "/images/services/master-planning.avif",
    tags: ["planning", "infrastructure", "design"],
  },
  {
    id: 4,
    title: "Site Development & Grading",
    paragraph:
      "We offer full-service site development including grading plans, erosion control, parking layouts, and utility coordination. Our team delivers code-compliant designs with attention to topography and drainage.",
    image: "/images/services/site-development.avif",
    tags: ["site", "grading", "civil"],
  },
  {
    id: 5,
    title: "Roadway & Transportation Engineering",
    paragraph:
      "Reedy Engineering provides roadway alignment, intersection design, traffic flow analysis, and pavement design services. Our expertise supports both public and private transportation projects.",
    image: "/images/services/roadway.avif",
    tags: ["roadway", "transportation", "traffic"],
  },
  {
    id: 6,
    title: "Industrial Structures & Engineering",
    paragraph:
      "We deliver structural engineering services for industrial facilities including steel buildings, warehouses, equipment foundations, retaining walls, and structural retrofits. Our designs emphasize safety, efficiency, and code compliance.",
    image: "/images/services/industrial.avif",
    tags: ["structures", "industrial", "structural"],
  },
];

export default serviceData;
