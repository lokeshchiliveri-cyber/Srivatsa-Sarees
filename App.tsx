
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CollectionGrid } from './components/CollectionGrid';
import { Footer } from './components/Footer';
import { Logo } from './components/Logo';

function App() {
  const [isDownloading, setIsDownloading] = useState(false);

  const downloadLogo = async () => {
    setIsDownloading(true);
    const element = document.getElementById('srivatsa-logo-export');
    if (!element) return;

    try {
      const svg = element.querySelector('svg')?.outerHTML;
      // Note: Full high-res canvas rendering would require additional libraries in this environment,
      // so we provide the clean SVG vector which is the industry standard for logo delivery.
      if (svg) {
        const blob = new Blob([svg], {type: 'image/svg+xml;charset=utf-8'});
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'srivatsa_sarees_logo_official.svg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch (err) {
      console.error('Download failed', err);
    } finally {
      setTimeout(() => setIsDownloading(false), 1000);
    }
  };

  return (
    <div className="min-h-screen bg-[#fffaf0]">
      <Navbar />

      <main>
        <Hero />

        {/* Brand Identity / Download Section */}
        <section className="py-24 bg-white border-y border-yellow-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-serif-cinzel gold-gradient mb-4">OFFICIAL INSIGNIA</h2>
            <p className="text-gray-500 font-serif-playfair italic mb-12 uppercase text-[10px] tracking-[0.3em]">The mark of pure heritage</p>
            
            <div className="bg-[#fffaf0] p-16 rounded-xl shadow-[inset_0_2px_15px_rgba(0,0,0,0.02)] border border-yellow-100/50 inline-block">
               {/* Show tagline in official insignia as requested */}
               <Logo id="srivatsa-logo-export" size="lg" showTagline={true} />
            </div>

            <div className="mt-12">
              <button 
                onClick={downloadLogo}
                disabled={isDownloading}
                className="group relative inline-flex items-center gap-4 px-10 py-5 bg-red-950 text-white font-semibold tracking-[0.25em] text-xs rounded-sm hover:bg-red-900 transition-all duration-300 disabled:opacity-50 shadow-lg"
              >
                {isDownloading ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    PREPARING ASSETS...
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    DOWNLOAD LOGO (VECTOR)
                  </>
                )}
              </button>
              <div className="mt-6 flex flex-col items-center gap-2">
                <span className="text-[9px] text-gray-400 tracking-[0.4em] uppercase">High Resolution Silk Gold Finish</span>
              </div>
            </div>
          </div>
        </section>

        <CollectionGrid />

        {/* Brand Philosophy */}
        <section className="py-32 bg-[#fdfaf5]">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-serif-cinzel gold-gradient mb-16 tracking-[0.2em]">THE SRIVATSA PROMISE</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              <div className="flex flex-col items-center group">
                <div className="w-20 h-20 rounded-full border border-yellow-600/50 flex items-center justify-center mb-8 group-hover:bg-yellow-100/30 transition-colors duration-500 shadow-sm">
                  <span className="font-telugu text-3xl text-[#996515]">వే</span>
                </div>
                <h3 className="font-serif-cinzel text-lg mb-4 tracking-widest text-[#996515]">PURE ROOTS</h3>
                <p className="text-sm text-gray-500 font-serif-playfair leading-relaxed max-w-xs italic">Inspired by divinity, our sarees carry the purity of ancient Telugu tradition.</p>
              </div>
              <div className="flex flex-col items-center group">
                <div className="w-20 h-20 rounded-full border border-yellow-600/50 flex items-center justify-center mb-8 group-hover:bg-yellow-100/30 transition-colors duration-500 shadow-sm">
                  <span className="font-telugu text-3xl text-[#996515]">క</span>
                </div>
                <h3 className="font-serif-cinzel text-lg mb-4 tracking-widest text-[#996515]">MASTER KALA</h3>
                <p className="text-sm text-gray-500 font-serif-playfair leading-relaxed max-w-xs italic">Handwoven by master artisans who breathe life into every single thread.</p>
              </div>
              <div className="flex flex-col items-center group">
                <div className="w-20 h-20 rounded-full border border-yellow-600/50 flex items-center justify-center mb-8 group-hover:bg-yellow-100/30 transition-colors duration-500 shadow-sm">
                  <span className="font-telugu text-3xl text-[#996515]">శ్రీ</span>
                </div>
                <h3 className="font-serif-cinzel text-lg mb-4 tracking-widest text-[#996515]">SHRI GRACE</h3>
                <p className="text-sm text-gray-500 font-serif-playfair leading-relaxed max-w-xs italic">Designed for the elegance and timeless strength of the modern woman.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section - Moved tagline here as text rather than logo part */}
        <section className="py-28 bg-[#1a1310] overflow-hidden relative">
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif-playfair italic text-white/90 mb-10 tracking-tight leading-tight">
              "Prathi intlo undalsindhe!"
            </h2>
            <p className="text-yellow-600/80 mb-12 tracking-[0.5em] uppercase text-xs font-semibold">The heart of every Telugu home</p>
            <button className="px-14 py-6 border border-yellow-700/50 text-yellow-600 font-bold tracking-[0.4em] hover:bg-yellow-700 hover:text-white transition-all duration-700 rounded-sm text-xs">
              REQUEST BROCHURE
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
