
// Seed locations data
export const seedLocations = async () => {
  const locations = [
  // Buildings
  {
    name: 'Vedanta Building',
    building: 'Vedanta',
    floor: 'All Floors',
    description: 'Academic building with classrooms and laboratories'
  },
  {
    name: 'Vishweshvarya Building',
    building: 'Vishweshvarya',
    floor: 'All Floors',
    description: 'Engineering and technical departments'
  },
  {
    name: 'Chanakya Building',
    building: 'Chanakya',
    floor: 'All Floors',
    description: 'Administrative and management building'
  },
  {
    name: 'Vishwakarma Building',
    building: 'Vishwakarma',
    floor: 'All Floors',
    description: 'Workshop and practical training facility'
  },
  {
    name: 'Vivekananda Building',
    building: 'Vivekananda',
    floor: 'All Floors',
    description: 'Library and study halls'
  },
  {
    name: 'Charak Building',
    building: 'Charak',
    floor: 'All Floors',
    description: 'Medical and health sciences building'
  },
  {
    name: 'Vastu Building',
    building: 'Vastu',
    floor: 'All Floors',
    description: 'Architecture and design department'
  },

  // Boys Hostels with floors
  {
    name: 'Sarabhai Hostel - Floor 1',
    building: 'Sarabhai Boys Hostel',
    floor: 'Floor 1',
    description: 'Boys hostel accommodation - Ground floor'
  },
  {
    name: 'Sarabhai Hostel - Floor 2',
    building: 'Sarabhai Boys Hostel',
    floor: 'Floor 2',
    description: 'Boys hostel accommodation - Second floor'
  },
  {
    name: 'Sarabhai Hostel - Floor 3',
    building: 'Sarabhai Boys Hostel',
    floor: 'Floor 3',
    description: 'Boys hostel accommodation - Third floor'
  },
  {
    name: 'Sarabhai Hostel - Floor 4',
    building: 'Sarabhai Boys Hostel',
    floor: 'Floor 4',
    description: 'Boys hostel accommodation - Fourth floor'
  },
  {
    name: 'Sarabhai Hostel - Floor 5',
    building: 'Sarabhai Boys Hostel',
    floor: 'Floor 5',
    description: 'Boys hostel accommodation - Fifth floor'
  },

  {
    name: 'Bhabha Hostel - Floor 1',
    building: 'Bhabha Boys Hostel',
    floor: 'Floor 1',
    description: 'Boys hostel accommodation - Ground floor'
  },
  {
    name: 'Bhabha Hostel - Floor 2',
    building: 'Bhabha Boys Hostel',
    floor: 'Floor 2',
    description: 'Boys hostel accommodation - Second floor'
  },
  {
    name: 'Bhabha Hostel - Floor 3',
    building: 'Bhabha Boys Hostel',
    floor: 'Floor 3',
    description: 'Boys hostel accommodation - Third floor'
  },
  {
    name: 'Bhabha Hostel - Floor 4',
    building: 'Bhabha Boys Hostel',
    floor: 'Floor 4',
    description: 'Boys hostel accommodation - Fourth floor'
  },
  {
    name: 'Bhabha Hostel - Floor 5',
    building: 'Bhabha Boys Hostel',
    floor: 'Floor 5',
    description: 'Boys hostel accommodation - Fifth floor'
  },

  {
    name: 'Bose Hostel - Floor 1',
    building: 'Bose Boys Hostel',
    floor: 'Floor 1',
    description: 'Boys hostel accommodation - Ground floor'
  },
  {
    name: 'Bose Hostel - Floor 2',
    building: 'Bose Boys Hostel',
    floor: 'Floor 2',
    description: 'Boys hostel accommodation - Second floor'
  },
  {
    name: 'Bose Hostel - Floor 3',
    building: 'Bose Boys Hostel',
    floor: 'Floor 3',
    description: 'Boys hostel accommodation - Third floor'
  },
  {
    name: 'Bose Hostel - Floor 4',
    building: 'Bose Boys Hostel',
    floor: 'Floor 4',
    description: 'Boys hostel accommodation - Fourth floor'
  },
  {
    name: 'Bose Hostel - Floor 5',
    building: 'Bose Boys Hostel',
    floor: 'Floor 5',
    description: 'Boys hostel accommodation - Fifth floor'
  },

  {
    name: 'Raman Hostel - Floor 1',
    building: 'Raman Boys Hostel',
    floor: 'Floor 1',
    description: 'Boys hostel accommodation - Ground floor'
  },
  {
    name: 'Raman Hostel - Floor 2',
    building: 'Raman Boys Hostel',
    floor: 'Floor 2',
    description: 'Boys hostel accommodation - Second floor'
  },
  {
    name: 'Raman Hostel - Floor 3',
    building: 'Raman Boys Hostel',
    floor: 'Floor 3',
    description: 'Boys hostel accommodation - Third floor'
  },
  {
    name: 'Raman Hostel - Floor 4',
    building: 'Raman Boys Hostel',
    floor: 'Floor 4',
    description: 'Boys hostel accommodation - Fourth floor'
  },
  {
    name: 'Raman Hostel - Floor 5',
    building: 'Raman Boys Hostel',
    floor: 'Floor 5',
    description: 'Boys hostel accommodation - Fifth floor'
  },

  // Girls Hostels with floors
  {
    name: 'Sarojini Hostel - Floor 1',
    building: 'Sarojini Girls Hostel',
    floor: 'Floor 1',
    description: 'Girls hostel accommodation - Ground floor'
  },
  {
    name: 'Sarojini Hostel - Floor 2',
    building: 'Sarojini Girls Hostel',
    floor: 'Floor 2',
    description: 'Girls hostel accommodation - Second floor'
  },
  {
    name: 'Sarojini Hostel - Floor 3',
    building: 'Sarojini Girls Hostel',
    floor: 'Floor 3',
    description: 'Girls hostel accommodation - Third floor'
  },
  {
    name: 'Sarojini Hostel - Floor 4',
    building: 'Sarojini Girls Hostel',
    floor: 'Floor 4',
    description: 'Girls hostel accommodation - Fourth floor'
  },
  {
    name: 'Sarojini Hostel - Floor 5',
    building: 'Sarojini Girls Hostel',
    floor: 'Floor 5',
    description: 'Girls hostel accommodation - Fifth floor'
  },

  {
    name: 'Kasturba Hostel - Floor 1',
    building: 'Kasturba Girls Hostel',
    floor: 'Floor 1',
    description: 'Girls hostel accommodation - Ground floor'
  },
  {
    name: 'Kasturba Hostel - Floor 2',
    building: 'Kasturba Girls Hostel',
    floor: 'Floor 2',
    description: 'Girls hostel accommodation - Second floor'
  },
  {
    name: 'Kasturba Hostel - Floor 3',
    building: 'Kasturba Girls Hostel',
    floor: 'Floor 3',
    description: 'Girls hostel accommodation - Third floor'
  },
  {
    name: 'Kasturba Hostel - Floor 4',
    building: 'Kasturba Girls Hostel',
    floor: 'Floor 4',
    description: 'Girls hostel accommodation - Fourth floor'
  },
  {
    name: 'Kasturba Hostel - Floor 5',
    building: 'Kasturba Girls Hostel',
    floor: 'Floor 5',
    description: 'Girls hostel accommodation - Fifth floor'
  },
  {
    name: 'Kasturba Hostel - Floor 6',
    building: 'Kasturba Girls Hostel',
    floor: 'Floor 6',
    description: 'Girls hostel accommodation - Sixth floor'
  },
  {
    name: 'Kasturba Hostel - Floor 7',
    building: 'Kasturba Girls Hostel',
    floor: 'Floor 7',
    description: 'Girls hostel accommodation - Seventh floor'
  },
  {
    name: 'Kasturba Hostel - Floor 8',
    building: 'Kasturba Girls Hostel',
    floor: 'Floor 8',
    description: 'Girls hostel accommodation - Eighth floor'
  },
  {
    name: 'Kasturba Hostel - Floor 9',
    building: 'Kasturba Girls Hostel',
    floor: 'Floor 9',
    description: 'Girls hostel accommodation - Ninth floor'
  },

  // Common areas
  {
    name: 'Campus Ground',
    building: 'Outdoor',
    floor: 'Ground Level',
    description: 'Main campus ground and outdoor areas'
  },
  {
    name: 'Cafeteria',
    building: 'Student Center',
    floor: 'Ground Floor',
    description: 'Main dining and food court area'
  },
  {
    name: 'Library',
    building: 'Vivekananda',
    floor: 'Multiple Floors',
    description: 'Central library and reading rooms'
  },
  {
    name: 'Parking Area',
    building: 'Outdoor',
    floor: 'Ground Level',
    description: 'Vehicle parking areas'
  }];


  try {
    for (const location of locations) {
      const { error } = await window.ezsite.apis.tableCreate(23525, location);
      if (error) {
        console.error(`Failed to create location ${location.name}:`, error);
      } else {
        console.log(`Successfully created location: ${location.name}`);
      }
    }
    console.log('All locations seeded successfully');
  } catch (error) {
    console.error('Error seeding locations:', error);
  }
};