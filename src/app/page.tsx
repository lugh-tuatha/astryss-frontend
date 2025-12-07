import { Button } from "@/vendor/ui/button";
import { Card, CardContent } from "@/vendor/ui/card";
import { ArrowRight, Star } from "lucide-react";

export default function Home() {
  return (
    <main className="main-container">
      <section className="mt-12 flex items-center">
        <div className="w-1/2">
          <div className="inline-flex items-center gap-2 bg-accent text-main px-6 py-4 rotate-4 hover:rotate-0 transition-all cursor-pointer">
            <Star className="w-5 h-5" />
            Version 2.0
          </div>
          <h1 className="text-8xl mt-6 text-accent">astryss*</h1>
          <Card className="bg-main mt-8">
            <CardContent>
              Send your feelings to the stars — a place for your thoughts to live. The stars are listening.
            </CardContent>
          </Card>
          <p className="mt-8">Share your thoughts anonymously with a community that listens. No judgments, no profiles — just pure, honest feelings floating among the stars.</p>
          <div className="mt-8 flex items-center gap-6">
            <Button className="px-8 py-6 cursor-pointer">
              Release
              <ArrowRight />
            </Button>
            <Button variant="neutral" className="px-8 py-6 cursor-pointer">Learn More</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
