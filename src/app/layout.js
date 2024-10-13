"use client";
import { useEffect } from 'react';
import { Montserrat } from "next/font/google";
import { Provider } from 'react-redux';
import { store } from './store';
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({ children }) {

  useEffect(() => {
    document.title = 'Home | Ian Cong';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Ian\'s Personal Home Page');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Ian\'s Personal Home Page';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <Provider store={store}>
      <html lang="en">
        <body className={montserrat.className}>{children}</body>
      </html>
    </Provider>
  );
}
