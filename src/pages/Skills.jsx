import React, { useState } from "react";
import imgBg from "../images/background.png";
import imgCer1 from "../images/CER-1.png";
import imgCer2 from "../images/CER-2.png";
import imgCer3 from "../images/CER-3.png";
import imgPhotoL1 from "../images/PIC-L1.jpg";
import imgPhotoL2 from "../images/PIC-L2.jpg";
import imgPhotoL3 from "../images/PIC-L3.jpg";
import imgPhotoL4 from "../images/PIC-L4.jpg";
import imgPhotoL5 from "../images/PIC-L5.jpg";
import imgPhotoL6 from "../images/PIC-L6.jpg";
import imgPhotoL7 from "../images/PIC-L7.jpg";
import imgPhotoL8 from "../images/PIC-L8.jpg";
import imgPhotoL9 from "../images/PIC-L9.jpg";
import imgPhotoL10 from "../images/PIC-L10.jpg";
import imgPhotoL11 from "../images/PIC-L11.jpg";
import imgPhotoL12 from "../images/PIC-L12.jpg";

import imgPhotoP1 from "../images/PIC-P1.jpg";
import imgPhotoP2 from "../images/PIC-P2.jpg";
import imgPhotoP3 from "../images/PIC-P3.jpg";
import imgPhotoP4 from "../images/PIC-P4.jpg";
import imgPhotoP5 from "../images/PIC-P5.jpg";
import imgPhotoP6 from "../images/PIC-P6.jpg";
import imgPhotoP7 from "../images/PIC-P7.jpg";
import imgPhotoP8 from "../images/PIC-I6.jpg";
import imgPhotoP9 from "../images/PIC-I7.jpg";

