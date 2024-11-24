import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>All explanations are inside each file</h1>
      <ul>
        <li style={{ color: "#000" }}>
          <Link href={"/csr"}>Client-Side Rendering (CSR)</Link>
        </li>
        <li style={{ color: "#000" }}>
          <Link href={"/ssr"}>Server-Side Rendering (SSR)</Link>
        </li>
        <li style={{ color: "#000" }}>
          <p>Static Site Generation (SSG)</p>
            <ul>
              <li><Link href={"/ssg/fetching-directly"}>Fetching directly</Link></li>
              <li>
                With generateStaticParams
                <ul>
                  <li><Link href={"/ssg/with-static-params/repos/1"}>Repo1 (exists, pre-loaded on build)</Link></li>
                  <li><Link href={"/ssg/with-static-params/repos/2"}>Repo2 (exists, pre-loaded on build)</Link></li>
                  <li>
                    <Link href={"/ssg/with-static-params/repos/3"}>
                      Repo3 (exists, not pre-loaded) -- Will not appear since we are using SSG, dynamic=false
                    </Link>
                  </li>
                  <li>
                    <Link href={"/ssg/with-static-params/repos/4"}>
                      Repo4 (exists, not pre-loaded) -- Will not appear since we are using SSG, dynamic=false
                    </Link>
                  </li>
                  <li><Link href={"/ssg/with-static-params/repos/5"}>Repo5 (does not exist)</Link></li>
                </ul>
              </li>
            </ul>
        </li>
        <li style={{ color: "#000" }}>
          <Link href={"/isr"}>Incremental Static Regeneration (ISR)</Link>
        </li>
        <li style={{ color: "#000" }}>
          <Link href={"/composition-pattern"}>
            Composition Pattern (SSG + CSR)
          </Link>
        </li>
      </ul>
    </main>
  );
}
