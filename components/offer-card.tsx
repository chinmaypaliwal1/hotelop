import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface OfferCardProps {
  id: string
  title: string
  description: string
  image: string
  validUntil: string
  discount?: string
}

const OfferCard = ({ id, title, description, image, validUntil, discount }: OfferCardProps) => {
  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-64">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        {discount && (
          <div className="absolute top-4 right-4 bg-gold-600 text-white px-3 py-1 rounded-full font-bold">
            {discount}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-serif font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="mb-6 text-sm">
          <span className="font-medium">Valid Until:</span> {validUntil}
        </div>
        <div className="flex space-x-4">
          <Button asChild className="flex-1">
            <Link href={`/offers/${id}`}>Book Now</Link>
          </Button>
          <Button variant="outline" asChild className="flex-1">
            <Link href={`/offers/${id}`}>View Details</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default OfferCard

