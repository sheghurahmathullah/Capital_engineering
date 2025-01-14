"use client";
import { allPortfolio } from "@/data/portfolio";
import Image from "next/image";
import Slider from "react-slick";
import hospitality from "@/public/assets/images/hospitality.png";
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
                  src={hospitality}
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
              <h2 className="sec-title">Hospitality</h2>
              <p className="sec-text mt-30">
              At Capital Engineering Consultancy, we believe hospitality spaces should be as unique as the experiences they offer. By collaborating closely with you, we design environments that attract guests, optimize operations, and reflect your unique brand identity. From Radisson Blu Apartment to Ritz Carlton Villas, our portfolio speaks of spaces that inspire.
              </p>
              
            </div>
            <h3>How We Enhance Hospitality Spaces </h3>
            <p className="sec-text mb-n1">
            We specialize in addressing the unique needs of the hospitality industry, ensuring every project reflects a commitment to excellence:<br/>
<b>• Crafting Luxurious Spaces:</b> From boutique hotels to grand resorts, we design environments that inspire relaxation and provide a seamless guest experience.<br/>
<b>• Personalized, Guest-Centric Designs:</b> Our team focuses on layouts and aesthetics tailored to meet your guests’ expectations and preferences.<br/>
<b>• Sustainable Developments:</b> Integrating eco-friendly practices, we help your business stay ahead of environmental standards while creating a positive guest impact.<br/>
<b>• Innovative Renovations:</b> Transforming existing properties with modern designs and technologies to enhance functionality and appeal, without interrupting operations.<br/>
<b>• Integrated Hospitality Complexes:</b> Designing multi-functional spaces that combine accommodation, dining, and recreation in balanced environments.


            </p>
            <h3 className="mt-35">Trusted by Leading Hospitality Brands</h3>
            <p className="sec-text mb-n1">
            We are committed to delivering excellence through close collaboration and attention to detail. Our designs go beyond expectations, ensuring projects are completed on time, within budget, and with a lasting impact. Let’s create spaces that leave lasting impressions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