import {
  Button,
  ButtonGroup,
  ButtonToolbar,
  Card,
  Form,
  Image,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { Modal } from "antd";
import Skillimage from "../components/Skillimage";

function SkillsPage() {
  const skills = [
    {
      id: 0,
      skill: "HTML",
      percent: 95,

      detail:
        "When I was student in university. I was study about programming class, that's class inspire to programming passion for me and that I try to find the way to learning by myself such as take online class, ask my friend about this skill and etc.",
      detailImg: [],
    },
    {
      id: 1,
      skill: "CSS",
      percent: 75,
      detail:
        "When I was study in university. I was study about programming class, that's class inspire to programming passion for me and that I try to find the way to learning by myself such as take online class, ask my friend about this skill and etc.",
      detailImg: [],
    },
    {
      id: 2,
      skill: "Javascript",
      percent: 75,
      detail:
        "I know this language when I got my first job at SKYICT, that's make me understand programming more and then I have to take a lot of online course because I still a beginner Developer, so I take course at Future Skill",
      detailImg: [
        {
          id: 1,
          typeName: "Certificate",
          type: [
            {
              id: 1,
              img: `${imgCer3}`,
              detail: "Basic Javascript for Frontend Developer",
            },
            {
              id: 2,
              img: `${imgCer2}`,
              detail: "Basic React 1: ความรู้พื้นฐานสำหรับ Components และ JSX",
            },
            {
              id: 3,
              img: `${imgCer1}`,
              detail:
                "Basic React 4: ฟังก์ชั่น Hook พื้นฐาน (Basic React Hooks)",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      skill: "UX/ UI",
      percent: 85,
      detail:
        "When I was study in university. I was study about designing webpage, also I was have designing skill and when I work at SKYICT I often design the webpage by myself because UX/UI position in my old company have just one person but we have a lot of project, so it's make me practice my UX/UI skill",
      detailImg: [],
    },
    {
      id: 4,
      skill: "Graphic Design",
      percent: 80,
      detail:
        "I was take a lot of course about graphic when I studying in university and artwork is my hobby, so I alway be fun when I do it",
      detailImg: [],
    },
    {
      id: 5,
      skill: "Photography",
      percent: 90,
      detail:
        "Photograph is my favorite hobby, and I was take this thing to my second job when I was studying",
      detailImg: [
        {
          id: 1,
          typeName: "Landscape",
          type: [
            {
              id: 1,
              img: `${imgPhotoL1}`,
              detail: "Landscape",
            },
            {
              id: 2,
              img: `${imgPhotoL2}`,
              detail: "Landscape",
            },
            {
              id: 3,
              img: `${imgPhotoL3}`,
              detail: "Landscape",
            },
            {
              id: 4,
              img: `${imgPhotoL4}`,
              detail: "Landscape",
            },
            {
              id: 5,
              img: `${imgPhotoL5}`,
              detail: "Landscape",
            },
            {
              id: 6,
              img: `${imgPhotoL6}`,
              detail: "Landscape",
            },
            {
              id: 8,
              img: `${imgPhotoL7}`,
              detail: "Landscape",
            },
            {
              id: 9,
              img: `${imgPhotoL8}`,
              detail: "Landscape",
            },
            {
              id: 10,
              img: `${imgPhotoL9}`,
              detail: "Landscape",
            },
            {
              id: 11,
              img: `${imgPhotoL10}`,
              detail: "Landscape",
            },
            {
              id: 12,
              img: `${imgPhotoL11}`,
              detail: "Landscape",
            },
            {
              id: 13,
              img: `${imgPhotoL12}`,
              detail: "Landscape",
            },
          ],
        },
        {
          id: 2,
          typeName: "Portrait",
          type: [
            {
              id: 1,
              img: `${imgPhotoP1}`,
              detail: "Portrait",
            },
            {
              id: 2,
              img: `${imgPhotoP2}`,
              detail: "Portrait",
            },
            {
              id: 3,
              img: `${imgPhotoP3}`,
              detail: "Portrait",
            },
            {
              id: 4,
              img: `${imgPhotoP4}`,
              detail: "Portrait",
            },
            {
              id: 5,
              img: `${imgPhotoP5}`,
              detail: "Portrait",
            },
            {
              id: 6,
              img: `${imgPhotoP6}`,
              detail: "Portrait",
            },
            {
              id: 7,
              img: `${imgPhotoP7}`,
              detail: "Portrait",
            },
          ],
        },
      ],
    },
  ];

  const [click, setClick] = useState(false);
  const [dataDetail, setDataDetail] = useState([]);
  const [dataImg, setDataImg] = useState([]);
  const [dataImgs, setDataImgs] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [dataModal, setDataModal] = useState(false);

  const handleClick = (d) => {
    setClick(true);
    setDataDetail(d);
    let detailImgMap = d.detailImg.map((img, index) => {
      return img;
    });
    setDataImg(detailImgMap);
  };

  const handleClickImg = (d) => {
    setIsModal(true);
    setDataModal(d ?? []);
  };

  const handleClose = () => {
    setIsModal(false);
  };

  const handleTypeImg = (d) => {
    setDataImgs(d.type);
  };
  return (
    <div
      className="background-container"
      style={{
        backgroundImage: `url(${imgBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div className="text-header-title end-animation">SKILLs</div>
      <div className="col-12 d-flex display-phone">
        <div className="col-md-6 col-xl-6 orders-custom-1 col-12">
          <div className="p-5 pt-4">
            {skills.map((d, i) => (
              <>
                {" "}
                <div className="text-title">{d.skill}</div>
                <div className="m-5 mt-2 mb-0">
                  <span className="pointer-events">
                    <Form.Range
                      onClick={() => {
                        handleClick(d);
                      }}
                      className="custom-range animated"
                      value={d.percent}
                      id={`range-${d.id}`}
                    />
                  </span>{" "}
                </div>
              </>
            ))}{" "}
          </div>
        </div>
        <div className="col-md-6 col-xl-6 col-12 orders-custom-2">
          {click ? (
            <div className="m-4 mt-0 pt-0 cover-card">
              <Card
                className="p-5 border-0"
                style={{
                  backgroundColor: "rgba(225, 234, 249, 0.8)",
                }}
              >
                <h3>{dataDetail.skill}</h3>
                <div>{dataDetail?.detail}</div>
                {dataDetail?.id &&
                (dataDetail?.id === 2 || dataDetail?.id === 5) ? (
                  <Card.Body
                    // style={{ minWidth: "600px", maxWidth: "800px" }}
                    className="overflow-auto card-img"
                  >
                    {" "}
                    <div className="d-flex">
                      {dataImg.map((d, i) => (
                        <Button
                          variant="light"
                          className="m-0 me-2 mt-0 mb-3"
                          onClick={() => handleTypeImg(d)}
                          key={i}
                        >
                          {d?.typeName}
                        </Button>
                      ))}
                    </div>
                    <div className="d-flex gap-2">
                      {dataImgs &&
                        dataImgs.map((d, i) => (
                          <>
                            <ButtonToolbar>
                              <OverlayTrigger
                                placement="top"
                                overlay={
                                  <Tooltip id="tooltip-detail">
                                    {d.detail}
                                  </Tooltip>
                                }
                              >
                                <>
                                  <Image
                                    className="img-size"
                                    key={i}
                                    src={d.img}
                                    onClick={() => handleClickImg(d.img)}
                                  />
                                </>
                              </OverlayTrigger>
                            </ButtonToolbar>
                          </>
                        ))}{" "}
                    </div>
                  </Card.Body>
                ) : (
                  <></>
                )}
              </Card>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
      {isModal ? (
        <>
          <Modal
            width={600}
            open={isModal}
            onCancel={handleClose}
            cancelButtonProps={{ hidden: true }}
            okButtonProps={{ hidden: true }}
          >
            <div className="d-flex justify-content-center">
              <Image src={dataModal?.img} style={{ width: "500px" }} />
            </div>
          </Modal>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default SkillsPage;
