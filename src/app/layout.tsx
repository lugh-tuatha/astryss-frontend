import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google"
import "./globals.css";
import Header from "@/shared/components/navigation-menu";
import { Button } from "@/vendor/ui/button";
import ReactQueryProvider from "@/shared/lib/react-query-provider";
import { Github } from "lucide-react";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
})

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Astryss",
  description: "A place for your thoughts to live",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrains.className} antialiased`}>
        <ReactQueryProvider>
          <header className="mt-4 flex justify-center items-center gap-4">
            <Header />
            <Button variant="neutral" className="cursor-pointer">
              2 Stars
              <Github />
            </Button>
          </header>
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
