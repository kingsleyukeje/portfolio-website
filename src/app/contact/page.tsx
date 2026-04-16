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
                href="https://drive.google.com/file/d/1kpAQFolZewKdourSQ_TMKFSbyxLt9P7z/view"
                download="Kingsley-Ukeje-CV.pdf"
                className="inline-flex gap-1 items-center "
              >
                <span>resume</span>
                <ArrowRight />
              </a>
            </div>
            <div>
              <a
                href="mailto:kingsleyukejex@gmail.com"
                className="inline-flex gap-1 items-center "
              >
                <span>email</span>
                <ArrowRight />
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/kingsleyukeje"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex gap-1 items-center "
              >
                <span>linkedin</span>
                <ArrowRight />
              </a>
            </div>
            <div>
              <a
                href="https://x.com/kingsleyukeje"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex gap-1 items-center "
              >
                <span>youtube</span>
                <ArrowRight />
              </a>
            </div>
            <div>
              <a
                href="https://x.com/kingsleyukeje_"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex gap-1 items-center "
              >
                <span>x</span>
                <ArrowRight />
              </a>
            </div>
          </div>
        </div>
      </ContentsWrapper>
    </main>
  );
}
