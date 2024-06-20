import React from "react";
import { Image } from "react-bootstrap";

function Skillimage({ dataImgs, index, handleClickImg, t, selectType }) {
  return (
    <>
      {dataImgs.map(
        (imgs, i) =>
          imgs.type === t.type && (
            <>
              <Image
                className="img-size"
                key={i}
                src={imgs.img}
                onClick={() => handleClickImg(imgs)}
              />
            </>
          )
      )}
    </>
  );
}

export default Skillimage;
