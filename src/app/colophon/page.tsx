import ContentsWrapper from "@/components/contents-wrapper";
import ArrowRight from "@/components/icon";
import Image from "next/image";

export default function Colophon() {
  return (
    <main>
      <ContentsWrapper>
        <div className="space-y-8">
          <section>
            <h1 className="text-sm font-[500] mb-1 text-[#B4B4B4]">
              How We Got Here
            </h1>

            <div className="space-y-0 text-sm text-black dark:text-white">
              <p>
                In my head, I’ve designed this portfolio a thousand times—each
                version driven by a different reason, a different audience. I’ve
                explored platforms like Framer, Webflow, and others, chasing
                structure, trends, and convenience. But with every iteration, I
                came to realize: each one only served a purpose in that
                moment—none truly reflected who I am.
              </p>
              <p>
                I found myself designing to impress recruiters, appeal to
                clients, or fit neatly into whatever was trending in the
                ecosystem. And somewhere in the middle of all that noise, I
                disappeared. Until now.
              </p>
              <p>
                This version of my portfolio is different. It’s not about hype
                or performance—it’s about expression. It’s a space where I’ve
                chosen to show up as myself. A reflection of my beliefs, my
                sensibilities, and my creative rhythm. It’s the product of a
                search for something timeless, futuristic, and quietly
                confident—an interface that communicates my design DNA without
                needing to explain itself.
              </p>
              <p>This is that iteration worth a thousand words. This is ME</p>
            </div>
          </section>
          <section>
            <h2 className="text-sm font-[500] mb-1 text-[#B4B4B4]">
              Typography
            </h2>
            <p className="text-sm ">
              As a designer, I’ve collected an extensive library of typefaces
              over the years—ranging from Google Fonts to proprietary fonts used
              in various projects and organizations I’ve worked with. I have a
              deep appreciation for many typefaces, including Helvetica, the SF
              Pro family, and Roboto.
            </p>
            <p className="text-sm">
              For this portfolio, however, I chose Inter as the primary
              typeface. Inter stands out for its clarity, modern aesthetics, and
              versatility across screen sizes. Originally designed for digital
              interfaces, it offers excellent readability and a neutral tone
              that allows the work itself to take center stage. Its open
              letterforms, generous spacing, and refined curves make it a
              reliable choice for both headings and body text.
            </p>
            <p className="text-sm">
              In a space where typography should support, not overshadow, the
              content—Inter does exactly that.
            </p>
            {/* Typography Showcase Box */}
            <a
              href="/assets/image-1.png"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/image-1.png"
                alt="typography"
                width={1000}
                height={1000}
                className="my-1"
              />
            </a>

            <a
              href="https://fonts.google.com/specimen/Inter"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex gap-1 items-center text-sm lined-underline"
            >
              <span> Read all about the Inter Typeface</span>
              <ArrowRight />
            </a>
          </section>

          <section>
            <h1 className="text-sm font-[500] mb-1 text-[#B4B4B4]">Colours</h1>

            <div className="space-y-0 text-sm text-black dark:text-white">
              <p>
                This portfolio is built on a minimalist black-and-white palette,
                chosen to reflect clarity, structure, and focus. Black and white
                offer timeless contrast and allow the work itself to take visual
                priority, free from unnecessary distractions. This restraint is
                intentional, mirroring my design philosophy: purposeful,
                content-first, and distraction-free. <br />
                To introduce hierarchy and guide interaction, I use a single
                accent colour: #0969DA, a strong, modern blue. It appears
                sparingly—on interactive elements like links, hover states,
                buttons, and icons—providing visual cues without overwhelming
                the layout. <br />
                Beyond aesthetics, accessibility is a key consideration. The
                blue accent meets recommended contrast ratios for readability
                against both white and black backgrounds, ensuring that
                navigation remains usable and inclusive for all users.
                <br />
                This disciplined approach to colour creates a calm, focused
                environment where content leads, and design supports—quietly but
                effectively.
              </p>
            </div>
          </section>
          <section>
            <h1 className="text-sm font-[500] mb-1 text-[#B4B4B4]">
              Technology Stack
            </h1>

            <div className="space-y-0 text-sm text-black dark:text-white">
              <p>
                This portfolio was designed and built with a focus on speed,
                accessibility, and maintainability. <br />
                The frontend is powered by HTML, CSS, and JavaScript, with
                lightweight enhancements to keep performance fast and the
                experience smooth across devices. I chose to avoid heavy
                frameworks to maintain full control over layout and
                responsiveness, aligning with the minimalist aesthetic. <br />
                Typography is served via Google Fonts, and the site is fully
                responsive, tested across modern browsers and screen sizes.
                Every line of code is written by hand to reflect intentionality
                and precision. <br />
                The project is version-controlled using Git, and deployed
                through Vercel, allowing for fast updates and a streamlined
                workflow. <br />
                The stack is simple by design—lean, readable, and
                purpose-driven—just like the portfolio it supports.
              </p>
            </div>
          </section>

          <section>
            <h1 className="text-sm font-[500] mb-1 text-[#B4B4B4]">
              Tools Used
            </h1>

            <div className="space-y-0 text-sm text-black dark:text-white">
              <p>
                This portfolio was crafted using a selection of tools that
                support clarity, efficiency, and creative control throughout the
                design and development process:
              </p>{" "}
              <ul className="list-disc ml-4">
                <li className="pl-1">
                  Figma – For wireframing, visual design, and prototyping. Its
                  flexibility and real-time collaboration features made it the
                  ideal choice for translating ideas into structure and layout.
                </li>
                <li className="pl-1">
                  Visual Studio Code – My primary code editor, chosen for its
                  speed, extensibility, and developer-friendly experience.
                </li>
                <li className="pl-1">
                  Google Fonts – For fast, reliable font delivery and
                  typographic consistency across browsers.
                </li>
                <li className="pl-1">
                  Git & GitHub – For version control and collaborative
                  development, ensuring a clean, documented workflow.
                </li>
                <li className="pl-1">
                  Vercel – Used to host and deploy the site, enabling fast
                  performance and seamless updates{" "}
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h1 className="text-sm font-[500] mb-1 text-[#B4B4B4]">
              Inspiration & Mentions
            </h1>

            <div className="space-y-0 text-sm text-black dark:text-white">
              <p>
                This portfolio is shaped by a blend of personal design
                philosophy and the influence of creators, ideas, and systems
                that prioritize clarity, utility, and restraint. <br />
                You can explore my inspirations and visual references on Are.na
                — a curated collection of the thoughts, designs, and fragments
                that informed this project’s direction. <br />
                I’m especially grateful to the people who have been part of this
                journey—a journey that, like design itself, never truly ends:
              </p>{" "}
              <ul className="list-disc ml-4">
                <li className="pl-1">
                  <a
                    href="https://www.linkedin.com/in/ogbeniore/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="lined-underline"
                  >
                    Oreoluwa Ojo
                  </a>
                </li>
                <li className="pl-1">
                  <a
                    href="https://www.linkedin.com/in/jude-ejike/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="lined-underline"
                  >
                    Jude Ejike
                  </a>
                </li>
                <li className="pl-1">
                  <a
                    href="https://www.linkedin.com/in/kabir-mohammed-155997214"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="lined-underline"
                  >
                    Kabir Mohammed
                  </a>
                </li>
                <li className="pl-1">
                  <a
                    href="https://www.linkedin.com/in/amandabada/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="lined-underline"
                  >
                    Amanda Bada
                  </a>
                </li>
              </ul>
              <p>
                Your support, feedback, and presence have meant more than words
                can say.
              </p>
            </div>
          </section>
        </div>
      </ContentsWrapper>
    </main>
  );
}
