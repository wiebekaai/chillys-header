import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import { QUERIES } from "../styles/constants";
import Overlay from "./overlay";
import CircleButton from "./circle-button";
import HamburgerButtonOriginal from "./hamburger-button";
import {
  LogoIcon as LogoIconBase,
  LogoText as LogoTextIcon,
  Search as SearchIcon,
} from "./icons";
import Sidebar from "./sidebar";
import useScroll from "../hooks/useScroll";

const THEMES = {
  DEFAULT: {
    background: "none",
    color: "white",
    shiftDown: true,
  },
  SCROLLED: {
    background: "#fff",
    color: "#000",
    borderBottom: true,
  },
};

const Header = () => {
  const [isScrolledPastMinimum, setIsScrolledPastMinimum] = useState(false);
  const [isScrolledUp, setIsScrolledUp] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const isScrolled = isScrolledPastMinimum && isScrolledUp;
  const theme =
    isScrolled || (isCartOpen && isScrolledPastMinimum)
      ? THEMES.SCROLLED
      : THEMES.DEFAULT;

  useScroll(
    ({ previousScrollTop, currentScrollTop }) => {
      setIsScrolledPastMinimum(currentScrollTop > 3);
      setIsScrolledUp(currentScrollTop < previousScrollTop);
    },
    { lock: isCartOpen }
  );

  const mouseEnter = setHoveredLink;
  const mouseLeave = () => setHoveredLink(null);

  const renderLink = ({ href, label }) => (
    <Link key={label} href={href} passHref>
      <DesktopNavLink
        onMouseLeave={mouseLeave}
        onMouseEnter={() => mouseEnter(label)}
        hover={hoveredLink !== null}
        hoverActive={hoveredLink === label}
      >
        {label}
      </DesktopNavLink>
    </Link>
  );

  return (
    <>
      <Wrapper>
        <Gradient show={!isScrolledPastMinimum} />
        <TopBanner />
        <Main show={!isScrolledPastMinimum || isScrolledUp} theme={theme}>
          <Content>
            <Left>
              <DesktopNav>
                {[
                  { href: "/", label: "Shop" },
                  { href: "/", label: "Mission" },
                  { href: "/", label: "Co-brand" },
                ].map(renderLink)}
              </DesktopNav>
              <HamburgerButton
                open={hamburgerOpen}
                onClick={() => setHamburgerOpen(!hamburgerOpen)}
              />
            </Left>
            <Link href="/" passHref>
              <Logo>
                <LogoIcon />
                <LogoText />
              </Logo>
            </Link>
            <Right>
              <DesktopNav>
                {[{ href: "/", label: "Refer a friend" }].map(renderLink)}
              </DesktopNav>
              <DesktopSearchButton>
                <DesktopSearch />
              </DesktopSearchButton>
              <SearchButton>
                <Search />
              </SearchButton>
              <CircleButton onClick={() => setIsCartOpen(true)}>
                <CartNumber>0</CartNumber>
              </CircleButton>
            </Right>
          </Content>
        </Main>
      </Wrapper>
      <Overlay show={isCartOpen}>
        <Sidebar>
          {isCartOpen && (
            <div style={{ padding: "50px" }}>
              Cart content!{" "}
              <button
                type="button"
                style={{ fontWeight: "bold" }}
                onClick={() => setIsCartOpen(false)}
              >
                (Close)
              </button>
            </div>
          )}
        </Sidebar>
      </Overlay>
    </>
  );
};

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  isolation: isolate;
`;

const Main = styled.div`
  transform: ${({ show, theme: { shiftDown } }) => {
    if (!show) return "translateY(-100%)";

    if (shiftDown) return "translateY(25px)";

    return "translateY(0%)";
  }};

  /** Transitioned border-bottom */
  &:after {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 1px;
    opacity: ${({ theme: { borderBottom } }) => (borderBottom ? "0.1" : "0")};
    background-color: currentColor;
    transition: opacity var(--transition);
  }

  z-index: 10;
  background-color: ${({ theme: { background } }) => background};
  will-change: transform;
  transition: transform var(--transition-smooth),
    background-color var(--transition), color var(--transition);
  color: ${({ theme: { color } }) => color};
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 30px;
  max-width: 1800px;
  margin: 0 auto;

  @media ${QUERIES.tabledAndUp} {
    padding: 20px 4.5%;
  }
`;

const Gradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 200%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.45), transparent);
  pointer-events: none;
  z-index: 0;

  opacity: ${({ show }) => (show ? 1 : 0)};
  visibility: ${({ show }) => (show ? "visible" : "hidden")};

  will-change: opacity;
  transition: opacity var(--transition-smooth),
    visibility var(--transition-smooth);
`;

const TopBanner = styled.div`
  position: relative;
  height: 30px;
  background: linear-gradient(150deg, #e85d60, #216dfb);
  z-index: 20;
`;

const Search = styled(SearchIcon)`
  width: 14px;
  height: 14px;
`;

const CartNumber = styled.span`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28571;
  opacity: 0.8;
  padding-top: 0.25em;
`;

const Left = styled.div`
  flex-basis: 50%;
`;

const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-basis: 50%;
  gap: 9px;

  @media ${QUERIES.tabledAndUp} {
    gap: 12px;
    padding-right: 15px;
  }
`;

const SearchButton = styled(CircleButton)`
  @media ${QUERIES.tabledAndUp} {
    display: none;
  }
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  color: inherit;
  gap: 6px;
`;

const LogoText = styled(LogoTextIcon)`
  width: 92px;
  height: 34px;
`;

const HamburgerButton = styled(HamburgerButtonOriginal)`
  color: black;

  @media ${QUERIES.tabledAndUp} {
    display: none;
  }
`;

const LogoIcon = styled(LogoIconBase)`
  display: none;
  width: 21px;
  height: 34px;

  @media ${QUERIES.tabledAndUp} {
    display: inline-block;
  }
`;

const DesktopNav = styled.nav`
  display: none;
  align-items: center;

  @media ${QUERIES.tabledAndUp} {
    display: flex;
  }
`;

const DesktopNavLink = styled.a`
  text-transform: uppercase;
  padding: 15px;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: 0.05em;
  color: inherit;
  text-decoration: none;

  opacity: ${({ hover, hoverActive }) => (hover && !hoverActive ? 0.3 : 1)};

  will-change: opacity;
  transition: opacity var(--transition);
`;

const DesktopSearch = styled(SearchIcon)`
  width: 18px;
  height: 18px;
`;

const DesktopSearchButton = styled.button`
  display: none;
  color: inherit;
  padding: 15px;
  justify-content: center;
  align-items: center;

  transition: opacity var(--transition);

  @media (hover: hover) {
    &:hover {
      opacity: 0.65;
    }
  }

  @media ${QUERIES.tabledAndUp} {
    display: flex;
  }
`;

export default Header;
