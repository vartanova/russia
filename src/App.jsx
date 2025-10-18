import { Routes, Route, HashRouter } from "react-router-dom";
import TravelForm from "./pages/travel/TravelForm";
import MainPage from "./pages/MainPage";


const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/travel" element={<TravelForm />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
