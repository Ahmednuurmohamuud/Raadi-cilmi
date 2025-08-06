
'use client';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      {/* Hero Section */}
      <div 
        className="relative py-20 bg-emerald-600"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Islamic%20geometric%20patterns%20in%20soft%20emerald%20and%20gold%20colors%2C%20peaceful%20mosque%20architecture%20with%20natural%20lighting%2C%20spiritual%20atmosphere%2C%20contact%20and%20communication%20theme%2C%20modern%20Islamic%20art%20design%20elements&width=1920&height=600&seq=contact-hero&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-emerald-600/80"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            Have questions about Islamic knowledge or need help with our platform? We're here to assist you.
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Information</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Reach out to us for questions about Islamic knowledge, technical support, or collaboration opportunities.
                </p>
              </div>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-lg">
                  <div className="w-12 h-12 flex items-center justify-center bg-emerald-100 rounded-lg">
                    <i className="ri-phone-line text-emerald-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Phone</h3>
                    <a href="tel:+252618091547" className="text-emerald-600 hover:text-emerald-700 transition-colors cursor-pointer">
                      +252 61 809 1547
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-lg">
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg">
                    <i className="ri-linkedin-line text-blue-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">LinkedIn</h3>
                    <a 
                      href="https://www.linkedin.com/in/ahmett-w-ab52391b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
                    >
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>

                {/* Telegram Bot */}
                <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-lg">
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg">
                    <i className="ri-telegram-line text-blue-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Telegram Bot</h3>
                    <a 
                      href="https://t.me/raadi_cilmi_bot" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
                    >
                      @raadi_cilmi_bot
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h2>
              
              <form id="contact-form" className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors pr-8"
                  >
                    <option value="">Select a subject</option>
                    <option value="islamic-question">Islamic Question</option>
                    <option value="technical-support">Technical Support</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    maxLength={500}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none"
                    placeholder="Your message (max 500 characters)"
                  ></textarea>
                  <p className="text-sm text-gray-500 mt-1">Maximum 500 characters</p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions about our Islamic knowledge platform
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-emerald-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 mb-2">How accurate are the AI responses?</h3>
              <p className="text-gray-600">
                Our AI provides general guidance based on authentic Islamic sources. For complex religious matters, we always recommend consulting with qualified Islamic scholars.
              </p>
            </div>

            <div className="bg-emerald-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 mb-2">Is the Telegram bot free to use?</h3>
              <p className="text-gray-600">
                Yes, our Telegram bot is completely free to use. We believe knowledge should be accessible to everyone.
              </p>
            </div>

            <div className="bg-emerald-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 mb-2">Can I suggest new features or content?</h3>
              <p className="text-gray-600">
                Absolutely! We welcome feedback and suggestions. Use the contact form above or reach out through any of our contact methods.
              </p>
            </div>

            <div className="bg-emerald-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 mb-2">Do you provide sources for your content?</h3>
              <p className="text-gray-600">
                Yes, our Tafsir and educational content includes references to authentic Islamic sources and qualified scholars.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Learning?</h2>
          <p className="text-xl text-emerald-100 mb-8">
            Join our community and begin your journey of Islamic knowledge today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://t.me/raadi_cilmi_bot" target="_blank" rel="noopener noreferrer" className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer">
              Try Telegram Bot
            </a>
            <a href="/search" className="bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer border-2 border-white/30">
              Explore Platform
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
