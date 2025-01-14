"use client";
import { allPortfolio } from "@/data/portfolio";
import Image from "next/image";
import Slider from "react-slick";
import shelter from "@/public/assets/images/shelter.png";
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
                  src={shelter}
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
              <h2 className="sec-title">Shelters</h2>
              <p className="sec-text mt-30">
              At Capital Engineering Consultancy, we specialize in designing, constructing, and modernizing shelters and protective spaces. Our solutions include civil defense shelters, bomb shelters, government and industrial bunkers, safe rooms, prefabricated shelters, and other structures tailored to safeguard lives and assets during emergencies.

              </p>
              <p className="sec-text mt-30">
              Whether addressing natural disasters, conflicts, or chemical threats, our shelters provide robust protection and adaptability for a variety of scenarios.
              </p>
            </div>
            <h3>Designing for Safety and Sustainability</h3>
            <p className="sec-text mb-n1">
            We prioritize safety, accessibility, and sustainability in every project:<br/>
<b>• Structural Integrity:</b> Our shelters are designed to withstand extreme weather, seismic events, and other severe threats.<br/>
<b>• Health and Hygiene:</b> Features are integrated to maintain sanitary conditions, ensuring occupant safety during prolonged use.<br/>
<b>• Energy Efficiency:</b> By incorporating sustainable materials and technologies, we reduce energy consumption and operational costs.<br/>
<b>• Community Integration:</b> Our designs foster social cohesion, usability, and resilience, making them functional and adaptable for diverse needs.
            </p>
            <h3 className="mt-35">Expert Guidance at Every Stage</h3>
            <p className="sec-text mb-n1">
            From planning to post-construction, our team supports every phase of your project:<br/>
<b>• Assessment & Planning:</b> We conduct thorough evaluations of threats, requirements, and site conditions to create optimal solutions.<br/>
<b>• Design & Engineering:</b> Our innovative designs comply with civil defense standards or are tailored to meet specific client needs.<br/>
<b>• Construction & Installation:</b> Using efficient techniques and high-quality materials, we deliver durable, reliable structures.<br/>
<b>• Post-Construction Support:</b>  Ongoing maintenance and upgrades ensure shelters remain effective and resilient over time.
            </p>
            <h3 className="mt-35">Partner With Us & Make a Difference</h3>
            <p className="sec-text mb-n1">
            At Capital Engineering Consultancy, we believe in creating more than shelters—we create secure spaces that protect what matters most. Together, we can build solutions that offer safety, peace of mind, and resilience in the face of any challenge. Partner with us to make a lasting difference.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
