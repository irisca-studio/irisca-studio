import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Irisca Studio | Anime Artist & Digital Illustrator",

  description:
    "Professional Anime Artist creating original characters, VTuber art, wallpapers, fan art, illustrations and commission artwork.",

  keywords: [
    "Irisca Studio",
    "Anime Artist",
    "Digital Artist",
    "Anime Illustration",
    "VTuber Artist",
    "Character Design",
    "Wallpaper Artist",
    "Commission Artist",
    "Fan Art",
  ],

  authors: [{ name: "Irisca Studio" }],

  creator: "Irisca Studio",

  openGraph: {
    title: "Irisca Studio",
    description:
      "Professional Anime Artist creating illustrations, wallpapers and original artwork.",
    url: "https://irisca-studio.vercel.app",
    siteName: "Irisca Studio",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Irisca Studio",
    description:
      "Professional Anime Artist creating illustrations and commission artwork.",
    images: ["/logo.png"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
