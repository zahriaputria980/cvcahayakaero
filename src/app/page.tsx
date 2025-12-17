'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Menu, X, Phone, Mail, MapPin, ArrowRight, CheckCircle, TrendingUp, Award, Users } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  const navigateToPage = (page: string) => {
    window.location.href = page
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">CK</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  CV CAHAYA KAERO
                </h1>
                <p className="text-xs text-gray-600 hidden sm:block">Professional Industrial Solutions</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Services</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</button>
              <Button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900">
                Get Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-3 mt-4">
                <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left py-2">Home</button>
                <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left py-2">About</button>
                <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left py-2">Services</button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left py-2">Contact</button>
                <Button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 w-full">
                  Get Quote
                </Button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Welcome to
                  <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mt-2">
                    CV CAHAYA KAERO
                  </span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Your trusted partner for professional industrial solutions. We deliver excellence, innovation, and reliability in every project we undertake.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => scrollToSection('contact')} 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-8 py-4 text-lg"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  onClick={() => scrollToSection('services')} 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg"
                >
                  Our Services
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">50+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">10+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">100%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/logo.png"
                  alt="CV CAHAYA KAERO Logo"
                  width={500}
                  height={500}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">About <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">CV CAHAYA KAERO</span></h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A leading industrial solutions provider committed to delivering excellence and innovation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                CV CAHAYA KAERO is a distinguished company specializing in industrial solutions and services. 
                With our headquarters strategically located in Makassar, we serve clients across various industries 
                with professionalism and dedication.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our commitment to quality, innovation, and customer satisfaction has established us as a trusted 
                partner in the industrial sector. We combine technical expertise with practical solutions to meet 
                the evolving needs of our clients.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Quality Assurance</h4>
                    <p className="text-sm text-gray-600">International standards compliance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <TrendingUp className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Growth Focused</h4>
                    <p className="text-sm text-gray-600">Driving business success</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Expert Team</h4>
                    <p className="text-sm text-gray-600">Skilled professionals</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-purple-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Client Centric</h4>
                    <p className="text-sm text-gray-600">Your success is our priority</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
              <CardContent className="space-y-6">
                <h4 className="text-2xl font-bold text-gray-900 mb-6">Our Information</h4>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-semibold text-gray-900">Address</p>
                      <p className="text-gray-600">JLN. BANDARA BARU NO.36, Kel. Sudiang, Kec. Biringkanaya, Kota Makassar, Prov. Sulawesi Selatan</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <p className="text-gray-600">087729887778</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600">info@cahayakaero.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-semibold text-gray-900">Postal Code</p>
                      <p className="text-gray-600">90242</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive industrial solutions tailored to your specific needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-xl transition-shadow duration-300 bg-white border-blue-100">
              <CardContent className="space-y-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-7 w-7 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">Industrial Consulting</h4>
                <p className="text-gray-600">Expert consulting services to optimize your industrial processes and improve efficiency.</p>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow duration-300 bg-white border-blue-100">
              <CardContent className="space-y-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <Award className="h-7 w-7 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">Quality Management</h4>
                <p className="text-gray-600">Comprehensive quality control and assurance solutions for industrial operations.</p>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow duration-300 bg-white border-blue-100">
              <CardContent className="space-y-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <Users className="h-7 w-7 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">Project Management</h4>
                <p className="text-gray-600">Professional project management services ensuring timely and successful delivery.</p>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow duration-300 bg-white border-blue-100">
              <CardContent className="space-y-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-7 w-7 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">Technical Support</h4>
                <p className="text-gray-600">24/7 technical support and maintenance services for all industrial equipment.</p>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow duration-300 bg-white border-blue-100">
              <CardContent className="space-y-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-7 w-7 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">Supply Chain Solutions</h4>
                <p className="text-gray-600">Efficient supply chain management and logistics optimization services.</p>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow duration-300 bg-white border-blue-100">
              <CardContent className="space-y-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <Award className="h-7 w-7 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">Training & Development</h4>
                <p className="text-gray-600">Professional training programs to enhance workforce skills and capabilities.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Contact <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">CV CAHAYA KAERO</span></h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with us for your industrial solution needs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
                <CardContent className="space-y-6">
                  <h4 className="text-2xl font-bold text-gray-900">Get in Touch</h4>
                  <p className="text-gray-600">
                    Ready to discuss your industrial solution requirements? Our team is here to help you achieve your goals.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700">087729887778</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700">info@cahayakaero.com</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                      <span className="text-gray-700">JLN. BANDARA BARU NO.36, Kel. Sudiang, Kec. Biringkanaya, Kota Makassar, Prov. Sulawesi Selatan, 90242</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                <CardContent className="space-y-4">
                  <h4 className="text-xl font-bold text-gray-900">Business Hours</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday</span>
                      <span className="font-semibold text-gray-900">08:00 - 17:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday</span>
                      <span className="font-semibold text-gray-900">08:00 - 12:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday</span>
                      <span className="font-semibold text-gray-900">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="p-8">
              <CardContent className="space-y-6">
                <h4 className="text-2xl font-bold text-gray-900">Send us a Message</h4>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Interest</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Select a service</option>
                      <option>Industrial Consulting</option>
                      <option>Quality Management</option>
                      <option>Project Management</option>
                      <option>Technical Support</option>
                      <option>Supply Chain Solutions</option>
                      <option>Training & Development</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"></textarea>
                  </div>
                  
                  <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white py-3 text-lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">CK</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold">CV CAHAYA KAERO</h4>
                  <p className="text-xs text-gray-300">Professional Industrial Solutions</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                Your trusted partner for professional industrial solutions and services.
              </p>
            </div>

            <div className="space-y-4">
              <h5 className="font-semibold text-lg">Quick Links</h5>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('home')} className="block text-gray-300 hover:text-white transition-colors">Home</button>
                <button onClick={() => scrollToSection('about')} className="block text-gray-300 hover:text-white transition-colors">About</button>
                <button onClick={() => scrollToSection('services')} className="block text-gray-300 hover:text-white transition-colors">Services</button>
                <button onClick={() => scrollToSection('contact')} className="block text-gray-300 hover:text-white transition-colors">Contact</button>
              </div>
            </div>

            <div className="space-y-4">
              <h5 className="font-semibold text-lg">Services</h5>
              <div className="space-y-2">
                <button className="block text-gray-300 hover:text-white transition-colors">Industrial Consulting</button>
                <button className="block text-gray-300 hover:text-white transition-colors">Quality Management</button>
                <button className="block text-gray-300 hover:text-white transition-colors">Project Management</button>
                <button className="block text-gray-300 hover:text-white transition-colors">Technical Support</button>
              </div>
            </div>

            <div className="space-y-4">
              <h5 className="font-semibold text-lg">Contact Info</h5>
              <div className="space-y-2 text-gray-300 text-sm">
                <p>JLN. BANDARA BARU NO.36</p>
                <p>Kota Makassar, Sulawesi Selatan</p>
                <p>Kode Pos: 90242</p>
                <p>Phone: 087729887778</p>
                <p>Email: info@cahayakaero.com</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 CV CAHAYA KAERO. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <button onClick={() => navigateToPage('/privacy')} className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</button>
                <button onClick={() => navigateToPage('/terms')} className="text-gray-400 hover:text-white transition-colors text-sm">Terms & Conditions</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}