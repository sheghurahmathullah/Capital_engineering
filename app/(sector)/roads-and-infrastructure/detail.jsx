"use client";
import { allPortfolio } from "@/data/portfolio";
import Image from "next/image";
import Slider from "react-slick";
import infrastructure from "@/public/assets/images/infrastructure.png";
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
                  src={infrastructure}
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
              <h2 className="sec-title">Roads and Infrastructure</h2>
              <p className="sec-text mt-30">
              At Capital Engineering Consultancy, we help you shape thriving communities with innovative and resilient road and infrastructure solutions. Whether it’s designing efficient roadways or optimizing utility networks, we focus on systems that meet modern demands while anticipating future needs.
              </p>
              
            </div>
            <h3>Solutions That Empower Growth </h3>
            <p className="sec-text mb-n1">
            Roads and infrastructure are more than pathways, they are lifelines that connect people, support economic growth, and enhance quality of life. With extensive experience in projects across the UAE and India, including residential development roads in Hoshi area, our approach integrates functionality, sustainability, and long-term performance into every project.<br/>
Our personalised solutions include:<br/>
<b>• Smart Roadway Design:</b> Streamlining traffic flow, reducing congestion, and ensuring safe and efficient transportation for all.<br/>
<b>• Advanced Drainage Systems:</b> Protecting urban areas from flooding with sustainable stormwater and wastewater management.<br/>
<b>• Integrated Utilities:</b> Connecting power, telecommunications, and water systems seamlessly to support daily life.<br/>
<b>• Public Safety Enhancements:</b> Designing eco-friendly lighting and pedestrian-friendly infrastructure to improve safety and accessibility.
            </p>
            <h3 className="mt-35">Why Capital Engineering Consultancy?</h3>
            <p className="sec-text mb-n1">
            At Capital Engineering Consultancy, we focus on creating roads and infrastructure that support your community's growth and improve daily life. With a deep understanding of sector challenges, we design solutions tailored to your needs thereby integrating sustainability, functionality, and long-term resilience. From seamless road designs to advanced drainage and utility systems, our approach ensures precision, safety, and success at every stage of your project.
            </p>
            <h3 className="mt-35">Let’s Build the Future of Connectivity </h3>
            <p className="sec-text mb-n1">
            Roads and infrastructure are the foundation of thriving cities. Partner with Capital Engineering Consultancy to create systems that connect and sustain.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
