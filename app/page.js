import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>

      <p>
        Go to <Link href="/week-2">Week 2 Page</Link>
      </p>

      <p>Additional Information: This page links to week-2 assignments.</p>
    </main>
  );
}


