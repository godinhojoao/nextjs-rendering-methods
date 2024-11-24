"use client";
import { useState, useEffect } from "react";

interface Repo {
  id: number;
  name: string;
}

export function ClientSideReposAndDate() {
  const [date, setDate] = useState<string>(new Date().toString());
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the repositories when the component mounts
    const fetchRepos = async () => {
      try {
        // forcing a delay to see the load
        await new Promise((resolve) => setTimeout(resolve, 2000));

        const response = await fetch(
          "http://localhost:8080/repos"
        );
        const data = await response.json();
        setRepos(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching repositories:", error);
        setLoading(false);
      }
    };

    fetchRepos();

    const intervalId = setInterval(() => {
      setDate(new Date().toString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  if (loading) return <p>Loading repositories...</p>;

  return (
    <div>
      <p>----- Client side starts here -----</p>
      <h3>Client side date, updated each 1 second: {date}</h3>
      <h3>Client side generated repos list</h3>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
}
