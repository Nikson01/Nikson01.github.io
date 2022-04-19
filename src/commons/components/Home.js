import React, { useEffect, useState, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../helpers/Button";
import BackgroundImg from "../../images/bg.png";
import MainImg from "../../images/hand.png";

import LoadingOverlay from "react-loading-overlay";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions";

function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isFinishPage, setIsFinishPage] = useState(false);
  const [buttonText, setButtonText] = useState("Start");
  const loading = useSelector((state) => state.loading);
  const index = useSelector((state) => state.index);
  const level = useSelector((state) => state.level);

  const launchGame = useCallback(() => {
    dispatch(actions.setLoader);

    setTimeout(() => {
      dispatch(actions.startGame);
      navigate("/quiz");
    }, 2000);
  }, [dispatch, navigate]);

  useEffect(() => {
    if (location.pathname === "/finish") {
      setIsFinishPage(true);
      setButtonText("Try again");
    }
  }, [location]);

  return (
    <LoadingOverlay active={loading} spinner text="Preparing for the game...">
      <div className="wrapper">
        {!isFinishPage && (
          <img className="background-image" alt="bg" src={BackgroundImg}></img>
        )}
        <div className="flex_container">
          <img className="main-image" alt="hand" src={MainImg}></img>
          <div className="main-right__block">
            {!isFinishPage ? (
              <h1>Who wants to be a millionare ?</h1>
            ) : (
              <div>
                <span className="main-right__block-total">Total score:</span>
                <h1>{index > 0 ? level[index - 1] : `0$`} earned</h1>
              </div>
            )}
            <Button text={buttonText} launchGame={launchGame} />
          </div>
        </div>
      </div>
    </LoadingOverlay>
  );
}

export default Home;
