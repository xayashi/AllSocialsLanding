import { useState, useEffect } from 'react';
import { 
  Instagram, 
  Twitter, 
  Youtube, 
  Twitch, 
  Mail, 
  Check, 
  MessageCircle,
  ShoppingBag,
  Heart,
  Sparkles
} from 'lucide-react';
import SocialLink from './SocialLink';
import InterestTag from './InterestTag';

export default function App() {
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Animation trigger on load
  useEffect(() => {
    setMounted(true);
  }, []);

  const email = "contact@example.com";

  const handleCopyEmail = () => {
    // Fallback method for iframe/sandboxed environments where navigator.clipboard might be restricted
    const textArea = document.createElement("textarea");
    textArea.value = email;
    
    // Ensure the textarea is not visible but part of the DOM
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    textArea.style.top = "0";
    document.body.appendChild(textArea);
    
    textArea.focus();
    textArea.select();
    
    try {
      const successful = document.execCommand('copy');
      if (successful) {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (err) {
      console.error('Fallback: Oops, unable to copy', err);
    }
    
    document.body.removeChild(textArea);
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-zinc-50 dark:bg-zinc-900 font-sans selection:bg-purple-200 dark:selection:bg-purple-900">
      
      {/* --- Animated Background Elements --- */}
      <div className="fixed inset-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-400/20 dark:bg-purple-600/10 blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-400/20 dark:bg-blue-600/10 blur-[100px] animate-pulse-slow delay-1000" />
        <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] rounded-full bg-pink-300/20 dark:bg-pink-600/10 blur-[80px] animate-pulse-slow delay-2000" />
      </div>

      {/* --- Main Content Container --- */}
      <div className={`relative z-10 max-w-xl mx-auto px-4 py-12 md:py-20 flex flex-col items-center transition-all duration-1000 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* --- Profile Card --- */}
        <div className="w-full bg-white/60 dark:bg-zinc-800/40 backdrop-blur-xl border border-white/40 dark:border-zinc-700/50 rounded-3xl p-6 md:p-8 shadow-2xl shadow-zinc-200/50 dark:shadow-black/20 mb-8">
          
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
            
            {/* Left Column: Image */}
            <div className="flex-shrink-0 mx-auto md:mx-0 relative group">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden shadow-lg border-2 border-white dark:border-zinc-700 relative z-10">
                {/* Placeholder for Profile Image */}
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=688&auto=format&fit=crop" 
                  alt="Profile" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              {/* Decorative elements behind image */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-2xl opacity-30 blur-lg group-hover:opacity-50 transition-opacity duration-300" />
            </div>

            {/* Right Column: Info */}
            <div className="flex-1 text-center md:text-left w-full">
              <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-2">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-zinc-800 dark:text-zinc-100 tracking-tight">
                    Alex Designer
                  </h1>
                  <p className="text-purple-600 dark:text-purple-400 font-medium text-sm mt-1 flex items-center gap-1 justify-center md:justify-start">
                    <Sparkles size={14} /> Digital Artist & Creator
                  </p>
                </div>
                
                {/* Email Button (Compact) */}
                <button 
                  onClick={handleCopyEmail}
                  className="mt-3 md:mt-0 px-3 py-1.5 flex items-center gap-2 text-xs font-semibold bg-zinc-100 dark:bg-zinc-700/50 text-zinc-600 dark:text-zinc-300 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-600 transition-colors"
                >
                  {copied ? <Check size={14} className="text-green-500" /> : <Mail size={14} />}
                  {copied ? 'Copied!' : 'Email Me'}
                </button>
              </div>

              {/* Likes / Tags */}
              <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-4 mt-3">
                <InterestTag text="Photography" />
                <InterestTag text="UI/UX" />
                <InterestTag text="Matcha" />
                <InterestTag text="Travel" />
                <InterestTag text="Cats 🐱" />
              </div>

              <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-600 to-transparent my-4 opacity-50" />

              {/* About Text */}
              <div className="relative">
                <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed">
                  <span className="font-bold text-zinc-800 dark:text-zinc-200">About Me: </span>
                  Creating digital experiences and capturing moments. Always experimenting with new styles. Currently obsessed with procedural art and good coffee. Thanks for stopping by!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- Links Section --- */}
        <div className="w-full space-y-2">
          
          <div className="flex items-center gap-2 mb-4 px-2 opacity-80">
            <Heart size={16} className="text-purple-500 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Socials & Shops</span>
          </div>

          <SocialLink 
            icon={ShoppingBag} 
            label="My Shop" 
            subLabel="Prints, Stickers & Merch" 
            href="#" 
            colorClass="text-pink-500 bg-pink-500"
          />

          <SocialLink 
            icon={MessageCircle} 
            label="Discord Community" 
            subLabel="Join the server" 
            href="#" 
            colorClass="text-indigo-500 bg-indigo-500"
          />

          <SocialLink 
            icon={Instagram} 
            label="Instagram" 
            subLabel="@alex_creates" 
            href="#" 
            colorClass="text-fuchsia-600 bg-fuchsia-600"
          />

          <SocialLink 
            icon={Twitter} 
            label="Twitter / X" 
            subLabel="Thoughts & Sketches" 
            href="#" 
            colorClass="text-sky-500 bg-sky-500"
          />

          <SocialLink 
            icon={Youtube} 
            label="YouTube" 
            subLabel="Tutorials & Vlogs" 
            href="#" 
            colorClass="text-red-500 bg-red-500"
          />

          <SocialLink 
            icon={Twitch} 
            label="Twitch" 
            subLabel="Live Art Streams" 
            href="#" 
            colorClass="text-purple-500 bg-purple-500"
          />
          
        </div>

        {/* --- Footer --- */}
        <footer className="mt-12 text-center">
          <p className="text-zinc-400 dark:text-zinc-600 text-xs">
            © {new Date().getFullYear()} Alex Designer. All rights reserved.
          </p>
        </footer>

      </div>
      
      {/* Custom Animation Styles */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 0.6; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
}

