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

            "@graph": [
              /**
               * WEBSITE
               */
              {
                "@type": "WebSite",
                "@id": "https://kingsleyukeje.com/#website",
                url: "https://kingsleyukeje.com/",
                name: "Kingsley Ukeje",
                description:
                  "The official website of Kingsley Ukeje, product leader, designer and advocate for human-centered AI.",
                publisher: {
                  "@id": "https://kingsleyukeje.com/#person",
                },
                inLanguage: "en",
              },

              /**
               * HOMEPAGE
               */
              {
                "@type": "WebPage",
                "@id": "https://kingsleyukeje.com/#webpage",
                url: "https://kingsleyukeje.com/",
                name: "Kingsley Ukeje",
                description:
                  "Official website of Kingsley Ukeje, product leader, designer and advocate for human-centered AI.",
                isPartOf: {
                  "@id": "https://kingsleyukeje.com/#website",
                },
                about: {
                  "@id": "https://kingsleyukeje.com/#person",
                },
                mainEntity: {
                  "@id": "https://kingsleyukeje.com/#person",
                },
                inLanguage: "en",
              },

              /**
               * PERSON
               */
              {
                "@type": "ProfilePage",
                "@id": "https://kingsleyukeje.com/about#profilepage",
                url: "https://kingsleyukeje.com/about",
                name: "About Kingsley Ukeje",
                mainEntity: {
                  "@id": "https://kingsleyukeje.com/#person",
                },
              },
              {
                "@type": "Person",
                "@id": "https://kingsleyukeje.com/#person",
                name: "Kingsley Ukeje",
                url: "https://kingsleyukeje.com/",
                image: [
                  "https://res.cloudinary.com/dpii7ocju/image/upload/q_auto/f_auto/v1781080750/061A2098_zi6gtd.jpg",
                  "https://res.cloudinary.com/dpii7ocju/image/upload/q_auto/f_auto/v1781080856/Passport_lacmm9.png",
                  "https://res.cloudinary.com/dpii7ocju/image/upload/q_auto/f_auto/v1781080944/WUDAFRICA-731774_zq0bnu.jpg",
                  "https://res.cloudinary.com/dpii7ocju/image/upload/q_auto/f_auto/v1781081118/0G7A8013_fog8wr.jpg",
                ],

                description:
                  "Kingsley Ukeje is a product leader, designer and advocate for human-centered AI. He has helped build and grow technology companies and is focused on creating inclusive technology that scales businesses and empowers communities.",

                jobTitle:
                  "Product Designer & Advocate for Human-Centered AI Design",

                knowsAbout: [
                  "Product Design",
                  "User Experience Design",
                  "Artificial Intelligence",
                  "Human-Centered AI",
                  "Technology",
                  "African Technology",
                  "Startups",
                  "Product Management",
                ],

                sameAs: [
                  "https://x.com/kingsleyukeje_",
                  "https://www.linkedin.com/in/kingsleyukeje",
                  "https://www.youtube.com/@kingsleyukeje",
                  "https://kingsleyukeje.substack.com",
                  "https://www.are.na/kingsley-ukeje/channels",
                  "https://linktr.ee/kingsleyukeje",
                ],

                worksFor: [
                  {
                    "@type": "Organization",
                    name: "Eze",
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
                ],

                /**
                 * ARTICLES ABOUT / SUBSTANTIALLY FEATURING KINGSLEY
                 */
                subjectOf: [
                  {
                    "@id":
                      "https://www.vanguardngr.com/2023/12/kingsley-ukeje-empowering-the-next-generation-of-african-tech-talent#article",
                  },
                  {
                    "@id":
                      "https://www.naijanews.com/2024/05/06/from-market-stalls-to-silicon-valley-how-the-igbo-apprenticeship-system-can-fuel-the-next-generation-of-tech-innovators-kingsley-ukeje#article",
                  },
                  {
                    "@id":
                      "https://thesun.ng/openness-inclusivity-accountability-key-components-of-ai-designing-ukeje",
                  },
                ],

                /**
                 * ARTICLES WRITTEN BY KINGSLEY
                 */
                authorOf: [
                  {
                    "@id":
                      "https://www.vanguardngr.com/2023/11/gladiators-of-the-valley-navigating-the-turns-that-come-with-being-a-founder#article",
                  },
                  {
                    "@id":
                      "https://guardian.ng/news/dark-side-of-personalisation-ai-overcoming-human-bias-in-ux-design#article",
                  },
                ],
              },

              /**
               * VANGUARD
               * Article about Kingsley
               */
              {
                "@type": "Article",
                "@id":
                  "https://www.vanguardngr.com/2023/12/kingsley-ukeje-empowering-the-next-generation-of-african-tech-talent#article",
                datePublished: "2023-12-17",

                headline:
                  "Kingsley Ukeje: Empowering the Next Generation of African Tech Talent",

                url: "https://www.vanguardngr.com/2023/12/kingsley-ukeje-empowering-the-next-generation-of-african-tech-talent",

                image:
                  "https://cdn.vanguardngr.com/wp-content/uploads/2023/12/image-569-e1733847753963.png",

                about: {
                  "@id": "https://kingsleyukeje.com/#person",
                },

                mainEntity: {
                  "@id": "https://kingsleyukeje.com/#person",
                },

                publisher: {
                  "@type": "Organization",
                  name: "Vanguard",
                  url: "https://www.vanguardngr.com/",
                },
              },

              /**
               * NAIJA NEWS
               * Article about Kingsley
               */
              {
                "@type": "Article",
                "@id":
                  "https://www.naijanews.com/2024/05/06/from-market-stalls-to-silicon-valley-how-the-igbo-apprenticeship-system-can-fuel-the-next-generation-of-tech-innovators-kingsley-ukeje#article",

                headline:
                  "From Market Stalls to Silicon Valley: How The Igbo Apprenticeship System Can Fuel The Next Generation Of Tech Innovators - Kingsley Ukeje",
                datePublished: "2024-05-06",
                url: "https://www.naijanews.com/2024/05/06/from-market-stalls-to-silicon-valley-how-the-igbo-apprenticeship-system-can-fuel-the-next-generation-of-tech-innovators-kingsley-ukeje",

                image:
                  "https://www.naijanews.com/wp-content/uploads/2024/05/Kingsley-Ukeje.jpeg",

                about: {
                  "@id": "https://kingsleyukeje.com/#person",
                },

                mainEntity: {
                  "@id": "https://kingsleyukeje.com/#person",
                },

                publisher: {
                  "@type": "Organization",
                  name: "Naija News",
                  url: "https://www.naijanews.com/",
                },
              },

              /**
               * THE SUN
               * Article featuring / discussing Kingsley
               */
              {
                "@type": "Article",
                "@id":
                  "https://thesun.ng/openness-inclusivity-accountability-key-components-of-ai-designing-ukeje",

                headline:
                  "Openness, inclusivity, accountability, key components of AI designing - Ukeje",

                url: "https://thesun.ng/openness-inclusivity-accountability-key-components-of-ai-designing-ukeje",
                datePublished: "2024-02-17",
                image:
                  "https://d1jcea4y7xhp7l.cloudfront.net/wp-content/uploads/2024/07/IMG-20240717-WA0026.jpg",

                about: {
                  "@id": "https://kingsleyukeje.com/#person",
                },

                mainEntity: {
                  "@id": "https://kingsleyukeje.com/#person",
                },

                publisher: {
                  "@type": "Organization",
                  name: "The Sun Nigeria",
                  url: "https://thesun.ng/",
                },
              },

              /**
               * VANGUARD
               * Written by Kingsley
               */
              {
                "@type": "Article",
                "@id":
                  "https://www.vanguardngr.com/2023/11/gladiators-of-the-valley-navigating-the-turns-that-come-with-being-a-founder#article",

                headline:
                  "Gladiators of the Valley: Navigating the turns that come with being a founder",

                url: "https://www.vanguardngr.com/2023/11/gladiators-of-the-valley-navigating-the-turns-that-come-with-being-a-founder",
                datePublished: "2023-11-11",
                image:
                  "https://cdn.vanguardngr.com/wp-content/uploads/2024/07/image-334.png",

                author: {
                  "@id": "https://kingsleyukeje.com/#person",
                },

                publisher: {
                  "@type": "Organization",
                  name: "Vanguard",
                  url: "https://www.vanguardngr.com/",
                },
              },

              /**
               * THE GUARDIAN
               * Written by Kingsley
               */
              {
                "@type": "Article",
                "@id":
                  "https://guardian.ng/news/dark-side-of-personalisation-ai-overcoming-human-bias-in-ux-design#article",

                headline:
                  "Dark side of personalisation: AI overcoming human bias in UX design",

                url: "https://guardian.ng/news/dark-side-of-personalisation-ai-overcoming-human-bias-in-ux-design",
                datePublished: "2023-03-01",
                image:
                  "https://cdn.guardian.ng/wp-content/uploads/2023/03/us-957x598.jpg",

                author: {
                  "@id": "https://kingsleyukeje.com/#person",
                },

                publisher: {
                  "@type": "Organization",
                  name: "The Guardian Nigeria",
                  url: "https://guardian.ng/",
                },
              },

              /**
               * THE GUARDIAN
               * Kingsley is featured / mentioned
               */
              {
                "@type": "Article",
                "@id":
                  "https://guardian.ng/features/chakas-pioneering-path-in-nigerias-fintech-sector-fueled-by-innovation-accessibility#article",

                headline:
                  "Chaka's pioneering path in Nigeria's fintech sector, fueled by innovation, accessibility",

                url: "https://guardian.ng/features/chakas-pioneering-path-in-nigerias-fintech-sector-fueled-by-innovation-accessibility/",
                datePublished: "2021-07-28",
                image:
                  "https://cdn.guardian.ng/wp-content/uploads/2024/12/CA-1062x598.jpg",

                mentions: {
                  "@id": "https://kingsleyukeje.com/#person",
                },

                publisher: {
                  "@type": "Organization",
                  name: "The Guardian Nigeria",
                  url: "https://guardian.ng/",
                },
              },

              /**
               * THISDAY
               * Kingsley is featured
               */
              {
                "@type": "Article",
                "@id":
                  "https://www.thisdaylive.com/2023/08/22/nigerian-design-stars-5-product-designers-shaping-global-tech#article",

                datePublished: "2023-08-22",

                headline:
                  "Nigerian Design Stars: 5 Product Designers Shaping Global Tech",

                url: "https://www.thisdaylive.com/2023/08/22/nigerian-design-stars-5-product-designers-shaping-global-tech",

                mentions: {
                  "@id": "https://kingsleyukeje.com/#person",
                },

                publisher: {
                  "@type": "Organization",
                  name: "THISDAY",
                  url: "https://www.thisdaylive.com/",
                },
              },

              /**
               * INQUIRER
               * Kingsley is featured / mentioned
               */
              {
                "@type": "Article",
                "@id":
                  "https://inquirer.ng/2024/04/15/enugu-taps-tech-to-drive-growth#article",

                headline: "Enugu Taps Tech To Drive Growth",
                datePublished: "2024-04-15",
                url: "https://inquirer.ng/2024/04/15/enugu-taps-tech-to-drive-growth/",

                mentions: {
                  "@id": "https://kingsleyukeje.com/#person",
                },

                publisher: {
                  "@type": "Organization",
                  name: "Inquirer",
                  url: "https://inquirer.ng/",
                },
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
