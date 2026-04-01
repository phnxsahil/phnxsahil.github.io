import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, Disc } from 'lucide-react';

export function SpotifyPlayer() {
  const [isOpen, setVinylOpen] = useState(false);
  const [isPlaying, setVinylPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  
  const [activeTrack, setActiveTrack] = useState({
    id: 'local-victory',
    name: 'Victory Lap',
    artist: 'Nipsey Hussle',
    color: '#c8f135',
    url: '/victory_lap.mp3' 
  });

  const tracks = [
    { id: "local-victory", name: "Victory Lap", artist: "Nipsey Hussle", color: "#c8f135", url: "/victory_lap.mp3" },
    { id: "0VjIjW4GlUZAMYd2vXMi3b", name: "Blinding Lights", artist: "The Weeknd", color: "#c13584" },
    { id: "7MXVkk9YMctZqd1Srtv4MB", name: "Starboy", artist: "The Weeknd ft. Daft Punk", color: "#8b5cf6" },
    { id: "463CkQjx2Zfoiqe0sSzDIL", name: "Levitating", artist: "Dua Lipa", color: "#ec4899" },
  ];

  useEffect(() => {
    const handleStart = () => {
      console.log("Audio start event received");
      if (audioRef.current) {
        audioRef.current.currentTime = 0; // Reset to start
        audioRef.current.volume = 1;
        audioRef.current.play().then(() => {
          setVinylPlaying(true);
          
          // Auto-pause/fade logic for Victory Lap intro
          setTimeout(() => {
            if (audioRef.current && !isOpen) { // Only auto-pause if user hasn't opened the player
               const fadeOut = setInterval(() => {
                 if (audioRef.current && audioRef.current.volume > 0.05) {
                   audioRef.current.volume -= 0.05;
                 } else {
                   if (audioRef.current) {
                     audioRef.current.pause();
                     audioRef.current.volume = 1;
                   }
                   setVinylPlaying(false);
                   clearInterval(fadeOut);
                 }
               }, 100);
            }
          }, 22000); // Play for 22 seconds (approx intro length)
        }).catch(e => {
          console.warn("Auto-play blocked by browser, user interaction needed", e);
        });
      }
    };

    window.addEventListener('portfolio-start', handleStart);
    return () => window.removeEventListener('portfolio-start', handleStart);
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.error("Playback failed", e));
    }
    setVinylPlaying(!isPlaying);
  };

  const selectVinylTrack = (track: any) => {
    setActiveTrack(track);
    setVinylOpen(false);
    
    if (track.url) {
       if (audioRef.current) {
         audioRef.current.src = track.url;
         audioRef.current.play().then(() => setVinylPlaying(true));
       }
    } else {
       // Spotify embed path
       setVinylPlaying(true);
    }
  };

  return (
    <div id="sp-widget" className={`${isPlaying ? 'active' : ''} fixed bottom-6 left-[calc(var(--side,0px)+24px)] z-[600] flex flex-col items-start`}>
      <AnimatePresence>
        {isPlaying && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="mb-3 flex flex-col items-start"
          >
            <span className="font-mono text-[10px] font-bold text-[var(--t)] tracking-wider uppercase">{activeTrack.name}</span>
            <span className="font-mono text-[8px] text-[var(--t3)] tracking-widest uppercase mt-0.5">{activeTrack.artist}</span>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="flex items-center gap-0 relative">
        <motion.div 
          onClick={() => setVinylOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`relative w-16 h-16 rounded-full border border-[var(--bhi)] cursor-pointer flex-shrink-0 group overflow-hidden shadow-2xl ${isPlaying ? 'spinning' : ''}`}
          style={{
            background: `radial-gradient(circle at 50% 50%, transparent 24%, rgba(255,255,255,.04) 25%, rgba(255,255,255,.04) 26%, transparent 27%, transparent 38%, rgba(255,255,255,.03) 39%, rgba(255,255,255,.03) 40%, transparent 41%, transparent 52%, rgba(255,255,255,.025) 53%, rgba(255,255,255,.025) 54%, transparent 55%), #0d0d0d`,
          }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[var(--y)] shadow-[0_0_10px_var(--y-dim)] flex items-center justify-center">
             <div className="w-1 h-1 rounded-full bg-[#0d0d0d]" />
          </div>
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
             <Disc size={16} className="text-white animate-pulse" />
          </div>
        </motion.div>
        
        <div 
          className="absolute -top-2 left-[52px] w-10 h-20 origin-top-left transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ transform: isPlaying ? 'rotate(-12deg)' : 'rotate(-35deg)' }}
        >
          <div className="absolute top-1 left-0 w-[2px] h-[68px] bg-gradient-to-b from-white/40 to-white/10 rounded-full origin-top">
            <div className="absolute -bottom-1 -left-0.5 w-1.5 h-1.5 rounded-full bg-white/30" />
          </div>
        </div>

        <motion.button
          onClick={(e) => { e.stopPropagation(); togglePlay(); }}
          whileHover={{ scale: 1.1 }}
          className="ml-4 w-10 h-10 rounded-full border border-[var(--bhi)] bg-[var(--surface)] flex items-center justify-center text-[var(--t)] hover:border-[var(--y)] transition-colors shadow-lg"
        >
          {isPlaying ? <Pause size={14} /> : <Play size={14} className="ml-0.5" />}
        </motion.button>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute bottom-[80px] left-0 w-56 bg-[var(--bg2)]/95 backdrop-blur-xl border border-[var(--bhi)] shadow-2xl p-2 rounded-sm"
          >
            <div className="px-3 py-2 mb-1 border-b border-[var(--bhi)]">
               <span className="font-mono text-[8px] tracking-[0.2em] text-[var(--t3)] uppercase">Selection_Archive</span>
            </div>
            {tracks.map(track => (
              <button 
                key={track.id}
                onClick={() => selectVinylTrack(track)}
                className={`w-full flex items-center gap-3 p-3 rounded-sm transition-all text-left group hover:bg-white/5 ${activeTrack.id === track.id ? 'bg-white/5' : ''}`}
              >
                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: track.color }} />
                <div className="flex flex-col min-width-0">
                  <span className="font-mono text-[10px] font-bold text-[var(--t)] truncate">{track.name}</span>
                  <span className="font-mono text-[8px] text-[var(--t3)] truncate uppercase mt-0.5">{track.artist}</span>
                </div>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      
      <audio ref={audioRef} src="/victory_lap.mp3" loop crossOrigin="anonymous" />
      
      <style>{`
        @keyframes vinylSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .spinning { animation: vinylSpin 3s linear infinite; }
      `}</style>
    </div>
  );
}
