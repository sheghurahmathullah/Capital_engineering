"use client";
import { allPortfolio } from "@/data/portfolio";
import Image from "next/image";
import Slider from "react-slick";
import industrial from "@/public/assets/images/industrial.png";
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
                  src={industrial}
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
              <h2 className="sec-title">Industrial Sector </h2>
              <p className="sec-text mt-30">
              At Capital Engineering Consultancy, we design industrial spaces that are robust, efficient, and future-ready. By collaborating closely with businesses across the UAE, we deliver facilities that streamline production, enhance logistics, and meet stringent safety and environmental standards. Whether you are planning a high-capacity warehouse or a specialized manufacturing unit, we help turn your operational goals into reality.
              </p>
              
            </div>
            <h3>Innovative Engineering for Industrial Excellence</h3>
            <p className="sec-text mb-n1">
            Industrial projects demand precision and adaptability. Our customized solutions are designed to meet your unique needs, including:<br/>
<b>• Process Optimization:</b> Developing layouts that boost efficiency and reduce downtime.<br/>
<b>• Energy-Efficient Systems:</b> Minimizing operational costs while promoting sustainability.<br/>
<b>• Advanced Technologies:</b> Leveraging smart tools and innovative engineering for superior performance.<br/>
From initial planning to execution, we ensure every detail aligns with your goals, delivering facilities that are scalable, durable, and aligned with industry trends.
            </p>
            <h3 className="mt-35">Why Choose Us?</h3>
            <p className="sec-text mb-n1">
            <b>• Operational Focus:</b> Facilities designed to streamline production and logistics.<br/>
<b>• Expert Guidance:</b> End-to-end support, from planning to execution.<br/>
<b>• Innovative Technologies:</b> Solutions that integrate the latest in industrial engineering.<br/>
<b>• Future-Ready Solutions:</b> Scalable designs for long-term growth and adaptability.<br/>
<b>• Sustainability:</b> Energy-efficient systems to minimize costs and environmental impact.
            </p>
            <h3 className="mt-35">Let’s Build Your Future Together</h3>
            <p className="sec-text mb-n1">
            At Capital Engineering Consultancy, we turn your industrial vision into a reality, crafting spaces that drive growth and innovation. Your path to industrial excellence starts here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
