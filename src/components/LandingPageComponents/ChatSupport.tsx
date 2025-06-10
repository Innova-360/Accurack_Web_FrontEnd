





import { IoMdSend } from 'react-icons/io';
import { ImCross } from "react-icons/im";
import React, { useState, useRef, useEffect } from 'react';
import CalendlyWidget from './CalendlyWidget';
import knowledgeBase from './KnowledgeBase.ts';

function ChatSupport({ setIsChatOpen }: { setIsChatOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
  type Message = { sender: string; time: string; text: string };
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [visible, setVisible] = useState(true);

  const [bookingState, setBookingState] = useState<'idle' | 'name' | 'email' | 'calendly'>('idle');
  const [userInfo, setUserInfo] = useState({ name: '', email: '' });

  const bottomRef = useRef<HTMLDivElement | null>(null); // 👈 ref for auto-scroll

  const addMessage = (sender: string, text: React.ReactNode) => {
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setMessages(prev => [...prev, { sender, time: now, text: String(text) }]);
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const trialLink = 'https://app.accurack.com/signup?ref=chatbot';
  const freeTrialMessage = `You can sign up for a free 14-day trial ${trialLink}. During the trial, you'll have the option to book time with an Accurack expert to assist you further. Is there anything else you'd like to explore with Accurack today?`;

  // setInput("Hi there! I'm Sam, an AI Assistant here at Cin7. If you need anything, just let me know!");

  const handleSend = async (text?: string) => {
    const message = text !== undefined ? text : input;
    if (!message.trim()) return;
    setInput(''); // Clear input after sending

    // // Booking flow logic and demo scheduling
    // if (bookingState === 'name') {
    //   setUserInfo(prev => ({ ...prev, name: message })); addMessage('user', message); setInput('');
    //   addMessage('Accurack', 'Thanks! Now please provide your email address.');
    //   setBookingState('email'); return;
    // } else if (bookingState === 'email') {
    //   setUserInfo(prev => ({ ...prev, email: message })); addMessage('user', message); setInput('');
    //   addMessage('Accurack', 'Awesome! Here’s my calendar, pick a time that works for you:');
    //   setBookingState('calendly'); return;
    // } else if (bookingState === 'idle' && /schedule.*demo/i.test(message)) {
    //   addMessage('Accurack', "I'd be happy to help schedule a demo. What's your name?");
    //   setBookingState('name'); setInput(''); return;
    // }

    const shouldScheduleDemo = (msg: string) => {
      const normalized = msg.toLowerCase().replace(/[^a-z\s]/g, '');
      return /s[ck]h?e?d?u?l?e?.*(demo|meeting|call)/i.test(normalized);
    };

    if (bookingState === 'name') {
      setUserInfo(prev => ({ ...prev, name: message }));
      addMessage('user', message);
      setInput('');
      addMessage('Accurack', 'Thanks! Now please provide your email address.');
      setBookingState('email');
      return;
    } else if (bookingState === 'email') {
      setUserInfo(prev => ({ ...prev, email: message }));
      addMessage('user', message);
      setInput('');
      addMessage('Accurack', 'Awesome! Here’s my calendar, pick a time that works for you:');
      setBookingState('calendly');
      return;
    } else if (bookingState === 'idle' && shouldScheduleDemo(message)) {
      addMessage('user', message);
      setInput('');
      addMessage('Accurack', "I'd be happy to help schedule a demo. What's your name?");
      setBookingState('name');
      return;
    }

    const isFreeTrialRequest = (msg: string) => {
      const normalized = msg.toLowerCase().replace(/[^a-z\s]/g, '');
      return /(free\s?trial|start.*trial|try.*free|sign.*up.*trial)/i.test(normalized);
    };

    addMessage('user', message);

    if (isFreeTrialRequest(message)) {
      addMessage('Accurack', freeTrialMessage);
      setInput('');
      return;
    }

    try {
      const response = await fetch('https://accurackwebbackend-production.up.railway.app/api/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message,
          knowledgeBase,
        }),
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
    <div className="fixed bottom-[3%] right-[3%] w-[90%] sm:w-[320px] md:w-[380px] bg-white border border-gray-300 rounded-xl shadow-2xl z-[999999] flex flex-col overflow-hidden text-[13px] sm:text-[14px] min-h-[60vh]">
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
          <ImCross size={15} />
        </button>
      </div>

      {/* Messages */}

      <div className="flex-1 overflow-y-auto max-h-[250px] sm:max-h-[300px] px-3 py-2 space-y-2 text-sm bg-gray-50">

        {/* Static Hi message */}
        <div className="p-2 sm:p-3 rounded-lg max-w-[85%] bg-white shadow">

          <p>Hi there! I'm Sam, an AI Assistant here at Accurack AI. If you need anything, just let me know!</p>
          {/* <span className="text-[9px] text-gray-500 block mt-1">{msg.time}</span> */}
        </div>



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

        {/* 👇 Auto-scroll anchor */}
        <div ref={bottomRef} />
      </div>

      {/* Quick buttons */}
      <div className="flex justify-between px-2 py-2 sm:px-3 sm:py-2 gap-1 sm:gap-2 bg-white text-xs sm:text-sm">
        <button
          onClick={() => handleQuickSend("I'd like to schedule a demo.")}
          className="flex-1 border-1 border-[#007f91] bg-white hover:bg-[#007f91] text-[#007f91] hover:text-white rounded-full py-1 px-1 transition-all"
        >
          Schedule Demo
        </button>
        <button
          onClick={() => handleQuickSend("I'd like to start a free trial.")}
          className="flex-1 border-1 border-[#007f91] bg-white hover:bg-[#007f91] text-[#007f91] hover:text-white rounded-full py-1 px-1 transition-all"
        >
          Start a Trial
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
