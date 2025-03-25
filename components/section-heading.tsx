import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

const SectionHeading = ({ title, subtitle, centered = false, className }: SectionHeadingProps) => {
  return (
    <div className={cn("mb-8", centered && "text-center", className)}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">{title}</h2>
      {subtitle && <p className="text-lg text-muted-foreground max-w-3xl m-auto">{subtitle}</p>}
    </div>
  )
}

export default SectionHeading

