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
  Smartphone,
  TrendingUp,
  Users,
} from "lucide-react"
import { Card, CardContent } from "components/ui/card"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export default function BFPCLanding() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const heroImages = [
    "../public/images/farmer-hero.jpg",
    "../public/images/woman-farmer-corn.jpg",
    "../public/images/banana-harvest.jpg",
    "../public/images/yam-market.jpg",
    "../public/images/cassava-farmer.jpg",
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
            <Button className="bg-green-600 text-white hover:bg-green-700">
              Get Started
            </Button>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="relative bg-white py-20 lg:py-32 overflow-hidden">
        {/* Background Image Slideshow */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((image, index) => (
            <img
              key={index}
              src={image || "/placeholder.svg?height=800&width=1200&text=Nigerian+Agriculture"}
              alt={`Nigerian farmer ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-white/70"></div>
        </div>
        {/* Slideshow Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
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
                <Button
                  className="bg-green-600 text-white hover:bg-green-700 shadow-md h-12 px-6 text-lg"
                >
                  Join BFPC Today
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  className="border-green-600 text-green-600 bg-white/80 backdrop-blur-sm hover:bg-green-50 hover:text-green-800 h-12 px-6 text-lg"
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
                  <Card className="border border-green-200 bg-white/95">
                    <CardContent className="p-2 text-center">
                      <TrendingUp className="h-8 w-8 text-green-600 mb-2 mx-auto" />
                      <div className="text-sm font-medium text-green-800">Yield Analytics</div>
                    </CardContent>
                  </Card>
                  <Card className="border border-green-200 bg-white/95">
                    <CardContent className="p-2 text-center">
                      <Globe className="h-8 w-8 text-green-600 mb-2 mx-auto" />
                      <div className="text-sm font-medium text-green-800">Market Access</div>
                    </CardContent>
                  </Card>
                  <Card className="border border-green-200 bg-white/95">
                    <CardContent className="p-2 text-center">
                      <Users className="h-8 w-8 text-green-600 mb-2 mx-auto" />
                      <div className="text-sm font-medium text-green-800">Community</div>
                    </CardContent>
                  </Card>
                  <Card className="border border-green-200 bg-white/95">
                    <CardContent className="p-2 text-center">
                      <Calendar className="h-8 w-8 text-green-600 mb-2 mx-auto" />
                      <div className="text-sm font-medium text-green-800">Live Programs</div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
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
            {[
              {
                icon: BarChart3,
                title: "Farmer Dashboard",
                desc: "Personalized dashboard showing farm goals, crops, training recommendations, and buyer leads.",
              },
              {
                icon: TrendingUp,
                title: "Yield Optimization",
                desc: "Customized farming tips using local climate data, best practices, and soil analysis.",
              },
              {
                icon: Globe,
                title: "Market Monitor",
                desc: "Real-time price trends and demand analysis with alerts on fast-moving crops.",
              },
              {
                icon: Calendar,
                title: "Live Program Feed",
                desc: "Calendar with reminders for government programs, grants, and agricultural events.",
              },
              {
                icon: Handshake,
                title: "Buyer Marketplace",
                desc: "Secure buyer-seller connections with verified listings and escrow payments.",
              },
              {
                icon: Users,
                title: "Community Support",
                desc: "Farmer groups by LGA for collaboration with multilingual chat support.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="border border-green-200 transition-shadow hover:shadow-lg"
              >
                <CardContent className="p-3">
                  <feature.icon className="h-10 w-10 text-green-600 mb-2" />
                  <h3 className="text-xl font-semibold text-green-900 mb-2">{feature.title}</h3>
                  <p className="text-green-600">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
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
                {[
                  "Increase annual crop yields by disseminating timely farming techniques and best practices.",
                  "Connect farmers directly with verified buyers and processing companies for better market access.",
                  "Provide data analytics to measure how farming practices and events influence yield outcomes.",
                  "Empower farmers through sponsored conference attendance and professional development opportunities.",
                ].map((text, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-green-700">
                      <strong>{text.split(" by ")[0]}</strong>
                      {text.includes(" by ") && ` by ${text.split(" by ")[1]}`}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-green-900 mb-6">Target Users</h3>
              <div className="space-y-4">
                {[
                  { icon: MapPin, text: "Smallholder and mid-scale farmers in Benue" },
                  { icon: Users, text: "Agricultural extension officers" },
                  { icon: Shield, text: "NGOs and government partners" },
                  { icon: Handshake, text: "Buyers and food processing companies" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <item.icon className="h-5 w-5 text-green-600" />
                    <span className="text-green-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Technology Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mb-4">Built for Every Farmer</h2>
            <p className="text-lg text-green-700 max-w-3xl mx-auto">
              Our platform is designed to work across all devices and connectivity levels, ensuring no farmer is left
              behind.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Smartphone,
                title: "Mobile-First Design",
                desc: "Android-first mobile app with offline mode available for areas with limited connectivity.",
              },
              {
                icon: MessageCircle,
                title: "SMS/USSD Support",
                desc: "Fallback system for low-end users ensuring everyone can access essential features.",
              },
              {
                icon: BarChart3,
                title: "Advanced Analytics",
                desc: "Data analytics backend providing insights on yield improvements and market trends.",
              },
            ].map((tech, index) => (
              <Card key={index} className="border border-green-200 text-center">
                <CardContent className="p-3">
                  <tech.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-green-900 mb-2">{tech.title}</h3>
                  <p className="text-green-600">{tech.desc}</p>
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
            {[
              {
                title: "Government",
                items: ["Federal Ministry of Agriculture", "Benue State Ministry of Agriculture"],
              },
              {
                title: "International",
                items: ["IFAD", "FAO", "USAID Feed the Future"],
              },
              {
                title: "Agribusiness",
                items: ["AgroMall", "Thrive Agric", "Hello Tractor"],
              },
              {
                title: "Academic",
                items: ["University of Agriculture, Makurdi", "Local cooperatives", "Commodity boards"],
              },
            ].map((partner, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm">
                <h3 className="font-semibold text-green-900 mb-2">{partner.title}</h3>
                <ul className="text-sm text-green-700 space-y-1">
                  {partner.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
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
            <Button
              className="bg-white text-green-600 hover:bg-green-50 h-12 px-6 text-lg"
            >
              Get Started Today
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button
              variant="outline"
              className="border-white text-white bg-transparent hover:bg-white/10 hover:text-white h-12 px-6 text-lg"
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
            {[
              { title: "Platform", items: ["Features", "Pricing", "Mobile App"] },
              { title: "Support", items: ["Help Center", "Community", "Contact Us"] },
              { title: "Company", items: ["About", "Partnerships", "Careers"] },
            ].map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-2 text-green-200">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a href="#" className="hover:text-white transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-green-800 mt-8 pt-8 text-center text-green-200">
            <p>© 2024 Benue Farmers Peace Corps. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}