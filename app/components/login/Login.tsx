"use client";

import React, { useState } from "react";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
    // Here you would typically handle the login logic, such as making an API call
  };

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="w-full bg-black">하하</div>
    </div>
  );
};

export default Login;
