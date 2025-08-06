
'use client';

import { useState, useMemo } from 'react';
import Header from '../components/Header';

export default function DuasPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isPlaying, setIsPlaying] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [showFilters, setShowFilters] = useState(false);
  
  const ITEMS_PER_PAGE = 15;

  const categories = [
    { id: 'all', name: 'All Du\'as', icon: 'ri-heart-line', count: 0 },
    { id: 'morning', name: 'Morning & Evening', icon: 'ri-sun-line', count: 0 },
    { id: 'illness', name: 'Illness & Health', icon: 'ri-first-aid-kit-line', count: 0 },
    { id: 'forgiveness', name: 'Forgiveness', icon: 'ri-hand-heart-line', count: 0 },
    { id: 'children', name: 'Children & Family', icon: 'ri-parent-line', count: 0 },
    { id: 'travel', name: 'Travel', icon: 'ri-roadster-line', count: 0 },
    { id: 'protection', name: 'Protection', icon: 'ri-shield-line', count: 0 },
    { id: 'gratitude', name: 'Gratitude', icon: 'ri-emotion-happy-line', count: 0 },
    { id: 'guidance', name: 'Guidance', icon: 'ri-compass-3-line', count: 0 },
    { id: 'sustenance', name: 'Sustenance', icon: 'ri-restaurant-line', count: 0 }
  ];

  // Generate sample data for 200+ duas
  const generateDuasData = () => {
    const duasData = [];
    const duaTitles = [
      'Morning Protection Du\'a',
      'Evening Remembrance',
      'Healing from Illness',
      'Seeking Forgiveness',
      'For Righteous Children',
      'Safe Journey Prayer',
      'Before Eating',
      'After Eating',
      'Entering the Home',
      'Leaving the Home',
      'Before Sleep',
      'Upon Waking',
      'In Times of Difficulty',
      'For Rain',
      'For Parents',
      'For Deceased',
      'During Illness',
      'For Success',
      'Against Evil Eye',
      'For Knowledge'
    ];

    const arabicTexts = [
      'اللهُمَّ أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ رَبِّ الْعَالَمِينَ',
      'اللهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي',
      'اللهُمَّ رَبَّ النَّاسِ، أَذْهِبِ الْبَأْسَ، وَاشْفِ',
      'رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ',
      'سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ',
      'بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ',
      'اللهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا',
      'الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا',
      'اللهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ وَرَحْمَتِكَ',
      'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً'
    ];

    const transliterations = [
      'Allāhumma aṣbaḥnā wa aṣbaḥa al-mulku lillāhi rabbil-ʿālamīn',
      'Allāhumma innaka ʿafuwwun tuḥibbul-ʿafwa fa-ʿfu ʿannī',
      'Allāhumma rabban-nāsi, adh-hibil-ba\'sa, wa-shfi',
      'Rabbanā hab lanā min azwājinā wa dhurriyyātinā qurrata aʿyunin',
      'Subḥānal-ladhī sakhkhara lanā hādhā wa mā kunnā lahu muqrinīn',
      'Bismillāhi tawakkaltu ʿalallāh',
      'Allāhumma bārik lanā fīmā razaqtanā',
      'Al-ḥamdu lillāhil-ladhī aṭʿamanā wa saqānā',
      'Allāhumma innī as\'aluka min faḍlika wa raḥmatika',
      'Rabbanā ātinā fid-dunyā ḥasanatan wa fil-ākhirati ḥasanatan'
    ];

    const translations = [
      'O Allah, we have reached the morning and at this very time unto You belongs all sovereignty.',
      'O Allah, You are Most Forgiving, and You love forgiveness; so forgive me.',
      'O Allah, Lord of mankind, remove this disease and cure him.',
      'Our Lord, grant us from among our wives and offspring comfort to our eyes.',
      'Exalted is He who has subjected this to us, and we could not have otherwise subdued it.',
      'In the name of Allah, I trust in Allah.',
      'O Allah, bless for us what You have provided us.',
      'All praise is due to Allah who fed us and gave us drink.',
      'O Allah, I ask You from Your bounty and mercy.',
      'Our Lord, give us good in this world and good in the next world.'
    ];

    for (let i = 1; i <= 250; i++) {
      const categoryIndex = Math.floor(Math.random() * (categories.length - 1)) + 1;
      const textIndex = Math.floor(Math.random() * arabicTexts.length);
      const titleIndex = Math.floor(Math.random() * duaTitles.length);
      
      duasData.push({
        id: i,
        title: `${duaTitles[titleIndex]} - ${i}`,
        category: categories[categoryIndex].id,
        arabic: arabicTexts[textIndex],
        transliteration: transliterations[textIndex],
        translation: translations[textIndex],
        benefits: `This du'a brings Allah's blessing and protection. It is recommended to recite regularly for spiritual benefit and divine guidance.`,
        hasAudio: Math.random() > 0.4,
        source: ['Qur\'an', 'Bukhari', 'Muslim', 'Abu Dawud', 'Tirmidhi', 'Ibn Majah'][Math.floor(Math.random() * 6)],
        difficulty: ['Easy', 'Medium', 'Advanced'][Math.floor(Math.random() * 3)],
        timeOfDay: ['Morning', 'Evening', 'Anytime', 'Night'][Math.floor(Math.random() * 4)],
        tags: generateTags()
      });
    }

    return duasData;
  };

  const generateTags = () => {
    const allTags = ['Daily', 'Protection', 'Health', 'Family', 'Success', 'Forgiveness', 'Gratitude', 'Peace'];
    return allTags.filter(() => Math.random() > 0.7);
  };

 const duasData = useMemo(() => generateDuasData(), []);

