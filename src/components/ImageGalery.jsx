import Image from "next/image"; // or your preferred Image component
import { useState } from "react";

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const imageClass = (image) =>
    `cursor-pointer w-full md:w-full lg:w-full h-64 rounded-lg transition duration-300 ease-in-out hover:scale-110 ${
      selectedImage === image ? "border-4 border-blue-500" : ""
    }`;

  return (
    <div className="h-auto grid grid-cols-3 items-center md:flex flex-row gap-1">
      <div
        className={imageClass(images[0])}
        onClick={() => handleImageClick(images[0])}
      >
        <Image src={images[0]} alt="" priority={true} />
      </div>
      <div className="flex flex-row gap-1">
        {images.slice(1).map((image, index) => (
          <div
            key={index}
            className={`w-44 h-64 ${
              selectedImage === image ? "border-4 border-blue-500" : ""
            }`}
            onClick={() => handleImageClick(image)}
          >
            <Image
              src={image}
              alt=""
              className="cursor-pointer w-44 md:w-44 lg:w-80 h-64 rounded-lg transition duration-300 ease-in-out hover:scale-110"
              priority={true}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
