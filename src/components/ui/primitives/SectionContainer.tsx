

interface SectionContainerProps {
  children: React.ReactNode;
  maxWidth?: '4xl' | '5xl' | '6xl' | '7xl' | 'full';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const maxWidthClasses = {
  '4xl': 'max-w-4xl',
  '5xl': 'max-w-5xl',
  '6xl': 'max-w-6xl',
  '7xl': 'max-w-7xl',
  'full': 'max-w-full'
};

const paddingClasses = {
  'sm': 'px-4',
  'md': 'px-6',
  'lg': 'px-8',
  'xl': 'px-12'
};

export default function SectionContainer({
  children,
  maxWidth = '6xl',
  padding = 'md',
  className = ''
}: SectionContainerProps) {
  return (
    <div className={`mx-auto ${maxWidthClasses[maxWidth]} ${paddingClasses[padding]} ${className}`}>
      {children}
    </div>
  );
}
