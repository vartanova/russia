import { Routes, Route, HashRouter, useNavigation, useNavigate } from "react-router-dom";
import TravelFormPage from "./pages/travel/TravelFormPage";
import MainPage from "./pages/MainPage";
import TravelRequestPage from "./pages/travel/TravelRequestPage";

const App = () => {

  // let navigate = useNavigate();

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
