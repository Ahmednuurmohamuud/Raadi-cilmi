
'use client';

import { useState, useEffect } from 'react';
import Header from '../components/Header';

export default function MobileInterfacePage() {
  const [currentConversation, setCurrentConversation] = useState('tafsir');
  const [isTyping, setIsTyping] = useState(false);
  const [conversationStep, setConversationStep] = useState(0);

  // Simulate typing effect
  useEffect(() => {
    const typingInterval = setInterval(() => {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setConversationStep(prev => prev + 1);
      }, 2000);
    }, 8000);

    return () => clearInterval(typingInterval);
  }, []);

  const tafsirConversation = [
    { type: 'user', text: '/tafsiir' },
    { type: 'bot', text: '📖 Please type the Surah and Ayah (e.g., Al-Baqara 2)' },
    { type: 'user', text: 'Al-Baqara 2' },
    { 
      type: 'bot', 
      text: '🔍 Tafsir of Al-Baqara [2]\n\n🕋 Arabic: ذَٰلِكَ ٱلۡكِتَٰبُ لَا رَيۡبَۛ فِيهِۛ هُدٗى لِّلۡمُتَّقِينَ\n\n🇸🇴 Somali: Kitaabkaasi ma jiro wax shaki ah, wuxuuna u yahay hanuunin kuwa Ilaahay ka cabsanaya\n\n🇬🇧 English: This is the Book about which there is no doubt, a guidance for those conscious of Allah\n\n📘 Tafsir (Somali): Kitaabkani waa Qur\'aanka uu Ilaahay ku hanuuninayo dadka rumeeysan. Waxay la macno tahay in aan jirin wax shaki ah oo ku saabsan inuu yahay kalmadii Ilaahay.',
      hasButtons: true,
      buttons: ['▶️ Listen to Tafsir', '📄 Read Full Tafsir', '📤 Share']
    }
  ];

  const duaConversation = [
    { type: 'user', text: '/duco' },
    { type: 'bot', text: '🤲 What type of du\'a are you looking for?' },
    { 
      type: 'bot', 
      text: 'Options:\n- 🕊️ Morning\n- 🛡️ Protection\n- ❤️ Forgiveness\n- 🧠 Knowledge',
      hasInlineButtons: true,
      buttons: ['🕊️ Morning', '🛡️ Protection', '❤️ Forgiveness', '🧠 Knowledge']
    },
    { type: 'user_selection', text: '🕊️ Morning' },
    {
      type: 'bot',
      text: '🏷️ Du\'a: Morning Du\'a\n\n🧾 Arabic: اللهم بك أصبحنا وبك أمسينا وبك نحيا وبك نموت وإليك النشور\n\n🇸🇴 Somali: Ilaahow adigaa subaxda noo bilaabay, adigaana fiidka noo bilaabay, adiguunna nagu noolnahaay, adiguunna nagu dhimannahaay, adiguunna ayaannu ku noqonaynaa\n\n🇬🇧 English: O Allah, with You we enter the morning and with You we enter the evening, with You we live and with You we die, and to You is the resurrection',
      hasButtons: true,
      buttons: ['▶️ Play Audio', '📄 Copy', '📤 Share']
    }
  ];

  const qnaConversation = [
    { type: 'user', text: '/su_aal' },
    { type: 'bot', text: '❓ What Islamic question do you have? I\'m here to help with guidance from Qur\'an and Sunnah.' },
    { type: 'user', text: 'What is the best time for making du\'a?' },
    {
      type: 'bot',
      text: '🕐 Best Times for Du\'a:\n\n1. **Between Maghrib and Isha**: Prophet (PBUH) said this is a blessed time\n\n2. **Last third of the night**: Allah descends to the lowest heaven\n\n3. **Between Asr and Maghrib on Friday**: Especially recommended\n\n4. **During Sujood in Salah**: You are closest to Allah\n\n5. **After obligatory prayers**: When the heart is purified\n\n📚 Source: Sahih Bukhari, Muslim, Abu Dawud\n\n"The closest a servant is to his Lord is when he is in prostration, so make du\'a abundantly." - Prophet Muhammad (PBUH)',
      hasButtons: true,
      buttons: ['📖 More Islamic Q&A', '🤲 Request Du\'a', '📤 Share']
    }
  ];

  const lectureConversation = [
    { type: 'user', text: '/muxaadaro' },
    { type: 'bot', text: '🎓 Which Islamic topic would you like to learn about?' },
    {
      type: 'bot',
      text: 'Available Topics:\n- 🕋 Hajj & Umrah\n- 💰 Zakat & Charity\n- 👨‍👩‍👧‍👦 Family in Islam\n- 🧠 Seeking Knowledge\n- ⚰️ Death & Afterlife',
      hasInlineButtons: true,
      buttons: ['🕋 Hajj & Umrah', '💰 Zakat', '👨‍👩‍👧‍👦 Family', '🧠 Knowledge', '⚰️ Afterlife']
    },
    { type: 'user_selection', text: '🧠 Seeking Knowledge' },
    {
      type: 'bot',
      text: '📚 The Importance of Seeking Knowledge in Islam\n\n🎤 Speaker: Sheikh Ahmad Ibn Hanbal\n⏱️ Duration: 42:30\n\n"The first revelation to Prophet Muhammad (PBUH) began with \'Iqra\' - Read! This shows the fundamental importance of learning in Islam.\n\nKey points:\n• Knowledge is a form of worship\n• Seeking knowledge is obligatory on every Muslim\n• The ink of the scholar is more sacred than the blood of the martyr\n• Knowledge should be shared, not hoarded\n\nAllah says: \'And say: My Lord, increase me in knowledge\' (20:114)"',
      hasButtons: true,
      buttons: ['🎧 Listen Audio', '📹 Watch Video', '📝 Full Transcript', '📤 Share']
    }
  ];

  const conversations = {
    tafsir: tafsirConversation,
    dua: duaConversation,
    qna: qnaConversation,
    lecture: lectureConversation
  };

  const getCurrentMessages = () => {
    const conversation = conversations[currentConversation as keyof typeof conversations];
    const messagesToShow = Math.min(conversationStep + 1, conversation.length);
    return conversation.slice(0, messagesToShow);
  };

  const handleConversationSwitch = (type: string) => {
    setCurrentConversation(type);
    setConversationStep(0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Telegram Bot Interface</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience how users interact with the Raadi Cilmi Bot through conversational flows
          </p>
        </div>

        {/* Conversation Type Selector */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
          <h3 className="font-semibold text-gray-800 mb-3">Select Conversation Type:</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <button
              onClick={() => handleConversationSwitch('tafsir')}
              className={`flex items-center gap-2 p-3 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                currentConversation === 'tafsir'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-emerald-50'
              }`}
            >
              <i className="ri-book-open-line"></i>
              Tafsir
            </button>
            <button
              onClick={() => handleConversationSwitch('dua')}
              className={`flex items-center gap-2 p-3 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                currentConversation === 'dua'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-emerald-50'
              }`}
            >
              <i className="ri-heart-line"></i>
              Du'a
            </button>
            <button
              onClick={() => handleConversationSwitch('qna')}
              className={`flex items-center gap-2 p-3 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                currentConversation === 'qna'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-emerald-50'
              }`}
            >
              <i className="ri-question-line"></i>
              Q&A
            </button>
            <button
              onClick={() => handleConversationSwitch('lecture')}
              className={`flex items-center gap-2 p-3 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                currentConversation === 'lecture'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-emerald-50'
              }`}
            >
              <i className="ri-play-circle-line"></i>
              Lecture
            </button>
          </div>
        </div>

        {/* Telegram Interface Mockup */}
        <div className="max-w-md mx-auto">
          <div className="bg-blue-600 rounded-t-xl p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <i className="ri-robot-line text-blue-600 text-lg"></i>
              </div>
              <div>
                <h4 className="text-white font-semibold">Raadi Cilmi Bot</h4>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-blue-200 text-sm">Online</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white h-96 overflow-y-auto p-4 space-y-3">
            {getCurrentMessages().map((message, index) => (
              <div key={index} className={`flex ${message.type === 'user' || message.type === 'user_selection' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs lg:max-w-sm px-4 py-2 rounded-2xl ${
                  message.type === 'user' || message.type === 'user_selection'
                    ? 'bg-emerald-500 text-white'
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  <div className="whitespace-pre-line text-sm leading-relaxed">
                    {message.text}
                  </div>
                  
                  {message.hasButtons && (
                    <div className="flex flex-wrap gap-1 mt-3">
                      {message.buttons?.map((button, btnIndex) => (
                        <button
                          key={btnIndex}
                          className="bg-white/20 hover:bg-white/30 text-xs px-2 py-1 rounded-md transition-colors cursor-pointer"
                        >
                          {button}
                        </button>
                      ))}
                    </div>
                  )}

                  {message.hasInlineButtons && (
                    <div className="grid grid-cols-2 gap-1 mt-3">
                      {message.buttons?.map((button, btnIndex) => (
                        <button
                          key={btnIndex}
                          className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-2 py-1 rounded-md transition-colors cursor-pointer"
                        >
                          {button}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 px-4 py-2 rounded-2xl">
                  <div className="flex items-center gap-1">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                    <span className="text-gray-500 text-xs ml-2">Bot is typing...</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="bg-gray-100 rounded-b-xl p-3">
            <div className="flex items-center gap-3">
              <i className="ri-attachment-line text-gray-400"></i>
              <div className="flex-1 bg-white rounded-full px-4 py-2">
                <span className="text-gray-400 text-sm">Type a command...</span>
              </div>
              <div className="w-8 h-8 flex items-center justify-center bg-emerald-600 text-white rounded-full">
                <i className="ri-send-plane-fill text-sm"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Command Reference */}
        <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center bg-emerald-100 text-emerald-600 rounded-lg">
              <i className="ri-command-line text-lg"></i>
            </div>
            Bot Commands Reference
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="border-l-4 border-emerald-500 pl-4">
                <h4 className="font-semibold text-gray-800 mb-1">/tafsiir</h4>
                <p className="text-sm text-gray-600">Get Qur'an commentary and interpretation</p>
                <p className="text-xs text-emerald-600 mt-1">Example: /tafsiir Al-Baqara 2</p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-gray-800 mb-1">/duco</h4>
                <p className="text-sm text-gray-600">Access daily prayers and supplications</p>
                <p className="text-xs text-blue-600 mt-1">Categories: Morning, Protection, Forgiveness</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-gray-800 mb-1">/muxaadaro</h4>
                <p className="text-sm text-gray-600">Educational lectures on Islamic topics</p>
                <p className="text-xs text-purple-600 mt-1">Topics: Hajj, Zakat, Family, Knowledge</p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold text-gray-800 mb-1">/su_aal</h4>
                <p className="text-sm text-gray-600">Ask Islamic questions for AI-powered answers</p>
                <p className="text-xs text-orange-600 mt-1">Get guidance from Qur'an and Sunnah</p>
              </div>
            </div>
          </div>
        </div>

        {/* How to Access */}
        <div className="mt-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Start Using the Bot</h3>
          <p className="text-gray-600 mb-4">
            Click the button below to open Telegram and start your Islamic learning journey
          </p>
          <a
            href="https://t.me/raadi_cilmi_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors cursor-pointer whitespace-nowrap"
          >
            <i className="ri-telegram-line text-lg"></i>
            Open Raadi Cilmi Bot
          </a>
        </div>
      </div>
    </div>
  );
}
