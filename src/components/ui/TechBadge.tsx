interface TechBadgeProps {
  tech: string;
  variant?: 'default' | 'featured';
}

export default function TechBadge({ tech, variant = 'default' }: TechBadgeProps) {
  return (
    <span
      className={`px-2 py-1 rounded text-xs border ${
        variant === 'featured'
          ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400/30'
          : 'bg-slate-600/60 text-emerald-300 border-emerald-400/20'
      }`}
    >
      {tech}
    </span>
  );
}
