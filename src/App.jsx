import { Testimonio } from "./components/Testimonio.jsx";
import "./App.css";
function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Testimonio
        nombre='Shawn Wang'
        pais='Singapur'
        imagen='shawn'
        cargo='Software Engineer'
        empresa='Amazon'
        testimonio='Its scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life.'
        
        />
        <Testimonio
          nombre="Emma Bostian"
          pais="Suecia"
          imagen="emma"
          cargo="Software Engineer"
          empresa="Spotify"
          testimonio="Siempre he tenido problemas para aprender JavaScript. Tomé muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como un ingeniero de software en Spotify"  
        />
         <Testimonio
        nombre='Sarah Chima'
        pais='Nigeria'
        imagen='sara'
        cargo='Software Engineer'
        empresa='ChatDesk'
        testimonio='freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company.'
        
        />
       
      </div>
    </div>
  );
}

export default App;
