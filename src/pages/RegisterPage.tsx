import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Search, Eye, EyeOff, Mail, User, Lock, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phoneNumber: z.string().min(10, 'Phone number must be at least 10 digits'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
});

const RegisterPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: ''
    }
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    try {
      const { error } = await window.ezsite.apis.register({
        email: values.email,
        password: values.password
      });

      if (error) {
        throw new Error(error);
      }

      toast({
        title: "Registration Successful",
        description: "Please check your email to verify your account."
      });

      // Redirect to login page
      navigate('/login');
    } catch (error) {
      console.error('Registration failed:', error);
      toast({
        title: "Registration Failed",
        description: error instanceof Error ? error.message : "Failed to create account. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50 flex items-center justify-center p-4" data-id="t60ni12ma" data-path="src/pages/RegisterPage.tsx">
      <div className="w-full max-w-md" data-id="f9fdlxl8m" data-path="src/pages/RegisterPage.tsx">
        {/* Logo */}
        <div className="text-center mb-8" data-id="1bb1olcm1" data-path="src/pages/RegisterPage.tsx">
          <div className="flex items-center justify-center space-x-3 mb-4" data-id="rbrfq28cn" data-path="src/pages/RegisterPage.tsx">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center" data-id="35ydqsr09" data-path="src/pages/RegisterPage.tsx">
              <Search className="w-7 h-7 text-white" data-id="tczsn3skt" data-path="src/pages/RegisterPage.tsx" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900" data-id="acw0di5br" data-path="src/pages/RegisterPage.tsx">FindIt</h1>
          </div>
          <p className="text-gray-600" data-id="xn4w8snx5" data-path="src/pages/RegisterPage.tsx">Join the campus lost & found community</p>
        </div>

        <Card className="shadow-lg" data-id="dsa0rzzoo" data-path="src/pages/RegisterPage.tsx">
          <CardHeader data-id="dap4hp9z5" data-path="src/pages/RegisterPage.tsx">
            <CardTitle className="text-2xl text-center text-gray-900" data-id="yj330dsu8" data-path="src/pages/RegisterPage.tsx">Create Account</CardTitle>
          </CardHeader>
          <CardContent data-id="6olczhf7s" data-path="src/pages/RegisterPage.tsx">
            <Form {...form} data-id="sev6d4ter" data-path="src/pages/RegisterPage.tsx">
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4" data-id="9bb29bxqv" data-path="src/pages/RegisterPage.tsx">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) =>
                  <FormItem data-id="ehnt915os" data-path="src/pages/RegisterPage.tsx">
                      <FormLabel data-id="jn53beziw" data-path="src/pages/RegisterPage.tsx">Full Name</FormLabel>
                      <FormControl data-id="bcsdvukk9" data-path="src/pages/RegisterPage.tsx">
                        <div className="relative" data-id="23xsd7x0n" data-path="src/pages/RegisterPage.tsx">
                          <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" data-id="8t487r7zp" data-path="src/pages/RegisterPage.tsx" />
                          <Input
                          placeholder="Enter your full name"
                          className="pl-10"
                          {...field} data-id="3j1gj3mm7" data-path="src/pages/RegisterPage.tsx" />

                        </div>
                      </FormControl>
                      <FormMessage data-id="b3jxirh90" data-path="src/pages/RegisterPage.tsx" />
                    </FormItem>
                  } data-id="qblgd8qeo" data-path="src/pages/RegisterPage.tsx" />


                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) =>
                  <FormItem data-id="8891qn2fm" data-path="src/pages/RegisterPage.tsx">
                      <FormLabel data-id="cd51e4ymp" data-path="src/pages/RegisterPage.tsx">Email</FormLabel>
                      <FormControl data-id="1apqrh20t" data-path="src/pages/RegisterPage.tsx">
                        <div className="relative" data-id="ua8ej6aj9" data-path="src/pages/RegisterPage.tsx">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" data-id="k39g2qui4" data-path="src/pages/RegisterPage.tsx" />
                          <Input
                          type="email"
                          placeholder="Enter your email"
                          className="pl-10"
                          {...field} data-id="jsbxegbv0" data-path="src/pages/RegisterPage.tsx" />

                        </div>
                      </FormControl>
                      <FormMessage data-id="df5g3wuju" data-path="src/pages/RegisterPage.tsx" />
                    </FormItem>
                  } data-id="yh2v1qool" data-path="src/pages/RegisterPage.tsx" />


                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) =>
                  <FormItem data-id="v3ozzkchf" data-path="src/pages/RegisterPage.tsx">
                      <FormLabel data-id="kmegbva4o" data-path="src/pages/RegisterPage.tsx">Phone Number</FormLabel>
                      <FormControl data-id="j8b5ivwd3" data-path="src/pages/RegisterPage.tsx">
                        <div className="relative" data-id="xt7csz8m2" data-path="src/pages/RegisterPage.tsx">
                          <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" data-id="3npajk6cb" data-path="src/pages/RegisterPage.tsx" />
                          <Input
                          type="tel"
                          placeholder="Enter your phone number"
                          className="pl-10"
                          {...field} data-id="gjimw8tce" data-path="src/pages/RegisterPage.tsx" />

                        </div>
                      </FormControl>
                      <FormMessage data-id="sjh1m6ql8" data-path="src/pages/RegisterPage.tsx" />
                    </FormItem>
                  } data-id="zgo4kyzfv" data-path="src/pages/RegisterPage.tsx" />


                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) =>
                  <FormItem data-id="841wr930m" data-path="src/pages/RegisterPage.tsx">
                      <FormLabel data-id="kvgpgedh4" data-path="src/pages/RegisterPage.tsx">Password</FormLabel>
                      <FormControl data-id="hzb05davt" data-path="src/pages/RegisterPage.tsx">
                        <div className="relative" data-id="2hy49w77i" data-path="src/pages/RegisterPage.tsx">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" data-id="m8eo5z1ld" data-path="src/pages/RegisterPage.tsx" />
                          <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Create a password"
                          className="pl-10 pr-10"
                          {...field} data-id="orzwia0oi" data-path="src/pages/RegisterPage.tsx" />

                          <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          onClick={() => setShowPassword(!showPassword)} data-id="w73znw74c" data-path="src/pages/RegisterPage.tsx">

                            {showPassword ? <EyeOff className="h-4 w-4" data-id="20unyknyx" data-path="src/pages/RegisterPage.tsx" /> : <Eye className="h-4 w-4" data-id="nkuy291xn" data-path="src/pages/RegisterPage.tsx" />}
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage data-id="ut3qaq78c" data-path="src/pages/RegisterPage.tsx" />
                    </FormItem>
                  } data-id="pi7jdp8rk" data-path="src/pages/RegisterPage.tsx" />


                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) =>
                  <FormItem data-id="ju8xi5ilp" data-path="src/pages/RegisterPage.tsx">
                      <FormLabel data-id="cvpddmczf" data-path="src/pages/RegisterPage.tsx">Confirm Password</FormLabel>
                      <FormControl data-id="vnhrh1fr7" data-path="src/pages/RegisterPage.tsx">
                        <div className="relative" data-id="eny0h5nhp" data-path="src/pages/RegisterPage.tsx">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" data-id="iexbfc9fg" data-path="src/pages/RegisterPage.tsx" />
                          <Input
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Confirm your password"
                          className="pl-10 pr-10"
                          {...field} data-id="9dkmkkf9n" data-path="src/pages/RegisterPage.tsx" />

                          <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)} data-id="ixy7vqvbm" data-path="src/pages/RegisterPage.tsx">

                            {showConfirmPassword ? <EyeOff className="h-4 w-4" data-id="rkgo40gpd" data-path="src/pages/RegisterPage.tsx" /> : <Eye className="h-4 w-4" data-id="ocx5lv8xb" data-path="src/pages/RegisterPage.tsx" />}
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage data-id="9zos7az9s" data-path="src/pages/RegisterPage.tsx" />
                    </FormItem>
                  } data-id="02dy6qrtn" data-path="src/pages/RegisterPage.tsx" />


                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  disabled={isLoading} data-id="7tt73r7uf" data-path="src/pages/RegisterPage.tsx">

                  {isLoading ? 'Creating Account...' : 'Create Account'}
                </Button>
              </form>
            </Form>

            <div className="mt-6 text-center" data-id="vsy0b97dg" data-path="src/pages/RegisterPage.tsx">
              <p className="text-sm text-gray-600" data-id="xhr7j88qd" data-path="src/pages/RegisterPage.tsx">
                Already have an account?{' '}
                <button
                  onClick={() => navigate('/login')}
                  className="text-blue-600 hover:text-blue-700 font-medium" data-id="8qnp6mon5" data-path="src/pages/RegisterPage.tsx">

                  Login here
                </button>
              </p>
            </div>

            <div className="mt-4 text-center" data-id="ow0f01p8l" data-path="src/pages/RegisterPage.tsx">
              <button
                onClick={() => navigate('/')}
                className="text-sm text-gray-500 hover:text-gray-700" data-id="rexq3cl8m" data-path="src/pages/RegisterPage.tsx">

                Back to Home
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>);

};

export default RegisterPage;