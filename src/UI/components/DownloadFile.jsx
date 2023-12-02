import React from "react";

export const DownloadFile = (file) => {
  const fileUrl = file.url;
  console.log(fileUrl);

  const handleDownload = () => {
    console.log("Download button clicked");
    // Create a link element
    const downloadLink = document.createElement("a");

    downloadLink.target = "_blank";
    // Set the download attribute and href
    downloadLink.href = fileUrl;
    downloadLink.download = "downloaded.pdf";

    // // Append the link to the document body
    // document.body.appendChild(downloadLink);

    // Trigger the click event to start the download
    downloadLink.click();

    // // Remove the link from the document
    // document.body.removeChild(downloadLink);
  };

  return (
    <div>
      <button
        className="mx-4 text-primary text-xl py-1 px-3 shadow-xl rounded-full border "
        onClick={handleDownload}
      >
        Download PDF
      </button>
    </div>
  );
};
