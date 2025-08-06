
'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      {/* Hero Section */}
      <div 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Beautiful%20Islamic%20geometric%20patterns%20and%20calligraphy%20in%20golden%20and%20emerald%20colors%2C%20peaceful%20mosque%20interior%20with%20soft%20natural%20lighting%2C%20ornate%20Islamic%20architecture%20details%2C%20spiritual%20atmosphere%2C%20clean%20minimalist%20background%20with%20subtle%20Islamic%20art%20elements&width=1920&height=1080&seq=hero-islamic-bg&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center text-white">
          <div className="mb-8">
            <h1 className="font-[\\\'Pacifico\\\'] text-4xl md:text-6xl mb-4 text-emerald-200">Raadi.Cilmi.ai</h1>
            <p className="text-xl md:text-2xl mb-2 font-light">Seek Knowledge. Seek Mercy.</p>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Your AI-powered companion for Islamic knowledge - Tafsir, Du\'as, Lectures, and answers to your spiritual questions
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/search" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer">
              Start Searching
            </Link>
            <a href="https://t.me/raadi_cilmi_bot" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer">
              Contact the Bot
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <Link href="/tafsir" className="bg-white/20 backdrop-blur-md hover:bg-white/30 p-6 rounded-xl transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <i className="ri-book-open-line text-2xl text-emerald-200"></i>
              </div>
              <h3 className="font-semibold text-emerald-200">Qur\'an Tafsir</h3>
            </Link>

            <Link href="/duas" className="bg-white/20 backdrop-blur-md hover:bg-white/30 p-6 rounded-xl transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <i className="ri-heart-line text-2xl text-emerald-200"></i>
              </div>
              <h3 className="font-semibold text-emerald-200">Islamic Du\'as</h3>
            </Link>

            <Link href="/lectures" className="bg-white/20 backdrop-blur-md hover:bg-white/30 p-6 rounded-xl transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <i className="ri-play-circle-line text-2xl text-emerald-200"></i>
              </div>
              <h3 className="font-semibold text-emerald-200">Lectures</h3>
            </Link>

            <Link href="/ask-ai" className="bg-white/20 backdrop-blur-md hover:bg-white/30 p-6 rounded-xl transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <i className="ri-question-answer-line text-2xl text-emerald-200"></i>
              </div>
              <h3 className="font-semibold text-emerald-200">Ask AI</h3>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Everything You Need for Islamic Knowledge</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access authentic Islamic teachings through modern technology - available on Telegram and web
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Telegram Bot Interface</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-emerald-100 rounded-lg">
                    <i className="ri-command-line text-emerald-600"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">/tafsiir - Get Qur\'an commentary</p>
                    <p className="text-gray-600 text-sm">Ask for specific Surah and Ayah explanations</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-emerald-100 rounded-lg">
                    <i className="ri-heart-line text-emerald-600"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">/duco - Daily prayers and supplications</p>
                    <p className="text-gray-600 text-sm">Morning, evening, and special occasion du\'as</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-emerald-100 rounded-lg">
                    <i className="ri-play-line text-emerald-600"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">/muxaadaro - Islamic lectures</p>
                    <p className="text-gray-600 text-sm">Educational content on various Islamic topics</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-emerald-100 rounded-lg">
                    <i className="ri-question-line text-emerald-600"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">/su_aal - Ask Islamic questions</p>
                    <p className="text-gray-600 text-sm">Get AI-powered answers to your spiritual queries</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl shadow-xl bg-white overflow-hidden">
              {/* Mobile UI Design Mockup */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-600 to-blue-700 p-4">
                {/* Mobile Status Bar */}
                <div className="flex justify-between items-center text-white text-xs mb-2">
                  <span>9:41 AM</span>
                  <div className="flex items-center gap-1">
                    <i className="ri-signal-wifi-line"></i>
                    <i className="ri-battery-line"></i>
                  </div>
                </div>
                
                {/* Header */}
                <div className="flex items-center gap-3 mb-4 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <i className="ri-robot-line text-blue-600 text-lg"></i>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold">Raadi Cilmi Bot</h4>
                    <p className="text-blue-200 text-sm">Mobile UI Enhanced</p>
                  </div>
                  <div className="w-6 h-6 flex items-center justify-center">
                    <i className="ri-more-2-line text-white"></i>
                  </div>
                </div>
                
                {/* Chat Messages with Mobile UI Design */}
                <div className="space-y-3 text-sm h-48 overflow-y-auto">
                  {/* User Message */}
                  <div className="flex justify-end">
                    <div className="bg-emerald-500 text-white px-4 py-2 rounded-2xl rounded-br-md max-w-xs shadow-lg">
                      <div className="text-xs opacity-75 mb-1">📱 Mobile Request</div>
                      /tafsiir Al-Baqara 255
                    </div>
                  </div>
                  
                  {/* Bot Response with Mobile UI Elements */}
                  <div className="flex justify-start">
                    <div className="bg-white text-gray-800 px-4 py-3 rounded-2xl rounded-bl-md max-w-xs shadow-lg">
                      <div className="flex items-center gap-2 mb-2 text-xs text-blue-600">
                        <i className="ri-smartphone-line"></i>
                        <span>Mobile Optimized</span>
                      </div>
                      <div className="text-sm">
                        <div className="bg-gray-50 p-2 rounded-lg mb-2">
                          <div className="text-xs text-gray-500 mb-1">🕋 Ayatul Kursi</div>
                          <div className="text-right text-lg font-arabic">ٱللَّهُ لَا إِلَٰهَ إِلَّا هُوَ</div>
                        </div>
                        <div className="grid grid-cols-2 gap-1 mt-2">
                          <button className="bg-blue-100 text-blue-700 text-xs py-1 px-2 rounded-md">
                            🔊 Audio
                          </button>
                          <button className="bg-emerald-100 text-emerald-700 text-xs py-1 px-2 rounded-md">
                            📖 Full
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* User Message */}
                  <div className="flex justify-end">
                    <div className="bg-emerald-500 text-white px-4 py-2 rounded-2xl rounded-br-md max-w-xs shadow-lg">
                      <div className="flex items-center gap-2 text-xs opacity-75 mb-1">
                        <i className="ri-smartphone-line"></i>
                        <span>Touch Interface</span>
                      </div>
                      /duco morning
                    </div>
                  </div>
                  
                  {/* Bot Response with Mobile Card UI */}
                  <div className="flex justify-start">
                    <div className="bg-white text-gray-800 px-4 py-3 rounded-2xl rounded-bl-md max-w-xs shadow-lg">
                      <div className="border-l-4 border-emerald-500 pl-3 mb-2">
                        <div className="text-xs font-semibold text-emerald-600">🤲 Morning Du\'a</div>
                        <div className="text-xs text-gray-500">Swipe for translation</div>
                      </div>
                      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-2 rounded-lg">
                        <div className="text-right text-sm font-arabic mb-1">اللهم بك أصبحنا</div>
                        <div className="text-xs text-gray-600">O Allah, with You we enter morning...</div>
                      </div>
                      <div className="flex gap-1 mt-2">
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                          <i className="ri-play-mini-fill text-blue-600 text-xs"></i>
                        </div>
                        <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                          <i className="ri-share-line text-gray-600 text-xs"></i>
                        </div>
                        <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                          <i className="ri-heart-line text-red-600 text-xs"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* User typing with mobile keyboard indicator */}
                  <div className="flex justify-end">
                    <div className="bg-emerald-400/70 text-white px-4 py-2 rounded-2xl rounded-br-md max-w-xs">
                      <div className="flex items-center gap-2 text-xs opacity-75 mb-1">
                        <i className="ri-keyboard-line"></i>
                        <span>Mobile Keyboard</span>
                      </div>
                      /su_aal What is the best du\'a for...
                      <span className="inline-block w-2 h-3 bg-white ml-1 animate-pulse rounded-sm"></span>
                    </div>
                  </div>
                </div>
                
                {/* Mobile Input Area */}
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-3 shadow-lg">
                    <i className="ri-add-circle-line text-gray-400"></i>
                    <span className="text-gray-500 text-sm flex-1">Mobile-optimized typing...</span>
                    <div className="flex gap-2">
                      <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                        <i className="ri-mic-line text-gray-600 text-xs"></i>
                      </div>
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                        <i className="ri-send-plane-fill text-white text-xs"></i>
                      </div>
                    </div>
                  </div>
                  
                  {/* Mobile UI Indicators */}
                  <div className="flex justify-center mt-2 gap-2">
                    <div className="w-8 h-1 bg-white/50 rounded-full"></div>
                    <div className="w-8 h-1 bg-white rounded-full"></div>
                    <div className="w-8 h-1 bg-white/50 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-white mb-6">Start Your Spiritual Journey Today</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Join thousands of Muslims seeking knowledge through our AI-powered Islamic companion
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://t.me/raadi_cilmi_bot" target="_blank" rel="noopener noreferrer" className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer">
              Start on Telegram
            </a>
            <Link href="/search" className="bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer border-2 border-white/30">
              Explore Web App
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-[\\\'Pacifico\\\'] text-2xl text-emerald-400 mb-4">Raadi.Cilmi.ai</h3>
              <p className="text-gray-400 text-sm">
                Empowering Muslims with authentic Islamic knowledge through AI technology
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <Link href="/tafsir" className="block text-gray-400 hover:text-emerald-400 transition-colors cursor-pointer">Qur\'an Tafsir</Link>
                <Link href="/duas" className="block text-gray-400 hover:text-emerald-400 transition-colors cursor-pointer">Du\'as</Link>
                <Link href="/lectures" className="block text-gray-400 hover:text-emerald-400 transition-colors cursor-pointer">Lectures</Link>
                <Link href="/ask-ai" className="block text-gray-400 hover:text-emerald-400 transition-colors cursor-pointer">Ask AI</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <div className="space-y-2 text-sm">
                <Link href="/about" className="block text-gray-400 hover:text-emerald-400 transition-colors cursor-pointer">About</Link>
                <Link href="/contact" className="block text-gray-400 hover:text-emerald-400 transition-colors cursor-pointer">Contact</Link>
                <a href="https://t.me/raadi_cilmi_bot" className="block text-gray-400 hover:text-emerald-400 transition-colors cursor-pointer">Telegram Bot</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="space-y-3">
                <div className="flex gap-4">
                  <a href="https://t.me/raadi_cilmi_bot" className="w-10 h-10 flex items-center justify-center bg-gray-700 hover:bg-emerald-600 rounded-full transition-colors cursor-pointer">
                    <i className="ri-telegram-line text-lg"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/ahmett-w-ab52391b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-gray-700 hover:bg-blue-600 rounded-full transition-colors cursor-pointer">
                    <i className="ri-linkedin-line text-lg"></i>
                  </a>
                </div>
                <div className="text-sm text-gray-400">
                  <div className="flex items-center gap-2 mb-1">
                    <i className="ri-phone-line"></i>
                    <span>+252 61 809 1547</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 Raadi.Cilmi.ai. Built with knowledge and compassion.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
