import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export function AuthModal({ isOpen, onClose }) {
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url =
      mode === "signup"
        ? "http://127.0.0.1:8000/reg/"
        : "http://127.0.0.1:8000/log/";
    const data =
      mode === "signup"
        ? { fname: fname.trim(), email: email.trim(), password: password.trim() }
        : { email: email.trim(), password: password.trim() };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        setMessage(mode === "signup" ? "Account created successfully!" : "Login successful!");
        
        
        setFname("");
        setEmail("");
        setPassword("");

        
        if (mode === "login") {
          setTimeout(() => {
            console.log("Navigating to home...");
            window.location.href = "/";
          }, 1000);
        }
      } else {
        setMessage(result.msg || "Something went wrong.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-2 text-gray-500 hover:text-gray-700"
        >
          ✖
        </button>

        <div className="p-6">
          <h2 className="text-2xl font-bold text-center mb-6">
            {mode === "login" ? "Welcome Back" : "Create Account"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
          <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full name
              </label>
              <input
                type="text"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
            >
              {mode === "login" ? "Sign In" : "Sign Up"}
            </button>
          </form>
          {message && (
          <div
            className={`mt-4 text-center text-sm ${
              message.includes("success") ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </div>
        )}

          <div className="mt-4 text-center text-sm">
            <span className="text-gray-600">
              {mode === "login"
                ? "Don't have an account? "
                : "Already have an account? "}
            </span>
            <button
              onClick={() => setMode(mode === "login" ? "signup" : "login")}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              {mode === "login" ? "Sign up" : "Sign in"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AuthModal;