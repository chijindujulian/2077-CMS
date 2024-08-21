<script lang="ts">
    import { slide } from 'svelte/transition'
    import { quintOut } from 'svelte/easing'
    import ExternalLink from './icons/ExternalLink.svelte'
    import Hamburguer from './icons/Hamburguer.svelte'

    let open = false
</script>

<button class="lg:hidden cursor-pointer p-2" on:click={() => (open = !open)}>
    <Hamburguer />
</button>

{#if open}
    <button
        class="fixed inset-0 bg-black bg-opacity-50 z-40"
        on:click={() => (open = false)}
    ></button>
    <div
        class="fixed inset-y-0 right-0 md:w-2/5 max-w-sm w-full max-w-full bg-white dark:bg-gray shadow-lg z-50 overflow-y-auto flex flex-col p-4"
        transition:slide={{ duration: 300, easing: quintOut }}
    >
        <button
            class="self-end text-gray-700 p-2"
            on:click={() => (open = false)}>X</button
        >
        <div class="flex flex-col gap-4">
            <div>
                <div class="flex items-center gap-2">
                    <h3 class="font-semibold">Resources</h3>
                    <ExternalLink />
                </div>
                <ul class="mt-4 space-y-4">
                    <li>
                        <a
                            href="https://eip2077.info"
                            target="_blank"
                            class="block px-4 py-2">EIP-2077</a
                        >
                    </li>
                    <li>
                        <a
                            href="https://eips.wiki"
                            target="_blank"
                            class="block px-4 py-2">EIP Wiki</a
                        >
                    </li>
                    <li>
                        <a
                            href="https://research.2077.xyz"
                            target="_blank"
                            class="block px-4 py-2">2077 Labs</a
                        >
                    </li>
                    <li>
                        <a
                            href="https://etherpedia.2077.xyz"
                            target="_blank"
                            class="block px-4 py-2"
                        >
                            Etherpedia
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <a
                    href="https://2077.xyz/support"
                    target="_blank"
                    class="flex items-center gap-2"
                >
                    <h3 class="font-semibold">Support us</h3>
                    <ExternalLink />
                </a>
            </div>
            <div class="w-full flex items-center justify-center mt-16">
                <a
                    on:click={() => (open = false)}
                    href="#subscribe"
                    class="bg-greenLm text-black px-8 py-2 rounded font-bold"
                >
                    Subscribe
                </a>
            </div>
        </div>
    </div>
{/if}
