import React from "react";

const Tag = ({ title }) => {
  const getColor = () => {
    let color;
    switch (title.toLowerCase()) {
      case "local":
        color = "rgb(208, 125, 136)";
        break;
      case "tours":
        color = "rgb(169, 210, 138)";
        break;
      case "fun":
        color = "rgb(138, 173, 138)";
        break;
      default:
        color = "rgb(128, 138, 210)";
    }
    return color;
  };
  return (
    <div className="tag" style={{ backgroundColor: getColor() }}>
      {title}
    </div>
  );
};

export default Tag;
