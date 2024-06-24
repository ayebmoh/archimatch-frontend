import AgenceBureau from "@/assets/AgenceBureau.svg";
import Coiffure from "@/assets/Coiffure.svg";
import Magasin from "@/assets/Magasin.svg";
import PointvCosmétc from "@/assets/PointvCosmétc.svg";
import Resto from "@/assets/Resto.svg";
import Spa from "@/assets/Spa.svg";
import { useViewSubCategories } from "@/services/queries";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image"; // or your preferred Image component
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const CustomCarousel = ({ content }) => {
  const { data: Sub_Categories, isLoading } = useViewSubCategories(content);
  console.log("aaaaaaaaaaaaaaaa", Sub_Categories);
  const [activeIndex, setActiveIndex] = useState(0);
  const [translateValue, setTranslateValue] = useState(0);
  const [images, setSubCategoryImages] = useState([]);

  const control = [
    { id: 1, name: "Restaurant et salon de thé", image: Resto },
    { id: 2, name: "Magasin", image: Magasin },
    { id: 3, name: "Agence et Bureau", image: AgenceBureau },
    { id: 4, name: "Spa", image: Spa },
    { id: 5, name: "Salon de coiffure", image: Coiffure },
    { id: 6, name: "Point de vente cosmetique", image: PointvCosmétc },
  ];

  useEffect(() => {
    if (!isLoading && Sub_Categories) {
      const subCategoryNames = Sub_Categories?.data?.Sub_categories?.map(
        (subcat) => subcat.display,
      );
      console.log("subcatnames:", subCategoryNames);
      const matchedImages = control.filter((category) =>
        subCategoryNames.includes(category.name),
      );
      setSubCategoryImages(matchedImages.map((category) => category.image));
    }
  }, [Sub_Categories]);

  useEffect(() => {
    const calculateTranslateValue = () => {
      const imageWidthPercentage = 100 / Math.max(images.length, 1);
      const offset = (100 - imageWidthPercentage) / 2;
      setTranslateValue(
        images.length > 1 ? activeIndex * -imageWidthPercentage + offset : 0,
      );
    };
    calculateTranslateValue();
  }, [activeIndex, images]);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(${translateValue}%)` }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className={`flex-shrink-0 ${
              images.length === 1 ? "w-full" : `w-1/${images.length}`
            } p-2 flex justify-center`}
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              className="cursor-pointer transition duration-300 ease-in-out hover:scale-105 rounded-xl"
              priority={true}
            />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            className="absolute top-1/2 left-2 transform -translate-y-1/2 hover:bg-gray-400 hover:opacity-30 bg-white bg-opacity-50 p-2 rounded-full shadow-lg border-1"
            onClick={prevSlide}
          >
            <ChevronLeftIcon className="text-client-primary h-6 w-6" />
          </button>
          <button
            className="absolute top-1/2 right-2 transform -translate-y-1/2  p-2 rounded-full bg-white bg-opacity-50 hover:bg-gray-400 hover:opacity-30 hover:text-white  shadow-lg border-1"
            onClick={nextSlide}
          >
            <ChevronRightIcon className="text-client-primary h-6 w-6" />
          </button>

          <div className="absolute bottom-4 left-2/4 transform -translate-x-2/4 z-50 flex gap-2">
            {images.map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CustomCarousel;
