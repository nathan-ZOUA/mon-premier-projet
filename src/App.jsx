import { useEffect, useState } from 'react'
import {
  contact,
  currentlyLearning,
  personalInfo,
  projects,
  services,
  skills,
  socialLinks,
} from './data/portfolio.js'
import './App.css'

const navigation = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

const serviceIconPaths = {
  website: 'M3 4h18v16H3zM3 9h18M8 4v5',
  landing: 'M4 3h16v18H4zM8 8h8M8 12h8M8 16h4',
  responsive: 'M3 5h13v10H3zM7 19h5M9.5 15v4M18 8h3v11h-6v-4',
  redesign: 'M4 7h16M7 4 4 7l3 3M20 17H4m13 3 3-3-3-3',
  react: 'M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M12 12c0 5-2 8-4 7s-1-5 2-8 7-4 8-2-1 6-5 7-8 0-8-2 4-5 8-5 7 3 6 5-5 1-7-2',
  application: 'M4 4h16v16H4zM8 9h8M8 13h5m-5 4h8',
  dashboard: 'M3 4h18v16H3zM3 9h18M9 9v11M7 6.5h.01M10 6.5h.01',
  api: 'M8 8 4 12l4 4m8-8 4 4-4 4m-3-10-2 12',
  maintenance: 'M14 6a5 5 0 0 0-6 6l-5 5a2 2 0 0 0 3 3l5-5a5 5 0 0 0 6-6l-3 3-3-3z',
  bug: 'M8 9h8v9a4 4 0 0 1-8 0zM9 9a3 3 0 0 1 6 0M4 12h4m8 0h4M5 7l3 2m11-2-3 2M7 20l2-2m8 2-2-2',
  performance: 'M4 18V6m0 12h16M7 15l4-4 3 2 5-6m-4 0h4v4',
  seo: 'M10 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14m5-2 5 5',
  deployment: 'M12 16V4m-5 5 5-5 5 5M5 14v5h14v-5',
  figma: 'M9 3h6a3 3 0 0 1 0 6H9a3 3 0 0 1 0-6m0 6h6a3 3 0 1 1-3 3V9m0 3v6a3 3 0 1 1-3-3',
  mobile: 'M7 3h10v18H7zM10 6h4m-2 12h.01',
}

function ArrowIcon({ diagonal = false }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="arrow-icon">
      {diagonal ? <path d="M5 15 15 5M6 5h9v9" /> : <path d="M3 10h13m-5-5 5 5-5 5" />}
    </svg>
  )
}

function ServiceIcon({ name }) {
  return (
    <svg className="service-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d={serviceIconPaths[name] ?? serviceIconPaths.website} />
    </svg>
  )
}

function getSocialUrl(type) {
  if (type === 'email') return contact.email ? `mailto:${contact.email}` : ''
  if (type === 'whatsapp') return contact.whatsapp ? `https://wa.me/${contact.whatsapp}` : ''
  if (type === 'github') return contact.github
  return ''
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = navigation
      .map(({ href }) => document.querySelector(href))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0]

        if (visibleSection) setActiveSection(`#${visibleSection.target.id}`)
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: [0, 0.25, 0.5, 0.75] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!menuOpen) return undefined

    function closeOnEscape(event) {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label={`${personalInfo.brandName}, home`} onClick={closeMenu}>
          {personalInfo.brandName.toLowerCase()}<span>.</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">{menuOpen ? 'Close navigation menu' : 'Open navigation menu'}</span>
          <span className={`menu-icon ${menuOpen ? 'is-open' : ''}`} aria-hidden="true" />
        </button>
        <div id="primary-menu" className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          {navigation.map((item) => (
            <a
              key={item.href}
              className={activeSection === item.href ? 'is-active' : ''}
              href={item.href}
              aria-current={activeSection === item.href ? 'location' : undefined}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Let&apos;s Talk <ArrowIcon diagonal />
          </a>
        </div>
      </nav>
    </header>
  )
}

function SectionHeading({ eyebrow, title, titleId, children }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={titleId}>{title}</h2>
      {children && <p className="section-intro">{children}</p>}
    </div>
  )
}

function SocialLinks({ className = '' }) {
  return (
    <div className={className}>
      {socialLinks.map((social) => {
        const url = getSocialUrl(social.type)
        return url ? (
          <a key={social.type} href={url} target={social.type === 'email' ? undefined : '_blank'} rel={social.type === 'email' ? undefined : 'noreferrer'}>
            {social.label} <ArrowIcon diagonal />
          </a>
        ) : (
          <span key={social.type} className="social-unconfigured">{social.label} — add your link in portfolio.js</span>
        )
      })}
    </div>
  )
}

function CodeVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="visual-orbit orbit-one" />
      <div className="visual-orbit orbit-two" />
      <div className="code-card">
        <div className="code-top"><span /><span /><span /><b>naj.dev</b></div>
        <div className="code-lines">
          <p><i>01</i><span className="code-purple">const</span> purpose = <span className="code-green">'useful web'</span>;</p>
          <p><i>02</i></p>
          <p><i>03</i><span className="code-purple">function</span> <span className="code-yellow">build</span>() {'{'}</p>
          <p><i>04</i>&nbsp;&nbsp;<span className="code-purple">return</span> <span className="code-green">'with care'</span>;</p>
          <p><i>05</i>{'}'}</p>
          <p><i>06</i></p>
          <p><i>07</i><span className="code-muted">// learn, make, improve</span></p>
        </div>
        <div className="code-footer"><span /> Curious by nature. Building step by step.</div>
      </div>
      <span className="visual-spark spark-one">✳</span>
      <span className="visual-spark spark-two">✦</span>
      <span className="visual-label">thoughtful by design</span>
    </div>
  )
}

