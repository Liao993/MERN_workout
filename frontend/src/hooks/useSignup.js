import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

const useSignup = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (email, password) => {
    setIsLoading(true);
    setError(null);

    const info = { email, password };

    const response = await fetch("/api/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(info),
    });
    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setSuccess(false);
      setError(json.error);
    }

    if (response.ok) {
      setSuccess("You signed up successfully");

      //save the user to local storage
      localStorage.setItem("user", JSON.stringify(json));

      //update
      dispatch({ type: "LOGIN", payload: json });
      setIsLoading(false);
    }
  };
  return { signup, error, isLoading, success };
};

export default useSignup;
