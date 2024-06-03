import React, { useState, useEffect } from 'react';
const ResponsiveBackground = ({ imgBg }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const divStyle = {
    backgroundImage: `url(${imgBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "100vh",
    position: "relative",
  };

  const smallScreenStyle = {
    backgroundSize: "contain",
  };

  const smallerScreenStyle = {
    backgroundSize: "contain",
    height: "auto",
  };

  return (
    <div
      style={{
        ...divStyle,
        ...(windowWidth <= 768 ? smallScreenStyle : {}),
        ...(windowWidth <= 480 ? smallerScreenStyle : {}),
      }}
    >
      {/* Content here */}
    </div>
  );
};

export default ResponsiveBackground;
