interface ImageData {
  id: number;
  sourceImage: string;
  nameImage: string;
}

const getInitialData = (): ImageData[] => {
  return [
    {
      id: 1,
      sourceImage:
        "https://i.pinimg.com/564x/98/8d/81/988d81a38a4d7fab5b7627629c13a3de.jpg",
      nameImage: "gx1000",
    },
    {
      id: 2,
      sourceImage:
        "https://i.pinimg.com/564x/87/8b/aa/878baabb2d6c073842469205dd65db46.jpg",
      nameImage: "huf",
    },
    {
      id: 3,
      sourceImage:
        "https://i.pinimg.com/564x/49/2a/27/492a27d4ca9caa65492543a12f1a8e18.jpg",
      nameImage: "supreme",
    },
    {
      id: 4,
      sourceImage:
        "https://i.pinimg.com/564x/d2/b0/67/d2b067e6f7793759bb616160b457ee8f.jpg",
      nameImage: "fucking awesome",
    },
    {
      id: 5,
      sourceImage:
        "https://i.pinimg.com/564x/ac/ea/93/acea9311800a9fbe96fc7fb122b4eb1e.jpg",
      nameImage: "baker",
    },
  ];
};

export default getInitialData;
