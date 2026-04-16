"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const FALLBACK_LOCATION = {
  city: "Lagos",
  country: "Nigeria",
  lat: 6.4477,
  lon: 3.4436,
  latStr: "6°26.862'N",
  lonStr: "3°26.587'E",
};

export default function Footer() {
  const pathname = usePathname();
  const [currentTime, setCurrentTime] = useState("");
  const [weather, setWeather] = useState("Loading weather...");
  const [location, setLocation] = useState(FALLBACK_LOCATION);

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
    const timeInterval = setInterval(updateTime, 60000);

    // Geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const lat = pos.coords.latitude;
          const lon = pos.coords.longitude;
          // Format coordinates
          const latDeg = Math.floor(Math.abs(lat));
          const latMin = ((Math.abs(lat) - latDeg) * 60).toFixed(3);
          const latDir = lat >= 0 ? "N" : "S";
          const lonDeg = Math.floor(Math.abs(lon));
          const lonMin = ((Math.abs(lon) - lonDeg) * 60).toFixed(3);
          const lonDir = lon >= 0 ? "E" : "W";
          const latStr = `${latDeg}°${latMin}'${latDir}`;
          const lonStr = `${lonDeg}°${lonMin}'${lonDir}`;

          // Reverse geocode (OpenStreetMap Nominatim, no API key needed)
          let city = "Unknown",
            country = "";
          try {
            const res = await fetch(
              `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
            );
            const data = await res.json();
            city =
              data.address.city ||
              data.address.town ||
              data.address.village ||
              data.address.hamlet ||
              "Unknown";
            country = data.address.country || "";
          } catch {}

          setLocation({ city, country, lat, lon, latStr, lonStr });

          // Fetch weather (Open-Meteo, no API key needed)
          try {
            const weatherRes = await fetch(
              `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
            );
            const weatherData = await weatherRes.json();
            if (weatherData.current_weather) {
              const temp = Math.round(weatherData.current_weather.temperature);
              const code = weatherData.current_weather.weathercode;
              // Simple weather code mapping
              const codeMap = {
                0: "Clear",
                1: "Mainly Clear",
                2: "Partly Cloudy",
                3: "Overcast",
                45: "Fog",
                48: "Depositing Rime Fog",
                51: "Light Drizzle",
                53: "Drizzle",
                55: "Dense Drizzle",
                56: "Freezing Drizzle",
                57: "Freezing Drizzle",
                61: "Slight Rain",
                63: "Rain",
                65: "Heavy Rain",
                66: "Freezing Rain",
                67: "Freezing Rain",
                71: "Slight Snow",
                73: "Snow",
                75: "Heavy Snow",
                77: "Snow Grains",
                80: "Rain Showers",
                81: "Rain Showers",
                82: "Violent Rain Showers",
                85: "Snow Showers",
                86: "Snow Showers",
                95: "Thunderstorm",
                96: "Thunderstorm",
                99: "Thunderstorm",
              };
              const condition =
                codeMap[code as keyof typeof codeMap] || "Weather";
              setWeather(`${condition} at ${temp}°C`);
            } else {
              setWeather("Weather unavailable");
            }
          } catch {
            setWeather("Weather unavailable");
          }
        },
        () => {
          // Permission denied or error, fallback to Lagos
          setLocation(FALLBACK_LOCATION);
        },
        { enableHighAccuracy: false, timeout: 5000, maximumAge: 600000 }
      );
    }

    // Fallback weather for Lagos if no geolocation
    if (!navigator.geolocation) {
      setLocation(FALLBACK_LOCATION);
    }

    // Fallback weather for Lagos
    const mockWeather = () => {
      setWeather("Overcast at 25°C");
    };
    if (location === FALLBACK_LOCATION) {
      mockWeather();
    }

    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  return (
    <footer className="w-full flex flex-col md:flex-row md:justify-between md:items-end p-4 md:p-[10px] text-sm  text-black dark:text-white gap-8 md:gap-0">
      <div className="flex flex-col space-y-1 md:min-w-[295px]">
        <div>Lagos, Nigeria</div>
        <div>6°26.862&apos;N 3°26.587&apos;E</div>
        <div>
          {currentTime}, {weather}
        </div>
      </div>

      <div className="flex md:space-x-12 flex-col-reverse md:flex-row gap-1 md:gap-0 bg-white dark:bg-black">
        {/* <div className="md:text-center">©2025 Kingsley Ukeje</div> */}
        <Link
          href="/colophon"
          className={`lined-underline ${
            pathname === "/colophon" ? "text-[#0969DA]" : ""
          }`}
        >
          colophon
        </Link>
        <Link
          href="/imprint"
          className={`lined-underline ${
            pathname === "/imprint" ? "text-[#0969DA]" : ""
          }`}
        >
          imprint
        </Link>
        <Link
          href="/archived"
          className={`lined-underline ${
            pathname === "/archived" ? "text-[#0969DA]" : ""
          }`}
        >
          archived
        </Link>
      </div>
    </footer>
  );
}
