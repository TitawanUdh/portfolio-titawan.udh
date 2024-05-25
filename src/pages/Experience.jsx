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
      detail: `This website is about Ceramic Studio. It's online Shop that's can show all of Ceramic product and told a detail of product. My responsibilities are coding frontend development. At that's time I didn't know about Javascript I use just HTML and CSS for this project.`
    },
    {
      id: 2,
      title: 'Internship Project',
      subTitle: 'When I was internship at Praxic company',
      img: `${imgPraxicel}`,
      detail: `My responsibilities are adjust design of company's website by choosing in 3 theme colors and then fixng code in Visual Stidio program within clinet of Angular and language are HTML, SCSS, JavaScript, and TypeScript. Without that I have to  create a new 1 page about display graph and favorite folders.`
    },
    {
      id: 3,
      title: 'WAN THAI INDUSTRY COMPANY',
      subTitle: 'My first job',
      img: `${imgPraxicel}`,
      detail: `I work at YUMYUM company.`
    },

  ]

  return (
    <div
      style={{
        backgroundImage: `url(${imgBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
        position: "relative",
      }}
    >
      <div className="text-header-title end-animation">Experiences</div>
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
                    <Col className="col-6">
                      <div className="p-3">
                        <Image src={d.img} style={{ width: "700px" }} />
                      </div>
                    </Col>
                    <Col className="col-6 d-flex justify-content-center">
                      <div className="align-middle ">
                        <div style={{
                          marginLeft: '100px'
                        }}>
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
