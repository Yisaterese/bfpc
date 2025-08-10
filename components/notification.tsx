"use client"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Bell,
  Check,
  Search,
  MoreVertical,
  TrendingUp,
  TrendingDown,
  Users,
  BookOpen,
  Calendar,
  MessageCircle,
  AlertTriangle,
  Info,
  CheckCircle,
  Settings,
  Archive,
  Trash2,
  Eye,
  EyeOff,
} from "lucide-react"

// Notification types and data
const notifications = [
  {
    id: 1,
    type: "market_alert",
    title: "Rice Price Alert",
    message: "Rice prices have increased by 12% in Abuja market. Consider selling your current stock.",
    timestamp: "2 hours ago",
    read: false,
    priority: "high",
    category: "market",
    icon: TrendingUp,
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
  },
  {
    id: 2,
    type: "training",
    title: "New Course Available",
    message: "Climate-Smart Agriculture course is now available. Enroll before March 20th to get early bird discount.",
    timestamp: "4 hours ago",
    read: false,
    priority: "medium",
    category: "training",
    icon: BookOpen,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  {
    id: 3,
    type: "buyer_request",
    title: "New Buyer Request",
    message:
      "AgroMall Nigeria is looking for 50 tons of premium rice. Interested farmers should respond by March 18th.",
    timestamp: "6 hours ago",
    read: true,
    priority: "high",
    category: "buyers",
    icon: Users,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
  },
  {
    id: 4,
    type: "price_drop",
    title: "Price Drop Warning",
    message: "Yam prices have dropped by 8% in local markets. Hold your stock if possible.",
    timestamp: "8 hours ago",
    read: false,
    priority: "high",
    category: "market",
    icon: TrendingDown,
    color: "text-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
  },
  {
    id: 5,
    type: "community",
    title: "Community Event",
    message:
      "Gwer East Farmers Association meeting scheduled for March 22nd at 2:00 PM. Agenda: Seed distribution program.",
    timestamp: "1 day ago",
    read: true,
    priority: "medium",
    category: "community",
    icon: Calendar,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
  },
  {
    id: 6,
    type: "payment",
    title: "Payment Received",
    message: "Payment of ₦2,250,000 from AgroMall for rice delivery has been processed successfully.",
    timestamp: "1 day ago",
    read: true,
    priority: "low",
    category: "transactions",
    icon: CheckCircle,
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
  },
  {
    id: 7,
    type: "weather",
    title: "Weather Alert",
    message: "Heavy rainfall expected in Benue State from March 19-21. Protect your crops and equipment.",
    timestamp: "2 days ago",
    read: false,
    priority: "high",
    category: "weather",
    icon: AlertTriangle,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
  },
  {
    id: 8,
    type: "system",
    title: "Profile Update Required",
    message: "Please update your farm size information to continue receiving personalized recommendations.",
    timestamp: "3 days ago",
    read: true,
    priority: "medium",
    category: "system",
    icon: Info,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  {
    id: 9,
    type: "message",
    title: "New Message from Thrive Agric",
    message: "We're interested in your yam produce. Please check your buyer messages for details.",
    timestamp: "3 days ago",
    read: true,
    priority: "medium",
    category: "messages",
    icon: MessageCircle,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-200",
  },
  {
    id: 10,
    type: "achievement",
    title: "Training Milestone Reached",
    message: "Congratulations! You've completed 12 training courses and earned Gold Tier status.",
    timestamp: "1 week ago",
    read: true,
    priority: "low",
    category: "achievements",
    icon: CheckCircle,
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
  },
]

const notificationSettings = {
  marketAlerts: true,
  priceChanges: true,
  buyerRequests: true,
  trainingUpdates: true,
  communityEvents: false,
  weatherAlerts: true,
  systemUpdates: true,
  messages: true,
  achievements: true,
  emailNotifications: false,
  smsNotifications: true,
  pushNotifications: true,
}

export default function NotificationsPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [notificationList, setNotificationList] = useState(notifications)
  const [settings, setSettings] = useState(notificationSettings)
  const [selectedNotifications, setSelectedNotifications] = useState<number[]>([])

  // Filter notifications based on active tab and search query
  const filteredNotifications = notificationList.filter((notification) => {
    const matchesSearch =
      notification.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      notification.message.toLowerCase().includes(searchQuery.toLowerCase())

    if (activeTab === "all") return matchesSearch
    if (activeTab === "unread") return !notification.read && matchesSearch
    if (activeTab === "high") return notification.priority === "high" && matchesSearch
    return notification.category === activeTab && matchesSearch
  })

  // Mark notification as read/unread
  const toggleReadStatus = (id: number) => {
    setNotificationList((prev) =>
      prev.map((notification) =>
        notification.id === id ? { ...notification, read: !notification.read } : notification,
      ),
    )
  }

  // Mark all as read
  const markAllAsRead = () => {
    setNotificationList((prev) => prev.map((notification) => ({ ...notification, read: true })))
  }

  // Delete notification
  const deleteNotification = (id: number) => {
    setNotificationList((prev) => prev.filter((notification) => notification.id !== id))
  }

  // Toggle notification selection
  const toggleSelection = (id: number) => {
    setSelectedNotifications((prev) => (prev.includes(id) ? prev.filter((notifId) => notifId !== id) : [...prev, id]))
  }

  // Bulk actions
  const bulkMarkAsRead = () => {
    setNotificationList((prev) =>
      prev.map((notification) =>
        selectedNotifications.includes(notification.id) ? { ...notification, read: true } : notification,
      ),
    )
    setSelectedNotifications([])
  }

  const bulkDelete = () => {
    setNotificationList((prev) => prev.filter((notification) => !selectedNotifications.includes(notification.id)))
    setSelectedNotifications([])
  }

  // Get notification counts
  const unreadCount = notificationList.filter((n) => !n.read).length
  const highPriorityCount = notificationList.filter((n) => n.priority === "high").length

  // Get priority badge color
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200"
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "low":
        return "bg-gray-100 text-gray-800 border-gray-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white p-2 sm:p-4 lg:p-6">
      <div className="max-w-6xl mx-auto space-y-4 sm:space-y-6">
        {/* Header */}
        <Card className="border-green-200 shadow-lg">
          <CardHeader className="pb-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <CardTitle className="flex items-center gap-3 text-2xl sm:text-3xl">
                  <div className="relative">
                    <Bell className="h-8 w-8 text-green-600" />
                    {unreadCount > 0 && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {unreadCount}
                      </span>
                    )}
                  </div>
                  Notifications
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Stay updated with market trends, training opportunities, and community events
                </CardDescription>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                {selectedNotifications.length > 0 && (
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={bulkMarkAsRead}
                      className="border-green-300 text-green-700 hover:bg-green-50 bg-transparent"
                    >
                      <Check className="h-4 w-4 mr-1" />
                      Mark Read ({selectedNotifications.length})
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={bulkDelete}
                      className="border-red-300 text-red-700 hover:bg-red-50 bg-transparent"
                    >
                      <Trash2 className="h-4 w-4 mr-1" />
                      Delete ({selectedNotifications.length})
                    </Button>
                  </div>
                )}
                <Button
                  onClick={markAllAsRead}
                  className="bg-green-600 hover:bg-green-700 text-white"
                  disabled={unreadCount === 0}
                >
                  <Check className="h-4 w-4 mr-2" />
                  Mark All Read
                </Button>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Search and Filter */}
        <Card className="border-green-200">
          <CardContent className="p-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search notifications..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <Badge variant="outline" className="border-green-300 text-green-700">
                  Total: {filteredNotifications.length}
                </Badge>
                <Badge className="bg-red-100 text-red-800 border-red-200">Unread: {unreadCount}</Badge>
                <Badge className="bg-orange-100 text-orange-800 border-orange-200">
                  High Priority: {highPriorityCount}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Notification Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <div className="overflow-x-auto">
            <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8 min-w-[800px] lg:min-w-0 bg-green-50 border border-green-200">
              <TabsTrigger
                value="all"
                className="data-[state=active]:bg-green-600 data-[state=active]:text-white text-xs sm:text-sm"
              >
                All ({notificationList.length})
              </TabsTrigger>
              <TabsTrigger
                value="unread"
                className="data-[state=active]:bg-green-600 data-[state=active]:text-white text-xs sm:text-sm"
              >
                Unread ({unreadCount})
              </TabsTrigger>
              <TabsTrigger
                value="high"
                className="data-[state=active]:bg-green-600 data-[state=active]:text-white text-xs sm:text-sm"
              >
                High Priority
              </TabsTrigger>
              <TabsTrigger
                value="market"
                className="data-[state=active]:bg-green-600 data-[state=active]:text-white text-xs sm:text-sm"
              >
                Market
              </TabsTrigger>
              <TabsTrigger
                value="training"
                className="data-[state=active]:bg-green-600 data-[state=active]:text-white text-xs sm:text-sm"
              >
                Training
              </TabsTrigger>
              <TabsTrigger
                value="buyers"
                className="data-[state=active]:bg-green-600 data-[state=active]:text-white text-xs sm:text-sm"
              >
                Buyers
              </TabsTrigger>
              <TabsTrigger
                value="community"
                className="data-[state=active]:bg-green-600 data-[state=active]:text-white text-xs sm:text-sm"
              >
                Community
              </TabsTrigger>
              <TabsTrigger
                value="settings"
                className="data-[state=active]:bg-green-600 data-[state=active]:text-white text-xs sm:text-sm"
              >
                Settings
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Notifications List */}
          <TabsContent value={activeTab} className="space-y-4">
            {activeTab !== "settings" ? (
              <Card className="border-green-200">
                <CardContent className="p-0">
                  {filteredNotifications.length === 0 ? (
                    <div className="text-center py-12">
                      <Bell className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">No notifications found</h3>
                      <p className="text-gray-600">
                        {searchQuery ? "Try adjusting your search terms" : "You're all caught up!"}
                      </p>
                    </div>
                  ) : (
                    <div className="divide-y divide-gray-200">
                      {filteredNotifications.map((notification) => {
                        const IconComponent = notification.icon
                        return (
                          <div
                            key={notification.id}
                            className={`p-4 hover:bg-gray-50 transition-colors ${
                              !notification.read ? "bg-blue-50/30" : ""
                            }`}
                          >
                            <div className="flex items-start gap-4">
                              {/* Selection Checkbox */}
                              <input
                                type="checkbox"
                                checked={selectedNotifications.includes(notification.id)}
                                onChange={() => toggleSelection(notification.id)}
                                className="mt-1 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                              />

                              {/* Notification Icon */}
                              <div
                                className={`p-2 rounded-lg ${notification.bgColor} ${notification.borderColor} border flex-shrink-0`}
                              >
                                <IconComponent className={`h-5 w-5 ${notification.color}`} />
                              </div>

                              {/* Notification Content */}
                              <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between gap-2">
                                  <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                      <h4
                                        className={`font-semibold text-sm sm:text-base ${
                                          !notification.read ? "text-gray-900" : "text-gray-700"
                                        }`}
                                      >
                                        {notification.title}
                                      </h4>
                                      {!notification.read && (
                                        <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                                      )}
                                    </div>
                                    <p className="text-xs sm:text-sm text-gray-600 mb-2 leading-relaxed">
                                      {notification.message}
                                    </p>
                                    <div className="flex items-center gap-3 text-xs text-gray-500">
                                      <span>{notification.timestamp}</span>
                                      <Badge className={getPriorityColor(notification.priority)}>
                                        {notification.priority}
                                      </Badge>
                                      <Badge variant="outline" className="border-gray-300 text-gray-600">
                                        {notification.category}
                                      </Badge>
                                    </div>
                                  </div>

                                  {/* Action Menu */}
                                  <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                        <MoreVertical className="h-4 w-4" />
                                      </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                      <DropdownMenuItem onClick={() => toggleReadStatus(notification.id)}>
                                        {notification.read ? (
                                          <>
                                            <EyeOff className="h-4 w-4 mr-2" />
                                            Mark as Unread
                                          </>
                                        ) : (
                                          <>
                                            <Eye className="h-4 w-4 mr-2" />
                                            Mark as Read
                                          </>
                                        )}
                                      </DropdownMenuItem>
                                      <DropdownMenuItem>
                                        <Archive className="h-4 w-4 mr-2" />
                                        Archive
                                      </DropdownMenuItem>
                                      <DropdownMenuItem
                                        onClick={() => deleteNotification(notification.id)}
                                        className="text-red-600"
                                      >
                                        <Trash2 className="h-4 w-4 mr-2" />
                                        Delete
                                      </DropdownMenuItem>
                                    </DropdownMenuContent>
                                  </DropdownMenu>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  )}
                </CardContent>
              </Card>
            ) : (
              /* Settings Tab */
              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5 text-green-600" />
                    Notification Settings
                  </CardTitle>
                  <CardDescription>Customize which notifications you want to receive</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Notification Categories */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Notification Categories</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(settings)
                        .slice(0, 9)
                        .map(([key, value]) => (
                          <div
                            key={key}
                            className="flex items-center justify-between p-3 border border-green-200 rounded-lg"
                          >
                            <div>
                              <Label htmlFor={key} className="font-medium capitalize">
                                {key.replace(/([A-Z])/g, " $1").trim()}
                              </Label>
                              <p className="text-xs text-gray-600 mt-1">
                                {key === "marketAlerts" && "Price changes and market opportunities"}
                                {key === "priceChanges" && "Real-time crop price updates"}
                                {key === "buyerRequests" && "New buyer inquiries and requests"}
                                {key === "trainingUpdates" && "New courses and training opportunities"}
                                {key === "communityEvents" && "Local farmer meetings and events"}
                                {key === "weatherAlerts" && "Weather warnings and forecasts"}
                                {key === "systemUpdates" && "Platform updates and maintenance"}
                                {key === "messages" && "Direct messages from buyers and farmers"}
                                {key === "achievements" && "Training milestones and rewards"}
                              </p>
                            </div>
                            <Switch
                              id={key}
                              checked={value}
                              onCheckedChange={(checked) => setSettings((prev) => ({ ...prev, [key]: checked }))}
                            />
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* Delivery Methods */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Delivery Methods</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {Object.entries(settings)
                        .slice(9)
                        .map(([key, value]) => (
                          <div
                            key={key}
                            className="flex items-center justify-between p-3 border border-green-200 rounded-lg"
                          >
                            <div>
                              <Label htmlFor={key} className="font-medium capitalize">
                                {key.replace(/([A-Z])/g, " $1").trim()}
                              </Label>
                              <p className="text-xs text-gray-600 mt-1">
                                {key === "emailNotifications" && "Receive notifications via email"}
                                {key === "smsNotifications" && "Get SMS alerts for urgent updates"}
                                {key === "pushNotifications" && "Browser and mobile push notifications"}
                              </p>
                            </div>
                            <Switch
                              id={key}
                              checked={value}
                              onCheckedChange={(checked) => setSettings((prev) => ({ ...prev, [key]: checked }))}
                            />
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* Save Settings */}
                  <div className="flex justify-end pt-4 border-t border-green-200">
                    <Button className="bg-green-600 hover:bg-green-700 text-white">
                      <Check className="h-4 w-4 mr-2" />
                      Save Settings
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
