import React from "react";
import "./Intro.styles.css";

const Intro = ({ name }) => {
  return (
    <div>
      <div>
        <div className='text f3'>{`${name}, enter an image link below`}</div>
      </div>
    </div>
  );
};

export default Intro;
