import ContentsWrapper from "@/components/contents-wrapper";
import ArrowRight from "@/components/icon";


export default function Archived() {
  return (
    <main>
      <ContentsWrapper>
        <div className="max-w-md">
          {/* Contact Links */}
          <div className="flex flex-col space-y-[2px] text-sm">
            <div>
              <a
                href="https://v1.kingsleyukeje.com/"
                className="inline-flex gap-1 items-center "
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Portfolio V1</span>
                <ArrowRight />
              </a>
            </div>
            <div>
              <a
                href="https://www.v1.kingsleyukeje.com/case-study/common-wealth"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex gap-1 items-center "
              >
                <span>CommonWealth Case Study</span>
                <ArrowRight />
              </a>
            </div>
            <div>
              <a
                href="https://www.v1.kingsleyukeje.com/case-study/spasora"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex gap-1 items-center "
              >
                <span>Spasora Case Study</span>
                <ArrowRight />
              </a>
            </div>
            <div>
              <a
                href="https://www.v1.kingsleyukeje.com/case-study/hotel-ng"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex gap-1 items-center "
              >
                <span>Hotels.ng Case Study</span>
                <ArrowRight />
              </a>
            </div>
            <div>
              <a
                href="https://www.v1.kingsleyukeje.com/case-study/chaka"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex gap-1 items-center "
              >
                <span>Chaka Case Study</span>
                <ArrowRight />
              </a>
            </div>
          </div>
        </div>
      </ContentsWrapper>
    </main>
  );
}
