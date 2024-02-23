import { useEffect, useState } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";
const themes = ["light", "dark"];

export const ThemeToggle = () => {
  const [isMountend, setIsMounted] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (import.meta.env.SSR) {
      return undefined;
    }
    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    }
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });
  const handleToggleTheme = () => {
    const toggleTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", toggleTheme);
    setTheme(toggleTheme);
  };
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
    }
  }, [theme]);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return isMountend ? (
    <div className="inline-flex items-center p-[1px] rounded-full bg-slate-300 dark:bg-zinc-600">
      {themes.map((t, idx) => {
        const checked = t === theme;
        return (
          <button
            key={idx}
            onClick={handleToggleTheme}
            className={`${
              checked ? "bg-white" : ""
            } cursor-pointer rounded-full p-2`}
            aria-label="Toggle theme"
          >
            {t === "light" ? <IoSunny /> : <IoMoon />}
          </button>
        );
      })}
    </div>
  ) : (
    <></>
  );
};
