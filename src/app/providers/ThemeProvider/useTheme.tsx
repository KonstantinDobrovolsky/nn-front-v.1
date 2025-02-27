import { useState } from "react";

interface UseThemeResult {
    theme: Theme,
    switchTheme: () => void
}

enum Theme {
    LIGHT = 'light',
    CYBERPUNK = 'cyberpunk'
  }

export function useTheme(): UseThemeResult {
      const loadTheme = localStorage.getItem('LOCAL_STORAGE_THEME_KEY') === 'light' ? Theme.LIGHT : Theme.CYBERPUNK;
      const [theme, setTheme] = useState(loadTheme);
    
      const switchTheme = () => {
        const newTheme = theme === Theme.LIGHT ? Theme.CYBERPUNK : Theme.LIGHT;
        setTheme(newTheme)
        localStorage.setItem("LOCAL_STORAGE_THEME_KEY", newTheme);
      }

    return (
        { theme, switchTheme }
    );
}