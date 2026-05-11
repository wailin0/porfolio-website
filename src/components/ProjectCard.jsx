import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { ExternalLink, Smartphone, Apple, Lock } from 'lucide-react'

function StoreLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="link-store group/btn"
      aria-label={label}
    >
      {children}
      <ExternalLink
        size={11}
        className="opacity-0 -ml-1 group-hover/btn:opacity-60 group-hover/btn:ml-0 transition-all"
      />
    </a>
  )
}

const ProjectCard = forwardRef(function ProjectCard({ project, index }, ref) {
  const Icon = Icons[project.icon] || Icons.Box
  const hasImage = Boolean(project.image)

  return (
    <motion.article
      ref={ref}
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.06 }}
      whileHover={{ y: -6 }}
      className="group relative glass rounded-2xl overflow-hidden flex flex-col
                 hover:border-white/20 hover:shadow-glow-violet transition-all duration-500"
    >
      {/* Cover */}
      <div className="relative h-44 overflow-hidden">
        {hasImage ? (
          <>
            <img
              src={project.image}
              alt={`${project.name} screenshot`}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Color tint */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-25 mix-blend-overlay`} />
            {/* Bottom darken */}
            <div className="absolute inset-0 bg-gradient-to-t from-bg-soft via-bg-soft/30 to-transparent" />
          </>
        ) : (
          <>
            <div className={`absolute inset-0 bg-gradient-to-br ${project.accent}`} />
            <div className="absolute inset-0 bg-bg/20" />
            <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20" />
            <div className="absolute -bottom-6 -right-6 opacity-25 group-hover:opacity-40 transition-opacity duration-500">
              <Icon size={130} strokeWidth={1.2} className="text-white" />
            </div>
          </>
        )}

        {/* Top tags */}
        <div className="absolute top-4 left-4 flex items-center gap-1.5">
          {project.category.slice(0, 2).map((c) => (
            <span
              key={c}
              className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-bg/60 backdrop-blur-md border border-white/10 text-white/90"
            >
              {c}
            </span>
          ))}
        </div>

        {/* Title */}
        <div className="absolute bottom-3 left-4 right-4">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-bg/70 backdrop-blur-md border border-white/10 flex items-center justify-center shrink-0">
              <Icon size={16} className="text-white" />
            </div>
            <h3 className="font-display text-lg font-bold text-white drop-shadow-md">
              {project.name}
            </h3>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <p className="text-sm text-text-dim leading-relaxed mb-4">
          <span className="text-text font-medium">{project.tagline}.</span>{' '}
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <span key={t} className="pill !text-[10px] !px-2 !py-0.5">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-2 pt-4 border-t border-line">
          {project.android && (
            <StoreLink href={project.android} label="Google Play">
              <Smartphone size={13} />
              Play Store
            </StoreLink>
          )}
          {project.ios && (
            <StoreLink href={project.ios} label="App Store">
              <Apple size={13} />
              App Store
            </StoreLink>
          )}
          {project.web && (
            <StoreLink href={project.web} label="Visit website">
              <ExternalLink size={13} />
              Visit
            </StoreLink>
          )}
          {project.internal && (
            <span className="link-store !cursor-default !text-text-mute">
              <Lock size={12} />
              Internal / proprietary
            </span>
          )}
        </div>
      </div>
    </motion.article>
  )
})

export default ProjectCard
