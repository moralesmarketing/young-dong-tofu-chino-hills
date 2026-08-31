import type { Metadata } from "next";
import { Noto_Serif_KR, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const display = Noto_Serif_KR({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Young Dong Tofu | Korean Soondubu in Chino Hills, CA",
  description:
    "Young Dong Tofu in Chino Hills, CA — Chino Hills' longtime Korean soondubu house. Sizzling soft tofu stews, BBQ short ribs, hot stone bibimbap, and generous banchan. 4.1 stars on Yelp, 992 reviews.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
