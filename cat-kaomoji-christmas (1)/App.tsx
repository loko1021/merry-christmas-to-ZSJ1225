import React from 'react';
import Snowfall from './components/Snowfall';
import KaomojiTree from './components/KaomojiTree';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-b from-slate-100 via-blue-100 to-blue-200 text-slate-800">
      
      {/* Background Ambience - A subtle glowing moon or light source */}
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 z-0"></div>
      <div className="absolute top-[20%] left-[-10%] w-72 h-72 bg-white rounded-full blur-3xl opacity-40 z-0"></div>

      {/* Snow Effect */}
      <Snowfall />

      {/* Main Content Container */}
      <main className="relative z-20 flex flex-col items-center justify-center min-h-screen p-4 pb-20">
        
        {/* Header Title */}
        <div className="text-center mb-12 animate-fade-in-down">
          <h1 className="font-christmas text-6xl md:text-8xl text-red-600 drop-shadow-lg tracking-wider transform hover:scale-105 transition-transform duration-300">
            Merry Christmas
          </h1>
          <p className="mt-4 text-blue-800 text-lg md:text-xl font-bold tracking-widest uppercase opacity-80">
            Have a Purr-fect Holiday
          </p>
        </div>

        {/* The Tree */}
        <div className="relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/30 blur-2xl rounded-full z-[-1]"></div>
          <KaomojiTree />
        </div>

        {/* Cute Floating Cat Decoration */}
        <div className="absolute bottom-32 right-10 hidden md:block animate-bounce" style={{ animationDuration: '3s' }}>
          <div className="text-6xl transform -rotate-12 opacity-80 hover:opacity-100 transition-opacity">
            🐱
          </div>
        </div>

      </main>

      {/* Signature Area - Fixed Bottom Left */}
      <footer className="fixed bottom-6 left-6 z-30 font-christmas">
        <div className="bg-white/40 backdrop-blur-sm p-4 rounded-xl border border-white/50 shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
          <p className="text-slate-700 text-lg">
            To: <span className="font-bold text-slate-900 text-2xl ml-1">简奕逍</span>
          </p>
          <p className="text-xs text-slate-600 mt-1 flex items-center gap-1">
            Sent with <span className="text-red-500">♥</span> and <span className="text-blue-500">❄️</span>
          </p>
        </div>
      </footer>

    </div>
  );
};

export default App;
