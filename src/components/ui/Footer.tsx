interface FooterProps {
  onAboutClick: () => void;
  onContactClick: () => void;
}

export default function Footer({ onAboutClick, onContactClick }: FooterProps) {
  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold mb-4">LoadView</h3>
            <p className="text-gray-400 text-sm">
              Professionell lastplanering för moderna logistikföretag
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={onAboutClick}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Om oss
                </button>
              </li>
              <li>
                <button
                  onClick={onContactClick}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Kontakt
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Juridiskt</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Sekretess
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Villkor
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} LoadView. Alla rättigheter förbehållna.
          </p>
        </div>
      </div>
    </footer>
  );
}
