import { useState } from "react";
import styled from "styled-components";
import useDocumentScrollThrottled from "../hooks/useDocumentScrollThrottled";
import { LogoText as LogoTextIcon, Search as SearchIcon } from "./icons";

const Header = () => {
  const [show, setShow] = useState(false);

  useDocumentScrollThrottled(({ previousScrollTop, currentScrollTop }) => {
    const isScrolledDown = currentScrollTop > previousScrollTop;
    const isMinimumScrolled = currentScrollTop > 3;
    setShow(isScrolledDown && isMinimumScrolled);
  });

  return (
    <Wrapper>
      <Left>
        <HamburgerButton type="button">M</HamburgerButton>
      </Left>
      <Logo href="/">
        <LogoText />
      </Logo>
      <Right>
        <CircleButton>
          <Search />
          <Circle />
        </CircleButton>
        <CircleButton>
          <CartNumber>0</CartNumber>
          <Circle />
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
`;

const CircleButton = styled.button`
  position: relative;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;
`;

const Circle = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 50%;
  background-color: currentColor;
  opacity: 0.1;
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
