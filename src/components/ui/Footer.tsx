interface Props {
  onAboutClick: () => void;
  onContactClick: () => void;
}

export default function Footer({ onAboutClick, onContactClick }: Props) {
  return (
    <footer className="mt-8 pt-6 border-t border-gray-700/30">
      <div className="flex flex-col items-center gap-3 text-sm">
        <div className="flex items-center gap-4 text-gray-400">
          <button
            onClick={onAboutClick}
            className="hover:text-blue-400 cursor-pointer transition-colors"
          >
            Om applikationen
          </button>
          <span className="text-gray-600">•</span>
          <button
            onClick={onContactClick}
            className="hover:text-blue-400 cursor-pointer transition-colors"
          >
            Kontakt
          </button>
          <span className="text-gray-600">•</span>
          <span className="text-gray-500">v1.0.0</span>
        </div>
        <div className="text-gray-500 text-xs">© 2025 LoadView</div>
      </div>
    </footer>
  );
}
