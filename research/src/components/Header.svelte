<script lang="ts">
    import Sun from './icons/Sun.svelte'
    import Moon from './icons/Moon.svelte'
    import Menu from './icons/Menu.svelte'
    import Dropdown from './Dropdown.svelte'
    import {
        toggleTheme,
        getTheme,
        theme,
        anotherStuff,
    } from '../stores/theme.store'
</script>

<header class="py-8 px-6 lg:px-32 max-w-screen-3xl m-auto">
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

            <button class="lg:hidden">
                <Menu />
            </button>

            <div class="font-bold hidden lg:flex items-center gap-x-8">
                <Dropdown />

                <a href="https://2077.xyz/support" class="font-bold hover:text-green"
                    >Support us</a
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

<style scoped>
    .sidebar {
        clip-path: polygon(30px 0, 100% 0, 280% 0px, 80% 100%, 0 100%, 0 30px);
        display: none;
    }

    .sidebar > a:hover {
        clip-path: polygon(20px 0, 100% 0, 300% 0px, 100% 100%, 0 100%, 0 20px);
    }

    .sidebar > a:last-child:hover {
        clip-path: polygon(50px 0, 10% 0, 137% 0px, 80% 100%, 0 100%, 0 0px);
    }

    .sidebar.show {
        display: block;
    }

    .resources-button:hover .svg-path {
        fill: #c6ff50;
    }

    .resources-button:focus + .sidebar,
    .resources-button:hover + .sidebar {
        display: block;
    }

    /* The container <div> - needed to position the dropdown content */
    .dropdown {
        position: relative;
        display: inline-block;
    }

    /* Dropdown Content (Hidden by Default) */
    .dropdown-content {
        display: none;
        position: absolute;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;
    }

    /* Change color of dropdown links on hover */
    .dropdown-content a:hover {
        background-color: #ddd;
    }

    /* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */
    .show {
        display: block;
    }
</style>
