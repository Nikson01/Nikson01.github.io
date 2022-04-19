import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as actions from "../../../store/actions";

function MainBlock({ answer, letter, index }) {
  const dispatch = useDispatch();
  const selectedIndex = useSelector((state) => state.selected);
  const questions = useSelector((state) => state.questions);
  const scoreIndex = useSelector((state) => state.index);

  const [currentClass, setCurrentClass] = useState("main-block__not-selected");
  const navigate = useNavigate();

  const checkAnswer = useCallback(
    (index) => {
      if (selectedIndex > 0) return;
      dispatch(actions.selectAnswer(index));
    },
    [selectedIndex, dispatch]
  );

  const processAnswer = useCallback((flag) => {
    setTimeout(() => {
      if ( flag === "correct") {
        dispatch(actions.increaseIndex)
      } else {
        dispatch(actions.finishGame);
        navigate("/finish");
      }
    }, 2000);
  }, [dispatch, navigate])

  useEffect(() => {
    selectedIndex >= 0 && selectedIndex === index
      ? setCurrentClass("main-block__selected")
      : setCurrentClass("main-block__not-selected");

    let processAnswerTimer = setTimeout(() => {
      if (
        selectedIndex === index &&
        index === questions[scoreIndex].correct
      ) {
        setCurrentClass("main-block__correct");
        processAnswer("correct");
      } else if ( selectedIndex === index &&
        selectedIndex !== questions[scoreIndex].correct
      ) {
        setCurrentClass("main-block__wrong");
        processAnswer("wrong");
      }
    }, 3000);

    return () => {
      clearTimeout(processAnswerTimer);
    };
  }, [selectedIndex, index, processAnswer, questions, scoreIndex]);

  return (
    <div
      className={`main-block ${currentClass}`}
      onClick={() => checkAnswer(index)}
    >
      <span className="triangle triangle-left"></span>
      <span className="main-block__letter">{letter}</span>
      <span className="main-block__answer">{answer}</span>
      <span className="triangle triangle-right"></span>
    </div>
  );
}

export default MainBlock;
