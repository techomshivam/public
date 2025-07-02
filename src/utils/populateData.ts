// Utility to populate the database with sample data for testing
export const populateCategories = async () => {
  const categories = [
  { name: "Electronics", description: "Phones, laptops, tablets, chargers, etc.", icon: "smartphone", color: "#3B82F6" },
  { name: "Stationary", description: "Pens, notebooks, pencils, rulers, etc.", icon: "pen-tool", color: "#8B5CF6" },
  { name: "Books", description: "Textbooks, novels, notebooks, etc.", icon: "book", color: "#10B981" },
  { name: "Personal Items", description: "Wallets, keys, jewelry, etc.", icon: "user", color: "#F59E0B" },
  { name: "Clothing & Accessories", description: "Jackets, bags, shoes, etc.", icon: "shirt", color: "#EF4444" },
  { name: "Sports Equipment", description: "Balls, rackets, gym gear, etc.", icon: "dumbbell", color: "#06B6D4" },
  { name: "Other", description: "Items that don't fit other categories", icon: "more-horizontal", color: "#6B7280" }];


  for (const category of categories) {
    try {
      const { error } = await window.ezsite.apis.tableCreate(23524, category);
      if (error) {
        console.error('Failed to create category:', error);
      }
    } catch (error) {
      console.error('Error creating category:', error);
    }
  }
};

export const populateLocations = async () => {
  const locations = [
  // Buildings
  { name: "Vedanta Building", building: "Vedanta", floor: "", description: "Academic building" },
  { name: "Vishweshvarya Building", building: "Vishweshvarya", floor: "", description: "Academic building" },
  { name: "Chanakya Building", building: "Chanakya", floor: "", description: "Academic building" },
  { name: "Vishwakarma Building", building: "Vishwakarma", floor: "", description: "Academic building" },
  { name: "Vivekananda Building", building: "Vivekananda", floor: "", description: "Academic building" },
  { name: "Charak Building", building: "Charak", floor: "", description: "Academic building" },
  { name: "Vastu Building", building: "Vastu", floor: "", description: "Academic building" },

  // Boys Hostels - Sarabhai (5 floors)
  { name: "Sarabhai Hostel - Floor 1", building: "Sarabhai Hostel", floor: "Floor 1", description: "Boys hostel - Floor 1" },
  { name: "Sarabhai Hostel - Floor 2", building: "Sarabhai Hostel", floor: "Floor 2", description: "Boys hostel - Floor 2" },
  { name: "Sarabhai Hostel - Floor 3", building: "Sarabhai Hostel", floor: "Floor 3", description: "Boys hostel - Floor 3" },
  { name: "Sarabhai Hostel - Floor 4", building: "Sarabhai Hostel", floor: "Floor 4", description: "Boys hostel - Floor 4" },
  { name: "Sarabhai Hostel - Floor 5", building: "Sarabhai Hostel", floor: "Floor 5", description: "Boys hostel - Floor 5" },

  // Boys Hostels - Bhabha (5 floors)
  { name: "Bhabha Hostel - Floor 1", building: "Bhabha Hostel", floor: "Floor 1", description: "Boys hostel - Floor 1" },
  { name: "Bhabha Hostel - Floor 2", building: "Bhabha Hostel", floor: "Floor 2", description: "Boys hostel - Floor 2" },
  { name: "Bhabha Hostel - Floor 3", building: "Bhabha Hostel", floor: "Floor 3", description: "Boys hostel - Floor 3" },
  { name: "Bhabha Hostel - Floor 4", building: "Bhabha Hostel", floor: "Floor 4", description: "Boys hostel - Floor 4" },
  { name: "Bhabha Hostel - Floor 5", building: "Bhabha Hostel", floor: "Floor 5", description: "Boys hostel - Floor 5" },

  // Boys Hostels - Bose (5 floors)
  { name: "Bose Hostel - Floor 1", building: "Bose Hostel", floor: "Floor 1", description: "Boys hostel - Floor 1" },
  { name: "Bose Hostel - Floor 2", building: "Bose Hostel", floor: "Floor 2", description: "Boys hostel - Floor 2" },
  { name: "Bose Hostel - Floor 3", building: "Bose Hostel", floor: "Floor 3", description: "Boys hostel - Floor 3" },
  { name: "Bose Hostel - Floor 4", building: "Bose Hostel", floor: "Floor 4", description: "Boys hostel - Floor 4" },
  { name: "Bose Hostel - Floor 5", building: "Bose Hostel", floor: "Floor 5", description: "Boys hostel - Floor 5" },

  // Boys Hostels - Raman (5 floors)
  { name: "Raman Hostel - Floor 1", building: "Raman Hostel", floor: "Floor 1", description: "Boys hostel - Floor 1" },
  { name: "Raman Hostel - Floor 2", building: "Raman Hostel", floor: "Floor 2", description: "Boys hostel - Floor 2" },
  { name: "Raman Hostel - Floor 3", building: "Raman Hostel", floor: "Floor 3", description: "Boys hostel - Floor 3" },
  { name: "Raman Hostel - Floor 4", building: "Raman Hostel", floor: "Floor 4", description: "Boys hostel - Floor 4" },
  { name: "Raman Hostel - Floor 5", building: "Raman Hostel", floor: "Floor 5", description: "Boys hostel - Floor 5" },

  // Girls Hostels - Sarojini (5 floors)
  { name: "Sarojini Hostel - Floor 1", building: "Sarojini Hostel", floor: "Floor 1", description: "Girls hostel - Floor 1" },
  { name: "Sarojini Hostel - Floor 2", building: "Sarojini Hostel", floor: "Floor 2", description: "Girls hostel - Floor 2" },
  { name: "Sarojini Hostel - Floor 3", building: "Sarojini Hostel", floor: "Floor 3", description: "Girls hostel - Floor 3" },
  { name: "Sarojini Hostel - Floor 4", building: "Sarojini Hostel", floor: "Floor 4", description: "Girls hostel - Floor 4" },
  { name: "Sarojini Hostel - Floor 5", building: "Sarojini Hostel", floor: "Floor 5", description: "Girls hostel - Floor 5" },

  // Girls Hostels - Kasturba (9 floors)
  { name: "Kasturba Hostel - Floor 1", building: "Kasturba Hostel", floor: "Floor 1", description: "Girls hostel - Floor 1" },
  { name: "Kasturba Hostel - Floor 2", building: "Kasturba Hostel", floor: "Floor 2", description: "Girls hostel - Floor 2" },
  { name: "Kasturba Hostel - Floor 3", building: "Kasturba Hostel", floor: "Floor 3", description: "Girls hostel - Floor 3" },
  { name: "Kasturba Hostel - Floor 4", building: "Kasturba Hostel", floor: "Floor 4", description: "Girls hostel - Floor 4" },
  { name: "Kasturba Hostel - Floor 5", building: "Kasturba Hostel", floor: "Floor 5", description: "Girls hostel - Floor 5" },
  { name: "Kasturba Hostel - Floor 6", building: "Kasturba Hostel", floor: "Floor 6", description: "Girls hostel - Floor 6" },
  { name: "Kasturba Hostel - Floor 7", building: "Kasturba Hostel", floor: "Floor 7", description: "Girls hostel - Floor 7" },
  { name: "Kasturba Hostel - Floor 8", building: "Kasturba Hostel", floor: "Floor 8", description: "Girls hostel - Floor 8" },
  { name: "Kasturba Hostel - Floor 9", building: "Kasturba Hostel", floor: "Floor 9", description: "Girls hostel - Floor 9" }];


  for (const location of locations) {
    try {
      const { error } = await window.ezsite.apis.tableCreate(23525, location);
      if (error) {
        console.error('Failed to create location:', error);
      }
    } catch (error) {
      console.error('Error creating location:', error);
    }
  }
};

