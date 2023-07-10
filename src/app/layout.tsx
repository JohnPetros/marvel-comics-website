import { Providers } from "@/providers";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import "./styles/global.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Marvel",
  description: "House of ideas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
