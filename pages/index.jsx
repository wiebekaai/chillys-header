import styled from "styled-components";
import Header from "../components/header";

const BigContent = styled.main`
  height: 3000px;
  background: darkgoldenrod;
`;

export default function Home() {
  return (
    <>
      <Header />
      <BigContent />
    </>
  );
}
