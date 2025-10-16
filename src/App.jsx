import { BrowserRouter, Routes, Route } from "react-router-dom";
import TravelRequest from "./pages/TravelRequest";
import MainPage from "./pages/MainPage";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/travel" element={<TravelRequest />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
