"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  Search,
  Filter,
  ArrowLeft,
  ExternalLink,
  Share2,
  BookmarkPlus,
  CalendarDays,
} from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Navigation from "@/components/Navigation"

// Mock events data
const mockEvents = [
  {
    id: "1",
    title: "Modern Rice Farming Techniques Workshop",
    description: "Learn the latest techniques in rice cultivation, including water management, pest control, and yield optimization strategies.",
    type: "workshop",
    date: "2024-04-15",
    time: "09:00 AM",
    endTime: "04:00 PM",
    location: "University of Agriculture, Makurdi",
    organizer: "BFPC Training Center",
    capacity: 150,
    registered: 87,
    image: "/images/rice-workshop.jpg",
    status: "upcoming",
    tags: ["Rice", "Training", "Technology"],
    price: "Free",
    featured: true,
  },
  {
    id: "2",
    title: "Cassava Processing and Value Addition Seminar",
    description: "Discover innovative ways to process cassava into high-value products and connect with potential buyers.",
    type: "seminar",
    date: "2024-04-22",
    time: "10:00 AM",
    endTime: "02:00 PM",
    location: "Gboko Agricultural Center",
    organizer: "Benue State Ministry of Agriculture",
    capacity: 200,
    registered: 134,
    image: "/images/cassava-processing.jpg",
    status: "upcoming",
    tags: ["Cassava", "Processing", "Value Addition"],
    price: "₦2,000",
    featured: false,
  },
  {
    id: "3",
    title: "Digital Marketing for Farmers Conference",
    description: "Learn how to market your agricultural products online and reach wider markets through digital platforms.",
    type: "conference",
    date: "2024-05-05",
    time: "08:00 AM",
    endTime: "05:00 PM",
    location: "Makurdi International Conference Center",
    organizer: "BFPC & Tech4Farmers",
    capacity: 300,
    registered: 245,
    image: "/images/digital-marketing.jpg",
    status: "upcoming",
    tags: ["Marketing", "Digital", "E-commerce"],
    price: "₦5,000",
    featured: true,
  },
  {
    id: "4",
    title: "Sustainable Farming Practices Workshop",
    description: "Explore eco-friendly farming methods that protect the environment while maintaining high productivity.",
    type: "workshop",
    date: "2024-03-20",
    time: "09:00 AM",
    endTime: "03:00 PM",
    location: "Otukpo Agricultural Training Center",
    organizer: "Green Agriculture Initiative",
    capacity: 100,
    registered: 100,
    image: "/images/sustainable-farming.jpg",
    status: "completed",
    tags: ["Sustainability", "Environment", "Organic"],
    price: "Free",
    featured: false,
  },
  {
    id: "5",
    title: "Yam Cultivation Masterclass",
    description: "Master the art of yam cultivation with expert guidance on planting, care, and harvesting techniques.",
    type: "masterclass",
    date: "2024-04-30",
    time: "07:00 AM",
    endTime: "12:00 PM",
    location: "Katsina-Ala Demonstration Farm",
    organizer: "Yam Farmers Association",
    capacity: 80,
    registered: 45,
    image: "/images/yam-cultivation.jpg",
    status: "upcoming",
    tags: ["Yam", "Cultivation", "Expert Training"],
    price: "₦3,500",
    featured: false,
  },
]

