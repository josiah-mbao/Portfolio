import Reveal from '../ui/Reveal';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-900 via-stone-900 to-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <Reveal delay={100} direction="up">
          <h2 className="text-4xl font-bold text-center mb-6 text-amber-300">Professional Profile</h2>
        </Reveal>

        {/* Key Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Reveal delay={200} direction="up">
            <div className="bg-slate-700/50 p-6 rounded-xl border border-amber-500/30 text-center">
              <h3 className="text-2xl font-bold text-amber-200 mb-2">2 Years</h3>
              <p className="text-gray-300 text-sm">Professional Experience</p>
            </div>
          </Reveal>
          <Reveal delay={300} direction="up">
            <div className="bg-slate-700/50 p-6 rounded-xl border border-amber-500/30 text-center">
              <h3 className="text-2xl font-bold text-amber-200 mb-2">10+ Projects</h3>
              <p className="text-gray-300 text-sm">Delivered Successfully</p>
            </div>
          </Reveal>
          <Reveal delay={400} direction="up">
            <div className="bg-slate-700/50 p-6 rounded-xl border border-amber-500/30 text-center">
              <h3 className="text-2xl font-bold text-amber-200 mb-2">5-Star Rating</h3>
              <p className="text-gray-300 text-sm">Client Satisfaction</p>
            </div>
          </Reveal>
        </div>

        {/* Client Testimonials */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Reveal delay={500} direction="left" distance={30}>
            <div className="bg-slate-700/60 p-6 rounded-xl border border-amber-500/40">
              <p className="text-gray-100 italic mb-4 leading-relaxed text-center">&ldquo;Josiah has more than enough expertise and thinks along with your specific request, definitely recommend! 👍&rdquo;</p>
              <p className="text-amber-200 text-sm text-center">— Iwanrb1, Netherlands</p>
              <div className="flex justify-center text-amber-400 mt-2">
                ★★★★★
              </div>
            </div>
          </Reveal>
          <Reveal delay={600} direction="right" distance={30}>
            <div className="bg-slate-700/60 p-6 rounded-xl border border-amber-500/40">
              <p className="text-gray-100 italic mb-4 leading-relaxed text-center">&ldquo;Very impressed by the fast responses and fast delivery time. Was a pleasure working with him and would highly recommend.&rdquo;</p>
              <p className="text-amber-200 text-sm">— Vikashz1212, United Kingdom</p>
              <div className="flex justify-center text-amber-400 mt-2 mb-0">
                ★★★★★
              </div>
            </div>
          </Reveal>
        </div>

        {/* View CV Button */}
        <Reveal delay={700} direction="up">
          <div className="text-center">
            <a
              href="/SWE_resume.pdf"
              target="_blank"
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-500 hover:from-amber-300 hover:via-orange-400 hover:to-yellow-400 text-white px-8 py-4 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-amber-300/50 border-2 border-amber-300/30 hover:border-amber-200/50 transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl animate-pulse hover:animate-none"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <svg className="w-8 h-8 relative z-10 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 17a2 2 0 012 2 2 2 0 01-2 2H4a2 2 0 01-2-2v-7.59A2 2 0 012.41 10H6V5a2 2 0 012-2h7a2 2 0 012 2v5h3.59A2 2 0 0122 10.41V17z"/>
              </svg>
              <span className="relative z-10 font-extrabold tracking-wide uppercase">View Full CV</span>
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl opacity-30 group-hover:opacity-50 blur-sm -z-10"></div>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
