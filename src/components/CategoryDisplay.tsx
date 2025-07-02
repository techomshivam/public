
import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface Category {
  id: number;
  name: string;
  description: string;
  icon: string;
  color: string;
}

const CategoryDisplay = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetchCategories();
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

  if (categories.length === 0) {
    return (
      <div className="text-center text-gray-500" data-id="iip5vcr7d" data-path="src/components/CategoryDisplay.tsx">
        Categories are being loaded...
      </div>);

  }

  return (
    <Card data-id="64lfgo563" data-path="src/components/CategoryDisplay.tsx">
      <CardHeader data-id="7goi26vxl" data-path="src/components/CategoryDisplay.tsx">
        <CardTitle data-id="46oyvitq9" data-path="src/components/CategoryDisplay.tsx">Available Categories</CardTitle>
        <CardDescription data-id="nl4fhz5tj" data-path="src/components/CategoryDisplay.tsx">Categories for lost and found items</CardDescription>
      </CardHeader>
      <CardContent data-id="kcpi1y1wj" data-path="src/components/CategoryDisplay.tsx">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3" data-id="v13e2lub9" data-path="src/components/CategoryDisplay.tsx">
          {categories.map((category) =>
          <Badge
            key={category.id}
            variant="secondary"
            className="p-3 text-center justify-center"
            style={{ backgroundColor: category.color + '20', color: category.color }} data-id="1lqwgst2k" data-path="src/components/CategoryDisplay.tsx">

              {category.name}
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>);

};

export default CategoryDisplay;