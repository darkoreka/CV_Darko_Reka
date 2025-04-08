"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PhotoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const presentation = "https://res.cloudinary.com/kineto-app/image/upload/v1744104612/bemutato_skcsh2.jpg"
  const bachelor = "https://res.cloudinary.com/kineto-app/image/upload/v1744104612/Bachelor2_vslxsc.jpg"
  const bachelorPhoto = "https://res.cloudinary.com/kineto-app/image/upload/v1744104611/Bachelor_rjdk1q.jpg"
  const mountains = "https://res.cloudinary.com/kineto-app/image/upload/v1744104611/Mountains_pkt6w1.jpg"
  const slam = "https://res.cloudinary.com/kineto-app/image/upload/v1744104611/slam_aqtyni.jpg"

  // Sample images - replace with your actual images
  const images = [
    presentation,
    bachelor,
    bachelorPhoto,
    mountains,
    slam
  ]

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1
    const newIndex = isLastImage ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext()
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex])

  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src={images[currentIndex] || "/placeholder.svg"}
          alt={`Profile photo ${currentIndex + 1}`}
          fill
          className="object-cover"
          priority={currentIndex === 0}
        />
      </div>

      {/* Navigation buttons */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white rounded-full p-1 z-10"
        onClick={goToPrevious}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Previous image</span>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white rounded-full p-1 z-10"
        onClick={goToNext}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Next image</span>
      </Button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
            onClick={() => setCurrentIndex(index)}
          >
            <span className="sr-only">Go to image {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

