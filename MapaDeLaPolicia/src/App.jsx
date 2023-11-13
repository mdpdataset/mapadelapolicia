// App.js
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Mapa from "./components/Mapa";
import Investigaciones from "./components/Investigaciones";
import Denuncia from "./components/Denuncia";
import Denuncias from "./components/Denuncias";
import Herramientas from "./components/Herramientas";
import Jefatura from "./components/Jefatura";
import Reportes from "./components/Reportes";
import Nosotrxs from "./components/Nosotrxs";









import { RegionProvider } from "./context/RegionContext";

function App() {
  return (
    
    <BrowserRouter>
      <RegionProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:region" element={<Mapa />} />
          <Route path="/denuncias" element={<Denuncias />} />
          <Route path="/herramientas" element={<Herramientas />} />
          <Route path="/investigaciones" element={<Investigaciones />} />
          <Route path="/jefatura" element={<Jefatura />} />
          <Route path="/reportes" element={<Reportes />} />

          <Route path="/nosotrxs" element={<Nosotrxs />} />

        
        </Routes>
      </RegionProvider>
    </BrowserRouter>
  );
}

export default App;