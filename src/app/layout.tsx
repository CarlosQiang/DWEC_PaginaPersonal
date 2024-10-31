import React from 'react';
import Cabecera from '../components/Cabecera';
import Footer from '../components/Footer';
import '../styles/globals.css'; 

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <Cabecera
          link="/images/logo.png"
          titulo="Carlos"
          altura_imagen={50}
          anchura_imagen={100}
          contenido="Mi nombre es Carlos"
          texto="Soy un desarrollador web y un estudiante de Tecnologías de la Información"
        />

        
        <main>
          {children}
        </main>


        <Footer />
      </body>
    </html>
  );
};

export default Layout;