export const populateSampleItems = async () => {
  const sampleItems = [
  {
    name: "iPhone 13 Pro",
    description: "Black iPhone 13 Pro with a blue case. Has a small crack on the screen.",
    category_id: 1, // Electronics
    location_id: 2, // Vishweshvarya Building
    status: "FOUND",
    reporter_name: "John Doe",
    reporter_contact: "+1234567890",
    reporter_email: "john.doe@university.edu",
    date_reported: new Date().toISOString(),
    date_lost_found: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
    is_claimed: false
  },
  {
    name: "Brown Leather Wallet",
    description: "Brown leather wallet with student ID and some cards inside. Found near the hostel.",
    category_id: 4, // Personal Items
    location_id: 8, // Sarabhai Hostel - Floor 1
    status: "FOUND",
    reporter_name: "Jane Smith",
    reporter_contact: "+1234567891",
    reporter_email: "jane.smith@university.edu",
    date_reported: new Date().toISOString(),
    date_lost_found: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(), // 12 hours ago
    is_claimed: false
  },
  {
    name: "Set of Keys",
    description: "Keychain with Honda car key and room keys. Has a small Superman keychain attached.",
    category_id: 4, // Personal Items
    location_id: 3, // Chanakya Building
    status: "FOUND",
    reporter_name: "Mike Johnson",
    reporter_contact: "+1234567892",
    reporter_email: "mike.johnson@university.edu",
    date_reported: new Date().toISOString(),
    date_lost_found: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(), // 3 hours ago
    is_claimed: false
  },
  {
    name: "AirPods Pro",
    description: "White AirPods Pro in charging case. Lost them during basketball practice.",
    category_id: 1, // Electronics
    location_id: 6, // Sports Equipment
    status: "LOST",
    reporter_name: "Sarah Wilson",
    reporter_contact: "+1234567893",
    reporter_email: "sarah.wilson@university.edu",
    date_reported: new Date().toISOString(),
    date_lost_found: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(), // 6 hours ago
    is_claimed: false
  },
  {
    name: "Engineering Textbook",
    description: "Fundamentals of Engineering Economics textbook. Has my name written inside the cover.",
    category_id: 3, // Books
    location_id: 1, // Vedanta Building
    status: "FOUND",
    reporter_name: "David Lee",
    reporter_contact: "+1234567894",
    reporter_email: "david.lee@university.edu",
    date_reported: new Date().toISOString(),
    date_lost_found: new Date(Date.now() - 18 * 60 * 60 * 1000).toISOString(), // 18 hours ago
    is_claimed: false
  },
  {
    name: "Smart Watch",
    description: "Black smartwatch with fitness tracking. Lost it in the hostel.",
    category_id: 1, // Electronics
    location_id: 28, // Sarojini Hostel - Floor 3
    status: "LOST",
    reporter_name: "Emily Chen",
    reporter_contact: "+1234567895",
    reporter_email: "emily.chen@university.edu",
    date_reported: new Date().toISOString(),
    date_lost_found: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
    is_claimed: false
  }];


  for (const item of sampleItems) {
    try {
      const { error } = await window.ezsite.apis.tableCreate(23526, item);
      if (error) {
        console.error('Failed to create item:', error);
      }
    } catch (error) {
      console.error('Error creating item:', error);
    }
  }
};