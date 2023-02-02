import styles from './Sabores.module.css';
import Topo from "../../componentes/Topo";
import Rodape from "../../componentes/Rodape";
import sabores from '../../assets/sabores.jpg';
import oreo from '../../assets/oreo.png';
import pistache from '../../assets/pistache.png';
import avela from '../../assets/avela.png';
import kiwi from '../../assets/kiwi.png';
import morango from '../../assets/morango.png';
import limao from '../../assets/limao.png';




export default function Sabores() {

  return(
    <div>

      <Topo />

      <main>
        <section className={styles.bannersabores}>
        <img src={sabores} alt='sabore' />
            <div className={styles.titulobanner}>
            <h1>NOSSOS SABORES</h1>
          </div>
        </section>

        <section className={styles.limitarsecaosabores}>
          <h2>SABORES DE SORVETE</h2>
          <div className={styles.containersorvetes}>
            <div className={styles.boxsorvete}>
              <img src={oreo} alt="sorvete sabor oreo"/>
              <h3>Sorvete de Oreo</h3>
              <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
            </div>
            <div className={styles.boxsorvete}>
              <img src={pistache} alt="sorvete sabor pistache"/>
              <h3>Sorvete Pistache</h3>
              <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
            </div>
            <div className={styles.boxsorvete}>
              <img src={avela} alt="sorvete sabor cookie com avelã"/>
              <h3>Sorvete Cookies & Avelã</h3>
              <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
            </div>
            <div className={styles.boxsorvete}>
              <img src={kiwi} alt="sorbet sabor kiwi"/>
              <h3>Sorvete de Kiwi</h3>
              <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
            </div>
            <div className={styles.boxsorvete}>
              <img src={morango} alt="sorbet sabor morango"/>
              <h3>Sorvete de Morango</h3>
              <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
            </div>
            <div className={styles.boxsorvete}>
              <img src={limao} alt="sorbet limão siciliano"/>
              <h3>Sorvete de Limão Siciliano</h3>
              <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
            </div>
          </div>
        </section>

      </main>

      <Rodape />

    </div>
  )
}