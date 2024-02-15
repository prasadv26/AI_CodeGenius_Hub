// // ChatPage.js
// import React, { useState } from "react";

// const ChatPage = ({ history }) => {
//   const [messages, setMessages] = useState([]);
//   const [inputText, setInputText] = useState("");

//   const handleInputChange = (event) => {
//     setInputText(event.target.value);
//   };

//   const handleBack = () => {
//     window.history.back(); // Navigate back using window.history
//   };

//   const handleSendMessage = () => {
//     if (inputText.trim() !== "") {
//       const userMessage = { text: inputText, sender: "user" };
//       const botMessage = { text: "Sure, I'm here to help!", sender: "bot" };

//       setMessages((prevMessages) => [...prevMessages, userMessage]);
//       setInputText("");

//       // Simulate a bot response after a short delay
//       setTimeout(() => {
//         setMessages((prevMessages) => [...prevMessages, botMessage]);
//       }, 500);
//     }
//   };

//   return (
//     <div>
//     <div className="min-h-screen bg-gradient-to-r from-blue-700 to-purple-800 flex flex-col justify-center items-center text-white">
//       <div className="container mx-auto p-8 bg-white text-black rounded-md shadow-lg">
//         <h1 className="text-3xl font-bold mb-4">Chat with XDS AI Studio</h1>
//         <div className="border p-4 mb-4 h-48 overflow-y-auto">
//           {messages.map((msg, index) => (
//             <div
//               key={index}
//               className={`mb-2 ${
//                 msg.sender === "user" ? "text-right" : "text-left"
//               }`}
//             >
//               <span
//                 className={`p-2 rounded-md ${
//                   msg.sender === "user"
//                     ? "bg-blue-500 text-white"
//                     : "bg-gray-200 text-gray-800"
//                 }`}
//               >
//                 {msg.text}
//               </span>
//             </div>
//           ))}
//         </div>
//         <div className="flex items-center">
//           <input
//             type="text"
//             value={inputText}
//             onChange={handleInputChange}
//             placeholder="Type your message..."
//             className="flex-1 p-2 border rounded-md"
//           />
//           <button
//             onClick={handleSendMessage}
//             className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md"
//           >
//             Send
//           </button>
//         </div>
//         <button onClick={handleBack} style={styles.backButton}>
//           Back
//         </button>
//       </div>
//     </div>
//     </div>
//   );
// };

// const styles = {
//   backButton: {
//     padding: "10px",
//     fontSize: "1rem",
//     backgroundColor: "#ccc",
//     color: "black",
//     border: "none",
//     borderRadius: "4px",
//     cursor: "pointer",
//     alignSelf: "center", // Center the button
//     marginTop: "10px", // Add top margin
//     width: "fit-content", // Set width to fit the content
//     marginLeft: "5px",
//   },
// };

// export default ChatPage;
// ChatPage.js
// import React, { useState } from "react";

// const ChatPage = ({ history }) => {
//   const [messages, setMessages] = useState([]);
//   const [inputText, setInputText] = useState("");

//   const handleInputChange = (event) => {
//     setInputText(event.target.value);
//   };

//   const handleBack = () => {
//     window.history.back(); // Navigate back using window.history
//   };

//   const handleSendMessage = () => {
//     if (inputText.trim() !== "") {
//       const userMessage = { text: inputText, sender: "user" };
//       const botMessage = { text: "Sure, I'm here to help!", sender: "bot" };

//       setMessages((prevMessages) => [...prevMessages, userMessage]);
//       setInputText("");

