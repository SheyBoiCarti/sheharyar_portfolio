import styled from "styled-components";
const FooterContainer = styled.div`
  width: 100%;
  padding: 3rem 0;
  display: flex;
  justify-content: center;
  z-index: 10;
  position: relative;
  border-top: 2px solid ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.card};
`;
const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;
const Logo = styled.div`
  font-family: "Orbitron", sans-serif;
  font-weight: 900;
  font-size: 20px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.primary};
  text-shadow: 0 0 10px ${({ theme }) => theme.primary}33;
`;


const Copyright = styled.p`
  font-family: "JetBrains Mono", monospace;
  margin-top: 1.5rem;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <Logo>Sheharyar Nadeem</Logo>
                <Copyright>&copy; {new Date().getFullYear()} Sheharyar Nadeem. SECURE_CONNECTION // ALL RIGHTS RESERVED.</Copyright>
            </FooterWrapper>
        </FooterContainer>
    );
};

export default Footer;