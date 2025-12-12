import Link from "next/link";

import { ArrowRight, Star } from "lucide-react";
import * as motion from "motion/react-client";

import { Button } from "@/vendor/ui/button";
import { Card, CardContent } from "@/vendor/ui/card";

export default function Home() {
  return (
    <main className="main-container">
      <section className="mt-12 flex items-center">
        <div className="w-full md:w-1/2">
          <div>
            <div className="inline-flex items-center gap-2 bg-accent text-main px-6 py-4 rotate-4 hover:rotate-0 transition-all cursor-pointer">
              <Star className="w-5 h-5" />
              Version 2.0
            </div>

            <motion.h1 
              className="text-8xl mt-6 text-accent font-black"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            >
              astryss*
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            >
              <Card className="bg-main mt-8">
                <CardContent>
                  Send your feelings to the stars — a place for your thoughts to live. The stars are listening.
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.p 
              className="mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Share your thoughts anonymously with a community that listens. No judgments, no profiles — just pure, honest feelings floating among the stars.
            </motion.p>
          </div>

          <motion.div
            className="mt-8 flex gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          >
            <Link href="/release">
              <Button className="px-8 py-6 cursor-pointer">
                Release
                <ArrowRight />
              </Button>
            </Link>
            <Button variant="neutral" className="px-8 py-6 cursor-pointer">Learn More</Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
