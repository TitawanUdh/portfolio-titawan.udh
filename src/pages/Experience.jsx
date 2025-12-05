import React, { useState } from "react";
import imgBg from "../images/background.png";
import img1 from "../images/personal.jpg";
import imgPraxicel from "../images/praxical.png";
import imgWanThai from "../images/imgWanThai-2.png";
import imgCeremic from "../images/ceramic.png";
import imgAK from "../images/AK-friend.jpg";
import imgSKY from "../images/HRMS.jpg";
import imgBioLink from "../images/BioLink.jpg";
import imgOwnPj from "../images/MoneySplitter.png";
import imgMoney from "../images/BioLink.png";
import { Card, Carousel, Col, Image } from "react-bootstrap";

function ExperiencePage() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const data = [
    {
      id: 1,
      title: "Ceramic Project",
      subTitle: "When I was 3rd year at university",
      img: `${imgCeremic}`,
      detail: `This website is about Ceramic Studio. It's an online Shop that can show all of the Ceramic products and tell a detail of the product. My responsibilities are coding frontend development. At that time I didn't know about JavaScript I used just HTML and CSS for this project.`,
    },

    {
      id: 2,
      title: "Internship Project",
      subTitle: "Internship program at Praxic company",
      img: `${imgPraxicel}`,
      detail: `My first duty was the meeting minutes report, and then I had a chance to design a little part such as the loading tab. My final internship project is to design and create an Organization website. It makes me know the working process from design, mock-up, and creating the website.`,
    },
    {
      id: 3,
      title: "Work and Travel Program",
      subTitle: "I was work and travel in Homer, Alaska, USA",
      img: `${imgAK}`,
      detail: `My responsibilities are housekeeping, front desk, and kitchen assistant for 3-4 months, and in the last month of the program I travel`,
    },
    {
      id: 4,
      title: "WAN THAI INDUSTRY COMPANY",
      subTitle: "Project Management",
      img: `${imgWanThai}`,
      detail: `This is my first job in Thailand. My position is Project Management. The project that I handle is the WMS (Warehouse Management Systems) project. I have a chance to design a Wan Thai app for employees to increase comfort in working.`,
    },
    {
      id: 5,
      title: "SKYICT COMPANY",
      subTitle: "Frontend Developer",
      img: `${imgSKY}`,
      detail: `I worked at SKYICT as a Developer Frontend. My duty is to develop an organization website such as HR web, Portal Organize web, and Check in/ check out for employee web. We use HTML, CSS, and JavaScript language in the ReactJS library.`,
    },
    {
      id: 6,
      title: "BIO LINK",
      subTitle: "Freelance Project",
      img: `${imgBioLink}`,
      detail: `A small website page that aggregates all of a user's important links (such as other social media links, online store, portfolio, or content) in one place, making it easily accessible to followers from the limited space on their social media profile page.`,
    },
    {
      id: 7,
      title: "Money Splitter",
      subTitle: "Hobby Project",
      img: `${imgMoney}`,
      detail: `A Free website for calculating personal income tax for expenses, additional investment reports with graphs of taxes to be paid and money left for investments.`,
    },
  ];

  return (
    <div
      className="experience-bg"
      style={{
        backgroundImage: `url(${imgBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="text-header-title-2 d-flex justify-content-start end-animation">
        EXPERIENCES
      </div>

      <div className="p-3 w-100 d-flex justify-content-center">
        <Card
          className="border-0 experience-card"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",
          }}
        >
          <Carousel
            className="experience-carousel"
            activeIndex={index}
            onSelect={handleSelect}
          >
            {data.map((d, i) => (
              <Carousel.Item key={i}>
                <Col xl={12}>
                  <div className="d-flex row align-items-center">
                    <Col className="col-xl-6">
                      <div className="p-3 d-flex justify-content-center">
                        <Image src={d.img} className="img-experience" />
                      </div>
                    </Col>
                    <Col className="col-xl-6 d-flex justify-content-center">
                      <div className="align-middle">
                        <div className="text-title-ex">
                          <h4>{d.title}</h4>
                          <span className="text-secondary">{d.subTitle}</span>
                        </div>
                        <Card
                          className="card-info"
                          style={{ backgroundColor: "#F1E1E2", border: "none" }}
                        >
                          <p>{d.detail}</p>
                        </Card>
                      </div>
                    </Col>
                  </div>
                </Col>
              </Carousel.Item>
            ))}
          </Carousel>
        </Card>
      </div>
      <div>
        <Card className="m-3 p-3 d-flex justify-content-center card-ex-mobile border-0">
          {data.map((d, i) => (
            <div key={i}>
              <div className="p-3 pt-4 pb-2 d-flex justify-content-start">
                <h3>
                  {d.id}. {d.title}
                </h3>
              </div>
              <p className="m-3 mt-0 pb-3">{d.subTitle}</p>
              <hr />
              <div className="d-flex justify-content-center">
              <Image className="img-experience" src={d.img} />
             
              </div>
              <div className="m-3 mt-4 mb-5 card-info-mobile">
               <p>{d.detail}</p></div>
               <hr />
            </div>
            
          ))}
        </Card>
      </div>
    </div>
  );
}

export default ExperiencePage;
