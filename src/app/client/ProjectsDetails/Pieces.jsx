"use client";
import Image from "next/image";
import MainCard from "@/components/MainCard";
import { Typography } from "@/components/RemoteComponents";
import Bath from "@/assets/Bath.svg";
import Bed from "@/assets/Bed.svg";
import Couch1 from "@/assets/Couch1.svg";
import Kitchen from "@/assets/Kitchen.svg";
import { useFetchData } from "@/services/queries";
import Suite1 from "@/assets/Suite1.svg";
const Pieces = () => {

  const { data: announcements, isLoading } = useFetchData(
    "/archimatch_app/announcement/",
    );

    return (
      <div className="w-full min-w-72">
        <MainCard className="relative self-center px-6 py-5">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <>
              {announcements?.data?.map((announcement) => (
                <div key={announcement.id} className="flex flex-col gap-3">
                  {announcement.need_pieces && (
                    <div className="flex flex-col gap-3">
                      <Typography className="text-[14px] font-semibold text-architect-font_gris mb-1">
                        Les pièces à rénover
                      </Typography>
                      {Object.entries(announcement.need_pieces).map(([key, value]) => {
                        if (!["id", "created_at", "updated_at"].includes(key)) {
                          const needName = key.replace("nb_", "").replace("_", " ");
                          const needQuantity = parseFloat(value);
                          if (needQuantity > 0) {
                            return (
                              <div key={key} className="flex flex-row justify-between items-center">
                                <div className="flex flex-row justify-between gap-5">
                                  <Image
                                    alt=""
                                    src={getImageSrc(needName)}
                                    priority={true}
                                  />
                                  <Typography className="text-[13px]">{needName}</Typography>
                                </div>
                                <Typography className="text-[13px]">X {needQuantity}</Typography>
                              </div>
                            );
                          }
                        }
                        return null; // Ne pas afficher les clés "id", "created_at" et "updated_at"
                      })}
                    </div>
                  )}
                </div>
              ))}
            </>
          )}
        </MainCard>
      </div>
    );
  };
  
  const getImageSrc = (needName) => {
    switch (needName.toLowerCase()) {
      case "salle de bain":
        return Bath;
      case "salon":
        return Couch1;
      case "suite parental":
        return Suite1;
      case "chambre":
        return Bed;
      case "cuisine":
        return Kitchen;
        default:
          console.log("No matching case found for needName:", needName);
          return ""; // Insérez ici le chemin d'accès à une image par défaut
    }
  };
 

export default Pieces