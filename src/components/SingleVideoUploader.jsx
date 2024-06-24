"use client";

import VideoUploader from "@/assets/VideoUploader.svg";
import { Button, Progress, Typography } from "@/components/RemoteComponents";
import { cn } from "@/utils";
import { useEffect, useRef, useState } from "react";

const SingleVideoUploader = (props) => {
  const { className, initialData, uploadData, id } = props;
  const [video, setVideo] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef(null);

  const selectVideo = () => {
    fileInputRef.current.click();
  };

  // useEffect(() => {
  //   if (initialData) {
  //     setVideo(initialData);
  //   }
  // }, [initialData]);
  const onSelectFile = (event) => {
    const files = event.target.files;
    if (files.length === 0) return;

    if (files[0].type.split("/")[0] !== "video") return;

    setVideo({
      name: files[0].name,
      url: URL.createObjectURL(files[0]),
    });

    uploadFile(files[0]);
  };

  const deleteVideo = () => {
    setVideo(null);
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

    if (files[0].type.split("/")[0] !== "video") return;

    setVideo({
      name: files[0].name,
      url: URL.createObjectURL(files[0]),
    });

    uploadFile(files[0]);
  };

  const uploadFile = (file) => {
    const formData = new FormData();
    formData.append("video", file);

    const xhr = new XMLHttpRequest();

    xhr.upload.onprogress = (event) => {
      const percentCompleted = Math.round((event.loaded / event.total) * 100);
      setUploadProgress(percentCompleted);
    };

    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        // Handle upload completion
      }
    };

    // Replace 'upload-url' with your actual upload endpoint
    xhr.open("POST", "upload-url", true);
    xhr.send(formData);
    formData.append("id", id);
    uploadData(formData);
  };

  useEffect(() => {
    console.log(video);
  }, [video]);

  return (
    <>
      {!video && (
        <div
          className={cn(
            "p-2 rounded-md overflow-hidden cursor-pointer",
            className,
          )}
        >
          <div
            className="w-full rounded-md border-2 p-4 flex flex-col justify-center items-center"
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
            onClick={selectVideo}
          >
            <img src={VideoUploader.src} className="mb-3" />

            <>
              <Typography
                variant="paragraph"
                className="text-[14px] text-architect-secondary_text_color text-center"
              >
                Afin de mieux vous présenter à notre communauté, nous vous
                invitons à ajouter une vidéo de présentation. Cela permettra aux
                utilisateurs de mieux comprendre votre parcours, vos compétences
                et votre style architectural.
              </Typography>
              <Button
                size="sm"
                className="mt-4 architect-font_gris"
                disabled={isDragging}
              >
                Importer une vidéo
              </Button>
            </>

            <input
              type="file"
              name="file"
              className="hidden"
              id="file"
              accept="video/mp4, video/quicktime, video/x-msvideo"
              ref={fileInputRef}
              onChange={onSelectFile}
            />
          </div>
          {uploadProgress > 0 && (
            <Progress value={uploadProgress} max="100"></Progress>
          )}

          {video && uploadProgress === 100 && (
            <video className="h-full w-full rounded-lg" controls>
              <source src={video.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      )}

      {uploadProgress > 0 && uploadProgress < 100 && (
        <Progress value={uploadProgress} max="100" color="red"></Progress>
      )}

      {video && uploadProgress === 100 && (
        <video className="h-full w-full rounded-lg" controls>
          <source src={video.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </>
  );
};

export default SingleVideoUploader;
