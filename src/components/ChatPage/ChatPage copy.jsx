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
//       setMessages([...messages, { text: inputText, sender: "user" }]);
//       setInputText("");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-700 to-purple-800 flex flex-col justify-center items-center text-white">
//       <div className="container mx-auto p-8">
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
import React, { useState } from "react";

const ChatPage = ({ history }) => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleBack = () => {
    window.history.back(); // Navigate back using window.history
  };

  // const handleSendMessage = () => {
  //   if (inputText.trim() !== "") {
  //     setMessages([...messages, { text: inputText, sender: "user" }]);
  //     setInputText("");
  //     // Simulate a bot response after a short delay
  //     setTimeout(() => {
  //       setMessages([
  //         ...messages,
  //         { text: "Sure, I'm here to help!", sender: "bot" },
  //       ]);
  //     }, 500);
  //   }
  // };
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
    <div className="min-h-screen bg-gradient-to-r from-blue-700 to-purple-800 flex flex-col justify-center items-center text-white">
      <div className="container mx-auto p-8 bg-white text-black rounded-md shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Chat with XDS AI Studio</h1>
        <div className="border p-4 mb-4 h-48 overflow-y-auto">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-2 ${
                msg.sender === "user" ? "text-right" : "text-left"
              }`}
            >
              <span
                className={`p-2 rounded-md ${
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
            className="flex-1 p-2 border rounded-md"
          />
          <button
            onClick={handleSendMessage}
            className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Send
          </button>
        </div>
        <button onClick={handleBack} style={styles.backButton}>
          Back
        </button>
      </div>
    </div>
  );
};

const styles = {
  backButton: {
    padding: "10px",
    fontSize: "1rem",
    backgroundColor: "#ccc",
    color: "black",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    alignSelf: "center", // Center the button
    marginTop: "10px", // Add top margin
    width: "fit-content", // Set width to fit the content
    marginLeft: "5px",
  },
};

export default ChatPage;
