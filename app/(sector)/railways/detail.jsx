"use client";
import { allPortfolio } from "@/data/portfolio";
import Image from "next/image";
import Slider from "react-slick";
import railway from "@/public/assets/images/railway.png";
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
                  src={railway}
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
              <h2 className="sec-title">Railways</h2>
              <p className="sec-text mt-30">
              The railway sector is experiencing a period of immense transformation. From high-speed rail to innovative signalling systems, the need for expertise in complex engineering solutions is paramount. At Capital Engineering Consultancy, we understand the unique challenges faced by railway projects. 
              </p>
             
            </div>
            <h3>How we can partner with you to achieve success</h3>
            <p className="sec-text mb-n1">
            <b>• Track Engineering:</b> Designing and constructing robust tracks for smooth and efficient train operations.<br/>
<b>• Signalling and Communication Systems:</b> Implementing state-of-the-art systems for safe and reliable train control.<br/>
<b>• Power Supply Systems:</b> Ensuring reliable power supply to electric trains through efficient infrastructure.<br/>
<b>• Station Design and Development:</b> Creating passenger-friendly stations that enhance comfort and convenience.<br/>
<b>• Depot and Maintenance Facilities:</b> Designing and optimizing facilities for efficient train maintenance and repair.<br/>
We focus on delivering sustainable railway solutions by minimizing environmental impact, optimizing energy efficiency, and utilizing resources effectively. Our team of experienced engineers leverages cutting-edge technologies and industry best practices to provide innovative solutions.
            </p>
            <h3 className="mt-35">Let’s Build the Future of Railways Together</h3>
            <p className="sec-text mb-n1">
            Collaborating with Capital Engineering Consultancy means partnering with experts who prioritize your success. From feasibility studies to commissioning, we support you at every stage, ensuring efficient, sustainable, and impactful outcomes:<br/>
<b>• Optimized track design and construction:</b> Our team of experienced railway engineers possesses a deep understanding of track geometry, materials, and construction methodologies. We also focus on minimizing costs without compromising safety and ride quality.<br/>
<b>• Enhanced rail system integration:</b> Modern railway systems are intricate networks of infrastructure. We specialize in seamless integration of signalling, communication, power supply, and station systems.<br/>
<b>• Comprehensive project lifecycle support:</b> From feasibility studies to commissioning, we provide end-to-end guidance throughout the project lifecycle.<br/>
Join us in transforming railway networks into engines of progress.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
