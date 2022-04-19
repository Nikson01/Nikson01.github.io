import React, { useEffect, useState } from "react";
import LeftBlock from "./quizComponents/LeftBlock";
import RightBlock from "./quizComponents/RightBlock";
import BurgerMob from "./quizComponents/BurgerMob";

import useWindowSize from "../../services/hooks/useWindowWidth";

function Quiz() {
  const size = useWindowSize();

  const [isMob, setIsMob] = useState(false);
  const [toggledScore, setToggledScore] = useState(false);

  const toggleScore = () => {
    setToggledScore(!toggledScore);
  };

  useEffect(() => {
    console.log(size.width)
    if (size.width < 1024) {
      setIsMob(true)
    } else {
      setIsMob(false)
    }
  }, [size]);

  return (
    <div className="wrapper">
      <div className="flex_container quiz_container">
        {isMob ? !toggledScore && <LeftBlock /> : <LeftBlock />}
        {isMob ? toggledScore && <RightBlock /> : <RightBlock />}
        {isMob && <BurgerMob toggleScore={toggleScore} />}
      </div>
    </div>
  );
}

export default Quiz;
