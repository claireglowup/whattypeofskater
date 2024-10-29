type CardItemProps = {
  sourceImage: string;
  nameImage: string;
};

export const CardItem = (props: CardItemProps) => {
  return (
    <div className="card">
      <img
        src={props.sourceImage}
        alt={props.nameImage}
        width={200}
        height={250}
      />
      <p>{props.nameImage}</p>
    </div>
  );
};
