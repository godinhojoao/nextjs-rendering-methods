"use client";

// This is a Client Side Rendering page
// Used in Single Page Applications (SPAs).
// SPAs are normally used for dashboards, admin panels, and other applications that require a lot of interactivity.

// This is not good for SEO because the browser needs to load all the JavaScript before rendering the page.
// So the user will see a blank page until the JavaScript is loaded.
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  const [date, setDate] = useState<string>(new Date().toString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date().toString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <Link href={"/"}>Back home</Link>
      <h1>CSR</h1>
      <h2>Dynamic date, on client side updated each 1 second: {date}</h2>
      <button onClick={() => window.alert("test")}>
        window client API - alert test
      </button>
      {/*
        If you try to use onClick without the line "use client" you will get this error:
        ⨯ Error: Event handlers cannot be passed to Client Component props.

        This occurs because all components in Next 13 by default are server components
        https://nextjs.org/docs/app/building-your-application/rendering/server-components#using-server-components-in-nextjs

        You could use server actions, but this is not the focus of this file.
      */}
    </div>
  );
}
