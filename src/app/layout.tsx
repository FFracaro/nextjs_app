import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import ThemeProvider from "@/context/theme-context";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>
        <ThemeProvider>
          <div className="container">
            <Navbar/>
            {children}
            <Footer/>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
