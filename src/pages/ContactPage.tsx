
import { useState } from 'react';
import { Mail, MapPin, Phone, Globe, Clock, Navigation, Car, Bus } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Get in touch with us for conference inquiries, submissions, and registration
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Get In Touch</h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Have questions about JHC 2025? We're here to help with all your conference-related inquiries.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-6 w-6 text-primary" />
                      <CardTitle>Email</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground font-medium">jhc.research@jaihindcollege.edu.in</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      For all conference-related inquiries, abstract submissions, and registration queries
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-6 w-6 text-primary" />
                      <CardTitle>Phone</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground font-medium">+91 22 2266 0570</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Office hours: Monday to Friday, 9:00 AM - 5:00 PM
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Globe className="h-6 w-6 text-primary" />
                      <CardTitle>Conference Organizer</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      <strong>Mr. Wilson Rao</strong><br />
                      Convenor & HOD<br />
                      Department of B.Sc. IT, B.Voc. SD & M.Sc. Big Data Analytics
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Input
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Input
                          type="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Input
                          type="tel"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                        />
                      </div>
                      <div>
                        <Select onValueChange={(value) => handleInputChange('category', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Query Category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="registration">Registration</SelectItem>
                            <SelectItem value="abstract">Abstract Submission</SelectItem>
                            <SelectItem value="accommodation">Accommodation</SelectItem>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="technical">Technical Support</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Textarea
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Map Section */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Visit Our Campus</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Located in the heart of Mumbai, Jai Hind College is easily accessible by all modes of transport
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-primary" />
                  <CardTitle>Address</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Jai Hind College (Empowered Autonomous)<br />
                  'A' Road, Churchgate<br />
                  Mumbai - 400020<br />
                  Maharashtra, India
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Navigation className="h-6 w-6 text-primary" />
                  <CardTitle>By Train</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  <strong>Churchgate Station:</strong> 2 minutes walk<br />
                  <strong>Marine Lines:</strong> 8 minutes walk<br />
                  Well connected to Western & Central Railway lines
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Bus className="h-6 w-6 text-primary" />
                  <CardTitle>By Bus</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  <strong>Bus Routes:</strong> 1, 3, 11, 21, 22, 103, 106, 123<br />
                  <strong>Nearest Stop:</strong> Churchgate Station
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Map Section */}
          <div className="bg-white rounded-xl p-8 shadow-xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Find Us on the Map</h3>
              <p className="text-muted-foreground">
                Jai Hind College is strategically located in Churchgate, one of Mumbai's most accessible areas
              </p>
            </div>
            
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.9295847867265!2d72.82263557513244!3d18.934510682241157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1e71c2b104b%3A0x2b32a4be81621938!2sJai%20Hind%20College!5e0!3m2!1sen!2sin!4v1752218936295!5m2!1sen!2sin" 
                width="100%" 
                height="450" 
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                title="Jai Hind College Location"
              />
            </div>
            
            <div className="mt-8 grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-primary mb-4 text-lg">Nearby Landmarks</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>Oval Maidan - 3 minutes walk</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>Rajabai Clock Tower - 5 minutes walk</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>University of Mumbai - 5 minutes walk</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>Horniman Circle Garden - 10 minutes walk</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-4 text-lg">Parking & Transport</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <Car className="h-4 w-4 text-primary" />
                    <span>Limited on-campus parking available</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Car className="h-4 w-4 text-primary" />
                    <span>Paid parking at Churchgate Station</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Bus className="h-4 w-4 text-primary" />
                    <span>Excellent public transport connectivity</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Navigation className="h-4 w-4 text-primary" />
                    <span>GPS Coordinates: 18.9345°N, 72.8274°E</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
