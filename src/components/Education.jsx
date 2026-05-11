import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Calendar } from 'lucide-react'
import SectionHeader from './ui/SectionHeader'
import { education } from '../data/education'

export default function Education() {
  return (
    <section id="education" className="section-tight">
      <SectionHeader
        eyebrow="Education"
        title="Where I trained."
      />

      <div className="grid md:grid-cols-2 gap-5">
        {education.map((e, idx) => (
          <motion.div
            key={e.degree}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="glass glass-hover rounded-xl p-6"
          >
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-11 h-11 rounded-lg bg-aurora-grad/10 border border-line flex items-center justify-center">
                <GraduationCap size={20} className="text-cyan-glow" />
              </div>
              <div className="min-w-0">
                <h3 className="font-display font-semibold text-base sm:text-lg leading-snug">
                  {e.degree}
                </h3>
                <p className="text-text-dim mt-1 text-sm">{e.school}</p>
                <div className="flex flex-wrap items-center gap-3 mt-3 font-mono text-[11px] text-text-mute">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar size={11} />
                    {e.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={11} />
                    {e.location}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
