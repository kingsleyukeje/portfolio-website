// 


import Link from 'next/link';
import React from 'react'
import Image from "next/image";
import { usePathname } from 'next/navigation';

function Portfolios() {
  const pathname = usePathname()
  console.log(pathname.includes("eze"))
  const projects = [
    {
      id: "eze",
      caseStudy:
        "Designing Eze(YC W20): Creating a Scalable Platform to Meet the Growing Demand for Affordable and Sustainable Electronics",
      orgLocation: "Eze Wholesale, San Francisco, USA ",
      platform: "Website, Mobile and Web Dashboard",
      active: true,
    },
    {
      id: "carrot",
      caseStudy:
        "Designing Carrot: An App That Lets You Borrow From Your Stocks without Selling Them",
      orgLocation: "Carrot Credit, Delaware, USA",
      platform: "Website, Mobile and Web Dashboard",
      active: true,
    },
    {
      id: "spasora",
      caseStudy:
        "Redefining Space: Designing the Future of Workspace and Creative Venue Booking",
      orgLocation: "Moove, Amsterdam, Netherlands",
      platform: "Mobile and Web Dashboard",
      active: true,
    },
    {
      id: "hotelng",
      caseStudy:
        "Redefining Hospitality in Africa: Designing a Scalable, User-Centered Apartment and Hotel Booking Experience",
      orgLocation: "Chaka, Lagos, Nigeria ",
      platform: "Website, Mobile and Web Dashboard",
      active: true,
    },
  ];
  return (
    <div className="">
    {projects.map((project, index) =>
      project.active && !pathname.includes(project.id) && (
          <Link href={`/portfolio/${project.id}`} key={index}>
            <div
              className="flex md:flex-row gap-4 justify-between mb-10 cursor-pointer"
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.6";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
              }}
            >
              <div className="flex-1 flex flex-col">
                <p className="font-medium">{project.caseStudy}</p>
                <div className="mt-1">
                  <Image
                    src={`/new/${project.id}.png`}
                    alt={project.caseStudy}
                    width={1000}
                    height={1000}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </Link>
      )
    )}
  </div>
  )
}

export default Portfolios