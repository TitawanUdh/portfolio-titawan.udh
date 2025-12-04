import React from "react";
import Image from "react-bootstrap/Image";
import imgBg from "../images/background.png";
import imgPersonal from "../images/personal.jpg";
import { Button } from "react-bootstrap";
import { GrLinkNext } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import ExperiencePage from "./Experience";
function MainPage() {
  const data = {
    head_title: "portfolio",
    name: "Titawan",
    surname: "Udhayananandh",
    position: "frontend developer",
  };
  const navigate = useNavigate();
  return (
    <div
      className="background-container d-flex align-items-center"
      style={{
        backgroundImage: `url(${imgBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100vw",
      }}
    >
<div className="container p-5 pt-1 hero-container">
        <div className="row d-flex align-items-center">
          <div className="col-md-6 col-xl-6 col-12 orders-custom-2 text-center">
            <Image
              className="border-img animated-image shadow img-personal"
              src={imgPersonal}
              fluid
              style={{ borderRadius: "20px" }}
            />
          </div>

          <div className="col-md-6 col-xl-6 col-12 orders-custom-1">
        
            <div className="text-port header-wrapper start-animation">
              <span className="text-header">{data.head_title}</span>
            </div>
            <div className="text-sub-header-name start-animation">
              {data.name}
            </div>{" "}
            <div className="text-sub-header-surname mt-0 start-animation">
              {" "}
              {data.surname}{" "}
            </div>
            <hr />
            <div className="text-position bottom-animation">
              {data.position}
            </div>
            <div className="d-flex justify-content-end mt-4">
              <Button
                className="button-next"
                style={{
                  borderRadius: "20px",
                  minWidth: "100px",
                  backgroundColor: "#D341FF",
                  color: "white",
                }}
                onClick={() => navigate("/skills")}
              >
                <span className="text-button">Next</span> <GrLinkNext />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
