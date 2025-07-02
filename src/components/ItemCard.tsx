
import React from 'react';
import { Clock, MapPin, User, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface ItemCardProps {
  item: {
    id: number;
    name: string;
    description: string;
    status: 'LOST' | 'FOUND';
    location_name?: string;
    reporter_name: string;
    date_reported: string;
    category_name?: string;
    image_url?: string;
    is_claimed: boolean;
  };
  onClaim?: (itemId: number) => void;
  showClaimButton?: boolean;
}

const ItemCard: React.FC<ItemCardProps> = ({ item, onClaim, showClaimButton = true }) => {
  const getStatusColor = (status: string) => {
    return status === 'FOUND' ? 'bg-green-500' : 'bg-red-500';
  };

  const getCardGradient = (status: string, index: number = 0) => {
    const gradients = {
      FOUND: [
      'bg-gradient-to-br from-blue-500 to-purple-600',
      'bg-gradient-to-br from-orange-500 to-red-500',
      'bg-gradient-to-br from-yellow-500 to-orange-500',
      'bg-gradient-to-br from-green-500 to-blue-500',
      'bg-gradient-to-br from-purple-500 to-pink-500',
      'bg-gradient-to-br from-indigo-500 to-purple-600'],

      LOST: [
      'bg-gradient-to-br from-green-500 to-teal-600',
      'bg-gradient-to-br from-purple-500 to-indigo-600',
      'bg-gradient-to-br from-pink-500 to-red-500',
      'bg-gradient-to-br from-blue-500 to-cyan-500',
      'bg-gradient-to-br from-orange-500 to-yellow-500',
      'bg-gradient-to-br from-teal-500 to-green-500']

    };
    return gradients[status][index % gradients[status].length];
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));

    if (diffInHours < 1) {
      return 'Just now';
    } else if (diffInHours < 24) {
      return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
    }
  };

  const getItemIcon = (itemName: string) => {
    const name = itemName.toLowerCase();
    if (name.includes('phone') || name.includes('iphone')) return '📱';
    if (name.includes('wallet') || name.includes('purse')) return '💳';
    if (name.includes('key') || name.includes('keys')) return '🔑';
    if (name.includes('bottle') || name.includes('water')) return '🍼';
    if (name.includes('earphone') || name.includes('airpods') || name.includes('headphone')) return '🎧';
    if (name.includes('book') || name.includes('textbook')) return '📚';
    if (name.includes('watch')) return '⌚';
    if (name.includes('bag') || name.includes('backpack')) return '🎒';
    if (name.includes('laptop') || name.includes('computer')) return '💻';
    if (name.includes('glasses') || name.includes('sunglasses')) return '👓';
    return '📦';
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300" data-id="wso4ogugp" data-path="src/components/ItemCard.tsx">
      {/* Header with gradient background */}
      <div className={`${getCardGradient(item.status, item.id)} p-6 text-white relative`} data-id="u2pv8b831" data-path="src/components/ItemCard.tsx">
        <div className="flex justify-between items-start mb-4" data-id="bpb4br8hk" data-path="src/components/ItemCard.tsx">
          <Badge
            className={`${getStatusColor(item.status)} text-white font-semibold px-3 py-1`} data-id="sqraldbww" data-path="src/components/ItemCard.tsx">

            {item.status}
          </Badge>
          {item.is_claimed &&
          <Badge className="bg-gray-600 text-white" data-id="sceimbu5l" data-path="src/components/ItemCard.tsx">
              CLAIMED
            </Badge>
          }
        </div>
        
        <div className="flex items-center justify-center mb-4" data-id="72zsdiuv5" data-path="src/components/ItemCard.tsx">
          <div className="text-6xl" data-id="0t7hhqdvo" data-path="src/components/ItemCard.tsx">
            {getItemIcon(item.name)}
          </div>
        </div>
      </div>

      <CardContent className="p-6" data-id="dw41w8gbd" data-path="src/components/ItemCard.tsx">
        <h3 className="text-lg font-semibold text-gray-900 mb-2" data-id="b5cihqhoi" data-path="src/components/ItemCard.tsx">{item.name}</h3>
        
        {item.location_name &&
        <div className="flex items-center text-sm text-gray-600 mb-2" data-id="88kdx0z94" data-path="src/components/ItemCard.tsx">
            <MapPin className="w-4 h-4 mr-1" data-id="jn521nrtd" data-path="src/components/ItemCard.tsx" />
            <span data-id="nw5c4et2f" data-path="src/components/ItemCard.tsx">{item.location_name}</span>
          </div>
        }
        
        <div className="flex items-center text-sm text-gray-500 mb-3" data-id="ff5uyjn0b" data-path="src/components/ItemCard.tsx">
          <Clock className="w-4 h-4 mr-1" data-id="wmw80fqo5" data-path="src/components/ItemCard.tsx" />
          <span data-id="h3b6m3upb" data-path="src/components/ItemCard.tsx">{formatDate(item.date_reported)}</span>
        </div>

        {item.description &&
        <p className="text-sm text-gray-600 mb-3 line-clamp-2" data-id="m31ejh06t" data-path="src/components/ItemCard.tsx">
            {item.description}
          </p>
        }

        <div className="flex items-center text-sm text-gray-500" data-id="viaftsdhj" data-path="src/components/ItemCard.tsx">
          <User className="w-4 h-4 mr-1" data-id="n0vo65r2v" data-path="src/components/ItemCard.tsx" />
          <span data-id="n8bj94e8w" data-path="src/components/ItemCard.tsx">Reported by {item.reporter_name}</span>
        </div>
      </CardContent>

      {showClaimButton && !item.is_claimed && item.status === 'FOUND' &&
      <CardFooter className="px-6 pb-6" data-id="3j9j91t23" data-path="src/components/ItemCard.tsx">
          <Button
          onClick={() => onClaim?.(item.id)}
          className="w-full bg-green-500 hover:bg-green-600 text-white" data-id="rtd57vwnw" data-path="src/components/ItemCard.tsx">

            Claim
          </Button>
        </CardFooter>
      }
    </Card>);

};

export default ItemCard;