/** @format */

import { Link, useParams } from "react-router-dom";
import "../style/TeamPage.css";
import getInitialData from "../utils/data";
import { Footer } from "./Footer";

export const TeamPage = () => {
  const initData = getInitialData();
  const { teamName } = useParams();
  const team = initData.find((team) => team.nameImage === teamName);

  return (
    <div className="container-team">
      <Link to={"/"} className="go-home">
        Home
      </Link>
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
      <h2 className="people-team">People</h2>
      {/* there will be some photos of the team */}
      <p>people of the team will be here...</p>
      <Footer />
    </div>
  );
};

const capitalizeWords = (str: string | undefined): string => {
  if (!str) return "";

  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};
