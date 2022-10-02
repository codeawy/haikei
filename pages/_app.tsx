import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { ChakraProvider, createStandaloneToast } from "@chakra-ui/react";

function MyApp({ Component, pageProps }: AppProps) {
  const { ToastContainer } = createStandaloneToast();

  return (
    <ThemeProvider>
      <ChakraProvider>
        <Component {...pageProps} />
        <ToastContainer />
      </ChakraProvider>
    </ThemeProvider>
  );
}

export default MyApp;
