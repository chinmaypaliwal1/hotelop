import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-cream-100 text-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-serif font-bold text-gold-600 mb-4">The Obroi</h3>
            <p className="text-muted-foreground mb-4">
              Experience unparalleled luxury where timeless elegance meets modern comfort.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gold-600 hover:text-gold-700 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gold-600 hover:text-gold-700 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gold-600 hover:text-gold-700 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-gold-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/rooms" className="text-muted-foreground hover:text-gold-600 transition-colors">
                  Rooms & Suites
                </Link>
              </li>
              <li>
                <Link href="/dining" className="text-muted-foreground hover:text-gold-600 transition-colors">
                  Dining
                </Link>
              </li>
              <li>
                <Link href="/offers" className="text-muted-foreground hover:text-gold-600 transition-colors">
                  Offers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <address className="not-italic text-muted-foreground">
              <p>123 Luxury Avenue</p>
              <p>Paradise City, PC 12345</p>
              <p className="mt-2">Phone: +1 (555) 123-4567</p>
              <p>Email: info@theobroi.com</p>
            </address>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Newsletter</h4>
            <p className="text-muted-foreground mb-4">Subscribe to our newsletter for exclusive offers and updates.</p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-gold-400"
                required
              />
              <button
                type="submit"
                className="bg-gold-600 hover:bg-gold-700 text-white px-4 py-2 rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} The Obroi Luxury Hotel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

