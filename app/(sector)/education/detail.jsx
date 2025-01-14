"use client";
import { allPortfolio } from "@/data/portfolio";
import Image from "next/image";
import Slider from "react-slick";
import education from "@/public/assets/images/education.png";
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
                  src={education}
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
              <h2 className="sec-title">Education</h2>
              <p className="sec-text mt-30">
              At Capital Engineering Consultancy, we specialize in transforming educational visions into reality. From concept to completion, we craft functional, safe, and future-ready spaces that empower learning and foster academic excellence. With projects like Pace Groups and VISS, we deliver customized solutions that meet the evolving needs of the education sector.
              </p>
             
            </div>
            <h3>How We Bring Educational Visions to Life </h3>
            <p className="sec-text mb-n1">
            
Every educational institution is unique, and we align our expertise to your specific goals. Here is how we can help:<br/>  
<b>• Smart and Functional Layouts:</b> Developing efficient layouts to optimize space utilization, ensuring classrooms, laboratories, and communal areas serve the educational mission effectively.<br/>  
<b>• Durable and Sustainable Structures:</b> Engineering buildings to stand the test of time with eco-friendly materials and designs that reduce environmental impact while maintaining structural integrity.<br/>  
<b>• Enhanced Safety Standards:</b> Designing facilities with advanced safety features, including secure entry points, fire-resistant materials, and compliance with all regulatory requirements.<br/>  
<b>• Scalable and Adaptable Solutions:</b> Creating designs that allow for easy expansion or modification as educational needs evolve, ensuring your institution remains future-ready.  



            </p>
            <h3 className="mt-35">Why Partner with Capital Engineering Consultancy?</h3>
            <p className="sec-text mb-n1">
            Our projects reflect our commitment to addressing the specific needs of schools and colleges, blending functionality with innovation to support holistic education.<br/>
<b>• Education-Centric Expertise:</b> Our designs reflect a deep understanding of the challenges and opportunities in educational environments.<br/>
<b>• Precision and Professionalism:</b> We combine technical expertise with practical solutions to create high-quality infrastructure.<br/>
<b>• Regulatory Compliance:</b> Every project meets the highest safety and education standards, ensuring operational peace of mind.<br/>
<b>• Collaborative Approach:</b> We work closely with clients to align every detail with their vision and requirements.

            </p>
            <h3 className="mt-35">Let’s Build Spaces That Inspire Learning</h3>
            <p className="sec-text mb-n1">
            From concept to completion, Capital Engineering Consultancy prioritizes precision, professionalism, and partnership. Let’s shape the future of education together.

            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
