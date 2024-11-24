// SSG:
// The page HTML is pre-rendered at build time.
// Ideal for SEO-critical sites without dynamic content like a blog.
// Cheaper to host because the server doesn't need to re-generate it at each request.
import Link from "next/link";

interface Repo {
  id: number;
  name: string;
}

// SSG (Static Site Generation) with App Router
export const dynamic = "force-static"; // Forces the page to be Static Generated

export default async function Page() {
  // Fetch data on the server-side (during build time)
  const data = await fetch("http://localhost:8080/repos");
  const repos = ((await data.json()) as Repo[]) || [];
  return (
    <div>
      <Link href={"/"}>Back home</Link>
      <h1>SSG repositories</h1>
      <h2>static date: {new Date().toString()}</h2>
      <p>Refresh page to see that the date will not change (static)</p>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
}
