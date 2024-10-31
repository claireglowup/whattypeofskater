import "../style/App.css";
import { CardList } from "./CardList";

function App() {
  return (
    <>
      <div className="container-header">
        <h1 className="header-title">
          what type of skater do you want to be ?
        </h1>
      </div>
      <div className="content">
        <p>
          Since there’s a variety of skater styles, I choose to focus on the
          ones I prefer.
        </p>
        <h2>team of</h2>
        <CardList />
      </div>
    </>
  );
}

export default App;
