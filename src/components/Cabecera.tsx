'use client'

import Image from "next/image";
import Link from "next/link";
import '../styles/Cabecera.css';
import { usePathname } from 'next/navigation';




export default function Cabecera(
  {
    link,
    texto, 
    altura_imagen,
    anchura_imagen,
    titulo,
    contenido   
  } :
  {
    link : string, 
    texto : string, 
    altura_imagen : number, 
    anchura_imagen : number, 
    titulo : string , 
    contenido : string
  } 
) {

  const pathname = usePathname()


  return (
    
    <header>
      <div id="logo">
        <Image 
              src={link}
              alt={texto}
              width={anchura_imagen}
              height={altura_imagen}
              
        ></Image>

      </div>


      <nav>
          <ul>
              <li>
                <Link href="/"     
                className = {`${pathname == "/" ? 
                  "font-bold underline text-sky-400"
                  :
                     ""
                    }`}
                  >
                𝐈𝐍𝐈𝐂𝐈𝐎
                </Link>
              </li>
              <li>
                <Link href="/sobremi"     
                  className = {`${pathname == "/sobremi" ? 
                    "font-bold underline text-sky-400"
                    :
                      ""
                      }`}
                    >
                  𝐒𝐎𝐁𝐑𝐄 𝐌𝐈
                </Link>
              </li>
              <li>
                <Link href="/porfolio"     
                    className = {`${pathname == "/porfolio" ? 
                        "font-bold underline text-sky-400"
                        :
                        ""
                        }`}
                      >
                    𝐏𝐎𝐑𝐓𝐅𝐎𝐋𝐈𝐎
                </Link>
              </li>

          </ul>
      </nav>


      <div id="botonesCabecera">


      </div>


    </header>

  );
}
