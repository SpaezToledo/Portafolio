import './App.css';
import html from './assets/html.png';
import node from './assets/NodeJs.png';
import sql from './assets/mysql.png';
import react from './assets/react.png';
import gh from './assets/github.png';


function App() {
  return (
    <div className="App">
<body>
<div className="i">
  <h1 className="titulo">Santiago Paez Toledo</h1>
  <h2 className="subtitulo">Desarrollador Web Full Stack</h2>
  </div>
  <section>
    <h3>Projectos</h3>
    <div>
    
    </div>
  </section>
  
  <section>
    <h3>Sobre mi</h3>
    <div className="sobreMi">
    <p>Comencé mi viaje en la programación de forma independiente. Luego me uní a Digital House para mejorar mis habilidades. Participé en proyectos y experimenté el intenso trabajo práctico.</p>
    <p>Desarrollamos un E-commerce de manera grupal atravesando diferentes desafios.</p>
    <p>Terminé exitosamente el curso de programación web full stack.</p>
    <p>Actualmente soy un programador web independiente trabajando en proyectos personales, en busca de oportunidades.</p>
    </div>
  </section>
  
  <section>
    <h3>Habilidades</h3>
    <div>
    <ul class="habilidades">
    <li id="html"><img src={html} alt="Imagen 1" /></li>
      <li id="node"><img src={node} alt="Imagen 2" /></li>
      <li id="sql"><img src={sql} alt="Imagen 3" /></li>
      <li id="react"><img src={react} alt="Imagen 4" /></li>
      <li id="gh"><img src={gh} alt="Imagen 4" /></li>
</ul>
    </div>
  </section>

  <section>
    <h3>Contacto</h3>
    <div>
     
    </div>
  </section>
</body>
    </div>
  );
}

export default App;
