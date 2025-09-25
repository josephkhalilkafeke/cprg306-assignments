import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      
      <p>
        <Link href="/week-2" style={{ color: "blue", textDecoration: "underline" }}>
          Go to Week 2 Page
        </Link>
      </p>

      <p>Additional Information: This page links to week-2 assignments.</p>
    </main>
  );
}

