"use client";
import { Montserrat } from "next/font/google";
import { Provider } from 'react-redux';
import { store } from './store';
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body className={montserrat.className}>{children}</body>
      </html>
    </Provider>
  );
}
