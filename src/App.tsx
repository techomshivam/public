
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as SonnerToaster } from 'sonner';
import FindItNavigation from '@/components/FindItNavigation';
import AutoDataSeeder from '@/components/AutoDataSeeder';
import FindItHome from '@/pages/FindItHome';
import SearchPage from '@/pages/SearchPage';
import RecentPostsPage from '@/pages/RecentPostsPage';
import ReportItemPage from '@/pages/ReportItemPage';
import LoginPage from '@/pages/LoginPage';
import RegisterPage from '@/pages/RegisterPage';
import OnAuthSuccess from '@/pages/OnAuthSuccess';
import ResetPasswordPage from '@/pages/ResetPasswordPage';
import AdminPage from '@/pages/AdminPage';
import NotFound from '@/pages/NotFound';
import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient} data-id="e204gbken" data-path="src/App.tsx">
      <Router data-id="12iy0s2pp" data-path="src/App.tsx">
        <div className="min-h-screen bg-gray-50" data-id="39ltsqzuy" data-path="src/App.tsx">
          <AutoDataSeeder data-id="s2n0ujnyr" data-path="src/App.tsx" />
          <FindItNavigation data-id="iz0xnz4v2" data-path="src/App.tsx" />
          <main data-id="iuidycl39" data-path="src/App.tsx">
            <Routes data-id="1ki7t04hf" data-path="src/App.tsx">
              <Route path="/" element={<FindItHome data-id="fworikcpp" data-path="src/App.tsx" />} data-id="hesgzo7yq" data-path="src/App.tsx" />
              <Route path="/search" element={<SearchPage data-id="xtwpwgm3f" data-path="src/App.tsx" />} data-id="qqp2qq005" data-path="src/App.tsx" />
              <Route path="/recent-posts" element={<RecentPostsPage data-id="ylcx3tmsg" data-path="src/App.tsx" />} data-id="mzi363tf3" data-path="src/App.tsx" />
              <Route path="/report" element={<ReportItemPage data-id="id267j0r1" data-path="src/App.tsx" />} data-id="vms3qau83" data-path="src/App.tsx" />
              <Route path="/login" element={<LoginPage data-id="nhk5igrf8" data-path="src/App.tsx" />} data-id="kqbmb54fl" data-path="src/App.tsx" />
              <Route path="/register" element={<RegisterPage data-id="6e92frp8c" data-path="src/App.tsx" />} data-id="u7zjx88xd" data-path="src/App.tsx" />
              <Route path="/onauthsuccess" element={<OnAuthSuccess data-id="jr3944wui" data-path="src/App.tsx" />} data-id="ujm6rmo1l" data-path="src/App.tsx" />
              <Route path="/resetpassword" element={<ResetPasswordPage data-id="ixl15d614" data-path="src/App.tsx" />} data-id="934x79yku" data-path="src/App.tsx" />
              <Route path="/admin" element={<AdminPage data-id="1heb96tzb" data-path="src/App.tsx" />} data-id="k4cknq4xe" data-path="src/App.tsx" />
              <Route path="*" element={<NotFound data-id="vm79vl5uj" data-path="src/App.tsx" />} data-id="a17syb2eh" data-path="src/App.tsx" />
            </Routes>
          </main>
          <Toaster data-id="7tmz6vwij" data-path="src/App.tsx" />
          <SonnerToaster data-id="7y5hgpzop" data-path="src/App.tsx" />
        </div>
      </Router>
    </QueryClientProvider>);

}

export default App;