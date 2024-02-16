import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Link, useParams } from "react-router-dom";
import { toolsList } from "../utils/toolsList";

function ChatInterface() {
  const { toolId } = useParams();

  // Find the tool by ID
  const tool = toolsList.find((tool) => tool.id === toolId);
  const API_KEY = import.meta.env.VITE_GENAI_API_KEY;
  const [data, setData] = useState(undefined);
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);

  // Disable the "Send" button when loading or if there is already output
  const sendButtonDisabled = loading || data !== undefined;

  async function fetchDataFromGeminiProAPI() {
    try {
      // ONLY TEXT
      if (!inputText) {
        alert("Please enter your prompt!");
        return;
      }
      setLoading(true);
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      const result = await model.generateContent(tool.inputPrompt + inputText);

      const text = result.response.text();
      setLoading(false);
      setData(text);
    } catch (error) {
      setLoading(false);
      console.error("fetchDataFromGeminiAPI error: ", error);
    }
  }

  async function fetchDataFromGeminiProVisionAPI() {
    try {
      // TEXT AND FILE
      if (!inputText) {
        alert("Please enter your prompt!");
        return;
      }
      setLoading(true);
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

      const fileInputEl = document.querySelector("input[type=file]");
      const imageParts = await Promise.all(
        [...fileInputEl.files].map(fileToGenerativePart)
      );

      const result = await model.generateContent([...imageParts, inputText], {
        prompt: tool.inputPrompt,
      });

      const text = result.response.text();
      setLoading(false);
      setData(text);
    } catch (error) {
      setLoading(false);
      console.error("fetchDataFromGeminiAPI error: ", error);
    }
  }

  async function fileToGenerativePart(file) {
    const base64EncodedDataPromise = new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result.split(",")[1]);
      reader.readAsDataURL(file);
    });
    return {
      inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
    };
  }

  // Determine whether to use Gemini Pro or Gemini Pro Vision based on file input
  const isImageFileSelected = () => {
    const fileInputEl = document.querySelector("input[type=file]");
    return fileInputEl && fileInputEl.files.length > 0;
  };

  // Render output with Markdown formatting
  const renderOutput = () => {
    if (!data) return null;
    return (
      <div className="output" dangerouslySetInnerHTML={{ __html: data }} />
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-300 to-purple-300">
      <div className="max-w-2xl w-full p-200">
        <h1 className="text-sm font-bold mb-4 text-white text-center relative">
          <span className="text-2xl text-black-600 inline-block relative">
            Unlocking the Potential of Your Code with
          </span>{" "}
          {tool ? (
            <span
              className="text-4xl inline-block relative mt-4 px-4 py-2"
              style={{
                backgroundImage:
                  "linear-gradient(45deg, #4f6d7a, #c94b4b, #4b134f)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              {tool.name}
            </span>
          ) : (
            <span className="text-red-500">Tool not found</span>
          )}
        </h1>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <textarea
            className="input-text bg-gray-200 px-4 py-2 mb-4 rounded-lg focus:outline-none focus:border-blue-500 w-full"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter your code snippet here..."
            rows={12}
          />
          <input type="file" className="mb-4" accept="image/*" />
          <div className="buttons-container flex items-center justify-center">
            <button
              disabled={sendButtonDisabled}
              onClick={() =>
                isImageFileSelected()
                  ? fetchDataFromGeminiProVisionAPI()
                  : fetchDataFromGeminiProAPI()
              }
              className="btn-pro w-full px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold disabled:opacity-50 hover:from-blue-600 hover:to-purple-700 transform transition-transform duration-300 hover:scale-105"
            >
              {loading ? "Loading..." : "Send"}
            </button>
            <button
              onClick={() => {
                setInputText(""); // Clear the input area
                setData(undefined); // Clear the output area
              }}
              className="btn-pro w-full px-6 py-3 rounded-full bg-gradient-to-r from-red-500 to-purple-600 text-white hover:from-red-600 hover:to-purple-700 text-white font-bold ml-2  transform transition-transform duration-300 hover:scale-105"
            >
              Clear
            </button>
          </div>
          <Link
            to={"/"}
            className="text-white hover:underline block text-center py-2 px-4 rounded-lg mt-4 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-pink-500"
          >
            Back
          </Link>

          {isImageFileSelected() && (
            <p className="text-sm text-gray-500 mt-2">
              Note: Only image files are supported for XDS AI Studio.
            </p>
          )}
          <hr className="my-4" />
          {renderOutput()}
        </div>
      </div>
    </div>
  );
}

export default ChatInterface;
