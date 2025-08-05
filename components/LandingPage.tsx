"use client"

import {
  ArrowRight,
  BarChart3,
  Calendar,
  Globe,
  Handshake,
  Leaf,
  MapPin,
  MessageCircle,
  Shield,
  Smartphone, Star,
  TrendingUp,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from "react"

export default function BFPCLanding() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const heroImages = [
    "/images/farmer-hero.jpg",
    "/images/woman-farmer-corn.jpg",
    "/images/banana-harvest.jpg",
    "/images/yam-market.jpg",
    "/images/cassava-farmer.jpg",
  ]

    const testimonials = [
    {
      name: "Amina Ibrahim",
      location: "Makurdi, Benue State",
      crop: "Rice Farmer",
      quote: "BFPC helped me increase my rice yield by 40% using their soil analysis and fertilizer recommendations.",
      rating: 5,
    },
    {
      name: "Joseph Terver",
      location: "Gboko, Benue State",
      crop: "Yam Farmer",
      quote: "The market price alerts saved me from selling my yams too early. I made 60% more profit this season!",
      rating: 5,
    },
    {
      name: "Grace Oche",
      location: "Otukpo, Benue State",
      crop: "Cassava Farmer",
      quote: "The weather forecasts are so accurate. I can now plan my farming activities better and avoid losses.",
      rating: 5,
    },
  ]

  const stats = [
    { number: "50,000+", label: "Active Farmers" },
    { number: "₦2.5B+", label: "Revenue Generated" },
    { number: "23", label: "Local Government Areas" },
    { number: "95%", label: "Farmer Satisfaction" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [heroImages.length])

  return (
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="bg-white border-b border-green-100 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-2">
                <Leaf className="h-8 w-8 text-green-600" />
                <span className="text-xl font-bold text-green-800">BFPC</span>
              </div>
              <div className="hidden md:flex space-x-8">
                <a href="#features" className="text-green-700 hover:text-green-900 transition-colors">
                  Features
                </a>
                <a href="#about" className="text-green-700 hover:text-green-900 transition-colors">
                  About
                </a>
                <a href="#partnerships" className="text-green-700 hover:text-green-900 transition-colors">
                  Partners
                </a>
                <a href="#contact" className="text-green-700 hover:text-green-900 transition-colors">
                  Contact
                </a>
              </div>
              <Button className="bg-green-600 hover:bg-green-700 text-white">Get Started</Button>
            </div>
          </div>
        </nav>

        {/* Hero Section with Image Slideshow */}
        <section className="relative bg-white  py-20 lg:py-32 overflow-hidden">
          {/* Background Image Slideshow */}
          <div className="absolute inset-0 z-0">
            {heroImages.map((image, index) => (
                <img
                    key={index}
                    src={image || "/placeholder.svg"}
                    alt={`Nigerian agriculture ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                        index === currentImageIndex ? "opacity-100" : "opacity-0"
                    }`}
                />
            ))}
            <div className="absolute inset-0 bg-white/70"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-green-900 leading-tight">
                    Empowering Farmers in <span className="text-green-600">Benue State</span>
                  </h1>
                  <p className="text-lg sm:text-xl text-green-800 leading-relaxed font-medium">
                    A digital and on-the-ground agricultural empowerment platform designed to improve agricultural yield
                    and economic outcomes for farmers across Benue State and beyond.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white shadow-lg">
                    Join BFPC Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                      size="lg"
                      variant="outline"
                      className="border-green-600 text-green-600 hover:bg-green-50 bg-white/80 backdrop-blur-sm"
                  >
                    Learn More
                  </Button>
                </div>
                <div className="grid grid-cols-3 gap-8 pt-8">
                  <div className="text-center bg-white/80 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-800">10K+</div>
                    <div className="text-sm text-green-600">Active Farmers</div>
                  </div>
                  <div className="text-center bg-white/80 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-800">25%</div>
                    <div className="text-sm text-green-600">Yield Increase</div>
                  </div>
                  <div className="text-center bg-white/80 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-800">500+</div>
                    <div className="text-sm text-green-600">Market Connections</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-green-100 shadow-xl">
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="border-green-200 bg-white/95">
                      <CardContent className="p-4">
                        <TrendingUp className="h-8 w-8 text-green-600 mb-2" />
                        <div className="text-sm font-medium text-green-800">Yield Analytics</div>
                      </CardContent>
                    </Card>
                    <Card className="border-green-200 bg-white/95">
                      <CardContent className="p-4">
                        <Globe className="h-8 w-8 text-green-600 mb-2" />
                        <div className="text-sm font-medium text-green-800">Market Access</div>
                      </CardContent>
                    </Card>
                    <Card className="border-green-200 bg-white/95">
                      <CardContent className="p-4">
                        <Users className="h-8 w-8 text-green-600 mb-2" />
                        <div className="text-sm font-medium text-green-800">Community</div>
                      </CardContent>
                    </Card>
                    <Card className="border-green-200 bg-white/95">
                      <CardContent className="p-4">
                        <Calendar className="h-8 w-8 text-green-600 mb-2" />
                        <div className="text-sm font-medium text-green-800">Live Programs</div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slideshow Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
            {heroImages.map((_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentImageIndex ? "bg-green-600" : "bg-white/50"
                    }`}
                />
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mb-4">Comprehensive Agricultural Solutions</h2>
              <p className="text-lg text-green-700 max-w-3xl mx-auto">
                From personalized farming insights to direct market connections, BFPC provides everything farmers need to
                succeed.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <BarChart3 className="h-10 w-10 text-green-600 mb-2" />
                  <CardTitle className="text-green-900">Farmer Dashboard</CardTitle>
                  <CardDescription className="text-green-600">
                    Personalized dashboard showing farm goals, crops, training recommendations, and buyer leads.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <TrendingUp className="h-10 w-10 text-green-600 mb-2" />
                  <CardTitle className="text-green-900">Yield Optimization</CardTitle>
                  <CardDescription className="text-green-600">
                    Customized farming tips using local climate data, best practices, and soil analysis.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Globe className="h-10 w-10 text-green-600 mb-2" />
                  <CardTitle className="text-green-900">Market Monitor</CardTitle>
                  <CardDescription className="text-green-600">
                    Real-time price trends and demand analysis with alerts on fast-moving crops.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Calendar className="h-10 w-10 text-green-600 mb-2" />
                  <CardTitle className="text-green-900">Live Program Feed</CardTitle>
                  <CardDescription className="text-green-600">
                    Calendar with reminders for government programs, grants, and agricultural events.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Handshake className="h-10 w-10 text-green-600 mb-2" />
                  <CardTitle className="text-green-900">Buyer Marketplace</CardTitle>
                  <CardDescription className="text-green-600">
                    Secure buyer-seller connections with verified listings and escrow payments.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Users className="h-10 w-10 text-green-600 mb-2" />
                  <CardTitle className="text-green-900">Community Support</CardTitle>
                  <CardDescription className="text-green-600">
                    Farmer groups by LGA for collaboration with multilingual chat support.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl font-bold text-green-900">Our Mission & Vision</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-green-700">
                      <strong>Increase annual crop yields</strong> by disseminating timely farming techniques and best
                      practices.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-green-700">
                      <strong>Connect farmers directly</strong> with verified buyers and processing companies for better
                      market access.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-green-700">
                      <strong>Provide data analytics</strong> to measure how farming practices and events influence yield
                      outcomes.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-green-700">
                      <strong>Empower farmers</strong> through sponsored conference attendance and professional
                      development opportunities.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-green-900 mb-6">Target Users</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-green-600" />
                    <span className="text-green-700">Smallholder and mid-scale farmers in Benue</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-green-600" />
                    <span className="text-green-700">Agricultural extension officers</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-green-600" />
                    <span className="text-green-700">NGOs and government partners</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Handshake className="h-5 w-5 text-green-600" />
                    <span className="text-green-700">Buyers and food processing companies</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Testimonials Section */}
               <section id="testimonials" className="py-20 bg-white">
                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                   <div className="text-center mb-16">
                     <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Farmers Are Saying</h2>
                     <p className="text-xl text-gray-600">
                      Real stories from farmers who have transformed their operations with BFPC
                     </p>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                     {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-green-100">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.crop}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

        {/* Partnerships Section */}
        <section id="partnerships" className="py-20 bg-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mb-4">Trusted Partnerships</h2>
              <p className="text-lg text-green-700 max-w-3xl mx-auto">
                We collaborate with leading organizations to provide comprehensive support to farmers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <h3 className="font-semibold text-green-900 mb-2">Government</h3>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>Federal Ministry of Agriculture</li>
                  <li>Benue State Ministry of Agriculture</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <h3 className="font-semibold text-green-900 mb-2">International</h3>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>IFAD</li>
                  <li>FAO</li>
                  <li>USAID Feed the Future</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <h3 className="font-semibold text-green-900 mb-2">Agribusiness</h3>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>AgroMall</li>
                  <li>Thrive Agric</li>
                  <li>Hello Tractor</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <h3 className="font-semibold text-green-900 mb-2">Academic</h3>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>University of Agriculture, Makurdi</li>
                  <li>Local cooperatives</li>
                  <li>Commodity boards</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Transform Your Farming?</h2>
            <p className="text-xl text-green-100 mb-8">
              Join thousands of farmers already benefiting from BFPC's comprehensive agricultural platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-green-50">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
              >
                Schedule a Demo
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="bg-green-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Leaf className="h-8 w-8 text-green-400" />
                  <span className="text-xl font-bold">BFPC</span>
                </div>
                <p className="text-green-200">
                  Empowering farmers across Benue State with digital agricultural solutions.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Platform</h3>
                <ul className="space-y-2 text-green-200">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Mobile App
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Support</h3>
                <ul className="space-y-2 text-green-200">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Community
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-2 text-green-200">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Partnerships
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-green-800 mt-8 pt-8 text-center text-green-200">
              <p>&copy; 2024 Benue Farmers Peace Corps. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
  )
}


// "use client"
//
// import { useState, useEffect } from "react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import {
//   Leaf,
//   Users,
//   TrendingUp,
//   Shield,
//   Smartphone,
//   Globe,
//   ArrowRight,
//   CheckCircle,
//   Star,
//   Menu,
//   X,
//   Phone,
//   Mail,
//   MapPin,
//   Facebook,
//   Twitter,
//   Instagram,
//   Youtube,
// } from "lucide-react"
// import Link from "next/link"
// import Image from "next/image"
//
// export default function LandingPage() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const [currentSlide, setCurrentSlide] = useState(0)
//
//   const heroSlides = [
//     {
//       image: "/images/farmer-hero.jpg",
//       title: "Empowering Farmers Through Technology",
//       subtitle: "Join thousands of farmers in Benue State using modern techniques to increase yields and profits",
//     },
//     {
//       image: "/images/woman-farmer-corn.jpg",
//       title: "Smart Farming Solutions",
//       subtitle: "Access real-time weather data, soil analysis, and crop management tools",
//     },
//     {
//       image: "/images/banana-harvest.jpg",
//       title: "Connect with Markets",
//       subtitle: "Get the best prices for your produce through our marketplace platform",
//     },
//   ]
//
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
//     }, 5000)
//     return () => clearInterval(timer)
//   }, [heroSlides.length])
//
//   const features = [
//     {
//       icon: <Smartphone className="h-8 w-8 text-green-600" />,
//       title: "Mobile-First Platform",
//       description: "Access all tools from your smartphone, even with limited internet connectivity",
//     },
//     {
//       icon: <TrendingUp className="h-8 w-8 text-green-600" />,
//       title: "Market Intelligence",
//       description: "Real-time crop prices, demand forecasts, and market trends",
//     },
//     {
//       icon: <Users className="h-8 w-8 text-green-600" />,
//       title: "Farmer Community",
//       description: "Connect with fellow farmers, share experiences, and learn together",
//     },
//     {
//       icon: <Shield className="h-8 w-8 text-green-600" />,
//       title: "Crop Protection",
//       description: "Early warning systems for pests, diseases, and weather conditions",
//     },
//     {
//       icon: <Globe className="h-8 w-8 text-green-600" />,
//       title: "Weather Insights",
//       description: "Localized weather forecasts and agricultural advisories",
//     },
//     {
//       icon: <Leaf className="h-8 w-8 text-green-600" />,
//       title: "Sustainable Practices",
//       description: "Learn eco-friendly farming methods that protect the environment",
//     },
//   ]
//
//   const testimonials = [
//     {
//       name: "Amina Ibrahim",
//       location: "Makurdi, Benue State",
//       crop: "Rice Farmer",
//       quote: "BFPC helped me increase my rice yield by 40% using their soil analysis and fertilizer recommendations.",
//       rating: 5,
//     },
//     {
//       name: "Joseph Terver",
//       location: "Gboko, Benue State",
//       crop: "Yam Farmer",
//       quote: "The market price alerts saved me from selling my yams too early. I made 60% more profit this season!",
//       rating: 5,
//     },
//     {
//       name: "Grace Oche",
//       location: "Otukpo, Benue State",
//       crop: "Cassava Farmer",
//       quote: "The weather forecasts are so accurate. I can now plan my farming activities better and avoid losses.",
//       rating: 5,
//     },
//   ]
//
//   const stats = [
//     { number: "50,000+", label: "Active Farmers" },
//     { number: "₦2.5B+", label: "Revenue Generated" },
//     { number: "23", label: "Local Government Areas" },
//     { number: "95%", label: "Farmer Satisfaction" },
//   ]
//
//   return (
//     <div className="min-h-screen bg-white">
//       {/* Navigation */}
//       <nav className="bg-white shadow-sm border-b border-green-100 sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <div className="flex items-center space-x-2">
//               <Leaf className="h-8 w-8 text-green-600" />
//               <span className="text-xl font-bold text-green-900">BFPC</span>
//             </div>
//
//             {/* Desktop Navigation */}
//             <div className="hidden md:flex items-center space-x-8">
//               <a href="#features" className="text-gray-700 hover:text-green-600 transition-colors">
//                 Features
//               </a>
//               <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors">
//                 About
//               </a>
//               <a href="#testimonials" className="text-gray-700 hover:text-green-600 transition-colors">
//                 Testimonials
//               </a>
//               <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">
//                 Contact
//               </a>
//               <Link href="/login">
//                 <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent">
//                   Sign In
//                 </Button>
//               </Link>
//               <Link href="/signup">
//                 <Button className="bg-green-600 hover:bg-green-700">Join BFPC</Button>
//               </Link>
//             </div>
//
//             {/* Mobile menu button */}
//             <div className="md:hidden">
//               <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-green-600">
//                 {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//               </button>
//             </div>
//           </div>
//
//           {/* Mobile Navigation */}
//           {isMenuOpen && (
//             <div className="md:hidden py-4 border-t border-green-100">
//               <div className="flex flex-col space-y-4">
//                 <a href="#features" className="text-gray-700 hover:text-green-600 transition-colors">
//                   Features
//                 </a>
//                 <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors">
//                   About
//                 </a>
//                 <a href="#testimonials" className="text-gray-700 hover:text-green-600 transition-colors">
//                   Testimonials
//                 </a>
//                 <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">
//                   Contact
//                 </a>
//                 <div className="flex flex-col space-y-2 pt-4">
//                   <Link href="/login">
//                     <Button
//                       variant="outline"
//                       className="w-full border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
//                     >
//                       Sign In
//                     </Button>
//                   </Link>
//                   <Link href="/signup">
//                     <Button className="w-full bg-green-600 hover:bg-green-700">Join BFPC</Button>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </nav>
//
//       {/* Hero Section */}
//       <section className="relative h-screen flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 z-0">
//           <Image
//             src={heroSlides[currentSlide].image || "/placeholder.svg?height=1080&width=1920"}
//             alt="Hero background"
//             fill
//             className="object-cover"
//             priority
//           />
//           <div className="absolute inset-0 bg-black bg-opacity-50"></div>
//         </div>
//
//         <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
//           <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">{heroSlides[currentSlide].title}</h1>
//           <p className="text-xl md:text-2xl mb-8 animate-fade-in-delay">{heroSlides[currentSlide].subtitle}</p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
//             <Link href="/signup">
//               <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3">
//                 Get Started Free
//                 <ArrowRight className="ml-2 h-5 w-5" />
//               </Button>
//             </Link>
//             <Button
//               size="lg"
//               variant="outline"
//               className="text-white border-white hover:bg-white hover:text-green-900 text-lg px-8 py-3 bg-transparent"
//             >
//               Watch Demo
//             </Button>
//           </div>
//         </div>
//
//         {/* Slide indicators */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
//           {heroSlides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentSlide(index)}
//               className={`w-3 h-3 rounded-full transition-colors ${
//                 index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
//               }`}
//             />
//           ))}
//         </div>
//       </section>
//
//       {/* Stats Section */}
//       <section className="py-16 bg-green-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center">
//                 <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">{stat.number}</div>
//                 <div className="text-gray-600">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//
//       {/* Features Section */}
//       <section id="features" className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Everything You Need to Farm Smarter</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Our comprehensive platform provides all the tools and resources you need to maximize your farming
//               potential
//             </p>
//           </div>
//
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {features.map((feature, index) => (
//               <Card key={index} className="border-green-100 hover:shadow-lg transition-shadow">
//                 <CardHeader>
//                   <div className="mb-4">{feature.icon}</div>
//                   <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <CardDescription className="text-gray-600">{feature.description}</CardDescription>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>
//
//       {/* About Section */}
//       <section id="about" className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Benue Farmers Peace Corps</h2>
//               <p className="text-lg text-gray-600 mb-6">
//                 Founded in 2020, BFPC is dedicated to transforming agriculture in Benue State through technology,
//                 education, and community building. We believe that every farmer deserves access to modern tools and
//                 knowledge to succeed.
//               </p>
//               <div className="space-y-4">
//                 <div className="flex items-start space-x-3">
//                   <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
//                   <div>
//                     <h3 className="font-semibold text-gray-900">Technology-Driven Solutions</h3>
//                     <p className="text-gray-600">Leveraging mobile technology to reach farmers in remote areas</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-3">
//                   <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
//                   <div>
//                     <h3 className="font-semibold text-gray-900">Community-Centered Approach</h3>
//                     <p className="text-gray-600">Building strong networks of farmers who support each other</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-3">
//                   <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
//                   <div>
//                     <h3 className="font-semibold text-gray-900">Sustainable Practices</h3>
//                     <p className="text-gray-600">Promoting environmentally friendly farming methods</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="relative">
//               <Image
//                 src="/images/cassava-farmer.jpg"
//                 alt="Farmer working in field"
//                 width={600}
//                 height={400}
//                 className="rounded-lg shadow-lg"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//
//       {/* Testimonials Section */}
//       <section id="testimonials" className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Farmers Are Saying</h2>
//             <p className="text-xl text-gray-600">
//               Real stories from farmers who have transformed their operations with BFPC
//             </p>
//           </div>
//
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <Card key={index} className="border-green-100">
//                 <CardContent className="p-6">
//                   <div className="flex items-center mb-4">
//                     {[...Array(testimonial.rating)].map((_, i) => (
//                       <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
//                     ))}
//                   </div>
//                   <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
//                   <div>
//                     <div className="font-semibold text-gray-900">{testimonial.name}</div>
//                     <div className="text-sm text-gray-500">{testimonial.crop}</div>
//                     <div className="text-sm text-gray-500">{testimonial.location}</div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>
//
//       {/* CTA Section */}
//       <section className="py-20 bg-green-600">
//         <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Farm?</h2>
//           <p className="text-xl text-green-100 mb-8">
//             Join thousands of farmers already using BFPC to increase their yields and profits
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link href="/signup">
//               <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-3">
//                 Start Free Today
//                 <ArrowRight className="ml-2 h-5 w-5" />
//               </Button>
//             </Link>
//             <Button
//               size="lg"
//               variant="outline"
//               className="text-white border-white hover:bg-green-700 text-lg px-8 py-3 bg-transparent"
//             >
//               Contact Sales
//             </Button>
//           </div>
//         </div>
//       </section>
//
//       {/* Footer */}
//       <footer id="contact" className="bg-gray-900 text-white py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             <div>
//               <div className="flex items-center space-x-2 mb-4">
//                 <Leaf className="h-8 w-8 text-green-400" />
//                 <span className="text-xl font-bold">BFPC</span>
//               </div>
//               <p className="text-gray-400 mb-4">Empowering farmers in Benue State through technology and community.</p>
//               <div className="flex space-x-4">
//                 <Facebook className="h-5 w-5 text-gray-400 hover:text-green-400 cursor-pointer" />
//                 <Twitter className="h-5 w-5 text-gray-400 hover:text-green-400 cursor-pointer" />
//                 <Instagram className="h-5 w-5 text-gray-400 hover:text-green-400 cursor-pointer" />
//                 <Youtube className="h-5 w-5 text-gray-400 hover:text-green-400 cursor-pointer" />
//               </div>
//             </div>
//
//             <div>
//               <h3 className="text-lg font-semibold mb-4">Platform</h3>
//               <ul className="space-y-2 text-gray-400">
//                 <li>
//                   <a href="#" className="hover:text-green-400">
//                     Features
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-green-400">
//                     Pricing
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-green-400">
//                     Mobile App
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-green-400">
//                     API
//                   </a>
//                 </li>
//               </ul>
//             </div>
//
//             <div>
//               <h3 className="text-lg font-semibold mb-4">Support</h3>
//               <ul className="space-y-2 text-gray-400">
//                 <li>
//                   <a href="#" className="hover:text-green-400">
//                     Help Center
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-green-400">
//                     Training
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-green-400">
//                     Community
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-green-400">
//                     Contact Us
//                   </a>
//                 </li>
//               </ul>
//             </div>
//
//             <div>
//               <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
//               <div className="space-y-3 text-gray-400">
//                 <div className="flex items-center space-x-2">
//                   <MapPin className="h-4 w-4" />
//                   <span>Makurdi, Benue State, Nigeria</span>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <Phone className="h-4 w-4" />
//                   <span>+234 803 123 4567</span>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <Mail className="h-4 w-4" />
//                   <span>info@bfpc.ng</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//
//           <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
//             <p>&copy; 2024 Benue Farmers Peace Corps. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// }
