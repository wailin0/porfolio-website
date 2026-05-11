import { motion } from 'framer-motion'
import SectionHeader from './ui/SectionHeader'
import { profile } from '../data/profile'
import { skillGroups } from '../data/skills'
import portraitImg from '../assets/portrait.jpg'

export default function About() {
  return (
    <section id="about" className="section">
      <SectionHeader
        eyebrow="About"
        title="A developer who ships."
        description="I lead teams, design architectures, and deliver mobile and web products that real users depend on every day."
      />

      <div className="grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-14 items-start">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto lg:mx-0 w-full max-w-[340px]"
        >
          {/* Glow halo */}
          <div className="absolute -inset-4 bg-aurora-grad opacity-30 blur-3xl rounded-[2rem]" aria-hidden />

          {/* Gradient frame */}
          <div className="relative aspect-[3/4] rounded-[1.5rem] p-[1px] bg-gradient-to-br from-violet-glow/60 via-cyan-glow/40 to-fuchsia-500/40">
            <div className="relative w-full h-full rounded-[1.45rem] overflow-hidden bg-bg-soft">
              <img
                src={portraitImg}
                alt="Wai Lin Htet"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              {/* subtle veil */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg/40 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-glow/10 via-transparent to-cyan-glow/10 mix-blend-overlay" />

              {/* Bottom name plate */}
              <div className="absolute bottom-0 inset-x-0 p-4">
                <div className="glass rounded-xl px-4 py-3">
                  <div className="font-display font-semibold text-sm">Wai Lin Htet</div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-text-mute mt-0.5">
                    Software Developer
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating chip */}
          <div className="hidden lg:flex absolute -right-3 top-6 glass rounded-full px-3 py-1.5 items-center gap-2 animate-float">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="text-[11px] font-mono">Yangon · Remote</span>
          </div>
        </motion.div>

        <div>
          {profile.bio.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-text-dim text-base sm:text-lg leading-relaxed mb-4"
            >
              {p}
            </motion.p>
          ))}

          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            {skillGroups.map((group, i) => (
              <motion.div
                key={group.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass rounded-xl p-5 glass-hover"
              >
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-mute mb-3">
                  {group.name}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span key={item} className="pill">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
