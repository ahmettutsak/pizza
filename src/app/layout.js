import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Pizza",
  description: "Pizza",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
