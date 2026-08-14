import type { CollectionEntry } from "astro:content"
import { createEffect, createSignal } from "solid-js"
import Fuse from "fuse.js"
import ArrowCard from "@components/ArrowCard"

type Props = {
  data: CollectionEntry<"projects">[]
}

export default function Search({data}: Props) {
  const [query, setQuery] = createSignal("")
  const [results, setResults] = createSignal<CollectionEntry<"projects">[]>([])

  const fuse = new Fuse(data, {
    keys: ["slug", "data.title", "data.summary", "data.tags"],
    includeMatches: true,
    minMatchCharLength: 2,
    threshold: 0.4,
  })

  createEffect(() => {
    if (query().length < 2) {
      setResults([])
    } else {
      setResults(fuse.search(query()).map((result) => result.item))
    }
  })

  const onInput = (e: Event) => {
    const target = e.target as HTMLInputElement
    setQuery(target.value)
  }

  return (
    <div class="flex flex-col">
      <div class="relative group glass ring-accent-glow rounded-2xl px-4 transition-shadow duration-300 ease-in-out">
        <input name="search" type="text" value={query()} onInput={onInput} autocomplete="off" spellcheck={false} placeholder="What are you looking for?" class="w-full px-1 py-4 pl-9 bg-transparent outline-none text-xl sm:text-2xl font-semibold text-black dark:text-white placeholder:text-black/25 placeholder:dark:text-white/25"/>
        <svg class="absolute size-5 left-4 top-1/2 -translate-y-1/2 stroke-current opacity-40">
          <use href={`/ui.svg#search`}/>
        </svg>
      </div>
      {(query().length >= 2 && results().length >= 1) && (
        <div class="mt-12">
          <div class="eyebrow mb-4">
            Found {results().length} results for '{query()}'
          </div>
          <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {results().map(result => (
              <li>
                <ArrowCard entry={result} pill={true} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}