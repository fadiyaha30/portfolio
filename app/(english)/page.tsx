import Portfolio from "../../components/Portfolio";

// Rebuild at most once a day so the years of experience and footer year stay current.
export const revalidate = 86400;

export default function Home() {
  return <Portfolio locale="en" />;
}
