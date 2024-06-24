import PopupArchitectOne from "@/assets/PopupArchitectOne.svg";
import { Popup } from "@/components";
import { Button, Typography } from "@/components/RemoteComponents";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

const Otpcode = ({ data, onVerify }) => {
  const [open, setOpen] = useState(true); // Add open state
  const router = useRouter();

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
      e.target.focus();
    }
  };
  const handleSubmit = () => {
    const otpCode = otp.join("");
    const allValues = { ...data, otp_code: otpCode };
    // console.log("All values:", allValues);
    // Now you can consume `allValues` as needed
    onVerify(allValues);
    router.push("/architect/Parametre");
    window.location.reload();
  };
  return (
    <Popup
      headerClassName="text-center self-center lg:w-[55%] md:w-[60%] text-center"
      open={open}
      handleOpen={() => setOpen(!open)}
      size="sm"
      bodyClassName="flex flex-col items-center"
    >
      <img className=" w-[30%]  cursor-pointer  " src={PopupArchitectOne.src} />
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
        Entrez le code envoyé à votre email
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
        className="w-[55%] mt-4"
        onClick={handleSubmit}
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
          className="text-architect-primary text-[11px] self-end mt-3 underline cursor-pointer font-bold"
        >
          Renvoyer le code
        </Typography>
      </div>
      <div className="flex flex-row ">
        <Button
          size="sm"
          className="py-2 px-3 mt-2"
          onClick={() => setOpen(false)}
        >
          Revenir?
        </Button>
      </div>
    </Popup>
  );
};

export default Otpcode;
