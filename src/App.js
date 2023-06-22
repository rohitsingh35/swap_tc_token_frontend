import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Matrics from "./pages/Matrics";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route isAuth={true} path="/" element={<Home />} />
        <Route isAuth={true} path="/matrics/:symbol" element={<Matrics />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
