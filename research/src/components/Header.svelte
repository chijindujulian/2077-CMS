<script lang="ts">
    import Sun from './icons/Sun.svelte'
    import Moon from './icons/Moon.svelte'
    import MobileNav from './MobileNav.svelte'
    import Dropdown from './Dropdown.svelte'
    import {
        toggleTheme,
        getTheme,
        theme,
        anotherStuff,
    } from '../stores/theme.store'
</script>

<header class="py-8 px-6 lg:px-32 max-w-screen-3xl m-auto w-full">
    <nav class="flex justify-between">
        <div>
            <a href="/" class="">
                <img
                    src="/logo-black.webp"
                    alt=""
                    width="197"
                    height="58"
                    class="dark:hidden block"
                />
                <img
                    src="/logo-white.webp"
                    alt=""
                    width="197"
                    height="58"
                    class="dark:block hidden"
                />
            </a>
        </div>

        <div class="flex items-center">
            <!-- <button
                id="btn"
                class="h-12 w-12 rounded-lg pr-8 hover:bg-gray-100 dark:hover:bg-gray-700"
                on:click={toggleTheme}
            >
                {#if $theme === 'dark'}
                    <Sun />
                {:else}
                    <Moon />
                {/if}
            </button> -->

            <MobileNav />

            <div class="font-bold hidden lg:flex items-center gap-x-8">
                <Dropdown />

                <a
                    href="https://2077.xyz/support"
                    target="_blank"
                    class="font-bold hover:text-green">Support us</a
                >
                <a
                    href="#subscribe"
                    class="bg-greenLm text-black px-8 py-2 rounded font-bold"
                >
                    Subscribe
                </a>
            </div>
        </div>
    </nav>
</header>
