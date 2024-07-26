import AppShell from "@/component/layouts/AppShell";
import Navbar from "@/component/layouts/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppShell>
    <Component {...pageProps} />
    </AppShell>
  );
}
