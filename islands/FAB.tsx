/** @jsx h */
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { ChevronUp } from "@components/Icons.tsx";
import { tw } from "@utils/twind.ts";

export default function FAB() {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    const el = document.getElementById("main-sect");
    if (el !== null) {
      el.scrollTop = 0;
    }
  };

  useEffect(() => {
    const mainPart = document.getElementById("main-sect");
    const toggleVisibility = () => {
      if (mainPart !== null && mainPart.scrollTop > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    mainPart?.addEventListener("scroll", toggleVisibility);
    return () => mainPart?.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      className={tw`fixed ${
        isVisible ? "opacity-100" : "opacity-0 cursor-default"
      } bottom-[7rem] right-[1rem] md:bottom-[3rem] md:right-[5rem] text-dark-text bg-dark-nav ring ring-dark-accent-semitrans shadow-lg text-dark-accent-solid w-[fit-content] p-4 rounded-full hover:bg-dark-accent-solid hover:ring-dark-accent-solid hover:shadow-xl hover:text-dark-nav transition-all duration-300`}
      aria-label="Back to top"
      onClick={(e) => {
        e.preventDefault;
        handleClick();
      }}
    >
      <ChevronUp />
    </button>
  );
}
