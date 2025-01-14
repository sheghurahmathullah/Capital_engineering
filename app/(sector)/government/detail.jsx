"use client";
import { allPortfolio } from "@/data/portfolio";
import Image from "next/image";
import Slider from "react-slick";
import government from "@/public/assets/images/government.png";
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
                  src={government}
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
                      href="/sector/commercial"
                      style={{ color: "black" }}
                      className="hover-underline"
                    >
                      Commercial Projects
                    </a>
                    <a
                      href="/sector/oil-and-gas"
                      style={{ color: "black" }}
                      className="hover-underline"
                    >
                      Oil and Gas
                    </a>
                    <a
                      href="/sector/healthcare"
                      style={{ color: "black" }}
                      className="hover-underline"
                    >
                      Health Care
                    </a>
                    <a
                      href="/sector/hospitality"
                      style={{ color: "black" }}
                      className="hover-underline"
                    >
                      Hospitality
                    </a>
                    <a
                      href="/sector/education"
                      style={{ color: "black" }}
                      className="hover-underline"
                    >
                     Education
                    </a>
                    <a
                      href="/sector/tank-farms"
                      style={{ color: "black" }}
                      className="hover-underline"
                    >
                     Tank Farm
                    </a>
                    <a
                      href="/sector/power-and-energy"
                      style={{ color: "black" }}
                      className="hover-underline"
                    >
                     Power and Energy
                    </a>
                    <a
                      href="/sector/roads-and-infrastructure"
                      style={{ color: "black" }}
                      className="hover-underline"
                    >
                     Roads and Infrastructure
                    </a>
                    <a
                      href="/sector/religious"
                      style={{ color: "black" }}
                      className="hover-underline"
                    >
                     Religous Projects
                    </a>
                    <a
                      href="/sector/government"
                      style={{ color: "black" }}
                      className="hover-underline"
                    >
                     Government Projects
                    </a>
                    <a
                      href="/sector/industrial"
                      style={{ color: "black" }}
                      className="hover-underline"
                    >
                     Industrial Sectors
                    </a>
                    <a
                      href="/sector/railways"
                      style={{ color: "black" }}
                      className="hover-underline"
                    >
                     Railways
                    </a>
                    <a
                      href="/sector/shelters"
                      style={{ color: "black" }}
                      className="hover-underline"
                    >
                     Shelter
                    </a>
                    <a
                      href="/sector/residential-and-villa"
                      style={{ color: "black" }}
                      className="hover-underline"
                    >
                     Residential and Villa
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="title-area mb-35">
              <h2 className="sec-title">Government Projects</h2>
              <p className="sec-text mt-30">
              At Capital Engineering Consultancy, we recognize that government projects are the backbone of national progress. These initiatives serve as catalysts for community well-being, economic growth, and global leadership. We work in close partnership with public entities, working on infrastructure solutions that align with national priorities and community aspirations. Whether it’s municipal facilities, industrial complexes, or iconic headquarters, we are committed to delivering results that reflect innovation, functionality, and sustainability.
              </p>
              
            </div>
            <h3>Expertise Rooted in Public Sector Understanding</h3>
            <p className="sec-text mb-n1">
            Government projects require a deep understanding of public infrastructure demands, compliance with regulatory frameworks, and seamless coordination across diverse stakeholders. Our team brings extensive experience in working with various government projects in UAE, in designing efficient, future-ready facilities that serve the public welfare. With precision planning and a commitment to excellence, we provide tailored solutions that ensure smooth project execution and sustainable outcomes, aligning with the UAE’s vision for innovation and growth.
            </p>
            <h3 className="mt-35">Our Expertise at a Glance</h3>
            <p className="sec-text mb-n1">
            <b>• Holistic Planning:</b> Addressing every aspect of public sector infrastructure, from urban design to environmental compliance.<br/>
<b>• Precision Execution:</b> Leveraging advanced technologies such as BIM to ensure seamless project delivery.<br/>
<b>• Sustainability Integration:</b> Embedding eco-friendly practices to create infrastructure that lasts for generations.

            </p>
            <h3 className="mt-35">Shaping the Nation’s Future Together</h3>
            <p className="sec-text mb-n1">
            At Capital Engineering Consultancy, we don’t just build infrastructure; we create the foundation for societal advancement. Together, let’s turn your vision into reality, empowering communities and shaping the UAE’s global leadership.

            </p>
          </div>
          <div className="col-lg-12">
            <div className="inner__page-nav space-top mt-n1 mb-n1">
              <a href="#" className="nav-btn">
                <i className="fa fa-arrow-left"></i>
                <span>
                  <span className="link-effect">
                    <span className="effect-1">Previous Post</span>
                    <span className="effect-1">Previous Post</span>
                  </span>
                </span>
              </a>
              <a href="#" className="nav-btn">
                <span>
                  <span className="link-effect">
                    <span className="effect-1">Next Post</span>
                    <span className="effect-1">Next Post</span>
                  </span>
                </span>
                <i className="fa fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
