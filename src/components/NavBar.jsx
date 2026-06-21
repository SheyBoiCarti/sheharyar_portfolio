// Navbar.jsx
import { useState, useEffect } from "react";
import { MenuRounded } from "@mui/icons-material";
import styled from "styled-components";

const NavbarContainer = styled.nav`
    background-color: ${({ theme }) => theme.bg}D9;
    backdrop-filter: blur(12px);
    border-bottom: 2px solid ${({ theme }) => theme.border};
    height: 80px;
    display: flex;
    align-items: center;
    padding: 0 24px;
    position: sticky;
    top: 0;
    z-index: 10;
    color: white;
    font-family: "Orbitron", sans-serif;
`;

const LogoContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 850px) {
        display: flex;
        align-items: center;
        font-size: 24px;
        cursor: pointer;
        margin-left: auto;
        color: ${({ theme }) => theme.primary};
        svg {
            width: 32px;
            height: 32px;
        }
    }
`;

const MobileMenu = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 16px;
    padding: 24px 40px;
    background: ${({ theme }) => theme.card}E6;
    backdrop-filter: blur(10px);
    position: absolute;
    top: 80px;
    left: 0;
    transition: all 0.3s ease-in-out;
    transform: ${({ isOpen }) => (isOpen ? "translateY(0)" : "translateY(-100%)")};
    border-bottom: 2px solid ${({ theme }) => theme.primary};
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
    z-index: 1000;
`;

const NavLogo = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.primary};
    font-size: 1.5rem;
    font-weight: 900;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-shadow: 0 0 8px ${({ theme }) => theme.primary}66;
    transition: all 0.3s ease-in-out;
    &:hover {
        color: ${({ theme }) => theme.secondary};
        text-shadow: 0 0 12px ${({ theme }) => theme.secondary}99;
    }
`;

const NavItems = styled.ul`
    display: flex;
    align-items: center;
    gap: 32px;
    list-style: none;
    margin-right: 24px;

    @media screen and (max-width: 850px) {
        display: none;
    }
`;

const NavLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    font-size: 0.9rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    position: relative;
    
    &:hover {
        color: ${({ theme }) => theme.primary};
        text-shadow: 0 0 8px ${({ theme }) => theme.primary};
    }

    &::after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        bottom: -6px;
        left: 0;
        background-color: ${({ theme }) => theme.primary};
        transition: width 0.2s ease-in-out;
        box-shadow: 0 0 8px ${({ theme }) => theme.primary};
    }

    &:hover::after {
        width: 100%;
    }
`;

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (e) => {
        const target = e.target.getAttribute('href');
        const element = document.querySelector(target);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        if (isOpen) {
            setIsOpen(false);
        }
        e.preventDefault();
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 850 && isOpen) {
                setIsOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [isOpen]);

    return (
        <NavbarContainer>
            <LogoContainer>
                <NavLogo href="#" onClick={handleClick}>Sheharyar</NavLogo>
            </LogoContainer>

            <NavItems>
                <NavLink href="#about" onClick={handleClick}>About</NavLink>
                <NavLink href="#skills" onClick={handleClick}>Skills</NavLink>
                <NavLink href="#experience" onClick={handleClick}>Experience</NavLink>
                <NavLink href="#projects" onClick={handleClick}>Projects</NavLink>
                <NavLink href="#education" onClick={handleClick}>Education</NavLink>
                <NavLink href="#contact" onClick={handleClick}>Contact</NavLink>
            </NavItems>

            <MobileIcon onClick={() => setIsOpen(!isOpen)}>
                <MenuRounded />
            </MobileIcon>

            {isOpen && (
                <MobileMenu isOpen={isOpen}>
                    <NavLink href="#about" onClick={handleClick}>About</NavLink>
                    <NavLink href="#skills" onClick={handleClick}>Skills</NavLink>
                    <NavLink href="#experience" onClick={handleClick}>Experience</NavLink>
                    <NavLink href="#projects" onClick={handleClick}>Projects</NavLink>
                    <NavLink href="#education" onClick={handleClick}>Education</NavLink>
                    <NavLink href="#contact" onClick={handleClick}>Contact</NavLink>
                </MobileMenu>
            )}
        </NavbarContainer>
    );
};

export default Navbar;