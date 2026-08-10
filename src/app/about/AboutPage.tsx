/** @format */

"use client";
import ContentsWrapper from "@/components/contents-wrapper";
import Image from "next/image";

export default function About() {
  return (
    <main>
      <ContentsWrapper>
        <div className="space-y-5">
          <section>
            {/* <a
              href="/assets/image-2.png"
              target="_blank"
              rel="noopener noreferrer"
            > */}
            <Image
              src="/new/about_image_1.png"
              alt="About kingsley ukeje"
              width={1000}
              height={1000}
              className="my-1"
            />
            {/* </a> */}
            <h1 className="text-sm font-medium mb-1 text-[#B4B4B4]">
              Kingsley
            </h1>

            <div className="text-sm">
              <p className="text-sm">
                I&apos;ve helped scale Eze (YC W20) to $50M+ in annual GMV and
                20k+ users — while also supporting a $3.7M seed raise. I&apos;m
                also shaping a fintech startup that has disbursed $2M+ in loans
                and raised $4.2M in seed funding.
              </p>
            </div>
            {/* </a> */}
            <div className="text-sm mt-5">
              <p className="text-sm">
                I&apos;m a UX Engineer and Principal Product Designer with years
                of experience building and scaling high-impact digital products
                across web and mobile platforms. I do my best work at the
                intersection of design, engineering, and product strategy—owning
                problems end-to-end, from user research and design systems to
                production frontend code, which means I ship faster and lose
                less in translation between Figma and production.
              </p>
            </div>
            <div className="text-sm mt-5">
              <p className="text-sm">
                Currently leading product and design strategy at Eze, I&apos;ve
                been a founding designer at three startups with a focus on
                taking products from zero to scale. By implementing my own
                designs in JavaScript, I accelerate shipping cycles and ensure
                every feature drives measurable impact and growth.
              </p>
            </div>
            <div className="text-sm mt-5">
              <p className="text-sm">
                I&apos;ve led cross-functional teams, evolved design systems
                aligned with industry standards, and shipped scalable solutions
                that improved performance, increased adoption, and directly
                drove revenue. My edge is simple: I design with engineering
                constraints in mind and build with user experience as the north
                star—resulting in faster delivery, fewer iterations, and
                products that scale.
              </p>
            </div>
            <div className="mt-10 w-full">
              <p className="text-[#B4B4B4]">Gallery</p>
              <div className="flex gap-1 mt-1">
                <img
                  src="https://res.cloudinary.com/dpii7ocju/image/upload/q_auto/f_auto/v1781030093/061A2104_ug6eyx.jpg"
                  alt="Kingsley Ukeje picture"
                  className="w-1/3 h-[172px] object-cover"
                />
                <img
                  src="https://res.cloudinary.com/dpii7ocju/image/upload/q_auto/f_auto/v1781030679/IMG_9878_cjo22c.jpg"
                  alt="Kingsley Ukeje picture"
                  className="w-1/3 h-[172px] object-cover"
                />
                <img
                  src="https://res.cloudinary.com/dpii7ocju/image/upload/q_auto/f_auto/v1781079262/IMG_4587_bwa7h0.jpg"
                  alt="Kingsley Ukeje picture"
                  className="w-1/3 h-[172px] object-cover"
                />
              </div>
              <div className="flex mt-1 gap-1">
                <img
                  src="https://res.cloudinary.com/dpii7ocju/image/upload/q_auto/f_auto/v1781079697/WUDAFRICA-731994_ex6l4x.jpg"
                  alt=""
                  className="w-[40%] h-[172px] object-cover"
                />
                <img
                  src="https://res.cloudinary.com/dpii7ocju/image/upload/q_auto/f_auto/v1781080064/_A739920_lykusr.jpg"
                  alt=""
                  className="w-[30%] h-[172px] object-cover"
                />
                <img
                  src="https://res.cloudinary.com/dpii7ocju/image/upload/q_auto/f_auto/v1781080391/PHOTO-2025-09-29-12-47-53_4_m0gimy.jpg"
                  alt=""
                  className="w-[30%] h-[172px] object-cover"
                />
              </div>
              {/* <div className="flex items-center gap-1 mt-2 cursor-pointer font-medium">
                <p className="text-sm sliding-underline">View More </p>
                <ArrowRight />
              </div> */}
            </div>
          </section>
          <section className="mt-10">
            <h1 className="text-sm font-[500] text-[#B4B4B4] mt-9">
              Beyond The Screen
            </h1>
            <div>
              <p className="text-sm mt-1">
                I wear many hats — UX Engineer by profession, photographer, car
                enthusiast by passion, and pro flag footballer by sheer love of
                the game. I&apos;m also an author, speaker, and mentor,
                committed to empowering the next generation of creatives and
                sharing insights on global stages.
              </p>
              <p className="mt-5">
                Each role fuels a different side of me: I create with purpose,
                connect with people, compete with heart, and give back with
                intention.
              </p>
              <p className="mt-5">
                I also founded{" "}
                <span>
                  <a
                    className="sliding-underline"
                    href="https://kingsleyukeje.notion.site/The-Pivot-Foundation-cab86362d02a42efb4bad68ba4e2ffab?pvs=143"
                    target="_blank"
                  >
                    The Pivot Foundation
                  </a>
                </span>{" "}
                which I hold dear to my heart, focused on uplifting underserved
                communities through gifts, creativity, education, and
                opportunity. You can read more about the work we&apos;re doing{" "}
                <a
                  className="sliding-underline"
                  href="https://kingsleyukeje.notion.site/The-Pivot-Foundation-cab86362d02a42efb4bad68ba4e2ffab?pvs=143"
                  target="_blank"
                >
                  here
                </a>
                .
              </p>
            </div>
            <Image
              src="/new/about_image_2.png"
              alt="Kingsley Ukeje speaking at a technology conference"
              width={1000}
              height={1000}
              className="my-1"
            />
          </section>
        </div>
      </ContentsWrapper>
    </main>
  );
}
