"use client";
import { allPortfolio } from "@/data/portfolio";
import Image from "next/image";
import Slider from "react-slick";
import resident from "@/public/assets/images/resident.png";
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
                  src={resident}
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
              <h2 className="sec-title">Residential and Villa</h2>
              <p className="sec-text mt-30">
              At Capital Engineering Consultancy, we understand that your residence is more than a building, it is a reflection of your vision and proof of your commitment. Our expertise in residential and villa design ensures personalized spaces that combine elegance, functionality, and sustainability, tailored to your unique lifestyle.
              </p>
             
            </div>
            <h3>How We Elevate Residential Living</h3>
            <p className="sec-text mb-n1">
            We design residences that elevate living standards by focusing on:<br/>
<b>• Individualized Design:</b> We go beyond aesthetics to reflect your vision and maximize comfort and usability, whether a luxurious villa or a cozy private residence.<br/>
<b>• Optimized Layouts:</b> Every space is meticulously planned for seamless functionality, prioritizing both practicality and visual appeal.<br/>
<b>• Seamless Project Management:</b> We manage every detail, from concept development to completion, ensuring projects are delivered on time and within budget, minimizing disruptions.<br/>
<b>• Sustainability at the Core:</b> Designs that integrate eco-friendly practices without compromising style.
            </p>
            <h3 className="mt-35">Why Choose Capital Engineering Consultancy?</h3>
            <p className="sec-text mb-n1">
            <b>• Seamless Collaboration:</b> From design to construction, we work closely with you, keeping you informed and engaged.<br/>
<b>• Commitment to Quality:</b> Every project is a testament to our meticulous attention to detail and commitment to excellence.<br/>
<b>• Client-Centric Approach:</b> We listen, adapt, and ensure your project reflects your vision and goals.<br/>
<b>• Risk-Free Investments:</b> Robust quality controls safeguard your project, guaranteeing long-term value.
            </p>
            <h3 className="mt-35">Delivering Excellence in Residential Projects</h3>
            <p className="sec-text mb-n1">
            Our portfolio includes distinguished projects like Dima Kamal Villa, Eskan Private Villa, Abdullah Kalantar Villa, and Zanuba Villa, where we have transformed visions into stunning realities. Each project reflects our dedication to precision, creativity, and delivering on our client's unique requirements.
            </p>
            <h3 className="mt-35">Build Your Dream Residential Project with Us</h3>
            <p className="sec-text mb-n1">
            At Capital Engineering Consultancy, we take pride in creating residential spaces that resonate with elegance, functionality, and sustainability. Let's transform your vision into reality. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
