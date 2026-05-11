import { motion } from 'framer-motion'
import { ArrowRight, Download, Mail } from 'lucide-react'
import { profile } from '../data/profile'
import workingImg from '../assets/working.jpg'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-20 px-5 sm:px-8 lg:px-12"
    >
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center">
        {/* LEFT — copy */}
        <div>
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 pill mb-7"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            {profile.available}
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-[1.05]"
          >
            Hi, I'm <span className="text-text">Wai Lin Htet.</span>
            <br />
            <span className="gradient-text">{profile.tagline}</span>
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 max-w-xl text-text-dim text-base sm:text-lg leading-relaxed"
          >
            Software developer with 5+ years and 20+ apps shipped across
            banking, IoT, e-commerce, hospitality, energy, and transportation.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a href="#projects" className="btn-primary group">
              View Projects
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a href={`mailto:${profile.socials.email}`} className="btn-ghost">
              <Mail size={16} />
              Contact
            </a>
            <a
              href="/wai-lin-htet-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <Download size={16} />
              Download CV
            </a>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl"
          >
            {profile.stats.map((s) => (
              <div key={s.label} className="glass rounded-xl p-3.5 sm:p-4">
                <div className="font-display text-xl sm:text-2xl font-bold gradient-text">
                  {s.value}
                </div>
                <div className="mt-0.5 text-[11px] sm:text-xs text-text-dim font-mono">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — image card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          {/* Glow */}
          <div className="absolute -inset-4 bg-aurora-grad opacity-30 blur-3xl rounded-[2rem]" aria-hidden />

          {/* Frame */}
          <div className="relative aspect-[4/5] rounded-[1.75rem] p-[1px] bg-gradient-to-br from-violet-glow/60 via-cyan-glow/30 to-fuchsia-500/40">
            <div className="relative w-full h-full rounded-[1.7rem] overflow-hidden bg-bg-soft">
              <img
                src={workingImg}
                alt="Wai Lin Htet working on a MacBook"
                className="w-full h-full object-cover scale-[1.02] transition-transform duration-700 hover:scale-[1.05]"
                loading="eager"
              />
              {/* gradient veil */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg/85 via-bg/10 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-glow/15 via-transparent to-cyan-glow/10 mix-blend-overlay" />

              {/* Floating tag - top */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute top-4 left-4 sm:top-5 sm:left-5"
              >
                <div className="glass rounded-full px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest text-text-dim flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Currently shipping
                </div>
              </motion.div>
            </div>
          </div>

          {/* Decorative floating chips */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="hidden lg:flex absolute -right-3 top-1/3 glass rounded-full px-3.5 py-2 items-center gap-2 animate-float"
          >
            <span className="h-2 w-2 rounded-full bg-aurora-grad" />
            <span className="text-xs font-mono">5+ yrs</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="hidden lg:flex absolute -left-4 bottom-1/3 glass rounded-full px-3.5 py-2 items-center gap-2 animate-float"
            style={{ animationDelay: '1.5s' }}
          >
            <span className="h-2 w-2 rounded-full bg-cyan-glow" />
            <span className="text-xs font-mono">20+ apps</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
