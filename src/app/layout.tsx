/** @format */

import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import AppLoaderWrapper from "@/components/AppLoaderWrapper";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const roboto_mono = Roboto_Mono({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "Kingsley Ukeje",
  description:
    "Kingsley is a multifaceted product leader and AI advocate on a mission to build inclusive technology that scales businesses and uplifts communities. He's been a founding member of multiple startups and is currently building Pivot Labs.",
  openGraph: {
    title: "Kingsley Ukeje",
    description:
      "Kingsley is a multifaceted product leader and AI advocate on a mission to build inclusive technology that scales businesses and uplifts communities. He's been a founding member of multiple startups and is currently building Pivot Labs.",
    url: "https://kingsleyukeje.com",
    siteName: "Kingsley Ukeje",
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
    title: "Kingsley Ukeje",
    description:
      "Kingsley is a multifaceted product leader and AI advocate on a mission to build inclusive technology that scales businesses and uplifts communities. He's been a founding member of multiple startups and is currently building Pivot Labs.",
    images: ["/assets/og_img.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto_mono.variable}`}>
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Kingsley Ukeje",
            url: "https://kingsleyukeje.com",
            image: [
              "https://res.cloudinary.com/dpii7ocju/image/upload/q_auto/f_auto/v1781080750/061A2098_zi6gtd.jpg",
              "https://res.cloudinary.com/dpii7ocju/image/upload/q_auto/f_auto/v1781080856/Passport_lacmm9.png",
              "https://res.cloudinary.com/dpii7ocju/image/upload/q_auto/f_auto/v1781080944/WUDAFRICA-731774_zq0bnu.jpg",
              "https://res.cloudinary.com/dpii7ocju/image/upload/q_auto/f_auto/v1781080944/WUDAFRICA-731774_zq0bnu.jpg",
              "https://res.cloudinary.com/dpii7ocju/image/upload/q_auto/f_auto/v1781081118/0G7A8013_fog8wr.jpg",
            ],
            description:
              "Kingsley is a multifaceted product leader and AI advocate on a mission to build inclusive technology that scales businesses and uplifts communities. He's been a founding member of multiple startups and is currently building Pivot Labs.",
            jobTitle:
              "Product Designer & Advocate for Human-Centered AI Design",
            worksFor: [
              {
                "@type": "Organization",
                name: "Eze (YC W20)",
                url: "https://www.ezewholesale.com",
              },
              {
                "@type": "Organization",
                name: "Carrot",
                url: "https://www.carrotcredit.com",
              },
              {
                "@type": "Organization",
                name: "Hotels.ng",
                url: "https://hotels.ng",
              },
              {
                "@type": "Organization",
                name: "Space",
                website: "",
              },
            ],
            sameAs: [
              "https://x.com/kingsleyukeje_",
              "https://www.linkedin.com/in/kingsleyukeje",
              "https://www.youtube.com/@kingsleyukeje",
              "https://kingsleyukeje.substack.com",
              "https://www.are.na/kingsley-ukeje/channels",
              "https://linktr.ee/kingsleyukeje",
            ],
            subjectOf: [
              {
                "@type": "Article",
                url: "https://www.vanguardngr.com/2023/12/kingsley-ukeje-empowering-the-next-generation-of-african-tech-talent",
              },
              {
                "@type": "Article",
                url: "https://www.naijanews.com/2024/05/06/from-market-stalls-to-silicon-valley-how-the-igbo-apprenticeship-system-can-fuel-the-next-generation-of-tech-innovators-kingsley-ukeje",
              },
            ],
          }),
        }}
      />
      <body className="bg-white text-black dark:bg-dark-bg dark:text-white antialiased transition-colors duration-500">
        <AppLoaderWrapper>{children}</AppLoaderWrapper>
      </body>
    </html>
  );
}
