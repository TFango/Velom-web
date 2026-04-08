import type { Metadata } from "next";
import Header from "@/components/Header";
import Cart from "@/components/Cart";
import Menu from "@/components/Menu";
import { CartProvider } from "@/context/CartContext";
import { MenuProvider } from "@/context/MenuContext";
import { IBM_Plex_Serif, Outfit } from "next/font/google";
import "./globals.css";

const ibmPlexSerif = IBM_Plex_Serif({
  variable: "--font-ibm-plex-serif",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "VELOM — Moda consciente",
  description: "Tienda de ropa VELOM. Remeras, pantalones y camperas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${ibmPlexSerif.variable} ${outfit.variable}`}>
      <body>
        <CartProvider>
          <MenuProvider>
            <Header />
            <Cart />
            <Menu />
            {children}
          </MenuProvider>
        </CartProvider>
      </body>
    </html>
  );
}
