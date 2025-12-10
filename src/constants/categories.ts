export const CATEGORY_ICONS = {
  'AI/ML': '🤖',
  'FinTech': '💰',
  'DevOps': '⚙️',
  'Gaming': '🎮',
  'Tools': '🔧',
  'default': '🚀'
} as const;

export const CATEGORY_COLORS = {
  'AI/ML': 'text-purple-400',
  'FinTech': 'text-green-400',
  'DevOps': 'text-blue-400',
  'Gaming': 'text-red-400',
  'Tools': 'text-orange-400',
  'default': 'text-gray-400'
} as const;

// Type-safe category keys
export type CategoryKey = keyof typeof CATEGORY_ICONS;
