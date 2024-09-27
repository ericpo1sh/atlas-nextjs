export default async function Page({ params }: { params: { id: string } }) {
  //Simulate Page loading
  await new Promise((r) => setTimeout(r, 1000));

  return <div>Topic Page: {params.id}</div>;
}
