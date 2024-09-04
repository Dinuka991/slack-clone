"use client";

import React from "react"; // Import React for JSX support
import {  SignInFlow } from "@/features/auth/type"; // Import the type from the auth feature

export const AuthScreen = () => {
  const [flow, setFlow] = React.useState<SignInFlow>("signIn");
  return (
    <div className="h-full flex items-center justify-center bg-[#5C3B58]">
      <div className="md:h-auto:w-[420px]"></div>
      Auth Screen
    </div>
  );
};
