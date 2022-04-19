import React from "react";

function Button(props) {
  return (
    <button className="main-btn" onClick={() => props.launchGame()}>
      {props.text}
    </button>
  );
}

export default Button;
