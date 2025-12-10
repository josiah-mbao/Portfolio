interface CardShellProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'glass' | 'minimal';
  borderColor?: 'emerald' | 'amber' | 'cyan' | 'purple' | 'none';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
}

const variantClasses = {
  'default': 'bg-slate-700/80 border',
  'elevated': 'bg-slate-700 p-8 border shadow-lg',
  'glass': 'bg-slate-800/50 backdrop-blur-sm border',
  'minimal': 'bg-slate-700/60 border border-slate-600/50'
};

const borderColorClasses = {
  'emerald': 'border-emerald-500',
  'amber': 'border-amber-500/30',
  'cyan': 'border-cyan-400/60',
  'purple': 'border-purple-400/30',
  'none': 'border-transparent'
};

const paddingClasses = {
  'sm': 'p-4',
  'md': 'p-6',
  'lg': 'p-8',
  'xl': 'p-12'
};

const roundedClasses = {
  'sm': 'rounded-sm',
  'md': 'rounded-md',
  'lg': 'rounded-lg',
  'xl': 'rounded-xl',
  '2xl': 'rounded-2xl'
};

export default function CardShell({
  children,
  variant = 'default',
  borderColor = 'none',
  padding = 'md',
  rounded = 'xl',
  className = ''
}: CardShellProps) {
  return (
    <div className={`${variantClasses[variant]} ${borderColorClasses[borderColor]} ${paddingClasses[padding]} ${roundedClasses[rounded]} ${className}`}>
      {children}
    </div>
  );
}
