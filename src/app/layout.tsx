import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import AppLoaderWrapper from "@/components/AppLoaderWrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const roboto_mono = Roboto_Mono({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-roboto-mono",
})

export const metadata: Metadata = {
  title: "Kingsley Ukeje - Portfolio",
  description: "Personal portfolio and writings of Kingsley Ukeje",
  openGraph: {
    title: "Kingsley Ukeje - Portfolio",
    description: "Personal portfolio and writings of Kingsley Ukeje",
    url: "https://kingsleyukeje.com",
    siteName: "Kingsley Ukeje Portfolio",
    images: [
      {
        url: "/assets/og_img.png",
        width: 1200,
        height: 630,
        alt: "Kingsley Ukeje - UX Engineer & Product Designer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kingsley Ukeje - Portfolio",
    description: "Personal portfolio and writings of Kingsley Ukeje",
    images: ["/assets/og_img.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${inter.variable}`}>
      <body className="bg-white text-black dark:bg-dark-bg dark:text-white antialiased transition-colors duration-500">
        <AppLoaderWrapper>{children}</AppLoaderWrapper>
      </body>
    </html>
  );
}
