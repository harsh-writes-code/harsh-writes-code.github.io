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
      <div class="relative group">
        <input name="search" type="text" value={query()} onInput={onInput} autocomplete="off" spellcheck={false} placeholder="What are you looking for?" class="w-full px-1 py-3 pl-9 bg-transparent outline-none text-xl sm:text-2xl font-semibold text-black dark:text-white placeholder:text-black/25 placeholder:dark:text-white/25 border-b border-black/15 dark:border-white/15 focus:border-black focus:dark:border-white transition-colors duration-300 ease-in-out"/>
        <svg class="absolute size-5 left-0 top-1/2 -translate-y-1/2 stroke-current opacity-40">
          <use href={`/ui.svg#search`}/>
        </svg>
      </div>
      {(query().length >= 2 && results().length >= 1) && (
        <div class="mt-12">
          <div class="eyebrow mb-2">
            Found {results().length} results for '{query()}'
          </div>
          <ul>
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