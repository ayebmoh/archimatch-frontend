"use client";

import UploadImage from "@/assets/UploadImage.svg";
import { Button, Typography } from "@/components/RemoteComponents";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/utils";
import { XCircleIcon } from "@heroicons/react/24/solid";
const FileUploader = (props) => {
  const backend = "http://localhost:8000";
  const { client, formik, formikValue } = props;
  const [update, setUpdate] = useState(true);
  const [images, setImages] = useState(
    formik?.values.images ? formik.values.images : [],
  );
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const selectFiles = () => {
    fileInputRef.current.click();
  };

  useEffect(() => {
    if (formik?.values.images?.length > 0 && update) {
      setImages(formik.values.images);
      setUpdate(false);
    }
  }, [formik]);

  useEffect(() => {
    console.log(images[images.length - 1]);
  }, [images]);

  const onSelectFile = (event) => {
    const files = event.target.files;
    if (files.length === 0) return;
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] !== "image") continue;
      if (!images.some((e) => e.name == files[i].name)) {
        setImages((prevImages) => [
          ...prevImages,
          {
            name: files[i].name,
            url: URL.createObjectURL(files[i]),
          },
        ]);
      }
    }
  };

  const deleteImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
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
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] !== "image") continue;
      if (!images.some((e) => e.name == files[i].name)) {
        setImages((prevImages) => [
          ...prevImages,
          {
            name: files[i].name,
            url: URL.createObjectURL(files[i]),
          },
        ]);
      }
    }
  };

  useEffect(() => {
    if (formik) {
      formik.setFieldValue([formikValue], images);
    }
  }, [images]);

  return (
    <div className="p-2 rounded-md overflow-hidden">
      <div
        className={cn(
          " w-full rounded-md border-2 p-4 border-dashed flex flex-col justify-center items-center",
          client && "border-client-primary",
        )}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <Image alt="" src={UploadImage} className="mb-4" />
        {isDragging ? (
          <>
            <Typography
              variant="paragraph"
              className="text-lg text-architect-font_gris"
            >
              Drop your images here
            </Typography>
            <Typography
              variant="paragraph"
              className="text-[14px] text-architect-secondary_text_color "
            >
              Upload a minimum of 5 images at once
            </Typography>
            <Button className="mt-3" onClick={selectFiles} disabled>
              Browse
            </Button>
          </>
        ) : (
          <>
            <Typography
              variant="paragraph"
              className="text-lg text-architect-font_gris"
            >
              Drag & Drop, Upload or Paste image
            </Typography>
            <Typography
              variant="paragraph"
              className="text-[14px] text-architect-secondary_text_color "
            >
              Upload a minimum of 5 images at once
            </Typography>

            <Button className="mt-3" onClick={selectFiles}>
              Browse
            </Button>
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
      <div className="w-full h-auto flex justify-start items-start flex-wrap max-h-[200px] overflow-y-auto mt-3">
        {images?.map((image, index) => (
          <div key={index} className="w-[125px] mr-1 h-[102px] relative mb-2">
            <XCircleIcon
              onClick={() => deleteImage(index)}
              className={cn(
                "absolute h-6 w-6 top-1 right-1 text-lg cursor-pointer z-50 text-architect-font_gris",
                client && "text-client-primary",
              )}
            >
              &times;
            </XCircleIcon>

            <img
              src={typeof image === "string" ? `${backend}${image}` : image.url}
              alt={image.name}
              className="w-full h-full rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileUploader;
