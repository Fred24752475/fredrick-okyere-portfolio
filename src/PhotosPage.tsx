import { Link } from 'react-router-dom';
import { allPhotos, photoGroups, profile } from './content';
import SiteNav from './SiteNav';
import { useReveal } from './useReveal';

export default function PhotosPage() {
  useReveal([photoGroups.length]);

  return (
    <>
      <SiteNav />

      <main className="photos-page">
        <div className="shell">
          <p className="section-label reveal">Gallery</p>
          <h1 className="section-title reveal">Explore Fredrick in photos</h1>
          <p className="photos-intro reveal">
            {allPhotos.length} photos · grouped so it stays easy to browse as more
            land.
          </p>
          <div className="photos-cta reveal" style={{ marginBottom: '2.5rem' }}>
            <Link className="btn btn-ghost" to="/">
              ← Back home
            </Link>
          </div>

          {photoGroups.map((group) => (
            <section
              key={group.id}
              id={group.id}
              className="photo-group"
              aria-labelledby={`group-${group.id}`}
            >
              <div className="photo-group-head reveal">
                <h2 id={`group-${group.id}`}>{group.title}</h2>
                <p>{group.description}</p>
              </div>
              <div className="photo-gallery">
                {group.photos.map((photo) => (
                  <figure key={photo.src} className="gallery-item reveal">
                    <img src={photo.src} alt={photo.alt} loading="lazy" />
                    <figcaption>{photo.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      <footer className="site-footer">
        <div className="shell">
          © {new Date().getFullYear()} {profile.name}.{' '}
          <Link to="/">Back to portfolio</Link>
        </div>
      </footer>
    </>
  );
}
