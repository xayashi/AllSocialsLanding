import { LucideIcon } from 'lucide-react';
import { ExternalLink } from 'lucide-react';

interface SocialLinkProps {
  icon: LucideIcon;
  label: string;
  subLabel?: string;
  href: string;
  colorClass: string;
}

const SocialLink = ({ icon: Icon, label, subLabel, href, colorClass }: SocialLinkProps) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="group relative flex items-center justify-between w-full p-4 mb-3 bg-white/70 dark:bg-zinc-800/60 backdrop-blur-md border border-white/20 dark:border-zinc-700/50 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:bg-white/90 dark:hover:bg-zinc-800/90 hover:shadow-lg hover:shadow-purple-500/10"
  >
    <div className="flex items-center gap-4">
      <div className={`p-2.5 rounded-xl ${colorClass} bg-opacity-10 dark:bg-opacity-20`}>
        <Icon size={24} className={colorClass.replace('bg-', 'text-')} />
      </div>
      <div className="flex flex-col items-start">
        <span className="font-bold text-zinc-800 dark:text-zinc-100">{label}</span>
        {subLabel && <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400 tracking-wide">{subLabel}</span>}
      </div>
    </div>
    <ExternalLink size={16} className="text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </a>
);

export default SocialLink;

