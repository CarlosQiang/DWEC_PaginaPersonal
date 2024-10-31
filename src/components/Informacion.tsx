
import Image from 'next/image';
import '../styles/Informacion.css';


export default function Informacion() {
  return (
    <div className="informacion">
      <div className="seccion">
        <div className="texto1">
          <h2> <b>Acerca de Mi Trabajo</b></h2>
          <p>Mi trabajo se enfoca en desarrollar soluciones tecnológicas innovadoras que impacten positivamente en la vida de las personas. Me especializo en el desarrollo frontend con herramientas modernas como React y Next.js.</p>
        </div>
        <div className="imagen">
          <Image src="/images/trabajo.jpg" alt="Imagen de trabajo" width={300} height={200} />
        </div>
      </div>

      <div className="seccion">
        <div className="imagen">
          <Image src="/images/hobbie.jpg" alt="Imagen de pasatiempo" width={300} height={200} />
        </div>
        <div className="texto1">
          <h2><b>Pasatiempos y Hobbies</b></h2>
          <p>En mi tiempo libre, disfruto explorar nuevas tecnologías, aprender sobre inteligencia artificial y practicar fotografía. Estos pasatiempos me permiten encontrar inspiración y mantenerme motivado.</p>
        </div>
      </div>

      <div className="velas">
     </div>
    </div>
  );
}
