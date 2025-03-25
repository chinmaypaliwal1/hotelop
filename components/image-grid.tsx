import Image from "next/image"
import { cn } from "@/lib/utils"

interface ImageItem {
  src: string
  alt: string
  title?: string
  description?: string
}

interface ImageGridProps {
  images: ImageItem[]
  className?: string
}

const ImageGrid = ({ images, className }: ImageGridProps) => {
  return (
    <div className={cn("image-grid", className)}>
      {images.map((image, index) => (
        <div
          key={index}
          className="image-grid-item group animate-fadeIn"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <Image
            src={image.src || "/homep/oberoi-banner.webp"}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {(image.title || image.description) && (
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
              {image.title && <h3 className="text-xl font-serif font-bold">{image.title}</h3>}
              {image.description && <p className="text-sm mt-2">{image.description}</p>}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default ImageGrid

