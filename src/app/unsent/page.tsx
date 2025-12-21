import { Metadata } from "next";

import * as motion from "motion/react-client";

import { Card } from "@/vendor/ui/card";
import PageUnderDevelopment from "@/shared/components/page-under-development";

export const metadata: Metadata = {
  title: 'Unsent - astryss*',
  description: 'A collection of text messages that never reached their destination.',
  keywords: ["astryss", "freedom wall", "anonymous messages", "the unsent project"],
  openGraph: {
    title: "",
    description: "A collection of text messages that never reached their ddestination.",
    images: [""]
  },
  twitter: {
    title: "",
    description: "A collection of text messages that never reached their destination.",
    images: [""]
  },
};

export default function EntriesPage() {
  return (
    <main className="main-container pt-12 md:pt-20">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card className="inline-flex px-8 mx-auto mt-8 bg-chart-3">
          <h1 className="text-xl md:text-6xl text-center font-normal">UNSENT MESSAGES</h1>
        </Card>

        <p className="mt-4 md:text-xl font-normal">Messages meant for someone, released without ever being sent.</p>

        <div className="mt-8 inline-flex items-center gap-2 bg-accent text-main px-6 py-4 rotate-2 hover:rotate-0 transition-all cursor-pointer">
          Found 0 Messages 
        </div>
      </motion.div>

      <PageUnderDevelopment />

      {/* <p>Heavily inspired by The Unsent Project</p> */}
    </main>
  )
}