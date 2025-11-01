async function getData() {
  const res = await fetch("https://snowtooth-api-rest.fly.dev");
  return res.json();
}

export default async function Page() {
  const data = await getData();
  return (
    <main>
      <h1>Lift status</h1>
      <table>
        <thead>
          <tr>
            <th>Lift name</th>
            <th>Current status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((lift: { name: string; status: string; id: number }) => (
            <tr key={lift.id}>
              <td>{lift.name}</td>
              <td>{lift.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
