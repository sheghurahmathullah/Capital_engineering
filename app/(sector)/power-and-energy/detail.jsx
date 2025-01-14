"use client";
import { allPortfolio } from "@/data/portfolio";
import Image from "next/image";
import Slider from "react-slick";
import power from "@/public/assets/images/power.png";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
export default function SectorDetails() {
  const itemsImages = [
    "/assets/img/portfolio/portfolio_inner_1.png",
    "/assets/img/portfolio/portfolio_inner_2.png",
  ];
  const slideroptions = {
    arrows: true,
    autoplay: true,
    prevArrow: (
      <button type="button" className="slick-prev slick-arrow">
        <i className="fas fa-arrow-left"></i>
      </button>
    ),

    nextArrow: (
      <button type="button" className="slick-next slick-arrow">
        <i className="fas fa-arrow-right"></i>
      </button>
    ),
  };
  return (
    <div className="project-details-page-area space">
      <div className="container">

            <div  className="col-xl-12">
              <div className="project-inner-thumb mb-80 wow img-custom-anim-top animated">
                <Image
                  width={1296}
                  height={700}
                  className="w-100"
                  src={power}
                  alt="img"
                />
              </div>
            </div>
          

        <div className="row justify-content-between flex-row-reverse">
          <div className="col-xl-3 col-lg-4">
            <div className="project-details-info mb-lg-0 mb-40 hide">
              <ul className="list-wrap">
              <li>
                  <span>Navigate to:</span>
                  <div
                    className="manage-links"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.6rem",
                    }}
                  >
                    <a
                      href="/shelters"
                      style={{ color: "black" }}
                      className="hover-underline"
                    >
                      Shelter
                    </a>
                    <a
                      href="/railways"
                      style={{ color: "black" }}
                      className="hover-underline"
                    >
                      Railways
                    </a>
                    <a
                      href="/religious"
                      style={{ color: "black" }}
                      className="hover-underline"
                    >
                      Religious
                    </a>
                    <a
                      href="/industrial"
                      style={{ color: "black" }}
                      className="hover-underline"
                    >
                      Industrial
                    </a>
                    <a
                      href="/education"
                      style={{ color: "black" }}
                      className="hover-underline"
                    >
                      Education
                    </a>
                    <a
                      href="/hospitality"
                      style={{ color: "black" }}
                      className="hover-underline"
                    >
                      Hospitality
                    </a>
                    <a
                      href="/healthcare"
                      style={{ color: "black" }}
                      className="hover-underline"
                    >
                      HealthCare
                    </a>
                    <a
                      href="/tank-farms"
                      style={{ color: "black" }}
                      className="hover-underline"
                    >
                      Tank Farms
                    </a>
                    <a
                      href="/oil-and-gas"
                      style={{ color: "black" }}
                      className="hover-underline"
                    >
                      Oil and Gas
                    </a>
                    <a
                      href="/commercial"
                      style={{ color: "black" }}
                      className="hover-underline"
                    >
                      Commercial
                    </a>
                    <a
                      href="/government"
                      style={{ color: "black" }}
                      className="hover-underline"
                    >
                      Government
                    </a>
                    <a
                      href="/power-and-energy"
                      style={{ color: "black" }}
                      className="hover-underline"
                    >
                      Power and Energy
                    </a>
                    <a
                      href="/residential-and-villa"
                      style={{ color: "black" }}
                      className="hover-underline"
                    >
                      Residential and Villa
                    </a>
                    <a
                      href="/roads-and-infrastructure"
                      style={{ color: "black" }}
                      className="hover-underline"
                    >
                      Roads and Infrastructure
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="title-area mb-35">
              <h2 className="sec-title">Power and Energy</h2>
              <p className="sec-text mt-30">
              At Capital Engineering Consultancy, we understand that energy infrastructure is not just about delivering power, it is about driving progress, minimizing environmental impact, and creating a resilient foundation for the future. Whether you are advancing waste-to-energy solutions or modernizing grid systems, we collaborate with you to turn vision into reality.
              </p>
             
            </div>
            <h3>How We Power Your Vision </h3>
            <p className="sec-text mb-n1">
            <b>• Optimized Power Plants:</b> Designs that boost operational efficiency while minimizing environmental impact, supporting your goals for sustainable energy.<br/>
<b>• Seamless Transmission Networks:</b> Reliable infrastructure to transfer energy efficiently across challenging terrains, ensuring uninterrupted supply.<br/>
<b>• Advanced Energy Storage:</b> From cutting-edge battery systems to thermal solutions, we deliver technologies that stabilize grids and improve energy availability.<br/>
<b>• Renewable Integration:</b> Facilitating the seamless incorporation of renewable energy sources into existing systems for greener, cost-effective operations.<br/>
<b>• Modern Grid Solutions:</b> Smart grid systems designed to balance loads, reduce energy loss, and adapt to future demand growth.
            </p>
            <h3 className="mt-35">Why Partner with Us?</h3>
            <p className="sec-text mb-n1">
            Power projects demand precision, innovation, and a deep understanding of industry requirements. At Capital Engineering Consultancy, we provide sector-focused solutions that address the unique needs of the energy industry:<br/>
<b>• Integrated Design Approach:</b> Seamlessly blending civil, architectural, structural, and MEP engineering to deliver cohesive solutions.<br/>
<b>• Sustainability as a Core Principle:</b> Embedding eco-friendly practices into every project to support your environmental commitments.<br/>
<b>• Innovative Problem Solving:</b> Addressing the unique challenges of energy infrastructure with adaptive and scalable designs.<br/>
<b>• Uncompromised Quality:</b> Maintaining the highest standards of precision and excellence from planning to execution.
            </p>
            <h3 className="mt-35">Driving Change, Powering the Future</h3>
            <p className="sec-text mb-n1">
            At Capital Engineering Consultancy, we go beyond engineering to create energy solutions that transform industries and communities. From waste-to-energy facilities to Energy Facility to grid modernization, we are here to power your progress.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
