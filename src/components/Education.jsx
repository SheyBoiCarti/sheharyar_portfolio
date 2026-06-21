
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styled from "styled-components";
import { education } from "../data/constants";
import EducationCard from "../cards/EducationCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 80px 0;
  border-bottom: 2px solid ${({ theme }) => theme.border};
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.h2`
  font-family: "Orbitron", sans-serif;
  font-size: 42px;
  text-align: center;
  font-weight: 900;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  text-shadow: 0 0 10px ${({ theme }) => theme.primary}33;
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.p`
  font-family: "JetBrains Mono", monospace;
  font-size: 16px;
  text-align: center;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Education = () => {
    return (
        <Container id="education" className="cyber-grid">
            <Wrapper>
                <Title>Education Logs</Title>
                <Desc style={{ marginBottom: "40px" }}>
                    Academic database and training credentials loaded into the main system.
                </Desc>

                <VerticalTimeline>
                    {education.map((education, index) => (
                        <EducationCard key={`education-${index}`} education={education} />
                    ))}
                </VerticalTimeline>

            </Wrapper>
        </Container>
    );
};

export default Education;