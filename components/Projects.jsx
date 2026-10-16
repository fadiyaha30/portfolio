export default function Projects() {
  return (
    <section id="work" className="section">
      <div className="section-heading">
        <span className="number">04</span>
        <h2>Projects</h2>
      </div>
      <h3 className="project-group-heading">Personal projects</h3>
      <div className="personal-projects">
        <article className="experience-card glass personal-project">
          <div className="project-topline"><span className="small-label">PERSONAL PROJECT · JAPANESE LEARNING</span></div>
          <h3>jp-dict</h3>
          <p className="body-copy">A Japanese learning web app that brings JLPT vocabulary search, flashcards, and speech tools together. Built as a personal project to support Japanese study.</p>
          <div className="tags"><span>Next.js</span><span>React</span><span>TypeScript</span><span>SQLite</span><span>OpenAI Whisper</span></div>
          <details>
            <summary>Features &amp; implementation <span aria-hidden="true">+</span></summary>
            <ul>
              <li>JLPT vocabulary search and flashcards for studying and reviewing words.</li>
              <li>User authentication.</li>
              <li>Speech recognition using OpenAI Whisper and text-to-speech functionality.</li>
              <li>Built with Next.js, React, TypeScript, and SQLite.</li>
            </ul>
          </details>
          <div className="project-actions"><a className="thesis-link" href="https://jp-dict-five.vercel.app/" target="_blank" rel="noopener noreferrer">Live app ↗</a><a className="thesis-link" href="https://github.com/fadiyaha30/jp-dict" target="_blank" rel="noopener noreferrer">GitHub ↗</a></div>
        </article>
        <article className="experience-card glass personal-project">
          <div className="project-topline"><span className="small-label">PERSONAL PROJECT</span><span className="progress-badge">In development</span></div>
          <h3>Cycling Pit Stops</h3>
          <p className="body-copy">A mobile-friendly web app for finding toilets, cafés, rest areas, and repair help during a bicycle ride. Inspired by my own cycling trips, starting around Lake Hamana and extending to Shizuoka and Aichi.</p>
          <div className="tags"><span>Next.js</span><span>TypeScript</span><span>Python / Django</span><span>GeoDjango</span><span>PostGIS</span></div>
          <details>
            <summary>Project plan &amp; technical direction <span aria-hidden="true">+</span></summary>
            <p className="body-copy">I’m developing this project to connect my full-stack experience with Python and geographic data. The current plan includes:</p>
            <ul>
              <li>Nearby search by need and distance, with a map and an accessible list view.</li>
              <li>Hand-checked cycling stops alongside imported OpenStreetMap places, clearly labelled by source and verification status.</li>
              <li>A Python import pipeline and spatial queries using Django REST Framework, GeoDjango, and PostgreSQL/PostGIS.</li>
              <li>Japanese and English interfaces, manual location selection, and useful fallbacks when local data is limited.</li>
            </ul>
            <p className="project-stage-note">Scope and architecture are documented; implementation is ongoing. Features and stack shown here are planned.</p>
          </details>
          <p className="project-links-note">GitHub and live demo links will be added when ready.</p>
        </article>
        <article className="experience-card glass personal-project">
          <div className="project-topline"><span className="small-label">PERSONAL PROJECT</span><span className="progress-badge">In development</span></div>
          <h3>Travel Log</h3>
          <p className="body-copy">A private travel diary organised around trips, with photos, notes, and places kept together. Designed for quick journaling on the road and selective sharing with friends.</p>
          <div className="tags"><span>Next.js</span><span>TypeScript</span><span>Laravel</span><span>Sanctum</span><span>PostgreSQL</span><span>Cloudflare R2</span></div>
          <details>
            <summary>Project plan &amp; technical direction <span aria-hidden="true">+</span></summary>
            <p className="body-copy">I’m developing this project to deepen my backend skills alongside a responsive frontend. The current plan includes:</p>
            <ul>
              <li>Accounts, trip timelines, diary entries, and private photo uploads.</li>
              <li>Offline drafts with safe retries, using IndexedDB and unique entry identifiers to prevent duplicates.</li>
              <li>Read-only trip links with explicit per-entry sharing and approximate locations by default.</li>
              <li>A Laravel API with ownership policies and Sanctum authentication, plus direct uploads to private Cloudflare R2 storage.</li>
              <li>Later milestones for maps, memory browsing, and PDF/ZIP exports.</li>
            </ul>
            <p className="project-stage-note">Scope and architecture are documented; implementation is ongoing. Features and stack shown here are planned. Travel Log is the working name.</p>
          </details>
          <p className="project-links-note">GitHub and live demo links will be added when ready.</p>
        </article>
      </div>
      <h3 className="project-group-heading academic-heading">Academic projects</h3>
      <article className="experience-card glass thesis-card" id="thesis">
        <span className="small-label">ACADEMIC PROJECT · UNDERGRADUATE THESIS</span>
        <h3>Car Detection Simulation<br />Using the YOLO Algorithm</h3>
        <p className="body-copy">A prototype that connects computer vision with hardware: detecting toy cars and controlling an automatic barrier using an ESP32-CAM, Arduino, and a servo.</p>
        <div className="tags"><span>Python</span><span>YOLOv5</span><span>Arduino C/C++</span><span>ESP32-CAM</span></div>
        <details>
          <summary>Explore the approach <span aria-hidden="true">+</span></summary>
          <p className="body-copy">Compared YOLOv5s and YOLOv5l using a dataset of 60 toy cars. YOLOv5l achieved the higher reported accuracy (78.1% versus 76.5%) and was selected for the barrier prototype. Camera images were processed for detection, then signals were sent to the Arduino to open and close the barrier.</p>
          <p className="body-copy">This was a controlled simulation using toy cars.</p>
        </details>
        <a className="thesis-link" href="https://etd.repository.ugm.ac.id/penelitian/detail/233753" target="_blank" rel="noopener noreferrer">Read the thesis abstract at UGM ↗</a>
      </article>
    </section>
  );
}
