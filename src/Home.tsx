import { Link } from 'react-router-dom';
import { featuredPhotos, profile, projects, skillGroups } from './content';
import SiteNav from './SiteNav';
import { useReveal } from './useReveal';

export default function Home() {
  useReveal();

  return (
    <>
      <SiteNav />

      <main id="top">
        <section className="hero hero-animate">
          <div className="shell hero-grid">
            <div className="hero-copy">
              <h1>{profile.name}</h1>
              <p className="hero-tag">{profile.tagline}</p>
              <p className="hero-meta">{profile.location}</p>
              <div className="cta-row">
                <a
                  className="btn btn-primary"
                  href={profile.downloadPage}
                  target="_blank"
                  rel="noreferrer"
                >
                  Test the app now
                </a>
                <a className="btn btn-ghost" href="#work">
                  View work
                </a>
                <a className="btn btn-ghost" href="#contact">
                  Contact
                </a>
              </div>
              <p className="hero-apk-hint">
                Android APK · always the latest build ·{' '}
                <a href={profile.apkUrl} download="saylyt.apk">
                  direct download
                </a>
              </p>
            </div>

            <div className="photo-frame">
              <img
                src="/photos/19-headshot.png"
                alt={`${profile.name} — formal portrait`}
              />
              <div className="photo-caption">Fredrick Okyere</div>
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
                  <h3 className="project-name">
                    {project.name === 'SAYLYT' && (
                      <img
                        className="project-logo"
                        src={profile.saylytLogo}
                        alt="SAYLYT logo"
                      />
                    )}
                    {project.name}
                  </h3>
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
                  {project.tryAppUrl && (
                    <a
                      className="try-app-link"
                      href={project.tryAppUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Test the app now →
                    </a>
                  )}
                  {project.apkUrl && (
                    <a href={project.apkUrl} download="saylyt.apk">
                      Download APK →
                    </a>
                  )}
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

        <section id="photos">
          <div className="shell">
            <p className="section-label reveal">Community</p>
            <h2 className="section-title reveal">Explore Fredrick in photos</h2>
            <p className="photos-intro reveal">
              Hackathons, campus, and the work behind the work — a few highlights
              here. Full gallery on the next page.
            </p>
            <div className="photo-preview">
              {featuredPhotos.map((photo) => (
                <figure key={photo.src} className="gallery-item preview-item reveal">
                  <img src={photo.src} alt={photo.alt} loading="lazy" />
                  <figcaption>{photo.caption}</figcaption>
                </figure>
              ))}
            </div>
            <div className="photos-cta reveal">
              <Link className="btn btn-primary" to="/photos">
                View all photos
              </Link>
            </div>
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
                Phone:{' '}
                <a href={profile.phoneHref}>{profile.phone}</a>
              </p>
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
              <p className="contact-tiktok">
                TikTok:{' '}
                <a
                  className="tiktok-link"
                  href={profile.tiktok}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="tiktok-logo"
                    src={profile.saylytLogo}
                    alt="SAYLYT"
                  />
                  <span>
                    SAYLYT <span className="tiktok-handle">{profile.tiktokHandle}</span>
                  </span>
                </a>
              </p>
              <div className="cta-row" style={{ marginTop: '0.75rem' }}>
                <a className="btn btn-primary" href={profile.phoneHref}>
                  {profile.phone}
                </a>
                <a className="btn btn-ghost" href={`mailto:${profile.email}`}>
                  Email me
                </a>
                <a
                  className="btn btn-ghost"
                  href={profile.tiktok}
                  target="_blank"
                  rel="noreferrer"
                >
                  TikTok
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
