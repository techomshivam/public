
import React, { useEffect, useState } from 'react';
import { seedCategories } from '@/utils/seedCategories';
import { seedLocations } from '@/utils/seedLocations';

const AutoDataSeeder = () => {
  const [hasSeeded, setHasSeeded] = useState(false);

  useEffect(() => {
    const seedDataIfNeeded = async () => {
      if (hasSeeded) return;

      try {
        // Check if categories exist
        const { data: categoriesData } = await window.ezsite.apis.tablePage(23524, {
          PageNo: 1,
          PageSize: 1,
          OrderByField: "id",
          IsAsc: true,
          Filters: []
        });

        // Check if locations exist
        const { data: locationsData } = await window.ezsite.apis.tablePage(23525, {
          PageNo: 1,
          PageSize: 1,
          OrderByField: "id",
          IsAsc: true,
          Filters: []
        });

        // Seed data if needed
        if (!categoriesData?.List?.length) {
          console.log('Seeding categories...');
          await seedCategories();
        }

        if (!locationsData?.List?.length) {
          console.log('Seeding locations...');
          await seedLocations();
        }

        setHasSeeded(true);
      } catch (error) {
        console.error('Auto-seeding failed:', error);
      }
    };

    seedDataIfNeeded();
  }, [hasSeeded]);

  return null; // This component doesn't render anything
};

export default AutoDataSeeder;