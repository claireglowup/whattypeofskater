interface ImageData {
  id: number;
  sourceImage: string;
  nameImage: string;
  description: string;
  linkYoutube: string;
}

const getInitialData = (): ImageData[] => {
  return [
    {
      id: 1,
      sourceImage:
        "https://i.pinimg.com/564x/98/8d/81/988d81a38a4d7fab5b7627629c13a3de.jpg",
      nameImage: "gx1000",
      description:
        "The San Francisco skate crew GX1000 is a loosely organized gang of misfit skateboarders who are bound together mostly by a shared appetite for positive vibes, high speeds, and copious amounts of Northern California’s famous high-potency marijuana. Some of the crew, whose online video releases have made them a sensation, are pro skaters. Others are amateurs. All of them are unflinchingly confident and freakishly physically gifted.",
      linkYoutube:
        "https://www.youtube.com/embed/f-ObO-tm7Uc?si=N_FrYT8y9uJmrv8N",
    },
    {
      id: 2,
      sourceImage:
        "https://i.pinimg.com/564x/87/8b/aa/878baabb2d6c073842469205dd65db46.jpg",
      nameImage: "huf",
      description: `
Addressing the brand as HUF Worldwide recognizes the international reach and far-flung travels of not only HUF and its founder Keith Hufnagel, but also skateboarding lifestyle in general. HUF looks to represent the international skate scene through a wide, but inclusive variety of cultures, ideas, designs, competitions and collaborations. Not only that, but with multiple stores on two continents, HUF is literally worldwide.`,
      linkYoutube:
        "https://www.youtube.com/embed/FJ1rCxxxS9Q?si=TmpTAlex_d1pXJM7",
    },
    {
      id: 3,
      sourceImage:
        "https://i.pinimg.com/564x/49/2a/27/492a27d4ca9caa65492543a12f1a8e18.jpg",
      nameImage: "supreme",
      description: `is an American clothing brand established in New York
        City in April 1994. The company focuses on streetwear, skateboarding,
        and hip hop fashion trends. Its main products include clothing,
        skateboards, and accessories.`,
      linkYoutube:
        "https://www.youtube.com/embed/oY0TQ8CcO9E?si=OS-Fqs5-mywr2J6b",
    },
    {
      id: 4,
      sourceImage:
        "https://i.pinimg.com/564x/d2/b0/67/d2b067e6f7793759bb616160b457ee8f.jpg",
      nameImage: "fuckingawesome",
      description:
        "Fucking Awesome is a skateboard brand that stands out with its provocative aesthetics, strong team of riders, and creative collaborations. They have challenged norms within the skateboarding world and have become an icon in both skateboard culture and the fashion world.",
      linkYoutube:
        "https://www.youtube.com/embed/ebX27CcHyVc?si=26WeXJFWH7wmsceN",
    },
    {
      id: 5,
      sourceImage:
        "https://i.pinimg.com/564x/ac/ea/93/acea9311800a9fbe96fc7fb122b4eb1e.jpg",
      nameImage: "baker",
      description:
        "is more than just a skateboard brand; it is a symbol of the core elements of skateboarding culture. Through its commitment to quality, innovation, and athlete support, Baker has cemented its position as one of the most influential and respected players in the skateboarding world.",
      linkYoutube:
        "https://www.youtube.com/embed/Jx2jKx1dkW0?si=orxtHCShVy0YQTB2",
    },
    {
      id: 6,
      sourceImage:
        "https://i.pinimg.com/564x/ed/99/21/ed99210dfb55d65a6270d06f1bdcb52d.jpg",
      nameImage: "carhartt",
      description:
        "The Carhartt WIP skateboard team has been around since 1997 and has always made an impression through innovative and original team riders. Living legends like Scott Bourne or Pontus Alv were for the brand already in the most remote corners of this world, this tradition continues the Carhartt WIP Skate Team",
      linkYoutube:
        "https://www.youtube.com/embed/Y-jq92H0Yy8?si=SnnZMDnJzM3ZcJ1O",
    },
    {
      id: 7,
      sourceImage:
        "https://i.pinimg.com/564x/b5/e4/77/b5e47744361907f4bd6aedf8511bf098.jpg",
      nameImage: "ratzratz",
      description: `Here’s one thing the Milan skate scene and my parents during their first trip to New York have in common. The Rat Ratz took them by surprise.

While the latter’s surprise was less than positive, I can confidently say the Ratz have brought joy across the Milan scene. Closing in on double digits of their video series with Quartersnacks, filmmaker Alessio Brienza, AKA Brisquit, has revealed some of our favorite young faces out of Italy.`,
      linkYoutube:
        "https://www.youtube.com/embed/XCcAFKGCCm4?si=klSSTFPaP081WQSr",
    },
    {
      id: 8,
      sourceImage:
        "https://polarskateco.com/cdn/shop/files/Polar-Skate-Co-SP24-Big-Boy-Jeans-Dark-Blue-5.png?v=1708348063&width=1800",
      nameImage: "polar",
      description:
        "Skate Co. rewrites the rules of skateboarding, blending clean Scandinavian lines with playful 90s graphics and a dash of unexpected color. Their boards and apparel are crafted with sustainable materials and ethical production. It's skateboarding redefined, with sustainability, ethics, and individuality at its core.",
      linkYoutube:
        "https://www.youtube.com/embed/XMZIEcu-oWw?si=1n7T0W38tI4TzaTF",
    },
  ];
};

export default getInitialData;
