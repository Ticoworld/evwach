import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: {
    default: "EVWACH International",
    template: "%s | EVWACH International",
  },
  description:
    "EVWACH International is a community-based, cross-cutting NGO established in 2015, promoting the rights and wellbeing of vulnerable women and children through advocacy, education, public health awareness, rehabilitation, and field-based monitoring.",
  applicationName: "EVWACH International",
  keywords: [
    "EVWACH International",
    "nonprofit",
    "NGO",
    "cross-cutting NGO",
    "women and children",
    "pregnant and nursing mothers",
    "community health",
    "public health awareness",
    "family planning",
    "malaria prevention",
    "field-based monitoring",
    "advocacy",
    "rehabilitation",
  ],
  authors: [{ name: "EVWACH International" }],
  openGraph: {
    title: "EVWACH International",
    description:
      "A community-based, cross-cutting NGO supporting vulnerable women, children, pregnant and nursing mothers through advocacy, education, public health awareness, rehabilitation, and field-based monitoring.",
    siteName: "EVWACH International",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "EVWACH International",
    description:
      "A community-based, cross-cutting NGO supporting vulnerable women, children, pregnant and nursing mothers through advocacy, education, public health awareness, rehabilitation, and field-based monitoring.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
