'use client';

import { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';

export default function AskAIPage() {
  const [question, setQuestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [conversation, setConversation] = useState([
    {
      id: 1,
      type: 'ai',
      content: "As-salamu alaykum! I'm here to help answer your Islamic questions. Feel free to ask about Qur'an, Hadith, Islamic jurisprudence, worship, or any spiritual matter. How can I assist you today?",
      timestamp: new Date()
    }
  ]);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isMountedRef = useRef(true);

  // Pre-written FAQ data
  const faqData = [
    {
      question: "What is Zakatul Fitr?",
      answer: "Zakatul Fitr is the charity given by Muslims at the end of Ramadan before the Eid prayer. It is obligatory on every Muslim who has food in excess of their needs for one day and night. The amount is equivalent to one Sa' (approximately 2.5 kg) of staple food like rice, wheat, or dates. It purifies the soul from the sins committed during Ramadan and helps the poor celebrate Eid."
    },
    {
      question: "Can you make du'a for someone who passed away?",
      answer: "Yes, making du'a for the deceased is one of the greatest forms of charity and benefit you can provide to them. The Prophet (peace be upon him) said that when a person dies, their deeds are cut off except for three things: ongoing charity, beneficial knowledge, and a righteous child who prays for them. Common du'as include asking Allah to forgive them, grant them Paradise, and ease their trials in the grave."
    },
    {
      question: "How many times should Ayatul Kursi be read daily?",
      answer: "Ayatul Kursi should be recited after each of the five daily prayers, in the morning and evening remembrance, and before going to sleep. The Prophet (peace be upon him) said that whoever recites it after each prayer, nothing prevents them from entering Paradise except death. It provides protection from harm and brings immense spiritual benefits when recited regularly."
    },
    {
      question: "What are the conditions for valid Wudu?",
      answer: "Valid Wudu requires washing the face, hands up to the elbows, wiping the head, and washing the feet up to the ankles. The water must be pure, you must have the intention (niyyah), and the washing must be done in the correct order without long gaps between each step. Things that break Wudu include using the bathroom, passing gas, deep sleep, and touching private parts."
    },
    {
      question: "Is it permissible to listen to music in Islam?",
      answer: "This is a matter of scholarly difference. Many scholars consider musical instruments (except the duff/tambourine) to be impermissible based on various hadith. However, vocals without instruments, nasheeds with beneficial content, and music for educational purposes are generally more accepted. It's recommended to avoid music that promotes sinful behavior or distracts from religious obligations."
    },
    {
      question: "What is the importance of Friday prayer (Jumu'ah)?",
      answer: "Friday prayer is obligatory for adult Muslim men and is one of the most important weekly gatherings. Allah says in the Quran: 'When the call is proclaimed for prayer on Friday, hasten to the remembrance of Allah and leave off business.' The Prophet (peace be upon him) emphasized its importance and warned against missing it without valid excuse. It includes a khutbah (sermon) that provides spiritual guidance to the community."
    }
  ];

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim() || isLoading) return;

    const currentQuestion = question.trim();

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: currentQuestion,
      timestamp: new Date()
    };

    setConversation(prev => [...prev, userMessage]);
    setIsLoading(true);
    setQuestion('');

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      if (isMountedRef.current) {
        const aiResponse = {
          id: Date.now() + 1,
          type: 'ai',
          content: getAIResponse(currentQuestion),
          timestamp: new Date(),
          showTelegramFallback: shouldShowTelegramFallback(currentQuestion)
        };

        setConversation(prev => [...prev, aiResponse]);
        setIsLoading(false);
      }
    }, 2000);
  };

  const shouldShowTelegramFallback = (userQuestion: string): boolean => {
    const offTopicKeywords = ['weather', 'politics', 'sports', 'entertainment', 'technology', 'business', 'cooking', 'travel'];
    const questionLower = userQuestion.toLowerCase();
    
    return offTopicKeywords.some(keyword => questionLower.includes(keyword)) || 
           userQuestion.length < 10 ||
           Math.random() > 0.7; // 30% chance to show fallback for demonstration
  };

  const getAIResponse = (userQuestion: string): string => {
    if (shouldShowTelegramFallback(userQuestion)) {
      return "🤖 Sorry, this question requires a more specific response or is outside my knowledge scope. For detailed guidance on complex Islamic matters, please contact our Telegram bot where our scholars can provide comprehensive answers.";
    }

    const responses = [
      "According to Islamic teachings, the five daily prayers (Salah) are obligatory for every Muslim who has reached the age of maturity. The prayers are: Fajr (dawn), Dhuhr (midday), Asr (afternoon), Maghrib (sunset), and Isha (night). Each prayer has specific times and consists of a certain number of units (rak'ah). The Prophet Muhammad (peace be upon him) said: 'The first thing about which people will be questioned on the Day of Resurrection will be prayer.'",
      
      "In Islam, seeking knowledge is highly emphasized. The Prophet Muhammad (peace be upon him) said: 'Seek knowledge from the cradle to the grave' and 'The ink of the scholar is more sacred than the blood of the martyr.' Allah says in the Qur'an: 'And say: My Lord, increase me in knowledge' (20:114). Islamic knowledge encompasses understanding the Qur'an, Hadith, Islamic jurisprudence (Fiqh), and applying these teachings in daily life.",
      
      "The concept of Tawakkul (trust in Allah) is fundamental in Islam. It means having complete faith and reliance on Allah while taking necessary worldly measures. The Qur'an states: 'And whoever relies upon Allah - then He is sufficient for him. Indeed, Allah will accomplish His purpose' (65:3). Tawakkul doesn't mean being passive; rather, it means doing your best and then trusting Allah with the results.",
      
      "Dhikr (remembrance of Allah) is essential for spiritual purification and closeness to Allah. The Qur'an mentions: 'Those who believe and whose hearts find rest in the remembrance of Allah. Verily, in the remembrance of Allah do hearts find rest' (13:28). Simple dhikr includes saying 'SubhanAllah' (Glory be to Allah), 'Alhamdulillah' (Praise be to Allah), and 'Allahu Akbar' (Allah is the Greatest)."
    ];

    return responses[Math.floor(Math.random() * responses.length)];
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const suggestedQuestions = [
    "What are the pillars of Islam?",
    "How should I perform Wudu correctly?",
    "What is the importance of Friday prayer?",
    "How can I increase my Iman (faith)?",
    "What does Islam say about forgiveness?",
    "How should I handle difficult times?",
    "What are the benefits of reading Qur'an daily?",
    "How can I improve my relationship with Allah?"
  ];

  const handleSuggestedQuestion = (suggestion: string) => {
    if (!isLoading) {
      setQuestion(suggestion);
    }
  };

  const handleFAQQuestion = (faqQuestion: string) => {
    if (!isLoading) {
      setQuestion(faqQuestion);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      <Header />

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Ask AI Islamic Questions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get AI-powered answers to your Islamic questions based on Qur'an and authentic Hadith
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - FAQ Section */}
          <div className="space-y-6">
            {/* Pre-written Q&A Section */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-emerald-100 text-emerald-600 rounded-lg">
                    <i className="ri-question-line text-lg"></i>
                  </div>
                  Frequently Asked Questions
                </h2>
                <p className="text-gray-600 mt-2">Common Islamic questions with detailed answers</p>
              </div>
              
              <div className="p-6 space-y-4">
                {faqData.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                      className="w-full p-4 text-left hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-gray-800 pr-4">{faq.question}</h3>
                        <div className="w-6 h-6 flex items-center justify-center text-emerald-600 flex-shrink-0">
                          <i className={`ri-${expandedFAQ === index ? 'subtract' : 'add'}-line text-lg`}></i>
                        </div>
                      </div>
                    </button>
                    
                    {expandedFAQ === index && (
                      <div className="px-4 pb-4 border-t border-gray-100 bg-gray-50">
                        <p className="text-gray-700 leading-relaxed mt-3 mb-4">{faq.answer}</p>
                        <button
                          onClick={() => handleFAQQuestion(faq.question)}
                          className="text-emerald-600 hover:text-emerald-700 text-sm font-medium flex items-center gap-2 cursor-pointer"
                          disabled={isLoading}
                        >
                          <i className="ri-chat-3-line text-sm"></i>
                          Ask this question in chat
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Chat Interface */}
          <div className="space-y-6">
            {/* Chat Container */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100" style={{ height: '600px' }}>
              <div className="p-4 border-b border-gray-100">
                <h2 className="text-xl font-bold text-gray-800 flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-teal-100 text-teal-600 rounded-lg">
                    <i className="ri-chat-3-line text-lg"></i>
                  </div>
                  Ask Your Own Question
                </h2>
              </div>
              
              <div className="h-full flex flex-col">
                <div className="flex-1 overflow-y-auto p-6 space-y-6" style={{ height: 'calc(100% - 140px)' }}>
                  {conversation.map((message: any) => (
                    <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`flex gap-3 max-w-full ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                        {/* Avatar */}
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${message.type === 'user' ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-600'}`}>
                          <i className={`ri-${message.type === 'user' ? 'user' : 'robot'}-line text-lg`}></i>
                        </div>

                        {/* Message Content */}
                        <div className={`flex flex-col ${message.type === 'user' ? 'items-end' : 'items-start'}`}>
                          <div className={`px-4 py-3 rounded-2xl max-w-full ${message.type === 'user' ? 'bg-emerald-600 text-white' : 'bg-gray-50 text-gray-800'}`}>
                            <p className="leading-relaxed">{message.content}</p>
                          </div>
                          
                          {/* Telegram Fallback Button */}
                          {message.type === 'ai' && message.showTelegramFallback && (
                            <div className="mt-3 px-2">
                              <a
                                href="https://t.me/raadi_cilmi_bot"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white rounded-xl text-sm font-medium transition-colors cursor-pointer whitespace-nowrap"
                              >
                                <i className="ri-telegram-line text-lg"></i>
                                Contact Telegram Bot
                              </a>
                              <p className="text-xs text-gray-500 mt-1">Get detailed answers from our scholars</p>
                            </div>
                          )}
                          
                          <span className="text-xs text-gray-500 mt-1 px-2">
                            {formatTime(message.timestamp)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Loading Message */}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="flex gap-3 max-w-full">
                        <div className="w-10 h-10 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center flex-shrink-0">
                          <i className="ri-robot-line text-lg"></i>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 rounded-2xl">
                          <div className="flex items-center gap-2">
                            <div className="flex gap-1">
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                            </div>
                            <span className="text-gray-500 text-sm">AI is thinking...</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Input Form */}
                <div className="border-t border-gray-200 p-4">
                  <form onSubmit={handleSubmit} className="flex gap-3">
                    <div className="flex-1 relative">
                      <textarea
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        placeholder="Type your Islamic question..."
                        maxLength={500}
                        rows={1}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 resize-none text-sm"
                        style={{ minHeight: '48px', maxHeight: '120px' }}
                        disabled={isLoading}
                      />
                      <div className="absolute bottom-2 right-2 text-xs text-gray-400">
                        {question.length}/500
                      </div>
                    </div>
                    <button
                      type="submit"
                      disabled={!question.trim() || isLoading}
                      className="bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-300 text-white px-6 py-3 rounded-xl font-semibold transition-colors cursor-pointer whitespace-nowrap"
                    >
                      {isLoading ? (
                        <div className="w-5 h-5 flex items-center justify-center">
                          <i className="ri-loader-4-line animate-spin"></i>
                        </div>
                      ) : (
                        <div className="w-5 h-5 flex items-center justify-center">
                          <i className="ri-send-plane-fill"></i>
                        </div>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Suggested Questions */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Questions</h3>
              <div className="grid grid-cols-1 gap-2">
                {suggestedQuestions.slice(0, 4).map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestedQuestion(suggestion)}
                    className="text-left p-3 bg-gray-50 hover:bg-emerald-50 rounded-lg text-sm text-gray-700 hover:text-emerald-700 transition-colors cursor-pointer"
                    disabled={isLoading}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 text-amber-600 mt-0.5">
              <i className="ri-information-line text-sm"></i>
            </div>
            <div>
              <p className="text-amber-800 text-sm">
                <strong>Important:</strong> This AI provides general Islamic guidance based on Qur'an and Hadith. 
                For complex religious matters or personal fatwas, please consult qualified Islamic scholars or contact our Telegram bot for detailed responses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}