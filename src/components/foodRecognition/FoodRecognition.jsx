import { StyledFoodRecognition, Image } from "./styles/FoodRecognition.styles";

/* eslint-disable react/prop-types */
const FoodRecognition = ({ imageUrl, concepts }) => {
  if (!imageUrl) {
    return null;
  }

  return (
    <div>
      <StyledFoodRecognition>
        <Image src={imageUrl} />
        <div>
          <ul>
            {concepts.slice(0, 10).map(
              (concept) =>
                concept.value > 0.01 && (
                  <p key={concept.id}>
                    {concept.name} - {(concept.value * 100).toFixed(0)} %
                  </p>
                )
            )}
          </ul>
        </div>
      </StyledFoodRecognition>
    </div>
  );
};

export default FoodRecognition;
