// Incremental Static Regeneration
// The page HTML is pre-rendered at build time.
// But is revalidated at a specified interval (in seconds) and re-built if the data is outdated.
// Good option if you have an specific part of your site that needs to be updated with some frequence.
import Link from "next/link";

interface Repo {
  id: number;
  name: string;
}

export const revalidate = 5; // Revalidates the page every 5 seconds

export default async function Page() {
  // Fetch data on the server-side (during build time)
  const data = await fetch("http://localhost:8080/repos");
  const repos = ((await data.json()) as Repo[]) || [];

  return (
    <div>
      <Link href={"/"}>Back home</Link>
      <h1>ISR repositories</h1>
      <h2>Static date, revalidated each 5 seconds: {new Date().toString()}</h2>
      <p>Refresh page to see that the date will change each 5 seconds</p>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
}
