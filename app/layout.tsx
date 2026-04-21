import type { Metadata } from "next";

import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Atulit Technology Pvt Ltd | Steel Fabrication in Bhilai",
    template: "%s | Atulit Technology Pvt Ltd",
  },
  description:
    "Atulit Technology Pvt Ltd delivers end-to-end steel fabrication for mining, agriculture, infrastructure, and heavy industrial execution from Bhilai, Chhattisgarh.",
  keywords: [
    "Atulit Technology",
    "steel fabrication Bhilai",
    "industrial fabrication Chhattisgarh",
    "structural steel fabrication",
    "heavy fabrication India",
  ],
  openGraph: {
    title: "Atulit Technology Pvt Ltd",
    description:
      "Engineering strength and precision-led steel fabrication for industrial project execution.",
    siteName: "Atulit Technology Pvt Ltd",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atulit Technology Pvt Ltd",
    description: "Precision-led steel fabrication for industrial and infrastructure projects.",
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
    >
      <body>
        <ThemeProvider>
          <div className="min-h-screen">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
