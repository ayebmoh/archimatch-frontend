"use client";

import UploadImage from "@/assets/SingleUploadImage.svg";
import { Typography } from "@/components/RemoteComponents";
import { cn } from "@/utils";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const SingleFileUploader = (props) => {
  const { className, imageData, setImageData } = props;
  const [images, setImages] = useState();
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const selectFiles = () => {
    fileInputRef.current.click();
  };

  const onSelectFile = (event) => {
    const files = event.target.files;
    console.log(files[0].name);
    if (files.length === 0) return;

    if (files[0].type.split("/")[0] !== "image") return;

    setImages({
      name: files[0].name,
      url: URL.createObjectURL(files[0]),
    });
  };

  const deleteImage = () => {
    setImages();
  };
  const onDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
    event.dataTransfer.dropEffect = "copy";
  };
  const onDragLeave = (event) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const onDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);
    const files = event.dataTransfer.files;
    if (files.length === 0) return;

    if (files[0].type.split("/")[0] !== "image") return;

    setImages({
      name: files[0].name,
      url: URL.createObjectURL(files[0]),
    });
  };

  useEffect(() => {
    setImageData(images);
  }, [images]);
  return (
    <div
      className={cn("p-2 rounded-md overflow-hidden cursor-pointer", className)}
    >
      <div
        className=" w-full rounded-md border-2 p-4  flex flex-col justify-center items-center"
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        onClick={selectFiles}
      >
        <Image src={UploadImage} className="mb-3" />
        {isDragging ? (
          <>
            <Typography
              variant="p"
              className="text-[14px] text-architect-primary"
            >
              Drop your images here
            </Typography>
            <Typography
              variant="p"
              className="text-[14px] text-architect-secondary_text_color "
            >
              SVG, PNG, JPG or GIF (max. 800x400px)
            </Typography>
          </>
        ) : (
          <>
            <Typography
              variant="p"
              className="text-[14px] text-architect-secondary_text_color"
            >
              <span className="font-semibold text-architect-primary">
                Click to upload
              </span>{" "}
              or drag and drop
            </Typography>
            <Typography
              variant="p"
              className="text-[14px] text-architect-secondary_text_color "
            >
              SVG, PNG, JPG or GIF (max. 800x400px)
            </Typography>
          </>
        )}

        <input
          type="file"
          name="file"
          className="hidden"
          id="file"
          multiple
          ref={fileInputRef}
          onChange={onSelectFile}
        />
      </div>
      {/* {images && (
        <div className="w-full h-auto flex justify-start items-start flex-wrap max-h-[200px] overflow-y-auto mt-3">
          <div className="w-[125px] mr-1 h-[102px] relative mb-2">
            <XCircleIcon
              onClick={() => deleteImage()}
              className="absolute h-6 w-6 top-1 right-1 text-lg cursor-pointer z-50 text-architect-font_gris"
            >
              &times;
            </XCircleIcon>
            <img
              src={images?.url}
              alt={images?.name}
              className="w-full h-full rounded-lg"
            />
          </div>
        </div>
      )} */}
    </div>
  );
};

export default SingleFileUploader;
