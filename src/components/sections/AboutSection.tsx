import Reveal from '../ui/Reveal';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-stone-900 via-slate-900 to-gray-900 text-white relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <Reveal delay={100} direction="up">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-emerald-300">
              About Me
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Reveal delay={200} direction="left" distance={30}>
            <div className="space-y-6">
              <div className="bg-slate-700 p-8 rounded-2xl border border-emerald-500">
                <h3 className="text-2xl font-semibold mb-4 text-emerald-300">What I Do</h3>
                <ul className="space-y-3 text-gray-100">
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 mt-1">🤖</span>
                    <span>MLOps: Designing AI model lifecycles on Kubernetes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 mt-1">⚙️</span>
                    <span>Systems: High-performance services with Rust & Go</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 mt-1">☁️</span>
                    <span>Cloud: Distributed applications on GCP & Azure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 mt-1">🔍</span>
                    <span>Python Automation & AI Solutions</span>
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={300} direction="right" distance={30}>
            <div className="space-y-6">
              <div className="bg-slate-700 p-8 rounded-2xl border border-green-400">
                <h3 className="text-2xl font-semibold mb-4 text-green-300">My Story</h3>
                <p className="text-gray-100 leading-relaxed">
                  Originally from Zambia, I'm a 4th-year Software Engineering student at USIU in Kenya, passionate about AI, Cloud, and DevOps. I lead the GDSC Cloud/DevOps track, mentoring 180+ students, and freelance globally on Python automation, AI solutions, APIs, and 2D games—earning 5-star client reviews. I thrive on building scalable, high-impact systems and contributing to Africa's growing tech ecosystem.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
