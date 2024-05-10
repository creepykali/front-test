import styles from "./page.module.css";
import Link from 'next/link'
import Image from 'next/image'
import hero from './_assets/hero.png'

export default function Home() {
  return (
    <main className="container">
      <div className="row align-items-stretch">
        <div className="col-12 col-md-5 col-lg-6 order-md-2">
          <Image
            src={hero}
            alt=""
            className={`${styles.heroImageWidth} img-fluid mb-6 mb-md-0`}
          />
        </div>
        <div className="col-12 col-md-7 col-lg-6 order-md-1 d-flex flex-column justify-content-around">
          <h1 className="display-3 text-center text-md-start">
            Junte-se a nós  <br />
            nessa <span className="text-primary">Jornada</span>
          </h1>

          <p className="lead text-center text-md-start text-body-secondary mb-6 mb-lg-8">
            Uma equipe de profissionais de turismo experientes irá fornecer-lhe os melhores conselhos e dicas para o local que deseja.
          </p>

          <div className="text-center text-md-start">
            <Link href="#" className="btn btn-primary shadow me-1">
              Descubra agora
            </Link>
          </div>
        </div>
      </div>
      
      <div className={`card my-5 ${styles.cardWidth}`}>
        <div className="card-body">
          This is some text within a card body.
        </div>
      </div>

    </main>
  );
}
