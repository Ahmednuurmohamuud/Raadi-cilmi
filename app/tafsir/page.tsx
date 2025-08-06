
'use client';

import { useState, useMemo } from 'react';
import Header from '../components/Header';

export default function TafsirPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSurah, setSelectedSurah] = useState('all');
  const [selectedAyah, setSelectedAyah] = useState('all');
  const [isPlaying, setIsPlaying] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [showSurahDropdown, setShowSurahDropdown] = useState(false);
  const [showAyahDropdown, setShowAyahDropdown] = useState(false);
  
  const ITEMS_PER_PAGE = 12;

  const surahs = [
    { id: 'all', name: 'All Surahs', ayahs: 0 },
    { id: '1', name: 'Al-Faatiha', ayahs: 7 },
    { id: '2', name: 'Al-Baqara', ayahs: 286 },
    { id: '3', name: 'Aal-E-Imran', ayahs: 200 },
    { id: '4', name: 'An-Nisa', ayahs: 176 },
    { id: '5', name: 'Al-Maida', ayahs: 120 },
    { id: '6', name: 'Al-An\'am', ayahs: 165 },
    { id: '7', name: 'Al-A\'raf', ayahs: 206 },
    { id: '8', name: 'Al-Anfal', ayahs: 75 },
    { id: '9', name: 'At-Tawbah', ayahs: 129 },
    { id: '10', name: 'Yunus', ayahs: 109 },
    { id: '11', name: 'Hud', ayahs: 123 },
    { id: '12', name: 'Yusuf', ayahs: 111 },
    { id: '13', name: 'Ar-Ra\'d', ayahs: 43 },
    { id: '14', name: 'Ibrahim', ayahs: 52 },
    { id: '15', name: 'Al-Hijr', ayahs: 99 },
    { id: '16', name: 'An-Nahl', ayahs: 128 },
    { id: '17', name: 'Al-Isra', ayahs: 111 },
    { id: '18', name: 'Al-Kahf', ayahs: 110 },
    { id: '19', name: 'Maryam', ayahs: 98 },
    { id: '20', name: 'Ta-Ha', ayahs: 135 }
  ];

  // Generate sample data for 200+ tafsir entries
  const generateTafsirData = () => {
    const tafsirData = [];
    let id = 1;
    
    surahs.slice(1).forEach(surah => {
      const ayahCount = Math.min(surah.ayahs, 20); // Limit for demo
      for (let ayah = 1; ayah <= ayahCount; ayah++) {
        tafsirData.push({
          id: id++,
          surah: surah.name,
          surahId: surah.id,
          ayah: ayah,
          title: `Tafsir of ${surah.name} ${surah.id}:${ayah}`,
          arabicText: generateArabicText(surah.name),
          snippet: generateSnippet(surah.name, ayah),
          fullTafsir: generateFullTafsir(surah.name, ayah),
          hasAudio: Math.random() > 0.3,
          scholar: ['Ibn Kathir', 'At-Tabari', 'Al-Qurtubi', 'As-Sa\'di', 'Ibn Jawzi'][Math.floor(Math.random() * 5)],
          category: getCategoryByAyah(ayah)
        });
      }
    });
    
    return tafsirData;
  };

  const generateArabicText = (surahName: string) => {
    const arabicTexts = [
      'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
      'ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِّلْمُتَّقِينَ',
      'نَزَّلَ عَلَيْكَ الْكِتَابَ بِالْحَقِّ مُصَدِّقًا لِّمَا بَيْنَ يَدَيْهِ',
      'يَا أَيُّهَا النَّاسُ اتَّقُوا رَبَّكُمُ الَّذِي خَلَقَكُم مِّن نَّفْسٍ وَاحِدَةٍ',
      'وَاللَّهُ يَدْعُو إِلَىٰ دَارِ السَّلَامِ وَيَهْدِي مَن يَشَاءُ إِلَىٰ صِرَاطٍ مُّسْتَقِيمٍ',
      'إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّىٰ يُغَيِّرُوا مَا بِأَنفُسِهِمْ'
    ];
    return arabicTexts[Math.floor(Math.random() * arabicTexts.length)];
  };

  const generateSnippet = (surahName: string, ayah: number) => {
    return `This verse from ${surahName} teaches us about divine guidance and the importance of following Allah's commands. The commentary explains the deeper meaning and practical applications for Muslims in their daily lives. Scholars emphasize the spiritual significance and historical context...`;
  };

  const generateFullTafsir = (surahName: string, ayah: number) => {
    return `Detailed commentary on ${surahName} verse ${ayah}: This comprehensive explanation covers the linguistic analysis, historical context, legal implications, and spiritual lessons. The verse provides guidance on various aspects of Islamic life and contains profound wisdom for believers seeking to understand Allah's message.`;
  };

  const getCategoryByAyah = (ayah: number) => {
    const categories = ['Theology', 'Jurisprudence', 'Morality', 'Stories', 'Worship', 'Social'];
    return categories[ayah % categories.length];
  };

  const tafsirResults = useMemo(() => generateTafsirData(), []);

  const selectedSurahData = surahs.find(s => s.id === selectedSurah);
  const ayahOptions = selectedSurahData && selectedSurahData.id !== 'all' 
    ? Array.from({ length: Math.min(selectedSurahData.ayahs, 20) }, (_, i) => i + 1)
    : [];

  const filteredResults = useMemo(() => {
    return tafsirResults.filter(result => {
      const matchesSearch = searchQuery === '' || 
        result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        result.surah.toLowerCase().includes(searchQuery.toLowerCase()) ||
        result.snippet.toLowerCase().includes(searchQuery.toLowerCase()) ||
        result.scholar.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesSurah = selectedSurah === 'all' || result.surahId === selectedSurah;
      const matchesAyah = selectedAyah === 'all' || result.ayah.toString() === selectedAyah;
      
      return matchesSearch && matchesSurah && matchesAyah;
    });
  }, [searchQuery, selectedSurah, selectedAyah, tafsirResults]);

  const totalPages = Math.ceil(filteredResults.length / ITEMS_PER_PAGE);
  const paginatedResults = filteredResults.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePlayAudio = (id: number) => {
    if (isPlaying === id) {
      setIsPlaying(null);
    } else {
      setIsPlaying(id);
      setTimeout(() => setIsPlaying(null), 3000);
    }
  };

  const handleCopyText = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const handleShare = (result: any) => {
    if (navigator.share) {
      navigator.share({
        title: result.title,
        text: result.snippet,
        url: window.location.href
      });
    }
  };

  const handleSurahSelect = (surah: any) => {
    setSelectedSurah(surah.id);
    setSelectedAyah('all');
    setShowSurahDropdown(false);
    setCurrentPage(1);
  };

  const handleAyahSelect = (ayah: number | string) => {
    setSelectedAyah(ayah.toString());
    setShowAyahDropdown(false);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Qur'an Tafsir</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore authentic commentary and interpretation of the Holy Qur'an from renowned scholars
          </p>
          <div className="flex items-center justify-center gap-4 mt-4 text-sm text-gray-500">
            <span className="bg-white px-3 py-1 rounded-full shadow-sm">
              {filteredResults.length} Total Entries
            </span>
            <span className="bg-white px-3 py-1 rounded-full shadow-sm">
              Multiple Scholars
            </span>
            <span className="bg-white px-3 py-1 rounded-full shadow-sm">
              Audio Available
            </span>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <i className="ri-search-line text-xl text-gray-400"></i>
              </div>
              <input
                type="text"
                placeholder="Search by Surah, Ayah, or Scholar (e.g., Al-Baqara 2, Ibn Kathir)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            {/* Surah Filter */}
            <div className="relative">
              <button 
                onClick={() => setShowSurahDropdown(!showSurahDropdown)}
                className="w-full lg:w-64 px-4 py-3 border border-gray-300 rounded-xl bg-white flex items-center justify-between focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 cursor-pointer"
              >
                <span className="text-gray-700 truncate">
                  {surahs.find(s => s.id === selectedSurah)?.name || 'Select Surah'}
                </span>
                <i className={`ri-arrow-down-s-line text-gray-400 transition-transform ${showSurahDropdown ? 'rotate-180' : ''}`}></i>
              </button>
              
              {showSurahDropdown && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg z-50 max-h-64 overflow-y-auto">
                  {surahs.map((surah) => (
                    <button
                      key={surah.id}
                      onClick={() => handleSurahSelect(surah)}
                      className="w-full px-4 py-2 text-left hover:bg-emerald-50 hover:text-emerald-700 transition-colors cursor-pointer flex items-center justify-between"
                    >
                      <span>{surah.name}</span>
                      {surah.id !== 'all' && (
                        <span className="text-xs text-gray-400">{surah.ayahs} verses</span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Ayah Filter */}
            <div className="relative">
              <button 
                onClick={() => setShowAyahDropdown(!showAyahDropdown)}
                disabled={selectedSurah === 'all'}
                className={`w-full lg:w-32 px-4 py-3 border border-gray-300 rounded-xl bg-white flex items-center justify-between focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 cursor-pointer ${
                  selectedSurah === 'all' ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <span className="text-gray-700">
                  {selectedAyah === 'all' ? 'All' : `${selectedAyah}`}
                </span>
                <i className={`ri-arrow-down-s-line text-gray-400 transition-transform ${showAyahDropdown ? 'rotate-180' : ''}`}></i>
              </button>
              
              {showAyahDropdown && selectedSurah !== 'all' && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg z-40 max-h-48 overflow-y-auto">
                  <button
                    onClick={() => handleAyahSelect('all')}
                    className="w-full px-4 py-2 text-left hover:bg-emerald-50 hover:text-emerald-700 transition-colors cursor-pointer"
                  >
                    All Ayahs
                  </button>
                  {ayahOptions.map((ayah) => (
                    <button
                      key={ayah}
                      onClick={() => handleAyahSelect(ayah)}
                      className="w-full px-4 py-2 text-left hover:bg-emerald-50 hover:text-emerald-700 transition-colors cursor-pointer"
                    >
                      Ayah {ayah}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Results Summary */}
          <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
            <span>
              Showing {Math.min((currentPage - 1) * ITEMS_PER_PAGE + 1, filteredResults.length)}-{Math.min(currentPage * ITEMS_PER_PAGE, filteredResults.length)} of {filteredResults.length} results
            </span>
            <span>
              Page {currentPage} of {totalPages}
            </span>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {paginatedResults.map((result) => (
            <div key={result.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full text-xs font-semibold">
                        {result.surah} {result.ayah}
                      </span>
                      <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs">
                        {result.scholar}
                      </span>
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                        {result.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2">
                      {result.title}
                    </h3>
                  </div>
                </div>

                {/* Arabic Text */}
                <div className="bg-gray-50 rounded-lg p-4 mb-4 text-center">
                  <p className="text-xl text-gray-800 leading-relaxed" style={{ fontFamily: 'Arabic', direction: 'rtl' }}>
                    {result.arabicText}
                  </p>
                </div>

                {/* Tafsir Snippet */}
                <div className="mb-4">
                  <p className="text-gray-700 leading-relaxed text-sm line-clamp-3">
                    {result.snippet}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-2">
                  <button className="flex items-center gap-1 bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer whitespace-nowrap">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-book-open-line text-xs"></i>
                    </div>
                    Read Full
                  </button>

                  {result.hasAudio && (
                    <button 
                      onClick={() => handlePlayAudio(result.id)}
                      className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer whitespace-nowrap"
                    >
                      <div className="w-4 h-4 flex items-center justify-center">
                        <i className={`ri-${isPlaying === result.id ? 'pause' : 'play'}-fill text-xs`}></i>
                      </div>
                      {isPlaying === result.id ? 'Pause' : 'Audio'}
                    </button>
                  )}

                  <button 
                    onClick={() => handleCopyText(result.fullTafsir)}
                    className="flex items-center gap-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-file-copy-line text-xs"></i>
                    </div>
                    Copy
                  </button>

                  <button 
                    onClick={() => handleShare(result)}
                    className="flex items-center gap-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-share-line text-xs"></i>
                    </div>
                    Share
                  </button>
                </div>

                {/* Audio Progress Bar (when playing) */}
                {isPlaying === result.id && (
                  <div className="mt-3 bg-gray-100 rounded-lg p-3">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 flex items-center justify-center text-blue-600">
                        <i className="ri-volume-up-line text-xs"></i>
                      </div>
                      <div className="flex-1 bg-gray-200 rounded-full h-1.5">
                        <div className="bg-blue-600 h-1.5 rounded-full w-1/3 transition-all duration-1000"></div>
                      </div>
                      <span className="text-xs text-gray-500">1:23 / 3:45</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredResults.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-gray-100 rounded-full">
              <i className="ri-book-open-line text-2xl text-gray-400"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No tafsir found</h3>
            <p className="text-gray-500">Try adjusting your search terms or filters</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-8">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg border font-medium transition-colors ${
                currentPage === 1
                  ? 'border-gray-200 text-gray-400 cursor-not-allowed'
                  : 'border-emerald-300 text-emerald-600 hover:bg-emerald-50 cursor-pointer'
              }`}
            >
              <i className="ri-arrow-left-line"></i> Previous
            </button>

            <div className="flex gap-1">
              {[...Array(Math.min(totalPages, 5))].map((_, index) => {
                let pageNum;
                if (totalPages <= 5) {
                  pageNum = index + 1;
                } else if (currentPage <= 3) {
                  pageNum = index + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + index;
                } else {
                  pageNum = currentPage - 2 + index;
                }

                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`px-3 py-2 rounded-lg font-medium transition-colors cursor-pointer ${
                      currentPage === pageNum
                        ? 'bg-emerald-600 text-white'
                        : 'bg-white border border-gray-200 text-gray-700 hover:bg-emerald-50'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg border font-medium transition-colors ${
                currentPage === totalPages
                  ? 'border-gray-200 text-gray-400 cursor-not-allowed'
                  : 'border-emerald-300 text-emerald-600 hover:bg-emerald-50 cursor-pointer'
              }`}
            >
              Next <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        )}

        {/* Quick Access */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">Quick Access</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {surahs.slice(1, 13).map((surah) => (
              <button
                key={surah.id}
                onClick={() => handleSurahSelect(surah)}
                className="bg-emerald-50 hover:bg-emerald-100 p-4 rounded-xl transition-colors cursor-pointer text-center"
              >
                <div className="w-8 h-8 flex items-center justify-center mx-auto mb-2 text-emerald-600">
                  <i className="ri-book-line text-lg"></i>
                </div>
                <h3 className="font-semibold text-emerald-700 text-xs mb-1">{surah.name}</h3>
                <p className="text-emerald-600 text-xs">{surah.ayahs} verses</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
