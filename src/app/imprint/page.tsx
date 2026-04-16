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
              This website and its contents are subject to Nigerian copyright
              law under the Copyright Act (Cap C28 Laws of the Federation of
              Nigeria 2004, as amended). Unless expressly permitted by law,
              every form of utilizing, reproducing, or processing works subject
              to copyright protection on this website requires my prior consent.
              Individual reproductions of a work are allowed only for private
              use and must not serve either directly or indirectly for earnings.
              Unauthorized utilization of copyrighted works is punishable under
              Section 20 and related provisions of the Copyright Act.
            </p>
          </section>
          {/* Limitation of liability Section */}
          <section>
            <h2 className="text-sm font-[500] mb-1 text-[#B4B4B4]">
              Limitation of liability for internal content
            </h2>
            <p className="text-sm leading-relaxed text-black dark:text-white">
              The contents of this website have been created with my utmost
              care. However, I cannot guarantee the contents&apos; accuracy,
              completeness, or topicality. According to statutory provisions, I
              am furthermore responsible for my own content. In this context,
              please note that I am not obliged to monitor merely the
              transmitted or stored information of third parties, or investigate
              circumstances pointing to illegal activity. My obligation to
              remove or block the use of information under generally applicable
              laws remains unaffected by this, particularly under relevant
              sections of the Cybercrimes (Prohibition, Prevention, etc.) Act,
              2015 and the Nigeria Data Protection Act, 2023.
            </p>
          </section>
        </div>
      </ContentsWrapper>
    </main>
  );
}
