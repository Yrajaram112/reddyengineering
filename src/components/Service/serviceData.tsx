import { Service } from "@/types/service";

const serviceData: Service[] = [
  {
    id: 1,
    title: "Industrial Structures & Engineering",
    paragraph:
      "We deliver structural engineering services for industrial facilities including steel buildings, warehouses, equipment foundations, retaining walls, and structural retrofits. Our designs emphasize safety, efficiency, and code compliance.",
    image: "/images/services/industrial.avif",
    tags: ["structures", "industrial", "structural"],
  },
  {
    id: 2,
    title: "Precast Building Solutions",
    paragraph:
      "Our Precast Building Solutions department specializes in innovative and sustainable precast concrete elements for modern construction. We offer custom-designed panels, beams, and wall systems that provide exceptional strength, faster installation, and energy efficiency for both commercial and residential projects.",
    image: "/images/services/precast-building.png",
    tags: ["precast", "concrete", "building", "sustainable"],
  },
  {
    id: 3,
    title: "Water Resources Engineering",
    paragraph:
      "We specialize in stormwater management, floodplain analysis, drainage system design, and hydraulic modeling. Our team ensures compliance with environmental standards while providing effective and sustainable solutions to manage water resources.",
    image: "/images/services/water-resources.avif",
    tags: ["water", "drainage", "stormwater"],
  },
  {
    id: 4,
    title: "Master Planning",
    paragraph:
      "Our civil engineers provide comprehensive master planning services for residential, commercial, and municipal developments. We assess land use, infrastructure, utility systems, and regulatory constraints to deliver efficient, scalable plans.",
    image: "/images/services/master-planning.avif",
    tags: ["planning", "infrastructure", "design"],
  },
  {
    id: 5,
    title: "Site Development & Grading",
    paragraph:
      "We offer full-service site development including grading plans, erosion control, parking layouts, and utility coordination. Our team delivers code-compliant designs with attention to topography and drainage.",
    image: "/images/services/site-development.avif",
    tags: ["site", "grading", "civil"],
  },
  {
    id: 6,
    title: "Roadway & Transportation Engineering",
    paragraph:
      "Reedy Engineering provides roadway alignment, intersection design, traffic flow analysis, and pavement design services. Our expertise supports both public and private transportation projects.",
    image: "/images/services/roadway.avif",
    tags: ["roadway", "transportation", "traffic"],
  },
];

export default serviceData;
