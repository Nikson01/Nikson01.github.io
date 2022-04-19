import React, { useState } from "react";
import { useSelector } from "react-redux";

function RightBlock() {
  const levelArray = useSelector((state) => state.level);
  const index = useSelector((state) => state.index);

  const defineClass = (currentLevel) => {
    if (currentLevel < index) {
      return "__past";
    } else if (currentLevel === index) {
      return "__active";
    } else {
      return "";
    }
  };

  return (
    <div className="app_right">
      {levelArray.map((level, levelIndex) => {
        return (
          <div
            className={`main-block main-block__small main-block__small${defineClass(
              levelIndex
            )}`}
          >
            <span className="triangle triangle-left"></span>
            <span className="main-block__answer">{level}</span>
            <span className="triangle triangle-right"></span>
          </div>
        );
      })}
    </div>
  );
}

export default RightBlock;
