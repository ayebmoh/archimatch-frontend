import Empty from "@/assets/EmptyProjects.svg";
import { Typography } from "@material-tailwind/react";
const SuggestionProjects = () => {
  return (
    <div className="flex flex-col gap-1 items-center justify-center">
      <img src={Empty.src} alt="Empty"></img>
      <Typography variant="h5" className="text-black">
        Pas de Projets Disponibles pour l'instant
      </Typography>
      <Typography variant="h6">
        Plus votre portfolio est complet, plus vous attirerez des projets
        stimulants{" "}
      </Typography>
      <Typography variant="h6">
        et des opportunités professionnelles passionnantes.{" "}
      </Typography>
    </div>
  );
};

export default SuggestionProjects;
