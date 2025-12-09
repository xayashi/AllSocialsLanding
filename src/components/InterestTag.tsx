interface InterestTagProps {
  text: string;
}

const InterestTag = ({ text }: InterestTagProps) => (
  <span className="px-3 py-1 text-xs font-semibold tracking-wide text-zinc-600 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-700/50 rounded-full border border-zinc-200 dark:border-zinc-600/50 hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:text-purple-600 dark:hover:text-purple-300 transition-colors cursor-default">
    {text}
  </span>
);

export default InterestTag;

