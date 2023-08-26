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
          <ol>
            {concepts.map(
              (concept) =>
                concept.value > 0.02 && <p key={concept.id}>{concept.name}</p>
            )}
          </ol>
        </div>
      </StyledFoodRecognition>
    </div>
  );
};

export default FoodRecognition;
