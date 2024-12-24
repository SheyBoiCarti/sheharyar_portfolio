import styled, { ThemeProvider } from "styled-components";
import NavBar from "./components/NavBar";
import { darkTheme } from "./utils/Themes.js";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Education from "./components/Education.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

const Body = styled.div`
    background-color: ${({ theme }) => theme.bg};
    width: 100%;
    overflow-x: hidden;
    position: relative;
`;
const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  //clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

const Section = styled.section`
    scroll-margin-top: 80px; 
`;

function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <NavBar />
            <Body>
                <Wrapper>
                <Section id="about">
                    <Hero />
                </Section>
                <Section id="skills">
                    <Skills />
                </Section>
                <Section id="education">
                    <Education />
                </Section>
                <Section id="projects">
                <Projects />
            </Section>
                <Section id="contact">
                    <Contact />
                </Section>

                </Wrapper>
                <Footer />
            </Body>
        </ThemeProvider>
    );
}

export default App;