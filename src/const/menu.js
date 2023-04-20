import {

  BookOutlined,
  UserSwitchOutlined,
  AppstoreOutlined,
  VideoCameraOutlined,
  IdcardOutlined,
  CommentOutlined,

} from "@ant-design/icons";

import {
  Dashboard,
  Experiences,
  Messege,
  Portfolios,
  Skills,
  Users,
} from "../Pages/admin";
import { ROLE } from "../utils";

 let Routes = [
   {
     url: "dashboard",
     page: Dashboard,
     icon: <AppstoreOutlined />,
     label: "Dashboard",
   },
   {
     url: "users",
     page: Users,
     icon: <UserSwitchOutlined />,
     label: "Users",
   },
   {
     url: "experiences",
     page: Experiences,
     icon: <VideoCameraOutlined />,
     label: "Experiences",
   },
   {
     url: "message",
     page: Messege,
     icon: <CommentOutlined />,
     label: "Messege",
   },
   {
     url: "portfolio",
     icon: <IdcardOutlined />,
     page: Portfolios,
     label: "Portfolios",
   },
   {
     url: "skills",
     page: Skills,
     icon: <BookOutlined />,
     label: "Skills",
   },
 ];

let hiddenRoutes = ROLE ==="client" ? ["users"] :[];

export const adminRoutes = Routes.filter((Routes) => !hiddenRoutes.includes(Routes.url));