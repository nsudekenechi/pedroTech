import React, { useState } from "react";
import { auth, provider } from "../config/firebase.js";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
export const useSignIn = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const signIn = async () => {
    const data = await signInWithPopup(auth, provider);
  };
  return { signIn, userData };
};
