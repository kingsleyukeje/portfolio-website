import ContentsWrapper from "@/components/contents-wrapper";
import ArrowRight from "@/components/icon";

export default function Contact() {
  return (
    <main>
      <ContentsWrapper>
        <div className="max-w-md">
          <div className="flex flex-col space-y-[2px] text-sm">
            <div>
              <a
                href="https://x.com/kingsleyukeje_"
                download="Kingsley-Ukeje-CV.pdf"
                target="_blank"
                className="inline-flex gap-1 items-center sliding-underline"
              >
                <span>X</span>
                <ArrowRight />
              </a>
            </div>
            <div>
              <a
                href="mailto:hello@kingsleyukeje.com"
                className="inline-flex gap-1 items-center sliding-underline"
                target="_blank"
              >
                <span>email</span>
                <ArrowRight />
              </a>
            </div>
            <div>
              <a
                href="https://www.are.na/kingsley-ukeje/channels"
                className="inline-flex gap-1 items-center sliding-underline"
                target="_blank"
              >
                <span>are.na</span>
                <ArrowRight />
              </a>
            </div>
            <div>
              <a
                href="https://docs.google.com/document/d/1Vtz7VA4C-_PTh54RoW1seshJnEIg_vNPet12PpcBLPI/edit?usp=sharing"
                download="Kingsley-Ukeje-CV.pdf"
                className="inline-flex gap-1 items-center sliding-underline"
                target="_blank"
              >
                <span>résumé</span>
                <ArrowRight />
              </a>
            </div>
            
            <div>
              <a
                href="https://www.linkedin.com/in/kingsleyukeje"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex gap-1 items-center sliding-underline"
              >
                <span>linkedin</span>
                <ArrowRight />
              </a>
            </div>
            <div>
              <a
                href="https://youtube.com/@kingsleyukeje"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex gap-1 items-center sliding-underline"
              >
                <span>youtube</span>
                <ArrowRight />
              </a>
            </div>
            <div>
              <a
                href="https://kingsleyukeje.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex gap-1 items-center sliding-underline"
              >
                <span>substack</span>
                <ArrowRight />
              </a>
            </div>
          </div>
        </div>
      </ContentsWrapper>
    </main>
  );
}
