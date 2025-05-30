// // components/LandingPageComponents/ChatSupport.tsx
// import { IoMdSend } from 'react-icons/io';
// import React, { useState } from 'react';
// import CalendlyWidget from './CalendlyWidget';

// function ChatSupport({ setIsChatOpen }: { setIsChatOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
//   type Message = { sender: string; time: string; text: string };
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [input, setInput] = useState('');
//   const [visible, setVisible] = useState(true);

//   const [bookingState, setBookingState] = useState<'idle' | 'name' | 'email' | 'calendly'>('idle');
//   const [userInfo, setUserInfo] = useState({ name: '', email: '' });

//   const addMessage = (sender: string, text: React.ReactNode) => {
//     const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//     setMessages(prev => [...prev, { sender, time: now, text: String(text) }]);
//   };

//   const handleSend = async (text?: string) => {
//     const message = text !== undefined ? text : input;
//     if (!message.trim()) return;

//     // Booking flow logic
//     if (bookingState !== 'idle') {
//       if (bookingState === 'name') {
//         setUserInfo(prev => ({ ...prev, name: message }));
//         addMessage('user', message);
//         setInput('');
//         addMessage('Accurack', 'Thanks! Now please provide your email address.');
//         setBookingState('email');
//       } else if (bookingState === 'email') {
//         setUserInfo(prev => ({ ...prev, email: message }));
//         addMessage('user', message);
//         setInput('');
//         addMessage('Accurack', 'Awesome! Here’s my calendar, pick a time that works for you:');
//         setBookingState('calendly');
//       }
//       return;
//     }

//     addMessage('user', message);

//     // 🚨 Check for "schedule a demo" BEFORE hitting the API
//     if (/schedule.*demo/i.test(message)) {
//       addMessage('Accurack', "I'd be happy to help schedule a demo. What's your name?");
//       setBookingState('name');
//       setInput('');
//       return; // stop here, don't call the API
//     }

//     try {
//       const response = await fetch('http://localhost:3000/api/chatbot', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ message }),
//       });

//       const data = await response.json();
//       addMessage('Accurack', data.reply || "Sorry, something went wrong!");
//     } catch (err) {
//       console.error('❌ Chatbot error:', err);
//       addMessage('Accurack', "Oops, couldn't connect to the server. Try again later.");
//     }

//     if (!text) setInput('');
//   };


//   const handleQuickSend = (msg: string) => {
//     handleSend(msg);
//   };

//   if (!visible) return null;

//   return (
//     <div className="fixed bottom-[3%] right-[3%] w-[90%] sm:w-[320px] md:w-[380px] bg-white border border-gray-300 rounded-xl shadow-2xl z-[999999] flex flex-col overflow-hidden text-[13px] sm:text-[14px]">
//       {/* Header */}
//       <div className="bg-[var(--primary-color)] text-white px-3 py-2 sm:px-4 sm:py-3 flex items-center justify-between rounded-t-xl">
//         <div className="flex items-center gap-2 sm:gap-3">
//           <img
//             src={"./avatar.png"}
//             alt="Sam"
//             className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover"
//           />
//           <div>
//             <h2 className="font-semibold text-sm sm:text-base leading-none">Sam</h2>
//             <span className="text-[10px] sm:text-xs font-light">AI Assistant</span>
//           </div>
//         </div>
//         <button onClick={() => { setVisible(false); setIsChatOpen(false); }} className="text-white hover:text-gray-200">
//           <IoMdSend size={18} />
//         </button>
//       </div>

//       {/* Messages */}
//       <div className="flex-1 overflow-y-auto max-h-[250px] sm:max-h-[300px] px-3 py-2 space-y-2 text-sm bg-gray-50">
//         {messages.map((msg, idx) => (
//           <div key={idx} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
//             <div className={`p-2 sm:p-3 rounded-lg max-w-[85%] ${msg.sender === 'user' ? 'bg-blue-100' : 'bg-white shadow'}`}>
//               <p>{msg.text}</p>
//               <span className="text-[9px] text-gray-500 block mt-1">{msg.time}</span>
//             </div>
//           </div>
//         ))}

//         {bookingState === 'calendly' && (
//           <div className="p-2 sm:p-3 rounded-lg max-w-[85%] bg-white shadow w-full">
//             <CalendlyWidget userName={userInfo.name} userEmail={userInfo.email} />
//           </div>
//         )}
//       </div>

