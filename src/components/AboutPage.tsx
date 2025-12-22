import { createPortal } from "react-dom";
import { ArrowLeft } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function AboutPage({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-linear-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-lg rounded-xl border border-gray-700/50 shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden animate-scaleIn flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-700/50 flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">Om LoadView</h2>
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
              <img
                src="/favicon.ico"
                alt="LoadView Logo"
                className="h-24 w-auto"
              />
              <div>
                <h1 className="text-3xl font-bold text-white mb-1">LoadView</h1>
                <p className="text-gray-400">Version 1.0.0</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h2 className="text-lg font-bold text-white mb-3">
                  Om applikationen
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  LoadView är en professionell lastplaneringsapplikation som
                  hjälper dig att optimera lastning av lastbilar och släp med
                  visuell planering, automatisk viktbalansering och laglig
                  kontroll enligt svenska regler.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Applikationen är utvecklad som examensarbete inom utbildningen
                  JavaScript-utveckling och kombinerar modern webbutveckling med
                  praktisk problemlösning för logistikbranschen.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-white mb-2">
                  Om utvecklaren
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  LoadView är utvecklad av{" "}
                  <span className="font-semibold text-white">
                    Tobias Lindblom
                  </span>
                  , som kombinerar ny kunskap inom JavaScript-utveckling med 14
                  års erfarenhet från lager- och logistikbranschen. Denna unika
                  kombination har varit avgörande för att skapa en applikation
                  som verkligen förstår och möter branschens behov.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Med djup insikt i de praktiska utmaningarna kring
                  lastplanering, viktbalansering och lagliga krav har
                  utvecklingen kunnat fokusera på funktioner som faktiskt gör
                  skillnad i vardagen för logistikpersonal och transportföretag.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-white mb-2">
                  Examensarbete i JavaScript-utveckling
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Detta projekt representerar kulmen av utbildningen i
                  JavaScript-utveckling och demonstrerar färdigheter inom:
                </p>
                <ul className="text-gray-300 space-y-2 list-disc list-inside mb-4">
                  <li>Modern React-utveckling med TypeScript</li>
                  <li>Komponentbaserad arkitektur och state management</li>
                  <li>Responsiv UI/UX-design med Tailwind CSS</li>
                  <li>Komplex affärslogik och algoritmer</li>
                  <li>Integration med svenska trafikregler och bestämmelser</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-bold text-white mb-2">
                  Nyckelsfunktioner i applikationen
                </h3>
                <ul className="text-gray-300 space-y-2 list-disc list-inside">
                  <li>
                    Visuell lastplanering med intuitivt drag & drop-gränssnitt
                  </li>
                  <li>
                    Stöd för 18-48 europallar i olika fordonskonfigurationer
                  </li>
                  <li>
                    Automatisk viktbalansering (fram/bak och vänster/höger)
                  </li>
                  <li>
                    Laglig viktgränskontroll enligt
                    Vägtrafikregisterförordningen
                  </li>
                  <li>
                    15 fordonsvarianter från 2-axlig lastbil till 25,25m ekipage
                  </li>
                  <li>
                    Tydlig färgkodning efter viktklasser för snabb överblick
                  </li>
                  <li>Detaljerad statistik och realtidsrapportering</li>
                  <li>
                    Export av professionella lastrapporter med streckkoder
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
