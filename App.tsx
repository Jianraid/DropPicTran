import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HostScreen } from './components/HostScreen';
import { ClientScreen } from './components/ClientScreen';
import { LucideWifi, LucideSmartphone, LucideMonitor } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 space-y-8 bg-gradient-to-br from-slate-900 to-slate-950">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center justify-center p-4 bg-indigo-500/10 rounded-full mb-4 ring-1 ring-indigo-500/50 shadow-lg shadow-indigo-500/20">
          <LucideWifi className="w-12 h-12 text-indigo-400" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">AirBridge</h1>
        <p className="text-slate-400 max-w-md mx-auto text-lg">
          Secure, peer-to-peer file transfer over your local network. No cloud needed.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl px-4">
        <a href="#/host" className="group relative overflow-hidden rounded-2xl bg-slate-800/50 p-8 hover:bg-slate-800 transition-all border border-slate-700 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10 flex flex-col items-center text-center space-y-4">
            <div className="p-3 bg-indigo-500/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
              <LucideMonitor className="w-8 h-8 text-indigo-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Receive Files</h3>
              <p className="text-sm text-slate-400 mt-2">Start a Host session on this PC</p>
            </div>
          </div>
        </a>

        <a href="#/scan" className="group relative overflow-hidden rounded-2xl bg-slate-800/50 p-8 hover:bg-slate-800 transition-all border border-slate-700 hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/10">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10 flex flex-col items-center text-center space-y-4">
            <div className="p-3 bg-emerald-500/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
              <LucideSmartphone className="w-8 h-8 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Send Files</h3>
              <p className="text-sm text-slate-400 mt-2">Scan QR Code from your phone</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

const ScanRedirect = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center bg-slate-950">
            <div className="p-4 bg-slate-800 rounded-full mb-6">
               <LucideSmartphone className="w-12 h-12 text-slate-400" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-white">Scan QR Code</h2>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              Open your phone's camera app or a QR scanner and point it at the code displayed on the Host PC screen.
            </p>
            <a href="#/" className="mt-8 px-6 py-2 rounded-lg bg-slate-800 text-indigo-400 hover:text-white hover:bg-slate-700 transition-colors">
              Back to Home
            </a>
        </div>
    )
}

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/host" element={<HostScreen />} />
        <Route path="/scan" element={<ScanRedirect />} />
        <Route path="/upload/:hostId" element={<ClientScreen />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
};

export default App;