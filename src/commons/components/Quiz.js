import React from "react";
import LeftBlock from "./quizComponents/LeftBlock";
import RightBlock from "./quizComponents/RightBlock";

function Quiz() {

  return (
    <div className="wrapper">
      <div className="flex_container quiz_container">
        <LeftBlock />
        <RightBlock />
      </div>
    </div>
  );
}

export default Quiz;
