import {
  Grid3x3,
  RotateCcw,
  Weight,
  Check,
  BarChart3,
  Palette,
  Download,
  FileText,
  ArrowRight,
} from "lucide-react";
import Footer from "./ui/Footer";

interface Props {
  onGetStarted: () => void;
  onAboutClick: () => void;
  onContactClick: () => void;
}

export default function LandingPage({
  onGetStarted,
  onAboutClick,
  onContactClick,
}: Props) {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 to-gray-800 flex flex-col">
      <main className="flex-1 overflow-auto flex items-center justify-center p-8">
        <div className="max-w-6xl w-full mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center mb-6">
              <img
                src="/loadview-logo.png"
                alt="LoadView Logo"
                className="h-96 w-auto"
              />
            </div>
            <p className="select-none text-xl text-gray-100 mb-3 font-semibold -mt-30">
              Professionell lastplanering med viktbalans och laglig kontroll
            </p>
            <p className="select-none text-base text-gray-300 max-w-2xl mx-auto leading-relaxed mb-6">
              Optimera din lastning med visuell planering, automatisk
              viktbalansering enligt svenska regler, laglig viktgränskontroll
              och professionella rapporter med streckkoder.
            </p>
            <button
              onClick={onGetStarted}
              className="inline-flex items-center cursor-pointer gap-2 px-6 py-3 bg-linear-to-br from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold text-base rounded-xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
            >
              Logga in eller Registrera dig
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Feature Cards */}
          <div className="select-none grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-linear-to-br from-blue-500/10 to-blue-600/5 backdrop-blur-sm border border-blue-500/20 rounded-xl p-4 hover:from-blue-500/20 hover:to-blue-600/10 hover:border-blue-400/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 group">
              <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-lg">
                <Grid3x3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                Flexibla Layouter
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Stöd för 18-48 europallar – från distributionsbilar till
                standardtrailers och kompletta ekipage
              </p>
            </div>

            <div className="bg-linear-to-br from-purple-500/10 to-purple-600/5 backdrop-blur-sm border border-purple-500/20 rounded-xl p-4 hover:from-purple-500/20 hover:to-purple-600/10 hover:border-purple-400/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 group">
              <div className="w-12 h-12 bg-linear-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-lg">
                <RotateCcw className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                Drag & Drop
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Enkel placering och omorganisering med stöd för pallar i flera
                storlekar (1×1 upp till 3×3 platser)
              </p>
            </div>

            <div className="bg-linear-to-br from-orange-500/10 to-orange-600/5 backdrop-blur-sm border border-orange-500/20 rounded-xl p-4 hover:from-orange-500/20 hover:to-orange-600/10 hover:border-orange-400/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20 group">
              <div className="w-12 h-12 bg-linear-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-lg">
                <Weight className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">
                Vikthantering & Laglig Kontroll
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Realtidsövervakning av viktfördelning (fram/bak, vänster/höger)
                med säkerhetsvarningar. Automatisk kontroll mot lagliga
                viktgränser enligt Vägtrafikregisterförordningen
              </p>
            </div>

            <div className="bg-linear-to-br from-emerald-500/10 to-emerald-600/5 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-4 hover:from-emerald-500/20 hover:to-emerald-600/10 hover:border-emerald-400/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/20 group">
              <div className="w-12 h-12 bg-linear-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-lg">
                <Check className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                Fordonstyper & Lagliga Gränser
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                15 fordonsvarianter (6 kategorier) från 2-axlig lastbil till
                25,25m ekipage. Automatisk kontroll av totalvikt, lastvikt och
                axeltryck enligt svenska regler
              </p>
            </div>

            <div className="bg-linear-to-br from-green-500/10 to-green-600/5 backdrop-blur-sm border border-green-500/20 rounded-xl p-4 hover:from-green-500/20 hover:to-green-600/10 hover:border-green-400/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/20 group">
              <div className="w-12 h-12 bg-linear-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-lg">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-300 transition-colors">
                Detaljerad Statistik
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Realtidsöversikt av pallar, kollin, totalvikt, fyllnadsgrad,
                viktfördelning per färgkategori och fordonskapacitet
              </p>
            </div>

            <div className="bg-linear-to-br from-pink-500/10 to-pink-600/5 backdrop-blur-sm border border-pink-500/20 rounded-xl p-4 hover:from-pink-500/20 hover:to-pink-600/10 hover:border-pink-400/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-pink-500/20 group">
              <div className="w-12 h-12 bg-linear-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-lg">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-pink-300 transition-colors">
                Automatisk Färgkodning
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Visuell viktindikering med 5 nivåer (normal, halvtung, tung,
                mycket tung, extremt tung) för snabb identifiering av tunga
                pallar
              </p>
            </div>

            <div className="bg-linear-to-br from-cyan-500/10 to-cyan-600/5 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-4 hover:from-cyan-500/20 hover:to-cyan-600/10 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20 group">
              <div className="w-12 h-12 bg-linear-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-lg">
                <Download className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                Spara & Ladda
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Lokalt lagring av lastplaner med möjlighet att återanvända,
                exportera till JSON och importera tidigare sparade lastningar
              </p>
            </div>

            <div className="bg-linear-to-br from-indigo-500/10 to-indigo-600/5 backdrop-blur-sm border border-indigo-500/20 rounded-xl p-4 hover:from-indigo-500/20 hover:to-indigo-600/10 hover:border-indigo-400/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/20 group">
              <div className="w-12 h-12 bg-linear-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-lg">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                Professionella Rapporter
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Generera PDF-lastplaner med streckkoder, detaljerad
                viktinformation och lastfördelning för förare och lagerarbetare
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer onAboutClick={onAboutClick} onContactClick={onContactClick} />
    </div>
  );
}
