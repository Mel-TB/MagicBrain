import { useEffect } from "react";

import ParticlesBg from "particles-bg";

import Nav from "./ui/nav/Nav";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

import Signup from "./pages/signup/Signup";
import GlobalStyles from "./global/GlobalStyles";

import { useAppState } from "./hooks/useAppState";

const App = () => {
  const {
    imageUrl,
    concepts,
    route,
    isLogin,
    user,
    loadUser,
    onInputChange,
    onRouteChange,
    onButtonSubmit,
  } = useAppState();

  useEffect(() => {
    console.log("Route changed:", route);
  }, [route]);

  let currentPage;
  if (route === "home") {
    currentPage = (
      <Home
        name={user.name}
        onInputChange={onInputChange}
        onButtonSubmit={onButtonSubmit}
        concepts={concepts}
        imageUrl={imageUrl}
      />
    );
  } else if (route === "signin") {
    currentPage = (
      <Login
        loadUser={loadUser}
        onRouteChange={onRouteChange}
      />
    );
  } else {
    currentPage = (
      <Signup
        loadUser={loadUser}
        onRouteChange={onRouteChange}
      />
    );
  }
  return (
    <div>
      <ParticlesBg
        type='cobweb'
        bg={true}
      />
      <GlobalStyles />
      <Nav
        isLogin={isLogin}
        onRouteChange={onRouteChange}
      />
      {currentPage}
    </div>
  );
};

export default App;
