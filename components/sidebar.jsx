import { useTransition, animated } from "@react-spring/web";
import styled from "styled-components";

const Sidebar = ({ children }) => {
  const slideFromRight = useTransition(children, {
    from: { transform: "translateX(100%)" },
    enter: { transform: "translateX(0%)" },
    leave: { transform: "translateX(100%)" },
  });

  return slideFromRight(
    (style, item) => item && <Wrapper style={style}>{item}</Wrapper>
  );
};

const AnimatedDiv = animated.div;
const Wrapper = styled(AnimatedDiv)`
  position: absolute;
  width: calc(100% - 50px);
  background: white;
  height: 100%;
  top: 0;
  right: 0;
  max-width: 720px;
`;

export default Sidebar;
