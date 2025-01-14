import MarqueeComponent from "./Marquee";
import Footer8 from "@/components/footers/Footer8";
import Header3 from "@/components/headers/Header3";
import Breadcumb from "./Breadcumb";

import Projects3 from "./Projects3";
import React from "react";
export const metadata = {
  title: "Newsroom",
};
export default function Newsroom() {
  return (
    <>
      <Header3 />
      <Breadcumb />
      <Projects3 />
      <MarqueeComponent />
      <Footer8 />
    </>
  );
}
