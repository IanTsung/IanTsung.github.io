"use client";
import { configureStore } from '@reduxjs/toolkit';
import darkModeReducer from './components/darkModeSlice';

export const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
  },
});