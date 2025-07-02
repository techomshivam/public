
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Plus, Heart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import SearchFilters from '@/components/SearchFilters';
import DataSeeder from '@/components/DataSeeder';

const FindItHome = () => {
  const navigate = useNavigate();
  const [quickSearch, setQuickSearch] = useState('');

  const handleQuickSearch = () => {
    if (quickSearch.trim()) {
      navigate(`/search?query=${encodeURIComponent(quickSearch)}`);
    } else {
      navigate('/search');
    }
  };

  const handleSearch = (filters: any) => {
    const searchParams = new URLSearchParams();
    if (filters.query) searchParams.set('query', filters.query);
    if (filters.category) searchParams.set('category', filters.category);
    if (filters.location) searchParams.set('location', filters.location);
    if (filters.status) searchParams.set('status', filters.status);

    navigate(`/search?${searchParams.toString()}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100" data-id="yr9t2kh2s" data-path="src/pages/FindItHome.tsx">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.8), rgba(99, 102, 241, 0.8)), url("https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
          minHeight: '500px'
        }} data-id="ax35mk57f" data-path="src/pages/FindItHome.tsx">

        <div className="absolute inset-0 bg-black bg-opacity-30" data-id="jqa730tk6" data-path="src/pages/FindItHome.tsx"></div>
        
        <div className="relative z-10 flex items-center justify-center min-h-[500px]" data-id="54gw81isw" data-path="src/pages/FindItHome.tsx">
          <div className="text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto" data-id="msn5d58hy" data-path="src/pages/FindItHome.tsx">
            {/* Logo/Icon */}
            <div className="mb-8 flex justify-center" data-id="rrzacovtm" data-path="src/pages/FindItHome.tsx">
              <div className="relative" data-id="ujlinu6rr" data-path="src/pages/FindItHome.tsx">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg" data-id="ufzx7dkpc" data-path="src/pages/FindItHome.tsx">
                  <Search className="w-12 h-12 text-blue-500" data-id="7s1lzp5fq" data-path="src/pages/FindItHome.tsx" />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full" data-id="9rtrt3xou" data-path="src/pages/FindItHome.tsx"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-green-400 rounded-full" data-id="bxv1de5os" data-path="src/pages/FindItHome.tsx"></div>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6" data-id="3j51un9mv" data-path="src/pages/FindItHome.tsx">
              Lost Something?
              <br data-id="cb0ksfkxx" data-path="src/pages/FindItHome.tsx" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400" data-id="wm1n2gbm9" data-path="src/pages/FindItHome.tsx">
                Find It Here!
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-blue-100" data-id="90dcbv6ww" data-path="src/pages/FindItHome.tsx">
              Our campus-wide lost and found system helps students and staff
              <br data-id="gwhtmno8i" data-path="src/pages/FindItHome.tsx" />
              reconnect with their belongings quickly and securely.
            </p>

            {/* Quick Search */}
            <div className="max-w-2xl mx-auto mb-8" data-id="41jdkdj5y" data-path="src/pages/FindItHome.tsx">
              <div className="flex flex-col sm:flex-row gap-4" data-id="5rflgy4mp" data-path="src/pages/FindItHome.tsx">
                <Input
                  placeholder="Quick search for your item..."
                  value={quickSearch}
                  onChange={(e) => setQuickSearch(e.target.value)}
                  className="flex-1 h-12 text-lg"
                  onKeyPress={(e) => e.key === 'Enter' && handleQuickSearch()} data-id="npppmcnr8" data-path="src/pages/FindItHome.tsx" />

                <Button
                  onClick={handleQuickSearch}
                  className="bg-white text-blue-600 hover:bg-gray-100 h-12 px-8 font-semibold" data-id="fcauhztyr" data-path="src/pages/FindItHome.tsx">

                  Search
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8" data-id="tde7u9ty6" data-path="src/pages/FindItHome.tsx">
              <Button
                onClick={() => navigate('/search')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg" data-id="3afz2dd1k" data-path="src/pages/FindItHome.tsx">

                Search Lost Items
              </Button>
              
              <Button
                onClick={() => navigate('/report')}
                variant="outline"
                className="bg-white bg-opacity-20 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg backdrop-blur-sm" data-id="elwrv2zph" data-path="src/pages/FindItHome.tsx">

                Report Found Item
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" data-id="m92gj3x8p" data-path="src/pages/FindItHome.tsx">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16" data-id="8mmi7b9x8" data-path="src/pages/FindItHome.tsx">
          {/* Search Feature */}
          <div className="text-center" data-id="yrvjd9mx1" data-path="src/pages/FindItHome.tsx">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg" data-id="ripjr7s8m" data-path="src/pages/FindItHome.tsx">
              <Search className="w-8 h-8 text-white" data-id="yxv8f53sc" data-path="src/pages/FindItHome.tsx" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900" data-id="xla1sy88q" data-path="src/pages/FindItHome.tsx">Search</h3>
            <p className="text-gray-600 mb-4" data-id="5p7x0vj5c" data-path="src/pages/FindItHome.tsx">
              Look for your lost item in our database
            </p>
            <Button
              variant="outline"
              onClick={() => navigate('/search')}
              className="text-blue-600 border-blue-600 hover:bg-blue-50" data-id="jm1c3esog" data-path="src/pages/FindItHome.tsx">

              Start Searching
            </Button>
          </div>

          {/* Report Feature */}
          <div className="text-center" data-id="z6ytfju41" data-path="src/pages/FindItHome.tsx">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg" data-id="j6v896xj8" data-path="src/pages/FindItHome.tsx">
              <Plus className="w-8 h-8 text-white" data-id="g6qzf7izk" data-path="src/pages/FindItHome.tsx" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900" data-id="oeoh9c87v" data-path="src/pages/FindItHome.tsx">Report</h3>
            <p className="text-gray-600 mb-4" data-id="8983fuoue" data-path="src/pages/FindItHome.tsx">
              Report lost or found items easily
            </p>
            <Button
              variant="outline"
              onClick={() => navigate('/report')}
              className="text-green-600 border-green-600 hover:bg-green-50" data-id="3ixafuz9h" data-path="src/pages/FindItHome.tsx">

              Report Item
            </Button>
          </div>

          {/* Reunite Feature */}
          <div className="text-center" data-id="ai4xtdimo" data-path="src/pages/FindItHome.tsx">
            <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg" data-id="93zuutqk5" data-path="src/pages/FindItHome.tsx">
              <Heart className="w-8 h-8 text-white" data-id="3mut39vbw" data-path="src/pages/FindItHome.tsx" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900" data-id="lhe2u7izq" data-path="src/pages/FindItHome.tsx">Reunite</h3>
            <p className="text-gray-600 mb-4" data-id="rkholu2te" data-path="src/pages/FindItHome.tsx">
              Get back your precious belongings
            </p>
            <Button
              variant="outline"
              onClick={() => navigate('/recent-posts')}
              className="text-pink-600 border-pink-600 hover:bg-pink-50" data-id="0jsmt5hh2" data-path="src/pages/FindItHome.tsx">

              View Recent Posts
            </Button>
          </div>
        </div>

        {/* Advanced Search Section */}
        <div className="bg-white rounded-lg shadow-sm p-8" data-id="zbupy9foj" data-path="src/pages/FindItHome.tsx">
          <div className="text-center mb-8" data-id="s0s6te67x" data-path="src/pages/FindItHome.tsx">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" data-id="6z246v201" data-path="src/pages/FindItHome.tsx">Advanced Search</h2>
            <p className="text-gray-600" data-id="eab0ovd2h" data-path="src/pages/FindItHome.tsx">Use our advanced search to find your lost belongings or browse recently found items.</p>
          </div>
          
          <SearchFilters onSearch={handleSearch} data-id="9rn5f4pjr" data-path="src/pages/FindItHome.tsx" />
        </div>
      </div>

      {/* Data Seeder for demo purposes */}
      <DataSeeder data-id="6cpb41s6e" data-path="src/pages/FindItHome.tsx" />
    </div>);

};

export default FindItHome;