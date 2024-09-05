"use client";

import { useState } from "react"; // Import React for JSX support
import {  SignInFlow } from "../type"; // Import the type from the auth feature
import { SignInCard } from "./sign-in-card";
import { SignUpCard } from "./sign-up-card";

export const AuthScreen = () => {

  const [ state , setState ] =  useState<SignInFlow>("signIn"); // Use the SignInFlow type

  return (
    <div className="h-full flex items-center justify-center bg-[#5C3B58]">
      <div className="md:h-auto:w-[420px]"></div>
      {state === "signIn" ? <SignInCard /> : <SignUpCard />}
    </div>
  );
};
