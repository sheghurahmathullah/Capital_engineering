import Image from "next/image";
import React from "react";

export default function Features() {
  return (
    <div className="why-area-1 space bg-theme shape-mockup-wrap">
      <div className="container">
        <div className="row align-items-center">
          {/* Vision Section */}
          <div className="col-lg-6">
            <div className="title-area mb-45">
              <h2 className="sec-title">Our Vision</h2>
            </div>
            <p>
              The vision of Capital Engineering Consultancy is to strive towards attaining the esteemed status of being a wholly trusted partner in the continuous growth and development of the construction horizon in the world. By consistently delivering exceptional services and innovative solutions, we aim to foster unwavering confidence and reliance among our clients and stakeholders, solidifying our position as a respected authority in the field. Our unwavering commitment to excellence, integrity, and professionalism will drive us to actively contribute to the advancement of the construction industry around the world, shaping a brighter future for all stakeholders involved.
            </p>
          </div>
          <div className="col-lg-6">
            <div className="why-img-1-1 shape-mockup wow img-custom-anim-right animated" data-wow-duration="1.5s" data-wow-delay="0.2s">
              <Image
                width={838}
                height={778}
                src=""
                alt="Vision Image"
              />
            </div>
          </div>
        </div>

        <div className="row align-items-center mt-5">
          {/* Mission Section */}
          <div className="col-lg-6">
            <div className="why-img-1-1 shape-mockup wow img-custom-anim-left animated" data-wow-duration="1.5s" data-wow-delay="0.2s">
              <Image
                width={838}
                height={778}
                src="" // Use a different image for the mission if needed
                alt="Mission Image"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="title-area mb-45">
              <h2 className="sec-title">Our Mission</h2>
            </div>
            <p>
              The mission of our engineering consultancy is to consistently deliver exceptional value and unwavering excellence by providing meticulously engineered solutions. With a steadfast commitment to innovation, expertise, and customer satisfaction, we strive to exceed expectations and set new benchmarks within the industry. By leveraging cutting-edge technologies and a highly skilled team of professionals, we aim to address complex challenges with tailored, sustainable, and cost-effective solutions. Our unwavering dedication to quality and precision ensures that each project we undertake is executed to the highest standards, resulting in long-term success and satisfaction for our clients. Through our engineered solutions, we endeavor to make a positive and lasting impact on the built environment, fostering sustainable development and enhancing the overall quality of life for communities we serve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
