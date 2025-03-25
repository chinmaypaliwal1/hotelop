import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SectionHeading from "@/components/section-heading"
import ImageGrid from "@/components/image-grid"
import RoomCard from "@/components/room-card"
import DiningCard from "@/components/dining-card"
import OfferCard from "@/components/offer-card"

export default function Home() {
  // Sample data for the image grid
  const galleryImages = [
    {
      src: "/homep/grand-lobby.webp?height=600&width=800",
      alt: "Luxury hotel lobby",
      title: "Grand Lobby",
      description: "Our welcoming entrance sets the tone for your luxurious stay",
    },
    {
      src: "/homep/private.webp?height=600&width=800",
      alt: "Private Balcony Dining.",
      title: "Private Balcony Dining.",
      description: "Relax and unwind with panoramic views",
    },
    {
      src: "/homep/pool.webp?height=600&width=800",
      alt: "Hotel suite",
      title: "Presidential Suite",
      description: "Experience unparalleled luxury in our finest accommodation",
    },
    {
      src: "/homep/room.webp?height=600&width=800",
      alt: "Hotel restaurant",
      title: "Fine Dining",
      description: "Savor exquisite cuisine prepared by world-class chefs",
    },
    {
      src: "/homep/walk.webp?height=600&width=800",
      alt: "Hotel spa",
      title: "Wellness Spa",
      description: "Rejuvenate your body and mind in our tranquil spa",
    },
    {
      src: "/homep/grand-lobby.webp?height=600&width=800",
      alt: "Hotel garden",
      title: "Lush Gardens",
      description: "Stroll through our meticulously maintained gardens",
    },
  ]

  // Featured rooms
  const featuredRooms = [
    {
      id: "deluxe-king",
      name: "Deluxe King Room",
      description: "Spacious room with king-sized bed and city views.",
      price: 299,
      image: "/placeholder.svg?height=600&width=800",
      size: "45 m²",
      capacity: "2 Adults",
      amenities: ["Free Wi-Fi", "Minibar", "Smart TV", "Air Conditioning", "Room Service"],
    },
    {
      id: "executive-suite",
      name: "Executive Suite",
      description: "Elegant suite with separate living area and premium amenities.",
      price: 499,
      image: "/placeholder.svg?height=600&width=800",
      size: "75 m²",
      capacity: "2 Adults, 2 Children",
      amenities: ["Free Wi-Fi", "Minibar", "Smart TV", "Air Conditioning", "Room Service", "Bathtub", "Lounge Access"],
    },
  ]

  // Featured dining options
  const featuredDining = [
    {
      id: "azure",
      name: "Azure",
      description: "Fine dining restaurant offering Mediterranean cuisine with a modern twist.",
      image: "/placeholder.svg?height=600&width=800",
      cuisine: "Mediterranean",
      hours: "6:00 PM - 10:30 PM",
    },
    {
      id: "silk",
      name: "Silk",
      description: "Authentic Asian cuisine in an elegant setting with panoramic views.",
      image: "/placeholder.svg?height=600&width=800",
      cuisine: "Asian Fusion",
      hours: "12:00 PM - 3:00 PM, 6:30 PM - 11:00 PM",
    },
  ]

  // Featured offers
  const featuredOffers = [
    {
      id: "romantic-getaway",
      title: "Romantic Getaway",
      description: "Enjoy a romantic escape with champagne, chocolate-covered strawberries, and breakfast in bed.",
      image: "/placeholder.svg?height=600&width=800",
      validUntil: "December 31, 2023",
      discount: "20% Off",
    },
    {
      id: "family-package",
      title: "Family Fun Package",
      description:
        "Perfect for families with children's activities, connecting rooms, and complimentary meals for kids under 12.",
      image: "/placeholder.svg?height=600&width=800",
      validUntil: "March 31, 2024",
      discount: "15% Off",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/homep/oberoi-banner.jpg?height=1080&width=1920"
            alt="Luxury hotel exterior"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl animate-fadeIn">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
                Experience Unparalleled Luxury
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Where timeless elegance meets modern comfort. Discover a sanctuary of luxury in the heart of the city.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/rooms">Explore Rooms</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 text-white border-white/30 hover:bg-white/20"
                >
                  View Special Offers
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slideUp">
              <SectionHeading
                title="Welcome to The Obroi"
                subtitle="A sanctuary of luxury and comfort, where every detail is crafted to perfection."
              />
              <p className="text-muted-foreground mb-4">
                Nestled in the heart of the city, The Obroi offers a perfect blend of traditional hospitality and modern
                luxury. Our commitment to excellence ensures that every moment of your stay is memorable.
              </p>
              <p className="text-muted-foreground mb-4">
                From our meticulously designed rooms to our world-class dining experiences, every aspect of The Obroi is
                designed to provide an unparalleled experience for our guests.
              </p>
              <Button asChild>
                <Link href="/about">Discover Our Story</Link>
              </Button>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl animate-slideUp animate-delay-200">
              <Image src="/homep/oberoi-banner.jpg?height=1000&width=800" alt="Hotel interior" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Experience The Oberoi"
            subtitle="Explore our luxurious accommodations, amenities, and experiences through our gallery."
            centered
          />
          <ImageGrid images={galleryImages} />
        </div>
      </section>

      {/* Rooms Section */}
      <section className="py-20 bg-cream-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Rooms & Suites"
            subtitle="Discover our range of luxurious accommodations designed for your comfort."
            centered
          />
          <div className="grid md:grid-cols-2 gap-8">
            {featuredRooms.map((room) => (
              <RoomCard key={room.id} {...room} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/rooms">View All Rooms</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Dining Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Dining Experiences"
            subtitle="Indulge in culinary excellence at our award-winning restaurants."
            centered
          />
          <div className="grid md:grid-cols-2 gap-8">
            {featuredDining.map((dining) => (
              <DiningCard key={dining.id} {...dining} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/dining">Explore All Dining Options</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section className="py-20 bg-cream-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Special Offers"
            subtitle="Take advantage of our exclusive packages and promotions for an enhanced stay."
            centered
          />
          <div className="grid md:grid-cols-2 gap-8">
            {featuredOffers.map((offer) => (
              <OfferCard key={offer.id} {...offer} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/offers">View All Offers</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gold-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Guest Experiences"
            subtitle="Hear what our guests have to say about their stay at The Obroi."
            centered
          />
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gold-200 rounded-full flex items-center justify-center text-gold-700 font-bold text-xl">
                  JD
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">John Doe</h4>
                  <p className="text-sm text-muted-foreground">New York, USA</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "An exceptional experience from start to finish. The staff went above and beyond to ensure our comfort,
                and the amenities were world-class."
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gold-200 rounded-full flex items-center justify-center text-gold-700 font-bold text-xl">
                  JS
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Jane Smith</h4>
                  <p className="text-sm text-muted-foreground">London, UK</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "The attention to detail at The Obroi is unmatched. From the elegant decor to the personalized service,
                every aspect of our stay was perfect."
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gold-200 rounded-full flex items-center justify-center text-gold-700 font-bold text-xl">
                  RJ
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Robert Johnson</h4>
                  <p className="text-sm text-muted-foreground">Sydney, Australia</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "The dining experience at Azure was the highlight of our stay. The chef's creations were exceptional,
                and the service was impeccable."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gold-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">Begin Your Luxury Experience</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Book your stay at The Obroi today and discover why we're the preferred choice for discerning travelers.
          </p>
          <Button size="lg" className="bg-white text-gold-600 hover:bg-white/90">
            Book Your Stay
          </Button>
        </div>
      </section>
    </>
  )
}

