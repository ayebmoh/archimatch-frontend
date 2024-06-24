"use client";

import FileDownload from "@/assets/FileDownload.svg";
import { Button, Progress, Typography } from "@/components/RemoteComponents";
import { cn } from "@/utils";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const SinglePdfUploader = (props) => {
  const { className, handleSubmit, changePdf } = props;
  const [images, setImages] = useState();
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef(null);

  const selectFiles = () => {
    fileInputRef.current.click();
  };

  const uploadFile = (file) => {
    const xhr = new XMLHttpRequest();

    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const percentCompleted = Math.round((event.loaded / event.total) * 100);
        setUploadProgress(percentCompleted);
      }
    };

    xhr.open("POST", "/your-upload-endpoint", true); // Update with your upload endpoint
    xhr.setRequestHeader("Content-Type", "application/pdf");

    xhr.onload = () => {
      if (xhr.status === 200) {
        console.log("File uploaded successfully");
      } else {
        console.error("File upload failed");
      }
    };

    xhr.onerror = () => {
      console.error("An error occurred during the file upload");
    };

    const formData = new FormData();
    formData.append("file", file);
    xhr.send(formData);
  };

  const onSelectFile = (event) => {
    const files = event.target.files;
    if (files.length === 0) return;

    const file = files[0];
    if (file.type !== "application/pdf") return;

    setImages({
      name: file.name,
      url: URL.createObjectURL(file),
    });

    handleSubmit({
      name: file.name,
      url: URL.createObjectURL(file),
    });
  };

  const deleteImage = () => {
    setImages(null);
    setUploadProgress(0);
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

    const file = files[0];
    if (file.type !== "application/pdf") return;

    setImages({
      name: file.name,
      url: URL.createObjectURL(file),
    });

    // Upload the file and show progress
    uploadFile(file);
  };

  useEffect(() => {
    console.log(images);
    // changePdf(images);
  }, [images]);

  return (
    <div
      className={cn("p-2 rounded-md overflow-hidden cursor-pointer", className)}
    >
      <div
        className="w-full rounded-md p-4 flex flex-col justify-center items-center"
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <Image src={FileDownload} className="mb-3" />
        {isDragging ? (
          <>
            <Typography
              variant="p"
              className="text-[14px] text-architect-primary"
            >
              Veuillez créer le devis pour le projet. Une fois créé, vous
              pourrez l'envoyer au client pour examen et approbation.
            </Typography>
            <Typography
              variant="p"
              className="text-[14px] text-architect-secondary_text_color"
            >
              Le fichier doit être au format PDF.
            </Typography>
          </>
        ) : (
          <>
            <Typography
              variant="p"
              className="text-[14px] text-architect-primary"
            >
              Veuillez créer le devis pour le projet. Une fois créé, vous
              pourrez l'envoyer au client pour examen et approbation.
            </Typography>
            <Typography
              variant="p"
              className="text-[14px] text-architect-secondary_text_color"
            >
              Le fichier doit être au format PDF.
            </Typography>
            <div className="flex flex-row gap-1 mt-7">
              <Button
                color="architect-primary"
                variant="outlined"
                className="flex items-center justify-center w-[200px]"
                type="button"
                size="md"
                onClick={selectFiles}
              >
                Charger un devis
              </Button>
            </div>
          </>
        )}

        <input
          type="file"
          name="file"
          className="hidden"
          id="file"
          ref={fileInputRef}
          onChange={onSelectFile}
        />
      </div>
      {/* {images && (
        <div className="w-full h-auto flex justify-start items-start flex-wrap max-h-[200px] overflow-y-auto mt-3">
          <div className="w-[125px] mr-1 h-[102px] relative mb-2">
            <span
              onClick={deleteImage}
              className="absolute top-1 right-1 text-lg cursor-pointer z-50 text-architect-font_gris"
            >
              &times;
            </span>
            <img
              src={images?.url}
              alt={images?.name}
              className="w-full h-full rounded-lg"
            />
          </div>
        </div>
      )} */}
      {uploadProgress > 0 && uploadProgress < 100 && (
        <Progress value={uploadProgress} max="100" className="mt-4" />
      )}
    </div>
  );
};

export default SinglePdfUploader;
