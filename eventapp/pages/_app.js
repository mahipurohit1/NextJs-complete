import MainContent from "@/components/MainContent";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <MainContent>
      <Component {...pageProps} />
    </MainContent>
  );
}
