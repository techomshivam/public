
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FormControl } from '@/components/ui/form';

interface Location {
  id: number;
  name: string;
  building?: string;
  floor?: string;
  description?: string;
}

interface LocationSelectorProps {
  locations: Location[];
  onValueChange: (value: string) => void;
  defaultValue?: string;
  placeholder?: string;
}

const LocationSelector: React.FC<LocationSelectorProps> = ({
  locations,
  onValueChange,
  defaultValue,
  placeholder = "Select Location"
}) => {
  // Group locations by category (Buildings, Boys Hostels, Girls Hostels, Others)
  const groupedLocations = {
    'Academic Buildings': [] as Location[],
    'Boys Hostels': [] as Location[],
    'Girls Hostels': [] as Location[],
    'Common Areas': [] as Location[]
  };

  locations.forEach((location) => {
    const building = location.building || '';

    if (['Vedanta', 'Vishweshvarya', 'Chanakya', 'Vishwakarma', 'Vivekananda', 'Charak', 'Vastu'].includes(building)) {
      groupedLocations['Academic Buildings'].push(location);
    } else if (building.includes('Boys Hostel')) {
      groupedLocations['Boys Hostels'].push(location);
    } else if (building.includes('Girls Hostel')) {
      groupedLocations['Girls Hostels'].push(location);
    } else {
      groupedLocations['Common Areas'].push(location);
    }
  });

  const sortLocations = (locs: Location[]) => {
    return locs.sort((a, b) => {
      // First sort by building name
      const buildingCompare = (a.building || '').localeCompare(b.building || '');
      if (buildingCompare !== 0) return buildingCompare;

      // Then sort by floor number if they exist
      if (a.floor && b.floor) {
        const aFloorNum = parseInt(a.floor.replace(/\D/g, '')) || 0;
        const bFloorNum = parseInt(b.floor.replace(/\D/g, '')) || 0;
        return aFloorNum - bFloorNum;
      }

      return a.name.localeCompare(b.name);
    });
  };

  const getDisplayName = (location: Location) => {
    if (location.building?.includes('Hostel') && location.floor) {
      const hostelName = location.building.replace(' Boys Hostel', '').replace(' Girls Hostel', '');
      return `${hostelName} - ${location.floor}`;
    }
    return location.name;
  };

  return (
    <Select onValueChange={onValueChange} defaultValue={defaultValue} data-id="dnl1zhlqt" data-path="src/components/LocationSelector.tsx">
      <FormControl data-id="ejlk4zezi" data-path="src/components/LocationSelector.tsx">
        <SelectTrigger data-id="ayz7enk0q" data-path="src/components/LocationSelector.tsx">
          <SelectValue placeholder={placeholder} data-id="ejymjtzkg" data-path="src/components/LocationSelector.tsx" />
        </SelectTrigger>
      </FormControl>
      <SelectContent className="max-h-[400px]" data-id="k3bc0qwu8" data-path="src/components/LocationSelector.tsx">
        {Object.entries(groupedLocations).map(([groupName, locs]) => {
          if (locs.length === 0) return null;

          return (
            <div key={groupName} data-id="vlqkgyjrv" data-path="src/components/LocationSelector.tsx">
              <div className="px-2 py-1.5 text-sm font-semibold text-gray-500 bg-gray-50 sticky top-0" data-id="8x8x1g8zv" data-path="src/components/LocationSelector.tsx">
                {groupName}
              </div>
              {sortLocations(locs).map((location) =>
              <SelectItem
                key={location.id}
                value={location.id.toString()}
                className="pl-6" data-id="uic8ohvw0" data-path="src/components/LocationSelector.tsx">

                  {getDisplayName(location)}
                </SelectItem>
              )}
            </div>);

        })}
      </SelectContent>
    </Select>);

};

export default LocationSelector;