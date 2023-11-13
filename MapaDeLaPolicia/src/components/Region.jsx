import styles from "../styles/Region.module.css";
import { BotonRegion } from "./Botones";

const Region = ({ nombre, link}) => {


  return (
    <li>

      <section id={styles.Region} className={styles.Region}>
        <h3 id={styles.regionNombre} className={styles.regionNombre}>
          {nombre}
        </h3>
        <BotonRegion id={styles.boton} className={styles.boton} />
      </section>
      
    </li>
  );
};

export default Region;