import React from "react";
import "../../styles/SobreMi.css";
import Presentacion from  '../../components/Presentacion';
import Informacion from  '../../components/Informacion';
import InformacionPersonal from '../../components/InformacionPersonal';

import Cursor from '../../components/Cursor';



export default function sobremi() {
  return (
    <div className="sobremicontainer">
      <Cursor></Cursor>
      <InformacionPersonal></InformacionPersonal>
      <main id="portfolio"></main>
      <Informacion></Informacion>
    </div>
  );
}
