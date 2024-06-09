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
        grade: 3.75,
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
    gender: "Women",
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

  console.log("imgModel", imgModel);

  const handleClose = () => {
    setOnModel(false);
  };

  return (
    <>
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
        <div className="text-header-title end-animation">Contact</div>

        <div className="p-3">
          <Card
            className="p-4 border-0"
            style={{
              backgroundColor: "rgba(225, 234, 249, 0.8)",
            }}
          >
            <Row className="">
              <Col xl={12}>
                <div className="p-3">
                  {data && (
                    <div className="d-flex justify-content-center">
                      <div className="col-6">
                        <div className="d-flex justify-content-center">
                          <Image
                            src={data.img}
                            style={{ width: "400px", borderRadius: "20px" }}
                          />
                          {console.log("data.img", data.img)}
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex">
                          <Card.Body
                            style={{
                              backgroundColor: "white",
                              border: "none",
                              borderRadius: "20px",
                            }}
                            className="p-4"
                          >
                            <Row>
                              <Col xl={12}>
                                <div className="d-flex">
                                  <div className="col-5 ">
                                    <div className="m-3 mt-2 mb-0 me-0">
                                      <h2 className="name">{data.name_en}</h2>
                                      <h3 className="surname">
                                        {data.surname_en}
                                      </h3>
                                    </div>
                                    <div className="m-4 mb-0">
                                      <p>Age: {data.age}</p>
                                      <p>Date of Birth: {data.birthday}</p>
                                      <p>Gender: {data.gender}</p>
                                      <p>E-mail: {data.e_mail}</p>
                                      <p>Phone Number: {data.phone_no}</p>
                                    </div>
                                  </div>

                                  <div className="col-7">
                                    <Card
                                      className="border-0 p-4 pt-3"
                                      style={{
                                        backgroundColor: "#FBEEE6",
                                        maxWidth: "500px",
                                        height: "180px",
                                      }}
                                    >
                                      <Row className="d-flex">
                                        <div className="col-12 d-flex">
                                          <div className="col-7 p-2">
                                            <p>{data.address}</p>
                                          </div>
                                          <div className="col-5">
                                            <span className="d-flex justify-content-center mb-3">
                                              {" "}
                                              <iframe
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.8210928908406!2d100.6073212!3d13.7896562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29defc14fa54f%3A0x4189d0b58b70d4d0!2z4LiL4Lit4LiiIOC4peC4suC4lOC4nuC4o-C5ieC4suC4pyA2OSDguYHguILguKfguIfguKrguLDguJ7guLLguJnguKrguK3guIcg4LmA4LiC4LiV4Lin4Lix4LiH4LiX4Lit4LiH4Lir4Lil4Liy4LiHIOC4geC4o-C4uOC4h-C5gOC4l-C4nuC4oeC4q-C4suC4meC4hOC4oyAxMDMxMA!5e0!3m2!1sth!2sth!4v1717310247301!5m2!1sth!2sth"
                                                style={{
                                                  width: "200px",
                                                  height: "150px",
                                                  borderRadius: "10px",
                                                }}
                                                allowfullscreen={true}
                                              />
                                            </span>
                                          </div>
                                        </div>
                                      </Row>
                                    </Card>

                                    <div className=" m-1 mt-4">
                                      <p className="">Education:</p>
                                      {data.education &&
                                        data.education.map((d, i) => (
                                          <>
                                            <div
                                              className={`d-flex justify-content-start gap-2 align-middle ${
                                                d.id === onSchool
                                                  ? "on-select"
                                                  : "p-2"
                                              }`}
                                              key={i}
                                              onClick={() =>
                                                handleModelGrade(d)
                                              }
                                            >
                                              <Image
                                                src={d.img}
                                                className="m-1 mb-0 me-2"
                                                style={{
                                                  width: "40px",
                                                  height: "40px",
                                                }}
                                              />
                                              <div
                                                className={`d-flex m-1 mt-2 mb-0 me-0`}
                                              >
                                                <p>
                                                  {" "}
                                                  {d.school}{" "}
                                                  <span className="bg-grade">
                                                    {d.grade}
                                                  </span>
                                                </p>
                                              </div>
                                            </div>
                                          </>
                                        ))}
                                    </div>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </Card.Body>
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
