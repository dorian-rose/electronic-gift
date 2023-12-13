import { AppRouter } from "./routes/AppRouter";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function App() {
  return <AppRouter />;
}

export default App;
