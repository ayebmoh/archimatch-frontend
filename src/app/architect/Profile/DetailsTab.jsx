import { SingleVideoUploader } from "@/components";
import { useFetchData, useUpdateVideo } from "@/services/queries";
import { Typography } from "@material-tailwind/react";
import Cookies from "js-cookie";

function DetailsTab() {
  const cookiesdata = Cookies.get("id");
  const { data: architect, isLoading } = useFetchData(
    `/archimatch_app/architect/find_architect_by_user/${cookiesdata}/`,
    "architect",
  );
  const UpdateVideoMutation = useUpdateVideo("architect");
  const backend = "http://localhost:8000";

  const uploadData = (data) => {
    UpdateVideoMutation.mutate(data);
  };

  return (
    <div className="">
      <div className="flex flex-col  ">
        <Typography className="font-semibold text-[19px]">Bio</Typography>
        {/* <Typography className="text-architect-secondary_text_color text-[16px]">
          Write a short introduction.
        </Typography> */}
        {/* <textarea
          className=" w-full lg:w-full border-2 border-gray-400 resize-none  rounded-md focus:border-architect-primary outline-none focus:outline-none p-2"
          placeholder="Write something awesome..."
          rows="5"
          value={architect?.data.architect.bio}
        ></textarea> */}
        <Typography className="text-architect-font_gris text-justify text-[16px] ">
          {architect?.data.architect.bio}
        </Typography>

        <Typography className="font-semibold text-[19px] mt-5">
          Présentation vidéo
        </Typography>
        <Typography className="text-architect-secondary_text_color text-[16px]">
          Upload a short introduction video.
        </Typography>

        {architect?.data.architect.video_presentation ? (
          <video className="h-full w-full rounded-lg" controls>
            <source
              src={`${backend}${architect?.data.architect.video_presentation}`}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        ) : (
          <SingleVideoUploader
            initialData={`${backend}${architect?.data.architect.video_presentation}`}
            id={cookiesdata}
            uploadData={uploadData}
          />
        )}
      </div>
    </div>
  );
}

export default DetailsTab;
