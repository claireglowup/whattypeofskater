/** @format */

import { useParams } from "react-router-dom";
import "../style/TeamPage.css";
import getInitialData from "../utils/data";

export const TeamPage = () => {
  const initData = getInitialData();
  const { teamName } = useParams();
  const team = initData.find((team) => team.nameImage === teamName);

  return (
    <div className="container-team">
      <h1>{capitalizeWords(team?.nameImage)}</h1>
      <p>
        <i>{capitalizeWords(team?.nameImage)}</i> {team?.description}
      </p>
      <iframe
        src={team?.linkYoutube}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

const capitalizeWords = (str: string | undefined): string => {
  if (!str) return ""; // Jika string kosong, kembalikan string itu sendiri

  // Mengubah huruf pertama menjadi kapital dan sisanya menjadi kecil
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};
