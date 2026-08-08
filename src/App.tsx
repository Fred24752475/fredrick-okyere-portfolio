import { useEffect } from 'react';
import { profile, projects, skillGroups } from './content';

function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
}

export default function App() {
  useReveal();

  return (
    <>
      <header className="site-nav">
        <div className="shell">
          <a className="brand-mark" href="#top">
            {profile.shortName}
          </a>
          <nav className="nav-links" aria-label="Primary">
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero hero-animate">
          <div className="shell hero-grid">
            <div className="hero-copy">
              <h1>{profile.name}</h1>
              <p className="hero-tag">{profile.tagline}</p>
              <p className="hero-meta">{profile.location}</p>
              <div className="cta-row">
                <a className="btn btn-primary" href="#work">
                  View work
                </a>
                <a className="btn btn-ghost" href="#contact">
                  Contact
                </a>
                <a
                  className="btn btn-ghost"
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>

            <div className="photo-frame" aria-label="Profile photo placeholder">
              {/* Drop your photo at public/fredrick.jpg and uncomment:
              <img src="/fredrick.jpg" alt={profile.name} />
              */}
              <div className="photo-fallback" aria-hidden>
                F
              </div>
              <div className="photo-caption">
                Add <code>public/fredrick.jpg</code> to show your photo here
              </div>
            </div>
          </div>
        </section>

        <section id="about">
          <div className="shell reveal">
            <p className="section-label">About</p>
            <h2 className="section-title">Who I am</h2>
            <div className="about-copy">
              {profile.about.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        <section id="work">
          <div className="shell">
            <p className="section-label reveal">Selected work</p>
            <h2 className="section-title reveal">Projects employers can open</h2>
            {projects.map((project) => (
              <article
                key={project.name}
                className={`project reveal${project.featured ? ' featured' : ''}`}
              >
                <div className="project-top">
                  <h3>{project.name}</h3>
                  <span className="project-role">{project.role}</span>
                </div>
                <p>{project.summary}</p>
                <div className="stack-row">
                  {project.stack.map((s) => (
                    <span className="chip" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
                <div className="link-row">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                      Live site →
                    </a>
                  )}
                  {project.repoUrl && (
                    <a href={project.repoUrl} target="_blank" rel="noreferrer">
                      GitHub →
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills">
          <div className="shell reveal">
            <p className="section-label">Toolkit</p>
            <h2 className="section-title">Skills & tools</h2>
            <div className="skills-grid">
              {skillGroups.map((group) => (
                <div className="skill-group" key={group.title}>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="shell reveal">
            <p className="section-label">Contact</p>
            <h2 className="section-title">Let’s talk</h2>
            <div className="contact-block">
              <p>
                Email:{' '}
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </p>
              <p>
                Alt:{' '}
                <a href={`mailto:${profile.emailAlt}`}>{profile.emailAlt}</a>
              </p>
              <p>
                LinkedIn:{' '}
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  fredrick-okyere
                </a>
              </p>
              <p>
                GitHub:{' '}
                <a href={profile.github} target="_blank" rel="noreferrer">
                  @Fred24752475
                </a>
              </p>
              <div className="cta-row" style={{ marginTop: '0.75rem' }}>
                <a className="btn btn-primary" href={`mailto:${profile.email}`}>
                  Email me
                </a>
                <a
                  className="btn btn-ghost"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell">
          © {new Date().getFullYear()} {profile.name}. Built for my CV —
          open to roles & collaborations.
        </div>
      </footer>
    </>
  );
}
