import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Home, FileText, AlertCircle, LogIn, User, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const FindItNavigation = () => {
  const location = useLocation();
  const { toast } = useToast();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  // Check auth status when location changes (for post-login navigation)
  useEffect(() => {
    if (!user && !loading) {
      checkAuthStatus();
    }
  }, [location.pathname]);

  const checkAuthStatus = async () => {
    try {
      const { data, error } = await window.ezsite.apis.getUserInfo();
      if (!error && data) {
        setUser(data);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      const { error } = await window.ezsite.apis.logout();
      if (error) {
        toast({
          title: "Error",
          description: error,
          variant: "destructive"
        });
      } else {
        setUser(null);
        toast({
          title: "Success",
          description: "Logged out successfully"
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to logout",
        variant: "destructive"
      });
    }
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm border-b" data-id="x692eiyc5" data-path="src/components/FindItNavigation.tsx">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-id="4xo4tu0h4" data-path="src/components/FindItNavigation.tsx">
        <div className="flex justify-between items-center h-16" data-id="lo8b5eseh" data-path="src/components/FindItNavigation.tsx">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" data-id="l6u1akt81" data-path="src/components/FindItNavigation.tsx">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center" data-id="hp11p2i9p" data-path="src/components/FindItNavigation.tsx">
              <Search className="w-6 h-6 text-white" data-id="nhowc2ijh" data-path="src/components/FindItNavigation.tsx" />
            </div>
            <span className="text-xl font-bold text-gray-900" data-id="qek1j4zyy" data-path="src/components/FindItNavigation.tsx">FindIt</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8" data-id="51s5kcp6q" data-path="src/components/FindItNavigation.tsx">
            <Link
              to="/"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              isActive('/') ?
              'text-blue-600 bg-blue-50' :
              'text-gray-700 hover:text-blue-600 hover:bg-gray-50'}`
              } data-id="laaxc87jr" data-path="src/components/FindItNavigation.tsx">

              <Home className="w-4 h-4" data-id="9t7kopgmj" data-path="src/components/FindItNavigation.tsx" />
              <span data-id="i0vi56czf" data-path="src/components/FindItNavigation.tsx">Home</span>
            </Link>
            
            <Link
              to="/search"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              isActive('/search') ?
              'text-blue-600 bg-blue-50' :
              'text-gray-700 hover:text-blue-600 hover:bg-gray-50'}`
              } data-id="lkfu7sz8r" data-path="src/components/FindItNavigation.tsx">

              <Search className="w-4 h-4" data-id="na3dm2pxq" data-path="src/components/FindItNavigation.tsx" />
              <span data-id="umlshl39p" data-path="src/components/FindItNavigation.tsx">Search</span>
            </Link>
            
            <Link
              to="/recent-posts"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              isActive('/recent-posts') ?
              'text-blue-600 bg-blue-50' :
              'text-gray-700 hover:text-blue-600 hover:bg-gray-50'}`
              } data-id="p74c4j1k8" data-path="src/components/FindItNavigation.tsx">

              <FileText className="w-4 h-4" data-id="qmcwmmc0b" data-path="src/components/FindItNavigation.tsx" />
              <span data-id="a48f2gp6z" data-path="src/components/FindItNavigation.tsx">Recent Posts</span>
            </Link>
            
            <Link
              to="/report"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              isActive('/report') ?
              'text-blue-600 bg-blue-50' :
              'text-gray-700 hover:text-blue-600 hover:bg-gray-50'}`
              } data-id="lobrwgnqo" data-path="src/components/FindItNavigation.tsx">

              <AlertCircle className="w-4 h-4" data-id="lzprboev4" data-path="src/components/FindItNavigation.tsx" />
              <span data-id="3ybtnzaxk" data-path="src/components/FindItNavigation.tsx">Report</span>
            </Link>
          </div>

          {/* Auth Section */}
          <div className="flex items-center space-x-4" data-id="k3k8v2k33" data-path="src/components/FindItNavigation.tsx">
            {loading ?
            <div className="w-8 h-8 animate-spin rounded-full border-2 border-blue-500 border-t-transparent" data-id="4eu2hg5nj" data-path="src/components/FindItNavigation.tsx"></div> :
            user ?
            <div className="flex items-center space-x-3" data-id="fm0iwtipy" data-path="src/components/FindItNavigation.tsx">
                <div className="flex items-center space-x-2" data-id="4369ew5zi" data-path="src/components/FindItNavigation.tsx">
                  <User className="w-5 h-5 text-gray-600" data-id="2ogagodkr" data-path="src/components/FindItNavigation.tsx" />
                  <span className="text-sm font-medium text-gray-700" data-id="w6sam3nho" data-path="src/components/FindItNavigation.tsx">{user.Name || user.Email}</span>
                </div>
                <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
                className="flex items-center space-x-1" data-id="63ii1imv0" data-path="src/components/FindItNavigation.tsx">

                  <LogOut className="w-4 h-4" data-id="56bl4w4yi" data-path="src/components/FindItNavigation.tsx" />
                  <span data-id="xqmsfsyai" data-path="src/components/FindItNavigation.tsx">Logout</span>
                </Button>
              </div> :

            <div className="flex items-center space-x-2" data-id="qa74dfjtl" data-path="src/components/FindItNavigation.tsx">
                <Link to="/login" data-id="ug7thd4q9" data-path="src/components/FindItNavigation.tsx">
                  <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center space-x-1" data-id="q6ox4n7yt" data-path="src/components/FindItNavigation.tsx">

                    <LogIn className="w-4 h-4" data-id="gg99c46jr" data-path="src/components/FindItNavigation.tsx" />
                    <span data-id="1j9rjm1ra" data-path="src/components/FindItNavigation.tsx">Login</span>
                  </Button>
                </Link>
                <Link to="/register" data-id="xbyt5293q" data-path="src/components/FindItNavigation.tsx">
                  <Button
                  className="bg-blue-500 hover:bg-blue-600 text-white flex items-center space-x-1"
                  size="sm" data-id="nipcpa0a9" data-path="src/components/FindItNavigation.tsx">

                    <User className="w-4 h-4" data-id="f3drwj5tg" data-path="src/components/FindItNavigation.tsx" />
                    <span data-id="t4n28af93" data-path="src/components/FindItNavigation.tsx">Sign Up</span>
                  </Button>
                </Link>
              </div>
            }
          </div>
        </div>
      </div>
    </nav>);

};

export default FindItNavigation;