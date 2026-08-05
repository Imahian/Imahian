import { useEffect, useRef, useState } from 'react'
import './App.css'

// ─── SVG Icons ───────────────────────────────────────────────────────────────

const Icon = {
  Instagram: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  ),
  YouTube: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  ),
  TikTok: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
    </svg>
  ),
  Snapchat: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.166 0C9.238 0 6.86.882 5.08 2.618 3.056 4.589 2.036 7.377 2.036 10.868v.925c-.525.215-1.064.412-1.39.412-.263 0-.496-.07-.646-.263l-.12-.16-.214.104c-.17.083-.383.311-.477.71-.103.432-.015.866.37 1.092.41.24 1.213.53 2.127.724a5.34 5.34 0 01.235.697 5.89 5.89 0 01.112.694c.085.563.228.857.572 1.059.298.173.697.183 1.17.195.478.011 1.076.026 1.82.295.488.177.982.554 1.52.964.926.7 1.975 1.494 3.481 1.494.03 0 .06 0 .088-.001h.06c1.494 0 2.55-.794 3.482-1.494.538-.41 1.032-.787 1.52-.964.744-.27 1.341-.284 1.82-.295.474-.012.872-.022 1.17-.195.344-.202.487-.496.572-1.059.044-.29.094-.568.112-.694.063-.235.15-.472.235-.697.914-.194 1.717-.484 2.127-.724.385-.226.473-.66.37-1.092-.094-.399-.307-.627-.477-.71l-.215-.104-.12.16c-.15.193-.382.263-.645.263-.327 0-.866-.197-1.39-.412v-.925C21.964 7.377 20.943 4.59 18.92 2.618 17.14.882 14.762 0 12.166 0z"/>
    </svg>
  ),
  X: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  ),
  GitHub: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  ),
  Telegram: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  ),
  Discord: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.032.056a19.9 19.9 0 005.993 3.03.076.076 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
    </svg>
  ),
  ShoppingBag: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 7h-3V6a4 4 0 00-8 0v1H5a1 1 0 00-1 1v11a3 3 0 003 3h10a3 3 0 003-3V8a1 1 0 00-1-1zm-9-1a2 2 0 014 0v1h-4V6zm8 13a1 1 0 01-1 1H7a1 1 0 01-1-1V9h2v1a1 1 0 002 0V9h4v1a1 1 0 002 0V9h2v10z"/>
    </svg>
  ),
  Terminal: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="4 17 10 11 4 5"/>
      <line x1="12" y1="19" x2="20" y2="19"/>
    </svg>
  ),
}

// ─── Data ────────────────────────────────────────────────────────────────────

const PHRASES = [
  'Feel more; Think less',
  'Pain is inevitable; suffering optional',
  'If truth make us free; ignorance slaves',
  'I only know that I exist',
  'Masters of the truth or slaves of hypocrisy?',
  'Beings of light in organic startships',
  'Wake up Neo . . . . . .',
]

const MAIN_LINKS = [
  { label: 'Notes',          sub: 'HTB · THM · CTF Writeups',     url: 'https://imahian.github.io/Notes/', accent: '#00cc33', Ico: Icon.Terminal    },
  { label: 'NFT apparel',    sub: 'Crypto fashion & web3 drops',  url: 'https://crypwear.shop/',           accent: '#c6f135', featured: true, Ico: Icon.ShoppingBag },
  { label: 'Hacking Server', sub: 'CTF · Pentesting · Security',  url: 'https://discord.gg/qnFFdgnc22',   accent: '#5865F2', Ico: Icon.Discord     },
  { label: 'CON+CIENCIA',   sub: 'Rap underground · Letras',      url: 'https://discord.gg/BckTWWMU',     accent: '#5865F2', Ico: Icon.Discord     },
]

