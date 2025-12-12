import { use } from "react";

export default function EntryPage({ params }: { params: Promise<{ id: string }>  }) {
  const { id } = use(params);

  return (
    <main className="main-container">
      <h1>Ace</h1>
      id: {id}
    </main>
  )
}