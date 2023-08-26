import { useState } from "react";

import FoodRecognition from "../foodRecognition/FoodRecognition";

import {
  StyledImageLinkForm,
  StyledFormRow,
} from "../../ui/ImageLinkForm.styles";
import { Input } from "../../ui/Input.styles";
import { Button } from "../../ui/Button.styles";

import { useImageRecognition } from "./hooks/useImageRecognition";

const ImageLinkForm = () => {
  const [imageUrl, setImageUrl] = useState("");
  const concepts = useImageRecognition(imageUrl);

  const handleInputChange = (e) => {
    setImageUrl(e.target.value);
  };

  const onButtonSubmit = () => {
    setImageUrl(imageUrl);
  };

  return (
    <>
      <StyledImageLinkForm>
        <p>This magic brain will detect food in your picture. </p>

        <StyledFormRow>
          <Input
            type='text'
            onChange={handleInputChange}
          />
          <Button onClick={onButtonSubmit}>Detect</Button>
        </StyledFormRow>
      </StyledImageLinkForm>
      <FoodRecognition
        imageUrl={imageUrl}
        concepts={concepts}
      />
    </>
  );
};

export default ImageLinkForm;
