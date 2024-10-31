
import React from 'react';
import Card from '../components/Card';
import Cursor from '../components/Cursor';

import '../styles/page.css'; 
import  Image from 'next/image';
import Presentacion from '../components/Presentacion';

export default function HomePage() {
  const altura_imagen = 150;
  const anchura_imagen = 200;
  return (
  <div>
    <Cursor></Cursor>
    <Presentacion
      titulo='Inicio'
    ></Presentacion> 
    <h2>Conocimientos</h2>
    <section id="cards">
    <Card
      link="/images/codificacion.png"
      texto="Codificacion"
      altura_imagen={altura_imagen}
      anchura_imagen={anchura_imagen}
      titulo="Programacion en shell"
      contenido="Shell Script es un lenguaje de programación de sistema operativo Unix y Linux."
    ></Card>

    <Card
      link="/images/java.png"
      texto="Java"
      altura_imagen={altura_imagen}
      anchura_imagen={anchura_imagen}
      titulo="Programacion en Java"
      contenido="Java es un lenguaje de programación orientado a objetos que fue diseñado por Oracle Corporation en 1995."
    ></Card>

    <Card
      link="/images/piton.png"
      texto="Python"
      altura_imagen={altura_imagen}
      anchura_imagen={anchura_imagen}
      titulo="Programacion en Python"
      contenido="Python es un lenguaje de programación interpretado, multiplataforma y de propósito general. Se utiliza en ciencias de la computación, artificial inteligencia, y desarrollo web."
    ></Card>

    <Card
      link="/images/lpr.png"
      texto="JavaScript"
      altura_imagen={altura_imagen}
      anchura_imagen={anchura_imagen}
      titulo="Programacion en JavaScript"
      contenido="JavaScript es un lenguaje de programación interpretado, de alto nivel y orientado a objetos. Se utiliza en la web, la app móvil, y la programación de servicios web."
    ></Card>

    <Card
      link="/images/css.png"
      texto="CSS"
      altura_imagen={altura_imagen}
      anchura_imagen={anchura_imagen}
      titulo="Diseño en CSS"
      contenido="CSS es un lenguaje de diseño para diseñar páginas web y aplicaciones web."
    ></Card>

    <Card
      link="/images/html.png"
      texto="HTML"
      altura_imagen={altura_imagen}
      anchura_imagen={anchura_imagen}
      titulo="Construccion en HTML"
      contenido="HTML es el lenguaje de marcado utilizado para describir la estructura de documentos web."
    ></Card>

    <Card
      link="/images/java2.png"
      texto="Java"
      altura_imagen={altura_imagen}
      anchura_imagen={anchura_imagen}
      titulo="Programacion en Java"
      contenido="Java es un lenguaje de programación orientado a objetos que fue diseñado por Oracle Corporation en 1995."
    ></Card>

    <Card
      link="/images/mysql.png"
      texto="MySQL"
      altura_imagen={altura_imagen}
      anchura_imagen={anchura_imagen}
      titulo="Base de datos en MySQL"
      contenido="MySQL es un sistema de gestión de bases de datos open-source, de código abierto, diseñado para funcionar en cualquier tipo de sistema operativo con soporte de base de datos relacional."
    ></Card>

    <Card
      link="/images/servidor-sql.png"
      texto="Servidor SQL"
      altura_imagen={altura_imagen}
      anchura_imagen={anchura_imagen}
      titulo="Servidor en SQL"
      contenido="Un servidor SQL es un software que administra una base de datos. Los servidores SQL se pueden encontrar en varios sistemas operativos, como Windows, Linux, macOS, y otros."
    ></Card>



    </section>
</div>
  



  );
}
