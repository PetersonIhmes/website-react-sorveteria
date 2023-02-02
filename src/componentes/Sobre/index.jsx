import styles from './Sobre.module.css';

import Topo from "../../componentes/Topo";
import Rodape from "../../componentes/Rodape";

import bannersobre from '../../assets/bannersobre.png';
import sobreimage from '../../assets/sobreimage.jpg';
import sorveteria from '../../assets/sorveteria.jpg';

export default function Sobre() {
  return (
    <div>

      <Topo />

      <main>
        <section className={styles.secaobannersobre}>
        <img src={bannersobre} alt='bannersobre' />
          <div className={styles.titulobannersobre}>
            <h1>A GELATERIA</h1>
          </div>
        </section>

        <section className={styles.containersecaosobrenos}>
          <div className={styles.limitarsecao}>
            <h2>Sobre Nós</h2>
            <span>Nós simplesmente amamos sorvete!</span>
            <p>
              Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada
              sorvete produzido. Fazemos o melhor sorvete para os nossos
              clientes e gostamos de receber elogios. Estamos operando desde
              2009 com as melhores matérias-primas para a produção final do
              sorvete. Vendemos tanto para varejo como para atacado.
            </p>
            <p>
              Nossos clientes podem comprar os nossos sorvetes e degustar na
              nossa loja ou levar para sua residência e aproveitar junto com a
              família. Também vendemos para estabelecimentos e criamos eventos
              como festa de aniversário, formaturas e eventos empresariais. Para
              contratar os nossos serviços, basta entrar em contato conosco.
              Iremos proporcionar o melhor atendimento e os melhores produtos
              para você fazer a sua festa mais saborosa, com o melhor sorvete da
              cidade.
            </p>
          </div>
        </section>

        <section className={styles.containersecaoimagens}>
          <div>
            <img src={sobreimage} alt="pessoas comendo sorvete" />
            <img src={sorveteria} alt="loja sorveteria" />
          </div>
        </section>
      </main>

      <Rodape />

    </div>
  );
}