import React, { useState } from "react";

export const useSignUp = ({ onRouteChange, loadUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitSignIn = (e) => {
    e.preventDefault();
    setIsLoading(true);
    fetch("https://backend-2f5n.onrender.com/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
        name,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          loadUser(user);
          onRouteChange("home");
        }
        setIsLoading(false);
      });
  };

  return {
    name,
    email,
    password,
    onNameChange,
    onEmailChange,
    onPasswordChange,
    onSubmitSignIn,
    isLoading,
  };
};
