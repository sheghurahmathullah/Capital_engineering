import { awardsData } from "@/data/awards";  
import Link from "next/link";
import React from "react";

export default function Awards() {
  return (
    <div className="award-area-1 space overflow-hidden">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h2 className="text-center mb-4">Our Philosophy</h2>
            <div className="mb-5">
              <h3>Collaboration as the Cornerstone</h3>
              <p>
                We firmly believe that collaboration is the key to unlocking groundbreaking solutions. Our team thrives on the exchange of ideas, knowledge sharing, and cross-functional collaboration. By fostering a supportive and inclusive work environment, we encourage open communication, enabling our team members to leverage each other's expertise to overcome challenges and deliver innovative results. We believe that the collective intelligence of our team is far greater than the sum of its parts.
              </p>
            </div>
            <div className="mb-5">
              <h3>Client-Centric Approach</h3>
              <p>
                We understand that every client is unique and has distinct requirements. That's why our team places a strong emphasis on building long-term relationships with our clients. By actively listening, engaging in meaningful dialogue, and gaining a deep understanding of their needs, we develop tailored solutions that address their specific challenges. We consider ourselves as partners in our clients' success and are dedicated to delivering exceptional value through our expertise, reliability, and integrity.
              </p>
            </div>
            <div className="mb-5">
              <h3>Adaptability and Agility</h3>
              <p>
                The engineering landscape is constantly evolving, and our team thrives on embracing change. We are adept at quickly adapting to new technologies, methodologies, and emerging trends. Our agile mindset allows us to respond to evolving project requirements, optimize processes, and deliver results efficiently. We proactively seek out innovative approaches and are not afraid to challenge conventional thinking to find the most effective solutions for our clients.
              </p>
            </div>
            <div className="mb-5">
              <h3>Beyond Technical Excellence</h3>
              <p>
                While technical excellence is a hallmark of our team, we recognize that success in engineering consultancy goes beyond technical expertise alone. Our team members possess exceptional communication skills, problem-solving abilities, and a strong focus on project management. We excel at effectively conveying complex ideas to diverse stakeholders and ensuring seamless coordination among multidisciplinary teams. Our commitment to delivering projects on time and within budget is unwavering.
              </p>
            </div>
            <div className="mb-5">
              <h3>A Culture of Excellence</h3>
              <p>
                At Capital Engineering Consultancy, we foster a culture of excellence and continuous improvement. We value the professional growth and well-being of our team members, providing them with ample opportunities for development, training, and advancement. By nurturing a positive work environment, we encourage creativity, collaboration, and a healthy work-life balance.
              </p>
            </div>
            <div className="mb-5">
              <h3>Conclusion</h3>
              <p>
                Our team at Capital Engineering Consultancy is the driving force behind our success as an engineering consultancy. With a diverse range of expertise, a client-centric approach, and an unwavering commitment to excellence, we are well-positioned to take on any engineering challenge that comes our way. Together, we strive to exceed expectations, create lasting partnerships, and shape a better future through innovative engineering solutions.
              </p>
            </div>

            {/* Adding space after philosophy */}
            <div className="mb-5" />  {/* Added gap after the last philosophy section */}

            <h2 className="text-center my-4">Awards</h2>
            <ul className="award-wrap-area">
              {awardsData.map((elm, i) => (
                <li key={i} className="single-award-list">
                  <span className="award-year">{elm.year}</span>
                  <div className="award-details">
                    <h4>
                      <Link scroll={false} href="/about">
                        {elm.name}
                      </Link>
                    </h4>
                    <p>{elm.description}</p>
                  </div>
                  <span className="award-tag">{elm.role}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
