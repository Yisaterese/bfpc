"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  ArrowRight,
  ExternalLink,
} from "lucide-react"
import Link from "next/link"

// Featured events for the hero section
const featuredEvents = [
  {
    id: "1",
    title: "Modern Rice Farming Techniques Workshop",
    description: "Learn the latest techniques in rice cultivation, including water management, pest control, and yield optimization strategies.",
    type: "workshop",
    date: "2024-04-15",
    time: "09:00 AM",
    location: "University of Agriculture, Makurdi",
    organizer: "BFPC Training Center",
    capacity: 150,
    registered: 87,
    image: "/images/rice-workshop.jpg",
    tags: ["Rice", "Training", "Technology"],
    price: "Free",
    gradient: "from-blue-600 to-blue-800",
  },
  {
    id: "2",
    title: "Digital Marketing for Farmers Conference",
    description: "Learn how to market your agricultural products online and reach wider markets through digital platforms.",
    type: "conference",
    date: "2024-05-05",
    time: "08:00 AM",
    location: "Makurdi International Conference Center",
    organizer: "BFPC & Tech4Farmers",
    capacity: 300,
    registered: 245,
    image: "/images/digital-marketing.jpg",
    tags: ["Marketing", "Digital", "E-commerce"],
    price: "₦5,000",
    gradient: "from-purple-600 to-purple-800",
  },
  {
    id: "3",
    title: "Cassava Processing and Value Addition Seminar",
    description: "Discover innovative ways to process cassava into high-value products and connect with potential buyers.",
    type: "seminar",
    date: "2024-04-22",
    time: "10:00 AM",
    location: "Gboko Agricultural Center",
    organizer: "Benue State Ministry of Agriculture",
    capacity: 200,
    registered: 134,
    image: "/images/cassava-processing.jpg",
    tags: ["Cassava", "Processing", "Value Addition"],
    price: "₦2,000",
    gradient: "from-green-600 to-green-800",
  },
]

export default function EventsHero() {
  const [currentEventIndex, setCurrentEventIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEventIndex((prevIndex) => 
        prevIndex === featuredEvents.length - 1 ? 0 : prevIndex + 1
      )
    }, 10000) // Auto-rotate every 10 seconds

    return () => clearInterval(interval)
  }, [])

  const currentEvent = featuredEvents[currentEventIndex]

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    })
  }

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "workshop":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "seminar":
        return "bg-green-100 text-green-800 border-green-200"
      case "conference":
        return "bg-purple-100 text-purple-800 border-purple-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mb-4">
            Upcoming Agricultural Events
          </h2>
          <p className="text-lg text-green-700 max-w-3xl mx-auto">
            Join our training programs, workshops, and conferences to enhance your farming skills and connect with fellow farmers.
          </p>
        </div>

        {/* Featured Event Hero */}
        <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-8">
          <div className={`bg-gradient-to-r ${currentEvent.gradient} relative`}>
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={currentEvent.image || "/placeholder.svg"}
                alt={currentEvent.title}
                className="w-full h-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>

            <div className="relative z-10 px-8 py-12 lg:px-16 lg:py-20">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Badge className={`${getEventTypeColor(currentEvent.type)} bg-white/90`}>
                      {currentEvent.type}
                    </Badge>
                    <Badge className="bg-orange-500 text-white">
                      Featured Event
                    </Badge>
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                    {currentEvent.title}
                  </h3>

                  <p className="text-lg text-white/90 leading-relaxed">
                    {currentEvent.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white/90">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      <span>{formatDate(currentEvent.date)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      <span>{currentEvent.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5" />
                      <span className="truncate">{currentEvent.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      <span>{currentEvent.registered}/{currentEvent.capacity} registered</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      size="lg"
                      className="bg-white text-gray-900 hover:bg-gray-100 font-semibold"
                    >
                      Register Now - {currentEvent.price}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Link href="/events">
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
                      >
                        View All Events
                        <ExternalLink className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="hidden lg:block">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <h4 className="text-xl font-semibold text-white mb-4">Event Highlights</h4>
                    <div className="space-y-3">
                      {currentEvent.tags.map((tag, index) => (
                        <div key={index} className="flex items-center gap-2 text-white/90">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          <span>{tag}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-6 border-t border-white/20">
                      <p className="text-sm text-white/80">Organized by</p>
                      <p className="text-white font-semibold">{currentEvent.organizer}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Event Navigation Dots */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {featuredEvents.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentEventIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentEventIndex 
                    ? "bg-white scale-110" 
                    : "bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredEvents.map((event, index) => (
            <Card
              key={event.id}
              className={`border-green-200 hover:shadow-lg transition-all duration-300 cursor-pointer ${
                index === currentEventIndex ? "ring-2 ring-green-500 ring-offset-2" : ""
              }`}
              onClick={() => setCurrentEventIndex(index)}
            >
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <Badge className={getEventTypeColor(event.type)}>
                    {event.type}
                  </Badge>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-green-600">
                      {formatDate(event.date)}
                    </div>
                    <div className="text-xs text-gray-500">{event.time}</div>
                  </div>
                </div>
                
                <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                  {event.title}
                </h4>
                
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                  <MapPin className="h-4 w-4" />
                  <span className="truncate">{event.location}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-green-600">
                    {event.price}
                  </div>
                  <div className="text-xs text-gray-500">
                    {event.registered}/{event.capacity} spots
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Events CTA */}
        <div className="text-center mt-12">
          <Link href="/events">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold"
            >
              Explore All Events
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}