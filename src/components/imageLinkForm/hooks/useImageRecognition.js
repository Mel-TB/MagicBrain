import { useEffect, useState } from "react";
import { SetClarifai } from "../../../lib/api/apiClarifai";

export const useImageRecognition = (imageUrl) => {
  const [concepts, setConcepts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (imageUrl) {
        try {
          const requestOptions = SetClarifai(imageUrl);
          const response = await fetch(
            "https://api.clarifai.com/v2/models/" +
              "food-item-recognition" +
              "/outputs",
            requestOptions
          );
          const result = await response.json();
          console.log(result.outputs[0].data.concepts);
          setConcepts(result.outputs[0]?.data?.concepts || []);
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchData();
  }, [imageUrl]);

  return concepts;
};
