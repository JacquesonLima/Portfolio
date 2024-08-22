import "./App.css";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import BackToTopButton from "./components/BackToTopButton";
import MyServices from "./components/MyServices";
import Sidebar from "./components/Sidebar";
import ProjectCard from "./components/ProjectCard";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import calculadora from "./assets/calculadora.png";
import devnotes from "./assets/devnotes.png";
import hein from "./assets/hein.png";

function App() {
  const componentsService = [
    {
      title: "Front-end",
      description:
        "Desenvolvedor front-end, criando interfaces responsivas e intuitivas com HTML, CSS e JavaScript. Experiente em React e Angular, com foco em performance e acessibilidade.",
      img: <i class="fa-solid fa-code"></i>,
    },
    {
      title: "Back-end",
      description:
        "Desenvolvedor back-end especializado em bancos de dados e APIs, com experiência em Python, Java e Node.js. Foco em performance, escalabilidade e segurança das aplicações.",
      img: <i class="fa-brands fa-java"></i>,
    },
    {
      title: "Web Design",
      description:
        "Designer de web especializado em interfaces visuais atraentes e funcionais, com experiência em design responsivo e usabilidade. Hábil em Figma e focado em criar experiências intuitivas e estéticas.",
      img: <i class="fa-brands fa-figma"></i>,
    },
  ];

  return (
    <div className="App">
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Introduction></Introduction>
        <AboutMe></AboutMe>
        <section className="services-section" id="services">
          <div className="subtitle">
            <h2>
              Meus <span>Serviços</span>
            </h2>
          </div>
          <div className="services-content">
            {componentsService.map((data) => (
              <MyServices
                title={data.title}
                description={data.description}
                img={data.img}
              ></MyServices>
            ))}
          </div>
          <Sidebar></Sidebar>
        </section>
        <section className="projects-section" id="projects">
          <div className="subtitle">
            <h2>
              Ultimos <span>Projetos</span>
            </h2>
          </div>
          <div className="projects-content">
            <ProjectCard
              image={calculadora}
              title={"Calculadora"}
              description={"Calculadora simples"}
              link={"https://jacquesonlima.github.io/calculadora/"}
            ></ProjectCard>
            <ProjectCard
              image={devnotes}
              title={"DevNotes"}
              description={"Bloco de Anotações"}
              link={"https://jacquesonlima.github.io/devNotes/"}
            ></ProjectCard>
            <div id="aditional-card">
              <ProjectCard
                image={hein}
                title={"Hein"}
                description={"Landing Page"}
                link={"https://jacquesonlima.github.io/hein-landing-page/"}
              ></ProjectCard>
            </div>
          </div>
        </section>
        <section className="form-section" id="contact">
          <div className="subtitle">
            <h2>
              Entre em contato <span>comigo!</span>
            </h2>
          </div>
          <ContactMe></ContactMe>
        </section>
      </main>
      <footer>
        <p>Copyright©2024 Jacqueson | Todos os direitos reservados</p>
      </footer>
      <BackToTopButton></BackToTopButton>
    </div>
  );
}

export default App;
