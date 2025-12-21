import { Metadata } from "next";

import StarField from "@/features/home/components/star-field";

import { Sparkle } from "lucide-react";
import * as motion from "motion/react-client";

export const metadata: Metadata = {
  title: "Home - astryss*",
  description: "astryss* is an anonymous freedom wall where thoughts, emotions, and unspoken feelings are released into the stars. No profiles. No judgment. Just honesty.",
  keywords: ["astryss", "anonymous sharing", "freedom wall", "star themed website", "space themed website", "masked emotions"]
};

export default function Home() {
  return (
    <main className="bg-linear-to-b from-[#0c0a1a] via-[#09040e] to-[#050208]">
      <StarField />

      <section className="main-container h-screen flex flex-col items-center justify-center gap-8">
        <motion.div
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{ delay: 2, duration: 0.75, ease: "easeOut" }} 
        >
          <Sparkle className="h-5 w-5 text-[#f6dbbc] fill-current animate-pulse"/>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: .5, duration: 1.4, ease: "easeOut" }}
          className="text-xl md:text-3xl text-white text-center"
        >
          Before stars were bright, they were quiet.
        </motion.p>
      </section>
    </main>
  );
}
