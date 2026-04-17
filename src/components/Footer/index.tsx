
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { WeatherResponse } from "@/constant/type";


export default function Footer() {
  const pathname = usePathname();
  const [currentTime, setCurrentTime] = useState("");
  // const [weather, setWeather] = useState("Loading weather...");
  const [location, setLocation] = useState<WeatherResponse>();
  // const [coords, setChoords] = useState<any>()

  const geo = async () => {
    const response = await fetch(
      "https://api.weatherapi.com/v1/current.json?key=a3beb9ab080c465390a180658260701&q=London",
    );
    const data  = await response.json();
    setLocation(data)
    // setChoords(toDMS(location?.location?.lat, location?.location?.lon))
  };

  useEffect(() => {
    // Update time every minute
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
      setCurrentTime(timeString);
    };
    updateTime();
    // const timeInterval = setInterval(updateTime, 60000);

    // Geolocation
    geo()
  }, []);

  // function toDMS(lat: any, lng: any) {
  //   function convert(value: any, isLat: any) {
  //     const dir = value >= 0
  //       ? (isLat ? "N" : "E")
  //       : (isLat ? "S" : "W");
  
  //     value = Math.abs(value);
  //     const deg = Math.floor(value);
  //     const min = ((value - deg) * 60).toFixed(3);
  
  //     return `${deg}°${min}'${dir}`;
  //   }
  
  //   return `${convert(lat, true)} ${convert(lng, false)}`;
  // }

  return (
    <footer className="w-full flex flex-col md:flex-row md:justify-between md:items-end p-4 md:p-[10px] text-sm  text-black dark:text-white gap-8 md:gap-0">
      <div className="flex flex-col space-y-1 md:min-w-[295px]">
        <div>{location?.location?.name}, {location?.location?.country}</div>
        <div>55.3781° N, 3.4360° W</div>
        <div>
          {currentTime}, {location?.current?.condition?.text} at {location?.current.temp_c} °C
        </div>
      </div>

      <div className="flex md:space-x-12 flex-col-reverse md:flex-row gap-1 md:gap-0 bg-white dark:bg-black">
        {/* <div className="md:text-center">©2025 Kingsley Ukeje</div> */}
        <Link
          href="/colophon"
          className={`sliding-underline ${
            pathname === "/colophon" ? "text-[#0969DA]" : ""
          }`}
        >
          colophon
        </Link>
        <Link
          href="/imprint"
          className={`sliding-underline ${
            pathname === "/imprint" ? "text-[#0969DA]" : ""
          }`}
        >
          imprint
        </Link>
        <Link
          href="/archived"
          className={`sliding-underline ${
            pathname === "/archived" ? "text-[#0969DA]" : ""
          }`}
        >
          archived
        </Link>
      </div>
    </footer>
  );
}
