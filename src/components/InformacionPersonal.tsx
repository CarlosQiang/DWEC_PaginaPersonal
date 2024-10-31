// src/components/InformacionPersonal.tsx

import '../styles/InformacionPersonal.css';
import Image from 'next/image';

export default function InformacionPersonal() {
  const imageUrl = '/images/PHP.jpeg'; 
  const name = 'Carlos Qiang'; 
  const title = 'Desarrollador Frontend'; 
  const bio = 'Soy un desarrollador frontend con experiencia en la creación de aplicaciones web modernas y eficientes. Me apasiona el diseño de interfaces intuitivas y el desarrollo de soluciones escalables usando tecnologías como React y Next.js.'; // Breve biografía
  const skills = ['JavaScript', 'React', 'Next.js', 'CSS', 'HTML','Java', 'SQL' , 'NO-SQL', 'MONGO','BASH']; 
  const contactInfo = {
    email: 'carloscampospazos@gmail.com', 
    linkedin: 'https://linkedin.com', 
    github: 'https://github.com/CarlosQiang' 
  };

  return (
    <div className="about-me">
      <div className="profile-image">
        <Image src={imageUrl} alt={name} width={200} height={200} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{title}</h2>
        <p>{bio}</p>
        <div className="skills">
          <h3>Habilidades:</h3>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="contact">
          <h3>Contacto:</h3>
          <ul>
            <li><a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></li>
            <li><a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href={contactInfo.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
