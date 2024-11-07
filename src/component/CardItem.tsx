import { Link } from "react-router-dom";

type CardItemProps = {
  sourceImage: string;
  nameImage: string;
};

export const CardItem = (props: CardItemProps) => {
  return (
    <div className="card">
      <Link to={`team/${props.nameImage}`}>
        <img
          src={props.sourceImage}
          alt={props.nameImage}
          width={200}
          height={250}
        />
      </Link>
      <p>{props.nameImage}</p>
    </div>
  );
};
