import { UiContextProvider } from "../lib/contexts/UiContext";
import "../styles/globals.css";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  return (
    <UiContextProvider>
      <Toaster />
      <Component {...pageProps} />
    </UiContextProvider>
  );
}

export default MyApp;