//       // Simulate a bot response after a short delay
//       setTimeout(() => {
//         setMessages((prevMessages) => [...prevMessages, botMessage]);
//       }, 500);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-200 to-purple-300 flex flex-col justify-center items-center text-white">
//       <div className="container mx-auto p-4 bg-white text-black rounded-md shadow-md md:max-w-lg">
//         {" "}
//         {/* Adjusted padding and added max-width */}
//         <h1 className="text-xl font-bold mb-2">Chat with XDS AI Studio</h1>{" "}
//         {/* Adjusted header size */}
//         <div className="border p-2 mb-2 h-36 overflow-y-auto">
//           {" "}
//           {/* Adjusted message container height and padding */}
//           {messages.map((msg, index) => (
//             <div
//               key={index}
//               className={`mb-1 ${
//                 msg.sender === "user" ? "text-right" : "text-left"
//               }`}
//             >
//               <span
//                 className={`p-1 rounded-md ${
//                   msg.sender === "user"
//                     ? "bg-blue-500 text-white"
//                     : "bg-gray-200 text-gray-800"
//                 }`}
//               >
//                 {msg.text}
//               </span>
//             </div>
//           ))}
//         </div>
//         <div className="flex items-center">
//           <input
//             type="text"
//             value={inputText}
//             onChange={handleInputChange}
//             placeholder="Type your message..."
//             className="flex-1 p-1 border rounded-md"
//           />
//           <button
//             onClick={handleSendMessage}
//             className="ml-1 bg-blue-500 text-white px-2 py-1 rounded-md"
//           >
//             Send
//           </button>
//         </div>
//         <button onClick={handleBack} style={styles.backButton}>
//           Back
//         </button>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   backButton: {
//     padding: "8px", // Adjusted padding
//     fontSize: "0.8rem", // Adjusted font size
//     backgroundColor: "#ccc",
//     color: "black",
//     border: "none",
//     borderRadius: "4px",
//     cursor: "pointer",
//     alignSelf: "center",
//     marginTop: "8px",
//     width: "fit-content",
//     marginLeft: "5px",
//   },
// };

// export default ChatPage;

// ChatPage.js
import React, { useState } from "react";
import Footer from "./../Footer/Footer";

const ChatPage = ({ history }) => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleBack = () => {
    window.history.back(); // Navigate back using window.history
  };

  const handleSendMessage = () => {
    if (inputText.trim() !== "") {
      const userMessage = { text: inputText, sender: "user" };
      const botMessage = { text: "Sure, I'm here to help!", sender: "bot" };

      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setInputText("");

      // Simulate a bot response after a short delay
      setTimeout(() => {
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      }, 500);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 to-purple-400 flex flex-col justify-center items-center text-white">
      {/* <div className="welcomemsg">Welcome To XDS Chat Studio</div> */}
      <div className="welcomemsg mb-4 mt-2 p-2 text-center font-bold text-gray-800 rounded-md">
        Welcome To XDS Chat Studio
      </div>
      <div
        className="container mx-auto p-4 bg-white text-black rounded-md shadow-md"
        style={styles.container}
      >
        <h1 className="text-xl font-bold mb-2">Chat with XDS AI Studio</h1>
        <div className="border p-2 mb-2 h-36 overflow-y-auto">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-1 ${
                msg.sender === "user" ? "text-right" : "text-left"
              }`}
            >
              <span
                className={`p-1 rounded-md ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {msg.text}
              </span>
            </div>
          ))}
        </div>
        <div className="flex items-center">
          <input
            type="text"
            value={inputText}
            onChange={handleInputChange}
            placeholder="Type your message..."
            className="flex-1 p-1 border rounded-md"
            style={styles.input} // Added inline style for input
          />
          <button
            onClick={handleSendMessage}
            className="ml-1 bg-blue-500 text-white px-2 py-1 rounded-md"
            style={styles.button} // Added inline style for button
          >
            Send
          </button>
        </div>
        <button onClick={handleBack} style={styles.backButton}>
          Back
        </button>
      </div>
      <Footer />
    </div>
  );
};

const styles = {
  container: {
    width: "500px", // Adjusted width using numerical value
    innerHeight: "500px",
    marginBottom: "60px",
    // height: "300px",
    // Add other styling properties as needed
  },
  input: {
    width: "200px", // Adjusted width using numerical value
    // Add other styling properties as needed
  },
  button: {
    // Add styling properties as needed
  },
  backButton: {
    padding: "8px",
    fontSize: "0.8rem",
    backgroundColor: "#ccc",
    color: "black",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    alignSelf: "center",
    marginTop: "8px",
    width: "fit-content",
    // marginLeft: "5px",
  },
  welcomemsg: {
    marginBottom: "5px",
    padding: "8px",
  },
};

export default ChatPage;
