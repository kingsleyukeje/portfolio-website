import React from "react";

export default function ContentsWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`max-w-[638px] py-10 md:py-16 md:ml-[23%] ${className}`}>
      <div className="px-4">{children}</div>
    </div>
  );
}
