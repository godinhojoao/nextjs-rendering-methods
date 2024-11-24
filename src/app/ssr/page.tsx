// By default nextjs uses Server Components. This allows us to implement SSR seamlessly.

// SSR:
// The page HTML is generated at each request.
// Ideal for SEO-critical sites with frequently changing dynamic content like prices and stock. (e.g, ecommerce sites)
// It's expensive since the server will regenerate the HTML for each request.
import Link from "next/link";

interface Repo {
  id: number;
  name: string;
}

export const dynamic = "force-dynamic"; // This forces the page to be always Server-Side Rendered
// The default is dynamic = 'auto', which allows nextjs to optimize the page to be static if possible.

export default async function Page() {
  // Fetch data on the server-side (for each request)
  const data = await fetch("http://localhost:8080/repos");
  const repos = ((await data.json()) as Repo[]) || [];
  return (
    <div>
      <Link href={"/"}>Back home</Link>
      <h1>SSR repositories</h1>
      <h2>Dynamic date: {new Date().toString()}</h2>
      <p>Refresh page to see date being updated at each request</p>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
}
