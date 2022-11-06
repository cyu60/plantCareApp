import { type AppType } from "next/app";

import { trpc } from "../utils/trpc";

import "../styles/globals.css";
import SideBar from "../components/Sidebar";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
  <SideBar>
    <Component {...pageProps} />
  </SideBar>)
  ;
};

export default trpc.withTRPC(MyApp);
