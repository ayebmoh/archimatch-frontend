"use client";
import { MainCard } from "@/components";
import { useFindReceipt } from "@/services/queries";
import { Button, Spinner, Typography } from "@material-tailwind/react";
import Cookies from "js-cookie";
import { IoMdDownload } from "react-icons/io";
const architectFacturationPage = (props) => {
  const cookiesdata = Cookies.get("id");

  const handleDownloadPdf = async (receiptId) => {
    try {
      const response = await fetch(
        "http://localhost:8000/archimatch_app/architect/download_receipt_pdf/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: receiptId }),
        },
      );
      const blob = await response.blob();

      // Create a temporary URL for the blob
      const url = window.URL.createObjectURL(blob);

      // Create a temporary anchor element to trigger the download
      const a = document.createElement("a");
      a.href = url;
      a.download = `receipt${receiptId}.pdf`;

      // Append the anchor element to the body
      document.body.appendChild(a);

      // Trigger the download
      a.click();

      // Clean up
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading PDF:", error);
    }
  };

  const { data: receipts, isLoading } = useFindReceipt(cookiesdata);
  if (isLoading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  } else {
    return (
      <div className="">
        <Typography className="self-start text-semibold text-[20px] text-architect-text_hover ">
          Facturation
        </Typography>
        <div className="flex flex-col space-y-4 mt-9  ">
          {receipts.data &&
            receipts.data.map((receipt, index) => (
              <MainCard
                key={index}
                className="flex md:flex-row flex-col gap-2 justify-between shadow-md border  border-gray-300 p-[27px] "
              >
                <Typography className="md:self-start text-extrabold text-[19px] self-center text-[#1B2534] md:w-[170px] ">
                  {receipt.date_of_transaction}{" "}
                </Typography>
                <Typography className="md:self-start text-extrabold text-[19px] md:w-[210px] self-center text-[#344054] ">
                  {receipt.sub_purchased}
                </Typography>
                <Typography className="md:self-start text-extrabold text-[19px] self-center text-architect-font_gris ">
                  {receipt.amount_paid} DT
                </Typography>
                <Button
                  onClick={() => handleDownloadPdf(receipt.id)}
                  size="sm"
                  className="self-center text-blue-gray-50 font-extrabold   bg-[#08d3bb] border-0"
                >
                  Facture
                </Button>
                <div className="flex flex-row justify-center items-center gap-2 ">
                  <IoMdDownload className="h-6 w-6 self-center" />{" "}
                  <Typography className="text-[15px] font-semibold self-center ">
                    PDF
                  </Typography>
                </div>
              </MainCard>
            ))}

          {/* <MainCard className="flex md:flex-row flex-col gap-2 justify-between shadow-md border  border-gray-300 p-[27px] ">
          <Typography className="md:self-start text-extrabold text-[19px] self-center text-[#1B2534] md:w-[170px] ">
            7 Avril 2024
          </Typography>
          <Typography className="md:self-start text-extrabold text-[19px] md:w-[210px] self-center text-[#344054] ">
            Premium
          </Typography>
          <Typography className="md:self-start text-extrabold text-[19px] self-center text-architect-font_gris ">
            29.99 DT
          </Typography>
          <Button
            size="sm"
            className="self-center text-blue-gray-50 font-extrabold   bg-[#08d3bb] border-0"
          >
            Facture
          </Button>
          <div className="flex flex-row justify-center items-center gap-2 ">
            <ArrowDownTrayIcon className="h-6 w-6 self-center" />
            <Typography className="text-[15px] font-semibold self-center ">
              PDF
            </Typography>
          </div>
        </MainCard> */}
        </div>
      </div>
    );
  }
};

export default architectFacturationPage;
