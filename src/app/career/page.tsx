/** @format */

import ContentsWrapper from "@/components/contents-wrapper";

export default function Career() {
  const experiences = [
    {
      id: 1,
      year: "Present",
      title: "Head of Product @ Eze Wholesale",
      location: "San Francisco, USA",
    },
    {
      id: 2,
      year: "2022",
      title: "Lead, Product Designer @ Eze Wholesale",
      location: "San Francisco, USA",
    },
    {
      id: 3,
      year: "2022",
      title: "Product Designer II (Contract) @ Scalio",
      location: "San Francisco, USA",
    },

    {
      id: 4,
      year: "2019",
      title: "Product Designer @ Enyata",
      location: "Ontario, Canada",
    },
    {
      id: 5,
      year: "2018",
      title: "UI/UX Designer at Atlas Money",
      location: "New York, USA",
    },
    {
      id: 6,
      year: "2018",
      title: "Junior UI/UX Designer at Hotels NG",
      location: "Lagos, Nigeria",
    },
    {
      id: 7,
      year: "2013",
      title: "Graphics Design Intern at Drake Media",
      location: "Lagos, Nigeria",
    },
  ];

  const certifications = [
    {
      id: 1,
      year: "2021",
      title: "Design Thinking and Global Startup",
      location: "Korea Advanced Institute of Science & Technology",
    },
    {
      id: 2,
      year: "2022",
      title: "How to Build Digital Products",
      location: "Product School",
    },

    {
      id: 3,
      year: "2022",
      title: "Google UX Design Certificate Coursea",
      location: "Google",
    },
    {
      id: 4,
      year: "2023",
      title: "Product Strategy Micro-Certification",
      location: "Product School",
    },
    {
      id: 5,
      year: "2024",
      title: "Product Management: Building AI-Powered Products",
      location: "IBM",
    },
    {
      id: 6,
      year: "2025",
      title: "Generative AI for Product Managers",
      location: "SkillUp",
    },
    {
      id: 7,
      year: "2025",
      title: "Artificial Intelligence Micro-Certification",
      location: "Product School",
    },
  ];
  return (
    <ContentsWrapper>
      <div className="space-y-12">
        <section>
          <h1 className="text-sm font-[500] mb-1 text-[#B4B4B4]">Experience</h1>
          {experiences.map((experience) => (
            <div key={experience.id} className="flex mb-4 gap-4">
              <p className="text-sm w-[80px] font-medium">{experience.year}</p>
              <div className="w-3/4">
                <p className="text-sm underline font-medium">
                  {experience.title}
                </p>
                <span className="text-sm font-[500] mb-1 text-[#B4B4B4]">
                  {experience.location}
                </span>
              </div>
            </div>
          ))}
        </section>
        <section>
          <h1 className="text-sm font-[500] mb-1 text-[#B4B4B4]">
            Certifications
          </h1>
          <div className="mt-2">
            {certifications.map((cert) => (
              <div key={cert.id} className="flex mb-4 gap-4">
                <p className="text-sm w-[80px] font-medium">{cert.year}</p>
                <div className="w-3/4">
                  <p className="text-sm underline font-medium">{cert.title}</p>
                  <span className="text-sm font-[500] mb-1 text-[#B4B4B4]">
                    {cert.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h1 className="text-sm font-[500] text-[#B4B4B4]">Volunteer</h1>
          <div className="space-y-1 text-sm">
            <p className="text-sm">
              As a Product Deleopment Facilitator, I have worked with Ekobits
              ICT Academy, CcHub, Genesys Tech Hub, ZAP Creations, and Enyata
              Academy, where I mentored students through one-on-one coaching
              sessions. My focus was on enhancing their understanding of UX/UI
              principles and product design methodologies, helping them build a
              strong foundation in user-centered design and real-world
              application of design thinking.
            </p>
          </div>
        </section>
        <section>
          <h1 className="text-sm font-[500] text-[#B4B4B4]">
            Tools and Technologies
          </h1>
          <ul className="list-disc ml-4 text-sm">
            <li className="pl-1 text-sm">
              Design Tools: Figma, FigJam, Adobe XD, Maze
            </li>
            <li className="pl-1 text-sm">
              Dev Tools: HTML, CSS, JavaScript, React
            </li>
            <li className="pl-1 text-sm">
              Collaboration: Notion, Jira, Trello, Miro
            </li>
            <li className="pl-1 text-sm">
              AI & Research: ChatGPT, UsabilityHub, Google Optimize
            </li>
          </ul>
        </section>
        <section>
          <h1 className="text-sm font-[500] text-[#B4B4B4]">
            Core Skills and Expertise
          </h1>
          <div className="md:flex">
            <ul className="list-disc ml-4 text-sm">
              <li className="pl-1 text-sm">Product Design & UX Strategy</li>
              <li className="pl-1 text-sm">Design Systems & Guidelines</li>
              <li className="pl-1 text-sm">Cross-functional Team Leadership</li>
              <li className="pl-1 text-sm">
                User Research & Usability Testing
              </li>
              <li className="pl-1 text-sm">
                Prototyping & Wireframing (Figma, FigJam)
              </li>
            </ul>
            <ul className="list-disc ml-4 text-sm">
              <li className="pl-1 text-sm">Interaction & UI/UX Design</li>
              <li className="pl-1 text-sm">Agile & Lean Methodologies</li>
              <li className="pl-1 text-sm">Data-Driven Decision Making</li>
              <li className="pl-1 text-sm">
                Frontend Development (HTML, CSS, JavaScript, React)
              </li>
              <li className="pl-1 text-sm">
                Creative, analytical and critical thinking
              </li>
            </ul>
          </div>
        </section>
      </div>
    </ContentsWrapper>
  );
}
