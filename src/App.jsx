import { Routes, Route, HashRouter } from "react-router-dom";
import TravelFormPage from "./pages/travel/TravelFormPage";
import MainPage from "./pages/MainPage";
import TravelRequestPage from "./pages/travel/TravelRequestPage";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/travel" element={<TravelFormPage />} />
        <Route path="/request" element={<TravelRequestPage />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
