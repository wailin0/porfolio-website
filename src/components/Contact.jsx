import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, Github, ArrowUpRight } from 'lucide-react'
import { profile } from '../data/profile'

const items = [
  { label: 'Email', value: profile.socials.email, href: `mailto:${profile.socials.email}`, Icon: Mail },
  { label: 'Phone', value: profile.socials.phone, href: `tel:${profile.socials.phone.replace(/\s+/g, '')}`, Icon: Phone },
  { label: 'LinkedIn', value: 'wai-lin-9ab3211b5', href: profile.socials.linkedin, Icon: Linkedin },
  { label: 'GitHub', value: 'wailin0', href: profile.socials.github, Icon: Github },
]

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="relative glass rounded-3xl p-8 sm:p-14 overflow-hidden">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-violet-glow/20 blur-3xl" aria-hidden />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-cyan-glow/20 blur-3xl" aria-hidden />

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-text-mute mb-3">
              <span className="gradient-text">/</span> Contact
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-balance">
              Let's build something <span className="gradient-text">great</span>.
            </h2>
            <p className="mt-4 text-text-dim text-base sm:text-lg leading-relaxed">
              Open to new roles, contract work, and interesting collaborations.
              The fastest way to reach me is email.
            </p>

            <a
              href={`mailto:${profile.socials.email}`}
              className="btn-primary mt-8 group"
            >
              <Mail size={16} />
              {profile.socials.email}
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3"
          >
            {items.map(({ label, value, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="glass-hover glass rounded-xl px-4 py-3 flex items-center gap-3 group"
              >
                <Icon size={16} className="text-cyan-glow shrink-0" />
                <div className="min-w-0">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-text-mute">
                    {label}
                  </div>
                  <div className="text-sm text-text truncate">{value}</div>
                </div>
                <ArrowUpRight
                  size={14}
                  className="ml-auto text-text-mute opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
