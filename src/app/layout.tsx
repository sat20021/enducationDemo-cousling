import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/ui/FloatingButtons";
import { SITE_NAME, TAGLINE } from "@/constants/data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} | Patna's Best Education Partner`,
    template: `%s | ${SITE_NAME}`,
  },
  description: TAGLINE,
  keywords: ["Education in Patna", "B.Ed admission Patna", "B.Pharma colleges Bihar", "GNM Nursing Patna", "Distance Education Bihar"],
  openGraph: {
    title: SITE_NAME,
    description: TAGLINE,
    images: ["/images/hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
