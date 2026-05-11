import { motion } from 'framer-motion'

export default function SectionHeader({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left'
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`max-w-2xl mb-12 sm:mb-16 ${alignment}`}
    >
      {eyebrow && (
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-text-mute mb-3">
          <span className="gradient-text">/</span> {eyebrow}
        </div>
      )}
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-text-dim text-base sm:text-lg leading-relaxed text-balance">
          {description}
        </p>
      )}
    </motion.div>
  )
}
