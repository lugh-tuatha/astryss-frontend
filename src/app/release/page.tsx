import { Metadata } from 'next';
import './release.css';

import { Sparkle } from "lucide-react";
import * as motion from "motion/react-client";

import TypewriterText from "@/shared/components/typewriter-text";
import { getEntriesServerSide } from '@/shared/service/entries';
import ReleaseSample from './components/release-samples';
import WordCounterBox from './components/word-counter-box';

export const metadata: Metadata = {
  title: 'Release - astryss*',
  description: 'Release your feelings to the stars — a place for your thoughts to live.',
  keywords: ["astryss", "freedom wall", "anonymous messages", "online diary", "safe space to share feelings"],
  openGraph: {
    title: "",
    description: "Release your feelings to the stars — a place for your thoughts to live. The stars are listening.",
    images: [""]
  },
  twitter: {
    title: "",
    description: "Release your feelings to the stars — a place for your thoughts to live. The stars are listening.",
    images: [""]
  },
};

export default async function ReleasePage() {
  const entries = await getEntriesServerSide(6);

  return (
    <main className="main-container">
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-8 flex flex-col items-center"
      >
        <h1 className="text-6xl text-accent">astryss*</h1>

        <div className="flex bg-accent px-6 py-4 rotate-2 mt-6 text-secondary-background">
          <div>
            Send your feelings to the stars — a place for your thoughts to&nbsp;
            <span className='md:hidden text-main'>live</span>
          </div>
          <span className='hidden'><TypewriterText /></span>
        </div>

        <div className="inline-flex items-center gap-2 bg-chart-3 px-6 py-2 -rotate-1 mt-8 text-foreground border-4">
          The stars are listening.
          
          <Sparkle className="w-5 h-5"/>
        </div>

        <WordCounterBox />
      </motion.section>

      <ReleaseSample initialEntries={entries} />
    </main>
  )
}