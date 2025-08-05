"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Leaf,
  Users,
  TrendingUp,
  Shield,
  Smartphone,
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroSlides = [
    {
      image: "/images/farmer-hero.jpg",
      title: "Empowering Farmers Through Technology",
      subtitle: "Join thousands of farmers in Benue State using modern techniques to increase yields and profits",
    },
    {
      image: "/images/woman-farmer-corn.jpg",
      title: "Smart Farming Solutions",
      subtitle: "Access real-time weather data, soil analysis, and crop management tools",
    },
    {
      image: "/images/banana-harvest.jpg",
      title: "Connect with Markets",
      subtitle: "Get the best prices for your produce through our marketplace platform",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [heroSlides.length])

  const features = [
    {
      icon: <Smartphone className="h-8 w-8 text-green-600" />,
      title: "Mobile-First Platform",
      description: "Access all tools from your smartphone, even with limited internet connectivity",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-green-600" />,
      title: "Market Intelligence",
      description: "Real-time crop prices, demand forecasts, and market trends",
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Farmer Community",
      description: "Connect with fellow farmers, share experiences, and learn together",
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "Crop Protection",
      description: "Early warning systems for pests, diseases, and weather conditions",
    },
    {
      icon: <Globe className="h-8 w-8 text-green-600" />,
      title: "Weather Insights",
      description: "Localized weather forecasts and agricultural advisories",
    },
    {
      icon: <Leaf className="h-8 w-8 text-green-600" />,
      title: "Sustainable Practices",
      description: "Learn eco-friendly farming methods that protect the environment",
    },
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

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-green-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="text-xl font-bold text-green-900">BFPC</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-green-600 transition-colors">
                Features
              </a>
              <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors">
                About
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-green-600 transition-colors">
                Testimonials
              </a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">
                Contact
              </a>
              <Link href="/login">
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent">
                  Sign In
                </Button>
              </Link>
              <Link href="/signup">
                <Button className="bg-green-600 hover:bg-green-700">Join BFPC</Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-green-600">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-green-100">
              <div className="flex flex-col space-y-4">
                <a href="#features" className="text-gray-700 hover:text-green-600 transition-colors">
                  Features
                </a>
                <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors">
                  About
                </a>
                <a href="#testimonials" className="text-gray-700 hover:text-green-600 transition-colors">
                  Testimonials
                </a>
                <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">
                  Contact
                </a>
                <div className="flex flex-col space-y-2 pt-4">
                  <Link href="/login">
                    <Button
                      variant="outline"
                      className="w-full border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                    >
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/signup">
                    <Button className="w-full bg-green-600 hover:bg-green-700">Join BFPC</Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroSlides[currentSlide].image || "/placeholder.svg?height=1080&width=1920"}
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">{heroSlides[currentSlide].title}</h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-delay">{heroSlides[currentSlide].subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
            <Link href="/signup">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-green-900 text-lg px-8 py-3 bg-transparent"
            >
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Everything You Need to Farm Smarter</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive platform provides all the tools and resources you need to maximize your farming
              potential
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-green-100 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Benue Farmers Peace Corps</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2020, BFPC is dedicated to transforming agriculture in Benue State through technology,
                education, and community building. We believe that every farmer deserves access to modern tools and
                knowledge to succeed.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Technology-Driven Solutions</h3>
                    <p className="text-gray-600">Leveraging mobile technology to reach farmers in remote areas</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Community-Centered Approach</h3>
                    <p className="text-gray-600">Building strong networks of farmers who support each other</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Sustainable Practices</h3>
                    <p className="text-gray-600">Promoting environmentally friendly farming methods</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/cassava-farmer.jpg"
                alt="Farmer working in field"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
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

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Farm?</h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of farmers already using BFPC to increase their yields and profits
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-3">
                Start Free Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-green-700 text-lg px-8 py-3 bg-transparent"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Leaf className="h-8 w-8 text-green-400" />
                <span className="text-xl font-bold">BFPC</span>
              </div>
              <p className="text-gray-400 mb-4">Empowering farmers in Benue State through technology and community.</p>
              <div className="flex space-x-4">
                <Facebook className="h-5 w-5 text-gray-400 hover:text-green-400 cursor-pointer" />
                <Twitter className="h-5 w-5 text-gray-400 hover:text-green-400 cursor-pointer" />
                <Instagram className="h-5 w-5 text-gray-400 hover:text-green-400 cursor-pointer" />
                <Youtube className="h-5 w-5 text-gray-400 hover:text-green-400 cursor-pointer" />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-green-400">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400">
                    Mobile App
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400">
                    API
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-green-400">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400">
                    Training
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Makurdi, Benue State, Nigeria</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+234 803 123 4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>info@bfpc.ng</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Benue Farmers Peace Corps. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
