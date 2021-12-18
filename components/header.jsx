import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import useDocumentScrollThrottled from "../hooks/useDocumentScrollThrottled";
import { QUERIES } from "../styles/constants";
import CircleButton from "./circle-button";
import {
  LogoIcon as LogoIconBase,
  LogoText as LogoTextIcon,
  Search as SearchIcon,
} from "./icons";

const Header = () => {
  const [isScrolledPastMinimum, setIsScrolledPastMinimum] = useState(false);
  const [isScrolledUp, setIsScrolledUp] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  useDocumentScrollThrottled(({ previousScrollTop, currentScrollTop }) => {
    setIsScrolledPastMinimum(currentScrollTop > 3);
    setIsScrolledUp(currentScrollTop < previousScrollTop);
  });

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
    <Wrapper>
      <Gradient show={!isScrolledPastMinimum} />
      <TopBanner />
      <Content
        show={!isScrolledPastMinimum || isScrolledUp}
        theme={
          isScrolledPastMinimum && isScrolledUp
            ? {
                background: "#fff",
                color: "#000",
                borderBottom: true,
              }
            : { shiftUp: true }
        }
      >
        <Left>
          <DesktopNav>
            {[
              { href: "/", label: "Shop" },
              { href: "/", label: "Mission" },
              { href: "/", label: "Co-brand" },
            ].map(renderLink)}
          </DesktopNav>
          <HamburgerButton type="button">M</HamburgerButton>
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
          <CircleButton>
            <CartNumber>0</CartNumber>
          </CircleButton>
        </Right>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  position: fixed;
  width: 100%;
  isolation: isolate;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme: { color = "white" } }) => color};
  padding: 30px;
  max-width: 1800px;
  margin: 0 auto;
  transform: ${({ show, theme: { shiftUp } }) => {
    if (!show) return "translateY(-100%)";

    if (shiftUp) return "translateY(15px)";

    return "translateY(0%)";
  }};

  z-index: 10;
  background-color: ${({ theme: { background = "transparent" } }) =>
    background};

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
    transition: opacity 0.25s ease;
  }

  will-change: transform;
  transition: transform var(--trans-smooth), background-color 0.25s ease,
    color 0.25s ease;

  @media ${QUERIES.tabledAndUp} {
    padding: 30px 5%;
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
  transition: opacity var(--trans-smooth), visibility var(--trans-smooth);
`;

const TopBanner = styled.div`
  position: relative;
  height: 33px;
  background: linear-gradient(150deg, #e85d60, #216dfb);
  z-index: 20;
`;

const Search = styled(SearchIcon)`
  width: 14px;
  height: 14px;
`;

const CartNumber = styled.span`
  font-size: 12px;
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

const HamburgerButton = styled.button`
  border-radius: 50%;
  background: white;
  width: 40px;
  height: 40px;
  filter: drop-shadow(4px 4px 10px hsl(0deg 0% 0% / 0.15));

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
  transition: opacity 0.25s ease;
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

  @media ${QUERIES.tabledAndUp} {
    display: flex;
  }
`;

export default Header;
