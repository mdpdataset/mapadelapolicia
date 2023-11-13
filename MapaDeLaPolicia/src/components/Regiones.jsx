import React from 'react';
import styles from "../styles/Regiones.module.css";
import Region from "./Region";
import regionesData from "../data/regiones.json"; // Importa regionesData

const Regiones = () => {
  const regiones = regionesData.regionesData; // Accede a la propiedad regionesData

  return (
    <section id={styles.Regiones} className={styles.Regiones}>
      <ul>
        {regiones.map((region, index) => (
          <Region key={index} {...region} />
        ))}
      </ul>
    </section>
  );
};

export default Regiones;
