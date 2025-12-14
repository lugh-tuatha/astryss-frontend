"use client"

import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger, 
  navigationMenuTriggerStyle
} from "@/vendor/ui/navigation-menu"
import Link from "next/link";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Release",
    href: "/release",
    description:
      "Release your feelings to the stars — a place for your thoughts to live.",
  },
  {
    title: "Unsent",
    href: "/unsent",
    description:
      "A collection of text messages that never reached their ddestination.",
  },
  {
    title: "Entries",
    href: "/entries",
    description:
      "Browse all public entries created across the platform.",
  },
]

export default function Header() {
  return (
    <NavigationMenu className="z-5">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/">
              Home
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden">
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/">
              About
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Begin Here</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-full md:w-[400px] gap-2 p-2">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden">
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/">
              API
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/faqs">
              FAQ's
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

interface ListItemProps {
  title: string;
  children: React.ReactNode;
  href: string;
}

function ListItem({ title, children, href }: ListItemProps) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link href={href} className="block text-main-foreground select-none space-y-1 rounded-base border-2 border-transparent p-3 leading-none no-underline outline-hidden transition-colors hover:border-border">
          <div className="text-base font-heading leading-none">{title}</div>
          <p className="font-base line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
ListItem.displayName = "ListItem"