//       {/* Quick buttons */}
//       <div className="flex justify-between px-2 py-2 sm:px-3 sm:py-2 gap-1 sm:gap-2 bg-white text-xs sm:text-sm">
//         <button
//           onClick={() => handleQuickSend("I'd like to schedule a demo.")}
//           className="flex-1 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-full py-1 px-1 transition-all"
//         >
//           🗓️ Demo
//         </button>
//         <button
//           onClick={() => handleQuickSend("I'd like to start a free trial.")}
//           className="flex-1 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-full py-1 px-1 transition-all"
//         >
//           📊 Trial
//         </button>
//       </div>

//       {/* Input & send */}
//       <div className="p-2 bg-white flex flex-col gap-1">
//         <div className="flex items-center gap-1 sm:gap-2">
//           <input
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             onKeyDown={(e) => e.key === 'Enter' && handleSend()}
//             placeholder="Type your message..."
//             className="flex-1 border border-gray-300 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <button
//             onClick={() => handleSend()}
//             className="text-blue-600 hover:text-blue-800 p-1 sm:p-2"
//             title="Send message"
//           >
//             <IoMdSend size={18} />
//           </button>
//         </div>
//         <p className="text-[9px] sm:text-[10px] text-gray-400 leading-tight">
//           By using this chat you consent to our Privacy Policy.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default ChatSupport;





import { IoMdSend } from 'react-icons/io';
import React, { useState } from 'react';
import CalendlyWidget from './CalendlyWidget';

function ChatSupport({ setIsChatOpen }: { setIsChatOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
  type Message = { sender: string; time: string; text: string };
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [visible, setVisible] = useState(true);

  const [bookingState, setBookingState] = useState<'idle' | 'name' | 'email' | 'calendly'>('idle');
  const [userInfo, setUserInfo] = useState({ name: '', email: '' });

  const addMessage = (sender: string, text: React.ReactNode) => {
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setMessages(prev => [...prev, { sender, time: now, text: String(text) }]);
  };

  const handleSend = async (text?: string) => {
    const message = text !== undefined ? text : input;
    if (!message.trim()) return;

    // Booking flow logic
    if (bookingState !== 'idle') {
      if (bookingState === 'name') {
        setUserInfo(prev => ({ ...prev, name: message }));
        addMessage('user', message);
        setInput('');
        addMessage('Accurack', 'Thanks! Now please provide your email address.');
        setBookingState('email');
      } else if (bookingState === 'email') {
        setUserInfo(prev => ({ ...prev, email: message }));
        addMessage('user', message);
        setInput('');
        addMessage('Accurack', 'Awesome! Here’s my calendar, pick a time that works for you:');
        setBookingState('calendly');
      }
      return;
    }

    addMessage('user', message);

    // Detect booking request
    if (/schedule.*demo/i.test(message)) {
      addMessage('Accurack', "I'd be happy to help schedule a demo. What's your name?");
      setBookingState('name');
      setInput('');
      return;
    }

    // 🧠 Send user message to backend (KnowledgeBase added there)
    try {
      const response = await fetch('http://localhost:3000/api/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userMessage: message }),
      });

      const data = await response.json();
      addMessage('Accurack', data.reply || "Hmm, I couldn't find an answer. Try rephrasing?");
    } catch (err) {
      console.error('❌ Chatbot error:', err);
      addMessage('Accurack', "Oops, I had trouble connecting. Try again in a bit.");
    }

    if (!text) setInput('');
  };

  const handleQuickSend = (msg: string) => {
    handleSend(msg);
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
          <IoMdSend size={18} />
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

        {bookingState === 'calendly' && (
          <div className="p-2 sm:p-3 rounded-lg max-w-[85%] bg-white shadow w-full">
            <CalendlyWidget userName={userInfo.name} userEmail={userInfo.email} />
          </div>
        )}
      </div>

      {/* Quick buttons */}
      <div className="flex justify-between px-2 py-2 sm:px-3 sm:py-2 gap-1 sm:gap-2 bg-white text-xs sm:text-sm">
        <button
          onClick={() => handleQuickSend("I'd like to schedule a demo.")}
          className="flex-1 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-full py-1 px-1 transition-all"
        >
          🗓️ Demo
        </button>
        <button
          onClick={() => handleQuickSend("I'd like to start a free trial.")}
          className="flex-1 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-full py-1 px-1 transition-all"
        >
          📊 Trial
        </button>
      </div>

      {/* Input & send */}
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
            onClick={() => handleSend()}
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
