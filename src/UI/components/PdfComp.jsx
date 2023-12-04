import { useState } from "react";
import { Document, Page } from "react-pdf";

export const PdfComp = ({ url }) => {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <div className="relative left-1/2 -translate-x-1/2 mt-5 border border-primary ">
      <Document file={url} onLoadSuccess={onDocumentLoadSuccess}>
        <Page
          pageNumber={pageNumber}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
      </Document>
      <p className="text-center">
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
};
