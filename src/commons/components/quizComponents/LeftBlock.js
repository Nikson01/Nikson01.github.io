import React, { useState } from "react";
import MainBlock from "./MainBlock";
import { useSelector } from "react-redux";

function LeftBlock() {

    const index = useSelector((state) => state.index);
    const questions = useSelector((state) => state.questions);
    const [letters] = useState(['A', 'B', 'C', 'D'])

  return (
    <div className="app_left">
      <h2>{questions[index].question}</h2>
      <div className="app_left-content">
        {questions[index].content.map((answer, index) => {
          return <MainBlock answer={answer} letter={letters[index]} index={index}/>;
        })}
      </div>
    </div>
  );
}

export default LeftBlock;
