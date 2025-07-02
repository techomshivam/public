
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { LogIn, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(1, 'Password is required')
});

const LoginPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [forgotPasswordLoading, setForgotPasswordLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);
    try {
      const { error } = await window.ezsite.apis.login({
        email: values.email,
        password: values.password
      });

      if (error) {
        throw new Error(error);
      }

      toast({
        title: "Login Successful",
        description: "Welcome back!"
      });

      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
      toast({
        title: "Login Failed",
        description: error instanceof Error ? error.message : "Invalid email or password",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    const email = form.getValues('email');
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address first.",
        variant: "destructive"
      });
      return;
    }

    setForgotPasswordLoading(true);
    try {
      const { error } = await window.ezsite.apis.sendResetPwdEmail({ email });

      if (error) {
        throw new Error(error);
      }

      toast({
        title: "Reset Email Sent",
        description: "Please check your email for password reset instructions."
      });
    } catch (error) {
      console.error('Forgot password failed:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send reset email",
        variant: "destructive"
      });
    } finally {
      setForgotPasswordLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4" data-id="676eknyi2" data-path="src/pages/LoginPage.tsx">
      <Card className="w-full max-w-md" data-id="elcpfewzw" data-path="src/pages/LoginPage.tsx">
        <CardHeader className="text-center" data-id="3r13n3ndt" data-path="src/pages/LoginPage.tsx">
          <div className="flex justify-center mb-4" data-id="bph5x5629" data-path="src/pages/LoginPage.tsx">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center" data-id="5ojra2zdd" data-path="src/pages/LoginPage.tsx">
              <LogIn className="w-6 h-6 text-white" data-id="wb1hmqbon" data-path="src/pages/LoginPage.tsx" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900" data-id="8yuipdjz5" data-path="src/pages/LoginPage.tsx">Welcome Back</CardTitle>
          <CardDescription data-id="hwcas4xoe" data-path="src/pages/LoginPage.tsx">
            Sign in to your FindIt account
          </CardDescription>
        </CardHeader>
        <CardContent data-id="1pc2bcfh2" data-path="src/pages/LoginPage.tsx">
          <Form {...form} data-id="lsys6ssmi" data-path="src/pages/LoginPage.tsx">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4" data-id="odo6k9yjt" data-path="src/pages/LoginPage.tsx">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) =>
                <FormItem data-id="vt15js4en" data-path="src/pages/LoginPage.tsx">
                    <FormLabel data-id="fse2zhw5x" data-path="src/pages/LoginPage.tsx">Email</FormLabel>
                    <FormControl data-id="18tg8dll4" data-path="src/pages/LoginPage.tsx">
                      <Input
                      type="email"
                      placeholder="Enter your email"
                      {...field} data-id="z3ix8ctt5" data-path="src/pages/LoginPage.tsx" />

                    </FormControl>
                    <FormMessage data-id="5dczlxpcv" data-path="src/pages/LoginPage.tsx" />
                  </FormItem>
                } data-id="bfgbpp1xu" data-path="src/pages/LoginPage.tsx" />


              <FormField
                control={form.control}
                name="password"
                render={({ field }) =>
                <FormItem data-id="afho9qmjx" data-path="src/pages/LoginPage.tsx">
                    <FormLabel data-id="hh7t0l43k" data-path="src/pages/LoginPage.tsx">Password</FormLabel>
                    <FormControl data-id="uqcgyo4px" data-path="src/pages/LoginPage.tsx">
                      <div className="relative" data-id="e9s9kf76o" data-path="src/pages/LoginPage.tsx">
                        <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        {...field} data-id="p2egh5vcz" data-path="src/pages/LoginPage.tsx" />

                        <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)} data-id="w3gbecnqs" data-path="src/pages/LoginPage.tsx">

                          {showPassword ?
                        <EyeOff className="h-4 w-4" data-id="tem13x7gz" data-path="src/pages/LoginPage.tsx" /> :

                        <Eye className="h-4 w-4" data-id="qpt6t9rtc" data-path="src/pages/LoginPage.tsx" />
                        }
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage data-id="h6spbxlhl" data-path="src/pages/LoginPage.tsx" />
                  </FormItem>
                } data-id="ewo409idn" data-path="src/pages/LoginPage.tsx" />


              <div className="text-right" data-id="bqh0nmwfo" data-path="src/pages/LoginPage.tsx">
                <Button
                  type="button"
                  variant="link"
                  className="text-sm text-blue-600 hover:underline p-0"
                  onClick={handleForgotPassword}
                  disabled={forgotPasswordLoading} data-id="b0h8tpgtr" data-path="src/pages/LoginPage.tsx">

                  {forgotPasswordLoading ? "Sending..." : "Forgot password?"}
                </Button>
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700"
                disabled={loading} data-id="lnxxdazxj" data-path="src/pages/LoginPage.tsx">

                {loading ? "Signing in..." : "Sign In"}
              </Button>
            </form>
          </Form>

          <div className="mt-6 text-center" data-id="mvc2dvbrk" data-path="src/pages/LoginPage.tsx">
            <p className="text-sm text-gray-600" data-id="cpzzjqkc3" data-path="src/pages/LoginPage.tsx">
              Don't have an account?{' '}
              <Link to="/register" className="text-blue-600 hover:underline" data-id="ujprwunmd" data-path="src/pages/LoginPage.tsx">
                Sign up
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>);

};

export default LoginPage;