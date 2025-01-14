"use client";
import { allPortfolio } from "@/data/portfolio";
import Image from "next/image";
import Slider from "react-slick";
import commercial1 from "@/public/assets/images/commercial1.png";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
export default function SectorDetails() {
  //  const itemsImages = [
  //     commercial1,
  //   ];
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
        {/* <Slider className="row global-carousel default" {...slideroptions}> */}

        <div className="col-xl-12">
          <div className="project-inner-thumb mb-80 wow img-custom-anim-top animated">
            <Image
              width={1296}
              height={700}
              className="w-100"
              src={commercial1}
              alt="img"
            />
          </div>
        </div>

        {/* </Slider> */}

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
              <h2 className="sec-title">Commercial Projects</h2>
              <p className="sec-text mt-30">
                At Capital Engineering Consultancy, we know that commercial
                spaces must seamlessly blend functionality, efficiency, and
                aesthetics to create environments that foster success. Whether
                it’s retail, office spaces, or mixed-use developments, we work
                closely with clients to deliver designs that support operational
                goals and enhance customer engagement.
              </p>
            </div>
            <h3>Designing for Business Success</h3>
            <p className="sec-text mb-n1">
              Commercial projects come with unique challenges, from optimizing
              high-traffic areas to integrating sustainable technologies. We
              specialize in creating spaces that reflect your business goals and
              adapt to future demands:
              <br />
              <b>• Retail Excellence:</b> Designing layouts that enhance
              customer experiences, maximize space utilization, and boost foot
              traffic.
              <br />
              <b>• Dynamic Office Spaces:</b> Crafting flexible, collaborative
              environments that drive employee productivity and satisfaction.
              <br />
              <b>• Mixed-Use Innovations:</b> Combining retail, residential, and
              office spaces into cohesive developments that cater to diverse
              user needs.
              <br />
              Our portfolio includes iconic projects like Lulu Group
              International, YKM Office, Talal Hypermarket, and Ramez Mall,
              demonstrating our ability to deliver spaces that prioritize
              functionality and user experience.
            </p>
            <h3 className="mt-35">
              Proven Expertise in Commercial Developments
            </h3>
            <p className="sec-text mb-n1">
              We offer expertise in structural engineering, advanced MEP
              solutions, and smart building technologies that improve
              performance while reducing operational costs. By utilizing tools
              like 3D modelling and Building Information Modelling (BIM), we
              ensure precision in every phase, from concept to execution.
            </p>
            <h3 className="mt-35">
              Partner with Us to Elevate Your Commercial Vision
            </h3>
            <p className="sec-text mb-n1">
              At Capital Engineering Consultancy, we aim to help you achieve
              commercial spaces that drive growth and create lasting
              impressions. Let’s collaborate to bring your business vision to
              life with expert precision and engineering excellence. Contact us
              today to start building commercial spaces that inspire success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
