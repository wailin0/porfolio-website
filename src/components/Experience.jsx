import { motion } from 'framer-motion'
import { Briefcase, MapPin, Calendar } from 'lucide-react'
import SectionHeader from './ui/SectionHeader'
import { experience } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <SectionHeader
        eyebrow="Experience"
        title="A timeline of impact."
        description="Seven roles across Korea, the USA, the Philippines, Myanmar, and Mongolia — building, leading, and shipping."
      />

      <div className="relative">
        {/* Vertical line */}
        <div
          className="absolute left-[15px] sm:left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-violet-glow/60 via-cyan-glow/40 to-transparent"
          aria-hidden
        />

        <div className="space-y-8 sm:space-y-10">
          {experience.map((job, idx) => (
            <motion.article
              key={`${job.company}-${idx}`}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="relative pl-12 sm:pl-16"
            >
              {/* Dot */}
              <div className="absolute left-0 top-1.5 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-aurora-grad opacity-30 blur-md" />
                <div className="relative h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-bg-soft border border-line flex items-center justify-center">
                  <Briefcase size={14} className="text-cyan-glow" />
                </div>
              </div>

              <div className="glass glass-hover rounded-xl p-5 sm:p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <h3 className="font-display text-lg sm:text-xl font-semibold">
                    {job.role}{' '}
                    <span className="text-text-dim font-normal">@ {job.company}</span>
                  </h3>
                </div>
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 font-mono text-xs text-text-mute">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar size={12} />
                    {job.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={12} />
                    {job.location}
                  </span>
                </div>
                <ul className="space-y-2 text-text-dim text-sm sm:text-[15px] leading-relaxed">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2.5">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-glow" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
