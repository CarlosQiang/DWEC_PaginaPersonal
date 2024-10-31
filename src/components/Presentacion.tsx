
import Image from 'next/image';
import Link from 'next/link';
import '../styles/Presentacion.css';

export default function Presentacion({titulo}:{titulo:string}) {
  return (
    <section className="sobre-mi">
      <h2>{titulo}</h2>
      <div className="contenido">

        <div className="imagen-perfil">
          <Image 
            src="/images/PHP.jpeg" 
            alt="Foto de perfil"
            width={150}
            height={150}
          />
        </div>

        <div className="texto">
          <p>¡Hola! Soy Carlos, un desarrollador enfocado en crear aplicaciones web intuitivas y funcionales. Me apasiona el desarrollo frontend y tengo experiencia en tecnologías como React, Next.js, y TypeScript.</p>
          <p>En mi tiempo libre, disfruto aprendiendo sobre nuevas tecnologías y mejorando mis habilidades. Siempre estoy en búsqueda de nuevos retos y oportunidades para crecer como profesional.</p>
          
          <Link href="/porfolio">
          </Link>
        </div>
        
      </div>
    </section>
  );
}
