"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { useRouter } from "next/navigation"

interface User {
  id: string
  name: string
  email?: string
  phone?: string
  avatar?: string
  farmDetails: {
    farmSize: string
    location: string
    crops: string[]
    experience: string
    soilType: string
  }
}

interface AuthContextType {
  user: User | null
  loading: boolean
  login: (credentials: any) => Promise<boolean>
  signup: (userData: any) => Promise<boolean>
  logout: () => void
  googleLogin: () => Promise<boolean>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem("bfpc_user")
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser))
      } catch (error) {
        console.error("Error parsing saved user:", error)
        localStorage.removeItem("bfpc_user")
      }
    }
    setLoading(false)
  }, [])

  const login = async (credentials: any): Promise<boolean> => {
    setLoading(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const mockUser: User = {
        id: "1",
        name: credentials.name || "John Farmer",
        email: credentials.email,
        phone: credentials.phone,
        farmDetails: {
          farmSize: "5.2",
          location: "Makurdi, Benue State",
          crops: ["Rice", "Yam", "Cassava"],
          experience: "8 years",
          soilType: "Loamy",
        },
      }

      setUser(mockUser)
      localStorage.setItem("bfpc_user", JSON.stringify(mockUser))
      setLoading(false)
      return true
    } catch (error) {
      setLoading(false)
      return false
    }
  }

  const signup = async (userData: any): Promise<boolean> => {
    setLoading(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      const newUser: User = {
        id: Date.now().toString(),
        name: userData.name,
        email: userData.email,
        phone: userData.phone,
        farmDetails: {
          farmSize: userData.farmSize || "0",
          location: userData.location || "",
          crops: userData.crops || [],
          experience: userData.experience || "0 years",
          soilType: userData.soilType || "Unknown",
        },
      }

      setUser(newUser)
      localStorage.setItem("bfpc_user", JSON.stringify(newUser))
      setLoading(false)
      return true
    } catch (error) {
      setLoading(false)
      return false
    }
  }

  const googleLogin = async (): Promise<boolean> => {
    setLoading(true)
    try {
      // Simulate Google OAuth
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const googleUser: User = {
        id: "google_" + Date.now(),
        name: "Google User",
        email: "user@gmail.com",
        farmDetails: {
          farmSize: "3.0",
          location: "Benue State",
          crops: ["Rice", "Yam"],
          experience: "5 years",
          soilType: "Clay",
        },
      }

      setUser(googleUser)
      localStorage.setItem("bfpc_user", JSON.stringify(googleUser))
      setLoading(false)
      return true
    } catch (error) {
      setLoading(false)
      return false
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("bfpc_user")
    router.push("/")
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout, googleLogin }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
