import Admin from "pages/Admin/Admin";
import { RouterType } from "../types/type.router";
const routers: RouterType[] = [
  {
    path: "/admin/*",
    element: Admin,
  },
  
];
export default routers;
