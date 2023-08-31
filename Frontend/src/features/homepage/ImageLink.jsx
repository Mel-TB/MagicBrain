import PropTypes from "prop-types";

import { Input } from "../../ui/input/Input.styles";
import { Button } from "../../ui/button/Button.styles";
import { Container, StyledImgLink, StyledText } from "./ImageLink.styles";

const ImageLink = ({ onInputChange, onButtonSubmit, name }) => {
  return (
    <>
      <Container>
        <StyledText className='text f3'>{`${name}, enter an image link below`}</StyledText>
        <p>
          {" "}
          Let the Magic Brain dazzle you with its incredible food detection
          capabilities .
        </p>
      </Container>

      <StyledImgLink>
        <Input
          type='text'
          size='large'
          onChange={onInputChange}
        />
        <Button
          size='large'
          onClick={onButtonSubmit}
        >
          Detect
        </Button>
      </StyledImgLink>
    </>
  );
};

ImageLink.propTypes = {
  onInputChange: PropTypes.func,
  onButtonSubmit: PropTypes.func,
  name: PropTypes.string,
};
export default ImageLink;
