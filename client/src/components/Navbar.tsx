import { Button } from "@/components/ui/button";
import { Moon, Sun, PlusCircle } from "lucide-react";
import { useEffect, useState } from "react";

interface NavbarProps {
  onNewNote?: () => void;
}

export default function Navbar({ onNewNote }: NavbarProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const initialTheme = savedTheme || 'light';
    setTheme(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            我的筆記
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="default"
            size="default"
            className="rounded-full hidden sm:flex"
            onClick={onNewNote}
            data-testid="button-new-note-nav"
          >
            <PlusCircle className="mr-2 h-4 w-4" />
            新增筆記
          </Button>
          
          <Button
            variant="default"
            size="icon"
            className="rounded-full sm:hidden"
            onClick={onNewNote}
            data-testid="button-new-note-nav-mobile"
          >
            <PlusCircle className="h-4 w-4" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
            data-testid="button-theme-toggle"
          >
            {theme === 'light' ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
    </nav>
  );
}
