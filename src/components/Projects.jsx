import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeader from './ui/SectionHeader'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

const FILTERS = ['All', 'Mobile', 'Web', 'POS', 'IoT', 'E-commerce', 'Internal']

export default function Projects() {
  const [filter, setFilter] = useState('All')

  const visible = useMemo(() => {
    if (filter === 'All') return projects
    return projects.filter((p) => p.category.includes(filter))
  }, [filter])

  return (
    <section id="projects" className="section">
      <SectionHeader
        eyebrow="Selected Work"
        title="Things I've shipped."
        description="From flagship apps on the Play Store and App Store down to the hardware-integrated systems running quietly in vending machines, parking lots, and bus terminals — tap any card to open it."
      />

      <div className="flex flex-wrap gap-2 mb-10">
        {FILTERS.map((f) => {
          const active = filter === f
          return (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`relative px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium font-mono transition-colors
                ${active ? 'text-white' : 'text-text-dim hover:text-text'}`}
            >
              {active && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 bg-aurora-grad rounded-full shadow-glow-violet"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative">{f}</span>
            </button>
          )
        })}
      </div>

      <motion.div
        layout
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
      >
        <AnimatePresence mode="popLayout">
          {visible.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
