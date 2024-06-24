import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { Button } from "@material-tailwind/react";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const MyPdfViewerComponent = ({ pdfurl }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToPreviousPage = () => {
    setPageNumber((prevPageNumber) => Math.max(prevPageNumber - 1, 1));
  };

  const goToNextPage = () => {
    setPageNumber((prevPageNumber) => Math.min(prevPageNumber + 1, numPages));
  };

  return (
    <div>
      <div className="flex flex-row  gap-4 items-center mb-4">
        <div>
          <Button
            size="sm"
            onClick={goToPreviousPage}
            disabled={pageNumber <= 1}
            className="px-2 py-2 rounded-full"
          >
            <ChevronLeftIcon className="text-white h-6 w-6" />
          </Button>
        </div>
        <div className="overflow-y-auto h-[820px]">
          <Document file={pdfurl} onLoadSuccess={onDocumentLoadSuccess}>
            <Page
              renderTextLayer={false}
              renderAnnotationLayer={false}
              customTextRenderer={false}
              pageNumber={pageNumber}
            />
          </Document>
        </div>
        <div>
          <Button
            size="sm"
            onClick={goToNextPage}
            disabled={pageNumber >= numPages}
            className="px-2 py-2 rounded-full"
          >
            <ChevronRightIcon className="text-white h-6 w-6" />
          </Button>
        </div>
      </div>
      <p className="justify-center text-center mt-4">
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
};

export default MyPdfViewerComponent;
