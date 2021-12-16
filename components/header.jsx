import { useState } from "react";
import styled from "styled-components";
import useDocumentScrollThrottled from "../hooks/useDocumentScrollThrottled";
import CircleButton from "./circle-button";
import { LogoText as LogoTextIcon, Search as SearchIcon } from "./icons";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useDocumentScrollThrottled(({ previousScrollTop, currentScrollTop }) => {
    const isScrolledDown = currentScrollTop > previousScrollTop;
    const isMinimumScrolled = currentScrollTop > 3;
    setIsScrolled(isMinimumScrolled);
  });

  return (
    <Wrapper>
      <Gradient show={!isScrolled} />
      <Left>
        <HamburgerButton type="button">M</HamburgerButton>
      </Left>
      <Logo href="/">
        <LogoText />
      </Logo>
      <Right>
        <CircleButton>
          <Search />
        </CircleButton>
        <CircleButton>
          <CartNumber>0</CartNumber>
        </CircleButton>
      </Right>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 30px;
  color: white;
  isolation: isolate;
`;

const Gradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 200%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.45), transparent);
  pointer-events: none;
  z-index: -1;
  will-change: opacity;
  --trans-smooth: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  transition: opacity var(--trans-smooth), visibility var(--trans-smooth);
  opacity: ${({ show }) => (show ? 1 : 0)};
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
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
  flex-basis: 50%;
  gap: 9px;
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  color: inherit;
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
`;

export default Header;
