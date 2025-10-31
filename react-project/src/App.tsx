import { useEffect, useReducer } from "react";
import "./App.css";
import testImg from "./images/image.png";

function Header({ name, year }: { name: string; year: number }) {
  return (
    <header>
      <h1>Hi {name}</h1>
      <p>Copy {year}</p>
    </header>
  );
}

const items = ["Mac", "Potatoes", "Veg"];

const dishObj = items.map((it, i) => ({
  id: i,
  title: it,
}));

function Main({
  dishes,
  openStat,
  onStatus,
}: {
  dishes: { id: number; title: string }[];
  openStat: boolean;
  onStatus: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <>
      <div>
        <button onClick={() => onStatus(true)}> heheh</button>
        <h2>Welcome to this beautiful {openStat ? "Open" : "Close"}</h2>
      </div>
      <main>
        <img src={testImg} height={200} alt="A test photo" />
        <ul>
          {dishes.map((it) => (
            <li style={{ listStyleType: "none" }} key={it.id}>
              {it.title}
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

function App() {
  const [status, toggle] = useReducer((status) => !status, true);

  useEffect(() => {
    console.log(`The ${status ? "open" : "close"}`);
  }, [status]);

  return (
    <div>
      <h1>The restaurant is currently {status ? "open" : "close"}</h1>
      <button onClick={toggle}>{status ? "Close" : "Open"} rest</button>

      <Header name="Alex" year={new Date().getFullYear()} />
      <Main dishes={dishObj} openStat={status} onStatus={toggle} />
    </div>
  );
}

export default App;
