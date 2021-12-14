import { css } from "styled-components";

const fonts = css`
  @font-face {
    font-family: Modern Era;
    font-display: fallback;
    src: url("/fonts/modern-era-regular-web.woff2");
    font-weight: 400;
  }

  @font-face {
    font-family: Modern Era;
    font-display: fallback;
    src: url("/fonts/modern-era-medium-web.woff2");
    font-weight: 500;
  }
`;

export default fonts;
