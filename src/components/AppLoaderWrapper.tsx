"use client";
import { useState, useEffect } from "react";
import Loader from "@/components/Loader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AppLoaderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    if (!loading) setShowLoader(true);
  }, [loading]);

  return (
    <>
      {showLoader && <Loader onDone={() => setShowLoader(false)} />}
      <div
        className={
          showLoader
            ? "opacity-0 pointer-events-none"
            : "opacity-100 transition-opacity duration-500"
        }
      >
        <div className="md:sticky top-0 w-full z-50">
          <Header />
        </div>
        <main className="relative">{children}</main>
        <div className="md:fixed md:bottom-0 w-full  ">
          <Footer />
        </div>
      </div>
    </>
  );
}
