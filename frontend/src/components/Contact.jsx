import React, { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Success - store in browser (localStorage as mock)
    const contactSubmissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    contactSubmissions.push({
      ...formData,
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem('contactSubmissions', JSON.stringify(contactSubmissions));

    // Show success message
    toast({
      title: 'Message sent successfully!',
      description: 'Thank you for reaching out. I\'ll get back to you soon.',
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-600/10 rounded-lg">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Email</h3>
                    <p className="text-gray-400">rajesh.pal@example.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-600/10 rounded-lg">
                    <MapPin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Location</h3>
                    <p className="text-gray-400">India</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="p-6 bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-gray-800 rounded-lg">
              <h3 className="text-white font-semibold mb-3">Let's Connect</h3>
              <p className="text-gray-400 text-sm">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
                Whether you need help with development or just want to say hi, I'll do my best to get back to you!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-blue-600"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-blue-600"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-blue-600 resize-none"
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;