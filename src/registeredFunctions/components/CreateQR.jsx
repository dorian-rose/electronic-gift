import QRCode from "react-qr-code";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { Link } from "react-router-dom";
import { useState } from "react";

export const CreateQR = ({ id, setID, msg }) => {
  const [loading, setLoading] = useState(false);

  const downloadQr = () => {
    setLoading(true);
    const qrCodeElement = document.getElementById("qr-code");
    html2canvas(qrCodeElement).then((canvas) => {
      // Convert the canvas to data URL
      const imageData = canvas.toDataURL("image/png");
      // Calculate aspect ratio of the QR code
      const aspectRatio = canvas.width / canvas.height;
      // Create a new jsPDF instance
      const pdf = new jsPDF();
      // Calculate the dimensions for the image in the PDF
      const pdfWidth = 180; // Adjust as needed
      const pdfHeight = pdfWidth / aspectRatio;

      // Add the captured image to the PDF
      pdf.addImage(imageData, "PNG", 15, 40, pdfWidth, pdfHeight);

      // Download the PDF
      pdf.save("qr_code.pdf");
    });
    setLoading(false);
  };

  return (
    <div className="fixed z-40 bg-slate-100 rounded-xl left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2  w-10/12 sm:w-8/12">
      <button
        className="absolute right-5 top-4 bg-burgundy text-xs text-white px-1 rounded"
        onClick={() => setID(null)}
      >
        X
      </button>

      <article className="bg-tertiary  m-2 border border-primary shadow-lg rounded-xl z-20 pb-4  ">
        {msg && (
          <h2 className=" mt-7 mb-4 text-primary text-lg text-center sm:text-xl">
            Nuevo regalo creado con éxito!
          </h2>
        )}
        <div className="flex justify-center mb-6">
          {msg && (
            <Link
              to={`view/${id}`}
              className="text-primary bg-white m-2 text-xl py-1 px-3 shadow-xl rounded-full border "
            >
              Ver detalles
            </Link>
          )}
          <button
            onClick={downloadQr}
            className="text-primary bg-white m-2 text-xl py-1 px-3 shadow-xl rounded-full border "
          >
            Descargar QR
          </button>
        </div>
        {loading && <p className="bg-red-500">Descargando PDF...</p>}
        <div id="qr-code">
          <QRCode
            className="m-auto pb-8"
            size={300}
            bgColor="white"
            fgColor="#315b61"
            value={`https://teregalo.netlify.app/gift/${id}`}
          />
        </div>
      </article>
    </div>
  );
};
