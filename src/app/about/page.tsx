/** @format */

//

import React from "react";
import About from "./AboutPage";
import { metaFunc } from "@/constant/meatadataFunc";

export const metadata = metaFunc({
  path: "/about",
  description:
    "Kingsley is a multifaceted product leader and AI advocate on a mission to build inclusive technology that scales businesses and uplifts communities. He's been a founding member of multiple startups and is currently building Pivot Labs.",
  title: "About | Kingsley Ukeje",
});

function page() {
  return <About />;
}

export default page;
