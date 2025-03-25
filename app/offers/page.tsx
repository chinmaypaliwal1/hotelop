import SectionHeading from "@/components/section-heading"
import OfferCard from "@/components/offer-card"

export default function OffersPage() {
  // Sample data for offers
  const offers = [
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
    {
      id: "weekend-escape",
      title: "Weekend Escape",
      description: "Make the most of your weekend with late checkout, spa credits, and dining discounts.",
      image: "/placeholder.svg?height=600&width=800",
      validUntil: "February 28, 2024",
      discount: "10% Off",
    },
    {
      id: "honeymoon-bliss",
      title: "Honeymoon Bliss",
      description: "Celebrate your new beginning with a suite upgrade, couples massage, and romantic dinner.",
      image: "/placeholder.svg?height=600&width=800",
      validUntil: "December 31, 2023",
      discount: "25% Off",
    },
    {
      id: "wellness-retreat",
      title: "Wellness Retreat",
      description: "Rejuvenate with daily yoga sessions, spa treatments, and healthy dining options.",
      image: "/placeholder.svg?height=600&width=800",
      validUntil: "April 30, 2024",
      discount: "15% Off",
    },
    {
      id: "business-traveler",
      title: "Business Traveler",
      description: "Stay productive with early check-in, late checkout, and access to our business center.",
      image: "/placeholder.svg?height=600&width=800",
      validUntil: "Ongoing",
      discount: "10% Off",
    },
  ]

  return (
    <>
      <section className="pt-32 pb-12 bg-cream-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Special Offers"
            subtitle="Take advantage of our exclusive packages and promotions for an enhanced stay."
            centered
          />
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offers.map((offer) => (
              <OfferCard key={offer.id} {...offer} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

