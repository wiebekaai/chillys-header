import styled from "styled-components";

const HamburgerButton = (props) => (
  <Wrapper {...props}>
    <UpperBun />
    <LowerBun />
  </Wrapper>
);

const Wrapper = styled.button`
  --stroke-width: 1px;
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
  height: 5%;
  width: calc(100% - calc(var(--padding) * 2));
  border-top: var(--stroke-width) solid currentColor;
`;

const UpperBun = styled(Bun)`
  transform: translateY(calc(calc(var(--bun-distance) / 2) * -1));
`;

const LowerBun = styled(Bun)`
  transform: translateY(calc(var(--bun-distance) / 2));
`;

export default HamburgerButton;
