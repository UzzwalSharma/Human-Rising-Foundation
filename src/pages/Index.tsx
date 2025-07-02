import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Heart, Users, Utensils, GraduationCap, Phone, Mail, MapPin } from "lucide-react";
import { toast } from "sonner";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    wantToVolunteer: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleVolunteerChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, wantToVolunteer: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast.success("Thank you for reaching out! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "", wantToVolunteer: false });
  };

  const handleDonate = () => {
    console.log("Donate button clicked");
    toast.success("Thank you for your interest in donating! Redirecting to donation page...");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-800">Human Rising Foundation</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-600 hover:text-orange-500 transition-colors">About Us</a>
              <a href="#services" className="text-gray-600 hover:text-orange-500 transition-colors">What We Do</a>
              <a href="#gallery" className="text-gray-600 hover:text-orange-500 transition-colors">Gallery</a>
              <a href="#testimonials" className="text-gray-600 hover:text-orange-500 transition-colors">Testimonials</a>
              <a href="#contact" className="text-gray-600 hover:text-orange-500 transition-colors">Contact</a>
              <Button onClick={handleDonate} className="bg-orange-500 hover:bg-orange-600 text-white">
                Donate Now
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                Empowering Communities, 
                <span className="text-orange-500"> Changing Lives</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                At Human Rising Foundation, we believe every individual deserves recognition, opportunity, and hope. 
                We work tirelessly to uplift communities through education, healthcare, and sustainable development programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={handleDonate} size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                  Donate Now
                </Button>
                <Button variant="outline" size="lg" className="border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-3">
                  Get Involved
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://www.oneworld365.org/img/000/45/45199_lf.jpg" 
                alt="Community empowerment"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-4 -left-4 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">50,000+</p>
                    <p className="text-sm text-gray-600">Lives Impacted</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Our Mission</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              To create sustainable change in underserved communities by providing access to education, 
              healthcare, and economic opportunities. We believe in empowering individuals to build 
              better futures for themselves and their families, fostering dignity and self-reliance.
            </p>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-20 bg-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">About Human Rising Foundation</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded with the vision of giving every person their rightful identity and place in society, 
                Human Rising Foundation has been working for over a decade to transform lives across India.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our name "Human Rising Foundation" reflects our core belief that every individual 
                deserves recognition, respect, and the opportunity to thrive. We work at the grassroots level, 
                partnering with local communities to create lasting change.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <p className="text-3xl font-bold text-orange-500">15+</p>
                  <p className="text-gray-600">Years of Service</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <p className="text-3xl font-bold text-orange-500">200+</p>
                  <p className="text-gray-600">Volunteers</p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="/logo.png" 
                alt="About us"
                className="rounded-2xl shadow-xl w-[80%]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive programs address the root causes of poverty and inequality, 
              creating sustainable solutions for lasting change.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-orange-500" />
                </div>
                <CardTitle className="text-xl text-gray-800">Education & Skill Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Providing quality education, vocational training, and digital literacy programs 
                  to empower individuals with knowledge and skills for better opportunities.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-blue-500" />
                </div>
                <CardTitle className="text-xl text-gray-800">Healthcare & Wellness</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Ensuring access to basic healthcare services, health awareness programs, 
                  and preventive care to build healthier communities.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Utensils className="w-8 h-8 text-green-500" />
                </div>
                <CardTitle className="text-xl text-gray-800">Food & Nutrition</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Fighting hunger through food distribution programs, nutrition education, 
                  and sustainable farming initiatives in underserved communities.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery/Impact Section */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Impact in Action</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we're making a difference in communities across the region through our various programs and initiatives.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img 
                  src="https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrHaE2U4_g6LdBzgG7IMzUQvU-a7iN07IZTxJUFO5YfOCj6QwhN8OtVR8U0n388qS5wodZotp-U3gXMHxp9OMrh6KHhYlJ6rPbpfTrDccMGD5fqI8jpNrlBGRVfK-IxYl7KE5Y=s1360-w1360-h1020-rw" 
                  alt="Food Distribution Drive"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold mb-2">Food Distribution Drive</h3>
                    <p className="text-sm opacity-90">Providing nutritious meals to 500+ families weekly</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img 
                  src="https://www.csrmandate.org/wp-content/uploads/2024/05/Listicle-NGOs-for-Women-Empowerment.jpeg" 
                  alt="Women Empowerment Workshop"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold mb-2">Women Empowerment Workshop</h3>
                    <p className="text-sm opacity-90">Skills training for economic independence</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img 
                  src="https://lh3.googleusercontent.com/gps-cs-s/AC9h4npFeGTupl3ChJoDRK_zE5WCv3BaRaTyALaCpLSfyf8P0R0oX49O3NYdna-DCGMMSI8jT5iYD9tPdrtdiyaD3k2aw8iIsA7tRSc-TgHc2ylBmMy1B1DTUCkE4og3lyIWBi7r3Adv=s1360-w1360-h1020-rw" 
                  alt="Education Program"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold mb-2">Education Program</h3>
                    <p className="text-sm opacity-90">Digital literacy classes for rural children</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">What People Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from the people whose lives have been transformed through our programs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "Human Rising Foundation's vocational training program gave me the skills I needed to start my own tailoring business. 
                  Now I can support my family and have gained confidence I never had before."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-orange-600 font-semibold">P</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Priya Sharma</p>
                    <p className="text-sm text-gray-600">Skill Development Program Beneficiary</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "The healthcare camp organized by Human Rising Foundation in our village was a blessing. 
                  Free medical checkups and medicines helped so many families who couldn't afford treatment."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-semibold">R</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Rajesh Kumar</p>
                    <p className="text-sm text-gray-600">Village Volunteer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Make a Difference Today</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Your donation can transform lives and build stronger communities. 
            Every contribution, no matter the size, creates lasting impact.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <p className="text-3xl font-bold mb-2">₹500</p>
              <p className="opacity-90">Provides education materials for 5 children</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <p className="text-3xl font-bold mb-2">₹1,500</p>
              <p className="opacity-90">Supports a family's nutrition for a month</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <p className="text-3xl font-bold mb-2">₹5,000</p>
              <p className="opacity-90">Sponsors vocational training for one person</p>
            </div>
          </div>

          <Button 
            onClick={handleDonate}
            size="lg" 
            className="bg-white text-orange-500 hover:bg-gray-100 px-12 py-4 text-lg font-semibold"
          >
            Donate Now
          </Button>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Get In Touch</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Whether you want to volunteer, partner with us, or learn more about our work, 
                we'd love to hear from you. Together, we can create positive change.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Phone</p>
                    <p className="text-gray-600">+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <p className="text-gray-600">contact@humanrisingfoundation.org</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Address</p>
                    <p className="text-gray-600">123 Community Center, Delhi, India</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium text-gray-700">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-1"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-gray-700">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="mt-1 min-h-[120px]"
                      placeholder="Tell us how you'd like to get involved or any questions you have..."
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="volunteer"
                      checked={formData.wantToVolunteer}
                      onCheckedChange={handleVolunteerChange}
                    />
                    <Label htmlFor="volunteer" className="text-sm text-gray-700 cursor-pointer">
                      I want to volunteer with Human Rising Foundation
                    </Label>
                  </div>
                  
                  <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Find Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit our office in Ghaziabad, Uttar Pradesh to learn more about our work 
              and how you can get involved in our mission.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.48129308143!2d77.26687534726562!3d28.669855582031946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb159414d44d%3A0x2b50108264c59c89!2sGhaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1735806806174!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Human Rising Foundation Location - Ghaziabad, UP"
                className="w-full"
              ></iframe>
            </div>
            
            <div className="mt-8 text-center">
              <div className="flex items-center justify-center space-x-4 text-gray-600">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-orange-500" />
                  <span>Ghaziabad, Uttar Pradesh, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Human Rising Foundation</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Empowering communities and changing lives through sustainable development programs.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">What We Do</a></li>
                <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Get Involved</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Volunteer</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Donate</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partner</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sponsor</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <p>123 Community Center</p>
                <p>Ghaziabad, India</p>
                <p>+91 98765 43210</p>
                <p>contact@humanrisingfoundation.org</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Human Rising Foundation. All rights reserved. Made with ❤️ for a better tomorrow.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/7505699999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 rounded-full shadow-lg p-4 flex items-center justify-center transition-colors animate-bounce"
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="white"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487.5-.669.51-.173.008-.372.01-.571.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.709.244 1.262.389 1.694.497.712.181 1.36.156 1.872.095.571-.067 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.617h-.001a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374A9.86 9.86 0 012.1 12.868C2.073 7.551 6.659 3.004 12 3c2.652.002 5.151 1.037 7.029 2.917A9.823 9.823 0 0121.9 12.82c.027 5.317-4.559 9.865-10.021 9.179zm8.413-17.413A11.815 11.815 0 0012.004 0C5.373 0 0 5.373 0 12c0 2.121.553 4.197 1.601 6.032L.057 24l6.134-1.635A11.933 11.933 0 0012.004 24C18.627 24 24 18.627 24 12c0-2.539-.78-5.016-2.536-7.414z"/>
        </svg>
      </a>
    </div>
  );
};

export default Index;
