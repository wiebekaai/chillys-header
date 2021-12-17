import Link from "next/link";
import React, { useMemo, useState } from "react";
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  useDocumentScrollThrottled(({ previousScrollTop, currentScrollTop }) => {
    const isScrolledDown = currentScrollTop > previousScrollTop;
    const isMinimumScrolled = currentScrollTop > 3;
    setIsScrolled(isMinimumScrolled);
  });

  const mouseEnter = setHoveredLink;
  const mouseLeave = () => setHoveredLink(null);

  const renderLink = ({ href, label }) => (
    <Link href={href} passHref>
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
      <Gradient show={!isScrolled} />
      <TopBanner />
      <Content>
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
        <Logo href="/">
          <LogoIcon />
          <LogoText />
        </Logo>
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
  color: white;
  padding: 30px;
  max-width: 1800px;
  margin: 0 auto;

  @media ${QUERIES.tabledAndUp} {
    padding: 40px 5% 30px;
  }
`;

const Gradient = styled.div`
  --trans-smooth: 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 200%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.45), transparent);
  pointer-events: none;
  z-index: -1;

  opacity: ${({ show }) => (show ? 1 : 0)};
  visibility: ${({ show }) => (show ? "visible" : "hidden")};

  will-change: opacity;
  transition: opacity var(--trans-smooth), visibility var(--trans-smooth);
`;

const TopBanner = styled.div`
  height: 33px;
  background: linear-gradient(150deg, #e85d60, #216dfb);
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
