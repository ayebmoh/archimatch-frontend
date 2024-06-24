import PopupClientOne from "@/assets/PopupClientOne.svg";
import { Button, Typography } from "@/components/RemoteComponents";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";
import { Popup } from "..";

const PhoneVerificationPopup = ({
  open,
  setOpen,
  handleClick,
  data,
  mutation,
}) => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);
  const handleChange = (e, index) => {
    const { value } = e.target;
    if (value.length <= 1 && !isNaN(value)) {
      const newOTP = [...otp];
      newOTP[index] = value;
      setOtp(newOTP);

      if (value !== "") {
        const nextSibling = e.target.nextElementSibling;
        if (nextSibling !== null) {
          nextSibling.focus();
        }
      } else if (value === "" && index > 0) {
        const prevSibling = inputRefs.current[index - 1];

        if (prevSibling !== null) {
          prevSibling.focus();
          prevSibling.setSelectionRange(
            prevSibling.value.length,
            prevSibling.value.length,
          );
        }
      }
    } else if (value === "" && index === 0) {
      // If the value is empty and it's the first input, just keep focus on the current input
      e.target.focus();
    }
  };

  useEffect(() => {
    console.log(otp);
  }, [otp]);
  return (
    <Popup
      headerClassName="text-center self-center lg:w-[55%] md:w-[60%] text-center"
      open={open}
      handleOpen={() => setOpen(!open)}
      size="sm"
      bodyClassName="flex flex-col items-center"
    >
      <img className=" w-[30%]  cursor-pointer  " src={PopupClientOne.src} />
      <Typography
        variant="paragraph"
        className="text-architect-font_gris text-center self-center lg:w-[55%] md:w-[60%] text-[30px] font-bold mt-5"
      >
        Code de vérification
      </Typography>
      <Typography
        variant="paragraph"
        className="text-architect-secondary_text_color text-center self-center lg:w-[55%] md:w-[60%] text-[14px] "
      >
        Entrez le code envoyé à votre numéro de téléphone *******253
      </Typography>

      <div className="flex justify-center space-x-2 mt-4">
        {otp.map((data, index) => (
          <input
            ref={(el) => (inputRefs.current[index] = el)}
            key={index}
            type="text"
            maxLength="1"
            className="w-12 h-12 text-4xl border rounded-lg text-center"
            value={data}
            onChange={(e) => handleChange(e, index)}
          />
        ))}
      </div>
      <Button
        type="submit"
        size="md"
        className="w-[55%] mt-4 flex flex-row justify-center items-center"
        onClick={() => {
          if (
            otp.every(
              (element, index) =>
                element === ["1", "1", "1", "1", "1", "1"][index],
            )
          ) {
            handleClick(data);
            setOpen(false);
          }
        }}
        loading={mutation.isPending}
        //disabled={isLoading}
      >
        {" "}
        Vérifier{" "}
      </Button>
      <div className="flex flex-row justify-center w-full gap-1">
        <Typography
          variant="paragraph"
          className="text-architect-font_gris text-[11px] mt-3"
        >
          Vous n'avez pas de code ?
        </Typography>
        <Typography
          variant="paragraph"
          className="text-client-primary text-[11px] self-end mt-3 underline cursor-pointer font-bold"
        >
          Renvoyer le code
        </Typography>
      </div>
      <div className="flex flex-row ">
        <Typography
          variant="paragraph"
          className="text-architect-font_gris flex flex-row text-[11px] self-center mt-3 items-center  cursor-pointer gap-1 "
          onClick={() => router.push("/clientVisitor/loginClient")}
        >
          <ChevronLeftIcon className="h-3 w-3" />
          Revenir pour vous connecter
        </Typography>
      </div>
    </Popup>
  );
};

export default PhoneVerificationPopup;
