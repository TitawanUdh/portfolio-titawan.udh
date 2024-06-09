import React from "react";
import Image from "react-bootstrap/Image";
import imgBg from "../images/background.png";
import imgPersonal from "../images/personal.jpg";
import { Button } from "react-bootstrap";
import { GrLinkNext } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
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
      style={{
        backgroundImage: `url(${imgBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
        position: "relative",
      }}
    >
      <div className="p-5">
        <div className=" row">
          <div className="col-12 d-flex">
            <div className="col-6 orders-custom-1">
              <span className="d-flex justify-content-center ">
                <Image
                  className="border-img animated-image shadow"
                  src={imgPersonal}
                  fluid
                  style={{
                    minWidth: "100px",
                    maxWidth: "450px",
                    borderRadius: "20px",
                  }}
                />
              </span>
            </div>
            <div className="col-6 orders-custom-2 ">
              <div className="align-middle text-custom-end text-port">
                <span className="text-header-grey position-absolute start-animation">
                  {data.head_title}
                </span>
                <span className="text-header position-absolute start-animation">
                  {data.head_title}
                </span>
              </div>

              <div className="text-sub-header-name start-animation">
                {data.name}
              </div>
              <div className="text-sub-header-surname mt-0 start-animation">
                {data.surname}
              </div>
              <hr />
              <div className="text-position bottom-animation">
                {data.position}
              </div>
              <div className="d-flex justify-content-end  mt-4">
                <Button
                  className="button-next"
                  style={{
                    borderRadius: "20px",
                    minWidth: "100px",
                    backgroundColor: "#D341FF",
                    color: "white",
                  }}
                  variant=" shadow"
                  onClick={() => {
                    navigate("/skills");
                  }}
                >
                  <span className="text-button">Next</span> <GrLinkNext />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
