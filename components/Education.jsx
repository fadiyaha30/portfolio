export default function Education() {
  return (
    <section id="education" className="section">
      <div className="section-heading">
        <span className="number">03</span>
        <h2>Education</h2>
      </div>
      <article className="education-card glass">
        <div className="education-mark" aria-hidden="true">↗</div>
        <div>
          <h3>Universitas Gadjah Mada</h3>
          <p className="degree">Electronics and Instrumentation</p>
          <p className="education-location">Indonesia · Graduated February 2024</p>
          <a className="thesis-link" href="#thesis">Thesis: Car Detection Simulation Using YOLO ↗</a>
        </div>
        <span className="date">Jul 2019 — Feb 2024</span>
      </article>
    </section>
  );
}
