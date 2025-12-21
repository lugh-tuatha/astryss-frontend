import { Metadata } from "next";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/vendor/ui/accordion";

const FAQS: { id: number, question: string; answer: string; }[] = [
  {
    id: 1,
    question: "Are My Posts Truly Anonymous?",
    answer: "Yes, your posts are genuinely anonymous. Even our developers remain unaware of your true identity."
  },
  {
    id: 2,
    question: "Will the person I wrote this about know it's for them?",
    answer: "Only if you tell them. Astryss doesn't snitch.",
  },
  {
    id: 3,
    question: "I cried while writing an entry, and I would like to file charges. Help?",
    answer: "Heh.",
  },
]

export const metadata: Metadata = {
  title: "FAQ's - astryss*",
  description: "astryss* is an anonymous freedom wall where thoughts, emotions, and unspoken feelings are released into the stars. No profiles. No judgment. Just honesty.",
  keywords: ["Astryss FAQ's", "anonymous sharing", "freedom wall", "star themed website"]
};

export default function Home() {
  return (
    <main className="main-container pt-12 md:pt-20">
      <h1 className="mt-8 text-5xl font-black text-center">FAQ's</h1>
      <p className="opacity-50 text-center mt-2">Yes, somehow we do have Frequently Asked Questions.</p>
        <Accordion type="single" collapsible className="max-w-2xl mt-8 space-y-4 mx-auto">
          {FAQS.map((faq) => (
            <AccordionItem key={faq.id} value={`faq-${faq.id}`} className="w-full">
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
    </main>
  )
}