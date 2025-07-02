
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { seedCategories } from '@/utils/seedCategories';
import { seedLocations } from '@/utils/seedLocations';

const DataInitializer = () => {
  const [isSeeding, setIsSeeding] = useState(false);
  const [seedingStatus, setSeedingStatus] = useState<{
    categories: 'pending' | 'success' | 'error';
    locations: 'pending' | 'success' | 'error';
  }>({
    categories: 'pending',
    locations: 'pending'
  });
  const { toast } = useToast();

  const checkDataExists = async () => {
    try {
      // Check categories
      const { data: categoriesData } = await window.ezsite.apis.tablePage(23524, {
        PageNo: 1,
        PageSize: 1,
        OrderByField: "id",
        IsAsc: true,
        Filters: []
      });

      // Check locations
      const { data: locationsData } = await window.ezsite.apis.tablePage(23525, {
        PageNo: 1,
        PageSize: 1,
        OrderByField: "id",
        IsAsc: true,
        Filters: []
      });

      setSeedingStatus({
        categories: categoriesData?.List?.length > 0 ? 'success' : 'pending',
        locations: locationsData?.List?.length > 0 ? 'success' : 'pending'
      });
    } catch (error) {
      console.error('Error checking data:', error);
    }
  };

  useEffect(() => {
    checkDataExists();
  }, []);

  const handleSeedData = async () => {
    setIsSeeding(true);

    try {
      // Seed categories
      if (seedingStatus.categories === 'pending') {
        await seedCategories();
        setSeedingStatus((prev) => ({ ...prev, categories: 'success' }));
      }

      // Seed locations
      if (seedingStatus.locations === 'pending') {
        await seedLocations();
        setSeedingStatus((prev) => ({ ...prev, locations: 'success' }));
      }

      toast({
        title: "Success!",
        description: "Categories and locations have been initialized successfully."
      });
    } catch (error) {
      console.error('Seeding failed:', error);
      toast({
        title: "Error",
        description: "Failed to initialize data. Please try again.",
        variant: "destructive"
      });
      setSeedingStatus({
        categories: 'error',
        locations: 'error'
      });
    } finally {
      setIsSeeding(false);
    }
  };

  const getStatusIcon = (status: 'pending' | 'success' | 'error') => {
    switch (status) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-500" data-id="tc3drk6q1" data-path="src/components/DataInitializer.tsx" />;
      case 'error':
        return <AlertCircle className="w-5 h-5 text-red-500" data-id="acgxav1i2" data-path="src/components/DataInitializer.tsx" />;
      default:
        return <AlertCircle className="w-5 h-5 text-yellow-500" data-id="r3m0qz8b3" data-path="src/components/DataInitializer.tsx" />;
    }
  };

  const allDataReady = seedingStatus.categories === 'success' && seedingStatus.locations === 'success';

  if (allDataReady) {
    return null; // Don't show the component if data is already initialized
  }

  return (
    <Card className="max-w-md mx-auto mt-8" data-id="pep0om2jg" data-path="src/components/DataInitializer.tsx">
      <CardHeader data-id="ggk7rjaby" data-path="src/components/DataInitializer.tsx">
        <CardTitle className="text-center" data-id="q2k8f0mz9" data-path="src/components/DataInitializer.tsx">Initialize Data</CardTitle>
        <CardDescription className="text-center" data-id="09elpj41s" data-path="src/components/DataInitializer.tsx">
          Set up categories and locations for the FindIt system
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4" data-id="ztviparh8" data-path="src/components/DataInitializer.tsx">
        <div className="space-y-3" data-id="4dw769bx2" data-path="src/components/DataInitializer.tsx">
          <div className="flex items-center justify-between" data-id="my325wpfd" data-path="src/components/DataInitializer.tsx">
            <span data-id="hkwch5nrc" data-path="src/components/DataInitializer.tsx">Categories</span>
            {getStatusIcon(seedingStatus.categories)}
          </div>
          <div className="flex items-center justify-between" data-id="5m8utnt6e" data-path="src/components/DataInitializer.tsx">
            <span data-id="bg8dzcd3x" data-path="src/components/DataInitializer.tsx">Locations</span>
            {getStatusIcon(seedingStatus.locations)}
          </div>
        </div>
        
        <Button
          onClick={handleSeedData}
          disabled={isSeeding || allDataReady}
          className="w-full" data-id="jk6bb7d0l" data-path="src/components/DataInitializer.tsx">

          {isSeeding && <Loader2 className="w-4 h-4 mr-2 animate-spin" data-id="pxjvvk471" data-path="src/components/DataInitializer.tsx" />}
          {isSeeding ? 'Initializing...' : 'Initialize Data'}
        </Button>
      </CardContent>
    </Card>);

};

export default DataInitializer;