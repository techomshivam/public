import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Search, Users, MessageCircle, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const features = [
  {
    icon: <Search className="w-12 h-12 text-blue-600" data-id="8yreyvn87" data-path="src/pages/LandingPage.tsx" />,
    title: "Report Items",
    description: "Quickly report lost or found items with photos and details"
  },
  {
    icon: <Users className="w-12 h-12 text-blue-600" data-id="vw2gja9z9" data-path="src/pages/LandingPage.tsx" />,
    title: "Connect Students",
    description: "Connect with fellow students to retrieve your belongings"
  },
  {
    icon: <MessageCircle className="w-12 h-12 text-blue-600" data-id="k6w2dq752" data-path="src/pages/LandingPage.tsx" />,
    title: "Real-time Chat",
    description: "Chat directly with item owners or finders"
  },
  {
    icon: <CheckCircle className="w-12 h-12 text-blue-600" data-id="mmb01y8lk" data-path="src/pages/LandingPage.tsx" />,
    title: "Easy Recovery",
    description: "Simple process to mark items as recovered"
  }];


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50" data-id="ti6rmnihb" data-path="src/pages/LandingPage.tsx">
      {/* Header */}
      <header className="bg-white shadow-sm border-b" data-id="pxr9218kj" data-path="src/pages/LandingPage.tsx">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4" data-id="6kj5sup05" data-path="src/pages/LandingPage.tsx">
          <div className="flex justify-between items-center" data-id="b0b0nsmlp" data-path="src/pages/LandingPage.tsx">
            <div className="flex items-center space-x-3" data-id="dwte24qjn" data-path="src/pages/LandingPage.tsx">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center" data-id="qmdiljtc7" data-path="src/pages/LandingPage.tsx">
                <Search className="w-6 h-6 text-white" data-id="u0ftx1l6c" data-path="src/pages/LandingPage.tsx" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900" data-id="vmohy59d7" data-path="src/pages/LandingPage.tsx">FindIt</h1>
            </div>
            <div className="flex space-x-3" data-id="no2fm4mgk" data-path="src/pages/LandingPage.tsx">
              <Button
                variant="outline"
                onClick={() => navigate('/login')}
                className="border-blue-600 text-blue-600 hover:bg-blue-50" data-id="fmeiwu5mp" data-path="src/pages/LandingPage.tsx">

                Login
              </Button>
              <Button
                onClick={() => navigate('/register')}
                className="bg-blue-600 hover:bg-blue-700" data-id="n026h7ynz" data-path="src/pages/LandingPage.tsx">

                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" data-id="kvxoe6wa7" data-path="src/pages/LandingPage.tsx">
        <div className="text-center" data-id="rjcvhix1r" data-path="src/pages/LandingPage.tsx">
          <h1 className="text-5xl font-bold text-gray-900 mb-6" data-id="iu27b0egh" data-path="src/pages/LandingPage.tsx">
            Lost Something? <span className="text-blue-600" data-id="tvhplajgx" data-path="src/pages/LandingPage.tsx">Find It</span> Here!
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto" data-id="jxnvsu7pr" data-path="src/pages/LandingPage.tsx">
            The ultimate Lost & Found portal for your university campus. 
            Connect with fellow students, report lost items, and help others find their belongings.
          </p>
          <div className="flex justify-center space-x-4" data-id="sxjk637qg" data-path="src/pages/LandingPage.tsx">
            <Button
              size="lg"
              onClick={() => navigate('/portal')}
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg" data-id="91tpgulwb" data-path="src/pages/LandingPage.tsx">

              Explore Portal
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate('/report')}
              className="border-yellow-500 text-yellow-600 hover:bg-yellow-50 px-8 py-3 text-lg" data-id="9hgn3426k" data-path="src/pages/LandingPage.tsx">

              Report Item
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-20" data-id="bbcvb780d" data-path="src/pages/LandingPage.tsx">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-id="wux83vspd" data-path="src/pages/LandingPage.tsx">
          <div className="text-center mb-16" data-id="k6k7vm6wx" data-path="src/pages/LandingPage.tsx">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-id="ui9cpftqq" data-path="src/pages/LandingPage.tsx">How FindIt Works</h2>
            <p className="text-xl text-gray-600" data-id="pso5n172i" data-path="src/pages/LandingPage.tsx">Simple steps to find or return lost items</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-id="l8ql8foln" data-path="src/pages/LandingPage.tsx">
            {features.map((feature, index) =>
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300" data-id="7al2fywyq" data-path="src/pages/LandingPage.tsx">
                <CardContent className="pt-8" data-id="atsmct6kp" data-path="src/pages/LandingPage.tsx">
                  <div className="flex justify-center mb-4" data-id="8x8k0g60g" data-path="src/pages/LandingPage.tsx">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3" data-id="6q1dgs4it" data-path="src/pages/LandingPage.tsx">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600" data-id="aw235lmc9" data-path="src/pages/LandingPage.tsx">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-600 py-16" data-id="kpgeuco78" data-path="src/pages/LandingPage.tsx">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-id="eaukikwti" data-path="src/pages/LandingPage.tsx">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center" data-id="8r4p6x0zn" data-path="src/pages/LandingPage.tsx">
            <div data-id="bun11kmok" data-path="src/pages/LandingPage.tsx">
              <div className="text-4xl font-bold text-white mb-2" data-id="087ivt7eo" data-path="src/pages/LandingPage.tsx">500+</div>
              <div className="text-blue-100" data-id="q7jxt1k2o" data-path="src/pages/LandingPage.tsx">Items Reported</div>
            </div>
            <div data-id="nirwkspvr" data-path="src/pages/LandingPage.tsx">
              <div className="text-4xl font-bold text-white mb-2" data-id="n9qca36ep" data-path="src/pages/LandingPage.tsx">80%</div>
              <div className="text-blue-100" data-id="i8p27plbt" data-path="src/pages/LandingPage.tsx">Recovery Rate</div>
            </div>
            <div data-id="95iscmyw5" data-path="src/pages/LandingPage.tsx">
              <div className="text-4xl font-bold text-white mb-2" data-id="z2odc3c6j" data-path="src/pages/LandingPage.tsx">1000+</div>
              <div className="text-blue-100" data-id="plseteh07" data-path="src/pages/LandingPage.tsx">Happy Students</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-yellow-50 py-16" data-id="iulzav1oh" data-path="src/pages/LandingPage.tsx">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8" data-id="3wstn9x69" data-path="src/pages/LandingPage.tsx">
          <h2 className="text-3xl font-bold text-gray-900 mb-4" data-id="360q6b9an" data-path="src/pages/LandingPage.tsx">
            Ready to Find Your Lost Items?
          </h2>
          <p className="text-xl text-gray-600 mb-8" data-id="4evlg7fdf" data-path="src/pages/LandingPage.tsx">
            Join thousands of students using FindIt to recover their belongings
          </p>
          <Button
            size="lg"
            onClick={() => navigate('/register')}
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg" data-id="1wb08xgr3" data-path="src/pages/LandingPage.tsx">

            Get Started Today
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12" data-id="r02y30l3m" data-path="src/pages/LandingPage.tsx">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-id="s2525qybu" data-path="src/pages/LandingPage.tsx">
          <div className="flex items-center justify-center space-x-3 mb-4" data-id="7650yzfvn" data-path="src/pages/LandingPage.tsx">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center" data-id="h0ky4yykm" data-path="src/pages/LandingPage.tsx">
              <Search className="w-5 h-5 text-white" data-id="2a0vywhh1" data-path="src/pages/LandingPage.tsx" />
            </div>
            <h3 className="text-xl font-bold" data-id="dh59smmck" data-path="src/pages/LandingPage.tsx">FindIt</h3>
          </div>
          <p className="text-gray-400" data-id="syboaoe9s" data-path="src/pages/LandingPage.tsx">
            Making campus life easier, one found item at a time.
          </p>
        </div>
      </footer>
    </div>);

};

export default LandingPage;