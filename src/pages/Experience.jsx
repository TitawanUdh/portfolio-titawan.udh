import React, { useState } from "react";
import imgBg from "../images/background.png";
import img1 from "../images/personal.jpg";
import { Card, Carousel, Image } from "react-bootstrap";

function ExperiencePage() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
    
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
    <Card>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <span style={{
            width: '50px',
        }}>
        <Image
          className="d-block w-100"
          src={img1}
          alt="First slide"
          style={{ height: '500px', objectFit: 'cover' }}

        /></span>
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=eee"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=e5e5e5"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Card>
   </div>
    </div>
  );
}

export default ExperiencePage;
