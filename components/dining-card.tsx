import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface DiningCardProps {
  id: string
  name: string
  description: string
  image: string
  cuisine: string
  hours: string
}

const DiningCard = ({ id, name, description, image, cuisine, hours }: DiningCardProps) => {
  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-64">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-serif font-bold mb-2">{name}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-4 mb-6 text-sm">
          <div>
            <span className="font-medium">Cuisine:</span> {cuisine}
          </div>
          <div>
            <span className="font-medium">Hours:</span> {hours}
          </div>
        </div>
        <Button asChild>
          <Link href={`/dining/${id}`}>View Menu</Link>
        </Button>
      </div>
    </div>
  )
}

export default DiningCard

