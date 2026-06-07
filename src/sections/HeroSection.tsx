import { useState, useEffect } from "react";
import { ArrowRight, Clock, Menu, X } from "lucide-react";
import { Shader, Swirl, ChromaFlow, FlutedGlass, FilmGrain } from "shaders/react";

function useLondonTime() {
  const [time, setTime] = useState(() =>
    new Date().toLocaleTimeString("en-GB", {
      timeZone: "Europe/London",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })
  );
  useEffect(() => {
    const id = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString("en-GB", {
          timeZone: "Europe/London",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

function TextRoll({ text }: { text: string }) {
  return (
    <span className="flex flex-col overflow-hidden h-[20px] transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-1/2">
      <span className="leading-5 whitespace-nowrap">{text}</span>
      <span className="leading-5 whitespace-nowrap">{text}</span>
    </span>
  );
}

const StarburstIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-[#E8704E]">
    <path d="m19.6 66.5 19.7-11 .3-1-.3-.5h-1l-3.3-.2-11.2-.3L14 53l-9.5-.5-2.4-.5L0 49l.2-1.5 2-1.3 2.9.2 6.3.5 9.5.6 6.9.4L38 49.1h1.6l.2-.7-.5-.4-.4-.4L29 41l-10.6-7-5.6-4.1-3-2-1.5-2-.6-4.2 2.7-3 3.7.3.9.2 3.7 2.9 8 6.1L37 36l1.5 1.2.6-.4.1-.3-.7-1.1L33 25l-6-10.4-2.7-4.3-.7-2.6c-.3-1-.4-2-.4-3l3-4.2L28 0l4.2.6L33.8 2l2.6 6 4.1 9.3L47 29.9l2 3.8 1 3.4.3 1h.7v-.5l.5-7.2 1-8.7 1-11.2.3-3.2 1.6-3.8 3-2L61 2.6l2 2.9-.3 1.8-1.1 7.7L59 27.1l-1.5 8.2h.9l1-1.1 4.1-5.4 6.9-8.6 3-3.5L77 13l2.3-1.8h4.3l3.1 4.7-1.4 4.9-4.4 5.6-3.7 4.7-5.3 7.1-3.2 5.7.3.4h.7l12-2.6 6.4-1.1 7.6-1.3 3.5 1.6.4 1.6-1.4 3.4-8.2 2-9.6 2-14.3 3.3-.2.1.2.3 6.4.6 2.8.2h6.8l12.6 1 3.3 2 1.9 2.7-.3 2-5.1 2.6-6.8-1.6-16-3.8-5.4-1.3h-.8v.4l4.6 4.5 8.3 7.5L89 80.1l.5 2.4-1.3 2-1.4-.2-9.2-7-3.6-3-8-6.8h-.5v.7l1.8 2.7 9.8 14.7.5 4.5-.7 1.4-2.6 1-2.7-.6-5.8-8-6-9-4.7-8.2-.5.4-2.9 30.2-1.3 1.5-3 1.2-2.5-2-1.4-3 1.4-6.2 1.6-8 1.3-6.4 1.2-7.9.7-2.6v-.2H49L43 72l-9 12.3-7.2 7.6-1.7.7-3-1.5.3-2.8L24 86l10-12.8 6-7.9 4-4.6-.1-.5h-.3L17.2 77.4l-4.7.6-2-2 .2-3 1-1 8-5.5Z" />
  </svg>
);

const navLinks = ["Projects", "Studio", "Journal", "Connect"];

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const londonTime = useLondonTime();

  return (
    <section className="relative bg-[#EFEFEF] min-h-screen flex flex-col">
      {/* Shader overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <Shader style={{ width: "100%", height: "100%" }}>
          <Swirl colorA="#ffffff" colorB="#f0f0f0" detail={1.7} />
          <ChromaFlow baseColor="#ffffff" downColor="#ff5f03" leftColor="#ff5f03" rightColor="#ff5f03" upColor="#ff5f03" momentum={13} radius={3.5} />
          <FlutedGlass aberration={0.61} angle={31} frequency={8} highlight={0.12} highlightSoftness={0} lightAngle={-90} refraction={4} shape="rounded" softness={1} speed={0.15} />
          <FilmGrain strength={0.05} />
        </Shader>
      </div>

      {/* Navbar */}
      <div className="relative z-20 max-w-[1440px] mx-auto w-full p-2 sm:p-3">
        <div className="bg-white rounded-full px-4 py-1.5 flex items-center justify-between">
          {/* Left */}
          <div className="flex items-center gap-6">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-900 rounded-full flex items-center justify-center shrink-0">
              <span className="text-white font-bold tracking-tight" style={{ fontSize: "10px" }}>AX</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((l) => (
                <a key={l} href="#" className="text-[14px] text-gray-900 hover:text-gray-500 transition-colors duration-300">{l}</a>
              ))}
            </nav>
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            <span className="hidden lg:block text-[13px] text-gray-600">Taking on projects for Q1 2026</span>
            <span className="hidden md:flex items-center gap-1.5 text-[13px] text-gray-600">
              <Clock size={14} />
              {londonTime} in London
            </span>
            <button className="group hidden md:flex bg-gray-900 text-white text-[13px] font-medium rounded-full pl-5 pr-2 py-2 items-center gap-2">
              <TextRoll text="Book a strategy call" />
              <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center group-hover:-rotate-45 transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]">
                <ArrowRight size={12} className="text-gray-900" />
              </span>
            </button>
            {/* Mobile toggle */}
            <button
              className="md:hidden bg-gray-900 text-white rounded-full px-4 py-2 flex items-center gap-2 text-[13px] font-medium"
              onClick={() => setMenuOpen(true)}
            >
              <Menu size={16} />
              Menu
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <div className="absolute inset-0 bg-black/60" onClick={() => setMenuOpen(false)} />
        <div
          className={`absolute bottom-0 left-0 right-0 bg-white rounded-2xl mx-3 mb-3 p-6 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${menuOpen ? "translate-y-0" : "translate-y-full"}`}
        >
          <div className="flex items-center justify-between mb-6">
            <span className="flex items-center gap-1.5 text-[13px] text-gray-600">
              <Clock size={14} />
              {londonTime} in London
            </span>
            <button onClick={() => setMenuOpen(false)} className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
              <X size={16} />
            </button>
          </div>
          <nav className="flex flex-col gap-6 mb-8">
            {navLinks.map((l) => (
              <a key={l} href="#" className="text-[28px] font-medium text-gray-900" onClick={() => setMenuOpen(false)}>{l}</a>
            ))}
          </nav>
          <button className="group flex bg-[#F26522] text-white text-[14px] font-medium rounded-full pl-6 pr-2 py-2.5 items-center gap-2">
            <TextRoll text="Start a project" />
            <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center group-hover:-rotate-45 transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]">
              <ArrowRight size={14} className="text-[#F26522]" />
            </span>
          </button>
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-20 flex-1 flex flex-col justify-end">
        <div className="max-w-[1440px] mx-auto w-full px-5 sm:px-8 lg:px-12 pb-14 sm:pb-16 lg:pb-20">
          <p className="text-[13px] sm:text-[14px] text-gray-900 tracking-wide mb-5 sm:mb-8">Axion Studio</p>
          <h1
            className="font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 mb-0"
            style={{ fontSize: "clamp(1.75rem, 7vw, 4.2rem)" }}
          >
            We craft digital experiences
            <br className="hidden sm:block" /><span className="sm:hidden"> </span>
            for brands ready to dominate
            <br className="hidden sm:block" /><span className="sm:hidden"> </span>
            their category online.
          </h1>
          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-5 items-start">
            {/* Orange CTA */}
            <button className="group bg-[#F26522] hover:bg-[#e05a1a] text-white text-[13px] sm:text-[14px] font-medium rounded-full pl-5 sm:pl-6 pr-2 py-2 flex items-center gap-2 transition-colors">
              <TextRoll text="Start a project" />
              <span className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center">
                <ArrowRight size={14} className="text-[#F26522] group-hover:-rotate-45 transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]" />
              </span>
            </button>
            {/* Partner badge */}
            <div className="flex items-center gap-2 sm:gap-3 bg-white rounded-[4px] px-3 sm:px-4 py-2 sm:py-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-shadow cursor-pointer">
              <StarburstIcon />
              <span className="text-[13px] sm:text-[14px] font-medium text-gray-900">Certified Partner</span>
              <span className="text-[10px] sm:text-[11px] bg-gray-900 text-white px-1.5 sm:px-2 py-0.5 rounded font-medium">2025</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
