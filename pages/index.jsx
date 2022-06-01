import Image from "next/image";
import styled from "styled-components";
import Header from "../components/header";
import { QUERIES } from "../styles/constants";

const BigContent = styled.main`
  height: 3000px;
`;

export default function Home() {
  return (
    <>
      <Header />
      <BigContent id="content">
        {/* Copy pasted image from original */}
        <MobileImageWrapper>
          <MobileImageWrapper
            width={1080}
            height={1920}
            src="/images/portrait.png"
            layout="responsive"
          />
        </MobileImageWrapper>
        <TabletImageWrapper>
          <Image
            width={1920}
            height={1080}
            src="/images/landscape.png"
            layout="responsive"
          />
        </TabletImageWrapper>
      </BigContent>
    </>
  );
}

const MobileImageWrapper = styled.div`
  position: relative;

  @media ${QUERIES.tabledAndUp} {
    display: none;
  }
`;

const TabletImageWrapper = styled.div`
  position: relative;
  display: none;

  @media ${QUERIES.tabledAndUp} {
    display: block;
  }
`;
