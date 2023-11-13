import { BotonTelefono, BotonMas } from "./Botones";
import { useRegionContext } from "../context/RegionContext"; // Importa el contexto
import styles from "../styles/Screen.module.css";

const Screen = () => {
  const { selectedRegion } = useRegionContext(); // Obtiene la región seleccionada desde el contexto

  // Define la información específica de cada región según sea necesario
  const regionInfo = {
    caba: {
      Comisaria: "Comisaría CABA",
      ExComisaria: "Ex Nombre CABA",
      Direccion: "Dirección CABA",
      Comisario: "Comisario CABA",
      Cargo: "Cargo autoridad CABA",
    },
    laplata: {
      Comisaria: "Comisaría La Plata",
      ExComisaria: "Ex Nombre La Plata",
      Direccion: "Dirección La Plata",
      Comisario: "Comisario La Plata",
      Cargo: "Cargo autoridad La Plata",
    },
  };

  const regionData = regionInfo[selectedRegion] || {};

  return (
    <>
    <section className={styles.Screen}>
      <section className={styles.ComisariaScreen} id="ComisariaScreen">
        <section className={styles.ComisariaData} id="ComisariaData">
          <h4>{regionData.ExComisaria}</h4>
          <h2>{regionData.Comisaria}</h2>
          <h5>{regionData.Direccion}</h5>
        </section>
        <BotonTelefono />
      </section>
      <section className={styles.AutoridadesScreen} id="AutoridadesScreen">
        <section className="AutoridadesData" id="AutoridadesData">
          <h4>{regionData.Cargo}</h4>
          <h3>{regionData.Comisario}</h3>
        </section>
        <BotonMas />
      </section>
      </section>
    </>
  );
};

export default Screen;
