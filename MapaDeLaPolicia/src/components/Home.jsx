import React from "react";
import { Link } from "react-router-dom";
import { useRegionContext } from "../context/RegionContext";
import styles from "../styles/Home.module.css";

const Home = () => {
  const { setSelectedRegion } = useRegionContext();

  const handleRegionChange = (region) => {
    setSelectedRegion(region);
  };

  return (
    <section id="home" className={styles.Home}>
      <h2 className={styles.titulo}>MAPA DE LA POLICÍA</h2>
      <ul className={styles.lista}>
        <li className={styles.boton}>
          <Link to="/caba" onClick={() => handleRegionChange("caba")}>
            CABA
          </Link>
        </li>
        <li className={styles.boton}>
          <Link to="/laplata" onClick={() => handleRegionChange("laplata")}>
          LA PLATA          
        </Link>
        </li>
      </ul>
    </section>
  );
};

export default Home;