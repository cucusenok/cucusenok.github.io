import { profile } from '../data/profile'
import github from '../assets/social/github.svg'
import instagram from '../assets/social/instagram.svg'
import linkedin from '../assets/social/linkedin.svg'
import mail from '../assets/social/mail.svg'
import telegram from '../assets/social/telegram.svg'

const ITEMS = [
  { name: 'Telegram', href: profile.links.telegram, icon: telegram },
  { name: 'GitHub', href: profile.links.github, icon: github },
  { name: 'Instagram', href: profile.links.instagram, icon: instagram },
  { name: 'LinkedIn', href: profile.links.linkedin, icon: linkedin },
  { name: 'Email', href: `mailto:${profile.email}`, icon: mail },
]

interface Props {
  size?: number
  className?: string
}

/** Brand-colored social icons (the original site's set), each a 44px+ hit target. */
export function Socials({ size = 44, className = '' }: Props) {
  return (
    <div className={`socials ${className}`}>
      {ITEMS.map((it) => (
        <a
          key={it.name}
          className="socials__link"
          href={it.href}
          target={it.href.startsWith('mailto:') ? undefined : '_blank'}
          rel="noopener"
          title={it.name}
          aria-label={it.name}
          style={{ width: size, height: size }}
        >
          <img src={it.icon} alt="" width={size} height={size} />
        </a>
      ))}
    </div>
  )
}
