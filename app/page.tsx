import { Aperture, ArrowDown, Camera, Focus, MoveHorizontal } from 'lucide-react';

function PhotoPlaceholder({
  label,
  filename,
  ratio = 'portrait',
}: {
  label: string;
  filename: string;
  ratio?: 'portrait' | 'landscape' | 'wide';
}) {
  const ratioClass =
    ratio === 'portrait'
      ? 'aspect-[4/5]'
      : ratio === 'wide'
        ? 'aspect-[16/9]'
        : 'aspect-[4/3]';

  return (
    <figure>
      <div
        className={`photo-placeholder ${ratioClass}`}
        role="img"
        aria-label={`${label} photo placeholder`}
      >
        <Camera aria-hidden="true" size={30} strokeWidth={1.5} />
        <span>{label}</span>
        <small>Replace with {filename}</small>
      </div>
    </figure>
  );
}

function SectionNumber({ children }: { children: React.ReactNode }) {
  return <span className="section-number">{children}</span>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Back to top">
          CS 180 <span>/</span> PROJECT 0
        </a>
        <nav aria-label="Project sections">
          <a href="#part-1">01 Portrait</a>
          <a href="#part-2">02 Architecture</a>
          <a href="#part-3">03 Dolly Zoom</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-kicker">
          <span>UC Berkeley · Fall 2026</span>
          <span>YOUR NAME</span>
        </div>
        <div className="hero-grid">
          <div>
            <p className="eyebrow">Perspective · Distance · Focal length</p>
            <h1>
              Becoming Friends
              <br />
              with Your Camera
            </h1>
          </div>
          <div className="hero-note">
            <Aperture aria-hidden="true" size={34} strokeWidth={1.4} />
            <p>
              Three small experiments in how camera position and zoom reshape
              the way we perceive depth.
            </p>
          </div>
        </div>
        <a className="scroll-cue" href="#part-1">
          View experiments <ArrowDown aria-hidden="true" size={16} />
        </a>
      </section>

      <section className="project-section" id="part-1">
        <div className="section-heading">
          <SectionNumber>01</SectionNumber>
          <div>
            <p className="eyebrow">Portrait experiment</p>
            <h2>Selfie: the wrong way vs. the right way</h2>
          </div>
        </div>

        <div className="photo-pair portrait-pair">
          <div className="photo-card">
            <PhotoPlaceholder
              label="Close + wide"
              filename="part1-close.jpg"
            />
            <div className="caption-row">
              <strong>Close-up</strong>
              <span>Wide angle · short distance</span>
            </div>
          </div>
          <div className="photo-card offset-card">
            <PhotoPlaceholder
              label="Step back + zoom"
              filename="part1-zoom.jpg"
            />
            <div className="caption-row">
              <strong>Stepped back</strong>
              <span>Telephoto · longer distance</span>
            </div>
          </div>
        </div>

        <div className="observation">
          <Focus aria-hidden="true" size={24} strokeWidth={1.5} />
          <div>
            <h3>Observation</h3>
            <p>
              In the close-up image, facial features nearest to the camera
              appear disproportionately large. Stepping back reduces those
              relative distance differences; zoom then restores the framing
              without restoring the distortion.
            </p>
          </div>
        </div>
      </section>

      <section className="project-section architecture" id="part-2">
        <div className="section-heading">
          <SectionNumber>02</SectionNumber>
          <div>
            <p className="eyebrow">Spatial experiment</p>
            <h2>Architectural perspective compression</h2>
          </div>
        </div>

        <div className="photo-pair landscape-pair">
          <div className="photo-card">
            <PhotoPlaceholder
              label="Far away + zoom"
              filename="part2-telephoto.jpg"
              ratio="landscape"
            />
            <div className="caption-row">
              <strong>Compressed</strong>
              <span>Far position · zoomed in</span>
            </div>
          </div>
          <div className="photo-card">
            <PhotoPlaceholder
              label="Walk closer + wide"
              filename="part2-wide.jpg"
              ratio="landscape"
            />
            <div className="caption-row">
              <strong>Expanded</strong>
              <span>Near position · no zoom</span>
            </div>
          </div>
        </div>

        <div className="observation">
          <MoveHorizontal aria-hidden="true" size={26} strokeWidth={1.5} />
          <div>
            <h3>Observation</h3>
            <p>
              From farther away, the foreground and background appear closer
              together and the scene feels flatter. Moving closer with a wider
              field of view exaggerates depth, scale differences, and
              converging lines.
            </p>
          </div>
        </div>
      </section>

      <section className="project-section dolly" id="part-3">
        <div className="section-heading">
          <SectionNumber>03</SectionNumber>
          <div>
            <p className="eyebrow">Motion experiment</p>
            <h2>The Dolly Zoom</h2>
          </div>
        </div>

        <div className="dolly-frame">
          <PhotoPlaceholder
            label="Animated Dolly Zoom"
            filename="dolly-zoom.gif"
            ratio="wide"
          />
        </div>

        <div className="dolly-notes">
          <p className="lead">
            I moved the camera backward while zooming in, keeping the subject
            approximately the same size in every frame.
          </p>
          <p>
            The subject stays visually anchored while the background changes
            scale, producing the characteristic “Vertigo” effect. Replace this
            paragraph with details about your subject, number of frames, and
            any alignment or cropping you performed.
          </p>
        </div>
      </section>

      <footer>
        <span>CS 180 · Project 0</span>
        <span>YOUR NAME · 2026</span>
      </footer>
    </main>
  );
}
