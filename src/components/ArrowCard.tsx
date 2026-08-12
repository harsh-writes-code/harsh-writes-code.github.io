import { formatDate } from "@lib/utils"
import type { CollectionEntry } from "astro:content"

type Props = {
  entry: CollectionEntry<"projects">
  pill?: boolean
}

export default function ArrowCard({entry, pill}: Props) {
    return (
      <a href={`/${entry.collection}/${entry.id}`} class="group py-6 gap-4 flex items-start sm:items-center border-b border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 transition-colors duration-300 ease-in-out">
      <div class="w-full blend">
        <div class="flex flex-wrap items-center gap-2">
          {pill &&
            <div class="eyebrow px-2 py-0.5 rounded-full border border-black/15 dark:border-white/20">
              {entry.collection}
            </div>
          }
          {entry.data.date &&
            <div class="eyebrow">
              {formatDate(entry.data.date)}
            </div>
          }
        </div>
        <div class="font-bold text-lg sm:text-xl mt-2 text-black dark:text-white group-hover:translate-x-1 blend">
          {entry.data.title}
        </div>

        <div class="text-sm sm:text-base line-clamp-2 mt-1">
          {entry.data.summary}
        </div>
        <ul class="flex flex-wrap mt-3 gap-1.5">
          {entry.data.tags.map((tag: string) => (
            <li class="text-xs uppercase tracking-wide py-0.5 px-1.5 rounded border border-black/10 dark:border-white/15 text-black/50 dark:text-white/50">
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 mt-1 sm:mt-0 stroke-current opacity-40 group-hover:opacity-100 group-hover:stroke-black group-hover:dark:stroke-white blend">
        <line x1="5" y1="12" x2="19" y2="12" class="scale-x-0 group-hover:scale-x-100 translate-x-4 group-hover:translate-x-1 transition-all duration-300 ease-in-out" />
        <polyline points="12 5 19 12 12 19" class="translate-x-0 group-hover:translate-x-1 transition-all duration-300 ease-in-out" />
      </svg>
    </a>
   )
}