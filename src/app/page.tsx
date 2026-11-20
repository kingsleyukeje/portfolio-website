import JsonLd from "@/components/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd page="home" />
      <div className="min-h-[50vh] md:min-h-[0px]"></div>;
    </>
  );
}
