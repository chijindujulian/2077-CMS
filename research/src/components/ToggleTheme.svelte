<script lang="ts">
    import { toggleTheme, theme } from '../stores/theme.store'
    import Sun from './icons/Sun.svelte'
    import Moon from './icons/Moon.svelte'
    import { beforeUpdate } from 'svelte'

    beforeUpdate(() => {
        const theme = localStorage.getItem('theme')
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    })
</script>

<button
    id="btn"
    class="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-center"
    on:click={toggleTheme}
>
    {#if $theme === 'dark'}
        <Sun />
    {:else}
        <Moon />
    {/if}
</button>
