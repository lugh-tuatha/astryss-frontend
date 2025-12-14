"use client"
import { useState } from "react";

import { motion } from "motion/react"
import { formatDistanceToNow, format } from 'date-fns';

import { Button } from "@/vendor/ui/button";

import { Emotion, EMOTIONS } from "@/shared/constants/emotions";
import { EntriesResponse, Entry } from "@/shared/types/entry";
import { useEntries } from "@/shared/hooks/use-entries";
import ReleaseMessagesCard from "./release-messages-card";

export default function ReleaseMessages({ initialEntries }: { initialEntries: EntriesResponse }) {
  const [selectedEmotion, setSelectedEmotion] = useState<Emotion | undefined>();

  const { data: entries, fetchNextPage, hasNextPage, isFetchingNextPage, error } = useEntries({ 
    limit: 18, 
    type: 'release', 
    emotion: selectedEmotion,
    initialData: !selectedEmotion ? initialEntries : undefined,    
  });

  const allEntries = entries?.pages.flatMap((page) => page.data) ?? [];

  const formattedEntries = allEntries.map((entry) => ({
    ...entry,
    createdAtToNow: formatDistanceToNow(new Date(entry.created_at), { addSuffix: true }),
    createdAtFormatted: format(new Date(entry.created_at), "MMM d, yyyy"),
  }));

  if (error) {
    return (
      <div className="text-center text-red-600 py-8">
        <p className="font-bold">Error loading entries</p>
        <p className="text-sm">{error.message}</p>
      </div>
    )
  }

  return (
    <section className="mt-8">
      <motion.div 
        className="flex justify-center gap-4 flex-wrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {EMOTIONS.map((emotion) => (
          <motion.button
            key={emotion}
            onClick={() => setSelectedEmotion(emotion)}
            className={`will-change-transform px-6 py-3 border-4 border-accent cursor-pointer ${selectedEmotion === emotion ? 'bg-accent text-main' : 'bg-white text-black'}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {emotion.charAt(0).toUpperCase() + emotion.slice(1)}
          </motion.button>
        ))}
      </motion.div>

      <div className="mt-10 grid md:grid-cols-3 gap-10">
        {formattedEntries.map((entry: Entry, index: number) => (
          <ReleaseMessagesCard 
            key={entry._id}
            id={entry._id}
            displayName={entry.displayName}
            avatarUrl={entry.avatarUrl}
            title={entry.title}
            content={entry.content}
            emotion={entry.emotion}
            variants={entry.variants}
            createdAtToNow={entry.createdAtToNow}
            createdAtFormatted={entry.createdAtFormatted}
            index={index}
            className={index % 4 === 0 ? 'rotate-1' : index % 3 === 1 ? '-rotate-1' : index % 3 === 1 ? 'rotate-2' : 'rotate-1'}
          />
        ))}
      </div>

      {hasNextPage && (
        <div className="flex justify-center">
          <Button
            variant="neutral"
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            className="mt-8 cursor-pointer"
          >
            {isFetchingNextPage ? 'Loading...' : 'Load More'}
          </Button>
        </div>
      )}

      {!hasNextPage && allEntries.length > 0 && (
        <div className="mt-8 text-center text-gray-500">
          <p>You've reached the end! 🎉</p>
        </div>
      )}
    </section>
  )
}