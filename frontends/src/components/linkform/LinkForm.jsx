import React from "react";
import "./LinkForm.styles.css";

const LinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='f3'>
        {
          "Let the Magic Brain dazzle you with its incredible food detection capabilities ."
        }
      </p>

      <div className='center'>
        <div className='form center pa4 br3 shadow-5'>
          <input
            className='f4 pa2 w-70 center input'
            type='tex'
            onChange={onInputChange}
          />
          <button
            className=' grow  link  '
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default LinkForm;
