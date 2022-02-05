import React, { useEffect } from "react";

const theme = {
  colorPrimary: "rgb(139, 195, 74)",
  colorPrimaryLight: "rgba(139, 195, 74, 0.2)",
  colorPrimaryDark: "#689F38",

  colorAccent: "#455A64",
  colorAccentLight: "#455A64",
  colorAccentDark: "#455A64",

  colorBackground: "#ffffff",
  colorBackgroundSecondary: "#eeeeee",

  colorText: "rgba(0, 0, 0, 0.87)",
  colorTextSecondary: "rgba(0, 0, 0, 0.54)",
  colorTextDisabled: "rgba(0, 0, 0, 0.38)",
  colorDivider: "rgba(0, 0, 0, 0.12)",

  colorHovered: "rgba(139, 195, 74, 0.1)",
  colorSelected: "rgba(139, 195, 74, 0.2)",
};

const darkTheme = {
  ...theme,

  backgroundColor: "#181818",
  backgroundColorSecondary: "#222222",

  textColor: "rgba(255, 255, 255, 1)",
  textColorSecondary: "rgba(255, 255, 255, 0.7)",
  textColorDisabled: "rgba(255, 255, 255, 0.3)",
  textColorDivider: "rgba(255, 255, 255, 0.12)",

  colorHovered: "rgba(255, 255, 255, 0.06)",
  colorSelected: "rgba(255, 255, 255, 0.12)",
};

export type Theme = typeof theme;

export const ThemeContext = React.createContext<Theme>(theme);

export function ThemeProvider(props: { children: React.ReactNode }) {
  useEffect(() => {
    Object.assign(document.documentElement.style, {
      backgroundColor: theme.colorBackground,
    });
  }, []);
  return (
    <ThemeContext.Provider value={theme}>
      {props.children}
    </ThemeContext.Provider>
  );
}
