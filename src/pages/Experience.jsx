import React, { useState } from "react";
import imgBg from "../images/background.png";
import img1 from "../images/personal.jpg";
import imgPraxicel from "../images/praxical.png";
import imgCeremic from "../images/ceramic.png";

import { Card, Carousel, Col, Image } from "react-bootstrap";

function ExperiencePage() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  
  const data = [
    {
      id: 1,
      title: 'Ceramic Project',
      subTitle: 'When I was 3rd year at university',
      img: `${imgCeremic}`,
      detail: `This website is about Ceramic Studio. It's an online Shop that can show all of the Ceramic products and tell a detail of the product. My responsibilities are coding frontend development. At that time I didn't know about JavaScript I used just HTML and CSS for this project.`
    },
    {
      id: 2,
      title: 'Internship Project',
      subTitle: 'Internship program at Praxic company',
      img: `${imgPraxicel}`,
      detail: `My first duty was the meeting minutes report, and then I had a chance to design a little part such as the loading tab. My final internship project is to design and create an Organization website. It makes me know the working process from design, mock-up, and creating the website.`
    },
    {
      id: 3,
      title: 'WAN THAI INDUSTRY COMPANY',
      subTitle: 'Project Management',
      img: `${imgPraxicel}`,
      detail: `This is my first job in Thailand. My position is Project Management. The project that I handle is the WMS (Warehouse Management Systems) project. I have a chance to design a Wan Thai app for employees to increase comfort in working.`
    },
    {
      id: 4,
      title: 'SKYICT COMPANY',
      subTitle: 'Frontend Developer',
      img: `${imgPraxicel}`,
      detail: `I worked at SKYICT as a Developer Frontend. My duty is to create or develop an organization website and we use HTML, CSS, and JavaScript language in the ReactJS library.`
    },

  ]

  return (
    <div
      style={{
        backgroundImage: `url(${imgBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    >
      <div className="text-header-title-2 end-animation">Experiences</div>
      <div className="p-3">
        <Card className="border-0"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.8)"

        }}>
          <Carousel className="card-info">
            {data.map((d,i) => 
            <Carousel.Item key={i}>
              <span
                style={{
                  width: "50px",
                }}
              >
                <Col xl={12}>
                  <div className="d-flex row align-items-center">
                    <Col className="col-xl-6 ">
                      <div className="p-3">
                        <Image src={d.img} className="img-experience"  />
                      </div>
                    </Col>
                    <Col className="col-xl-6 d-flex justify-content-center">
                      <div className="align-middle">
                        <div className="text-title-ex">
                        <h4>{d.title}</h4>
                        <span className="text-secondary">{d.subTitle}</span></div>
                        <Card
                          className="card-info"
                          style={{ backgroundColor: "#F1E1E2", border: "none" }}
                        >
                          <p>
                            {d.detail}
                          </p>
                        </Card>
                      </div>
                    </Col>
                  </div>
                </Col>
              </span>
              
            </Carousel.Item>
          )}
           
          </Carousel>
        </Card>
      </div>
    </div>
  );
}

export default ExperiencePage;
