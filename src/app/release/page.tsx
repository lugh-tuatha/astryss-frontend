import './release.css';

import { Textarea } from "@/vendor/ui/textarea";
import TypewriterText from "@/shared/components/typewriter-text";
import { Card, CardContent, CardFooter } from "@/vendor/ui/card";
import { Send, Sparkle } from "lucide-react";
import { Button } from '@/vendor/ui/button';

export default function ReleasePage() {
  return (
    <main className="main-container">
      <section className="mt-8 flex flex-col items-center">
        <h1 className="text-6xl text-accent">astryss*</h1>
        <div className="inline-flex bg-accent px-6 py-4 rotate-2 mt-6 text-secondary-background">
          Send your feelings to the stars — a place for your thoughts to&nbsp;
          <TypewriterText />.
        </div>
        <div className="inline-flex items-center gap-2 bg-chart-3 px-6 py-2 -rotate-1 mt-8 text-foreground border-4">
          The stars are listening.
          <Sparkle className="w-5 h-5"/>
        </div>
        <Card className="mt-12 p-0 border-4 w-1/2 gap-0 rounded-none -rotate-2">
          <CardContent className="p-0">
            <Textarea placeholder="Share your feelings with stars..." className="resize-none rounded-none min-h-52 no-focus px-6 py-5 leading-relaxed"/>
          </CardContent>
          <CardFooter className="bg-main px-6 py-4 border-t-4 flex items-center justify-between">
              <span>1/500</span>
              <Button className='cursor-pointer'>Send to Stars <Send /></Button>
          </CardFooter>
        </Card>
      </section>

      <section>
        
      </section>
    </main>
  )
}