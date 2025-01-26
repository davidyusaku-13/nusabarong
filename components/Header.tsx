import Link from "next/link";

export default function Header() {
  return (
    <nav className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-xl font-bold">
            Nusa Barong Motor
          </Link>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:text-secondary">
                Home
              </Link>
            </li>
            <li>
              <Link href="/galleries" className="hover:text-secondary">
                Galleries
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-secondary">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-secondary">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
