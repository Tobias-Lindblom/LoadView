import { useState } from "react";
import { Mail, Lock, User, ArrowLeft, Loader } from "lucide-react";

interface Props {
  onLogin: (userName: string) => void;
}

export default function AuthPage({ onLogin }: Props) {
  const [isLogin, setIsLogin] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 800));

    if (isForgotPassword) {
      alert(`Återställningslänk skickad till ${email}`);
      setIsForgotPassword(false);
      setEmail("");
      setIsLoading(false);
      return;
    }

    if (!isLogin && password !== confirmPassword) {
      alert("Lösenorden matchar inte");
      setIsLoading(false);
      return;
    }

    const userName = isLogin ? "Tobias Lindblom" : name || "Tobias Lindblom";
    onLogin(userName);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="w-full flex flex-col items-center">
        {/* Card Container with Skewed Background */}
        <div className="relative w-full max-w-md">
          {/* Skewed Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>

          {/* Main Card */}
          <div className="relative px-6 py-10 bg-gray-800/95 shadow-lg sm:rounded-3xl sm:p-10 md:p-16 border border-gray-700/50">
            {/* Logo and Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center mb-4">
                <img
                  src="/loadview-logo.png"
                  alt="LoadView Logo"
                  className="h-24 w-auto"
                />
              </div>
            </div>
            {!isForgotPassword && (
              <div className="flex gap-3 mb-8 border-b-2 border-gray-700 pb-4">
                <button
                  onClick={() => setIsLogin(true)}
                  className={`flex-1 py-2 cursor-pointer font-semibold transition-all duration-200 ${
                    isLogin
                      ? "text-blue-400 border-b-2 border-blue-400 -mb-4 pb-4"
                      : "text-gray-400 hover:text-gray-300"
                  }`}
                >
                  Logga in
                </button>
                <button
                  onClick={() => setIsLogin(false)}
                  className={`flex-1 py-2 cursor-pointer font-semibold transition-all duration-200 ${
                    !isLogin
                      ? "text-blue-400 border-b-2 border-blue-400 -mb-4 pb-4"
                      : "text-gray-400 hover:text-gray-300"
                  }`}
                >
                  Registrera
                </button>
              </div>
            )}

            {isForgotPassword && (
              <div className="mb-8 border-b-2 border-gray-700 pb-4">
                <h2 className="text-2xl font-bold text-white mb-2">
                  Återställ lösenord
                </h2>
                <p className="text-sm text-gray-400">
                  Ange din e-postadress så skickar vi en återställningslänk
                </p>
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="space-y-6 divide-y divide-gray-700"
            >
              <div className="space-y-6">
                <div>
                  {!isLogin && !isForgotPassword && (
                    <div className="relative pt-6">
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-600 text-white focus:outline-none focus:border-blue-400 transition-colors"
                        placeholder="Ditt namn"
                        required
                      />
                      <label
                        htmlFor="name"
                        className="absolute left-0 -top-3 text-gray-400 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 transition-all peer-focus:-top-3 peer-focus:text-gray-400 peer-focus:text-sm"
                      >
                        Namn
                      </label>
                    </div>
                  )}
                </div>

                <div>
                  <div className="relative pt-6">
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-600 text-white focus:outline-none focus:border-blue-400 transition-colors"
                      placeholder="E-postadress"
                      required
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 -top-3 text-gray-400 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 transition-all peer-focus:-top-3 peer-focus:text-gray-400 peer-focus:text-sm"
                    >
                      E-post
                    </label>
                  </div>
                </div>

                {!isForgotPassword && (
                  <>
                    <div>
                      <div className="relative pt-6">
                        <input
                          type="password"
                          id="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-600 text-white focus:outline-none focus:border-blue-400 transition-colors"
                          placeholder="Lösenord"
                          required
                          minLength={6}
                        />
                        <label
                          htmlFor="password"
                          className="absolute left-0 -top-3 text-gray-400 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 transition-all peer-focus:-top-3 peer-focus:text-gray-400 peer-focus:text-sm"
                        >
                          Lösenord
                        </label>
                      </div>
                    </div>

                    {!isLogin && (
                      <div>
                        <div className="relative pt-6">
                          <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-600 text-white focus:outline-none focus:border-blue-400 transition-colors"
                            placeholder="Bekräfta lösenord"
                            required
                            minLength={6}
                          />
                          <label
                            htmlFor="confirmPassword"
                            className="absolute left-0 -top-3 text-gray-400 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 transition-all peer-focus:-top-3 peer-focus:text-gray-400 peer-focus:text-sm"
                          >
                            Bekräfta lösenord
                          </label>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 mt-8 cursor-pointer bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-md hover:from-blue-600 hover:to-blue-800 disabled:from-blue-400 disabled:to-blue-600 disabled:cursor-not-allowed transition-all duration-300 font-semibold flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader className="w-4 h-4 animate-spin" />
                    <span>Bearbetar...</span>
                  </>
                ) : isForgotPassword ? (
                  <>
                    <Mail className="w-4 h-4" />
                    <span>Skicka återställningslänk</span>
                  </>
                ) : isLogin ? (
                  <>
                    <Lock className="w-4 h-4" />
                    <span>Logga in</span>
                  </>
                ) : (
                  <>
                    <User className="w-4 h-4" />
                    <span>Skapa konto</span>
                  </>
                )}
              </button>
            </form>

            {isLogin && !isForgotPassword && (
              <div className="mt-6 text-center border-t-2 border-gray-700 pt-6">
                <button
                  onClick={() => setIsForgotPassword(true)}
                  className="text-sm cursor-pointer text-blue-400 hover:text-blue-300 transition-colors font-medium"
                >
                  Glömt lösenord?
                </button>
              </div>
            )}

            {isForgotPassword && (
              <div className="mt-6 text-center border-t-2 border-gray-700 pt-6">
                <button
                  onClick={() => {
                    setIsForgotPassword(false);
                    setEmail("");
                  }}
                  className="text-sm text-gray-400 cursor-pointer hover:text-gray-300 transition-colors flex items-center gap-1 mx-auto font-medium"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Tillbaka till inloggning
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
