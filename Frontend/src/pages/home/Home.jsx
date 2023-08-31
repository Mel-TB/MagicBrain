import PropTypes from "prop-types";

import ImageLink from "../../features/homepage/ImageLink";
import FoodRecognition from "../../features/homepage/FoodRecognition";

const Home = ({ onInputChange, onButtonSubmit, imageUrl, concepts, name }) => {
  return (
    <>
      <ImageLink
        onInputChange={onInputChange}
        onButtonSubmit={onButtonSubmit}
        name={name}
      />
      <FoodRecognition
        imageUrl={imageUrl}
        concepts={concepts}
      />
    </>
  );
};

Home.propTypes = {
  onInputChange: PropTypes.func,
  onButtonSubmit: PropTypes.func,
  imageUrl: PropTypes.string,
  concepts: PropTypes.array,
  name: PropTypes.string,
};

export default Home;
