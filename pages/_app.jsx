/* eslint-disable react/jsx-props-no-spreading */
import { createGlobalStyle } from "styled-components";
import reset from "../styles/reset";

const GlobalStyle = createGlobalStyle`${reset}`;

const MyApp = ({ Component, pageProps }) => (
  <>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
);

export default MyApp;
