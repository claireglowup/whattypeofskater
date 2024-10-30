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
    {
      id: 6,
      sourceImage:
        "https://i.pinimg.com/564x/ed/99/21/ed99210dfb55d65a6270d06f1bdcb52d.jpg",
      nameImage: "carhartt",
    },
    {
      id: 7,
      sourceImage:
        "https://i.pinimg.com/564x/b5/e4/77/b5e47744361907f4bd6aedf8511bf098.jpg",
      nameImage: "ratz ratz",
    },
    {
      id: 8,
      sourceImage:
        "https://polarskateco.com/cdn/shop/files/Polar-Skate-Co-SP24-Big-Boy-Jeans-Dark-Blue-5.png?v=1708348063&width=1800",
      nameImage: "polar",
    },
  ];
};

export default getInitialData;
