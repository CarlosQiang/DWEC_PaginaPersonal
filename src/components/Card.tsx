import Image from "next/image";
import Link from "next/link";

import '../styles/Card.css'


export default function Card(
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
  return (

    <div id="carta">
        <Image 
            src={link}
            alt={texto}
            width={anchura_imagen}
            height={altura_imagen}
            
        ></Image>
        <div>
            <h1>
                {titulo}
            </h1>
        </div>

        <div id="contenido">
            {contenido}
        </div>

    </div>

  );
}
