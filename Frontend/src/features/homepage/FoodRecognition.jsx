import PropTypes from "prop-types";

import ListItem from "../../ui/list/ListItem";

import { StyledFood, StyledIMG } from "./FoodRecognition.styles";

const FoodRecognition = ({ imageUrl, concepts }) => {
  return (
    <StyledFood>
      <div>
        <StyledIMG src={imageUrl} />
      </div>

      <div>
        {concepts.slice(0, 5).map(
          (concept) =>
            concept.value > 0.1 && (
              <ListItem
                className='text'
                key={concept.id}
              >
                {" "}
                {concept.name}{" "}
              </ListItem>
            )
        )}
      </div>
    </StyledFood>
  );
};

FoodRecognition.propTypes = {
  imageUrl: PropTypes.string,
  concepts: PropTypes.array,
};
export default FoodRecognition;
