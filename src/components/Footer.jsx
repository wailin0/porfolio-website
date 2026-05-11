import { Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/profile'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-line">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs text-text-mute font-mono">
          © {year} {profile.name}. Built with React + Vite + Tailwind.
        </div>
        <div className="flex items-center gap-3">
          <a
            href={`mailto:${profile.socials.email}`}
            className="p-2 rounded-lg text-text-dim hover:text-text hover:bg-white/5 transition-colors"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-text-dim hover:text-text hover:bg-white/5 transition-colors"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-text-dim hover:text-text hover:bg-white/5 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}
