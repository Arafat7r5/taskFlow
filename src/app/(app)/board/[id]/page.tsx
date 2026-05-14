export default function BoardPage({ params }: { params: { id: string } }) {
  return <h1 className="p-8 text-2xl font-bold">Board {params.id}</h1>
}