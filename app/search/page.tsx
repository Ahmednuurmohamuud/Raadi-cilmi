'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [results, setResults] = useState([
    {
      id: 1,
      title: "Tafsir of Al-Faatiha [1:1]",
      snippet: "In the name of Allah, the Most Gracious, the Most Merciful. This verse establishes the foundation of Islamic worship and submission to Allah...",
      category: "tafsir",
      type: "Qur'an Commentary",
      hasAudio: true,
      hasVideo: false
    },
    {
      id: 2,
      title: "Morning Du'a - Starting Your Day with Allah",
      snippet: "اللهم أصبحنا وأصبح الملك لله - O Allah, we have reached the morning and at this very time unto You belongs all sovereignty...",
      category: "dua",
      type: "Du'a",
      hasAudio: true,
      hasVideo: false
    },
    {
      id: 3,
      title: "The Day of Judgment - Signs and Preparation",
      snippet: "A comprehensive lecture about the signs of Qiyamah and how Muslims should prepare for the Hereafter...",
      category: "lecture",
      type: "Lecture",
      hasAudio: true,
      hasVideo: true,
      youtubeLink: "https://youtube.com/watch?v=example"
    },
    {
      id: 4,
      title: "What is the correct way to perform Wudu?",
      snippet: "Wudu (ablution) is performed in a specific sequence: intention, washing hands, mouth, nose, face, arms, wiping head, and washing feet...",
      category: "ai-qa",
      type: "AI Q&A",
      hasAudio: false,
      hasVideo: false
    }
  ]);

  const filters = [
    { id: 'all', label: 'All Results', icon: 'ri-search-line' },
    { id: 'tafsir', label: 'Tafsir', icon: 'ri-book-open-line' },
    { id: 'dua', label: 'Du\'a', icon: 'ri-heart-line' },
    { id: 'lecture', label: 'Lectures', icon: 'ri-play-circle-line' },
    { id: 'ai-qa', label: 'AI Q&A', icon: 'ri-question-answer-line' }
  ];

  const filteredResults = activeFilter === 'all' 
    ? results 
    : results.filter(result => result.category === activeFilter);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'tafsir': return 'bg-emerald-100 text-emerald-700';
      case 'dua': return 'bg-blue-100 text-blue-700';
      case 'lecture': return 'bg-purple-100 text-purple-700';
      case 'ai-qa': return 'bg-orange-100 text-orange-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      <Header />
      
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Search Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Search Islamic Knowledge</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find Tafsir, Du'as, Lectures, and get AI-powered answers to your Islamic questions
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <i className="ri-search-line text-xl text-gray-400"></i>
            </div>
            <input
              type="text"
              placeholder="Type your Islamic question or search for specific content..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white shadow-sm"
            />
            <button className="absolute inset-y-0 right-0 pr-4 flex items-center">
              <div className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-xl font-semibold transition-colors cursor-pointer whitespace-nowrap">
                Search
              </div>
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
                activeFilter === filter.id
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-emerald-50 border border-gray-200'
              }`}
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <i className={`${filter.icon} text-sm`}></i>
              </div>
              {filter.label}
            </button>
          ))}
        </div>

        {/* Results */}
        <div className="grid gap-6 max-w-5xl mx-auto">
          {filteredResults.map((result) => (
            <div key={result.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(result.category)}`}>
                        {result.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight">
                      {result.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {result.snippet}
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  <button className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl font-semibold transition-colors cursor-pointer whitespace-nowrap">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-file-text-line text-sm"></i>
                    </div>
                    Read Full Content
                  </button>

                  {result.hasAudio && (
                    <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-semibold transition-colors cursor-pointer whitespace-nowrap">
                      <div className="w-4 h-4 flex items-center justify-center">
                        <i className="ri-play-fill text-sm"></i>
                      </div>
                      Listen
                    </button>
                  )}

                  {result.hasVideo && (
                    <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl font-semibold transition-colors cursor-pointer whitespace-nowrap">
                      <div className="w-4 h-4 flex items-center justify-center">
                        <i className="ri-youtube-fill text-sm"></i>
                      </div>
                      Watch Video
                    </button>
                  )}

                  <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-xl font-semibold transition-colors cursor-pointer whitespace-nowrap">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-share-line text-sm"></i>
                    </div>
                    Share
                  </button>

                  <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-xl font-semibold transition-colors cursor-pointer whitespace-nowrap">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-file-copy-line text-sm"></i>
                    </div>
                    Copy
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredResults.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-gray-100 rounded-full">
              <i className="ri-search-line text-2xl text-gray-400"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No results found</h3>
            <p className="text-gray-500">Try adjusting your search terms or filters</p>
          </div>
        )}

        {/* Quick Actions */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">Quick Access</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/tafsir" className="bg-emerald-50 hover:bg-emerald-100 p-6 rounded-xl transition-colors cursor-pointer text-center">
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-3 text-emerald-600">
                <i className="ri-book-open-line text-2xl"></i>
              </div>
              <h3 className="font-semibold text-emerald-700">Browse Tafsir</h3>
            </Link>

            <Link href="/duas" className="bg-blue-50 hover:bg-blue-100 p-6 rounded-xl transition-colors cursor-pointer text-center">
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-3 text-blue-600">
                <i className="ri-heart-line text-2xl"></i>
              </div>
              <h3 className="font-semibold text-blue-700">Daily Du'as</h3>
            </Link>

            <Link href="/lectures" className="bg-purple-50 hover:bg-purple-100 p-6 rounded-xl transition-colors cursor-pointer text-center">
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-3 text-purple-600">
                <i className="ri-play-circle-line text-2xl"></i>
              </div>
              <h3 className="font-semibold text-purple-700">Watch Lectures</h3>
            </Link>

            <Link href="/ask-ai" className="bg-orange-50 hover:bg-orange-100 p-6 rounded-xl transition-colors cursor-pointer text-center">
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-3 text-orange-600">
                <i className="ri-question-answer-line text-2xl"></i>
              </div>
              <h3 className="font-semibold text-orange-700">Ask AI</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}