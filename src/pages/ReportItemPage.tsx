
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { AlertCircle, CheckCircle, Upload, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Badge } from '@/components/ui/badge';
import LocationSelector from '@/components/LocationSelector';

const formSchema = z.object({
  reportType: z.enum(['LOST', 'FOUND']),
  itemName: z.string().min(2, 'Item name must be at least 2 characters'),
  category: z.string().min(1, 'Please select a category'),
  location: z.string().min(1, 'Please select a location'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  reporterName: z.string().min(2, 'Name must be at least 2 characters'),
  contactNumber: z.string().min(10, 'Please enter a valid contact number'),
  email: z.string().email('Please enter a valid email address'),
  dateLostFound: z.string().min(1, 'Please select a date')
});

interface Category {
  id: number;
  name: string;
}

interface Location {
  id: number;
  name: string;
  building?: string;
  floor?: string;
}

const ReportItemPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [categories, setCategories] = useState<Category[]>([]);
  const [locations, setLocations] = useState<Location[]>([]);
  const [uploadedImage, setUploadedImage] = useState<string>('');
  const [uploading, setUploading] = useState(false);
  const [user, setUser] = useState<any>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      reportType: 'LOST',
      itemName: '',
      category: '',
      location: '',
      description: '',
      reporterName: '',
      contactNumber: '',
      email: '',
      dateLostFound: ''
    }
  });

  useEffect(() => {
    fetchCategories();
    fetchLocations();
    checkUserAuth();
  }, []);

  const checkUserAuth = async () => {
    try {
      const { data, error } = await window.ezsite.apis.getUserInfo();
      if (!error && data) {
        setUser(data);
        form.setValue('reporterName', data.Name || '');
        form.setValue('email', data.Email || '');
      }
    } catch (error) {
      console.error('Auth check failed:', error);
    }
  };

  const fetchCategories = async () => {
    try {
      const { data, error } = await window.ezsite.apis.tablePage(23524, {
        PageNo: 1,
        PageSize: 50,
        OrderByField: "name",
        IsAsc: true,
        Filters: []
      });

      if (!error && data?.List) {
        setCategories(data.List);
      }
    } catch (error) {
      console.error('Failed to fetch categories:', error);
    }
  };

  const fetchLocations = async () => {
    try {
      const { data, error } = await window.ezsite.apis.tablePage(23525, {
        PageNo: 1,
        PageSize: 50,
        OrderByField: "name",
        IsAsc: true,
        Filters: []
      });

      if (!error && data?.List) {
        setLocations(data.List);
      }
    } catch (error) {
      console.error('Failed to fetch locations:', error);
    }
  };

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: "Error",
        description: "File size must be less than 5MB",
        variant: "destructive"
      });
      return;
    }

    setUploading(true);
    try {
      const { data, error } = await window.ezsite.apis.upload({
        filename: file.name,
        file: file
      });

      if (error) {
        throw new Error(error);
      }

      setUploadedImage(data.toString());
      toast({
        title: "Success",
        description: "Image uploaded successfully"
      });
    } catch (error) {
      console.error('Upload failed:', error);
      toast({
        title: "Upload Error",
        description: "Failed to upload image. Please try again.",
        variant: "destructive"
      });
    } finally {
      setUploading(false);
    }
  };

  const removeImage = () => {
    setUploadedImage('');
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const itemData = {
        name: values.itemName,
        description: values.description,
        category_id: parseInt(values.category),
        location_id: parseInt(values.location),
        status: values.reportType,
        reporter_name: values.reporterName,
        reporter_contact: values.contactNumber,
        reporter_email: values.email,
        date_reported: new Date().toISOString(),
        date_lost_found: new Date(values.dateLostFound).toISOString(),
        is_claimed: false,
        image_url: uploadedImage,
        user_id: user?.ID || null
      };

      const { error } = await window.ezsite.apis.tableCreate(23526, itemData);

      if (error) {
        throw new Error(error);
      }

      toast({
        title: "Success",
        description: `${values.reportType === 'LOST' ? 'Lost' : 'Found'} item reported successfully!`
      });

      // Reset form
      form.reset();
      setUploadedImage('');

      // Navigate to recent posts
      navigate('/recent-posts');
    } catch (error) {
      console.error('Failed to report item:', error);
      toast({
        title: "Error",
        description: "Failed to report item. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50" data-id="zranv9q7k" data-path="src/pages/ReportItemPage.tsx">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-id="dwixb3vr5" data-path="src/pages/ReportItemPage.tsx">
        <div className="text-center mb-8" data-id="5d0rw2mm8" data-path="src/pages/ReportItemPage.tsx">
          <h1 className="text-3xl font-bold text-gray-900 mb-4" data-id="dpuf3h1sf" data-path="src/pages/ReportItemPage.tsx">Report Lost or Found Item</h1>
          <p className="text-gray-600" data-id="j3o4jcg5w" data-path="src/pages/ReportItemPage.tsx">
            Help others by reporting items you've found, or let us know what you've lost.
          </p>
        </div>

        <Card className="shadow-lg" data-id="osdh2qne8" data-path="src/pages/ReportItemPage.tsx">
          <CardHeader data-id="3m2kd4x6t" data-path="src/pages/ReportItemPage.tsx">
            <div className="flex justify-center space-x-4 mb-6" data-id="p7lwappn8" data-path="src/pages/ReportItemPage.tsx">
              <Button
                type="button"
                variant={form.watch('reportType') === 'LOST' ? 'default' : 'outline'}
                onClick={() => form.setValue('reportType', 'LOST')}
                className={`px-8 py-3 ${
                form.watch('reportType') === 'LOST' ?
                'bg-red-500 hover:bg-red-600 text-white' :
                'text-red-500 border-red-500 hover:bg-red-50'}`
                } data-id="6uly738e1" data-path="src/pages/ReportItemPage.tsx">

                <AlertCircle className="w-5 h-5 mr-2" data-id="uxk36ru0i" data-path="src/pages/ReportItemPage.tsx" />
                Report Lost Item
              </Button>
              
              <Button
                type="button"
                variant={form.watch('reportType') === 'FOUND' ? 'default' : 'outline'}
                onClick={() => form.setValue('reportType', 'FOUND')}
                className={`px-8 py-3 ${
                form.watch('reportType') === 'FOUND' ?
                'bg-green-500 hover:bg-green-600 text-white' :
                'text-green-500 border-green-500 hover:bg-green-50'}`
                } data-id="66dbsmt9b" data-path="src/pages/ReportItemPage.tsx">

                <CheckCircle className="w-5 h-5 mr-2" data-id="vthnereg6" data-path="src/pages/ReportItemPage.tsx" />
                Report Found Item
              </Button>
            </div>
          </CardHeader>

          <CardContent data-id="qbbs0vs25" data-path="src/pages/ReportItemPage.tsx">
            <Form {...form} data-id="46yp4du9w" data-path="src/pages/ReportItemPage.tsx">
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-id="53ht4dl88" data-path="src/pages/ReportItemPage.tsx">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-id="qudnoturu" data-path="src/pages/ReportItemPage.tsx">
                  <FormField
                    control={form.control}
                    name="itemName"
                    render={({ field }) =>
                    <FormItem data-id="3rajh0jdo" data-path="src/pages/ReportItemPage.tsx">
                        <FormLabel data-id="w9bjpappn" data-path="src/pages/ReportItemPage.tsx">Item Name *</FormLabel>
                        <FormControl data-id="tz7mjqea5" data-path="src/pages/ReportItemPage.tsx">
                          <Input placeholder="What did you lose/find?" {...field} data-id="tnfzhnexw" data-path="src/pages/ReportItemPage.tsx" />
                        </FormControl>
                        <FormMessage data-id="53olq1a4f" data-path="src/pages/ReportItemPage.tsx" />
                      </FormItem>
                    } data-id="5xavxfavx" data-path="src/pages/ReportItemPage.tsx" />


                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) =>
                    <FormItem data-id="7ckr5m1t8" data-path="src/pages/ReportItemPage.tsx">
                        <FormLabel data-id="0tdxzw63v" data-path="src/pages/ReportItemPage.tsx">Category *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value} data-id="3mivmezxi" data-path="src/pages/ReportItemPage.tsx">
                          <FormControl data-id="xvceja53b" data-path="src/pages/ReportItemPage.tsx">
                            <SelectTrigger data-id="f65cmfqtq" data-path="src/pages/ReportItemPage.tsx">
                              <SelectValue placeholder="Select Category" data-id="upu02uj86" data-path="src/pages/ReportItemPage.tsx" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent data-id="xivf710o8" data-path="src/pages/ReportItemPage.tsx">
                            {categories.map((category) =>
                          <SelectItem key={category.id} value={category.id.toString()} data-id="4qgu700gg" data-path="src/pages/ReportItemPage.tsx">
                                {category.name}
                              </SelectItem>
                          )}
                          </SelectContent>
                        </Select>
                        <FormMessage data-id="nzscp9slx" data-path="src/pages/ReportItemPage.tsx" />
                      </FormItem>
                    } data-id="0ss5v12ij" data-path="src/pages/ReportItemPage.tsx" />

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-id="g47farhvu" data-path="src/pages/ReportItemPage.tsx">
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) =>
                    <FormItem data-id="s8fl13t98" data-path="src/pages/ReportItemPage.tsx">
                        <FormLabel data-id="pcgp3zaqv" data-path="src/pages/ReportItemPage.tsx">
                          {form.watch('reportType') === 'LOST' ? 'Last Seen Location' : 'Found Location'} *
                        </FormLabel>
                        <LocationSelector
                        locations={locations}
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        placeholder="Select Location" data-id="ytgwxw1a5" data-path="src/pages/ReportItemPage.tsx" />

                        <FormMessage data-id="ha4dtfvqw" data-path="src/pages/ReportItemPage.tsx" />
                      </FormItem>
                    } data-id="tly04o0oy" data-path="src/pages/ReportItemPage.tsx" />


                  <FormField
                    control={form.control}
                    name="dateLostFound"
                    render={({ field }) =>
                    <FormItem data-id="jon2dl3jw" data-path="src/pages/ReportItemPage.tsx">
                        <FormLabel data-id="5ne9b2rwt" data-path="src/pages/ReportItemPage.tsx">
                          Date {form.watch('reportType') === 'LOST' ? 'Lost' : 'Found'} *
                        </FormLabel>
                        <FormControl data-id="vsqfcat9z" data-path="src/pages/ReportItemPage.tsx">
                          <Input type="date" {...field} data-id="1f11jgmp8" data-path="src/pages/ReportItemPage.tsx" />
                        </FormControl>
                        <FormMessage data-id="8e1ra16g5" data-path="src/pages/ReportItemPage.tsx" />
                      </FormItem>
                    } data-id="dazrq2gge" data-path="src/pages/ReportItemPage.tsx" />

                </div>

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) =>
                  <FormItem data-id="36prm0plg" data-path="src/pages/ReportItemPage.tsx">
                      <FormLabel data-id="dctl6jmzi" data-path="src/pages/ReportItemPage.tsx">Description *</FormLabel>
                      <FormControl data-id="ixvy3g7a6" data-path="src/pages/ReportItemPage.tsx">
                        <Textarea
                        placeholder="Describe your item in detail (color, brand, distinctive features, etc.)"
                        className="min-h-[100px]"
                        {...field} data-id="wt75fh7ek" data-path="src/pages/ReportItemPage.tsx" />

                      </FormControl>
                      <FormMessage data-id="qta0jdc0h" data-path="src/pages/ReportItemPage.tsx" />
                    </FormItem>
                  } data-id="jb9rn4fsc" data-path="src/pages/ReportItemPage.tsx" />


                {/* Image Upload */}
                <div className="space-y-4" data-id="uqbmgchyt" data-path="src/pages/ReportItemPage.tsx">
                  <label className="text-sm font-medium text-gray-700" data-id="638bintlr" data-path="src/pages/ReportItemPage.tsx">Item Photo (Optional)</label>
                  
                  {uploadedImage ?
                  <div className="relative inline-block" data-id="l5m2cojey" data-path="src/pages/ReportItemPage.tsx">
                      <img
                      src={uploadedImage}
                      alt="Uploaded item"
                      className="w-32 h-32 object-cover rounded-lg border" data-id="grr4fsove" data-path="src/pages/ReportItemPage.tsx" />

                      <Button
                      type="button"
                      variant="destructive"
                      size="sm"
                      className="absolute -top-2 -right-2 w-6 h-6 rounded-full p-0"
                      onClick={removeImage} data-id="yslpeqyw6" data-path="src/pages/ReportItemPage.tsx">

                        <X className="w-4 h-4" data-id="8duldac6s" data-path="src/pages/ReportItemPage.tsx" />
                      </Button>
                    </div> :

                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center" data-id="pinipspec" data-path="src/pages/ReportItemPage.tsx">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" data-id="g3izwqm0l" data-path="src/pages/ReportItemPage.tsx" />
                      <p className="text-sm text-gray-600 mb-2" data-id="08e9tttea" data-path="src/pages/ReportItemPage.tsx">Upload a photo of the item</p>
                      <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="image-upload"
                      disabled={uploading} data-id="9nh1crwg2" data-path="src/pages/ReportItemPage.tsx" />

                      <label
                      htmlFor="image-upload"
                      className="cursor-pointer text-blue-600 hover:text-blue-500" data-id="lv99j39ar" data-path="src/pages/ReportItemPage.tsx">

                        {uploading ? 'Uploading...' : 'Choose file'}
                      </label>
                    </div>
                  }
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-id="vcod7xp71" data-path="src/pages/ReportItemPage.tsx">
                  <FormField
                    control={form.control}
                    name="reporterName"
                    render={({ field }) =>
                    <FormItem data-id="b3bzcl4tu" data-path="src/pages/ReportItemPage.tsx">
                        <FormLabel data-id="c6zz0w1qk" data-path="src/pages/ReportItemPage.tsx">Your Name *</FormLabel>
                        <FormControl data-id="n51t1govc" data-path="src/pages/ReportItemPage.tsx">
                          <Input placeholder="Enter your full name" {...field} data-id="moabgcmq9" data-path="src/pages/ReportItemPage.tsx" />
                        </FormControl>
                        <FormMessage data-id="zofuwaf9l" data-path="src/pages/ReportItemPage.tsx" />
                      </FormItem>
                    } data-id="qaf1lss22" data-path="src/pages/ReportItemPage.tsx" />


                  <FormField
                    control={form.control}
                    name="contactNumber"
                    render={({ field }) =>
                    <FormItem data-id="oa1973jql" data-path="src/pages/ReportItemPage.tsx">
                        <FormLabel data-id="pooqzaofo" data-path="src/pages/ReportItemPage.tsx">Contact Number *</FormLabel>
                        <FormControl data-id="pbq58cwgl" data-path="src/pages/ReportItemPage.tsx">
                          <Input placeholder="Enter your phone number" {...field} data-id="d5zjpqwmw" data-path="src/pages/ReportItemPage.tsx" />
                        </FormControl>
                        <FormMessage data-id="48uc0a1l7" data-path="src/pages/ReportItemPage.tsx" />
                      </FormItem>
                    } data-id="o3675w9au" data-path="src/pages/ReportItemPage.tsx" />

                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) =>
                  <FormItem data-id="0qkj52ymu" data-path="src/pages/ReportItemPage.tsx">
                      <FormLabel data-id="de6qs163p" data-path="src/pages/ReportItemPage.tsx">Email Address *</FormLabel>
                      <FormControl data-id="zx4txuk22" data-path="src/pages/ReportItemPage.tsx">
                        <Input placeholder="Enter your email address" {...field} data-id="0t5c4whlm" data-path="src/pages/ReportItemPage.tsx" />
                      </FormControl>
                      <FormMessage data-id="hcr8xcfzs" data-path="src/pages/ReportItemPage.tsx" />
                    </FormItem>
                  } data-id="letspndyo" data-path="src/pages/ReportItemPage.tsx" />


                <div className="flex justify-center pt-6" data-id="2xpq0bl3i" data-path="src/pages/ReportItemPage.tsx">
                  <Button
                    type="submit"
                    className={`px-12 py-3 text-lg font-semibold ${
                    form.watch('reportType') === 'LOST' ?
                    'bg-red-500 hover:bg-red-600' :
                    'bg-green-500 hover:bg-green-600'} text-white`
                    }
                    disabled={uploading} data-id="cj8sft3ll" data-path="src/pages/ReportItemPage.tsx">

                    {form.watch('reportType') === 'LOST' ? 'Report Lost Item' : 'Report Found Item'}
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>);

};

export default ReportItemPage;