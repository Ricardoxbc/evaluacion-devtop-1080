import sideImage from '../assets/side.png'
import './css/MainContent.css'
import { BehanceIcon, FacebookIcon, InstagramIcon, LinkedeinIcon } from "../icons";

export function MainContent() {
    return (
      <main>
        <section className='info'>
          <h2>Somos el puente entre Empresas y Talento Top</h2>
          <small>
            Lorem Ipsum es un texto de marcador de posición comúnmente utilizado
            en las industrias gráficas, gráficas y editoriales para previsualizar
            diseños y maquetas visuales.
          </small>
          <div className='buttons'>
            <button className='primary'>Para empresas</button>
            <button className='secondary'>Para talentos</button>
          </div>
          <div className='social-media'>
            <span>Siguenos en:</span>
            <LinkedeinIcon/>
            <FacebookIcon/>
            <InstagramIcon />
            <BehanceIcon />
          </div>
        </section>
        <section className='side-image'>
          <img
            src={sideImage}
            alt=''          
          />
        </section>
      </main>
    )
  }
  