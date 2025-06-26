import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "HOME",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "ABOUT US",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "SERVICES",
    path: "/services",
    newTab: false,
  },
  {
    id: 4,
    title: "PORTFOLIO",
    path: "/portfolio",
    newTab: false,
  },
  {
    id: 5,
    title: "CONTACT US",
    path: "/#contact",
    newTab: false,
  },
  // {
  //   id: 6,
  //   title: "Pages",
  //   newTab: false,
  //   submenu: [
  //     {
  //       id: 41,
  //       title: "About Page",
  //       path: "/about",
  //       newTab: false,
  //     },
  //     {
  //       id: 42,
  //       title: "Contact",
  //       path: "/contact",
  //       newTab: false,
  //     },
  //   ],
  // },
];
export default menuData;
