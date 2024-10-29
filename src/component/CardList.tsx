import getInitialData from "../utils/data";
import { CardItem } from "./CardItem";

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
