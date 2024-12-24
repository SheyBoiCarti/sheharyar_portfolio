// Navbar.jsx
import { useState, useEffect } from "react";
import { MenuRounded } from "@mui/icons-material";
import styled from "styled-components";

const NavbarContainer = styled.nav`
    background-color: ${({ theme }) => theme.bg};
    height: 80px;
    display: flex;
    align-items: center;
    padding: 0 24px;
    position: sticky;
    top: 0;
    z-index: 10;
    color: white;
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
        color: ${({ theme }) => theme.text_primary};
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
    padding: 12px 40px 24px 40px;
    background: ${({ theme }) => theme.card_light + 99};
    position: absolute;
    top: 80px;
    left: 0;
    transition: all 0.6s ease-in-out;
    transform: ${({ isOpen }) => (isOpen ? "translateY(0)" : "translateY(-100%)")};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
    z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
`;

const NavLogo = styled.a`
    text-decoration: none;
    color: inherit;
    font-size: 1.5rem;
    font-weight: bold;
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
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    &:hover {
        color: ${({ theme }) => theme.primary};
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
                    <NavLink href="#projects" onClick={handleClick}>Projects</NavLink>
                    <NavLink href="#education" onClick={handleClick}>Education</NavLink>
                    <NavLink href="#contact" onClick={handleClick}>Contact</NavLink>
                </MobileMenu>
            )}
        </NavbarContainer>
    );
};

export default Navbar;