/** @format */

//

import React from "react";
import Portfolios from "../Portfolio";
import { PiArrowBendLeftDownBold } from "react-icons/pi";

function FooterNew() {
  return (
    <div className="max-w-[638px] m-auto py-6">
      <p className="text-[#0A0A0A] font-medium">Back to Index or</p>
      <p className="text-[#B4B4B4] font-medium">Browse selected</p>
      <PiArrowBendLeftDownBold />
      <div className="mt-12">
        <Portfolios />
      </div>
    </div>
  );
}

export default FooterNew;