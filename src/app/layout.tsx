import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Navbar";
import Footer from "./components/Footer";
import Bottom from "./components/Bottom";

// Using optimized Google Fonts
const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "My Next.js App", // Customize the title for your app
  description: "A modern Next.js application with elegant design and responsiveness.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* You can include any additional meta tags or external scripts here */}
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Bottom />
      </body>
    </html>
  );
}
