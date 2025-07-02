
import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

interface SearchFiltersProps {
  onSearch: (filters: SearchFilters) => void;
  showPopularSearches?: boolean;
}

interface SearchFilters {
  query: string;
  category: string;
  location: string;
  status: string;
}

interface Category {
  id: number;
  name: string;
}

interface Location {
  id: number;
  name: string;
  building?: string;
  floor?: string;
}

const SearchFilters: React.FC<SearchFiltersProps> = ({ onSearch, showPopularSearches = true }) => {
  const [filters, setFilters] = useState<SearchFilters>({
    query: '',
    category: '',
    location: '',
    status: ''
  });

  const [categories, setCategories] = useState<Category[]>([]);
  const [locations, setLocations] = useState<Location[]>([]);

  const popularSearches = ['iPhone', 'Wallet', 'Keys', 'Water Bottle', 'Earphones', 'Notebook'];

  useEffect(() => {
    fetchCategories();
    fetchLocations();
  }, []);

  const fetchCategories = async () => {
    try {
      const { data, error } = await window.ezsite.apis.tablePage(23524, {
        PageNo: 1,
        PageSize: 50,
        OrderByField: "name",
        IsAsc: true,
        Filters: []
      });

      if (!error && data?.List) {
        setCategories(data.List);
      }
    } catch (error) {
      console.error('Failed to fetch categories:', error);
    }
  };

  const fetchLocations = async () => {
    try {
      const { data, error } = await window.ezsite.apis.tablePage(23525, {
        PageNo: 1,
        PageSize: 50,
        OrderByField: "name",
        IsAsc: true,
        Filters: []
      });

      if (!error && data?.List) {
        setLocations(data.List);
      }
    } catch (error) {
      console.error('Failed to fetch locations:', error);
    }
  };

  const handleSearch = () => {
    onSearch(filters);
  };

  const handlePopularSearch = (query: string) => {
    const newFilters = { ...filters, query };
    setFilters(newFilters);
    onSearch(newFilters);
  };

  const handleInputChange = (field: keyof SearchFilters, value: string) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-6" data-id="51atm0mh0" data-path="src/components/SearchFilters.tsx">
      {/* Search Form */}
      <div className="bg-white rounded-lg shadow-sm border p-6" data-id="kf8csweh0" data-path="src/components/SearchFilters.tsx">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4" data-id="trqxa3aiu" data-path="src/components/SearchFilters.tsx">
          <div className="md:col-span-2" data-id="i65ncp0gr" data-path="src/components/SearchFilters.tsx">
            <Input
              placeholder="What did you lose? (e.g., iPhone, wallet, keys...)"
              value={filters.query}
              onChange={(e) => handleInputChange('query', e.target.value)}
              className="w-full" data-id="kjgz21s3g" data-path="src/components/SearchFilters.tsx" />

          </div>
          
          <Select value={filters.category} onValueChange={(value) => handleInputChange('category', value)} data-id="3qjmvjw3h" data-path="src/components/SearchFilters.tsx">
            <SelectTrigger data-id="8bcd3khwi" data-path="src/components/SearchFilters.tsx">
              <SelectValue placeholder="Category" data-id="qfak943y7" data-path="src/components/SearchFilters.tsx" />
            </SelectTrigger>
            <SelectContent data-id="7e2pvcsjw" data-path="src/components/SearchFilters.tsx">
              <SelectItem value="all" data-id="93ziazlbb" data-path="src/components/SearchFilters.tsx">All Categories</SelectItem>
              {categories.map((category) =>
              <SelectItem key={category.id} value={category.id.toString()} data-id="j4eegtmb2" data-path="src/components/SearchFilters.tsx">
                  {category.name}
                </SelectItem>
              )}
            </SelectContent>
          </Select>
          
          <Select value={filters.location} onValueChange={(value) => handleInputChange('location', value)} data-id="7s6ljffxs" data-path="src/components/SearchFilters.tsx">
            <SelectTrigger data-id="sct38lbgr" data-path="src/components/SearchFilters.tsx">
              <SelectValue placeholder="Select Location" data-id="0u927rssm" data-path="src/components/SearchFilters.tsx" />
            </SelectTrigger>
            <SelectContent data-id="frjucp7uq" data-path="src/components/SearchFilters.tsx">
              <SelectItem value="all" data-id="8gwu5mrfh" data-path="src/components/SearchFilters.tsx">All Locations</SelectItem>
              {locations.map((location) =>
              <SelectItem key={location.id} value={location.id.toString()} data-id="8cm2ia3he" data-path="src/components/SearchFilters.tsx">
                  {location.name}
                  {location.building && ` - ${location.building}`}
                  {location.floor && `, ${location.floor}`}
                </SelectItem>
              )}
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex justify-center" data-id="7qs1jbrj5" data-path="src/components/SearchFilters.tsx">
          <Button
            onClick={handleSearch}
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-2 flex items-center space-x-2" data-id="8qy1lr7bk" data-path="src/components/SearchFilters.tsx">

            <Search className="w-4 h-4" data-id="pryhkkfup" data-path="src/components/SearchFilters.tsx" />
            <span data-id="zqva59am8" data-path="src/components/SearchFilters.tsx">Search</span>
          </Button>
        </div>
      </div>

      {/* Popular Searches */}
      {showPopularSearches &&
      <div className="text-center" data-id="zsu5h2hig" data-path="src/components/SearchFilters.tsx">
          <p className="text-gray-600 mb-3" data-id="5vva4kwjr" data-path="src/components/SearchFilters.tsx">Popular searches:</p>
          <div className="flex flex-wrap justify-center gap-2" data-id="33pygg3pe" data-path="src/components/SearchFilters.tsx">
            {popularSearches.map((search) =>
          <Badge
            key={search}
            variant="secondary"
            className="cursor-pointer hover:bg-blue-100 hover:text-blue-700 transition-colors"
            onClick={() => handlePopularSearch(search)} data-id="qbnoisskf" data-path="src/components/SearchFilters.tsx">

                {search}
              </Badge>
          )}
          </div>
        </div>
      }
    </div>);

};

export default SearchFilters;