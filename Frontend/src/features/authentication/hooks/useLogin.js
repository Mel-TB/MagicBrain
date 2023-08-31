import { useState } from "react";

export const useLogin = (onRouteChange, loadUser) => {
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onEmailChange = (event) => {
    setSignInEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setSignInPassword(event.target.value);
  };

  const onSubmitSignIn = () => {
    setIsLoading(true);
    fetch("https://backend-2f5n.onrender.com/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: signInEmail,
        password: signInPassword,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        setIsLoading(false);

        if (user.id) {
          loadUser(user);
          onRouteChange("home");
        }
      })
      .catch((error) => {
        setIsLoading(false);
        alert("Error while loading user. Please try again");
        console.log(error);
      });
  };

  return {
    signInEmail,
    signInPassword,
    onEmailChange,
    onPasswordChange,
    onSubmitSignIn,
    isLoading,
  };
};
