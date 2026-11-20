const SITE = "https://kingsleyukeje.com";
const ID = {
  website: `${SITE}/#website`,
  person: `${SITE}/#person`,
  eze: `${SITE}/#org-eze`,
  pivotLabs: `${SITE}/#org-pivot-labs`,
  pivotFoundation: `${SITE}/#org-pivot-foundation`,
  carrot: `${SITE}/#org-carrot`,
  hotelsng: `${SITE}/#org-hotelsng`,
};

const website = {
  "@type": "WebSite",
  "@id": ID.website,
  url: `${SITE}/`,
  name: "Kingsley Ukeje",
  description:
    "The official website of Kingsley Ukeje, product designer, UX engineer and advocate for human-centered AI.",
  publisher: { "@id": ID.person },
  inLanguage: "en",
};

const person = {
  "@type": "Person",
  "@id": ID.person,
  name: "Kingsley Ukeje",
  givenName: "Kingsley",
  familyName: "Ukeje",
  // alternateName: ["Kingsley C. Ukeje"],
  url: `${SITE}/`,
  mainEntityOfPage: `${SITE}/about`,

  image: [
    "https://res.cloudinary.com/dpii7ocju/image/upload/q_auto/f_auto/v1781080750/061A2098_zi6gtd.jpg",
    "https://res.cloudinary.com/dpii7ocju/image/upload/q_auto/f_auto/v1781080944/WUDAFRICA-731774_zq0bnu.jpg",
    "https://res.cloudinary.com/dpii7ocju/image/upload/q_auto/f_auto/v1781081118/0G7A8013_fog8wr.jpg",
  ],

  jobTitle: "Principal Product Designer & UX Engineer",
  description:
    "Kingsley Ukeje is a Principal Product Designer, UX engineer and advocate for human-centered AI. He leads product and design strategy at Eze (YC W20), has been a founding designer at three startups, and founded The Pivot Foundation.",

  worksFor: { "@id": ID.eze },

  alumniOf: [
    { "@id": ID.carrot },
    { "@id": ID.hotelsng },
    {
      "@type": "CollegeOrUniversity",
      name: "University of Nigeria, Nsukka",
      sameAs: "https://www.linkedin.com/school/university-of-nigeria-nsukka",
    },
  ],

  knowsAbout: [
    "Product Design",
    "UX Engineering",
    "User Experience Design",
    "Design Systems",
    "Frontend Development",
    "Artificial Intelligence",
    "Human-Centered AI",
    "Fintech",
    "African Technology",
    "Startups",
    "Product Strategy",
  ],
  knowsLanguage: "en",

  nationality: { "@type": "Country", name: "Nigeria" },

  sameAs: [
    "https://www.wikidata.org/wiki/Q141511004",
    "https://www.linkedin.com/in/kingsleyukeje",
    "https://x.com/kingsleyukeje_",
    "https://github.com/kingsleyukeje",
    "https://www.youtube.com/@kingsleyukeje",
    "https://kingsleyukeje.substack.com",
    "https://www.are.na/kingsley-ukeje/channels",
    "https://linktr.ee/kingsleyukeje",
    // "https://www.instagram.com/TODO",
    // "https://www.crunchbase.com/person/TODO",
  ],

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
        "https://thesun.ng/openness-inclusivity-accountability-key-components-of-ai-designing-ukeje#article",
    },
  ],
};

const organizations = [
  {
    "@type": "Organization",
    "@id": ID.eze,
    name: "Eze",
    url: "https://www.ezewholesale.com",
    description: "Wholesale commerce platform (Y Combinator W20).",
    // sameAs: ["TODO: Eze LinkedIn", "TODO: Eze Crunchbase"],
  },
  {
    "@type": "Organization",
    "@id": ID.carrot,
    name: "Carrot",
    url: "https://www.carrotcredit.com",
    // sameAs: ["TODO"],
  },
  {
    "@type": "Organization",
    "@id": ID.hotelsng,
    name: "Hotels.ng",
    url: "https://hotels.ng",
    // sameAs: ["TODO"],
  },
  {
    "@type": "Organization",
    "@id": ID.pivotFoundation,
    name: "The Pivot Foundation",
    url: "https://kingsleyukeje.notion.site/The-Pivot-Foundation-cab86362d02a42efb4bad68ba4e2ffab",
    description:
      "A foundation uplifting underserved communities through gifts, creativity, education and opportunity.",
    founder: { "@id": ID.person },
    // foundingDate: "YYYY", // TODO
  },
  {
    "@type": "Organization",
    "@id": ID.pivotLabs,
    name: "Pivot Labs",
    // url: "TODO",
    description: "Technology company building inclusive, AI-powered products.", // TODO: confirm wording
    founder: { "@id": ID.person },
    // foundingDate: "YYYY", // TODO
  },
];

const publisher = (name: string, url: string) => ({
  "@type": "Organization",
  name,
  url,
});

