export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-heading">
        <span className="number">02</span>
        <h2>Experience</h2>
        <span className="section-aside">Learning through building.</span>
      </div>
      <div className="experience-list">
        <article className="experience-card glass">
          <div className="entry-head">
            <div className="company-icon" aria-hidden="true">P</div>
            <div className="entry-title">
              <h3>Web Developer</h3>
              <p>PIARY <span>· Japan · Full-time</span></p>
            </div>
            <span className="date">Apr 2024 — Present</span>
          </div>
          <p className="body-copy">Developing and maintaining web services across frontend and backend, from improvements to existing products to new internal systems.</p>
          <div className="tags"><span>Next.js</span><span>React</span><span>TypeScript</span><span>PHP</span></div>
          <div className="company-projects">
            <span className="small-label">PROJECT CONTRIBUTIONS</span>
            <article className="nested-project">
              <h4>Aeta — Pregnancy &amp; Healthcare Information</h4>
              <p className="project-context">A service providing pregnancy, childbirth, and medical facility information.</p>
              <p className="project-role">Main developer</p>
              <p className="body-copy">Develop and maintain features within an existing service, including a pregnancy weight-management calculator and CMS integrations.</p>
              <details>
                <summary>My contributions <span aria-hidden="true">+</span></summary>
                <ul>
                  <li>Developed a calculator to support weight management during pregnancy.</li>
                  <li>Implemented CMS integrations and improvements to existing functionality.</li>
                  <li>Handled testing, production releases, and bug fixes.</li>
                  <li>The calculator page remained among the site’s top two pages by monthly page views for 12 months.</li>
                </ul>
                <div className="tags"><span>Next.js</span><span>TypeScript</span><span>Strapi</span><span>GA4</span></div>
              </details>
            </article>
            <article className="nested-project">
              <h4>Web Invitation — Digital Invitation Service</h4>
              <p className="project-context">A service for creating online invitations, managing guest check-in, and handling payments.</p>
              <p className="project-role">Development team member</p>
              <p className="body-copy">Proposed guest check-in functionality and collaborated with the team on its implementation, payments, and updates to existing screens.</p>
              <details>
                <summary>My contributions <span aria-hidden="true">+</span></summary>
                <ul>
                  <li>Proposed and co-developed manual and QR-code guest check-in.</li>
                  <li>Implemented frontend handling of Laravel Reverb events to update reception status in real time.</li>
                  <li>Co-developed Stripe payment and subscription cancellation functionality.</li>
                  <li>Migrated selected parts of PHP screens to React.</li>
                </ul>
                <div className="tags"><span>PHP</span><span>React</span><span>Stripe</span><span>Laravel Reverb</span></div>
              </details>
            </article>
            <article className="nested-project">
              <h4>Intangible — 360° Employee Evaluation Platform</h4>
              <p className="project-context">A multi-tenant SaaS for self, peer, and manager evaluations, with results that HR can compare over time.</p>
              <p className="project-role">Main developer · Operator Admin area</p>
              <p className="body-copy">Joined an existing product partway through development and built its operator-facing screens and supporting functionality from scratch.</p>
              <details>
                <summary>My implementation <span aria-hidden="true">+</span></summary>
                <ul>
                  <li>Implemented organization and administrator management.</li>
                  <li>Developed administrator invitation and re-invitation workflows.</li>
                  <li>Implemented application-level role and permission checks.</li>
                  <li>Built frontend and backend functionality using Next.js, TypeScript, and Supabase.</li>
                </ul>
                <div className="tags"><span>Next.js</span><span>TypeScript</span><span>Supabase</span></div>
              </details>
            </article>
            <article className="nested-project">
              <h4>PIARY FAQ — Internal FAQ System</h4>
              <p className="project-context">An internal system for searching and managing frequently asked questions.</p>
              <p className="project-role">Independent developer</p>
              <p className="body-copy">Developed the system from design and implementation through production deployment.</p>
              <details>
                <summary>My contributions <span aria-hidden="true">+</span></summary>
                <ul>
                  <li>Implemented FAQ search and administration screens.</li>
                  <li>Added email/password authentication and JWT session management.</li>
                  <li>Implemented access permission checks.</li>
                  <li>Handled production deployment.</li>
                </ul>
                <div className="tags"><span>Next.js</span><span>TypeScript</span><span>Prisma</span><span>NextAuth</span></div>
              </details>
            </article>
          </div>
        </article>
        <article className="experience-card glass">
          <div className="entry-head">
            <div className="company-icon secondary-icon" aria-hidden="true">R</div>
            <div className="entry-title">
              <h3>Cloud Developer Intern</h3>
              <p>PT Ruang Cipta Teknologi <span>· Indonesia</span></p>
            </div>
            <span className="date">May — Jul 2022</span>
          </div>
          <p className="body-copy">Supported technical research, testing, and development using Python and AWS.</p>
          <div className="tags"><span>Python</span><span>AWS</span></div>
          <details>
            <summary>More about the internship <span aria-hidden="true">+</span></summary>
            <p className="body-copy">Assisted with investigation and testing of facial recognition technology as part of research and development support.</p>
          </details>
        </article>
      </div>
    </section>
  );
}
