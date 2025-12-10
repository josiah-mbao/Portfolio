import ContactCard from '../ui/ContactCard';
import Reveal from '../ui/Reveal';

export default function ContactSection() {
  return (
    <footer id="contact" className="py-16 bg-gradient-to-br from-stone-900 via-slate-900 to-stone-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal delay={100} direction="up">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-amber-300">Get In Touch</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              I'm always interested in new opportunities and collaborations.
              Whether you're looking to hire or just want to connect, feel free to reach out!
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Contact Info */}
          <Reveal delay={200} direction="up">
            <ContactCard
              icon="📧"
              title="Email"
              description="For business inquiries and project discussions"
              link="mailto:josiahmbaomc@gmail.com"
              linkText="josiahmbaomc@gmail.com"
            />
          </Reveal>

          {/* Location */}
          <Reveal delay={300} direction="up">
            <ContactCard
              icon="📍"
              title="Location"
              description="Based in Nairobi, Kenya. UTC+3 | Available for remote work worldwide"
            />
          </Reveal>

          {/* Freelance */}
          <Reveal delay={400} direction="up">
            <ContactCard
              icon="💼"
              title="Freelance"
              description="Available for Python, AI, and automation projects"
              link="https://www.fiverr.com/s/WEp0eGQ"
              linkText="Visit Fiverr Profile"
            />
          </Reveal>
        </div>

        {/* Social Links */}
        <Reveal delay={500} direction="up">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-orange-300 mb-6">Connect With Me</h3>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Reveal delay={600} direction="up">
                <a
                  href="https://www.linkedin.com/in/josiah-mbao"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  LinkedIn
                </a>
              </Reveal>
              <Reveal delay={700} direction="up">
                <a
                  href="https://github.com/josiah-mbao"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-5.467-1.113-5.467-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              </Reveal>
              <Reveal delay={800} direction="up">
                <a
                  href="mailto:josiahmbaomc@gmail.com"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-slate-900"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4h-16c-1.1 0-1.99.9-1.99 2l-.01 12c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2zm0 4l-8 5-8-5v-2l8 5 8-5v2z"/>
                  </svg>
                  Email
                </a>
              </Reveal>
            </div>

            <Reveal delay={900} direction="up">
              <div className="border-t border-orange-400/20 pt-8">
                <p className="text-gray-400 text-sm">
                  Open to AI Engineer, Machine Learning Engineer, DevOps Engineer, Cloud Engineer, and Python Developer roles.
                  <br />
                  Building the future, one intelligent system at a time. 🚀
                </p>
              </div>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
