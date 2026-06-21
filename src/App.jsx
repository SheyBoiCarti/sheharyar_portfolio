import styled, { ThemeProvider } from "styled-components";
import NavBar from "./components/NavBar";
import { darkTheme } from "./utils/Themes.js";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience.jsx";
import Education from "./components/Education.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { Analytics } from "@vercel/analytics/react";


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
      rgba(0, 255, 136, 0.04) 0%,
      rgba(10, 10, 15, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(10, 10, 15, 0) 50%,
      rgba(0, 212, 255, 0.04) 100%
    );
  width: 100%;
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
                <Section id="experience">
                    <Experience />
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
            <Analytics />
        </ThemeProvider>
    );
}

export default App;