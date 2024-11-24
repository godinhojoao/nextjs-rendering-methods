// Composition Pattern: Static Site Generation + Client Side Component
import Link from "next/link";
import { ClientSideReposAndDate } from "./client-side-repos-and-date";

interface Repo {
  id: number;
  name: string;
}

export const dynamic = "force-static";

export default async function Page() {
  const data = await fetch("http://localhost:8080/repos");
  const repos = ((await data.json()) as Repo[]) || [];

  return (
    <div>
      <Link href={"/"}>Back home</Link>
      <h1>Composition pattern SSG + CSR</h1>

      {/* This works even with javascript disabled because is static generated */}
      <p>----- Static site starts here -----</p>
      <h3>Static Generated date, fixed: {new Date().toString()}</h3>
      <h3>Static Generated repos list</h3>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
      <p>----- Static site ends here -----</p>

      {/* You can see the load at this one, and it stops working if javascript is disabled */}
      <ClientSideReposAndDate />
    </div>
  );
}
