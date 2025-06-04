
// import React,{ useState } from 'react';
// import { AiOutlineClose } from 'react-icons/ai';
// import { IoMdSend } from 'react-icons/io';

// function ChatSupport({ setIsChatOpen }: { setIsChatOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
//   const [messages, setMessages] = useState([
//     {
//       sender: 'Accurack',
//       time: '6:54 pm',
//       text: "Hi there! I'm Sam, an AI Assistant from Accurack. If you need anything, just let me know!",
//     },
//     {
//       sender: 'Accurack',
//       time: '6:54 pm',
//       text: "Saw that you're interested in our inventory management software. I'm available if you have questions!",
//     },
//   ]);
//   const [input, setInput] = useState('');
//   const [visible, setVisible] = useState(true);

//   const handleSend = () => {
//     if (!input.trim()) return;
//     const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//     setMessages([...messages, { sender: 'user', time: now, text: input }]);
//     setInput('');
//   };

//   if (!visible) return null;

//   return (
//     <div className="fixed bottom-[3%] right-[3%] w-[380px] bg-white border border-gray-300 rounded-xl shadow-2xl z-[999999] flex flex-col overflow-hidden">
//       {/* Header */}
//       <div className="bg-[var(--primary-color)] text-white px-4 py-3 flex items-center justify-between rounded-t-xl">
//         <div className="flex items-center gap-3">
//           <img
//             src={"./avatar.png"}
//             alt="Sam"
//             className="w-10 h-10 rounded-full border-2 border-white object-cover"
//           />
//           <div>
//             <h2 className="font-semibold text-base leading-none">Sam</h2>
//             <span className="text-xs font-light">AI Assistant</span>
//           </div>
//         </div>
//         <button onClick={() => {
//             setVisible(false)
//             setIsChatOpen(false)
//             }} className="text-white hover:text-gray-200">
//           <AiOutlineClose size={20} />
//         </button>
//       </div>

//       {/* Messages */}
//       <div className="flex-1 overflow-y-auto max-h-[300px] px-3 py-2 space-y-2 text-sm bg-gray-50">
//         {messages.map((msg, idx) => (
//           <div key={idx} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
//             <div className={`p-3 rounded-lg max-w-[85%] ${msg.sender === 'user' ? 'bg-blue-100' : 'bg-white shadow'}`}>
//               <p className="text-sm">{msg.text}</p>
//               <span className="text-[10px] text-gray-500 block mt-1">
//                 {msg.sender === 'user' ? `${msg.time}` : `${msg.time}`}
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Quick Action Buttons */}
//       <div className="flex justify-between px-3 py-2 gap-2 bg-white text-sm">
//         <button
//           onClick={() => setInput("I'd like to schedule a demo.")}
//           className="flex-1 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-full py-2 px-1 transition-all"
//         >
//           🗓️ Get a Demo
//         </button>
//         <button
//           onClick={() => setInput("I'd like to start a free trial.")}
//           className="flex-1 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-full py-2 px-1 transition-all"
//         >
//           📊 Start Trial
//         </button>
//       </div>

//       {/* Input */}
//       <div className="p-2 bg-white flex flex-col gap-2">
//         <div className="flex items-center gap-2">
//           <input
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             onKeyDown={(e) => e.key === 'Enter' && handleSend()}
//             placeholder="Type your message..."
//             className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <button
//             onClick={handleSend}
//             className="text-blue-600 hover:text-blue-800 p-2"
//             title="Send message"
//           >
//             <IoMdSend size={20} />
//           </button>
//         </div>
//         <p className="text-[10px] text-gray-400">
//           By using this chat service you consent to the collection and processing of data in accordance with our Privacy Policy.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default ChatSupport




import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { IoMdSend } from 'react-icons/io';

function ChatSupport({ setIsChatOpen }: { setIsChatOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
  const [messages, setMessages] = useState([
    {
      sender: 'Accurack',
      time: '6:54 pm',
      text: "Hi there! I'm Sam, an AI Assistant from Accurack. If you need anything, just let me know!",
    },
    {
      sender: 'Accurack',
      time: '6:54 pm',
      text: "Saw that you're interested in our inventory management software. I'm available if you have questions!",
    },
  ]);
  const [input, setInput] = useState('');
  const [visible, setVisible] = useState(true);

  const handleSend = () => {
    if (!input.trim()) return;
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setMessages([...messages, { sender: 'user', time: now, text: input }]);
    setInput('');
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-[3%] right-[3%] w-[90%] sm:w-[320px] md:w-[380px] bg-white border border-gray-300 rounded-xl shadow-2xl z-[999999] flex flex-col overflow-hidden text-[13px] sm:text-[14px]">
      {/* Header */}
      <div className="bg-[var(--primary-color)] text-white px-3 py-2 sm:px-4 sm:py-3 flex items-center justify-between rounded-t-xl">
        <div className="flex items-center gap-2 sm:gap-3">
          <img
            src={"./avatar.png"}
            alt="Sam"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover"
          />
          <div>
            <h2 className="font-semibold text-sm sm:text-base leading-none">Sam</h2>
            <span className="text-[10px] sm:text-xs font-light">AI Assistant</span>
          </div>
        </div>
        <button onClick={() => { setVisible(false); setIsChatOpen(false); }} className="text-white hover:text-gray-200">
          <AiOutlineClose size={18} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto max-h-[250px] sm:max-h-[300px] px-3 py-2 space-y-2 text-sm bg-gray-50">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
            <div className={`p-2 sm:p-3 rounded-lg max-w-[85%] ${msg.sender === 'user' ? 'bg-blue-100' : 'bg-white shadow'}`}>
              <p>{msg.text}</p>
              <span className="text-[9px] text-gray-500 block mt-1">{msg.time}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Buttons */}
      <div className="flex justify-between px-2 py-2 sm:px-3 sm:py-2 gap-1 sm:gap-2 bg-white text-xs sm:text-sm">
        <button
          onClick={() => setInput("I'd like to schedule a demo.")}
          className="flex-1 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-full py-1 px-1 transition-all"
        >
          🗓️ Demo
        </button>
        <button
          onClick={() => setInput("I'd like to start a free trial.")}
          className="flex-1 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-full py-1 px-1 transition-all"
        >
          📊 Trial
        </button>
      </div>

      {/* Input */}
      <div className="p-2 bg-white flex flex-col gap-1">
        <div className="flex items-center gap-1 sm:gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your message..."
            className="flex-1 border border-gray-300 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleSend}
            className="text-blue-600 hover:text-blue-800 p-1 sm:p-2"
            title="Send message"
          >
            <IoMdSend size={18} />
          </button>
        </div>
        <p className="text-[9px] sm:text-[10px] text-gray-400 leading-tight">
          By using this chat you consent to our Privacy Policy.
        </p>
      </div>
    </div>
  );
}

export default ChatSupport;
