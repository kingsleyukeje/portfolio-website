/** @format */

import ContentsWrapper from "@/components/contents-wrapper";
import { metaFunc } from "@/constant/meatadataFunc";
import React from "react";

export const metadata = metaFunc({
  description:
    "Kingsley is a multifaceted product leader and AI advocate on a mission to build inclusive technology that scales businesses and uplifts communities. He's been a founding member of multiple startups and is currently building Pivot Labs.",
  path: "/gallery",
  title: "Gallery | Kingsley Ukeje",
});

function Gallery() {
  return (
    <div>
      <ContentsWrapper>
        <div className="max-w-md md:!-ml-[15%] ">
          <div className="flex gap-1">
            {[1, 2, 3, 4].map((obj) => (
              <img
                key={obj}
                src={`/gallery/kingsley${obj}.png`}
                alt="kingsley Ukeje"
                className="w-[308.17px] h-[205.45px] object-cover"
              />
            ))}
          </div>
          <div className="flex gap-1 mt-1">
            {[5, 6, 7, 8].map((obj) => (
              <img
                key={obj}
                src={`/gallery/kingsley${obj}.png`}
                alt="kingsley Ukeje"
                className="w-[308.17px] h-[205.45px] object-cover"
              />
            ))}
          </div>
          <div className="flex gap-1 mt-1">
            {[9, 10, 11, 12].map((obj) => (
              <img
                key={obj}
                src={`/gallery/kingsley${obj}.png`}
                alt="kingsley Ukeje"
                className="w-[308.17px] h-[205.45px] object-cover"
              />
            ))}
          </div>
        </div>
      </ContentsWrapper>
    </div>
  );
}

export default Gallery;
