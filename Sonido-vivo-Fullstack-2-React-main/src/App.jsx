import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import "bootstrap/dist/css/bootstrap.min.css";
// Puedes dejar estos imports listos para cuando configures esas rutas
import RegisterPage from "./pages/RegisterPage";
import ContactPage from "./pages/ContactPage";
import CatalogPage from "./pages/CatalogPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta principal: Muestra el catálogo/inicio */}
        <Route path="/" element={<HomePage />} />
        
        {/* Ruta de Login: Muestra el formulario */}
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;