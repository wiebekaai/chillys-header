import styled from "styled-components";

const Overlay = ({ children, onClose, show }) => (
  <Wrapper $show={show}>
    <Curtain onClick={() => onClose()} $show={show} />
    <Content>{children}</Content>
  </Wrapper>
);

const Wrapper = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: ${({ $show }) => ($show ? "100%" : "0")};
  visibility: ${({ $show }) => ($show ? "visible" : "hidden")};
  transition-delay: ${({ $show }) => ($show ? "0s" : "0.5s")};
`;

const Curtain = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: hsl(0deg 0% 0% / 0.75);
  opacity: ${({ $show }) => ($show ? "1" : "0")};
  will-change: opacity;
  transition: opacity var(--transition-smooth);
`;

const Content = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;

  > * {
    pointer-events: auto;
  }
`;

export default Overlay;
