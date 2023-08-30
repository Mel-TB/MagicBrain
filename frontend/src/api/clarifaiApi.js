const PAT = "c48f9a86c13f4e0497aefb8d32916749";
const USER_ID = "meltb";
const APP_ID = "Smartbrain";
const MODEL_ID = "food-item-recognition";

const analyzeImage = (imageUrl) => {
  const IMAGE_URL = imageUrl;

  const raw = JSON.stringify({
    user_app_id: {
      user_id: USER_ID,
      app_id: APP_ID,
    },
    inputs: [
      {
        data: {
          image: {
            url: IMAGE_URL,
          },
        },
      },
    ],
  });

  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: "Key " + PAT,
    },
    body: raw,
  };

  return fetch(
    `https://api.clarifai.com/v2/models/${MODEL_ID}/outputs`,
    requestOptions
  )
    .then((response) => response.json())
    .catch((error) => console.log("error", error));
};

export { analyzeImage };
