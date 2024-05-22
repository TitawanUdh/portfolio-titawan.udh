import React, { useState } from "react";
import imgBg from "../images/background.png";
import { Card, Form, ProgressBar } from "react-bootstrap";

function SkillsPage() {
  const skills = [
    {
      id: 0,
      skill: "HTML",
      percent: 95,
   
      detail:
        "xxxx xx xxxxxx xxxxx xxxxxx xxx xxxxx xxxxxxx xxxxxx xxxxxxx xxxxxxxxxxx xxx xxxxx xxxxxxx xxxxxxxxxxx xxx xxxxx xxxxxxx xxxxxxxxxxx xxx xxxxx xxxxxxx xxxxxxxxxxx xxx xxxxx xxxxxxx xxxxxxx xxxx xx  xxxxxx xxxxx xxxxxx xxxxxxx xxxxxxxxxxx xxx xxxxx xxxxxxx xxxxxxxxxxx xxx xxxxx xxxxxxx xxxxxx xxxxxxx xxxxxxxxxxx xxx xxxxx xxxxxxx xxxxxxxxxxx xxx xxxxx xxxxxxx xxxxxxxxxxx xxx xxxxx xxxxxxx xxxxxx xxxx xx  xxxxxx xxxxx xxxxxx xxxxxxx xxxxxxxxxxx xxx xxxxx xxxxxxx xxxxxxxxxxx xxx xxxxx xxxxxxx xxxxxx xxxxxxx xxxxxxxxxxx xxx xxxxx xxxxxxx xxxxxxxxxxx xxx xxxxx xxxxxxx xxxxxxxxxxx xxx xxxxx xxxxxxx xxxxxxxxxxx xxx xxxxx xxxxxxx xxxxxxx xxxx xx  xxxxxx xxxxx xxxxxx xxxxxxx xxxxxxxxxxx xxx xxxxx xxxxxxx xxxxxxxxxxx xxx xxxxx xxxxxxx xxxxxx xxxxxxx xxxxxxxxxxx xxx xxxxx xxxxxxx xxxxxxxxxxx xxx xxxxx xxxxxxx xxxxxxxxxxx xxx xxxxx xxxxxxx xxxxxxxxxxx xxx xxxxx xxxxxxx xxxxxxx xxxx xx  xxxxxx xxxxx xxxxxx xxxxxxx xxxxxxxxxxx xxx xxxxx xxxxxxx xxxxxxxxxxx xxx xxxxx xxxxxxx xxxxxx xxxxxxx xxxxxxxxxxx xxx xxxxx xxxxxxx xxxxxxxxxxx xxx xxxxx xxxxxxx xxxxxxxxxxx xxx xxxxx xxxxxxx xxxxxxxxxxx xxx xxxxx xx xxxx xx  xxxxxx xxxxx xxxxxx xxxxxxx xxxxxxxxxxx xxx xxxxx xxxxxxx xxxxxxxxxxx xxx xxxxx xxxxxxx xxxxxx xxxxxxx xxxxxxxxxxx xxx xxxxx xxxxxxx xxxxxxxxxxx xxx xxxxx xxxxxxx xxxxxxxxxxx xxx xxxxx xxxxxxx xxxxxxxxxxx xxx xxxxx xxxxxxx xxxxxxx xxxx xx  xxxxxx xxxxx xxxxxx xxxxxxx xxxxxxxxxxx xxx xxxxx xxxxxxx xxxxxxxxxxx xxx xxxxx xxxxxxx xxxxxx xxxxxxx xxxxxxxxxxx xxx xxxxx xxxxxxx xxxxxxxxxxx xxx xxxxx xxxxxxx xxxxxxxxxxx xxx xxxxx xxxxxxx xxxxxxxxxxx xxx xxxxx xxxxxxx xxxxxxxxxxxx xxxxxxxxxxxx xxx xxxxx xxxxxxx xxxxxxx xxxx xx  xxxxxx xxxxx xxxxxx xxxxxxx xxxxxxxxxxx xxx xxxxx xxxxxxx xxxxxxxxxxx xxx xxxxx xxxxxxx xxxxxx xxxxxxx xxxxxxxxxxx xxx xxxxx xxxxxxx xxxxxxxxxxx xxx xxxxx xxxxxxx xxxxxxxxxxx xxx xxxxx xxxxxxx xxxxxxx xxx x x",
    },
    {
      id: 1,
      skill: "CSS",
      percent: 75,
      detail: "xxx xx xxx  xxxxxxx xxx xx xx xxxxx xxxx xxx xxx xxxx xx x",
    },
    {
      id: 2,
      skill: "Javascript",
      percent: 70,
      detail: "xxx xx xxx  xxxxxxx xxx xx xx xxxxx xxxx xxx xxx xxxx xx x",
    },
    {
      id: 3,
      skill: "UX/ UI",
      percent: 80,
      detail: "xxx xx xxx  xxxxxxx xxx xx xx xxxxx xxxx xxx xxx xxxx xx x",
    },
    {
      id: 4,
      skill: "Graphic Design",
      percent: 80,
      detail: "xxx xx xxx  xxxxxxx xxx xx xx xxxxx xxxx xxx xxx xxxx xx x",
    },
    {
      id: 5,
      skill: "Photography",
      percent: 90,
      detail: "xxx xx xxx  xxxxxxx xxx xx xx xxxxx xxxx xxx xxx xxxx xx x",
    },
  ];
  const [click, setClick] = useState(false);
  const [dataDetail, setDataDetail] = useState([]);
  const handleClick = (d) => {
    setClick(true);
    setDataDetail(d);
  
    console.log('dataDetail', dataDetail);
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
      <div className="text-header-title end-animation">SKILLs</div>
      <div className="col-12 d-flex">
        <div className="col-6">
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
                    className="custom-range"
                    value={d.percent}
                  />
                </span>{" "}
              </div>
            </>
          ))}{" "}
        </div>
        <div className="col-6">
          {click ? (
            <div className="m-4 mt-0 pt-0 position-absolute">
              <Card className="p-4 border-0 opacity-75"
              style={{
                backgroundColor: '#E5EDFA'
              }}>
                <h3>{dataDetail.skill}</h3>
                <div
                >
                  {dataDetail?.detail}
                </div>
              </Card>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default SkillsPage;
