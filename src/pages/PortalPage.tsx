import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Search, Plus, MapPin, Calendar, MessageCircle, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PortalPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('lost');

  // Mock data for lost and found items
  const lostItems = [
  {
    id: 1,
    title: 'iPhone 13 Pro',
    description: 'Blue iPhone 13 Pro with cracked screen protector. Lost near the library.',
    location: 'Central Library - 2nd Floor',
    date: '2024-01-15',
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=200&fit=crop',
    user: 'Sarah Wilson',
    userAvatar: 'https://images.unsplash.com/photo-1560263793-612682bc5a81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcGhvdG9ncmFwaCUyMG9mJTIwYSUyMHBlcnNvbiUyMHdpdGglMjBhJTIwYmx1cnJlZCUyMGJhY2tncm91bmQlMkMlMjBzaG93Y2FzaW5nJTIwYSUyMGNsb3NlLXVwJTIwcG9ydHJhaXQufGVufDB8fHx8MTc1MTM1Mjc5MXww&ixlib=rb-4.1.0&q=80&w=200$w=100'
  },
  {
    id: 2,
    title: 'Black Backpack',
    description: 'Nike black backpack with laptop and textbooks inside. Very important!',
    location: 'Student Center - Cafeteria',
    date: '2024-01-14',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=200&fit=crop',
    user: 'Mike Johnson',
    userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
  },
  {
    id: 3,
    title: 'Silver Watch',
    description: 'Casio silver digital watch. Sentimental value. Lost during basketball practice.',
    location: 'Sports Complex - Basketball Court',
    date: '2024-01-13',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=300&h=200&fit=crop',
    user: 'David Chen',
    userAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
  }];


  const foundItems = [
  {
    id: 4,
    title: 'AirPods Pro',
    description: 'Found AirPods Pro in white case near the engineering building.',
    location: 'Engineering Building - Entrance',
    date: '2024-01-15',
    image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=300&h=200&fit=crop',
    user: 'Emma Davis',
    userAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
  },
  {
    id: 5,
    title: 'Red Umbrella',
    description: 'Small red umbrella found in the parking lot after the rain.',
    location: 'Main Parking Lot - Section B',
    date: '2024-01-14',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop',
    user: 'Alex Rodriguez',
    userAvatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop'
  },
  {
    id: 6,
    title: 'Chemistry Textbook',
    description: 'Organic Chemistry textbook found in the science lab. Has name "Jennifer" inside.',
    location: 'Science Building - Lab 205',
    date: '2024-01-12',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=200&fit=crop',
    user: 'Ryan Park',
    userAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop'
  }];


  const ItemCard = ({ item, type }: {item: any;type: 'lost' | 'found';}) =>
  <Card className={`hover:shadow-lg transition-all duration-300 ${type === 'lost' ? 'border-red-200 bg-red-50' : 'border-green-200 bg-green-50'}`} data-id="uviest6in" data-path="src/pages/PortalPage.tsx">
      <CardContent className="p-0" data-id="rysj4md2i" data-path="src/pages/PortalPage.tsx">
        <div className="relative" data-id="psekep9oa" data-path="src/pages/PortalPage.tsx">
          <img
          src={item.image}
          alt={item.title}
          className="w-full h-48 object-cover rounded-t-lg" data-id="cz9tv1d76" data-path="src/pages/PortalPage.tsx" />

          <Badge
          className={`absolute top-2 right-2 ${type === 'lost' ? 'bg-red-600' : 'bg-green-600'}`} data-id="ddqwq338j" data-path="src/pages/PortalPage.tsx">

            {type === 'lost' ? 'LOST' : 'FOUND'}
          </Badge>
        </div>
        
        <div className="p-4" data-id="ksb8cb5lh" data-path="src/pages/PortalPage.tsx">
          <h3 className="text-lg font-semibold text-gray-900 mb-2" data-id="sqyr8lic4" data-path="src/pages/PortalPage.tsx">{item.title}</h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2" data-id="1eoxrklm6" data-path="src/pages/PortalPage.tsx">{item.description}</p>
          
          <div className="flex items-center text-sm text-gray-500 mb-2" data-id="tlsvbuu0e" data-path="src/pages/PortalPage.tsx">
            <MapPin className="w-4 h-4 mr-1" data-id="68kpgj5vy" data-path="src/pages/PortalPage.tsx" />
            <span data-id="mcmwu299t" data-path="src/pages/PortalPage.tsx">{item.location}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-500 mb-4" data-id="a9mb2vwth" data-path="src/pages/PortalPage.tsx">
            <Calendar className="w-4 h-4 mr-1" data-id="xq07zomtj" data-path="src/pages/PortalPage.tsx" />
            <span data-id="s0c5zqj92" data-path="src/pages/PortalPage.tsx">{new Date(item.date).toLocaleDateString()}</span>
          </div>
          
          <div className="flex items-center justify-between" data-id="sn7jixgjt" data-path="src/pages/PortalPage.tsx">
            <div className="flex items-center space-x-2" data-id="p26x3x6f9" data-path="src/pages/PortalPage.tsx">
              <Avatar className="w-8 h-8" data-id="6j35i3ps6" data-path="src/pages/PortalPage.tsx">
                <AvatarImage src={item.userAvatar} data-id="pk4utigqh" data-path="src/pages/PortalPage.tsx" />
                <AvatarFallback data-id="t5sfrvaid" data-path="src/pages/PortalPage.tsx">
                  <User className="w-4 h-4" data-id="lsixxtmtc" data-path="src/pages/PortalPage.tsx" />
                </AvatarFallback>
              </Avatar>
              <span className="text-sm text-gray-700" data-id="9ktb8l7hf" data-path="src/pages/PortalPage.tsx">{item.user}</span>
            </div>
            
            <Button
            size="sm"
            onClick={() => navigate('/chat')}
            className="bg-blue-600 hover:bg-blue-700" data-id="0oxltdz8y" data-path="src/pages/PortalPage.tsx">

              <MessageCircle className="w-4 h-4 mr-1" data-id="e7f96x7di" data-path="src/pages/PortalPage.tsx" />
              Contact
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>;


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50" data-id="wmak7aqpl" data-path="src/pages/PortalPage.tsx">
      {/* Header */}
      <header className="bg-white shadow-sm border-b" data-id="b81557yf3" data-path="src/pages/PortalPage.tsx">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4" data-id="nit17ob7d" data-path="src/pages/PortalPage.tsx">
          <div className="flex justify-between items-center" data-id="8q319uigi" data-path="src/pages/PortalPage.tsx">
            <div className="flex items-center space-x-3" data-id="d9o5dp63m" data-path="src/pages/PortalPage.tsx">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center" data-id="fovbhygkf" data-path="src/pages/PortalPage.tsx">
                <Search className="w-6 h-6 text-white" data-id="sszw7epnr" data-path="src/pages/PortalPage.tsx" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900" data-id="2er9jzdnr" data-path="src/pages/PortalPage.tsx">FindIt Portal</h1>
            </div>
            <div className="flex items-center space-x-3" data-id="33xodmmp8" data-path="src/pages/PortalPage.tsx">
              <Button
                onClick={() => navigate('/report')}
                className="bg-yellow-500 hover:bg-yellow-600 text-black" data-id="m33eqdx6p" data-path="src/pages/PortalPage.tsx">

                <Plus className="w-4 h-4 mr-2" data-id="6vr6wbiit" data-path="src/pages/PortalPage.tsx" />
                Report Item
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate('/profile')}
                className="border-blue-600 text-blue-600 hover:bg-blue-50" data-id="imja68rlw" data-path="src/pages/PortalPage.tsx">

                Profile
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-id="m0ptd9gx5" data-path="src/pages/PortalPage.tsx">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8" data-id="pph24l8cp" data-path="src/pages/PortalPage.tsx">
          <Card className="bg-red-50 border-red-200" data-id="upv6nw6ri" data-path="src/pages/PortalPage.tsx">
            <CardContent className="pt-6" data-id="lsfrmlhxm" data-path="src/pages/PortalPage.tsx">
              <div className="text-3xl font-bold text-red-600 mb-2" data-id="fiz2wlins" data-path="src/pages/PortalPage.tsx">{lostItems.length}</div>
              <p className="text-red-700" data-id="xa7qa7ads" data-path="src/pages/PortalPage.tsx">Lost Items</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-200" data-id="69wrr7eyn" data-path="src/pages/PortalPage.tsx">
            <CardContent className="pt-6" data-id="mxpju9rja" data-path="src/pages/PortalPage.tsx">
              <div className="text-3xl font-bold text-green-600 mb-2" data-id="sed49va6p" data-path="src/pages/PortalPage.tsx">{foundItems.length}</div>
              <p className="text-green-700" data-id="yoixq7q46" data-path="src/pages/PortalPage.tsx">Found Items</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-200" data-id="uo89v2wv4" data-path="src/pages/PortalPage.tsx">
            <CardContent className="pt-6" data-id="d9vw894le" data-path="src/pages/PortalPage.tsx">
              <div className="text-3xl font-bold text-blue-600 mb-2" data-id="dt49fju9z" data-path="src/pages/PortalPage.tsx">85%</div>
              <p className="text-blue-700" data-id="7sd4g2v88" data-path="src/pages/PortalPage.tsx">Recovery Rate</p>
            </CardContent>
          </Card>
        </div>

        {/* Items Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} data-id="4m52hulcn" data-path="src/pages/PortalPage.tsx">
          <TabsList className="grid w-full grid-cols-2 mb-8" data-id="o5hrb63c1" data-path="src/pages/PortalPage.tsx">
            <TabsTrigger
              value="lost"
              className="data-[state=active]:bg-red-600 data-[state=active]:text-white" data-id="qavfpiy3d" data-path="src/pages/PortalPage.tsx">

              Lost Items ({lostItems.length})
            </TabsTrigger>
            <TabsTrigger
              value="found"
              className="data-[state=active]:bg-green-600 data-[state=active]:text-white" data-id="ig9wi6yoq" data-path="src/pages/PortalPage.tsx">

              Found Items ({foundItems.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="lost" data-id="8tr2vf9p7" data-path="src/pages/PortalPage.tsx">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-id="b5od4r09g" data-path="src/pages/PortalPage.tsx">
              {lostItems.map((item) =>
              <ItemCard key={item.id} item={item} type="lost" data-id="4k9uzk75l" data-path="src/pages/PortalPage.tsx" />
              )}
            </div>
          </TabsContent>

          <TabsContent value="found" data-id="m9xv7ho3e" data-path="src/pages/PortalPage.tsx">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-id="yrftbknz8" data-path="src/pages/PortalPage.tsx">
              {foundItems.map((item) =>
              <ItemCard key={item.id} item={item} type="found" data-id="zodwjg1ob" data-path="src/pages/PortalPage.tsx" />
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>);

};

export default PortalPage;