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

      {route === "home" ? (
        <div>
          <Home
            name={user.name}
            onInputChange={onInputChange}
            onButtonSubmit={onButtonSubmit}
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
        <Signup
          loadUser={loadUser}
          onRouteChange={onRouteChange}
        />
      )}
    </div>
  );
};

export default App;
