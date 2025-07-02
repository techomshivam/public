import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { User, Mail, Phone, Save, ArrowLeft } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  phoneNumber: z.string().min(10, 'Phone number must be at least 10 digits'),
  bio: z.string().optional()
});

const ProfilePage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const [loadingProfile, setLoadingProfile] = useState(true);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      phoneNumber: '',
      bio: ''
    }
  });

  useEffect(() => {
    checkAuthAndLoadProfile();
  }, []);

  const checkAuthAndLoadProfile = async () => {
    try {
      // Check if user is logged in
      const { data: userData, error: userError } = await window.ezsite.apis.getUserInfo();
      if (userError || !userData) {
        toast({
          title: "Authentication Required",
          description: "Please log in to access your profile.",
          variant: "destructive"
        });
        navigate('/login');
        return;
      }

      setUser(userData);

      // Load existing profile
      const { data: profileData, error: profileError } = await window.ezsite.apis.tablePage(23608, {
        "PageNo": 1,
        "PageSize": 1,
        "Filters": [
        {
          "name": "user_id",
          "op": "Equal",
          "value": userData.ID
        }]

      });

      if (!profileError && profileData?.List?.length > 0) {
        const existingProfile = profileData.List[0];
        setProfile(existingProfile);
        form.reset({
          fullName: existingProfile.full_name || '',
          phoneNumber: existingProfile.phone_number || '',
          bio: existingProfile.bio || ''
        });
      }
    } catch (error) {
      console.error('Failed to load profile:', error);
      toast({
        title: "Error",
        description: "Failed to load profile information.",
        variant: "destructive"
      });
    } finally {
      setLoadingProfile(false);
    }
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (!user) return;

    setIsLoading(true);
    try {
      const profileData = {
        user_id: user.ID,
        full_name: values.fullName,
        phone_number: values.phoneNumber,
        bio: values.bio || '',
        created_at: new Date().toISOString()
      };

      let error;
      if (profile) {
        // Update existing profile
        const result = await window.ezsite.apis.tableUpdate(23608, {
          ID: profile.id,
          ...profileData
        });
        error = result.error;
      } else {
        // Create new profile
        const result = await window.ezsite.apis.tableCreate(23608, profileData);
        error = result.error;
      }

      if (error) {
        throw new Error(error);
      }

      toast({
        title: "Profile Updated",
        description: "Your profile has been successfully updated."
      });

      // Reload profile data
      await checkAuthAndLoadProfile();
    } catch (error) {
      console.error('Failed to update profile:', error);
      toast({
        title: "Update Failed",
        description: error instanceof Error ? error.message : "Failed to update profile. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (loadingProfile) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center" data-id="ztgcxwyo6" data-path="src/pages/ProfilePage.tsx">
        <div className="w-8 h-8 animate-spin rounded-full border-2 border-blue-500 border-t-transparent" data-id="tpd840txl" data-path="src/pages/ProfilePage.tsx"></div>
      </div>);

  }

  return (
    <div className="min-h-screen bg-gray-50 py-8" data-id="7b3elh8w7" data-path="src/pages/ProfilePage.tsx">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8" data-id="n02sh68bt" data-path="src/pages/ProfilePage.tsx">
        {/* Header */}
        <div className="mb-6" data-id="z92u4qzqz" data-path="src/pages/ProfilePage.tsx">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-4 flex items-center space-x-2" data-id="jh6twx1n0" data-path="src/pages/ProfilePage.tsx">

            <ArrowLeft className="w-4 h-4" data-id="mu8h8z3az" data-path="src/pages/ProfilePage.tsx" />
            <span data-id="lqj16m9c4" data-path="src/pages/ProfilePage.tsx">Back to Home</span>
          </Button>
          <h1 className="text-3xl font-bold text-gray-900" data-id="ksmzftxhf" data-path="src/pages/ProfilePage.tsx">Profile</h1>
          <p className="text-gray-600" data-id="x4mdv6wd3" data-path="src/pages/ProfilePage.tsx">Manage your account information</p>
        </div>

        <Card data-id="1bplmnab4" data-path="src/pages/ProfilePage.tsx">
          <CardHeader data-id="2ljj4dot7" data-path="src/pages/ProfilePage.tsx">
            <CardTitle className="flex items-center space-x-2" data-id="uvgn7fote" data-path="src/pages/ProfilePage.tsx">
              <User className="w-5 h-5" data-id="eir0utc8e" data-path="src/pages/ProfilePage.tsx" />
              <span data-id="ozxph0l0a" data-path="src/pages/ProfilePage.tsx">Personal Information</span>
            </CardTitle>
          </CardHeader>
          <CardContent data-id="cegiwvog3" data-path="src/pages/ProfilePage.tsx">
            {/* User Email (Read-only) */}
            <div className="mb-6" data-id="8as4whe2b" data-path="src/pages/ProfilePage.tsx">
              <label className="block text-sm font-medium text-gray-700 mb-2" data-id="tst9hz072" data-path="src/pages/ProfilePage.tsx">
                Email Address
              </label>
              <div className="relative" data-id="8mcg7huv4" data-path="src/pages/ProfilePage.tsx">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" data-id="zaox0upsx" data-path="src/pages/ProfilePage.tsx" />
                <Input
                  value={user?.Email || ''}
                  disabled
                  className="pl-10 bg-gray-50" data-id="0mcufixgt" data-path="src/pages/ProfilePage.tsx" />

              </div>
              <p className="text-xs text-gray-500 mt-1" data-id="c38z5dv53" data-path="src/pages/ProfilePage.tsx">
                Email cannot be changed. Contact support if needed.
              </p>
            </div>

            <Form {...form} data-id="llh37o6bi" data-path="src/pages/ProfilePage.tsx">
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-id="7um43o5n9" data-path="src/pages/ProfilePage.tsx">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) =>
                  <FormItem data-id="cbv4gbt7u" data-path="src/pages/ProfilePage.tsx">
                      <FormLabel data-id="edqd2docw" data-path="src/pages/ProfilePage.tsx">Full Name</FormLabel>
                      <FormControl data-id="hxwllld4y" data-path="src/pages/ProfilePage.tsx">
                        <div className="relative" data-id="6xeadrd38" data-path="src/pages/ProfilePage.tsx">
                          <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" data-id="9wz8m20e3" data-path="src/pages/ProfilePage.tsx" />
                          <Input
                          placeholder="Enter your full name"
                          className="pl-10"
                          {...field} data-id="srl7hv9xx" data-path="src/pages/ProfilePage.tsx" />

                        </div>
                      </FormControl>
                      <FormMessage data-id="fq02bj7z3" data-path="src/pages/ProfilePage.tsx" />
                    </FormItem>
                  } data-id="cik6l8pl7" data-path="src/pages/ProfilePage.tsx" />


                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) =>
                  <FormItem data-id="s09vpvkmj" data-path="src/pages/ProfilePage.tsx">
                      <FormLabel data-id="3cefg55e4" data-path="src/pages/ProfilePage.tsx">Phone Number</FormLabel>
                      <FormControl data-id="vbrfaj2yi" data-path="src/pages/ProfilePage.tsx">
                        <div className="relative" data-id="34hczqsjb" data-path="src/pages/ProfilePage.tsx">
                          <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" data-id="zgxpkprfz" data-path="src/pages/ProfilePage.tsx" />
                          <Input
                          type="tel"
                          placeholder="Enter your phone number"
                          className="pl-10"
                          {...field} data-id="pgh8bexsi" data-path="src/pages/ProfilePage.tsx" />

                        </div>
                      </FormControl>
                      <FormMessage data-id="i1m2pr5px" data-path="src/pages/ProfilePage.tsx" />
                    </FormItem>
                  } data-id="607bql7a8" data-path="src/pages/ProfilePage.tsx" />


                <FormField
                  control={form.control}
                  name="bio"
                  render={({ field }) =>
                  <FormItem data-id="wunjlemar" data-path="src/pages/ProfilePage.tsx">
                      <FormLabel data-id="5bhmgk0w9" data-path="src/pages/ProfilePage.tsx">Bio (Optional)</FormLabel>
                      <FormControl data-id="8ehk5ca6i" data-path="src/pages/ProfilePage.tsx">
                        <Textarea
                        placeholder="Tell us a little about yourself..."
                        className="min-h-[100px]"
                        {...field} data-id="nqn4ebdso" data-path="src/pages/ProfilePage.tsx" />

                      </FormControl>
                      <FormMessage data-id="790j9as6o" data-path="src/pages/ProfilePage.tsx" />
                    </FormItem>
                  } data-id="1a0ap5i3d" data-path="src/pages/ProfilePage.tsx" />


                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center space-x-2"
                  disabled={isLoading} data-id="17ijq0uul" data-path="src/pages/ProfilePage.tsx">

                  <Save className="w-4 h-4" data-id="r5md0fh4q" data-path="src/pages/ProfilePage.tsx" />
                  <span data-id="9w6fjrbxh" data-path="src/pages/ProfilePage.tsx">{isLoading ? 'Saving...' : 'Save Profile'}</span>
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>);

};

export default ProfilePage;