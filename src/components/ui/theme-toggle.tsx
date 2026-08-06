import { useEffect } from "react";
import { Moon, Sun, Sparkles } from "lucide-react";
import { useThemeStore } from "@/stores/useThemeStore";

export function ThemeToggle() {
  const theme = useThemeStore((s) => s.theme);
  const cycleTheme = useThemeStore((s) => s.cycleTheme);
  const hydrate = useThemeStore((s) => s.hydrate);

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  const label =
    theme === "light" ? "Switch to dark mode" : theme === "dark" ? "Switch to wild mode" : "Switch to light mode";

  return (
    <button
      onClick={cycleTheme}
      aria-label={label}
      title={label}
      className="relative grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-full bg-card hairline transition-transform hover:-translate-y-0.5"
    >
      <Sun
        className={`absolute h-5 w-5 transition-all ${theme === "light" ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-90 opacity-0"}`}
      />
      <Moon
        className={`absolute h-5 w-5 transition-all ${theme === "dark" ? "scale-100 rotate-0 opacity-100" : "scale-0 rotate-90 opacity-0"}`}
      />
      <Sparkles
        className={`absolute h-5 w-5 text-magenta transition-all ${theme === "wild" ? "scale-100 rotate-0 opacity-100 animate-wiggle" : "scale-0 rotate-45 opacity-0"}`}
      />
    </button>
  );
}