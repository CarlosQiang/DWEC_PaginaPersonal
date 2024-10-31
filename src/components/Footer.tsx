'use client'

import Link from 'next/link';

import '../styles/Footer.css'
import RedesSociales from "./RedesSociales";
import { usePathname } from 'next/navigation';




export default function Footer() {
  const pathname = usePathname()

  return (

    <footer id="footer">
      <div id="footer-container">
          <div id="footer-info">
              © Carlos Qiang 2024 | Torrelodones, Madrid | +34 670 20 90 33 | carloscampospazos@emailfalso.com
          </div>
          
          <nav id="footer-nav">
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

          
      </div>
      <RedesSociales></RedesSociales>
    </footer>
      

  );
}
