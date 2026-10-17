import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Projects from "./Projects";
import Skills from "./Skills";
import Footer from "./Footer";
import { getTranslator, type LocalizedProps } from "../lib/i18n";

export default function Portfolio({ locale }: LocalizedProps) {
  const t = getTranslator(locale);
  return (
    <>
      <a className="skip fixed -top-20 left-5 bg-[white] z-[10] p-3 focus:top-[0.625rem]" href="#main">{t("Skip to content")}</a>
      <Header locale={locale} />
      <main className="max-w-225 m-auto inset:mx-[8%]" id="main">
        <Hero locale={locale} />
        <About locale={locale} />
        <Experience locale={locale} />
        <Education locale={locale} />
        <Projects locale={locale} />
        <Skills locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
