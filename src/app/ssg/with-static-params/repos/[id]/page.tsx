// SSG:
// The page HTML is pre-rendered at build time.
// Ideal for SEO-critical sites without dynamic content like a blog.
// Cheaper to host because the server doesn't need to re-generate it at each request.
import Link from "next/link";
import { notFound } from "next/navigation";

interface Repo {
  id: number;
  name: string;
}

export const dynamicParams = false; // with this we would return 404 for repos ids: 3 and 4 --> 404 for not known params
// export const dynamicParams = true; // try to load not known params instead of returning 404
// If we use dynamicParams it will be considered ISR instead of SSG, but it's possible!

// You can use revalidatePath to regenerate a specific repository page after updating its data.
// https://nextjs.org/docs/app/api-reference/functions/revalidatePath

export async function generateStaticParams() {
  const data = await fetch("http://localhost:8080/repos");
  const repos = ((await data.json()) as Repo[]) || [];
  const reposToPreload = repos.slice(0, 2); // preload only the first two repos, the rest is fetched on demand
  return reposToPreload.map((repo) => ({
    // these "known repos" (id: 1, id:2) are preloaded on build
    id: repo.id.toString(),
  }));
}

type staticRepoParams = Promise<{ id: string[] }>;

export default async function Page({ params }: { params: staticRepoParams }) {
  const { id } = await params;
  const data = await fetch(`http://localhost:8080/repos/${id}`);
  if (!data.ok) {
    return notFound();
  }
  const repo = (await data.json()) as Repo;

  return (
    <div>
      <Link href={"/"}>Back home</Link>
      <h1>SSG repositories</h1>
      <h2>static date: {new Date().toString()}</h2>
      <p>Refresh page to see that the date will not change (static)</p>
      <h3 key={repo.id}>{repo.name}</h3>
    </div>
  );
}
