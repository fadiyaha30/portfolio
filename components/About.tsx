export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-heading">
        <span className="number">01</span>
        <h2>A little about me</h2>
      </div>
      <div className="about-grid">
        <div>
          <p className="lead">A Full Stack Developer with curiosity<br />for what comes next.</p>
          <div className="about-story">
            <p className="body-copy">I grew up watching Doraemon, and its futuristic gadgets sparked my curiosity about technology and Japan. That interest led me to study Electronics and Instrumentation at Universitas Gadjah Mada, where I learned to code and discovered how much I enjoyed building things with software. For my thesis, I combined YOLO car detection with an automatic barrier prototype, bringing software and hardware together.</p>
            <p className="body-copy">Today, I’m living in Japan and working as a Full Stack Developer, developing web applications across frontend and backend. Web development wasn’t a major focus of my degree, so much of my knowledge came from hands-on experience—researching, experimenting, and learning from the people around me. It feels special to see a childhood interest become part of my everyday life.</p>
            <p className="body-copy">My work has taught me to think beyond whether the code works. I consider how people will use a feature, whether a button’s purpose is clear, and how a change might affect their experience. Working with a team has also helped me communicate my ideas, listen to different perspectives, and find solutions together.</p>
            <p className="body-copy">I want to keep growing as a Full Stack Developer, building on my web development experience while exploring app development and other areas of software. Using AI in my daily work has also made me curious about how it works and how I could apply it in what I build.</p>
            <p className="body-copy">I’m excited to keep learning and exploring what I can build next!</p>
          </div>
        </div>
        <aside className="about-journey" aria-label="My personal journey">
          <div className="journey glass">
            <span className="small-label">MY JOURNEY</span>
            <div className="journey-path">
              <div>
                <span className="country">ID</span>
                <h3>Indonesia</h3>
                <p>Where I’m from</p>
              </div>
              <span className="journey-arrow" aria-hidden="true">→</span>
              <div>
                <span className="country">JP</span>
                <h3>Japan</h3>
                <p>Where I work</p>
              </div>
            </div>
          </div>
          <div className="journey-timeline glass">
            <span className="small-label">THE STEPS ALONG THE WAY</span>
            <ol>
              <li>
                <span className="milestone-time">Childhood</span>
                <h3>A spark of curiosity</h3>
                <p>Doraemon sparked my interest in technology and Japan.</p>
              </li>
              <li>
                <span className="milestone-time">2019–2024 · University</span>
                <h3>Discovering software</h3>
                <p>Studied Electronics and Instrumentation at UGM, learned to code, and explored computer vision through my thesis.</p>
              </li>
              <li>
                <span className="milestone-time">2024 · Japan</span>
                <h3>A new chapter</h3>
                <p>Moved to Japan and started working as a Full Stack Developer at PIARY.</p>
              </li>
              <li>
                <span className="milestone-time">Today</span>
                <h3>Building &amp; learning</h3>
                <p>Growing as a Full Stack Developer, with curiosity about app development, AI, and what I can build next.</p>
              </li>
            </ol>
          </div>
        </aside>
      </div>
    </section>
  );
}
