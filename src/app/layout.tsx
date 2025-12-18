import { Space_Grotesk, JetBrains_Mono } from "next/font/google"
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

import { Github } from "lucide-react";

import { Button } from "@/vendor/ui/button";
import { Toaster } from "@/vendor/ui/sonner"

import ReactQueryProvider from "@/shared/providers/react-query-provider";
import Header from "@/shared/components/navigation-menu";
import Footer from "@/shared/components/footer";
// import Footer from "@/shared/components/footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
})

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://astryss.com"),
  openGraph: {
    siteName: "astryss*",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@astryss",
  },
};

export default async function RootLayout({  
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
            <Button variant="neutral" className="cursor-pointer hidden md:flex" asChild>
              <Link href="https://github.com/lugh-tuatha/astryss-frontend" target="_blank" >
                2 Stars
                <Github />
              </Link>
            </Button>
          </header>
          {children}
          <Footer />
          <Toaster />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