const categoriesWithCounts = useMemo(() => {
  const counts: { [key: string]: number } = {};
  
  duasData.forEach(dua => {
    counts[dua.category] = (counts[dua.category] || 0) + 1;
  });

  return categories.map(cat => ({
    ...cat,
    count: cat.id === 'all' ? duasData.length : (counts[cat.id] || 0)
  }));
}, [duasData]);


  const filteredDuas = useMemo(() => {
    return duasData.filter(dua => {
      const matchesSearch = searchQuery === '' || 
        dua.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dua.translation.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dua.transliteration.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dua.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || dua.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory, duasData]);

  const totalPages = Math.ceil(filteredDuas.length / ITEMS_PER_PAGE);
  const paginatedDuas = filteredDuas.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePlayAudio = (id: number) => {
    if (isPlaying === id) {
      setIsPlaying(null);
    } else {
      setIsPlaying(id);
      setTimeout(() => setIsPlaying(null), 4000);
    }
  };

  const handleCopyText = (dua: any) => {
    const text = `${dua.title}\n\n${dua.arabic}\n\n${dua.transliteration}\n\n${dua.translation}`;
    navigator.clipboard.writeText(text);
  };

  const handleShare = (dua: any) => {
    if (navigator.share) {
      navigator.share({
        title: dua.title,
        text: `${dua.translation}\n\n${dua.arabic}`,
        url: window.location.href
      });
    }
  };

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
    setShowFilters(false);
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
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Islamic Du'as</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover authentic supplications from Qur'an and Sunnah for every aspect of life
          </p>
          <div className="flex items-center justify-center gap-4 mt-4 text-sm text-gray-500">
            <span className="bg-white px-3 py-1 rounded-full shadow-sm">
              {filteredDuas.length} Du'as Available
            </span>
            <span className="bg-white px-3 py-1 rounded-full shadow-sm">
              {categoriesWithCounts.length - 1} Categories
            </span>
            <span className="bg-white px-3 py-1 rounded-full shadow-sm">
              Audio Recitations
            </span>
          </div>
        </div>

        {/* Search and Controls */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <i className="ri-search-line text-xl text-gray-400"></i>
              </div>
              <input
                type="text"
                placeholder="Search by keyword, category, or content (e.g., Morning, Health, Protection)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            {/* Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-medium transition-colors cursor-pointer whitespace-nowrap"
              >
                <i className="ri-filter-line"></i>
                Filters
              </button>

              <div className="flex bg-gray-100 rounded-xl p-1">
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                    viewMode === 'list'
                      ? 'bg-white text-gray-700 shadow-sm'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <i className="ri-list-unordered"></i>
                </button>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                    viewMode === 'grid'
                      ? 'bg-white text-gray-700 shadow-sm'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <i className="ri-grid-line"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Results Summary */}
          <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
            <span>
              Showing {Math.min((currentPage - 1) * ITEMS_PER_PAGE + 1, filteredDuas.length)}-{Math.min(currentPage * ITEMS_PER_PAGE, filteredDuas.length)} of {filteredDuas.length} du'as
            </span>
            <span>
              Page {currentPage} of {totalPages}
            </span>
          </div>
        </div>

        {/* Category Filters */}
        {showFilters && (
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8">
            <h3 className="font-semibold text-gray-800 mb-4">Filter by Category</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {categoriesWithCounts.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategorySelect(category.id)}
                  className={`flex items-center gap-2 p-3 rounded-xl font-medium transition-all duration-300 whitespace-nowrap cursor-pointer text-sm ${
                    selectedCategory === category.id
                      ? 'bg-emerald-600 text-white shadow-lg'
                      : 'bg-gray-50 text-gray-700 hover:bg-emerald-50 border border-gray-200'
                  }`}
                >
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className={`${category.icon} text-sm`}></i>
                  </div>
                  <span className="truncate">{category.name}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    selectedCategory === category.id
                      ? 'bg-white/20 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Du'as Display */}
        <div className={`${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-6'} mb-8`}>
          {paginatedDuas.map((dua) => (
            <div key={dua.id} className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 ${viewMode === 'list' ? 'max-w-4xl mx-auto' : ''}`}>
              <div className={`${viewMode === 'list' ? 'p-6 lg:p-8' : 'p-6'}`}>
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-semibold">
                        {categoriesWithCounts.find(c => c.id === dua.category)?.name}
                      </span>
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                        {dua.source}
                      </span>
                      <span className="bg-emerald-100 text-emerald-600 px-2 py-1 rounded-full text-xs">
                        {dua.timeOfDay}
                      </span>
                    </div>
                    <h3 className={`font-bold text-gray-800 mb-3 ${viewMode === 'list' ? 'text-xl' : 'text-lg'} line-clamp-2`}>
                      {dua.title}
                    </h3>
                  </div>
                </div>

                {/* Arabic Text */}
                <div className="bg-gray-50 rounded-xl p-4 mb-4 text-center">
                  <p className={`text-gray-800 leading-relaxed ${viewMode === 'list' ? 'text-xl' : 'text-lg'} mb-2`} style={{ fontFamily: 'Arabic', direction: 'rtl' }}>
                    {dua.arabic}
                  </p>
                  {/* Audio Progress Bar (when playing) */}
                  {isPlaying === dua.id && (
                    <div className="bg-white rounded-lg p-3 mt-3">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 flex items-center justify-center text-blue-600">
                          <i className="ri-volume-up-line text-xs"></i>
                        </div>
                        <div className="flex-1 bg-gray-200 rounded-full h-1.5">
                          <div className="bg-blue-600 h-1.5 rounded-full w-2/5 transition-all duration-1000"></div>
                        </div>
                        <span className="text-xs text-gray-500">2:30 / 5:45</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Transliteration */}
                {viewMode === 'list' && (
                  <div className="mb-3">
                    <h4 className="font-medium text-gray-700 mb-2 text-sm">Transliteration:</h4>
                    <p className="text-gray-600 italic leading-relaxed text-sm">
                      {dua.transliteration}
                    </p>
                  </div>
                )}

                {/* Translation */}
                <div className="mb-4">
                  {viewMode === 'list' && (
                    <h4 className="font-medium text-gray-700 mb-2 text-sm">Translation:</h4>
                  )}
                  <p className={`text-gray-800 leading-relaxed ${viewMode === 'list' ? 'text-sm' : 'text-sm line-clamp-3'}`}>
                    {dua.translation}
                  </p>
                </div>

                {/* Benefits */}
                {viewMode === 'list' && (
                  <div className="mb-4 bg-emerald-50 rounded-lg p-3">
                    <h4 className="font-medium text-emerald-700 mb-2 flex items-center gap-2 text-sm">
                      <div className="w-4 h-4 flex items-center justify-center">
                        <i className="ri-lightbulb-line text-xs"></i>
                      </div>
                      Benefits:
                    </h4>
                    <p className="text-emerald-700 text-xs leading-relaxed">
                      {dua.benefits}
                    </p>
                  </div>
                )}

                {/* Tags */}
                {dua.tags.length > 0 && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {dua.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md text-xs">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-2">
                  {dua.hasAudio && (
                    <button 
                      onClick={() => handlePlayAudio(dua.id)}
                      className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer whitespace-nowrap"
                    >
                      <div className="w-4 h-4 flex items-center justify-center">
                        <i className={`ri-${isPlaying === dua.id ? 'pause' : 'play'}-fill text-xs`}></i>
                      </div>
                      {isPlaying === dua.id ? 'Pause' : 'Audio'}
                    </button>
                  )}

                  <button 
                    onClick={() => handleCopyText(dua)}
                    className="flex items-center gap-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-file-copy-line text-xs"></i>
                    </div>
                    Copy
                  </button>

                  <button 
                    onClick={() => handleShare(dua)}
                    className="flex items-center gap-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-share-line text-xs"></i>
                    </div>
                    Share
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredDuas.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-gray-100 rounded-full">
              <i className="ri-heart-line text-2xl text-gray-400"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No du'as found</h3>
            <p className="text-gray-500">Try adjusting your search terms or category filters</p>
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
              {[...Array(Math.min(totalPages, 7))].map((_, index) => {
                let pageNum;
                if (totalPages <= 7) {
                  pageNum = index + 1;
                } else if (currentPage <= 4) {
                  pageNum = index + 1;
                } else if (currentPage >= totalPages - 3) {
                  pageNum = totalPages - 6 + index;
                } else {
                  pageNum = currentPage - 3 + index;
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

        {/* Popular Categories */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">Popular Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {categoriesWithCounts.slice(1, 11).map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategorySelect(category.id)}
                className="bg-gradient-to-br from-emerald-50 to-teal-50 hover:from-emerald-100 hover:to-teal-100 p-4 rounded-xl transition-colors cursor-pointer text-center group"
              >
                <div className="w-10 h-10 flex items-center justify-center mx-auto mb-3 text-emerald-600 group-hover:text-emerald-700">
                  <i className={`${category.icon} text-xl`}></i>
                </div>
                <h3 className="font-semibold text-emerald-700 text-sm mb-1">{category.name}</h3>
                <p className="text-emerald-600 text-xs">{category.count} du'as</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
