import { Metadata } from "next";
import Link from "next/link";

import { ArrowRight, Star } from "lucide-react";
import * as motion from "motion/react-client";

import { Button } from "@/vendor/ui/button";
import { Card, CardContent } from "@/vendor/ui/card";
import Image from "next/image";
import Timeline from "@/features/about/components/timeline";

export const metadata: Metadata = {
  title: "About - astryss*",
  description: "astryss* is an anonymous freedom wall where thoughts, emotions, and unspoken feelings are released into the stars. No profiles. No judgment. Just honesty.",
  keywords: ["astryss", "anonymous sharing", "freedom wall", "star themed website"]
};

export default function AboutPage() {
  return (
    <main className="main-container">
      <section className="md:h-screen pt-24 md:pt-32">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          className="inline-flex items-center gap-2 bg-accent text-main px-6 py-4 rotate-4 hover:rotate-0"
        >
          <Star className="w-5 h-5" />
          Version 2.0
        </motion.div>

        <div className="md:flex items-center gap-16">
          <div className="w-full md:w-1/2">
            <motion.h1 
              className="text-6xl md:text-8xl mt-6 text-accent font-black"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.30, ease: "easeOut" }}
            >
              astryss*
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45, ease: "easeOut" }}
            >
              <Card className="bg-main mt-6 md:mt-8">
                <CardContent>
                  Send your feelings to the stars — a place for your thoughts to live. The stars are listening.
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.p 
              className="mt-6 md:mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.60 }}
            >
              Share your thoughts anonymously with a community that listens. No judgments, no profiles — just pure, honest feelings floating among the stars.
            </motion.p>

            <motion.div
              className="mt-6 md:mt-8 flex gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.75, ease: "easeOut" }}
            >
              <Link href="/release">
                <Button className="px-8 py-6 cursor-pointer">
                  Release
                  <ArrowRight />
                </Button>
              </Link>
              <Link href="/entries">
                <Button variant="neutral" className="px-8 py-6 cursor-pointer">Read Others</Button>
              </Link>
            </motion.div>
          </div>

          <div className="w-full h-full mt-6 md:mt-0 md:w-1/2 relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0}}
              transition={{ duration: 0.5, delay: 0.90, ease: "easeOut" }}
            >
              <Image 
                src="/assets/about-hero-bg.png" 
                className="w-full rounded-base"
                width={600} 
                height={400} 
                alt="About Hero Background" 
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                y: [0, -20, 0],
                x: [0, 10, 0],
                rotate: [0, 5, 0, -5, 0],
              }}
              transition={{
                opacity: { duration: 0.5, delay: 1.05, ease: "easeOut" },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                x: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
              className="w-2/3 absolute"
            >
              <Image 
                src="/assets/astronaut.png" 
                width={400} 
                height={225} 
                alt="Astronaut holding star" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Timeline />
    </main>
  );
}
