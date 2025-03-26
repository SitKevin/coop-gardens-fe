"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <div style={{ position: "fixed", top: "20px", right: "20px", zIndex: 1000 }}>
      <Button onClick={toggleTheme} variant="outline" size="icon">
        {resolvedTheme === "dark" ? (
          <Sun className="h-[10rem] w-[10rem] transition-all" />
        ) : (
          <Moon className="h-[10rem] w-[10rem] transition-all" />
        )}
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}