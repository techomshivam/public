export const addLocationData = async () => {
  try {
    // Buildings
    const buildings = [
    { name: 'Vedanta', building: 'Buildings', description: 'Academic building' },
    { name: 'Vishweshvarya', building: 'Buildings', description: 'Academic building' },
    { name: 'Chanakya', building: 'Buildings', description: 'Academic building' },
    { name: 'Vishwakarma', building: 'Buildings', description: 'Academic building' },
    { name: 'Vivekananda', building: 'Buildings', description: 'Academic building' },
    { name: 'Charak', building: 'Buildings', description: 'Academic building' },
    { name: 'Vastu', building: 'Buildings', description: 'Academic building' }];


    // Boys Hostels
    const boysHostels = [
    { name: 'Sarabhai Hostel', building: 'Boys Hostels', description: 'Boys residential hostel' },
    { name: 'Bhabha Hostel', building: 'Boys Hostels', description: 'Boys residential hostel' },
    { name: 'Bose Hostel', building: 'Boys Hostels', description: 'Boys residential hostel' },
    { name: 'Raman Hostel', building: 'Boys Hostels', description: 'Boys residential hostel' }];


    // Girls Hostels
    const girlsHostels = [
    { name: 'Sarojini Hostel', building: 'Girls Hostels', description: 'Girls residential hostel' },
    { name: 'Kasturba Hostel', building: 'Girls Hostels', description: 'Girls residential hostel' }];


    const allLocations = [...buildings, ...boysHostels, ...girlsHostels];

    // Add each location to the database
    for (const location of allLocations) {
      const { error } = await window.ezsite.apis.tableCreate(23525, {
        name: location.name,
        building: location.building,
        floor: '',
        description: location.description
      });

      if (error) {
        console.error(`Error adding location ${location.name}:`, error);
      } else {
        console.log(`Successfully added location: ${location.name}`);
      }
    }

    console.log('All locations have been added successfully!');
    return { success: true };
  } catch (error) {
    console.error('Error adding locations:', error);
    return { success: false, error };
  }
};