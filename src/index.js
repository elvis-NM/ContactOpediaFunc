import ReactDOM from "react-dom/client";
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import CyclOPediaCLassPage from "./Components/Layout/CyclOPediaCLassPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div style={{ backgroundColor: "black", color: "grey" }}>
    <Header />
    <div className="row text-white">
      <div className="col-6">
        <span className="h1 text-warning text-center">Class Component</span>
        <CyclOPediaCLassPage />
      </div>
    </div>
    <Footer />
  </div>
);
