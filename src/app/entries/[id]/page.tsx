import Link from "next/link";
import Image from "next/image";

import { ArrowLeft } from "lucide-react";
import { format, formatDistanceToNow } from "date-fns";

import { Avatar, AvatarFallback, AvatarImage } from "@/vendor/ui/avatar";
import { Card, CardContent, CardFooter, CardHeader } from "@/vendor/ui/card";
import { Badge } from "@/vendor/ui/badge";
import { Button } from "@/vendor/ui/button";

import { EMOTION_STYLES } from "@/shared/constants/emotions";
import { Variant, VARIANT_ICONS, VARIANT_STYLES } from "@/shared/constants/variants";
import ShareButtons from "@/shared/components/share-buttons";
import { getEntry } from "@/shared/service/entries";

export default async function EntryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const entry = await getEntry(id);

  if (!entry) {
    return {
      title: "Entry not found - astryss",
    };
  }

  const emotionClass = EMOTION_STYLES[entry.emotion];
  const variants: Variant[] = entry.variants || [];

  const createdAt = new Date(entry.created_at);
  const createdAtToNow = formatDistanceToNow(createdAt, { addSuffix: true });
  const createdAtFormatted = format(createdAt, "MMMM d, yyyy 'at' h:mm a");

  return (
    <main className="main-container">
      <div className="md:w-2/3 mx-auto mt-8">
        <Link href="/entries">
          <Button variant="neutral" className="cursor-pointer">
            <ArrowLeft />
            Entries
          </Button>
        </Link>

        <Card className="mt-6 border-4">
          <CardHeader className="border-b-8 py-8 px-8 -mt-6 bg-white">
            <div className="flex items-center gap-4">
              <Avatar className="rounded-none size-20">
                <AvatarImage src={`${entry.avatarUrl}`} alt="Avatar" />
                <AvatarFallback>
                  {entry.displayName.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>

              <div>
                <h1 className="text-lg font-bold line-clamp-1">{entry.displayName}</h1>
                <p className="opacity-50">{createdAtToNow}</p>
                <div className="flex gap-2 mt-2">
                            {variants?.map((variant) => {
                    const variantClass = VARIANT_STYLES[variant] ?? "bg-gray-200";
                    const Icon = VARIANT_ICONS[variant];
      
                    return (
                      <Badge key={variant} className={`${variantClass}`}>
                        <Icon className='stroke-3'/>
                        {variant}
                      </Badge>
                    )
                  })}
                </div>
              </div>
            </div>
          </CardHeader>

          <CardContent className={`px-8 py-8 -my-6 relative ${emotionClass}`}>
            <Image
              src={`/assets/emotions/${entry.emotion}.png`}
              width={150}
              height={150}
              alt={`${entry.emotion} emotion`}
              className="hidden md:block absolute h-full w-auto top-0 right-0 opacity-15"
            />
            
            <h2 className="font-bold text-2xl mb-1">{entry.title}</h2>
            <p className="md:text-lg leading-relaxed min-h-36 opacity-75">{entry.content}</p>
          </CardContent>

          <CardFooter className="border-t-4 px-4 py-4 -mb-6 flex justify-between bg-white">
            <ShareButtons
              url={`https://astryss.com/entries/${entry._id}`}
              title={entry.title}
              description={entry.content}
            />

            <p className="text-sm opacity-50">{createdAtFormatted}</p>
          </CardFooter>
        </Card>

        <div className="mt-6">
          <h2 className="text-xl">
            Emotion: 
            <span className="opacity-75 capitalize"> {entry.emotion}</span>
          </h2>
        </div>
      </div>
    </main>
  )
}