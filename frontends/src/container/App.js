import React from "react";
import ParticlesBg from "particles-bg";

import Intro from "../components/intro/Intro";
import Login from "../components/login/Login";
import Register from "../components/register/Register";
import Navigation from "../components/nav/Navigation";
import LinkForm from "../components/linkform/LinkForm";
import FoodRecognition from "../components/foodrecognition/FoodRecognition";

import { useAppState } from "../hooks/useAppState";

import "./styles/App.css";

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
          <LinkForm
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
