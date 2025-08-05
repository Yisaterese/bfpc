"use client"

import { useAuth } from "./contexts/AuthContext"
import LandingPage from "../components/LandingPage"
import Loading from "../components/Loading"
import { useEffect, useState } from "react"

export default function Home() {
  const { user, loading } = useAuth()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient || loading) {
    return <Loading />
  }

  return <LandingPage />
}
