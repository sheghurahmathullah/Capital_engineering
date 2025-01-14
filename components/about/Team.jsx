import { teamData } from "@/data/team";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Team() {
  return (
    <div className="team-area-1 space-bottom overflow-hidden">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {/* CEO Message */}
            <div className="title-area text-center">
              <h2 className="sec-title">Message from our CEO and Managing Director</h2>
              <p className="mt-4">
                Our team is driven by an unwavering pursuit of excellence, always striving to surpass expectations. We firmly believe in the power of traditions, seamlessly blending them with our innovative approach. Every project we undertake not only embodies a unique artistic image but also seamlessly integrates functional solutions. 
                <br />
                <br />
                We understand that engineering is both a science and an art, and we skillfully merge the two to create awe-inspiring structures that stand as testaments to our creativity and technical prowess. From the initial concept to the final execution, we infuse our projects with a touch of ingenuity, transforming mere structures into captivating masterpieces. With each endeavor, we embark on a journey to redefine possibilities and leave an indelible mark on the landscape of engineering.
                <br />
                <br />
                Join us on this remarkable adventure where tradition meets innovation, and every project is a testament to our passion for exceptional design and functional brilliance.
              </p>
            </div>

            {/* Our Team Section */}
            <div className="title-area text-center mt-5">
              <h2 className="sec-title">Our Team Behind The Studio</h2>
              <p className="mt-4">
                At Capital Engineering Consultancy, we take immense pride in the cohesive and talented team that drives our engineering consultancy to new heights. With a shared passion for innovation and a commitment to excellence, our team members bring a diverse range of expertise, experiences, and perspectives to every project we undertake.
                <br />
                <br />
                Collaboratively, we embrace challenges and work tirelessly to deliver superior solutions to our clients across various industries. Our team consists of highly skilled professionals who possess a deep understanding of the engineering field. From civil and structural engineers to mechanical and electrical specialists, we have assembled a diverse group of experts capable of tackling the most complex and demanding projects. With a focus on continuous learning and professional development, our team stays at the forefront of technological advancements, industry standards, and best practices.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container">
        <div className="row gy-4 justify-content-center">
          {teamData.slice(0, 4).map((elm, i) => (
            <div key={i} className="col-lg-3 col-md-6">
              <div className="team-card">
                <div className="team-card_img">
                  <Image
                    width={306}
                    height={380}
                    src={elm.imageSrc}
                    alt="Team Image"
                  />
                </div>
                <div className="team-card_content">
                  <h3 className="team-card_title">
                    <Link scroll={false} href={`/team-details/${elm.id}`}>
                      {elm.name}
                    </Link>
                  </h3>
                  <span className="team-card_desig">{elm.designation}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}
