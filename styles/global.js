import { css } from "styled-components";

const global = css`
  html {
    --font-modern-era: Modern Era, -apple-system, BlinkMacSystemFont,
      avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, roboto,
      noto, arial, sans-serif;

    --transition: 0.25s ease;
    --transition-smooth: 0.5s cubic-bezier(0.4, 0, 0.2, 1);

    font-family: var(--font-modern-era);
  }

  body {
    overflow-y: scroll;

    &.scroll-lock {
      position: fixed;
    }
  }
`;

export default global;
