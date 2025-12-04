import React, { useState } from "react";
import imgPersonal from "../images/PIC-P1.jpg";
import { Card, Col, Form, Image, Row } from "react-bootstrap";
import imgBg from "../images/background.png";
import imgSchool from "../images/PIC-MN.png";
import imgUniversity from "../images/PIC-SWU.png";
import { Modal } from "antd";
import imgGradeMN1 from "../images/PIC-GradeMn1.jpg";
import imgGradeMN2 from "../images/PIC-GradeMn2.jpg";
import imgGradeSWU from "../images/gradeSWU.jpg";

function ContactPage() {
  const data = {
    img: `${imgPersonal}`,
    name_en: "Titawan",
    surname_en: "Udhayananandh",
    address:
      "5/5 Ladproad Rd, Wangthonglang District, Saphansong Sub-District Bangkok 10310",
    education: [
      {
        id: 1,
        school: "Our Lady of Perpetual Help School",
        grade: 3.25,
        img: `${imgSchool}`,
        identity: null,
        img_grade: [
          {
            id: 1,
            imgGrade: `${imgGradeMN1}`,
          },
          {
            id: 2,
            imgGrade: `${imgGradeMN2}`,
          },
        ],
      },
      {
        id: 2,
        school: "Srinakharinwirot University",
        grade: 3.57,
        identity: "second honor",
        img: `${imgUniversity}`,
        img_grade: [
          {
            id: 1,
            imgGrade: `${imgGradeSWU}`,
          },
        ],
      },
    ],
    age: "25 years old",
    gender: "Female",
    e_mail: "titawan.udh@gmail.com",
    phone_no: "088-908-8881",
    birthday: "06 June 1999",
  };

  const [onModel, setOnModel] = useState(false);
  const [onSchool, setOnSchool] = useState(false);
  const [imgModel, setDataModel] = useState({});

  const handleModelGrade = (d) => {
    setOnSchool(d.id);
    setOnModel(true);
    console.log("d", d);
    let dataImg = d?.img_grade.map((img) => {
      return img.imgGrade;
    });
    setDataModel(dataImg);
  };

  const handleClose = () => {
    setOnModel(false);
  };

  return (
    <>
   <div
  className="contact-bg"
  style={{
    backgroundImage: `url(${imgBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    minHeight: "100vh",
  }}
>
    <div className="contact-container ">

        <div className="text-header-title-2 end-animation">Contact</div>
        <div className="p-4 d-flex justify-content-center">
          <Card
            className=" border-0 card-contact"
            style={{
              backgroundColor: "rgba(225, 234, 249, 0.8)",
            }}
          >
            <Row>
              <Col xl={12} sm={12}>
                <div className="p-xl-3 ">
                  {data && (
                    <div className="row">
                      <div className="col-xl-5 col-sm-12 col-md-6 mb-sm-4">
                        <div className="d-flex justify-content-center me-sm-2  ">
                          <Image src={data.img} className="img-contact" />
                        </div>
                      </div>
                      <div className="col-xl-7 col-sm-12 col-md-6 pt-sm-3">
                        <div className="d-flex justify-content-center">
                          <Card className="p-4 card-white-info border-0">
                            <Row className="g-4">
                              {/* ฝั่งซ้าย : ข้อมูลส่วนตัว */}
                              <Col lg={6} xs={12}>
                                <div className="m-3 mt-2 mb-0 me-0 m-md-2 mb-md-4">
                                  <h2 className="name">{data.name_en}</h2>
                                  <h3 className="surname">{data.surname_en}</h3>
                                  <hr className="name-divider" />
                                </div>

                                <div className="m-4 m-md-2 mb-0 text-detail">
                                  <p>Age: {data.age}</p>
                                  <p>Date of Birth: {data.birthday}</p>
                                  <p>Gender: {data.gender}</p>
                                  <p>E-mail: {data.e_mail}</p>
                                  <p>Phone Number: {data.phone_no}</p>
                                </div>
                              </Col>

                              {/* ฝั่งขวา : แผนที่ + Education */}
                              <Col lg={6} xs={12}>
                                <Card className="border-0 p-xl-4 pb-md-0 pt-3 card-info-contact">
                                  <Row>
                                    <div>
                                      <span className="d-flex justify-content-center mb-3">
                                        <iframe
                                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.8210928908406!2d100.6073212!3d13.7896562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29defc14fa54f%3A0x4189d0b58b70d4d0!2z4LiL4Lit4LiiIOC4peC4suC4lOC4nuC4o-C5ieC4suC4pyA2OSDguYHguILguKfguIfguKrguLDguJ7guLLguJnguKrguK3guIcg4LmA4LiC4LiV4Lin4Lix4LiH4LiX4Lit4LiH4Lir4Lil4Liy4LiHIOC4geC4o-C4uOC4h-C5gOC4l-C4nuC4oeC4q-C4suC4meC4hOC4oyAxMDMxMA!5e0!3m2!1sth!2sth!4v1717310247301!5m2!1sth!2sth"
                                          className="iframe-contact"
                                          allowFullScreen={true}
                                        />
                                      </span>
                                    </div>
                                  </Row>
                                </Card>

                                <div className="text-detail mt-3">
                                  <p className="edu-info mb-3">Education:</p>

                                  {data.education &&
                                    data.education.map((d, i) => (
                                      <div
                                        key={i}
                                        onClick={() => handleModelGrade(d)}
                                        className={`edu-box d-flex justify-content-between align-items-center ${
                                          d.id === onSchool ? "on-select" : ""
                                        }`}
                                      >
                                        <div className="edu-main d-flex align-items-center gap-3">
                                          <Image
                                            src={d.img}
                                            className="edu-logo"
                                          />
                                          <span className="edu-school">
                                            {d.school}
                                          </span>
                                        </div>

                                        <span className="edu-grade">
                                          {d.grade}
                                        </span>
                                      </div>
                                    ))}
                                </div>
                              </Col>
                            </Row>
                          </Card>
                        </div>
                      </div>
                    </div>
                  )}
                </div>{" "}
              </Col>
            </Row>
          </Card>
        </div>
        </div>
      </div>
      {onModel && (
        <Modal
          width={1000}
          open={onModel}
          onCancel={handleClose}
          cancelButtonProps={{ hidden: true }}
          okButtonProps={{ hidden: true }}
        >
          <div className="p-2 d-flex justify-content-center">
            {imgModel.map((d, i) => (
              <div className="row" key={i}>
                <span className="gap-2 p-3">
                  <div
                    className=""
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      src={d}
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </span>
              </div>
            ))}
          </div>
        </Modal>
      )}
    </>
  );
}

export default ContactPage;
