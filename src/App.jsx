import { Routes, Route, HashRouter } from "react-router-dom";
import TravelRequest from "./pages/TravelRequest";
import MainPage from "./pages/MainPage";


const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/travel" element={<TravelRequest />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
