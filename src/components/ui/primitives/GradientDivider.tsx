interface GradientDividerProps {
  colors?: [string, string]; // e.g., ['emerald', 'cyan']
  width?: string; // e.g., 'w-24', 'w-32'
  height?: string; // e.g., 'h-1', 'h-2'
  rounded?: string; // e.g., 'rounded-full', 'rounded-md'
  shadow?: boolean;
  className?: string;
}

const colorMap = {
  emerald: 'from-emerald-400 to-cyan-400',
  cyan: 'from-cyan-400 to-blue-400',
  amber: 'from-amber-400 to-orange-400',
  purple: 'from-purple-400 to-pink-400',
  blue: 'from-blue-400 to-indigo-400'
};

export default function GradientDivider({
  colors = ['emerald', 'cyan'],
  width = 'w-24',
  height = 'h-1',
  rounded = 'rounded-full',
  shadow = true,
  className = ''
}: GradientDividerProps) {
  const gradientClasses = colors.map(color => colorMap[color as keyof typeof colorMap] || 'from-gray-400 to-gray-500');
  const shadowClass = shadow ? 'shadow-lg shadow-emerald-400/50' : '';

  return (
    <div className={`${width} ${height} bg-gradient-to-r ${gradientClasses[0]} mx-auto ${rounded} ${shadowClass} ${className}`}></div>
  );
}
