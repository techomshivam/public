import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
  {
    name: "Sarah Johnson",
    role: "University Student",
    avatar: "https://images.unsplash.com/photo-1629667113136-1b68af96e2af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwY3JvcHBlZCUyMHBvcnRyYWl0JTIwb2YlMjBhJTIwcGVyc29uJTJDJTIwZm9jdXNpbmclMjBvbiUyMHRoZSUyMGZhY2UlMkMlMjB3aXRoJTIwYSUyMHJlc29sdXRpb24lMjBvZiUyMDY0eDY0JTIwcGl4ZWxzLnxlbnwwfHx8fDE3NTEzNTM1MTR8MA&ixlib=rb-4.1.0&q=80&w=200$w=64",
    rating: 5,
    text: "This platform has completely transformed how I manage my daily tasks. The interface is intuitive and the features are exactly what I needed."
  },
  {
    name: "Mike Chen",
    role: "Software Developer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
    rating: 5,
    text: "The performance is incredible and the design is beautiful. As a developer, I appreciate the attention to detail and clean code architecture."
  },
  {
    name: "Emily Rodriguez",
    role: "Designer",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
    rating: 5,
    text: "From a design perspective, this is perfection. The user experience is seamless and the visual design is simply stunning."
  },
  {
    name: "David Thompson",
    role: "Business Owner",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
    rating: 5,
    text: "This has helped streamline our operations significantly. The reliability and support team are outstanding."
  },
  {
    name: "Lisa Wang",
    role: "Marketing Manager",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=64&h=64&fit=crop&crop=face",
    rating: 5,
    text: "The features are comprehensive yet easy to use. It's rare to find a platform that balances functionality with simplicity so well."
  },
  {
    name: "Alex Kumar",
    role: "Project Manager",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=face",
    rating: 5,
    text: "Outstanding platform! The team collaboration features have made our workflow so much more efficient."
  }];


  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" data-id="j2lpuxugw" data-path="src/components/TestimonialsSection.tsx">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" data-id="x1c2jo2tk" data-path="src/components/TestimonialsSection.tsx">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16" data-id="bcdwzy6yk" data-path="src/components/TestimonialsSection.tsx">

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-id="h7vffp9cy" data-path="src/components/TestimonialsSection.tsx">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-id="ijngnoenn" data-path="src/components/TestimonialsSection.tsx">
            Don't just take our word for it. See what our amazing community has to say about their experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-id="jze21oqkv" data-path="src/components/TestimonialsSection.tsx">
          {testimonials.map((testimonial, index) =>
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }} data-id="bq4wit0ay" data-path="src/components/TestimonialsSection.tsx">

              <Card className="h-full group hover:shadow-xl transition-all duration-300 border-0 bg-white shadow-lg" data-id="vaj3a8o1t" data-path="src/components/TestimonialsSection.tsx">
                <CardContent className="p-6" data-id="ng8022ckz" data-path="src/components/TestimonialsSection.tsx">
                  {/* Rating Stars */}
                  <div className="flex space-x-1 mb-4" data-id="phvbu4zsv" data-path="src/components/TestimonialsSection.tsx">
                    {[...Array(testimonial.rating)].map((_, i) =>
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" data-id="a5veh6zfl" data-path="src/components/TestimonialsSection.tsx" />
                  )}
                  </div>
                  
                  {/* Testimonial Text */}
                  <p className="text-gray-600 mb-6 italic leading-relaxed" data-id="jppdon08k" data-path="src/components/TestimonialsSection.tsx">
                    "{testimonial.text}"
                  </p>
                  
                  {/* User Info */}
                  <div className="flex items-center space-x-3" data-id="4qy2nn7a5" data-path="src/components/TestimonialsSection.tsx">
                    <Avatar className="w-12 h-12" data-id="7x28lm7s7" data-path="src/components/TestimonialsSection.tsx">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-id="6an74twu9" data-path="src/components/TestimonialsSection.tsx" />
                      <AvatarFallback className="bg-gradient-to-r from-purple-500 to-pink-500 text-white" data-id="ubkebqwhx" data-path="src/components/TestimonialsSection.tsx">
                        {testimonial.name.split(' ').map((n) => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div data-id="m6uldqla0" data-path="src/components/TestimonialsSection.tsx">
                      <h4 className="font-semibold text-gray-900" data-id="bitndpswv" data-path="src/components/TestimonialsSection.tsx">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500" data-id="yz2r9ooyt" data-path="src/components/TestimonialsSection.tsx">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

};

export default TestimonialsSection;