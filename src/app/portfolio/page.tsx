/** @format */

// "use client";
import ContentsWrapper from "@/components/contents-wrapper";
import Portfolios from "@/components/Portfolio";
import { metaFunc } from "@/constant/meatadataFunc";

export const metadata = metaFunc({
  description:
    "Kingsley is a multifaceted product leader and AI advocate on a mission to build inclusive technology that scales businesses and uplifts communities. He's been a founding member of multiple startups and is currently building Pivot Labs.",
  path: "/portfolio",
  title: "Portfolio | Kingsley Ukeje",
});

export default function Portfolio() {
  return (
    <ContentsWrapper>
      <Portfolios />
    </ContentsWrapper>
  );
}
