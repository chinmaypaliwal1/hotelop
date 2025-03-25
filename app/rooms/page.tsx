import SectionHeading from "@/components/section-heading"
import RoomCard from "@/components/room-card"

export default function RoomsPage() {
  // Sample data for rooms
  const rooms = [
    {
      id: "deluxe-king",
      name: "Deluxe King Room",
      description: "Spacious room with king-sized bed and city views.",
      price: 299,
      image: "/rooms/udaivilas-rooms.webp?height=600&width=800",
      size: "45 m²",
      capacity: "2 Adults",
      amenities: ["Free Wi-Fi", "Minibar", "Smart TV", "Air Conditioning", "Room Service"],
    },
    {
      id: "deluxe-twin",
      name: "Deluxe Twin Room",
      description: "Comfortable room with two twin beds, perfect for friends or colleagues.",
      price: 299,
      image: "/rooms/room-2.webp?height=600&width=800",
      size: "45 m²",
      capacity: "2 Adults",
      amenities: ["Free Wi-Fi", "Minibar", "Smart TV", "Air Conditioning", "Room Service"],
    },
    {
      id: "premium-king",
      name: "Premium King Room",
      description: "Enhanced room with king-sized bed and additional amenities.",
      price: 399,
      image: "/rooms/room-2.webp?height=600&width=800",
      size: "55 m²",
      capacity: "2 Adults",
      amenities: ["Free Wi-Fi", "Minibar", "Smart TV", "Air Conditioning", "Room Service", "Bathtub", "City View"],
    },
    {
      id: "executive-suite",
      name: "Executive Suite",
      description: "Elegant suite with separate living area and premium amenities.",
      price: 499,
      image: "/rooms/udaivilas-rooms.webp?height=600&width=800",
      size: "75 m²",
      capacity: "2 Adults, 2 Children",
      amenities: ["Free Wi-Fi", "Minibar", "Smart TV", "Air Conditioning", "Room Service", "Bathtub", "Lounge Access"],
    },
    {
      id: "family-suite",
      name: "Family Suite",
      description: "Spacious suite designed for families with connecting rooms.",
      price: 599,
      image: "/rooms/room-2.webp?height=600&width=800",
      size: "90 m²",
      capacity: "2 Adults, 3 Children",
      amenities: ["Free Wi-Fi", "Minibar", "Smart TV", "Air Conditioning", "Room Service", "Bathtub", "Kitchenette"],
    },
    {
      id: "presidential-suite",
      name: "Presidential Suite",
      description: "Our most luxurious accommodation with panoramic views and butler service.",
      price: 1299,
      image: "/rooms/udaivilas-rooms.webp?height=600&width=800",
      size: "150 m²",
      capacity: "4 Adults",
      amenities: [
        "Free Wi-Fi",
        "Minibar",
        "Smart TV",
        "Air Conditioning",
        "Room Service",
        "Bathtub",
        "Butler Service",
        "Private Terrace",
        "Dining Area",
      ],
    },
  ]

  return (
    <>
      <section className="pt-32 pb-12 bg-cream-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Rooms & Suites"
            subtitle="Discover our range of luxurious accommodations designed for your comfort and relaxation."
            centered
          />
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <RoomCard key={room.id} {...room} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

