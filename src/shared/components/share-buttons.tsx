"use client";

import { Button } from "@/vendor/ui/button";
import { Facebook, Twitter } from "lucide-react";
import { 
  FacebookShareButton, 
  TwitterShareButton 
} from "react-share";

type ShareButtonsProps = {
  url: string;
  title: string;
  description?: string;
};

export default function ShareButtons({ url, title, description }: ShareButtonsProps) {
  return (
    <div className="flex gap-4 items-center">
      <TwitterShareButton
        url={url}
        title={title}
        via="astryss"
      >
        <div className="cursor-pointer rounded-base bg-main px-3 py-2 border-2 border-border">
          <Twitter />
        </div>
      </TwitterShareButton>

      <FacebookShareButton
        url={url}
        hashtag="#astryss"
      >
        <div className="cursor-pointer rounded-base bg-main px-3 py-2 border-2 border-border">
          <Facebook />
        </div>
      </FacebookShareButton>
    </div>
  )
}