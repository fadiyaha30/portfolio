export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-layout">
        <div className="hero-content">
          <p className="hero-greeting">Hi, I’m Faya.</p>
          <h1 className="hero-title">Fadiyah <span>Adiningsih</span></h1>
          <p className="hero-role"><span className="dot" aria-hidden="true" />Full Stack Developer <span className="hero-location">· Japan</span></p>
          <p className="hero-copy">I build web applications from interface to backend.</p>
          <div className="hero-experience glass" role="group" aria-label="Professional experience">
            <p className="hero-experience-value">
              <strong>2+</strong>
              <span>years</span>
            </p>
            <div className="hero-experience-copy">
              <p className="hero-experience-title">Full-stack development</p>
              <p className="hero-experience-since">Since <time dateTime="2024-04">April 2024</time> · Japan</p>
            </div>
          </div>
          <div className="actions"><a className="button" href="#work">View my work <span>↗</span></a><a className="text-link" href="#about">About me ↓</a></div>
        </div>
        <figure className="profile-frame glass">
          <div className="profile-crop"><img src="/assets/faya-blurred.png" alt="Faya smiling, wearing a navy hijab and glasses" width="1019" height="1358" fetchPriority="high" /></div>
          <figcaption>Faya <span>Indonesia → Japan</span></figcaption>
        </figure>
      </div>
      <div className="hero-note"><span>Full Stack Developer</span><span>Indonesia → Japan</span></div>
    </section>
  );
}