const SOCIAL = [
  { label: 'Instagram', url: 'https://instagram.com/im.ahian',    accent: '#E1306C', Ico: Icon.Instagram },
  { label: 'YouTube',   url: 'https://youtube.com/@im.ahian',     accent: '#FF0000', Ico: Icon.YouTube   },
  { label: 'TikTok',   url: 'https://tiktok.com/@imahian',       accent: '#69C9D0', Ico: Icon.TikTok   },
  { label: 'Snapchat', url: 'https://snapchat.com/add/imahian',  accent: '#FFFC00', Ico: Icon.Snapchat  },
  { label: 'X',        url: 'https://x.com/imahian',             accent: '#ffffff', Ico: Icon.X         },
  { label: 'GitHub',   url: 'https://github.com/imahian',        accent: '#a78bfa', Ico: Icon.GitHub    },
  { label: 'Telegram', url: 'https://t.me/imahian',              accent: '#2CA5E0', Ico: Icon.Telegram  },
]

// ─── Matrix Canvas ───────────────────────────────────────────────────────────

function MatrixCanvas() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    const CHARS = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789'
    const FONT_SIZE = 15
    const TARGET_FPS = 15
    const FRAME_MS = 1000 / TARGET_FPS

    let cols = 0
    let drops = []
    let raf = null
    let lastTime = 0

    function init() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      cols = Math.floor(canvas.width / FONT_SIZE)
      drops = Array.from({ length: cols }, () =>
        Math.floor(Math.random() * (canvas.height / FONT_SIZE))
      )
      ctx.fillStyle = '#000'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    function draw(timestamp) {
      raf = requestAnimationFrame(draw)
      if (timestamp - lastTime < FRAME_MS) return
      lastTime = timestamp

      ctx.fillStyle = 'rgba(0,0,0,0.08)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.font = `${FONT_SIZE}px monospace`

      for (let i = 0; i < cols; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)]
        ctx.fillStyle = Math.random() > 0.97 ? '#b8ffcc' : '#00cc33'
        ctx.fillText(char, i * FONT_SIZE, drops[i] * FONT_SIZE)
        if (drops[i] * FONT_SIZE > canvas.height && Math.random() > 0.97) drops[i] = 0
        drops[i]++
      }
    }

    init()
    window.addEventListener('resize', init)
    raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', init)
    }
  }, [])

  return <canvas ref={ref} className="matrix-bg" />
}

// ─── Typewriter ──────────────────────────────────────────────────────────────

function TypewriterText() {
  const [text, setText] = useState('')
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const phrase = PHRASES[phraseIdx]
    let t

    if (!deleting && text === phrase) {
      t = setTimeout(() => setDeleting(true), 2200)
    } else if (deleting && text === '') {
      setDeleting(false)
      setPhraseIdx(i => (i + 1) % PHRASES.length)
    } else if (deleting) {
      t = setTimeout(() => setText(s => s.slice(0, -1)), 38)
    } else {
      t = setTimeout(() => setText(phrase.slice(0, text.length + 1)), 72)
    }

    return () => clearTimeout(t)
  }, [text, phraseIdx, deleting])

  return (
    <p className="typewriter" aria-live="polite">
      <span>{text}</span>
      <span className="caret" aria-hidden="true">|</span>
    </p>
  )
}

// ─── Glitch name ─────────────────────────────────────────────────────────────

function GlitchText({ text }) {
  return (
    <h1 className="glitch" data-text={text} aria-label={text}>
      {text}
    </h1>
  )
}

// ─── App ─────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <>
      <MatrixCanvas />
      <main className="container">
        <div className="profile-wrap">
          <img src={`${import.meta.env.BASE_URL}oroborus.gif`} alt="imahian" className="avatar" />
        </div>

        <GlitchText text="imahian" />
        <TypewriterText />

        <section className="main-links" aria-label="Main links">
          {MAIN_LINKS.map(({ label, sub, url, accent, featured, Ico }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={`main-btn${featured ? ' main-btn--featured' : ''}`}
              style={{ '--accent': accent }}
            >
              <span className="main-btn__icon"><Ico /></span>
              <span className="main-btn__text">
                <span className="main-btn__label">{label}</span>
                <span className="main-btn__sub">{sub}</span>
              </span>
            </a>
          ))}
        </section>

        <nav className="social-row" aria-label="Social media">
          {SOCIAL.map(({ label, url, accent, Ico }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              style={{ '--accent': accent }}
              aria-label={label}
              title={label}
            >
              <Ico />
            </a>
          ))}
        </nav>
      </main>
    </>
  )
}



