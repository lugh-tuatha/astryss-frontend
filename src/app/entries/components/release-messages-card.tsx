import Image from "next/image";
import { motion } from "motion/react"
import { formatDistanceToNow, format } from 'date-fns';

import { Badge } from "@/vendor/ui/badge";
import { Button } from "@/vendor/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/vendor/ui/card";
import { Code, Share, Share2, Sparkles } from "lucide-react";
import { cn } from "@/vendor/lib/utils";
import { Emotion, EMOTION_STYLES } from "@/shared/constants/emotions";
import { Variant, VARIANT_STYLES } from "@/shared/constants/variants";

type ReleaseSampleCardProps = {
  className?: string;
  index: number;
  displayName: string;
  avatarUrl: string;
  content: string;
  emotion: Emotion;
  variants?: Variant[];
  createdAt: string;
}

export default function ReleaseMessagesCard({ className, index, displayName, avatarUrl,  content, emotion, variants, createdAt }: ReleaseSampleCardProps) {
  const emotionClass = EMOTION_STYLES[emotion] ?? "bg-gray-300";

  return (
    <motion.div
      className={cn(
        className,
        "will-change-transform",
      )} 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 18) * 0.05 }}
    >
      <Card className="rounded-none border-4">
        <CardHeader className="border-b-4 py-4 px-4 -mt-6 bg-white">
          <Sparkles className='w-5 h-5 absolute right-5'/>

          <div className="flex items-center gap-4">
            <Image 
              src={avatarUrl}
              width={40} 
              height={40} 
              alt="default avatar" 
              className="border border-foreground aspect-square"
            />
            <div>
              <h1 className="text-sm font-bold line-clamp-1">{displayName}</h1>
              <p className="text-sm opacity-50">
                {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
              </p>
            </div>
          </div>
          <div className="flex gap-2 mt-2">
            {variants?.map((variant) => {
              const variantClass = VARIANT_STYLES[variant] ?? "bg-gray-200";
              
              return (
                <Badge key={variant} className={`${variantClass} rounded-none`}>
                  <Code className='stroke-3'/>
                  {variant}
                </Badge>
              )
            })}
          </div>
        </CardHeader>
        <CardContent className={`px-4 py-4 -my-6 relative ${emotionClass}`}>
          <Image 
            src={`/assets/emotions/${emotion}.png`} 
            width={150} 
            height={150} 
            alt="sadness" 
            className="absolute h-full top-0 right-0 opacity-15"
          />
          <p className="leading-relaxed min-h-36 line-clamp-6">{content}</p>
        </CardContent>
        <CardFooter className="border-t-4 px-4 py-4 -mb-6 flex justify-between bg-white">
          <Button variant="noShadow" className="cursor-pointer rounded-none">
            <Share2 />
          </Button>
          <p className="text-sm opacity-50">
            {format(new Date(createdAt), "MMM d, yyyy")}
          </p>
        </CardFooter>
      </Card> 
    </motion.div>
  )
}