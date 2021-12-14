/* eslint-disable react/jsx-props-no-spreading */
import { createGlobalStyle } from "styled-components";
import fonts from "../styles/fonts";
import global from "../styles/global";
import reset from "../styles/reset";

const GlobalStyle = createGlobalStyle`
${reset}
${fonts}
${global}
`;

const MyApp = ({ Component, pageProps }) => (
  <>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
);

export default MyApp;
