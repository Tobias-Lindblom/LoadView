import { createPortal } from "react-dom";
import { ArrowLeft, Mail, ExternalLink } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactPage({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-linear-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-lg rounded-xl border border-gray-700/50 shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden animate-scaleIn flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-700/50 flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">Kontakt</h2>
          <button
            onClick={onClose}
            className="w-9 h-9 cursor-pointer flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-colors"
            aria-label="Stäng"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-linear-to-br from-blue-500 to-blue-600 rounded-xl p-3 flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white mb-1">Kontakt</h1>
                <p className="text-gray-400">Hör av dig</p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed mb-6">
                Har du frågor om LoadView, förslag på förbättringar eller vill
                diskutera samarbetsmöjligheter?
                <br /> Tveka inte att höra av dig!
              </p>

              <div className="space-y-6">
                {/* Email Section */}
                <div className="bg-gray-900/50 border border-gray-700/30 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-500/10 rounded-lg p-2.5 shrink-0">
                      <Mail className="w-5 h-5 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-white mb-2">
                        E-post
                      </h3>
                      <a
                        href="mailto:tobiasmagnuslindblom@gmail.com"
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        tobiasmagnuslindblom@gmail.com
                      </a>
                      <p className="text-gray-400 text-sm mt-2">
                        Primär kontaktkanal för allmänna förfrågningar
                      </p>
                    </div>
                  </div>
                </div>

                {/* GitHub Section */}
                <div className="bg-gray-900/50 border border-gray-700/30 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-purple-500/10 rounded-lg p-2.5 shrink-0">
                      <ExternalLink className="w-5 h-5 text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-white mb-2">
                        GitHub
                      </h3>
                      <a
                        href="https://github.com/tobias-lindblom"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        github.com/tobias-lindblom
                      </a>
                      <p className="text-gray-400 text-sm mt-2">
                        Tekniska frågor och buggrapporter
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-blue-500/5 border border-blue-500/20 rounded-lg">
                <h3 className="text-base font-semibold text-white mb-2">
                  Samarbetsmöjligheter
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  LoadView är utvecklad som ett examensarbete och är öppen för
                  vidareutveckling. Är du intresserad av att diskutera
                  kommersiell användning, anpassningar för specifika behov eller
                  andra samarbetsmöjligheter? Hör gärna av dig!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
