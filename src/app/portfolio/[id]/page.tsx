/** @format */

"use client";

import ContentsWrapper from "@/components/contents-wrapper";
import Footer from "@/components/Footer";
import FooterNew from "@/components/Footer/Footer";
import ArrowRight from "@/components/icon";
import { portfolio } from "@/constant/portfolio";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function PortfolioDetail() {
  const { id } = useParams<{ id: string }>();
  const portfolioItem = portfolio.find((item) => item.id === id);
  return (
    <div>
      {portfolioItem ? (
        <ContentsWrapper className="max-w-[820px]">
          <div>
            <h1 className="text-sm font-[500] mb-4">{portfolioItem.title}</h1>
            {Array.isArray(portfolioItem.text) ? (
              portfolioItem.text.map((text, index) => (
                <p key={index} className={`text-sm ${portfolioItem.textsMargin && "mt-5"}`}>
                  {text}
                </p>
              ))
            ) : (
              <p className="text-sm">{portfolioItem.text}</p>
            )}
          </div>
          <div>
            <a
              href={portfolioItem.fullCaseLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`${portfolioItem.studyMargin ? "mt-5" : "mt-1"} mt-1 inline-flex gap-1 items-center`}
            >
              <span> Read Full Case Study</span>
              <ArrowRight />
            </a>
          </div>
          <div className="mt-4">
            {portfolioItem.otherResources.map((resource) => (
              <div key={resource.id} className="mb-2">
                <h2 className="text-sm font-[500] text-[#B4B4B4]">
                  {resource.title}e
                </h2>
                {resource.link ? (
                  <a
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex gap-1 items-center text-sm text-black dark:text-white`}
                  >
                    {resource.description}
                    <ArrowRight />
                  </a>
                ) : (
                  <p className="text-sm">{resource.description}</p>
                )}
              </div>
            ))}
          </div>
        </ContentsWrapper>
      ) : (
        <ContentsWrapper className="max-w-[820px]">
          <div>Portfolio Detail Coming Soon</div>
        </ContentsWrapper>
      )}
      <div
        className="flex flex-col bg-white dark:bg-black transition-opacity duration-500 z-50"
        style={{
          position: "sticky",
          zIndex: 99,
        }}
      ></div>
      <div className="flex flex-col gap-2 p-2">
        {portfolioItem?.portfolioImages.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`grid gap-2 ${
              row.length === 1 ? "grid-cols-1" : "grid-cols-2"
            }`}
          >
            {row.map((img, i) => (
              <div key={i} className="w-full">
                <img
                  src={`/new/${id}/${id}${img}.png`} // adjust path
                  alt={`portfolio-${img}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
      <FooterNew />
    </div>
  );
}
