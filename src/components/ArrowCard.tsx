import { formatDate } from "@lib/utils"
import type { CollectionEntry } from "astro:content"

type Props = {
  entry: CollectionEntry<"projects">
  pill?: boolean
}

export default function ArrowCard({entry, pill}: Props) {
    return (
      <a
        href={`/${entry.collection}/${entry.id}`}
        data-tilt
        class="card-3d glass group h-full flex flex-col justify-between gap-4 p-5 sm:p-6 rounded-2xl overflow-hidden"
      >
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
        <div class="font-bold text-lg sm:text-xl mt-2 text-black dark:text-white group-hover:text-accent blend">
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
      <div class="flex items-center gap-1.5 text-sm font-semibold text-black/40 dark:text-white/40 group-hover:text-black group-hover:dark:text-white blend">
        View
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 stroke-current group-hover:translate-x-1 blend">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </div>
    </a>
   )
}