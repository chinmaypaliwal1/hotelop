import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface RoomCardProps {
  id: string
  name: string
  description: string
  price: number
  image: string
  size: string
  capacity: string
  amenities: string[]
}

const RoomCard = ({ id, name, description, price, image, size, capacity, amenities }: RoomCardProps) => {
  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-64">
        <Image src={image || "/rooms/room-2.webp"} alt={name} fill className="object-cover" />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-serif font-bold">{name}</h3>
          <div className="text-right">
            <span className="text-xl font-bold text-gold-600">${price}</span>
            <span className="text-muted-foreground text-sm">/night</span>
          </div>
        </div>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-4 mb-6 text-sm">
          <div>
            <span className="font-medium">Size:</span> {size}
          </div>
          <div>
            <span className="font-medium">Capacity:</span> {capacity}
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-6">
          {amenities.slice(0, 4).map((amenity, index) => (
            <span key={index} className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs">
              {amenity}
            </span>
          ))}
          {amenities.length > 4 && (
            <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs">
              +{amenities.length - 4} more
            </span>
          )}
        </div>
        <div className="flex space-x-4">
          <Button asChild className="flex-1">
            <Link href={`/rooms/${id}`}>Book Now</Link>
          </Button>
          <Button variant="outline" asChild className="flex-1">
            <Link href={`/rooms/${id}`}>View Details</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default RoomCard

