
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchFilters from '@/components/SearchFilters';
import ItemCard from '@/components/ItemCard';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

interface SearchFilters {
  query: string;
  category: string;
  location: string;
  status: string;
}

interface Item {
  id: number;
  name: string;
  description: string;
  status: 'LOST' | 'FOUND';
  location_name?: string;
  category_name?: string;
  reporter_name: string;
  date_reported: string;
  image_url?: string;
  is_claimed: boolean;
}

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<SearchFilters>({
    query: searchParams.get('query') || '',
    category: searchParams.get('category') || '',
    location: searchParams.get('location') || '',
    status: searchParams.get('status') || ''
  });

  useEffect(() => {
    // Initialize filters from URL params
    setFilters({
      query: searchParams.get('query') || '',
      category: searchParams.get('category') || '',
      location: searchParams.get('location') || '',
      status: searchParams.get('status') || ''
    });

    // Perform initial search if there are params
    if (searchParams.toString()) {
      performSearch({
        query: searchParams.get('query') || '',
        category: searchParams.get('category') || '',
        location: searchParams.get('location') || '',
        status: searchParams.get('status') || ''
      });
    } else {
      // Load recent items if no search params
      loadRecentItems();
    }
  }, [searchParams]);

  const buildSearchFilters = (searchFilters: SearchFilters) => {
    const filters = [];

    if (searchFilters.query) {
      filters.push({
        name: "name",
        op: "StringContains",
        value: searchFilters.query
      });
    }

    if (searchFilters.category && searchFilters.category !== 'all') {
      filters.push({
        name: "category_id",
        op: "Equal",
        value: parseInt(searchFilters.category)
      });
    }

    if (searchFilters.location && searchFilters.location !== 'all') {
      filters.push({
        name: "location_id",
        op: "Equal",
        value: parseInt(searchFilters.location)
      });
    }

    if (searchFilters.status && searchFilters.status !== 'all') {
      filters.push({
        name: "status",
        op: "Equal",
        value: searchFilters.status
      });
    }

    return filters;
  };

  const performSearch = async (searchFilters: SearchFilters, page: number = 1) => {
    setLoading(true);
    try {
      const apiFilters = buildSearchFilters(searchFilters);

      const { data, error } = await window.ezsite.apis.tablePage(23526, {
        PageNo: page,
        PageSize: 12,
        OrderByField: "date_reported",
        IsAsc: false,
        Filters: apiFilters
      });

      if (error) {
        throw new Error(error);
      }

      if (data?.List) {
        // Fetch additional data for each item
        const enrichedItems = await Promise.all(
          data.List.map(async (item: any) => {
            const enrichedItem = { ...item };

            // Fetch location name
            if (item.location_id) {
              try {
                const { data: locationData } = await window.ezsite.apis.tablePage(23525, {
                  PageNo: 1,
                  PageSize: 1,
                  Filters: [{ name: "id", op: "Equal", value: item.location_id }]
                });
                if (locationData?.List?.[0]) {
                  const location = locationData.List[0];
                  enrichedItem.location_name = `${location.name}${location.building ? ` - ${location.building}` : ''}${location.floor ? `, ${location.floor}` : ''}`;
                }
              } catch (e) {
                console.error('Failed to fetch location:', e);
              }
            }

            // Fetch category name
            if (item.category_id) {
              try {
                const { data: categoryData } = await window.ezsite.apis.tablePage(23524, {
                  PageNo: 1,
                  PageSize: 1,
                  Filters: [{ name: "id", op: "Equal", value: item.category_id }]
                });
                if (categoryData?.List?.[0]) {
                  enrichedItem.category_name = categoryData.List[0].name;
                }
              } catch (e) {
                console.error('Failed to fetch category:', e);
              }
            }

            return enrichedItem;
          })
        );

        setItems(enrichedItems);
        setTotalCount(data.VirtualCount || 0);
      } else {
        setItems([]);
        setTotalCount(0);
      }
    } catch (error) {
      console.error('Search failed:', error);
      toast({
        title: "Search Error",
        description: "Failed to search items. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const loadRecentItems = async () => {
    setLoading(true);
    try {
      const { data, error } = await window.ezsite.apis.tablePage(23526, {
        PageNo: 1,
        PageSize: 12,
        OrderByField: "date_reported",
        IsAsc: false,
        Filters: []
      });

      if (error) {
        throw new Error(error);
      }

      if (data?.List) {
        // Fetch additional data for each item
        const enrichedItems = await Promise.all(
          data.List.map(async (item: any) => {
            const enrichedItem = { ...item };

            // Fetch location name
            if (item.location_id) {
              try {
                const { data: locationData } = await window.ezsite.apis.tablePage(23525, {
                  PageNo: 1,
                  PageSize: 1,
                  Filters: [{ name: "id", op: "Equal", value: item.location_id }]
                });
                if (locationData?.List?.[0]) {
                  const location = locationData.List[0];
                  enrichedItem.location_name = `${location.name}${location.building ? ` - ${location.building}` : ''}${location.floor ? `, ${location.floor}` : ''}`;
                }
              } catch (e) {
                console.error('Failed to fetch location:', e);
              }
            }

            return enrichedItem;
          })
        );

        setItems(enrichedItems);
        setTotalCount(data.VirtualCount || 0);
      }
    } catch (error) {
      console.error('Failed to load recent items:', error);
      toast({
        title: "Error",
        description: "Failed to load recent items. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (searchFilters: SearchFilters) => {
    setFilters(searchFilters);
    setCurrentPage(1);
    performSearch(searchFilters, 1);
  };

  const handleClaim = async (itemId: number) => {
    try {
      const { error } = await window.ezsite.apis.tableUpdate(23526, {
        ID: itemId,
        is_claimed: true,
        claimed_date: new Date().toISOString()
      });

      if (error) {
        throw new Error(error);
      }

      toast({
        title: "Success",
        description: "Item claimed successfully! The reporter will be notified."
      });

      // Refresh the search results
      if (filters.query || filters.category || filters.location || filters.status) {
        performSearch(filters, currentPage);
      } else {
        loadRecentItems();
      }
    } catch (error) {
      console.error('Failed to claim item:', error);
      toast({
        title: "Error",
        description: "Failed to claim item. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50" data-id="2rzl93l2q" data-path="src/pages/SearchPage.tsx">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-id="jr5n22fdy" data-path="src/pages/SearchPage.tsx">
        <div className="text-center mb-8" data-id="5xia8d7ku" data-path="src/pages/SearchPage.tsx">
          <h1 className="text-3xl font-bold text-gray-900 mb-4" data-id="cynbphtps" data-path="src/pages/SearchPage.tsx">Search Lost Items</h1>
          <p className="text-gray-600" data-id="5h58fpe7q" data-path="src/pages/SearchPage.tsx">
            Use our advanced search to find your lost belongings or browse recently found items.
          </p>
        </div>

        <div className="mb-8" data-id="e0rwgp6iy" data-path="src/pages/SearchPage.tsx">
          <SearchFilters onSearch={handleSearch} data-id="cqsu9mrai" data-path="src/pages/SearchPage.tsx" />
        </div>

        {/* Results Section */}
        <div data-id="khia61pel" data-path="src/pages/SearchPage.tsx">
          <div className="flex justify-between items-center mb-6" data-id="e9tbzs71c" data-path="src/pages/SearchPage.tsx">
            <h2 className="text-2xl font-bold text-gray-900" data-id="vtotpd9ds" data-path="src/pages/SearchPage.tsx">
              {filters.query || filters.category || filters.location || filters.status ?
              'Search Results' :
              'Recent Posts'}
            </h2>
            <p className="text-gray-600" data-id="ul3mzg530" data-path="src/pages/SearchPage.tsx">
              {totalCount} item{totalCount !== 1 ? 's' : ''} found
            </p>
          </div>

          {loading ?
          <div className="flex justify-center items-center py-12" data-id="cyww6k7ly" data-path="src/pages/SearchPage.tsx">
              <Loader2 className="w-8 h-8 animate-spin text-blue-500" data-id="q0du6r2u9" data-path="src/pages/SearchPage.tsx" />
              <span className="ml-2 text-gray-600" data-id="2girvjo79" data-path="src/pages/SearchPage.tsx">Loading items...</span>
            </div> :
          items.length > 0 ?
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" data-id="otrsg20fn" data-path="src/pages/SearchPage.tsx">
              {items.map((item) =>
            <ItemCard
              key={item.id}
              item={item}
              onClaim={handleClaim}
              showClaimButton={true} data-id="5qewmmj3f" data-path="src/pages/SearchPage.tsx" />

            )}
            </div> :

          <div className="text-center py-12" data-id="nn04rv3jk" data-path="src/pages/SearchPage.tsx">
              <div className="text-gray-400 mb-4" data-id="fa91i36i8" data-path="src/pages/SearchPage.tsx">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-id="a99nvo7i8" data-path="src/pages/SearchPage.tsx">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.5-1.006-6-2.709V15a7.966 7.966 0 01-2-5.291c0-1.115.197-2.185.556-3.174M15 6.39V4a2 2 0 00-2-2h-6a2 2 0 00-2 2v2.39M3 4h18M5 4h14l-1 16H6L5 4z" data-id="0pu5ldex1" data-path="src/pages/SearchPage.tsx" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2" data-id="i8c1jizet" data-path="src/pages/SearchPage.tsx">No items found</h3>
              <p className="text-gray-600" data-id="zvrfwh6bj" data-path="src/pages/SearchPage.tsx">
                {filters.query || filters.category || filters.location || filters.status ?
              'Try adjusting your search criteria or browse all recent posts.' :
              'No items have been reported yet. Be the first to help someone find their belongings!'}
              </p>
            </div>
          }
        </div>
      </div>
    </div>);

};

export default SearchPage;