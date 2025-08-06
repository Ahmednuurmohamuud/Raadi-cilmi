'use client';

import { useState } from 'react';
import Header from '../components/Header';

export default function LecturesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isPlaying, setIsPlaying] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Lectures', icon: 'ri-play-circle-line' },
    { id: 'afterlife', name: 'Jannada & Naar', icon: 'ri-sun-cloudy-line' },
    { id: 'character', name: 'Akhlaaq', icon: 'ri-heart-3-line' },
    { id: 'family', name: 'Family & Youth', icon: 'ri-parent-line' },
    { id: 'fiqh', name: 'Fiqh', icon: 'ri-scales-3-line' },
    { id: 'quran', name: 'Qur\'an & Hadith', icon: 'ri-book-open-line' }
  ];

  const lecturesData = [
    {
      id: 1,
      title: 'Muxaadaro: Qiyaamaha - The Day of Judgment',
      speaker: 'Sheikh Ahmed Yusuf',
      category: 'afterlife',
      duration: '45:30',
      views: '12.5K',
      description: 'A comprehensive lecture about the signs of Qiyamah and how Muslims should prepare for the Hereafter. This lecture covers the minor and major signs, the events of the Day of Judgment, and practical steps for preparation.',
      summary: 'Learn about the inevitable Day of Judgment, its signs, and how to prepare spiritually and practically. The sheikh discusses the Qur\'anic descriptions and authentic Hadith about this crucial topic.',
      hasAudio: true,
      hasVideo: true,
      youtubeLink: 'https://youtube.com/watch?v=example1',
      thumbnail: 'https://readdy.ai/api/search-image?query=Beautiful%20Islamic%20scene%20showing%20the%20Day%20of%20Judgment%20concept%2C%20golden%20light%20rays%20from%20sky%2C%20peaceful%20mosque%20silhouette%2C%20spiritual%20atmosphere%20with%20Arabic%20calligraphy%20elements%2C%20serene%20and%20contemplative%20mood&width=400&height=225&seq=lecture-qiyamah&orientation=landscape',
      uploadDate: '2024-01-15'
    },
    {
      id: 2,
      title: 'Jannada iyo Naar - Paradise and Hellfire',
      speaker: 'Sheikh Farah Mohamed',
      category: 'afterlife',
      duration: '52:20',
      views: '8.3K',
      description: 'Detailed descriptions of Paradise and Hellfire based on Qur\'an and authentic Hadith. Understanding the rewards of the righteous and the consequences of sin.',
      summary: 'Explore the detailed descriptions of Jannah and Jahannam from Islamic sources. Learn about the different levels, rewards, and punishments as described in Islamic texts.',
      hasAudio: true,
      hasVideo: true,
      youtubeLink: 'https://youtube.com/watch?v=example2',
      thumbnail: 'https://readdy.ai/api/search-image?query=Islamic%20paradise%20garden%20scene%20with%20flowing%20rivers%2C%20beautiful%20trees%20and%20flowers%2C%20golden%20light%2C%20peaceful%20and%20serene%20atmosphere%2C%20Islamic%20architectural%20elements%20in%20background&width=400&height=225&seq=lecture-jannah&orientation=landscape',
      uploadDate: '2024-01-10'
    },
    {
      id: 3,
      title: 'Akhlaaqda Muslimiinta - Character of Muslims',
      speaker: 'Ustadh Omar Hassan',
      category: 'character',
      duration: '38:45',
      views: '15.2K',
      description: 'Building good character based on the example of Prophet Muhammad (peace be upon him). Practical guidance on developing Islamic manners and ethics in daily life.',
      summary: 'Learn how to develop excellent character traits following the prophetic example. This lecture covers honesty, kindness, patience, and other essential Islamic qualities.',
      hasAudio: true,
      hasVideo: false,
      youtubeLink: '',
      thumbnail: 'https://readdy.ai/api/search-image?query=Beautiful%20Islamic%20scene%20showing%20good%20character%20and%20manners%2C%20people%20helping%20each%20other%2C%20community%20gathering%20in%20mosque%2C%20warm%20golden%20lighting%2C%20peaceful%20Islamic%20environment&width=400&height=225&seq=lecture-akhlaq&orientation=landscape',
      uploadDate: '2024-01-08'
    },
    {
      id: 4,
      title: 'Dhalinyarada iyo Diinta - Youth and Religion',
      speaker: 'Sheikh Abdullahi Ahmed',
      category: 'family',
      duration: '41:15',
      views: '9.8K',
      description: 'Addressing the challenges faced by Muslim youth today. Balancing modern life with Islamic principles and maintaining strong faith in contemporary society.',
      summary: 'Practical advice for young Muslims navigating modern challenges while staying true to Islamic values. Topics include peer pressure, social media, and maintaining Islamic identity.',
      hasAudio: true,
      hasVideo: true,
      youtubeLink: 'https://youtube.com/watch?v=example4',
      thumbnail: 'https://readdy.ai/api/search-image?query=Young%20Muslim%20students%20studying%20Quran%20together%2C%20modern%20Islamic%20education%20setting%2C%20peaceful%20library%20atmosphere%2C%20books%20and%20learning%20materials%2C%20inspiring%20educational%20environment&width=400&height=225&seq=lecture-youth&orientation=landscape',
      uploadDate: '2024-01-05'
    },
    {
      id: 5,
      title: 'Fiqhul-Ibaadah - Understanding Worship',
      speaker: 'Sheikh Ibrahim Mohamud',
      category: 'fiqh',
      duration: '55:30',
      views: '11.7K',
      description: 'Comprehensive guide to Islamic jurisprudence related to worship. Covering prayer, fasting, zakat, and hajj according to authentic Islamic sources.',
      summary: 'Master the essential rulings of Islamic worship. This detailed lecture explains the proper way to perform religious obligations with evidence from Qur\'an and Sunnah.',
      hasAudio: true,
      hasVideo: true,
      youtubeLink: 'https://youtube.com/watch?v=example5',
      thumbnail: 'https://readdy.ai/api/search-image?query=Beautiful%20mosque%20interior%20during%20prayer%20time%2C%20Muslims%20praying%20in%20congregation%2C%20peaceful%20worship%20atmosphere%2C%20traditional%20Islamic%20architecture%2C%20spiritual%20and%20serene%20environment&width=400&height=225&seq=lecture-fiqh&orientation=landscape',
      uploadDate: '2024-01-03'
    },
    {
      id: 6,
      title: 'Fahanka Qur\'aanka - Understanding the Qur\'an',
      speaker: 'Ustadh Mohamed Ali',
      category: 'quran',
      duration: '48:20',
      views: '13.4K',
      description: 'Introduction to Qur\'anic studies and proper methodology for understanding Allah\'s book. Learning how to approach the Qur\'an with the right mindset and tools.',
      summary: 'Learn the proper approach to studying and understanding the Holy Qur\'an. This lecture covers interpretation methods, historical context, and practical application.',
      hasAudio: false,
      hasVideo: true,
      youtubeLink: 'https://youtube.com/watch?v=example6',
      thumbnail: 'https://readdy.ai/api/search-image?query=Open%20Quran%20with%20beautiful%20Arabic%20calligraphy%2C%20golden%20illuminated%20pages%2C%20peaceful%20study%20environment%2C%20traditional%20Islamic%20manuscripts%20and%20books%20around%2C%20serene%20learning%20atmosphere&width=400&height=225&seq=lecture-quran&orientation=landscape',
      uploadDate: '2024-01-01'
    }
  ];

  const filteredLectures = lecturesData.filter(lecture => {
    const matchesSearch = searchQuery === '' || 
      lecture.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lecture.speaker.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lecture.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || lecture.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const handlePlayAudio = (id: number) => {
    if (isPlaying === id) {
      setIsPlaying(null);
    } else {
      setIsPlaying(id);
      setTimeout(() => setIsPlaying(null), 5000);
    }
  };

  const handleWatchVideo = (youtubeLink: string) => {
    if (youtubeLink) {
      window.open(youtubeLink, '_blank');
    }
  };

  const handleShare = (lecture: any) => {
    if (navigator.share) {
      navigator.share({
        title: lecture.title,
        text: `${lecture.description}`,
        url: window.location.href
      });
    }
  };

  const formatViews = (views: string) => {
    return views;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      <Header />
      
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Lectures & Media</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from renowned Islamic scholars through comprehensive lectures on various Islamic topics
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
              placeholder="Search by speaker or topic (e.g., Qiyaamaha)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white shadow-sm"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
                selectedCategory === category.id
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-purple-50 border border-gray-200'
              }`}
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <i className={`${category.icon} text-sm`}></i>
              </div>
              {category.name}
            </button>
          ))}
        </div>

        {/* Lectures Grid */}
        <div className="grid gap-8 max-w-5xl mx-auto">
          {filteredLectures.map((lecture) => (
            <div key={lecture.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="md:flex">
                {/* Thumbnail */}
                <div className="md:w-96 h-64 md:h-auto relative">
                  <img
                    src={lecture.thumbnail}
                    alt={lecture.title}
                    className="w-full h-full object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
                  />
                  <div className="absolute inset-0 bg-black/20 rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"></div>
                  <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {lecture.duration}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                    {formatViews(lecture.views)} views
                  </div>
                  {lecture.hasVideo && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button
                        onClick={() => handleWatchVideo(lecture.youtubeLink)}
                        className="w-16 h-16 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center text-white transition-colors cursor-pointer"
                      >
                        <i className="ri-play-fill text-2xl"></i>
                      </button>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">
                          {categories.find(c => c.id === lecture.category)?.name}
                        </span>
                        <span className="text-gray-500 text-sm">
                          {formatDate(lecture.uploadDate)}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2 leading-tight">
                        {lecture.title}
                      </h3>
                      <p className="text-lg font-semibold text-purple-600 mb-4">
                        by {lecture.speaker}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <p className="text-gray-700 leading-relaxed mb-3">
                      {lecture.description}
                    </p>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <i className="ri-file-text-line text-sm"></i>
                        </div>
                        Summary:
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {lecture.summary}
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3">
                    {lecture.hasVideo && (
                      <button 
                        onClick={() => handleWatchVideo(lecture.youtubeLink)}
                        className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors cursor-pointer whitespace-nowrap"
                      >
                        <div className="w-5 h-5 flex items-center justify-center">
                          <i className="ri-youtube-fill text-sm"></i>
                        </div>
                        Watch on YouTube
                      </button>
                    )}

                    {lecture.hasAudio && (
                      <button 
                        onClick={() => handlePlayAudio(lecture.id)}
                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors cursor-pointer whitespace-nowrap"
                      >
                        <div className="w-5 h-5 flex items-center justify-center">
                          <i className={`ri-${isPlaying === lecture.id ? 'pause' : 'headphone'}-fill text-sm`}></i>
                        </div>
                        {isPlaying === lecture.id ? 'Pause Audio' : 'Listen Audio'}
                      </button>
                    )}

                    <button 
                      onClick={() => handleShare(lecture)}
                      className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold transition-colors cursor-pointer whitespace-nowrap"
                    >
                      <div className="w-5 h-5 flex items-center justify-center">
                        <i className="ri-share-line text-sm"></i>
                      </div>
                      Share
                    </button>
                  </div>

                  {/* Audio Progress Bar (when playing) */}
                  {isPlaying === lecture.id && (
                    <div className="mt-4 bg-gray-100 rounded-lg p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 flex items-center justify-center text-blue-600">
                          <i className="ri-volume-up-line text-sm"></i>
                        </div>
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full w-1/4 transition-all duration-1000"></div>
                        </div>
                        <span className="text-sm text-gray-500">10:45 / {lecture.duration}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredLectures.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-gray-100 rounded-full">
              <i className="ri-play-circle-line text-2xl text-gray-400"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No lectures found</h3>
            <p className="text-gray-500">Try adjusting your search terms or category filters</p>
          </div>
        )}

        {/* Popular Topics */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">Popular Lecture Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-xl text-center">
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4 text-orange-600">
                <i className="ri-sun-cloudy-line text-2xl"></i>
              </div>
              <h3 className="font-semibold text-orange-700 mb-2">Day of Judgment</h3>
              <p className="text-orange-600 text-sm">Learn about Qiyamah and preparation</p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl text-center">
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4 text-purple-600">
                <i className="ri-heart-3-line text-2xl"></i>
              </div>
              <h3 className="font-semibold text-purple-700 mb-2">Islamic Character</h3>
              <p className="text-purple-600 text-sm">Building good akhlaq and manners</p>
            </div>

            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-xl text-center">
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4 text-emerald-600">
                <i className="ri-scales-3-line text-2xl"></i>
              </div>
              <h3 className="font-semibold text-emerald-700 mb-2">Islamic Jurisprudence</h3>
              <p className="text-emerald-600 text-sm">Understanding Fiqh rulings</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}