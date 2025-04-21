import cw from "../assets/projectSs/cw.webp";
import p from "../assets/projectSs/p.webp";
import bs from "../assets/projectSs/bs.webp";
import pf from "../assets/projectSs/pf.webp";

export type projectDataType = {
  id: number;
  name: string;
  para: string;
  gitLink: string;
  liveLink: string;
  techStack: string[];
  img: string;
};

export const projectsData: projectDataType[] = [
  {
    id: 1,
    name: "PetFlex",
    para: "PetFlex is a fullstack social media app for pet sharing. It allowes users to post their pets and interact with others.",
    gitLink: "https://github.com/ShimShon1/petflex",
    liveLink: "https://petflex.vercel.app/",
    techStack: ["Express", "MongoDB", "React", "TypeScript"],
    img: pf,
  },
  {
    id: 2,
    name: "CryptoWatch",
    para: "CryptoWatch allows you to view data about Crypto Coins and exchanges, using the coingecko api to receive the data.",
    gitLink: "https://github.com/ShimShon1/CryptoWatch",
    liveLink: "https://crypto-watch-eight.vercel.app/",
    techStack: ["React", "Tailwindcss", "TypeScript"],
    img: cw,
  },
  {
    id: 3,
    name: "Peeper",
    para: "Peeper is a social media app that allows the user to post and interact with the posts of others.",
    gitLink: "https://github.com/ShimShon1/peeper",
    liveLink: "https://peeper.vercel.app/",
    techStack: ["Firebase", "React", "Tailwindcss"],
    img: p,
  },

  {
    id: 4,
    name: "BattleShip",
    para: "A game of battleship written in Vanilla Javascript.",
    gitLink: "https://github.com/ShimShon1/BattleShip",
    liveLink: "https://shimshon1.github.io/BattleShip/",
    techStack: ["Vanilla Javascript", "Tailwindcss"],
    img: bs,
  },
];
