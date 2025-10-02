import Link from "next/link";
export default function Home() {
 return (
<main style={{ padding: "2rem", textAlign: "center" }}>
<h1>CPRG 306: Web Development 2 - Assignments</h1>
<p>
<Link href="/week-2" className="text-blue-600 hover:underline">
         Go to Week 2 Page
</Link>
</p>
<p>
<Link href="/week-3" className="text-blue-600 hover:underline">
         Go to Week 3 Page
</Link>
</p>
<p>Additional Information: This page links to week-2 and week-3 assignments.</p>
</main>
 );
}