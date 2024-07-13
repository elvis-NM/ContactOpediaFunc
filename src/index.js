import ReactDOM from "react-dom/client";
import Header from "./Header";
import Footer from "./Footer";
import CyclOPediaCLassPage from "./CyclOPediaCLassPage";
import CyclOPediaCLassFuncPage from "./CyclOPediaCLassFuncPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div style={{ backgroundColor: "black", color: "grey" }}>
    <Header />
    <div className="row text-white">
      <div className="col-6">
        <span className="h1 text-warning text-center">Class Component</span>
        <CyclOPediaCLassPage />
      </div>
      <div className="col-6">
        <span className="h1 text-warning text-center">Class FuncComponent</span>
        <CyclOPediaCLassFuncPage />
      </div>
    </div>
    <Footer />
  </div>
);
