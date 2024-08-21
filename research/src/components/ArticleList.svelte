<script lang="ts">
    import { type Article } from '../types/article'
    import { categories } from '../stores/filters.store'

    export let articles: Article[]
    let filteredArticles: Article[]

    $: {
        if ($categories.length === 0) {
            filteredArticles = articles
        } else {
            filteredArticles = articles.filter((article) =>
                article.categories.some((category) =>
                    $categories.includes(category.name),
                ),
            )
        }
    }
</script>

<ul
    class="mb-32 grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-4 xl:w-5/6"
>
    {#each filteredArticles as article (article.id)}
        <li class="flex flex-col gap-y-1">
            <a class="bg-transparent" href={`/${article.slug}`}>
                <img src={article.thumb} alt="" width="720" height="480" />
                <ul class="flex py-2">
                    {#each article.categories as category}
                        <li>
                            <a
                                href={`/categories/${category.name}`}
                                class="mr-2 font-bold flex items-center gap-0.5 text-sm bg-[#1B1B1B] text-[#C6FF50] max-w-fit-content px-2 py-1.5 rounded-md"
                            >
                                {category.name}
                            </a>
                        </li>
                    {/each}
                </ul>
                <h2 class="mb-2 text-xl font-bold">{article.title}</h2>
                <p class="text-lg text-gray-900 font-bold mb-4">
                    {article.summary}
                </p>
            </a>
        </li>
    {/each}
</ul>
