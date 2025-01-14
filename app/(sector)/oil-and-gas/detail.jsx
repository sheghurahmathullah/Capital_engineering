"use client";
import { allPortfolio } from "@/data/portfolio";
import Image from "next/image";
import Slider from "react-slick";
import oilandgas from "@/public/assets/images/oilandgas.png";
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
                  src={oilandgas}
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
              <h2 className="sec-title">Oil and Gas</h2>
              <p className="sec-text mt-30">
              At Capital Engineering Consultancy, we partner with you to tackle the challenges of oil and gas operations, offering practical solutions that improve efficiency, support sustainability, and deliver real results.
              </p>
              
            </div>
            <h3>How We Shape the Future of the Oil & Gas Sector </h3>
            <p className="sec-text mb-n1">
            Our proven expertise in various projects in the UAE, India, and Iraq allows us to address the challenges of both onshore and offshore oil and gas operations, with a focus on:<br/>
<b>• Refinery Optimisation:</b> Maximizing efficiency and reliability to meet rigorous safety standards with customized strategies designed for your operations.<br/>
<b>• Pipeline and Storage Systems:</b> Building infrastructure that ensures durability, compliance, and environmental sustainability, safeguarding your assets at every stage.<br/>
<b>• Oilfield Development:</b> From feasibility studies to execution, we offer complete support to make sure your oilfields are efficient, scalable, and sustainable.<br/>
<b>• Offshore Platforms:</b> Designing strong platforms for offshore oil and gas operations to achieve excellence under the most challenging conditions.<br/>
<b>• Sustainable Practices:</b> Promoting eco-friendly engineering solutions for a greener oil and gas industry.
            </p>
            <h3 className="mt-35">Delivering Excellence Through Expertise</h3>
            <p className="sec-text mb-n1">
            At Capital Engineering Consultancy, our promise of excellence is backed by:<br/>
<b>• Personalized Solutions:</b> Building strategies designed to meet your specific operational goals.<br/>
<b>• Regulatory Compliance:</b> Ensuring full adherence to local and global oil and gas industry standards.<br/>
<b>• Seamless Execution:</b> With proper planning and execution, we ensure projects are delivered on time and within budget.<br/>
<b>• Safety and Sustainability:</b> Making oil and gas operations safer and eco-friendlier.
            </p>
            <h3 className="mt-35">Let’s Build the Future Together</h3>
            <p className="sec-text mb-n1">
            In the oil and gas industry, success requires more than technical skills - it requires vision, adaptability, and a commitment to progress.
At Capital Engineering Consultancy, we stand by you as a trusted partner, helping you achieve operational excellence, modernise infrastructure, and embrace sustainable practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
