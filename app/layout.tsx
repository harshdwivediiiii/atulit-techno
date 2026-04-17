import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { AnimatedBackground } from "@/components/animated-background";
import { Preloader } from "@/components/preloader";
import { Footer } from "@/components/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    default: "Atulit Technology Pvt Ltd | Steel Fabrication in Bhilai",
    template: "%s | Atulit Technology Pvt Ltd",
  },
  description:
    "Atulit Technology Pvt Ltd delivers structural steel fabrication, medium and heavy fabrication capability, and dependable industrial project execution from Bhilai, Chhattisgarh.",
  keywords: [
    "Atulit Technology",
    "steel fabrication Bhilai",
    "structural steel fabrication",
    "industrial fabrication Chhattisgarh",
    "medium heavy fabrication",
    "Bhilai steel fabricator",
  ],
  openGraph: {
    title: "Atulit Technology Pvt Ltd",
    description:
      "End-to-end steel fabrication solutions for industrial, infrastructure, agriculture, and mining applications.",
    siteName: "Atulit Technology Pvt Ltd",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atulit Technology Pvt Ltd",
    description:
      "Industrial steel fabrication partner based in Bhilai, Chhattisgarh.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className="h-full antialiased"
    >
      <body className={`min-h-full flex flex-col font-sans ${inter.variable}`}>
        <Preloader />
        <ThemeProvider>
          <AnimatedBackground />
          <div className="flex-1">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