const press = [
  // ABOUT him
  {
    "@type": "Article",
    "@id":
      "https://www.vanguardngr.com/2023/12/kingsley-ukeje-empowering-the-next-generation-of-african-tech-talent#article",
    headline:
      "Kingsley Ukeje: Empowering the Next Generation of African Tech Talent",
    url: "https://www.vanguardngr.com/2023/12/kingsley-ukeje-empowering-the-next-generation-of-african-tech-talent",
    datePublished: "2023-12-17",
    about: { "@id": ID.person },
    publisher: publisher("Vanguard", "https://www.vanguardngr.com/"),
  },
  {
    "@type": "Article",
    "@id":
      "https://www.naijanews.com/2024/05/06/from-market-stalls-to-silicon-valley-how-the-igbo-apprenticeship-system-can-fuel-the-next-generation-of-tech-innovators-kingsley-ukeje#article",
    headline:
      "From Market Stalls to Silicon Valley: How The Igbo Apprenticeship System Can Fuel The Next Generation Of Tech Innovators - Kingsley Ukeje",
    url: "https://www.naijanews.com/2024/05/06/from-market-stalls-to-silicon-valley-how-the-igbo-apprenticeship-system-can-fuel-the-next-generation-of-tech-innovators-kingsley-ukeje",
    datePublished: "2024-05-06",
    about: { "@id": ID.person },
    publisher: publisher("Naija News", "https://www.naijanews.com/"),
  },
  {
    "@type": "Article",
    "@id":
      "https://thesun.ng/openness-inclusivity-accountability-key-components-of-ai-designing-ukeje#article",
    headline:
      "Openness, inclusivity, accountability, key components of AI designing - Ukeje",
    url: "https://thesun.ng/openness-inclusivity-accountability-key-components-of-ai-designing-ukeje",
    datePublished: "2024-02-17",
    about: { "@id": ID.person },
    publisher: publisher("The Sun Nigeria", "https://thesun.ng/"),
  },
  // MENTIONS him
  {
    "@type": "Article",
    "@id":
      "https://www.thisdaylive.com/2023/08/22/nigerian-design-stars-5-product-designers-shaping-global-tech#article",
    headline: "Nigerian Design Stars: 5 Product Designers Shaping Global Tech",
    url: "https://www.thisdaylive.com/2023/08/22/nigerian-design-stars-5-product-designers-shaping-global-tech",
    datePublished: "2023-08-22",
    mentions: { "@id": ID.person },
    publisher: publisher("THISDAY", "https://www.thisdaylive.com/"),
  },
  {
    "@type": "Article",
    "@id":
      "https://inquirer.ng/2024/04/15/enugu-taps-tech-to-drive-growth#article",
    headline: "Enugu Taps Tech To Drive Growth",
    url: "https://inquirer.ng/2024/04/15/enugu-taps-tech-to-drive-growth/",
    datePublished: "2024-04-15",
    mentions: { "@id": ID.person },
    publisher: publisher("Inquirer", "https://inquirer.ng/"),
  },
  {
    "@type": "Article",
    "@id":
      "https://guardian.ng/features/chakas-pioneering-path-in-nigerias-fintech-sector-fueled-by-innovation-accessibility#article",
    headline:
      "Chaka's pioneering path in Nigeria's fintech sector, fueled by innovation, accessibility",
    url: "https://guardian.ng/features/chakas-pioneering-path-in-nigerias-fintech-sector-fueled-by-innovation-accessibility/",
    datePublished: "2021-07-28",
    mentions: { "@id": ID.person },
    publisher: publisher("The Guardian Nigeria", "https://guardian.ng/"),
  },
  // WRITTEN BY him
  {
    "@type": "Article",
    "@id":
      "https://www.vanguardngr.com/2023/11/gladiators-of-the-valley-navigating-the-turns-that-come-with-being-a-founder#article",
    headline:
      "Gladiators of the Valley: Navigating the turns that come with being a founder",
    url: "https://www.vanguardngr.com/2023/11/gladiators-of-the-valley-navigating-the-turns-that-come-with-being-a-founder",
    datePublished: "2023-11-11",
    author: { "@id": ID.person },
    publisher: publisher("Vanguard", "https://www.vanguardngr.com/"),
  },
  {
    "@type": "Article",
    "@id":
      "https://guardian.ng/news/dark-side-of-personalisation-ai-overcoming-human-bias-in-ux-design#article",
    headline:
      "Dark side of personalisation: AI overcoming human bias in UX design",
    url: "https://guardian.ng/news/dark-side-of-personalisation-ai-overcoming-human-bias-in-ux-design",
    datePublished: "2023-03-01",
    author: { "@id": ID.person },
    publisher: publisher("The Guardian Nigeria", "https://guardian.ng/"),
  },
];

const homePage = {
  "@type": "WebPage",
  "@id": `${SITE}/#webpage`,
  url: `${SITE}/`,
  name: "Kingsley Ukeje",
  description:
    "Official website of Kingsley Ukeje, product designer, UX engineer and advocate for human-centered AI.",
  isPartOf: { "@id": ID.website },
  about: { "@id": ID.person },
  inLanguage: "en",
};

const aboutPage = {
  "@type": "ProfilePage",
  "@id": `${SITE}/about#profilepage`,
  url: `${SITE}/about`,
  name: "About Kingsley Ukeje",
  isPartOf: { "@id": ID.website },
  // TODO: real dates; update dateModified whenever the page changes
  dateCreated: "2024-01-01T00:00:00+00:00",
  dateModified: "2026-11-20T00:00:00+00:00",
  mainEntity: { "@id": ID.person }, // must resolve to the Person above
  inLanguage: "en",
};

export default function JsonLd({ page }: { page: string }) {
  const graph = [website, person, ...organizations, ...press];
  if (page === "home") graph.push(homePage);
  if (page === "about") graph.push(aboutPage);

  const json = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": graph,
  });
  return (
    <script
      type="application/ld+json"
      // escape "<" so content can never break out of the script tag
      dangerouslySetInnerHTML={{ __html: json.replace(/</g, "\\u003c") }}
    />
  );
}
