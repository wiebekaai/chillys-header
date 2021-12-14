import { useState } from "react";
import styled from "styled-components";
import useDocumentScrollThrottled from "../hooks/useDocumentScrollThrottled";

const BigContent = styled.main`
  height: 3000px;
`;

export default function Home() {
  const [shouldHideHeader, setShouldHideHeader] = useState(false);

  useDocumentScrollThrottled(({ previousScrollTop, currentScrollTop }) => {
    const isScrolledDown = currentScrollTop > previousScrollTop;
    const isMinimumScrolled = currentScrollTop > 3;
    setShouldHideHeader(isScrolledDown && isMinimumScrolled);
  });

  console.log({ shouldHideHeader });

  return (
    <>
      <BigContent />
    </>
  );
}
