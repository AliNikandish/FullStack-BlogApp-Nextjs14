import NavBar from "@/components/NavBar";
import "./globals.css";
import type { Metadata } from "next";
import { NextAuthProvider } from "@/components/Provider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-VazirMedium" dir="rtl">
        <NextAuthProvider>
          <NavBar />
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
