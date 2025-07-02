
// Seed categories data
export const seedCategories = async () => {
  const categories = [
  {
    name: 'Electronics',
    description: 'Phones, laptops, tablets, headphones, chargers, and other electronic devices',
    icon: 'Smartphone',
    color: '#3B82F6'
  },
  {
    name: 'Stationery',
    description: 'Pens, pencils, notebooks, books, calculators, and writing materials',
    icon: 'BookOpen',
    color: '#10B981'
  },
  {
    name: 'Personal Items',
    description: 'Wallets, keys, jewelry, watches, and personal belongings',
    icon: 'Key',
    color: '#F59E0B'
  },
  {
    name: 'Clothing',
    description: 'Jackets, shirts, caps, shoes, and other clothing items',
    icon: 'Shirt',
    color: '#EF4444'
  },
  {
    name: 'Sports Equipment',
    description: 'Balls, rackets, gym equipment, and sports accessories',
    icon: 'Trophy',
    color: '#8B5CF6'
  },
  {
    name: 'Bags',
    description: 'Backpacks, purses, laptop bags, and other carrying cases',
    icon: 'Backpack',
    color: '#06B6D4'
  },
  {
    name: 'Documents',
    description: 'ID cards, certificates, papers, and important documents',
    icon: 'FileText',
    color: '#84CC16'
  },
  {
    name: 'Others',
    description: 'Any other items that don\'t fit in the above categories',
    icon: 'Package',
    color: '#6B7280'
  }];


  try {
    for (const category of categories) {
      const { error } = await window.ezsite.apis.tableCreate(23524, category);
      if (error) {
        console.error(`Failed to create category ${category.name}:`, error);
      } else {
        console.log(`Successfully created category: ${category.name}`);
      }
    }
    console.log('All categories seeded successfully');
  } catch (error) {
    console.error('Error seeding categories:', error);
  }
};