
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const OnAuthSuccess = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate('/login');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4" data-id="gkp9xy9g3" data-path="src/pages/OnAuthSuccess.tsx">
      <Card className="w-full max-w-md" data-id="jg338cuvz" data-path="src/pages/OnAuthSuccess.tsx">
        <CardHeader className="text-center" data-id="1p11747y3" data-path="src/pages/OnAuthSuccess.tsx">
          <div className="flex justify-center mb-4" data-id="ooyzo2352" data-path="src/pages/OnAuthSuccess.tsx">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center" data-id="v6chgqbha" data-path="src/pages/OnAuthSuccess.tsx">
              <CheckCircle className="w-8 h-8 text-green-600" data-id="y4uu5kxyl" data-path="src/pages/OnAuthSuccess.tsx" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900" data-id="yoc6aultq" data-path="src/pages/OnAuthSuccess.tsx">
            Registration Successful!
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center" data-id="xp8yf9sns" data-path="src/pages/OnAuthSuccess.tsx">
          <p className="text-gray-600 mb-6" data-id="ws1gaasnw" data-path="src/pages/OnAuthSuccess.tsx">
            Your account has been successfully created and verified. 
            Welcome to FindIt!
          </p>
          <p className="text-sm text-gray-500" data-id="bd5xyenk1" data-path="src/pages/OnAuthSuccess.tsx">
            Redirecting to login page in {countdown} seconds...
          </p>
        </CardContent>
      </Card>
    </div>);

};

export default OnAuthSuccess;