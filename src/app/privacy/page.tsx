'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Shield, Eye, Lock, Database, UserCheck } from 'lucide-react'

export default function PrivacyPolicy() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const goBack = () => {
    window.history.back()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">CK</span>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  CV CAHAYA KAERO
                </h1>
                <p className="text-xs text-gray-600 hidden sm:block">Privacy Policy</p>
              </div>
            </div>

            <Button onClick={() => window.location.href = '/'} variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white mr-3">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            <Button onClick={() => window.location.href = '/terms'} className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900">
              View Terms & Conditions
              <ArrowLeft className="ml-2 h-4 w-5 rotate-180" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h2>
            <p className="text-xl text-gray-600">
              Your privacy is important to <span className="font-semibold text-blue-600">CV CAHAYA KAERO</span>
            </p>
            <p className="text-sm text-gray-500 mt-2">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
            {/* Introduction */}
            <section className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                <Eye className="mr-3 h-6 w-6 text-blue-600" />
                Introduction
              </h3>
              <p className="text-gray-700 leading-relaxed">
                At CV CAHAYA KAERO, we are committed to protecting your personal information and respecting your privacy. 
                This Privacy Policy explains how we collect, use, store, and protect your information when you use our 
                website and services.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By using our website and services, you agree to the collection and use of information in accordance with this policy.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                <Database className="mr-3 h-6 w-6 text-blue-600" />
                Information We Collect
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Personal Information</h4>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    We may collect the following personal information:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li>Name and contact details (phone number, email address)</li>
                    <li>Company information and business address</li>
                    <li>Service requirements and project details</li>
                    <li>Communication records and correspondence</li>
                    <li>Payment and billing information</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Technical Information</h4>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    We automatically collect certain technical information when you visit our website:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li>IP address and browser type</li>
                    <li>Device information and operating system</li>
                    <li>Pages visited and time spent on our website</li>
                    <li>Referring website and search terms</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                <UserCheck className="mr-3 h-6 w-6 text-blue-600" />
                How We Use Your Information
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                We use your information for the following purposes:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Service Delivery</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Provide industrial solutions</li>
                    <li>• Process service requests</li>
                    <li>• Schedule consultations</li>
                    <li>• Deliver project updates</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Communication</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Respond to inquiries</li>
                    <li>• Send service updates</li>
                    <li>• Provide technical support</li>
                    <li>• Share relevant information</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Business Operations</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Process payments</li>
                    <li>• Maintain records</li>
                    <li>• Improve services</li>
                    <li>• Legal compliance</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Marketing</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Send newsletters (with consent)</li>
                    <li>• Promote new services</li>
                    <li>• Share company updates</li>
                    <li>• Conduct market research</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Data Protection */}
            <section className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                <Lock className="mr-3 h-6 w-6 text-blue-600" />
                Data Protection and Security
              </h3>
              
              <p className="text-gray-700 leading-relaxed">
                CV CAHAYA KAERO implements appropriate technical and organizational measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Secure servers and encrypted data transmission</li>
                <li>Restricted access to personal information</li>
                <li>Regular security assessments and updates</li>
                <li>Employee training on data protection</li>
                <li>Secure data storage and backup systems</li>
              </ul>
            </section>

            {/* Your Rights */}
            <section className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Your Rights</h3>
              
              <p className="text-gray-700 leading-relaxed">
                Under applicable data protection laws, you have the following rights:
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 text-xs font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Access</h4>
                    <p className="text-gray-600 text-sm">Request access to your personal information</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 text-xs font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Correction</h4>
                    <p className="text-gray-600 text-sm">Request correction of inaccurate information</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 text-xs font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Deletion</h4>
                    <p className="text-gray-600 text-sm">Request deletion of your personal information</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 text-xs font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Portability</h4>
                    <p className="text-gray-600 text-sm">Request transfer of your data to another service</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Cookies */}
            <section className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Cookies</h3>
              
              <p className="text-gray-700 leading-relaxed">
                Our website uses cookies and similar tracking technologies to enhance your experience. Cookies are 
                small text files stored on your device that help us:
              </p>
              
              <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Provide personalized content and recommendations</li>
                <li>Improve website functionality and performance</li>
              </ul>
              
              <p className="text-gray-700 leading-relaxed">
                You can control cookies through your browser settings, but disabling cookies may affect website functionality.
              </p>
            </section>

            {/* Third-Party Links */}
            <section className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Third-Party Links</h3>
              
              <p className="text-gray-700 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices 
                of these external sites. We encourage you to review the privacy policies of any third-party websites you visit.
              </p>
            </section>

            {/* Policy Updates */}
            <section className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Policy Updates</h3>
              
              <p className="text-gray-700 leading-relaxed">
                CV CAHAYA KAERO may update this Privacy Policy from time to time. We will notify you of any significant 
                changes by posting the updated policy on our website and updating the "Last updated" date.
              </p>
            </section>

            {/* Contact Information */}
            <section className="space-y-4 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900">Contact Us</h3>
              
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about this Privacy Policy or how we handle your personal information, 
                please contact us:
              </p>
              
              <div className="space-y-2 text-gray-600">
                <p><strong>Company:</strong> CV CAHAYA KAERO</p>
                <p><strong>Address:</strong> JLN. BANDARA BARU NO.36, Kel. Sudiang, Kec. Biringkanaya, Kota Makassar, Prov. Sulawesi Selatan, 90242</p>
                <p><strong>Phone:</strong> 087729887778</p>
                <p><strong>Email:</strong> privacy@cahayakaero.com</p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}