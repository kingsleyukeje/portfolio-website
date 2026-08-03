// 


type MetaProps = {
  path: string;
  title: string;
  description: string;
};


export const metaFunc = ({ description, path, title }: MetaProps) => ({
  title: title,
  description: description,
  metadataBase: "https://kingsleyukeje.com",
  openGraph: {
    title: title,
    description: description,
    url: path,
    siteName: "Kingsley Ukeje",
    images: [
      {
        url: "/assets/og_img.png",
        width: 1200,
        height: 630,
        alt: title
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    images: ["/assets/og_img.png"],
  },

})