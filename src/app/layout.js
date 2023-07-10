"use client";

import Navbar from "@/components/Navbar";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

export const metadata = {
  title: "Pizza",
  description: "Pizza",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
