import styled from "styled-components";

// const Sidebar = ({ children }) => {
//   const slideFromRight = useTransition(<>{children}</>, {
//     from: { transform: "translateX(100%)" },
//     enter: { transform: "translateX(0%)" },
//     leave: { transform: "translateX(100%)" },
//   });

//   return slideFromRight((style, item) => (
//     <SWrapper style={style}>{children}</SWrapper>
//   ));
// };

const Overlay = ({ children }) => (
  <Wrapper $show={children}>
    <Curtain $show={children} />
    <Content>{children}</Content>
  </Wrapper>
);

const Wrapper = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  visibility: ${({ $show }) => ($show ? "visible" : "hidden")};
  isolation: isolate;
  transition-delay: ${({ $show }) => ($show ? "0s" : "0.5s")};
`;

const Curtain = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: hsl(0deg 0% 0% / 0.75);
  opacity: ${({ $show }) => ($show ? "1" : "0")};
  transition: opacity var(--transition-smooth);
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export default Overlay;
