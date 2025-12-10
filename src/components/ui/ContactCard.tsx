interface ContactCardProps {
  icon: string;
  title: string;
  description: string;
  link?: string;
  linkText?: string;
}

export default function ContactCard({ icon, title, description, link, linkText }: ContactCardProps) {
  const CardContent = (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-amber-500/30 rounded-xl p-6 text-center hover:border-amber-400/50 transition-colors duration-300">
      <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
        <span className="text-2xl">{icon}</span>
      </div>
      <h3 className="text-lg font-semibold text-amber-300 mb-2">{title}</h3>
      <p className="text-gray-300 mb-3">{description}</p>
      {link && linkText && (
        <a
          href={link}
          className="text-orange-400 hover:text-orange-300 transition-colors underline"
          target={link.startsWith('http') ? '_blank' : undefined}
          rel={link.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
          {linkText}
        </a>
      )}
    </div>
  );

  return CardContent;
}
