import React, { useState } from "react";
import ParticlesBg from "particles-bg";
import FoodRecognition from "./components/FoodRecognition/FoodRecognition";
import Navigation from "./components/Navigation/Navigation";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Intro from "./components/Intro/Intro";
import { useAppState } from "./hooks/useAppState";

import "./App.css";

const App = () => {
  const {
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
  } = useAppState();

  return (
    <div className='App'>
      <ParticlesBg
        type='cobweb'
        bg={true}
      />
      <Navigation
        isLogin={isLogin}
        onRouteChange={onRouteChange}
      />
      {route === "home" ? (
        <div>
          <Intro name={user.name} />
          <ImageLinkForm
            onInputChange={onInputChange}
            onButtonSubmit={onButtonSubmit}
          />
          <FoodRecognition
            concepts={concepts}
            imageUrl={imageUrl}
          />
        </div>
      ) : route === "signin" ? (
        <Login
          loadUser={loadUser}
          onRouteChange={onRouteChange}
        />
      ) : (
        <Register
          loadUser={loadUser}
          onRouteChange={onRouteChange}
        />
      )}
    </div>
  );
};

export default App;