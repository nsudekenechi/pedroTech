import React from "react";

import { auth, provider } from "../config/firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const signIn = async () => {
    const data = await signInWithPopup(auth, provider);
  };
  const SignOut = async () => {
    await signOut(auth);
  };
  return (
    <div>
      <h1>Sign in with google</h1>
      <button onClick={signIn}>Sign in</button>
      <button onClick={SignOut}>Sign Out</button>
    </div>
  );
};
