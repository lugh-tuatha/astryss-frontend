"use client";
import { useEntries } from "@/shared/hooks/use-entries";

export default function Home() {
  const { data, isLoading } = useEntries();

  return (
    <main className="main-container">
      <div className="mt-12">
        <h1>Welcome to the FAQs page</h1>
        <h1>ace</h1>
        <div>
          <h1>Header</h1>
          <p>{isLoading ? "Loading..." : data}</p>
        </div>
      </div>
    </main>
  )
}