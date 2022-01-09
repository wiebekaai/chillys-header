import styled from "styled-components";

const HamburgerButton = (props) => {
  const { open = false } = props;
  return (
    <Wrapper {...props}>
      <UpperBun $rotate={open} />
      <LowerBun $rotate={open} />
    </Wrapper>
  );
};

const Wrapper = styled.button`
  --bun-distance: 4px;
  --padding: 14px;

  border-radius: 50%;
  background: white;
  width: 40px;
  height: 40px;
  padding: var(--padding);
  filter: drop-shadow(4px 4px 10px hsl(0deg 0% 0% / 0.15));
`;

const Bun = styled.span`
  position: absolute;
  display: block;
  width: calc(40px - calc(var(--padding) * 2));
  border-top: 1px solid currentColor;

  will-change: transform;
  transition: transform var(--transition-smooth);
`;

const UpperBun = styled(Bun)`
  transform: ${({ $rotate }) => {
    if ($rotate) {
      return "translateY(0) rotate(45deg)";
    }

    return "translateY(calc(calc(var(--bun-distance) / 2) * -1)) rotate(0deg)";
  }};
`;

const LowerBun = styled(Bun)`
  transform: ${({ $rotate }) => {
    if ($rotate) {
      return "translateY(0) rotate(-45deg)";
    }

    return "translateY(calc(var(--bun-distance) / 2)) rotate(0deg)";
  }};
`;

export default HamburgerButton;
