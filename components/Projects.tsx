import { getTranslator, type LocalizedProps } from "../lib/i18n";

export default function Projects({ locale }: LocalizedProps) {
  const t = getTranslator(locale);
  return (
    <section id="work" className="
      section pt-[1.9375rem] pb-[2.1875rem] w-[calc(100%_+_6.25rem)] ml-[-3.125rem] px-0 compact:px-0
      compact:py-[1.375rem] projects-stack:w-auto projects-stack:ml-0
      ">
      <div className="section-heading flex items-center gap-[0.8125rem] mb-[1.375rem]">
        <span className="number text-[0.625rem] text-[color:#8995a3]">04</span>
        <h2 className="font-[550] text-[1.375rem] tracking-[-0.0375rem] m-0 compact:text-[1.25rem]">{t("Projects")}</h2>
      </div>
      <h3 className="project-group-heading font-[550] text-[0.9375rem] tracking-[-0.015625rem] mt-0 mb-4 text-[color:#65778b] mx-0">{t("Personal projects")}</h3>
      <div className="personal-projects grid gap-[0.875rem] mb-4 grid-cols-3 items-start compact:grid-cols-1">
        <article className="experience-card glass personal-project rounded-[1rem] min-w-0 px-[1.1875rem] py-[1.3125rem] compact:p-[1.375rem] phone:p-4">
          <div className="project-topline flex justify-between items-center gap-2 mb-3 flex-wrap min-h-[2.875rem] content-start compact:min-h-0"><span className="small-label text-[0.5625rem] font-semibold tracking-[0.0625rem] text-[color:var(--accent)]">{t("PERSONAL PROJECT · JAPANESE LEARNING")}</span></div>
          <h3 className="font-medium text-[1.3125rem] tracking-[-0.03125rem] mt-0 mb-3 mx-0">jp-dict</h3>
          <p className="body-copy text-[0.75rem] text-[color:var(--muted)] leading-[1.85] m-0 compact:text-[0.75rem]">{t("A Japanese learning web app that brings JLPT vocabulary search, flashcards, and speech tools together. Built as a personal project to support Japanese study.")}</p>
          <div className="tags flex flex-wrap gap-[0.3125rem] mt-[0.9375rem]"><span className="text-[0.5625rem] bg-[rgba(225,233,242,.45)] rounded-[0.3125rem] text-[color:#65798e] px-[0.4375rem] py-[0.1875rem]">Next.js</span><span className="text-[0.5625rem] bg-[rgba(225,233,242,.45)] rounded-[0.3125rem] text-[color:#65798e] px-[0.4375rem] py-[0.1875rem]">React</span><span className="text-[0.5625rem] bg-[rgba(225,233,242,.45)] rounded-[0.3125rem] text-[color:#65798e] px-[0.4375rem] py-[0.1875rem]">TypeScript</span><span className="text-[0.5625rem] bg-[rgba(225,233,242,.45)] rounded-[0.3125rem] text-[color:#65798e] px-[0.4375rem] py-[0.1875rem]">SQLite</span><span className="text-[0.5625rem] bg-[rgba(225,233,242,.45)] rounded-[0.3125rem] text-[color:#65798e] px-[0.4375rem] py-[0.1875rem]">OpenAI Whisper</span></div>
          <details className="mt-[1.125rem] [border-top:0.0625rem_solid_var(--line)]">
            <summary className="
              list-none flex justify-between items-center pt-[0.8125rem] pb-0 text-[0.6875rem] text-[color:#536b83]
              cursor-pointer gap-[0.625rem] px-0 [&::-webkit-details-marker]:hidden
              ">{t("Features & implementation")}{" "}<span className="text-[1.0625rem] [transition:transform_.2s] [details[open]_&]:[transform:rotate(45deg)]" aria-hidden="true">+</span></summary>
            <ul className="pl-[1.125rem] mt-3 mb-0 text-[0.6875rem] text-[color:var(--muted)] leading-[1.9] mx-0">
              <li>{t("JLPT vocabulary search and flashcards for studying and reviewing words.")}</li>
              <li>{t("User authentication.")}</li>
              <li>{t("Speech recognition using OpenAI Whisper and text-to-speech functionality.")}</li>
              <li>{t("Built with Next.js, React, TypeScript, and SQLite.")}</li>
            </ul>
          </details>
          <div className="project-actions flex gap-[1.125rem] mt-[0.875rem] pt-[0.125rem]"><a className="thesis-link inline-block text-[0.6875rem] text-[color:#536b83] mt-[0.8125rem] hover:underline" href="https://jp-dict-five.vercel.app/" target="_blank" rel="noopener noreferrer">{t("Live app ↗")}</a><a className="thesis-link inline-block text-[0.6875rem] text-[color:#536b83] mt-[0.8125rem] hover:underline" href="https://github.com/fadiyaha30/jp-dict" target="_blank" rel="noopener noreferrer">GitHub ↗</a></div>
        </article>
        <article className="experience-card glass personal-project rounded-[1rem] min-w-0 px-[1.1875rem] py-[1.3125rem] compact:p-[1.375rem] phone:p-4">
          <div className="project-topline flex justify-between items-center gap-2 mb-3 flex-wrap min-h-[2.875rem] content-start compact:min-h-0"><span className="small-label text-[0.5625rem] font-semibold tracking-[0.0625rem] text-[color:var(--accent)]">{t("PERSONAL PROJECT")}</span><span className="progress-badge text-[0.625rem] text-[color:#53756b] bg-[#e7f0eb] rounded-[1.25rem] whitespace-nowrap px-[0.5625rem] py-[0.1875rem]">{t("In development")}</span></div>
          <h3 className="font-medium text-[1.3125rem] tracking-[-0.03125rem] mt-0 mb-3 mx-0">Cycling Pit Stops</h3>
          <p className="body-copy text-[0.75rem] text-[color:var(--muted)] leading-[1.85] m-0 compact:text-[0.75rem]">{t("A mobile-friendly web app for finding toilets, cafés, rest areas, and repair help during a bicycle ride. Inspired by my own cycling trips, starting around Lake Hamana and extending to Shizuoka and Aichi.")}</p>
          <div className="tags flex flex-wrap gap-[0.3125rem] mt-[0.9375rem]"><span className="text-[0.5625rem] bg-[rgba(225,233,242,.45)] rounded-[0.3125rem] text-[color:#65798e] px-[0.4375rem] py-[0.1875rem]">Next.js</span><span className="text-[0.5625rem] bg-[rgba(225,233,242,.45)] rounded-[0.3125rem] text-[color:#65798e] px-[0.4375rem] py-[0.1875rem]">TypeScript</span><span className="text-[0.5625rem] bg-[rgba(225,233,242,.45)] rounded-[0.3125rem] text-[color:#65798e] px-[0.4375rem] py-[0.1875rem]">Python / Django</span><span className="text-[0.5625rem] bg-[rgba(225,233,242,.45)] rounded-[0.3125rem] text-[color:#65798e] px-[0.4375rem] py-[0.1875rem]">GeoDjango</span><span className="text-[0.5625rem] bg-[rgba(225,233,242,.45)] rounded-[0.3125rem] text-[color:#65798e] px-[0.4375rem] py-[0.1875rem]">PostGIS</span></div>
          <details className="mt-[1.125rem] [border-top:0.0625rem_solid_var(--line)]">
            <summary className="
              list-none flex justify-between items-center pt-[0.8125rem] pb-0 text-[0.6875rem] text-[color:#536b83]
              cursor-pointer gap-[0.625rem] px-0 [&::-webkit-details-marker]:hidden
              ">{t("Project plan & technical direction")}{" "}<span className="text-[1.0625rem] [transition:transform_.2s] [details[open]_&]:[transform:rotate(45deg)]" aria-hidden="true">+</span></summary>
            <p className="body-copy text-[0.75rem] text-[color:var(--muted)] leading-[1.85] mt-3 mb-0 mx-0 compact:text-[0.75rem]">{t("I’m developing this project to connect my full-stack experience with Python and geographic data. The current plan includes:")}</p>
            <ul className="pl-[1.125rem] mt-3 mb-0 text-[0.6875rem] text-[color:var(--muted)] leading-[1.9] mx-0">
              <li>{t("Nearby search by need and distance, with a map and an accessible list view.")}</li>
              <li>{t("Hand-checked cycling stops alongside imported OpenStreetMap places, clearly labelled by source and verification status.")}</li>
              <li>{t("A Python import pipeline and spatial queries using Django REST Framework, GeoDjango, and PostgreSQL/PostGIS.")}</li>
              <li>{t("Japanese and English interfaces, manual location selection, and useful fallbacks when local data is limited.")}</li>
            </ul>
            <p className="
              project-stage-note text-[0.625rem] text-[color:var(--muted)] leading-[1.8] mt-[0.875rem] mb-0
              bg-[rgba(230,236,244,.4)] rounded-[0.4375rem] px-3 py-[0.625rem] mx-0
              ">{t("Scope and architecture are documented; implementation is ongoing. Features and stack shown here are planned.")}</p>
          </details>
          <p className="
            project-links-note text-[0.625rem] text-[color:var(--muted)] leading-[1.8] mt-[0.875rem] mb-0
            pt-[0.8125rem] [border-top:0.0625rem_solid_var(--line)] mx-0
            ">{t("GitHub and live demo links will be added when ready.")}</p>
        </article>
        <article className="experience-card glass personal-project rounded-[1rem] min-w-0 px-[1.1875rem] py-[1.3125rem] compact:p-[1.375rem] phone:p-4">
          <div className="project-topline flex justify-between items-center gap-2 mb-3 flex-wrap min-h-[2.875rem] content-start compact:min-h-0"><span className="small-label text-[0.5625rem] font-semibold tracking-[0.0625rem] text-[color:var(--accent)]">{t("PERSONAL PROJECT")}</span><span className="progress-badge text-[0.625rem] text-[color:#53756b] bg-[#e7f0eb] rounded-[1.25rem] whitespace-nowrap px-[0.5625rem] py-[0.1875rem]">{t("In development")}</span></div>
          <h3 className="font-medium text-[1.3125rem] tracking-[-0.03125rem] mt-0 mb-3 mx-0">Travel Log</h3>
          <p className="body-copy text-[0.75rem] text-[color:var(--muted)] leading-[1.85] m-0 compact:text-[0.75rem]">{t("A private travel diary organised around trips, with photos, notes, and places kept together. Designed for quick journaling on the road and selective sharing with friends.")}</p>
          <div className="tags flex flex-wrap gap-[0.3125rem] mt-[0.9375rem]"><span className="text-[0.5625rem] bg-[rgba(225,233,242,.45)] rounded-[0.3125rem] text-[color:#65798e] px-[0.4375rem] py-[0.1875rem]">Next.js</span><span className="text-[0.5625rem] bg-[rgba(225,233,242,.45)] rounded-[0.3125rem] text-[color:#65798e] px-[0.4375rem] py-[0.1875rem]">TypeScript</span><span className="text-[0.5625rem] bg-[rgba(225,233,242,.45)] rounded-[0.3125rem] text-[color:#65798e] px-[0.4375rem] py-[0.1875rem]">Laravel</span><span className="text-[0.5625rem] bg-[rgba(225,233,242,.45)] rounded-[0.3125rem] text-[color:#65798e] px-[0.4375rem] py-[0.1875rem]">Sanctum</span><span className="text-[0.5625rem] bg-[rgba(225,233,242,.45)] rounded-[0.3125rem] text-[color:#65798e] px-[0.4375rem] py-[0.1875rem]">PostgreSQL</span><span className="text-[0.5625rem] bg-[rgba(225,233,242,.45)] rounded-[0.3125rem] text-[color:#65798e] px-[0.4375rem] py-[0.1875rem]">Cloudflare R2</span></div>
          <details className="mt-[1.125rem] [border-top:0.0625rem_solid_var(--line)]">
            <summary className="
              list-none flex justify-between items-center pt-[0.8125rem] pb-0 text-[0.6875rem] text-[color:#536b83]
              cursor-pointer gap-[0.625rem] px-0 [&::-webkit-details-marker]:hidden
              ">{t("Project plan & technical direction")}{" "}<span className="text-[1.0625rem] [transition:transform_.2s] [details[open]_&]:[transform:rotate(45deg)]" aria-hidden="true">+</span></summary>
            <p className="body-copy text-[0.75rem] text-[color:var(--muted)] leading-[1.85] mt-3 mb-0 mx-0 compact:text-[0.75rem]">{t("I’m developing this project to deepen my backend skills alongside a responsive frontend. The current plan includes:")}</p>
            <ul className="pl-[1.125rem] mt-3 mb-0 text-[0.6875rem] text-[color:var(--muted)] leading-[1.9] mx-0">
              <li>{t("Accounts, trip timelines, diary entries, and private photo uploads.")}</li>
              <li>{t("Offline drafts with safe retries, using IndexedDB and unique entry identifiers to prevent duplicates.")}</li>
              <li>{t("Read-only trip links with explicit per-entry sharing and approximate locations by default.")}</li>
              <li>{t("A Laravel API with ownership policies and Sanctum authentication, plus direct uploads to private Cloudflare R2 storage.")}</li>
              <li>{t("Later milestones for maps, memory browsing, and PDF/ZIP exports.")}</li>
            </ul>
            <p className="
              project-stage-note text-[0.625rem] text-[color:var(--muted)] leading-[1.8] mt-[0.875rem] mb-0
              bg-[rgba(230,236,244,.4)] rounded-[0.4375rem] px-3 py-[0.625rem] mx-0
              ">{t("Scope and architecture are documented; implementation is ongoing. Features and stack shown here are planned. Travel Log is the working name.")}</p>
          </details>
          <p className="
            project-links-note text-[0.625rem] text-[color:var(--muted)] leading-[1.8] mt-[0.875rem] mb-0
            pt-[0.8125rem] [border-top:0.0625rem_solid_var(--line)] mx-0
            ">{t("GitHub and live demo links will be added when ready.")}</p>
        </article>
      </div>
      <h3 className="project-group-heading academic-heading font-[550] text-[0.9375rem] tracking-[-0.015625rem] mt-[1.875rem] mb-4 text-[color:#65778b] mx-0">{t("Academic projects")}</h3>
      <article className="experience-card glass thesis-card rounded-[1rem] [scroll-margin-top:7.5rem] max-w-none px-[1.6875rem] py-6 compact:p-5 phone:p-4" id="thesis">
        <span className="small-label text-[0.625rem] font-semibold tracking-[0.10625rem] text-[color:var(--accent)]">{t("ACADEMIC PROJECT · UNDERGRADUATE THESIS")}</span>
        <h3 className="font-medium text-[1.4375rem] tracking-[-0.03125rem] mt-3 mb-4 leading-[1.35] mx-0 compact:text-[1.25rem]">{t("Car Detection Simulation")}<br />{t("Using the YOLO Algorithm")}</h3>
        <p className="body-copy text-[0.8125rem] text-[color:var(--muted)] leading-[1.85] m-0 compact:text-[0.75rem]">{t("A prototype that connects computer vision with hardware: detecting toy cars and controlling an automatic barrier using an ESP32-CAM, Arduino, and a servo.")}</p>
        <div className="tags flex flex-wrap gap-[0.4375rem] mt-[0.9375rem]"><span className="text-[0.625rem] bg-[rgba(225,233,242,.45)] rounded-[0.3125rem] text-[color:#65798e] px-[0.5625rem] py-[0.1875rem]">Python</span><span className="text-[0.625rem] bg-[rgba(225,233,242,.45)] rounded-[0.3125rem] text-[color:#65798e] px-[0.5625rem] py-[0.1875rem]">YOLOv5</span><span className="text-[0.625rem] bg-[rgba(225,233,242,.45)] rounded-[0.3125rem] text-[color:#65798e] px-[0.5625rem] py-[0.1875rem]">Arduino C/C++</span><span className="text-[0.625rem] bg-[rgba(225,233,242,.45)] rounded-[0.3125rem] text-[color:#65798e] px-[0.5625rem] py-[0.1875rem]">ESP32-CAM</span></div>
        <details className="mt-[1.125rem] [border-top:0.0625rem_solid_var(--line)]">
          <summary className="
            list-none flex justify-between items-center pt-[0.8125rem] pb-0 text-[0.6875rem] text-[color:#536b83]
            cursor-pointer px-0 [&::-webkit-details-marker]:hidden
            ">{t("Explore the approach")}{" "}<span className="text-[1.0625rem] [transition:transform_.2s] [details[open]_&]:[transform:rotate(45deg)]" aria-hidden="true">+</span></summary>
          <p className="body-copy text-[0.75rem] text-[color:var(--muted)] leading-[1.85] mt-3 mb-0 mx-0">{t("Compared YOLOv5s and YOLOv5l using a dataset of 60 toy cars. YOLOv5l achieved the higher reported accuracy (78.1% versus 76.5%) and was selected for the barrier prototype. Camera images were processed for detection, then signals were sent to the Arduino to open and close the barrier.")}</p>
          <p className="body-copy text-[0.75rem] text-[color:var(--muted)] leading-[1.85] mt-3 mb-0 mx-0">{t("This was a controlled simulation using toy cars.")}</p>
        </details>
        <a className="thesis-link inline-block text-[0.6875rem] text-[color:#536b83] mt-[0.8125rem] hover:underline" href="https://etd.repository.ugm.ac.id/penelitian/detail/233753" target="_blank" rel="noopener noreferrer">{t("Read the thesis abstract at UGM ↗")}</a>
      </article>
    </section>
  );
}
