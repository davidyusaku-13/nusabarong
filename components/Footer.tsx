export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">Nusa Barong Motor</h3>
            <p className="mt-2 text-sm">
              Quality pre-owned vehicles since 2009
            </p>
          </div>
          <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
            <p className="text-sm">
              &copy; 2025 Nusa Barong Motor. All rights reserved.
            </p>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right">
            <a
              href="/contact"
              className="text-secondary hover:text-secondary-foreground mr-4"
            >
              Contact
            </a>
            <a
              href="/about"
              className="text-secondary hover:text-secondary-foreground"
            >
              About
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
