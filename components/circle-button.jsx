/* eslint-disable react/jsx-props-no-spreading */
import styled from "styled-components";

const CircleButton = (props) => {
  const { children } = props;

  return (
    <Wrapper {...props}>
      <Circle />
      <Content>{children}</Content>
    </Wrapper>
  );
};

const Wrapper = styled.button`
  position: relative;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;
  isolation: isolate;
`;

const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
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
  transition: opacity var(--transition);

  @media (hover: hover) {
    ${Wrapper}:hover & {
      opacity: 0.2;
    }
  }
`;

export default CircleButton;
