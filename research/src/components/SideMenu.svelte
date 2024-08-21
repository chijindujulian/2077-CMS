<script lang="ts">
    import { type Article } from '../types/article'
    import {
        toggleCategory,
        clearCategories,
        categories,
    } from '../stores/filters.store'

    export let articles: Article[]
    let availableCategories: string[] = []

    $: {
        availableCategories = Array.from(
            new Set(
                articles.flatMap((article) =>
                    article.categories.map((category) => category.name),
                ),
            ),
        )
    }
</script>

<div
    class="hidden menu dark:bg-gray bg-black lg:block lg:min-w-[180px] mr-12 rounded-md xl:w-1/6 h-[520px]"
>
    <div class="font-bold pt-2 px-2 flex flex-col">
        <a
            class="block px-4 py-4 text-white hover:text-black hover:bg-greenLm hover:rounded cursor-pointer"
            class:text-green={$categories.length === 0}
            on:click={() => clearCategories()}
        >
            All
        </a>
        {#each availableCategories as category}
            <a
                class="block px-4 py-4 text-white hover:text-black hover:bg-greenLm hover:rounded cursor-pointer"
                class:text-green={$categories.includes(category)}
                on:click={() => toggleCategory(category)}
            >
                {category}
            </a>
        {/each}
    </div>
</div>

<div class="flex flex-wrap gap-2 block lg:hidden mb-8">
    <button
        class="
            mr-2 font-bold flex items-center gap-0.5 text-sm bg-[#1B1B1B]
            text-gray-100 min-w-fit px-2 py-1.5 rounded-md hover:text-green
            hover:bg-black
        "
        class:text-green={$categories.length === 0}
        on:click={() => clearCategories()}
    >
        All
    </button>
    {#each availableCategories as category}
        <button
            class="
                mr-2 font-bold flex items-center gap-0.5 text-sm bg-[#1B1B1B]
                text-gray-100 min-w-fit px-2 py-1.5 rounded-md hover:text-green
                hover:bg-black
            "
            class:text-green={$categories.includes(category)}
            on:click={() => toggleCategory(category)}
        >
            {category}
        </button>
    {/each}
</div>

<style scoped>
    .menu {
        clip-path: polygon(30px 0, 100% 0, 290% 20px, 85% 100%, 0 100%, 0 30px);
    }
</style>
