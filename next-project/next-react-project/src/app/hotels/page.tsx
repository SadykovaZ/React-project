import HotelBlock from "./HotelBlock";

async function getData() {
  const res = await fetch("https://snowtooth-hotel-api.fly.dev");
  return res.json();
}

export default async function Page() {
  const data = await getData();
  return (
    <main>
      <h1>Hotels Details</h1>
      <div>
        {data.map((hotel: { id: string; name: string; capacity: number }) => (
          <HotelBlock
            key={hotel.id}
            name={hotel.name}
            capacity={hotel.capacity}
            id={hotel.id}
          />
        ))}
      </div>
    </main>
  );
}
