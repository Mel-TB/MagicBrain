import React from "react";
import "./FoodRecognition.styles.css";

const FoodRecognition = ({ imageUrl, concepts }) => {
  return (
    <div className='center ma'>
      <div className='absolute mt2 layout'>
        <img
          id='inputimage'
          alt=''
          src={imageUrl}
          width='500px'
          heigh='auto'
        />
        <div className='div'>
          <ol className='list'>
            {concepts.slice(0, 5).map(
              (concept) =>
                concept.value > 0.1 && (
                  <p
                    className='text'
                    key={concept.id}
                  >
                    {" "}
                    {concept.name}{" "}
                  </p>
                )
            )}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default FoodRecognition;
