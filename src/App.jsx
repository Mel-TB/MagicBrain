/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import ParticlesBg from "particles-bg";

import Logo from "./ui/logo/Logo";
import Rank from "./components/rank/Rank";
import Navigation from "./ui/navigation/Navigation";
import ImageLinkForm from "./components/imageLinkForm/ImageLinkForm";
import FoodRecognition from "./components/foodRecognition/FoodRecognition";

import "./App.css";

const App = () => {
  return (
    <>
      <ParticlesBg
        type='cobweb'
        bg={true}
      />

      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
    </>
  );
};
export default App;
