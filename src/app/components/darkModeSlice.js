"use client";
import { createSlice } from "@reduxjs/toolkit";

const getSystemColorScheme = () => {
  if (typeof window !== "undefined") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  return false;
};

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState: getSystemColorScheme(),
  reducers: {
    toggleDarkMode: (state) => !state,
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
