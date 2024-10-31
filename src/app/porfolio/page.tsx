import React from 'react';

import Presentacion from "../../components/Presentacion";
import Card from "../../components/Card";
import '../../styles/Porfolio.css'
import Cursor from '../../components/Cursor';
import Hormigas from '../../components/Hormigas';



export default function porfolio() {
  const altura_imagen = 149;
  const anchura_imagen = 200;
  return (

  <div id='porfolioDiv'>
    <Cursor></Cursor>
    <div id="sobremi">
      <Hormigas
        link="/images/PHP.jpeg"
        texto="Codificacion"
        altura_imagen={altura_imagen}
        anchura_imagen={anchura_imagen}
        titulo="Portfolio"
      ></Hormigas>
    </div>

    <section id="cards">

    <Card
      link="/images/cisco.jpg"
      texto="Codificacion"
      altura_imagen={altura_imagen}
      anchura_imagen={anchura_imagen}
      titulo='Cisco'
      contenido="Cisco es una compañía de tecnología y servicios de telecomunicaciones, líder en el mercado de la red de comunicaciones de fibra óptica y de telefonía celular."
    ></Card>


    <Card
      link="/images/red.png"
      texto="Python"
      altura_imagen={altura_imagen}
      anchura_imagen={anchura_imagen}
      titulo="Servicios en red"
      contenido="Python es un lenguaje de programación interpretado, multiplataforma y de propósito general. Se utiliza en ciencias de la computación, artificial inteligencia, y desarrollo web."
    ></Card>

    <Card
      link="/images/pcs.png"
      texto="JavaScript"
      altura_imagen={altura_imagen}
      anchura_imagen={anchura_imagen}
      titulo="Programacion en Web"
      contenido="JavaScript es un lenguaje de programación interpretado, de alto nivel y de propósito general. Se utiliza en la web y el desarrollo móvil."
    ></Card>


    <Card
      link="/images/java.png"
      texto="CSS"
      altura_imagen={altura_imagen}
      anchura_imagen={anchura_imagen}
      titulo="Progrmacion en Java"
      contenido="Java es un lenguaje de programación orientado a objetos que fue diseñado por Oracle Corporation en 1995."
    ></Card>

    <Card
      link="/images/laravel.png"
      texto="Laravel"
      altura_imagen={altura_imagen}
      anchura_imagen={anchura_imagen}
      titulo="Laravel"
      contenido="Laravel es un framework PHP para la creación de aplicaciones web y APIs con una estructura de código fuente abierta y de código abierto."
    ></Card>

    <Card
      link="/images/frameworckCss.jpg"
      texto=""
      altura_imagen={altura_imagen}
      anchura_imagen={anchura_imagen}
      titulo="Frameworks de Css"
      contenido="Frameworks de CSS son conjuntos de reglas y estilos que se utilizan para diseñar y mantener la estructura y diseño de las páginas web."
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
