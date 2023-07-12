import './App.css';
import './3D.css';
import './Form.css';
import html from './assets/html.png';
import node from './assets/NodeJs.png';
import sql from './assets/mysql.png';
import react from './assets/react.png';
import gh from './assets/github.png';
import { useForm, ValidationError } from '@formspree/react';
  

function App() {
  const [state, handleSubmit] = useForm("mrgwgrnz");

  const handleFormSubmit = async (e) => {
    e.preventDefault(); // Evita que se envíe el formulario y se abra una nueva página

    await handleSubmit(e); // Ejecuta el proceso de envío del formulario
  };
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



<div class="container">
  <ul class="cube-list">
    <li>
      <div class="center-container">
        <div class="row">
          <div class="col-md-12">
            <div class="wrap-cube">
              <div class="cube">
                <div class="face front"></div>
                <div class="face back"></div>
                <div class="face top"></div>
                <div class="face bottom"></div>
                <div class="face left"></div>
                <div class="face right"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>




    <li>
      <div class="center-containerM">
        <div class="rowM">
          <div class="col-md-12">
            <div class="wrap-cubeM">
              <div class="cubeM">
                <div class="face frontM"></div>
                <div class="face backM"></div>
                <div class="face topM"></div>
                <div class="face bottomM"></div>
                <div class="face leftM"></div>
                <div class="face rightM"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>




    <li>
      <div class="center-containerN">
        <div class="rowN">
          <div class="col-md-12">
            <div class="wrap-cubeN">
              <div class="cubeN">
                <div class="face frontN"></div>
                <div class="face backN"></div>
                <div class="face topN"></div>
                <div class="face bottomN"></div>
                <div class="face leftN"></div>
                <div class="face rightN"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>




    <li>
      <div class="center-containerC">
        <div class="rowM">
          <div class="col-md-12">
            <div class="wrap-cubeC">
              <div class="cubeC">
                <div class="face frontC"></div>
                <div class="face backC"></div>
                <div class="face topC"></div>
                <div class="face bottomC"></div>
                <div class="face leftC"></div>
                <div class="face rightC"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>


  </ul>
</div>















    
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




    <form onSubmit={handleFormSubmit}>
  {state.succeeded ? (
    <p className='msg'>Gracias por tu mensaje!</p>
  ) : (
    <>
      <div className="form-group">
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="message">Mensaje:</label>
        <textarea id="message" name="message" required></textarea>
      </div>
      <input type="submit" value="Enviar" disabled={state.submitting} />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
    </>
  )}
</form>






     
    </div>
  </section>
</body>
    </div>
  );
}

export default App;
