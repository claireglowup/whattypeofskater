import getInitialData from "../utils/data";
import { CardItem } from "./CardItem";
import "../style/CardList.css";

export const CardList = () => {
  const initData = getInitialData();

  return (
    <div className="card-container">
      {initData.map((source) => (
        <CardItem {...source} key={source.id} />
      ))}
    </div>
  );
};
