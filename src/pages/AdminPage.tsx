import React from 'react';
import LocationSeeder from '@/components/LocationSeeder';
import DataInitializer from '@/components/DataInitializer';

const AdminPage = () => {
  return (
    <div className="container mx-auto px-4 py-8" data-id="0dfynnosy" data-path="src/pages/AdminPage.tsx">
      <div className="max-w-4xl mx-auto" data-id="ntukivtfa" data-path="src/pages/AdminPage.tsx">
        <div className="text-center mb-8" data-id="j3zyi2k65" data-path="src/pages/AdminPage.tsx">
          <h1 className="text-3xl font-bold text-gray-900 mb-2" data-id="yxtfr7fpy" data-path="src/pages/AdminPage.tsx">Admin Panel</h1>
          <p className="text-gray-600" data-id="iatrmgvvh" data-path="src/pages/AdminPage.tsx">Manage application data and settings</p>
        </div>
        
        <div className="grid gap-6" data-id="y9bl37kox" data-path="src/pages/AdminPage.tsx">
          <div className="flex justify-center" data-id="25vm4w3pd" data-path="src/pages/AdminPage.tsx">
            <DataInitializer data-id="8a4ixlyqq" data-path="src/pages/AdminPage.tsx" />
          </div>
          <div className="flex justify-center" data-id="3szvad1s5" data-path="src/pages/AdminPage.tsx">
            <LocationSeeder data-id="lcktsmwyi" data-path="src/pages/AdminPage.tsx" />
          </div>
        </div>
      </div>
    </div>);

};

export default AdminPage;