export default function EventsPage() {
  const router = useRouter()
  const [events, setEvents] = useState(mockEvents)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("all")
  const [activeTab, setActiveTab] = useState("all")

  // Filter events based on search and filters
  const filteredEvents = events.filter((event) => {
    const matchesSearch = 
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    if (activeTab === "all") return matchesSearch
    if (activeTab === "upcoming") return event.status === "upcoming" && matchesSearch
    if (activeTab === "completed") return event.status === "completed" && matchesSearch
    if (activeTab === "featured") return event.featured && matchesSearch

    return matchesSearch
  })

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "workshop":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "seminar":
        return "bg-green-100 text-green-800 border-green-200"
      case "conference":
        return "bg-purple-100 text-purple-800 border-purple-200"
      case "masterclass":
        return "bg-orange-100 text-orange-800 border-orange-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "bg-green-100 text-green-800 border-green-200"
      case "completed":
        return "bg-gray-100 text-gray-800 border-gray-200"
      case "cancelled":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const isEventFull = (event: any) => {
    return event.registered >= event.capacity
  }

  const handleRegister = (eventId: string) => {
    // In a real app, this would make an API call
    console.log("Registering for event:", eventId)
    alert("Registration successful! You will receive a confirmation email shortly.")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      {/* Navigation */}
      <Navigation />
      
      {/* Header */}
      <div className="bg-white border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-green-900 mb-4">Agricultural Events</h1>
            <p className="text-lg text-green-700 max-w-3xl mx-auto">
              Discover upcoming agricultural events, workshops, and training programs designed to enhance your farming skills and connect with fellow farmers.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Search and Filter */}
        <Card className="border-green-200">
          <CardContent className="p-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search events by title, location, or tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button
                variant="outline"
                className="border-green-300 text-green-700 hover:bg-green-50 bg-transparent"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Event Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4 bg-green-50 border border-green-200">
            <TabsTrigger
              value="all"
              className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
            >
              All Events
            </TabsTrigger>
            <TabsTrigger
              value="upcoming"
              className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
            >
              Upcoming
            </TabsTrigger>
            <TabsTrigger
              value="featured"
              className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
            >
              Featured
            </TabsTrigger>
            <TabsTrigger
              value="completed"
              className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
            >
              Past Events
            </TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="mt-6">
            {filteredEvents.length === 0 ? (
              <Card className="border-green-200">
                <CardContent className="p-12 text-center">
                  <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No events found</h3>
                  <p className="text-gray-600">
                    {searchQuery
                      ? "Try adjusting your search terms or filters"
                      : "No events available in this category"}
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEvents.map((event) => (
                  <Card
                    key={event.id}
                    className="border-green-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative">
                      <img
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      {event.featured && (
                        <Badge className="absolute top-3 left-3 bg-orange-500 text-white">
                          Featured
                        </Badge>
                      )}
                      <Badge
                        className={`absolute top-3 right-3 ${getStatusColor(event.status)}`}
                      >
                        {event.status}
                      </Badge>
                    </div>

                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between gap-2">
                        <CardTitle className="text-lg leading-tight">{event.title}</CardTitle>
                        <Badge className={getEventTypeColor(event.type)}>
                          {event.type}
                        </Badge>
                      </div>
                      <CardDescription className="text-sm line-clamp-2">
                        {event.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-gray-600">
                          <CalendarDays className="h-4 w-4" />
                          <span>{formatDate(event.date)}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Clock className="h-4 w-4" />
                          <span>{event.time} - {event.endTime}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <MapPin className="h-4 w-4" />
                          <span className="line-clamp-1">{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Users className="h-4 w-4" />
                          <span>
                            {event.registered}/{event.capacity} registered
                            {isEventFull(event) && (
                              <Badge className="ml-2 bg-red-100 text-red-800 text-xs">
                                Full
                              </Badge>
                            )}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {event.tags.slice(0, 3).map((tag, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="text-xs border-green-300 text-green-700"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <div className="text-lg font-bold text-green-600">
                          {event.price}
                        </div>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-green-300 text-green-700 hover:bg-green-50"
                          >
                            <Share2 className="h-4 w-4" />
                          </Button>
                          {event.status === "upcoming" && !isEventFull(event) ? (
                            <Button
                              size="sm"
                              className="bg-green-600 hover:bg-green-700"
                              onClick={() => handleRegister(event.id)}
                            >
                              Register
                            </Button>
                          ) : event.status === "upcoming" && isEventFull(event) ? (
                            <Button size="sm" disabled>
                              Full
                            </Button>
                          ) : (
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-gray-300 text-gray-700"
                            >
                              View Details
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}