import React, { createContext, useState, useContext, useEffect } from "react";

const RegionContext = createContext();

export const useRegionContext = () => {
  return useContext(RegionContext);
};

export const RegionProvider = ({ children }) => {
  // Define un array de regiones
  const regiones = ["caba", "laplata"]; // Agrega más regiones según sea necesario

  // Comprueba si hay una región seleccionada en el localStorage
  const storedRegion = localStorage.getItem("selectedRegion");

  // Inicializa selectedRegion con el valor del localStorage o la primera región del array
  const [selectedRegion, setSelectedRegion] = useState(
    storedRegion && regiones.includes(storedRegion) ? storedRegion : regiones[0]
  );

  useEffect(() => {
    // Guarda la región seleccionada en el localStorage
    localStorage.setItem("selectedRegion", selectedRegion);
  }, [selectedRegion]);

  return (
    <RegionContext.Provider value={{ selectedRegion, setSelectedRegion }}>
      {children}
    </RegionContext.Provider>
  );
};
