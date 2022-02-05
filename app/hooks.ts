/** EXTERNALS **/

import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

/** LOCALS **/

import type { AppDispatch, RootState } from "./store.ts";
import { Theme, ThemeContext } from "./theme.tsx";

/** MAIN **/

export function useAppDispatch(): AppDispatch {
  return useDispatch();
}

export const useAppSelector = <T extends unknown>(
  selector: (state: RootState) => T,
): T => useSelector(selector);

export function useTheme(): Theme {
  return useContext(ThemeContext);
}
