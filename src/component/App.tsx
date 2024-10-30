/** @format */

import "../style/App.css";
import { CardList } from "./CardList";

function App() {
  return (
    <>
      <div className="container-header">
        <h1 className="header-title">what type of skater do you want to be ?</h1>
      </div>
      <div className="content">
        <p>So many styles in the skate world, but here’s a collection of the skate styles I vibe with. Let me show you what skate culture means to me</p>
        <h2>team of</h2>
        <CardList />
      </div>
    </>
  );
}

export default App;
