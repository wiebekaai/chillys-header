import { DialogContent, DialogOverlay } from "@reach/dialog";
import styled from "styled-components";
import { QUERIES } from "../styles/constants";

const Cart = (props) => {
  const { onDismiss } = props;

  return (
    <Wrapper {...props}>
      <Space type="button" onClick={onDismiss}>
        <CloseLabel>Close</CloseLabel>
      </Space>
      <Content>Cart</Content>
    </Wrapper>
  );
};

const Wrapper = styled(DialogOverlay)`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  background: hsl(0deg 0% 0% / 0.75);
  width: 100%;
  height: 100%;
`;

const Space = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  color: white;
`;

const CloseLabel = styled.span`
  display: none;

  @media ${QUERIES.tabledAndUp} {
    display: block;
  }
`;

const Content = styled(DialogContent)`
  background: white;
  width: calc(100% - 50px);
  max-width: 700px;
  padding: 30px;

  @media ${QUERIES.tabledAndUp} {
    padding: 60px 80px;
  }
`;

export default Cart;
