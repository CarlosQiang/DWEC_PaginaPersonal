
import '../styles/RedesSociales.css';
import Image from 'next/image';

export default function RedesSociales() {
  return (
    <div className="redes-sociales">
        <ul>  
            <li>
                <a href="https://github.com/CarlosQiang">
                    <Image src="/icons/github.svg" width={40} height={40} alt="Github" />
                </a>            
            </li>
            <li>
                <a href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F%3Flocale%3Des_ES">
                    <Image src="/icons/facebook.svg" width={40} height={40} alt="Facebook" />
                </a>            
            </li>
            <li>
                <a href="https://www.instagram.com/">
                    <Image src="/icons/insta.svg" width={40} height={40} alt="Instragram" />  
                </a>          
            </li>
            <li>
                <a href="https://mail.google.com/mail/">
                    <Image src="/icons/gmail.svg" width={40} height={40} alt="Gmail" />
                </a>            
            </li>
            <li>
                <a href="https://x.com/home?lang=es">
                    <Image src="/icons/twiter.svg" width={40} height={40} alt="Twitwer" />
                </a>            
            </li>
        </ul>

    </div>
  );
}
