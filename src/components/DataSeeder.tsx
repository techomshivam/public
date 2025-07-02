import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Database, Loader2 } from 'lucide-react';
import { populateCategories, populateLocations, populateSampleItems } from '@/utils/populateData';

const DataSeeder = () => {
  const [seeding, setSeeding] = useState(false);
  const { toast } = useToast();

  const handleSeedData = async () => {
    setSeeding(true);

    try {
      await populateCategories();
      await populateLocations();
      await populateSampleItems();

      toast({
        title: "Sample Data Added",
        description: "Categories, locations, and sample items have been added to the database."
      });
    } catch (error) {
      console.error('Failed to seed data:', error);
      toast({
        title: "Error",
        description: "Failed to seed sample data. Please try again.",
        variant: "destructive"
      });
    } finally {
      setSeeding(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50" data-id="07r8o8aio" data-path="src/components/DataSeeder.tsx">
      <Button
        onClick={handleSeedData}
        disabled={seeding}
        className="bg-purple-600 hover:bg-purple-700 text-white shadow-lg" data-id="ar4za7wlh" data-path="src/components/DataSeeder.tsx">

        {seeding ?
        <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" data-id="1ztemo5f6" data-path="src/components/DataSeeder.tsx" />
            Seeding...
          </> :

        <>
            <Database className="w-4 h-4 mr-2" data-id="7i6aexvr6" data-path="src/components/DataSeeder.tsx" />
            Add Sample Data
          </>
        }
      </Button>
    </div>);

};

export default DataSeeder;