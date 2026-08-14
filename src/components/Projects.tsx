import type { CollectionEntry } from "astro:content"
import { createEffect, createSignal, For } from "solid-js"
import ArrowCard from "@components/ArrowCard"
import { cn } from "@lib/utils"

type Props = {
  tags: string[]
  data: CollectionEntry<"projects">[]
}

export default function Projects({ data, tags }: Props) {
  const [filter, setFilter] = createSignal(new Set<string>())
  const [projects, setProjects] = createSignal<CollectionEntry<"projects">[]>([])

  createEffect(() => {
    setProjects(data.filter((entry) => 
      Array.from(filter()).every((value) => 
        entry.data.tags.some((tag:string) => 
          tag.toLowerCase() === String(value).toLowerCase()
        )
      )
    ))
  })

  function toggleTag(tag: string) {
    setFilter((prev) => 
      new Set(prev.has(tag) 
        ? [...prev].filter((t) => t !== tag) 
        : [...prev, tag]
      )
    )
  }

  return (
    <div class="grid grid-cols-1 sm:grid-cols-4 gap-x-12 gap-y-8">
      <div class="col-span-4 sm:col-span-1">
        <div class="sticky top-28">
          <div class="eyebrow mb-3">Filter</div>
          <ul class="flex flex-wrap sm:flex-col gap-x-4 gap-y-2">
            <For each={tags}>
              {(tag) => (
                <li>
                  <button onClick={() => toggleTag(tag)} class={cn("group flex gap-2 items-center text-left", "text-black/50 dark:text-white/50 hover:text-black hover:dark:text-white", "transition-colors duration-300 ease-in-out", filter().has(tag) && "text-black dark:text-white")}>
                    <span class={cn("size-1.5 rounded-full shrink-0 bg-black/30 dark:bg-white/30 group-hover:bg-black group-hover:dark:bg-white", "transition-all duration-300 ease-in-out", filter().has(tag) && "bg-accent shadow-[0_0_10px_2px_rgba(99,102,241,0.6)]")} />
                    {tag}
                  </button>
                </li>
              )}
            </For>
          </ul>
        </div>
      </div>
      <div class="col-span-4 sm:col-span-3">
        <div class="flex flex-col">
          <div class="eyebrow mb-4">
            Showing {projects().length} of {data.length} projects
          </div>
          <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {projects().map((project) => (
              <li>
                <ArrowCard entry={project} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
