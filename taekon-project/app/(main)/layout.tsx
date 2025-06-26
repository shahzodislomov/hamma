"use client";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import React, { ReactNode } from "react";

interface Childprops {
  children: ReactNode;
}
const Layout = ({ children }: Childprops) => {
  return (
    <div>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <nav className="pb-20">
          <Navbar />
        </nav>
        <main>{children}</main>
        <Toaster />
      </ThemeProvider>
    </div>
  );
};

export default Layout;
