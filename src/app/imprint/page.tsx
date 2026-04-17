import ContentsWrapper from "@/components/contents-wrapper";
import React from "react";

export default function Imprint() {
  return (
    <main className="">
      <ContentsWrapper>
        <div className="space-y-8">
          {/* Copyright Section */}
          <section>
            <h2 className="text-sm font-[500] mb-1 text-[#B4B4B4]">
              Copyright
            </h2>
            <p className="text-sm leading-relaxed text-black dark:text-white">
              This website and its contents are protected under UK copyright law, 
              in particular the Copyright, Designs and Patents Act 1988, as amended. 
              Unless expressly permitted by law, any use, reproduction, distribution, or 
              processing of content on this website requires the prior written consent of the 
              website owner.
            </p>
            <p className="text-sm leading-relaxed text-black dark:text-white">
              Copies may be made for private, non-commercial use only. Any unauthorized 
              use of copyrighted material may give rise to civil and/or criminal liability 
              under applicable UK law.
            </p>
          </section>
          {/* Limitation of liability Section */}
          <section>
            <h2 className="text-sm font-[500] mb-1 text-[#B4B4B4]">
              Limitation of liability for internal content
            </h2>
            <p className="text-sm leading-relaxed text-black dark:text-white">
            The contents of this website have been created with due care. However, no 
            guarantee is given regarding the accuracy, completeness, or timeliness of 
            the information provided.As a service provider, I am responsible for my own content on 
            these pages in accordance with general UK laws. I am not obliged to monitor transmitted 
            or stored third-party information or to actively investigate circumstances indicating 
            unlawful activity, in line with the Electronic Commerce (EC Directive) Regulations
             2002.Obligations to remove or block the use of information under applicable laws 
             remain unaffected. This includes obligations arising under the UK General Data
              Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>
            <p>
              This website is governed by the laws of England and Wales. 
            </p>
          </section>
        </div>
      </ContentsWrapper>
    </main>
  );
}