function SkillGroups({ groups }) {
  return (
    <div className="skill-groups">
      {groups.map((group) => (
        <article className="skill-group" key={group.category}>
          <h3>{group.category}</h3>
          <ul className="tag-list">
            {group.items.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </article>
      ))}
    </div>
  )
}

function ProjectCard({ project, index }) {
  const [imageLoaded, setImageLoaded] = useState(Boolean(project.image))

  return (
    <article className="project-card">
      <div className="project-image">
        {imageLoaded ? (
          <img
            src={project.image}
            alt={`${project.title} project preview`}
            loading="lazy"
            onError={() => setImageLoaded(false)}
          />
        ) : (
          <div className={`project-art project-art-${index % 3}`} aria-hidden="true">
            <span className="art-window"><i /><i /><i /></span>
            <span className="art-panel" />
          </div>
        )}
      </div>
      <div className="project-content">
        <div className="project-title-row">
          <h3>{project.title}</h3>
          {project.liveUrl && (
            <a className="icon-link" href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`Open the live demo of ${project.title}`}>
              <ArrowIcon diagonal />
            </a>
          )}
        </div>
        <p>{project.description}</p>
        {project.keyFeatures?.length > 0 && (
          <ul className="feature-list" aria-label={`Key features of ${project.title}`}>
            {project.keyFeatures.map((feature) => <li key={feature}>{feature}</li>)}
          </ul>
        )}
        <ul className="tag-list project-tags" aria-label="Technologies used">
          {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
        <div className="project-links">
          {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Live Demo <ArrowIcon diagonal /></a>}
          {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer">GitHub <ArrowIcon diagonal /></a>}
        </div>
      </div>
    </article>
  )
}

function ContactForm() {
  const [notice, setNotice] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setNotice('This demo form does not send messages yet. Please use one of the contact links instead.')
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <p className="form-note">This form is a visual preview. It is not connected to an email service.</p>
      <label htmlFor="name">Your name</label>
      <input id="name" name="name" type="text" autoComplete="name" placeholder="How should I address you?" />
      <label htmlFor="email">Your email</label>
      <input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" />
      <label htmlFor="message">Your message</label>
      <textarea id="message" name="message" rows="4" placeholder="Tell me a little about your idea..." />
      <button className="button button-primary form-submit" type="submit">Preview message <ArrowIcon /></button>
      <p className="form-feedback" aria-live="polite">{notice}</p>
    </form>
  )
}

function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <section className="hero-section" id="home" aria-labelledby="hero-title">
          <div className="container hero-layout">
            <div className="hero-copy">
              <p className="eyebrow"><span className="status-dot" /> Web development · always learning</p>
              <h1 id="hero-title">{personalInfo.title}<span className="hero-period">.</span></h1>
              <p className="hero-description">{personalInfo.positioning}</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">View My Projects <ArrowIcon /></a>
                <a className="button button-secondary" href="#contact">Let&apos;s Work Together</a>
              </div>
              <SocialLinks className="hero-socials" />
            </div>
            <CodeVisual />
          </div>
          <a className="scroll-cue" href="#about"><span /> Scroll to explore</a>
        </section>

        <section className="section about-section" id="about" aria-labelledby="about-title">
          <div className="container about-layout">
            <SectionHeading eyebrow="01 — About" title="Thoughtful work, built with curiosity." titleId="about-title" />
            <div className="about-copy">
              <p>Hi, I&apos;m <strong>{personalInfo.fullName}, also known as {personalInfo.brandName}</strong>, a {personalInfo.title} focused on building modern, responsive and user-friendly digital experiences.</p>
              <p>{personalInfo.about}</p>
              <a className="text-link" href="#contact">Let&apos;s connect <ArrowIcon /></a>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills" aria-labelledby="skills-title">
          <div className="container">
            <SectionHeading eyebrow="02 — Skills" title="A growing toolkit." titleId="skills-title">
              I keep building a solid foundation and learning new tools at a steady pace.
            </SectionHeading>
            <div className="skills-block">
              <div className="skills-label"><h3>Skills</h3><p>Technologies and practices listed in my current profile.</p></div>
              <SkillGroups groups={skills} />
            </div>
            <div className="skills-block learning-block">
              <div className="skills-label"><h3>Currently Learning</h3><p>Areas I am exploring and developing further.</p></div>
              <SkillGroups groups={currentlyLearning} />
            </div>
          </div>
        </section>

        <section className="section services-section" id="services" aria-labelledby="services-title">
          <div className="container">
            <SectionHeading eyebrow="03 — Services" title="Practical help for your next web project." titleId="services-title">
              Clear, focused frontend support for common website and web application needs.
            </SectionHeading>
            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card" key={service.title}>
                  <div className="service-card-top"><span className="service-icon-wrap"><ServiceIcon name={service.icon} /></span><ArrowIcon diagonal /></div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="service-benefit"><span>CLIENT BENEFIT</span><p>{service.benefit}</p></div>
                </article>
              ))}
            </div>
            <div className="service-cta"><div><span className="eyebrow">Have something in mind?</span><p>Let&apos;s talk through what you need.</p></div><a className="button button-dark" href="#contact">Let&apos;s Talk <ArrowIcon /></a></div>
          </div>
        </section>

        <section className="section projects-section" id="projects" aria-labelledby="projects-title">
          <div className="container">
            <div className="section-heading-row">
              <SectionHeading eyebrow="04 — Projects" title="Selected work." titleId="projects-title">
                A place for real projects, experiments and things I have built.
              </SectionHeading>
              {contact.github && <a className="text-link all-projects" href={contact.github} target="_blank" rel="noreferrer">More on GitHub <ArrowIcon diagonal /></a>}
            </div>
            {projects.length > 0 ? (
              <div className="projects-grid">{projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}</div>
            ) : (
              <article className="projects-empty">
                <div className="empty-art" aria-hidden="true"><span>&lt;/&gt;</span><i /><i /></div>
                <div><span className="empty-kicker">PORTFOLIO IN PROGRESS</span><h3>Project coming soon</h3><p>This space is ready for a real project. Check back as I add work I can share.</p><p className="empty-hint">Add project details in <code>src/data/portfolio.js</code>.</p></div>
              </article>
            )}
          </div>
        </section>

        <section className="section contact-section" id="contact" aria-labelledby="contact-title">
          <div className="container contact-layout">
            <div className="contact-copy">
              <p className="eyebrow">05 — Contact</p>
              <h2 id="contact-title">Have a project in mind?<span> Let&apos;s build something useful together.</span></h2>
              <p>Share a little about what you are working on. I am happy to discuss the idea and see how I could help.</p>
              <div className="contact-details">
                {contact.email ? <a href={`mailto:${contact.email}`}><span>Email</span>{contact.email}<ArrowIcon diagonal /></a> : <p><span>Email</span><em>Add your email in src/data/portfolio.js</em></p>}
                {contact.whatsapp ? <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer"><span>WhatsApp</span>Message me on WhatsApp<ArrowIcon diagonal /></a> : <p><span>WhatsApp</span><em>Add your number in src/data/portfolio.js</em></p>}
                {contact.github ? <a href={contact.github} target="_blank" rel="noreferrer"><span>GitHub</span>Visit my profile<ArrowIcon diagonal /></a> : <p><span>GitHub</span><em>Add your profile link in src/data/portfolio.js</em></p>}
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="container footer-inner">
          <a className="brand" href="#home">{personalInfo.brandName.toLowerCase()}<span>.</span></a>
          <p>Designed and built with curiosity.</p>
          <a href="#home" className="back-top">Back to top ↑</a>
          <small>© {new Date().getFullYear()} {personalInfo.fullName}</small>
        </div>
      </footer>
    </>
  )
}

export default App
