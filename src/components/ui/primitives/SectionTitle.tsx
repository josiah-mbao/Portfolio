interface SectionTitleProps {
  children: React.ReactNode;
  size?: '3xl' | '4xl' | '5xl' | '6xl';
  align?: 'left' | 'center' | 'right';
  color?: 'emerald' | 'amber' | 'white';
  margin?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sizeClasses = {
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
  '5xl': 'text-5xl',
  '6xl': 'text-6xl'
};

const alignClasses = {
  'left': 'text-left',
  'center': 'text-center',
  'right': 'text-right'
};

const colorClasses = {
  'emerald': 'text-emerald-300',
  'amber': 'text-amber-300',
  'white': 'text-white'
};

const marginClasses = {
  'sm': 'mb-4',
  'md': 'mb-6',
  'lg': 'mb-8',
  'xl': 'mb-12'
};

export default function SectionTitle({
  children,
  size = '4xl',
  align = 'center',
  color = 'emerald',
  margin = 'md',
  className = ''
}: SectionTitleProps) {
  return (
    <h2 className={`font-bold ${sizeClasses[size]} ${alignClasses[align]} ${colorClasses[color]} ${marginClasses[margin]} ${className}`}>
      {children}
    </h2>
  );
}
