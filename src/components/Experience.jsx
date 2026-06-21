import styled from "styled-components";
import { experiences } from "../data/constants";
import ExperienceCard from "../cards/ExperienceCard";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 80px 16px;
    border-bottom: 2px solid ${({ theme }) => theme.border};
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 900px;
    gap: 12px;
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
    margin-bottom: 40px;

    @media (max-width: 768px) {
        font-size: 14px;
    }
`;

const CardsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
`;

const Experience = () => {
    return (
        <Container id="experience" className="cyber-grid">
            <Wrapper>
                <Title>Career Timeline</Title>
                <Desc>
                    Documented professional logs, developer contributions, and system milestones.
                </Desc>

                <CardsWrapper>
                    {experiences.map((experience, index) => (
                        <ExperienceCard
                            key={`experience-${index}`}
                            experience={experience}
                        />
                    ))}
                </CardsWrapper>
            </Wrapper>
        </Container>
    );
};

export default Experience;

