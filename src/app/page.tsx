import styles from "./page.module.css";
import Link from 'next/link'
import Image from 'next/image'
import BgPlanes from "./_parts/bg-planes";
import hero from './_assets/hero.png'
import chevron from './_assets/chevron.svg'


export default function Home() {
  return (
    <main>
      <section className={styles.customSection}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5 col-lg-7 order-md-2">
              <Image
                src={hero}
                alt=""
                className={`${styles.heroImageWidth} img-fluid mb-6 mb-md-0`}
              />
            </div>
            <div className="col-12 col-md-7 col-lg-5 order-md-1 d-flex flex-column justify-content-evenly">
              <h1 className="display-3 text-center text-md-start">
                Junte-se a nós  <br />
                nessa <span className="text-primary">Jornada</span>
              </h1>
              <div>
                <p className="lead text-center text-md-start text-body-secondary line-height-2x mb-6">
                  Uma equipe de profissionais de turismo experientes irá fornecer-lhe os melhores conselhos e dicas para o local que deseja.
                </p>

                <div className="text-center text-md-start">
                  <Link href="#" className="btn btn-outline-primary me-1">
                    Descubra agora
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className={`card my-5 bg-white border-0 ${styles.searchBar}`}>
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col">
                  <span className="me-2"><strong>Destino</strong></span>
                    <Image
                      src={chevron}
                      alt=""
                    />
                  <p className="text-body-secondary"><small>Aonde você quer ir</small></p>
                </div>
                <div className="col">
                  <span className="me-2"><strong>Data</strong></span>
                    <Image
                      src={chevron}
                      alt=""
                    />
                  <p className="text-body-secondary"><small>Quando vai</small></p>

                </div>
                <div className="col">
                  <span className="me-2"><strong>Hóspedes</strong></span>
                    <Image
                      src={chevron}
                      alt=""
                    />
                  <p className="text-body-secondary"><small>Quantos hóspedes</small></p>


                </div>
                <div className="col col-12 col-lg-4 mt-3 mt-lg-0 text-center text-lg-end">
                  <Link href="#" className="btn btn-lg btn-primary shadow-sm">
                    Descubra agora
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.bgGray} ${styles.customSection}`}>
        <div className="container">
          <div className="row text-center justify-content-center">
            <BgPlanes />

            <h1 className="display-4 mb-4 z-3">
              Coisas que você <span className="text-primary">precisa saber</span>
            </h1>
            <div className="col-lg-5">
              <p className="font-sm-2 text-center text-body-secondary line-height-2x">
                Garantimos que você embarcará em férias perfeitamente planejadas e seguras a um preço acessível.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
