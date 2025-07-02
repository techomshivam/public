
import React, { useState, useEffect } from 'react';
import ItemCard from '@/components/ItemCard';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

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

const RecentPostsPage = () => {
  const { toast } = useToast();
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('date_reported');

  useEffect(() => {
    loadItems();
  }, [statusFilter, sortBy]);

  const loadItems = async () => {
    setLoading(true);
    try {
      const filters = [];
      if (statusFilter && statusFilter !== 'all') {
        filters.push({
          name: "status",
          op: "Equal",
          value: statusFilter
        });
      }

      const { data, error } = await window.ezsite.apis.tablePage(23526, {
        PageNo: 1,
        PageSize: 20,
        OrderByField: sortBy,
        IsAsc: false,
        Filters: filters
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
      } else {
        setItems([]);
      }
    } catch (error) {
      console.error('Failed to load items:', error);
      toast({
        title: "Error",
        description: "Failed to load recent posts. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
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

      // Refresh the items
      loadItems();
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
    <div className="min-h-screen bg-gray-50" data-id="a5m19nqdm" data-path="src/pages/RecentPostsPage.tsx">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-id="fx7sn3o37" data-path="src/pages/RecentPostsPage.tsx">
        <div className="text-center mb-8" data-id="swv61y6ub" data-path="src/pages/RecentPostsPage.tsx">
          <h1 className="text-3xl font-bold text-gray-900 mb-4" data-id="65zeebe2e" data-path="src/pages/RecentPostsPage.tsx">Recent Posts</h1>
          <p className="text-gray-600" data-id="wohc3vele" data-path="src/pages/RecentPostsPage.tsx">
            Latest lost and found items reported by our campus community.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border p-4 mb-8" data-id="a0lu7nesi" data-path="src/pages/RecentPostsPage.tsx">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between" data-id="hf9tgv96t" data-path="src/pages/RecentPostsPage.tsx">
            <div className="flex items-center space-x-2" data-id="zp2odp50x" data-path="src/pages/RecentPostsPage.tsx">
              <Filter className="w-5 h-5 text-gray-500" data-id="ksdd4ruik" data-path="src/pages/RecentPostsPage.tsx" />
              <span className="text-sm font-medium text-gray-700" data-id="ys161ubb4" data-path="src/pages/RecentPostsPage.tsx">Filters:</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4" data-id="b43a9bbov" data-path="src/pages/RecentPostsPage.tsx">
              <Select value={statusFilter} onValueChange={setStatusFilter} data-id="joiian0xq" data-path="src/pages/RecentPostsPage.tsx">
                <SelectTrigger className="w-40" data-id="qrcd8qa85" data-path="src/pages/RecentPostsPage.tsx">
                  <SelectValue placeholder="All Status" data-id="nv9k4ulnh" data-path="src/pages/RecentPostsPage.tsx" />
                </SelectTrigger>
                <SelectContent data-id="3vmw4as8r" data-path="src/pages/RecentPostsPage.tsx">
                  <SelectItem value="all" data-id="mo4hd80st" data-path="src/pages/RecentPostsPage.tsx">All Status</SelectItem>
                  <SelectItem value="FOUND" data-id="jit7k25ae" data-path="src/pages/RecentPostsPage.tsx">Found Items</SelectItem>
                  <SelectItem value="LOST" data-id="p7y9hxp16" data-path="src/pages/RecentPostsPage.tsx">Lost Items</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={sortBy} onValueChange={setSortBy} data-id="c7ckhuvk1" data-path="src/pages/RecentPostsPage.tsx">
                <SelectTrigger className="w-48" data-id="mz12qxx9a" data-path="src/pages/RecentPostsPage.tsx">
                  <SelectValue placeholder="Sort by" data-id="afqm6fh0f" data-path="src/pages/RecentPostsPage.tsx" />
                </SelectTrigger>
                <SelectContent data-id="pp3ox8y1q" data-path="src/pages/RecentPostsPage.tsx">
                  <SelectItem value="date_reported" data-id="8g0ljg10k" data-path="src/pages/RecentPostsPage.tsx">Most Recent</SelectItem>
                  <SelectItem value="name" data-id="s3q0bntz9" data-path="src/pages/RecentPostsPage.tsx">Item Name</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Items Grid */}
        {loading ?
        <div className="flex justify-center items-center py-12" data-id="03b2mq2z0" data-path="src/pages/RecentPostsPage.tsx">
            <Loader2 className="w-8 h-8 animate-spin text-blue-500" data-id="5n5dqicrk" data-path="src/pages/RecentPostsPage.tsx" />
            <span className="ml-2 text-gray-600" data-id="agej9ze6p" data-path="src/pages/RecentPostsPage.tsx">Loading recent posts...</span>
          </div> :
        items.length > 0 ?
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" data-id="51a5fpi1s" data-path="src/pages/RecentPostsPage.tsx">
            {items.map((item) =>
          <ItemCard
            key={item.id}
            item={item}
            onClaim={handleClaim}
            showClaimButton={true} data-id="9ep84em5g" data-path="src/pages/RecentPostsPage.tsx" />

          )}
          </div> :

        <div className="text-center py-12" data-id="hl6u6981v" data-path="src/pages/RecentPostsPage.tsx">
            <div className="text-gray-400 mb-4" data-id="pxyhhycyc" data-path="src/pages/RecentPostsPage.tsx">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-id="18z7wn218" data-path="src/pages/RecentPostsPage.tsx">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.5-1.006-6-2.709V15a7.966 7.966 0 01-2-5.291c0-1.115.197-2.185.556-3.174M15 6.39V4a2 2 0 00-2-2h-6a2 2 0 00-2 2v2.39M3 4h18M5 4h14l-1 16H6L5 4z" data-id="zl4lx6o5g" data-path="src/pages/RecentPostsPage.tsx" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2" data-id="bqugez5v5" data-path="src/pages/RecentPostsPage.tsx">No items found</h3>
            <p className="text-gray-600" data-id="imr5w7bif" data-path="src/pages/RecentPostsPage.tsx">
              No items have been reported yet. Be the first to help someone find their belongings!
            </p>
          </div>
        }
      </div>
    </div>);

};

export default RecentPostsPage;