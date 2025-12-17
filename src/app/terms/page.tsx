'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowLeft, FileText, AlertCircle, CheckCircle, Scale, Users, Shield } from 'lucide-react'

export default function TermsAndConditions() {
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
                <p className="text-xs text-gray-600 hidden sm:block">Terms and Conditions</p>
              </div>
            </div>

            <Button onClick={() => window.location.href = '/'} variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white mr-3">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            <Button onClick={() => window.location.href = '/privacy'} className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900">
              View Privacy Policy
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
              <FileText className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Terms and Conditions</h2>
            <p className="text-xl text-gray-600">
              Legal terms for using <span className="font-semibold text-blue-600">CV CAHAYA KAERO</span> services
            </p>
            <p className="text-sm text-gray-500 mt-2">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
            {/* Agreement to Terms */}
            <section className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                <CheckCircle className="mr-3 h-6 w-6 text-blue-600" />
                Agreement to Terms
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Welcome to CV CAHAYA KAERO. These Terms and Conditions ("Terms") govern your access to and use of our 
                website, services, and products (collectively, "Services"). By accessing or using our Services, you 
                agree to be bound by these Terms.
              </p>
              <p className="text-gray-700 leading-relaxed">
                If you do not agree to these Terms, you may not access or use our Services.
              </p>
            </section>

            {/* Company Information */}
            <section className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                <Users className="mr-3 h-6 w-6 text-blue-600" />
                Company Information
              </h3>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Company Details</h4>
                    <div className="space-y-1 text-gray-600">
                      <p><strong>Company Name:</strong> CV CAHAYA KAERO</p>
                      <p><strong>Address:</strong> JLN. BANDARA BARU NO.36</p>
                      <p><strong>Kelurahan:</strong> Sudiang</p>
                      <p><strong>Kecamatan:</strong> Biringkanaya</p>
                      <p><strong>Kota:</strong> Makassar</p>
                      <p><strong>Provinsi:</strong> Sulawesi Selatan</p>
                      <p><strong>Kode Pos:</strong> 90242</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Contact Information</h4>
                    <div className="space-y-1 text-gray-600">
                      <p><strong>Telephone:</strong> 087729887778</p>
                      <p><strong>Email:</strong> info@cahayakaero.com</p>
                      <p><strong>Business Hours:</strong></p>
                      <p>Monday - Friday: 08:00 - 17:00</p>
                      <p>Saturday: 08:00 - 12:00</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Services Description */}
            <section className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Services Description</h3>
              
              <p className="text-gray-700 leading-relaxed">
                CV CAHAYA KAERO provides professional industrial solutions including but not limited to:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Consulting Services</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Industrial consulting</li>
                    <li>• Process optimization</li>
                    <li>• Quality management</li>
                    <li>• Technical support</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Project Services</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Project management</li>
                    <li>• Supply chain solutions</li>
                    <li>• Training & development</li>
                    <li>• Maintenance services</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* User Responsibilities */}
            <section className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                <AlertCircle className="mr-3 h-6 w-6 text-blue-600" />
                User Responsibilities
              </h3>
              
              <p className="text-gray-700 leading-relaxed">
                As a user of our Services, you agree to:
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 text-xs font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Provide Accurate Information</h4>
                    <p className="text-gray-600 text-sm">Ensure all information provided is true, accurate, and complete</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 text-xs font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Maintain Confidentiality</h4>
                    <p className="text-gray-600 text-sm">Protect your account credentials and sensitive information</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 text-xs font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Comply with Laws</h4>
                    <p className="text-gray-600 text-sm">Use our Services in compliance with applicable laws and regulations</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 text-xs font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Professional Conduct</h4>
                    <p className="text-gray-600 text-sm">Interact with our staff and representatives professionally</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Payment Terms */}
            <section className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Payment Terms</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Pricing</h4>
                  <p className="text-gray-700 leading-relaxed">
                    All prices for our Services are quoted in Indonesian Rupiah (IDR) and are exclusive of applicable taxes 
                    unless otherwise specified. We reserve the right to modify our prices at any time with prior notice.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Payment Methods</h4>
                  <p className="text-gray-700 leading-relaxed">
                    We accept various payment methods including bank transfers, cash, and other agreed-upon payment methods. 
                    Payment terms will be specified in individual service agreements.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Late Payments</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Late payments may be subject to interest charges and may result in suspension of Services. 
                    We will provide reasonable notice before taking such action.
                  </p>
                </div>
              </div>
            </section>

            {/* Intellectual Property */}
            <section className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                <Shield className="mr-3 h-6 w-6 text-blue-600" />
                Intellectual Property
              </h3>
              
              <p className="text-gray-700 leading-relaxed">
                All content, materials, and intellectual property related to our Services, including but not limited to 
                trademarks, logos, software, documentation, and methodologies, are owned by CV CAHAYA KAERO or our licensors 
                and are protected by applicable intellectual property laws.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                You may not use, copy, reproduce, or distribute our intellectual property without prior written consent 
                from CV CAHAYA KAERO.
              </p>
            </section>

            {/* Confidentiality */}
            <section className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Confidentiality</h3>
              
              <p className="text-gray-700 leading-relaxed">
                Both parties agree to maintain the confidentiality of all proprietary and sensitive information shared 
                during the course of our business relationship. This includes but is not limited to:
              </p>
              
              <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                <li>Business strategies and plans</li>
                <li>Technical information and processes</li>
                <li>Financial information</li>
                <li>Customer and supplier information</li>
                <li>Any information marked as confidential</li>
              </ul>
            </section>

            {/* Limitation of Liability */}
            <section className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                <Scale className="mr-3 h-6 w-6 text-blue-600" />
                Limitation of Liability
              </h3>
              
              <p className="text-gray-700 leading-relaxed">
                To the maximum extent permitted by law, CV CAHAYA KAERO shall not be liable for any indirect, incidental, 
                special, or consequential damages arising from your use of our Services.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Our total liability for any claims related to our Services shall not exceed the amount paid by you for 
                the specific service giving rise to the claim.
              </p>
            </section>

            {/* Termination */}
            <section className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Termination</h3>
              
              <p className="text-gray-700 leading-relaxed">
                Either party may terminate the service agreement with written notice. Upon termination, you shall pay 
                all outstanding fees for services rendered up to the termination date.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                CV CAHAYA KAERO reserves the right to immediately terminate Services for violations of these Terms 
                or for any other reason deemed necessary to protect our business interests.
              </p>
            </section>

            {/* Dispute Resolution */}
            <section className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Dispute Resolution</h3>
              
              <p className="text-gray-700 leading-relaxed">
                Any disputes arising from these Terms or our Services shall be resolved through good faith negotiations 
                between the parties. If disputes cannot be resolved amicably, they shall be subject to the jurisdiction 
                of the courts in Makassar, Sulawesi Selatan.
              </p>
            </section>

            {/* Governing Law */}
            <section className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Governing Law</h3>
              
              <p className="text-gray-700 leading-relaxed">
                These Terms and Conditions shall be governed by and construed in accordance with the laws of the 
                Republic of Indonesia, without regard to its conflict of law principles.
              </p>
            </section>

            {/* Changes to Terms */}
            <section className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Changes to Terms</h3>
              
              <p className="text-gray-700 leading-relaxed">
                CV CAHAYA KAERO reserves the right to modify these Terms at any time. Changes will be effective 
                immediately upon posting on our website. Your continued use of our Services constitutes acceptance 
                of the modified Terms.
              </p>
            </section>

            {/* Contact Information */}
            <section className="space-y-4 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900">Contact Us</h3>
              
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              
              <div className="space-y-2 text-gray-600">
                <p><strong>Company:</strong> CV CAHAYA KAERO</p>
                <p><strong>Address:</strong> JLN. BANDARA BARU NO.36, Kel. Sudiang, Kec. Biringkanaya, Kota Makassar, Prov. Sulawesi Selatan, 90242</p>
                <p><strong>Phone:</strong> 087729887778</p>
                <p><strong>Email:</strong> legal@cahayakaero.com</p>
              </div>
            </section>

            {/* Agreement Confirmation */}
            <section className="space-y-4 border-t-2 border-blue-200 pt-6">
              <div className="text-center">
                <p className="text-gray-700 leading-relaxed">
                  By using the Services of CV CAHAYA KAERO, you acknowledge that you have read, understood, 
                  and agree to be bound by these Terms and Conditions.
                </p>
                <div className="mt-6 inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-semibold">I Agree to These Terms</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}