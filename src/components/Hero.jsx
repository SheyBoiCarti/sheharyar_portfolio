
import styled from "styled-components";
import {Bio} from "../data/constants.js";
import TypeWriter from 'typewriter-effect';
import ProfileImage from "../images/profile.jpg";
import HeroBgAnimation from "./HeroBgAnimation/index.jsx"
import {Tilt} from "react-tilt";
import {motion} from "framer-motion"
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
} from "../utils/motion";
import StarCanvas from "../canvas/Stars";

const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    padding: 100px 30px;
    z-index: 1;
    border-bottom: 2px solid ${({ theme }) => theme.border};
    background-color: ${({ theme }) => theme.bg};
    overflow: hidden;

    @media (max-width: 960px) {
        padding: 66px 16px;
    }

    @media (max-width: 640px) {
        padding: 32px 16px;
    }
`;

const HeroInnerContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1100px;
    gap: 40px;

    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
    
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    gap: 6px;
    flex-direction: column;
    align-items: center;
  }
`;

const HeroRightContainer = styled.div`
  width: 100%;
  order: 2;
  display: flex;
  justify-content: end;
  
  @media (max-width: 960px) {
    order: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
  }
`;

const Title = styled.h1`
  font-family: "Orbitron", sans-serif;
  font-weight: 900;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-shadow: 0 0 10px ${({ theme }) => theme.primary}33;

  span {
    color: ${({ theme }) => theme.primary};
    text-shadow: 0 0 15px ${({ theme }) => theme.primary}aa;
  }

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

const TextLoop = styled.div`
  font-family: "JetBrains Mono", monospace;
  font-weight: 500;
  font-size: 24px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 40px;
  margin-top: 12px;
  margin-bottom: 20px;

  @media (max-width: 960px) {
    text-align: center;
    font-size: 20px;
  }
`;

const Span = styled.span`
  cursor: pointer;
  color: ${({ theme }) => theme.secondary};
  text-shadow: 0 0 10px ${({ theme }) => theme.secondary}88;
  font-weight: 700;
`;

const SubTitle = styled.p`
  font-family: "JetBrains Mono", monospace;
  font-size: 16px;
  line-height: 28px;
  margin-bottom: 36px;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 960px) {
    text-align: center;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  
  @media (max-width: 640px) {
    flex-direction: column;
    width: 100%;
  }
`;

const PrimaryButton = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  font-family: "Orbitron", sans-serif;
  font-weight: 900;
  font-size: 14px;
  letter-spacing: 2px;
  color: #0a0a0f;
  background: ${({ theme }) => theme.primary};
  padding: 14px 32px;
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 0 15px ${({ theme }) => theme.primary}66;
  text-align: center;

  &:hover {
    background: ${({ theme }) => theme.secondary};
    color: #0a0a0f;
    box-shadow: 0 0 25px ${({ theme }) => theme.secondary};
    transform: translateY(-2px);
  }
`;

const SecondaryButton = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  font-family: "Orbitron", sans-serif;
  font-weight: 900;
  font-size: 14px;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.primary};
  background: transparent;
  padding: 12px 30px;
  border: 2px solid ${({ theme }) => theme.primary};
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-align: center;

  &:hover {
    color: #0a0a0f;
    background: ${({ theme }) => theme.primary};
    box-shadow: 0 0 20px ${({ theme }) => theme.primary}88;
    transform: translateY(-2px);
  }
`;

const AvatarFrame = styled.div`
  position: relative;
  width: 100%;
  max-width: 360px;
  aspect-ratio: 1;
  background: ${({ theme }) => theme.card};
  padding: 10px;
  clip-path: polygon(0 40px, 40px 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%);
  border: 1px solid ${({ theme }) => theme.border};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 2px solid ${({ theme }) => theme.primary};
    clip-path: polygon(0 40px, 40px 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%);
    pointer-events: none;
    box-shadow: inset 0 0 20px ${({ theme }) => theme.primary}22;
  }
  
  &::after {
    content: 'SYS.LOC // SHEHARYAR';
    position: absolute;
    bottom: 12px;
    right: 48px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 9px;
    color: ${({ theme }) => theme.primary};
    letter-spacing: 1px;
    opacity: 0.8;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  clip-path: polygon(0 34px, 34px 0, 100% 0, 100% calc(100% - 34px), calc(100% - 34px) 100%, 0 100%);
  filter: grayscale(30%) contrast(110%);
  transition: all 0.5s ease-in-out;

  &:hover {
    filter: grayscale(0%) contrast(100%);
  }
`;

const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  opacity: 0.7;

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;

const Hero = () => {
    return (
        <div id="about">
            <HeroContainer className="cyber-grid">
                <HeroBg>
                    <StarCanvas/>
                    <HeroBgAnimation/>
                </HeroBg>

                <motion.div {...headContainerAnimation}>
                    <HeroInnerContainer>
                        <HeroLeftContainer>
                            <motion.div {...headTextAnimation}>
                                <Title>
                                    Hello, I am <br/> <span>{Bio.name}</span>
                                </Title>
                                <TextLoop>
                                    I am a
                                    <Span>
                                        <TypeWriter
                                            options={{
                                                strings: Bio.roles,
                                                autoStart: true,
                                                loop: true,
                                            }}
                                        />
                                    </Span>
                                </TextLoop>
                            </motion.div>

                            <motion.div {...headContentAnimation}>
                                <SubTitle>
                                    {Bio.description}
                                </SubTitle>
                            </motion.div>

                            <ButtonContainer>
                                <PrimaryButton href="#contact">Contact Me</PrimaryButton>
                            </ButtonContainer>
                        </HeroLeftContainer>
                        
                        <HeroRightContainer>
                            <Tilt options={{ max: 15, scale: 1.02 }}>
                                <AvatarFrame>
                                    <Img src={ProfileImage} alt="Profile image"/>
                                </AvatarFrame>
                            </Tilt>
                        </HeroRightContainer>
                    </HeroInnerContainer>
                </motion.div>
            </HeroContainer>
        </div>
    )
}

export default Hero;