import { Space_Grotesk, JetBrains_Mono } from "next/font/google"
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

import { Github } from "lucide-react";

import { Button } from "@/vendor/ui/button";

import ReactQueryProvider from "@/shared/lib/react-query-provider";
import Header from "@/shared/components/navigation-menu";
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
  // const res = await fetch("https://api.github.com/repos/lugh-tuatha/astryss-frontend", {
  //   headers: {
  //     "User-Agent": "Next.js"
  //   },
  //   next: { revalidate: 14400 }
  // });

  // if (!res.ok) {
  //   return Response.json({ stars: 0 }, { status: 500 });
  // }

  // const data = res.ok ? await res.json() : { stargazers_count: 0 };

  return (
    <html lang="en">
      <body className={`${jetbrains.className} antialiased`}>
        <ReactQueryProvider>
          <header className="mt-4 flex justify-center items-center gap-4">
            <Header />
            <Button variant="neutral" className="cursor-pointer hidden md:flex" asChild>
              <Link href="https://github.com/lugh-tuatha/astryss-frontend" target="_blank" >
                0 Stars
                <Github />
              </Link>
            </Button>
          </header>
          {children}
          {/* <Footer /> */}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
