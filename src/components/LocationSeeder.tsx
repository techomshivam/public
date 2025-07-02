import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { addLocationData } from '@/utils/addLocations';

const LocationSeeder = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleAddLocations = async () => {
    setIsLoading(true);
    try {
      const result = await addLocationData();
      if (result.success) {
        toast.success('All locations have been added successfully!');
      } else {
        toast.error('Failed to add some locations. Check console for details.');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred while adding locations.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto" data-id="s28a2v26e" data-path="src/components/LocationSeeder.tsx">
      <CardHeader data-id="80qe0b28b" data-path="src/components/LocationSeeder.tsx">
        <CardTitle data-id="7epn7vsf5" data-path="src/components/LocationSeeder.tsx">Add Campus Locations</CardTitle>
        <CardDescription data-id="6al0tw3iy" data-path="src/components/LocationSeeder.tsx">
          Click the button below to populate the database with campus locations including buildings and hostels.
        </CardDescription>
      </CardHeader>
      <CardContent data-id="ni9pd5xrf" data-path="src/components/LocationSeeder.tsx">
        <Button
          onClick={handleAddLocations}
          disabled={isLoading}
          className="w-full" data-id="rhlgdkvv2" data-path="src/components/LocationSeeder.tsx">

          {isLoading ? 'Adding Locations...' : 'Add All Locations'}
        </Button>
        
        <div className="mt-4 text-sm text-gray-600 space-y-2" data-id="kuiwg8wuh" data-path="src/components/LocationSeeder.tsx">
          <div data-id="iqqjg3a0i" data-path="src/components/LocationSeeder.tsx">
            <strong data-id="brqd8f35h" data-path="src/components/LocationSeeder.tsx">Buildings:</strong> Vedanta, Vishweshvarya, Chanakya, Vishwakarma, Vivekananda, Charak, Vastu
          </div>
          <div data-id="9ix365wx0" data-path="src/components/LocationSeeder.tsx">
            <strong data-id="dmc78aock" data-path="src/components/LocationSeeder.tsx">Boys Hostels:</strong> Sarabhai, Bhabha, Bose, Raman
          </div>
          <div data-id="m8ooqdyms" data-path="src/components/LocationSeeder.tsx">
            <strong data-id="vym3pi0j2" data-path="src/components/LocationSeeder.tsx">Girls Hostels:</strong> Sarojini, Kasturba
          </div>
        </div>
      </CardContent>
    </Card>);

};

export default LocationSeeder;