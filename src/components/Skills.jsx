
import styled from "styled-components";
import { skills } from "../data/constants";
import { Tilt } from "react-tilt";

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

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`;

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background-color: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.border};
  clip-path: polygon(0 20px, 20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%);
  padding: 24px;
  position: relative;
  transition: all 0.3s ease-in-out;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 1px solid transparent;
    clip-path: polygon(0 20px, 20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%);
    pointer-events: none;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 20px ${({ theme }) => theme.primary}33;
    &::before {
      border-color: ${({ theme }) => theme.primary};
    }
  }

  @media (max-width: 768px) {
    max-width: 400px;
  }

  @media (max-width: 500px) {
    max-width: 330px;
  }
`;

const SkillTitle = styled.h3`
  font-family: "Orbitron", sans-serif;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 20px;
  text-align: center;
  color: ${({ theme }) => theme.primary};
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 10px;
`;

const SkillItem = styled.div`
  font-family: "JetBrains Mono", monospace;
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  background-color: ${({ theme }) => theme.bgLight};
  border: 1px solid ${({ theme }) => theme.border};
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%);
  padding: 8px 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.2s ease-in-out;

  &:hover {
    border-color: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.secondary};
  }

  @media (max-width: 768px) {
    font-size: 13px;
    padding: 6px 10px;
  }
`;

const SkillImage = styled.img`
  width: 20px;
  height: 20px;
`;

const Skills = () => {
    return (
        <Container id="skills" className="cyber-grid">
            <Wrapper>
                <Title>Technical Matrix</Title>
                <Desc style={{ marginBottom: "40px" }}>
                    Expertise parameters and loaded subroutines mapped to developer environment.
                </Desc>

                <SkillsContainer>
                    {skills.map((skill, index) => (
                        <Tilt key={index} options={{ max: 10, scale: 1.01 }}>
                            <Skill>
                                <SkillTitle>{skill.title}</SkillTitle>
                                <SkillList>
                                    {skill.skills.map((item, index_x) => (
                                        <SkillItem key={`skill-x-${index_x}`}>
                                            <SkillImage src={item.image} />
                                            {item.name}
                                        </SkillItem>
                                    ))}
                                </SkillList>
                            </Skill>
                        </Tilt>
                    ))}
                </SkillsContainer>
            </Wrapper>
        </Container>
    );
};

export default Skills;