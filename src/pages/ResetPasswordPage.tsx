
import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Lock, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
});

const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const token = searchParams.get('token');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: '',
      confirmPassword: ''
    }
  });

  useEffect(() => {
    if (!token) {
      toast({
        title: "Invalid Reset Link",
        description: "The password reset link is invalid or has expired.",
        variant: "destructive"
      });
      navigate('/login');
    }
  }, [token, navigate, toast]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (!token) return;

    setLoading(true);
    try {
      const { error } = await window.ezsite.apis.resetPassword({
        token: token,
        password: values.password
      });

      if (error) {
        throw new Error(error);
      }

      toast({
        title: "Password Reset Successful",
        description: "Your password has been reset successfully. You can now log in with your new password."
      });

      navigate('/login');
    } catch (error) {
      console.error('Password reset failed:', error);
      toast({
        title: "Reset Failed",
        description: error instanceof Error ? error.message : "Failed to reset password. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  if (!token) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4" data-id="ceu3q99vf" data-path="src/pages/ResetPasswordPage.tsx">
      <Card className="w-full max-w-md" data-id="elskursrw" data-path="src/pages/ResetPasswordPage.tsx">
        <CardHeader className="text-center" data-id="arp373wqk" data-path="src/pages/ResetPasswordPage.tsx">
          <div className="flex justify-center mb-4" data-id="mzn9wfhr2" data-path="src/pages/ResetPasswordPage.tsx">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center" data-id="gcc9psa93" data-path="src/pages/ResetPasswordPage.tsx">
              <Lock className="w-6 h-6 text-white" data-id="mit9a4hi6" data-path="src/pages/ResetPasswordPage.tsx" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900" data-id="ce9s8k1wb" data-path="src/pages/ResetPasswordPage.tsx">Reset Password</CardTitle>
          <CardDescription data-id="919nzxos8" data-path="src/pages/ResetPasswordPage.tsx">
            Enter your new password below
          </CardDescription>
        </CardHeader>
        <CardContent data-id="8wyzsyl46" data-path="src/pages/ResetPasswordPage.tsx">
          <Form {...form} data-id="0nw6tn1t7" data-path="src/pages/ResetPasswordPage.tsx">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4" data-id="1bw7v9b2z" data-path="src/pages/ResetPasswordPage.tsx">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) =>
                <FormItem data-id="4ys0jss40" data-path="src/pages/ResetPasswordPage.tsx">
                    <FormLabel data-id="j60ry50g0" data-path="src/pages/ResetPasswordPage.tsx">New Password</FormLabel>
                    <FormControl data-id="fushihelx" data-path="src/pages/ResetPasswordPage.tsx">
                      <div className="relative" data-id="1rkyqbjvx" data-path="src/pages/ResetPasswordPage.tsx">
                        <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your new password"
                        {...field} data-id="c92myo0h2" data-path="src/pages/ResetPasswordPage.tsx" />

                        <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)} data-id="3std8kgpx" data-path="src/pages/ResetPasswordPage.tsx">

                          {showPassword ?
                        <EyeOff className="h-4 w-4" data-id="rh5u75469" data-path="src/pages/ResetPasswordPage.tsx" /> :

                        <Eye className="h-4 w-4" data-id="jjxtmt3qz" data-path="src/pages/ResetPasswordPage.tsx" />
                        }
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage data-id="mjiezo5gm" data-path="src/pages/ResetPasswordPage.tsx" />
                  </FormItem>
                } data-id="7ktuqzqhi" data-path="src/pages/ResetPasswordPage.tsx" />


              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) =>
                <FormItem data-id="77thftbqm" data-path="src/pages/ResetPasswordPage.tsx">
                    <FormLabel data-id="f6zjgd2s3" data-path="src/pages/ResetPasswordPage.tsx">Confirm Password</FormLabel>
                    <FormControl data-id="wkig1eigc" data-path="src/pages/ResetPasswordPage.tsx">
                      <div className="relative" data-id="253ee7mq9" data-path="src/pages/ResetPasswordPage.tsx">
                        <Input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your new password"
                        {...field} data-id="geevy2ekq" data-path="src/pages/ResetPasswordPage.tsx" />

                        <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)} data-id="0vyrtnrbh" data-path="src/pages/ResetPasswordPage.tsx">

                          {showConfirmPassword ?
                        <EyeOff className="h-4 w-4" data-id="qxvcg4lz1" data-path="src/pages/ResetPasswordPage.tsx" /> :

                        <Eye className="h-4 w-4" data-id="uxinxs090" data-path="src/pages/ResetPasswordPage.tsx" />
                        }
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage data-id="a53zizndz" data-path="src/pages/ResetPasswordPage.tsx" />
                  </FormItem>
                } data-id="u6pxvzs1y" data-path="src/pages/ResetPasswordPage.tsx" />


              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700"
                disabled={loading} data-id="9ehwyds6v" data-path="src/pages/ResetPasswordPage.tsx">

                {loading ? "Resetting..." : "Reset Password"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>);

};

export default ResetPasswordPage;