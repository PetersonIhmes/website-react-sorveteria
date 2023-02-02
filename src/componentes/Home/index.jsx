import styles from './Home.module.css';

import Topo from "../../componentes/Topo";
import Rodape from "../../componentes/Rodape";

import sabores from '../../assets/sabores.jpg';
import eventos from '../../assets/eventos.jpg';
import sobreimage from '../../assets/sobreimage.jpg';
import home from '../../assets/home.png';

export default function Home() {
  return(
    <div>

      <Topo />

      <main>
        <section className={styles.secaobanner}>
          <div className={styles.textobanner}>
          <img src={home} alt='sorvete' />
            <h1>SORVETE ARTESANAL</h1>
          </div>
        </section>

        <section className={styles.secaonossossabores}>
          <img src={sabores} alt="sorvetes diversos" />
          <div className={styles.textosecaonossossabores}>
            <h2>NOSSOS SABORES</h2>
            <span>Novos e deliciosos!</span>
            <p>
              Sorvete bom é aquele feito com os melhores ingredientes! Aqui na
              gelateria todos os nossos produtos são naturais, à base de
              frutas e sem nenhum conservante! Também temos opções sem lactose
              e sem açúcar. Venha conhecer e perceber que tem como o sorvete
              ser delicioso e saudável ao mesmo tempo!
            </p>
          </div>
        </section>

        <section className={styles.secaonossoseventos}>
          <div className={styles.textosecaonossoseventos}>
              <h2>NOSSOS EVENTOS</h2>
              <span>Delicias com sorvete!</span>
              <p>
                Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui
                prontinhos para te atender e oferecer os melhores eventos com os melhores
                sorvete da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.
              </p>
          </div>
          <img src={eventos} alt="mesa de festa" />
        </section>

        <section className={styles.secaosobrenos}>
          <img src={sobreimage} alt="pessoas comendo sorvete" />
          <div className={styles.textosecaosobrenos}>
            <h2>SOBRE NÓS</h2>
            <span>Alegria em cada casquinha!</span>
            <p>
              Venha tomar o melhor sorvete da região aqui com a gente! Nós
              estamos há anos no mercado produzindo o que tem de melhor para o
              nosso cliente e você não pode ficar fora dessa. Venha nos fazer
              uma visita e aproveite o melhor atendimento e o melhor sorvete
              da cidade.
            </p>
          </div>
        </section>
      </main>

      <Rodape />

    </div>
  )
}