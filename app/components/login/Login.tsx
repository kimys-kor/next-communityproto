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
    <div className="mt-3 bg-sky-100/70 p-8 rounded-lg w-full shadow-md">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <div className="mb-4">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="truncate shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="아이디를 입력 하세요"
            required
          />
        </div>
        <div className="mb-1">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="truncate shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="비밀번호를 입력 하세요"
            required
          />
        </div>
        <div className="flex flex-col gap-2 items-center justify-between">
          <button
            type="submit"
            className="bg-sky-300 hover:bg-sky-500 text-white font-bold w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            로그인
          </button>
          <button
            type="submit"
            className="bg-cyan-300 w-full hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            회원가입
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
