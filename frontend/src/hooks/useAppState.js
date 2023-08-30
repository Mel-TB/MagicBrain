import { useState } from "react";
import { analyzeImage } from "../api/clarifaiApi";

export const useAppState = () => {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [concepts, setConcepts] = useState([]);
  const [route, setRoute] = useState("signin");
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    entries: 0,
    joined: "",
  });

  const loadUser = (data) => {
    setUser({
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined,
    });
  };

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onRouteChange = (newRoute) => {
    if (newRoute === "signout") {
      setIsLogin(false);
      setImageUrl("");
      setConcepts([]);
    } else if (newRoute === "home") {
      setIsLogin(true);
    }
    setRoute(newRoute);
  };

  const onButtonSubmit = () => {
    setImageUrl(input);
    analyzeImage(input)
      .then((result) => setConcepts(result.outputs[0].data.concepts))
      .catch((error) => console.log("error", error));
  };

  return {
    input,
    setInput,
    imageUrl,
    setImageUrl,
    concepts,
    setConcepts,
    route,
    isLogin,
    user,
    loadUser,
    onInputChange,
    onRouteChange,
    onButtonSubmit,
  };
};
