"use client";

import { useState } from "react";

export default function LoginPage() {
  // handle switching between login and register, this is just temporary before the BE is implemented
  const [isLogin, setIsLogin] = useState(true);
  const handleSwitch = () => {
    setIsLogin(!isLogin);
  };

  return (
    <>
      <div
        className="bg-cover bg-center h-screen w-screen"
        style={{ backgroundImage: `url(/bg.png)` }}
      >
        <div className="flex items-center justify-center h-screen">
          <div className="w-96 bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-semibold text-center">
              {isLogin ? "Login" : "Register"}
            </h1>
            <form className="mt-4">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Email or phone number
                </label>
                <input
                  placeholder="Enter your email or phone number"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  placeholder="Enter your password"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
                />
              </div>
              <div className="mb-4 w-full">
                <button
                  onClick={(e) => e.preventDefault()}
                  className="w-full bg-teal-600 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"
                >
                  {isLogin ? "Login" : "Sign up"}
                </button>
                <div className="flex flex-col gap-2 mt-2">
                  {isLogin && (
                    <button className="mx-auto text-gray-600 no-underline text-sm">
                      Forgot your password?
                    </button>
                  )}
                  <button
                    onClick={handleSwitch}
                    className="mx-auto text-gray-600 no-underline text-sm"
                  >
                    {isLogin ? "Create an account" : "Already have an account?"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
