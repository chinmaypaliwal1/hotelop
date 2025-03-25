import SectionHeading from "@/components/section-heading"
import DiningCard from "@/components/dining-card"

export default function DiningPage() {
  // Sample data for dining options
  const diningOptions = [
    {
      id: "azure",
      name: "Azure",
      description: "Fine dining restaurant offering Mediterranean cuisine with a modern twist.",
      image: "/rooms/udaivilas-rooms.webp?height=600&width=800",
      cuisine: "Mediterranean",
      hours: "6:00 PM - 10:30 PM",
    },
    {
      id: "silk",
      name: "Silk",
      description: "Authentic Asian cuisine in an elegant setting with panoramic views.",
      image: "/rooms/udaivilas-rooms.webp?height=600&width=800",
      cuisine: "Asian Fusion",
      hours: "12:00 PM - 3:00 PM, 6:30 PM - 11:00 PM",
    },
    {
      id: "harvest",
      name: "Harvest",
      description: "Farm-to-table restaurant focusing on local, seasonal ingredients.",
      image: "/rooms/udaivilas-rooms.webp?height=600&width=800",
      cuisine: "Contemporary",
      hours: "7:00 AM - 10:30 AM, 12:00 PM - 3:00 PM",
    },
    {
      id: "the-lounge",
      name: "The Lounge",
      description: "Relaxed setting for afternoon tea, cocktails, and light bites.",
      image: "/rooms/udaivilas-rooms.webp?height=600&width=800",
      cuisine: "International",
      hours: "10:00 AM - 12:00 AM",
    },
    {
      id: "pool-bar",
      name: "Aqua Pool Bar",
      description: "Refreshing drinks and snacks served poolside in a tropical setting.",
      image: "/rooms/udaivilas-rooms.webp?height=600&width=800",
      cuisine: "Light Fare",
      hours: "10:00 AM - 6:00 PM (Seasonal)",
    },
    {
      id: "cigar-lounge",
      name: "The Humidor",
      description: "Premium selection of cigars and spirits in a sophisticated atmosphere.",
      image: "/rooms/udaivilas-rooms.webp?height=600&width=800",
      cuisine: "Tapas",
      hours: "5:00 PM - 1:00 AM",
    },
  ]

  return (
    <>
      <section className="pt-32 pb-12 bg-cream-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Dining Experiences"
            subtitle="Indulge in culinary excellence at our award-winning restaurants and bars."
            centered
          />
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {diningOptions.map((dining) => (
              <DiningCard key={dining.id} {...dining} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

