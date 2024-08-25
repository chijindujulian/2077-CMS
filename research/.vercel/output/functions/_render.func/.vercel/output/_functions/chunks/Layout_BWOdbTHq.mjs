import { c as createComponent, r as renderTemplate, d as addAttribute, b as createAstro, e as renderHead, a as renderComponent, m as maybeRenderHead, f as renderSlot } from './astro/server_BxUm2yVT.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                              */

const $$Astro$2 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/codewithfelix/Documents/Projects/2077/cmsFork/2077-CMS/research/node_modules/.pnpm/astro@4.14.2_rollup@4.21.0_sass@1.77.8_typescript@5.5.4/node_modules/astro/components/ViewTransitions.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$1 = createAstro();
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseHead;
  Astro2.props.ogImage ??= new URL(
    `${Astro2.url.origin}/assets/EIPsForNerds7-EIP-7657(SyncCommitteeSlashings).webp`
  );
  const { title, description, ogImage } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="generator"', '><meta name="title"', '><meta name="description"', '><meta property="og:type" content="website"><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="twitter:card" content="summary_large_image"><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', '><link rel="icon" type="image/svg" href="/favicon.svg"><script defer data-domain="research.2077.xyz" src="https://plausible.io/js/script.outbound-links.js"><\/script><title>', "</title>", "", "</head> "])), addAttribute(Astro2.generator, "content"), addAttribute(`${title}`, "content"), addAttribute(description, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(ogImage, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(ogImage, "content"), title, renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}), renderHead());
}, "/Users/codewithfelix/Documents/Projects/2077/cmsFork/2077-CMS/research/src/components/layout/BaseHead.astro", void 0);

const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="py-24 px-6 lg:px-32 flex-column p-6 gap-y-4 pb:16 bg-[url('/footer.png')] bg-cover bg-center" data-astro-cid-mtxgg6pp> <div class="grid gap-y-8 lg:flex lg:justify-between pb-24 lg:pb-48" data-astro-cid-mtxgg6pp> <div class="grid text-center lg:text-left gap-y-2 mb-4" data-astro-cid-mtxgg6pp> <p class="text-white" data-astro-cid-mtxgg6pp>Resources</p> <a href="https://eip2077.info" target="_blank" class="font-semibold" href="" data-astro-cid-mtxgg6pp>EIP-2077</a> <a href="https://eips.wiki" target="_blank" class="font-semibold" href="" data-astro-cid-mtxgg6pp>EIP Wiki</a> <a href="https://research.2077.xyz" target="_blank" class="font-semibold" href="" data-astro-cid-mtxgg6pp>2077 Research</a> <!--
            <a
                href="https://etherpedia.2077.xyz"
                target="_blank"
                class="font-semibold"
                href="">Etherpedia</a
            >
            --> </div> <div class="grid text-center gap-y-2 mb-4" data-astro-cid-mtxgg6pp> <p class="text-white" data-astro-cid-mtxgg6pp>Community</p> <div class="flex justify-center gap-x-1" data-astro-cid-mtxgg6pp> <a href="https://discord.gg/2077collective" target="_blank" data-astro-cid-mtxgg6pp> <svg class="hover:scale-110 transition-transform duration-300" width="74" height="86" viewBox="0 0 74 86" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-mtxgg6pp> <path d="M73.9068 64.0489V21.6763L37.2364 0.48999L0.568359 21.6763V64.0489L37.2364 85.2352L73.9068 64.0489Z" fill="white" class="hover:fill-[#C6FF50]" data-astro-cid-mtxgg6pp></path> <path d="M52.8615 29.2749C50.152 28.0119 47.2186 27.0952 44.1628 26.5655C44.1361 26.5647 44.1094 26.5697 44.0848 26.5803C44.0601 26.5908 44.0381 26.6066 44.0202 26.6266C43.6536 27.2989 43.2258 28.1749 42.9406 28.8471C39.6995 28.3582 36.4034 28.3582 33.1623 28.8471C32.8771 28.1545 32.4493 27.2989 32.0622 26.6266C32.0418 26.5859 31.9807 26.5655 31.9196 26.5655C28.8639 27.0952 25.9508 28.0119 23.221 29.2749C23.2006 29.2749 23.1803 29.2953 23.1599 29.3157C17.6188 37.6068 16.091 45.6739 16.8447 53.6595C16.8447 53.7003 16.8651 53.741 16.9058 53.7614C20.5727 56.4504 24.097 58.0801 27.5805 59.1598C27.6416 59.1802 27.7027 59.1598 27.7231 59.1191C28.5379 57.9987 29.2713 56.8171 29.9028 55.5745C29.9436 55.493 29.9028 55.4115 29.8213 55.3911C28.6602 54.9429 27.5601 54.4133 26.4804 53.8021C26.3989 53.7614 26.3989 53.6392 26.4601 53.5781C26.6841 53.4151 26.9082 53.2317 27.1323 53.0688C27.1731 53.028 27.2342 53.028 27.2749 53.0484C34.2827 56.2467 41.8405 56.2467 48.7668 53.0484C48.8075 53.028 48.8686 53.028 48.9094 53.0688C49.1335 53.2521 49.3576 53.4151 49.5816 53.5984C49.6631 53.6595 49.6631 53.7818 49.5613 53.8225C48.502 54.454 47.3815 54.9633 46.2204 55.4115C46.1389 55.4319 46.1185 55.5337 46.1389 55.5948C46.7908 56.8375 47.5241 58.019 48.3186 59.1395C48.3797 59.1598 48.4408 59.1802 48.502 59.1598C52.0058 58.0801 55.5301 56.4504 59.197 53.7614C59.2377 53.741 59.2581 53.7003 59.2581 53.6595C60.1544 44.4313 57.771 36.4253 52.9429 29.3157C52.9226 29.2953 52.9022 29.2749 52.8615 29.2749ZM30.9621 48.7908C28.8639 48.7908 27.1119 46.8555 27.1119 44.472C27.1119 42.0886 28.8231 40.1533 30.9621 40.1533C33.1215 40.1533 34.8327 42.1089 34.8123 44.472C34.8123 46.8555 33.1011 48.7908 30.9621 48.7908ZM45.161 48.7908C43.0628 48.7908 41.3108 46.8555 41.3108 44.472C41.3108 42.0886 43.022 40.1533 45.161 40.1533C47.3204 40.1533 49.0316 42.1089 49.0112 44.472C49.0112 46.8555 47.3204 48.7908 45.161 48.7908Z" fill="#2B2D2D" data-astro-cid-mtxgg6pp></path> </svg> </a> <a href="https://www.farcaster.id/c/2077collective" target="_blank" data-astro-cid-mtxgg6pp> <svg class="hover:scale-110 transition-transform duration-300" width="71" height="82" viewBox="0 0 71 82" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-mtxgg6pp> <path d="M70.7201 61.1151V20.6101L35.666 0.357666L0.614197 20.6101V61.1151L35.666 81.3675L70.7201 61.1151Z" fill="white" class="hover:fill-[#C6FF50]" data-astro-cid-mtxgg6pp></path> <path d="M23.9755 24.3577H47.8852V58.3577H44.3755V42.7835H44.3411C43.9532 38.4791 40.3357 35.106 35.9304 35.106C31.525 35.106 27.9075 38.4791 27.5196 42.7835H27.4852V58.3577H23.9755V24.3577Z" fill="#2B2D2D" data-astro-cid-mtxgg6pp></path> <path d="M17.6142 29.1833L19.04 34.0092H20.2464V53.5318C19.6407 53.5318 19.1497 54.0228 19.1497 54.6286V55.9447H18.9303C18.3246 55.9447 17.8335 56.4357 17.8335 57.0415V58.3576H30.1174V57.0415C30.1174 56.4357 29.6264 55.9447 29.0207 55.9447H28.8013V54.6286C28.8013 54.0228 28.3102 53.5318 27.7045 53.5318H26.3884V29.1833H17.6142Z" fill="#2B2D2D" data-astro-cid-mtxgg6pp></path> <path d="M44.5949 53.5318C43.9891 53.5318 43.498 54.0228 43.498 54.6286V55.9447H43.2787C42.673 55.9447 42.1819 56.4357 42.1819 57.0415V58.3576H54.4658V57.0415C54.4658 56.4357 53.9748 55.9447 53.369 55.9447H53.1497V54.6286C53.1497 54.0228 52.6587 53.5318 52.0529 53.5318V34.0092H53.2594L54.6852 29.1833H45.911V53.5318H44.5949Z" fill="#2B2D2D" data-astro-cid-mtxgg6pp></path> </svg> </a> <a href="https://x.com/2077Collective" target="_blank" data-astro-cid-mtxgg6pp> <svg class="hover:scale-110 transition-transform duration-300" width="74" height="86" viewBox="0 0 74 86" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-mtxgg6pp> <path d="M73.4297 64.0489V21.6763L36.7593 0.48999L0.0912781 21.6763V64.0489L36.7593 85.2352L73.4297 64.0489Z" fill="white" class="hover:fill-[#C6FF50]" data-astro-cid-mtxgg6pp></path> <path d="M41.2296 40.4741L53.2337 25.5967H47.8758L38.7137 36.9592L30.5854 25.5967H18.9213L32.5312 44.6184L19.7407 60.467H25.1003L35.047 48.1403L43.871 60.467H55.5351L41.2296 40.4741ZM37.08 45.6175L34.5606 42.0973L24.7795 28.4334H28.807L36.7016 39.4472L39.2175 42.9691L49.71 57.6303H45.6825L37.08 45.6175Z" fill="#2B2D2D" data-astro-cid-mtxgg6pp></path> </svg> </a> </div> </div> <div class="text-center lg:text-right mb-4" data-astro-cid-mtxgg6pp> <p class="text-white" data-astro-cid-mtxgg6pp>Contact</p> <a class="font-semibold" href="" data-astro-cid-mtxgg6pp>admin@2077.xyz</a> </div> </div> <div class="flex items-center justify-center text-white" id="subscribe" data-astro-cid-mtxgg6pp> <div class="text-center flex flex-col justify-center gap-4 w-max" data-astro-cid-mtxgg6pp> <div data-astro-cid-mtxgg6pp> <h3 class="text-3xl font-semibold" data-astro-cid-mtxgg6pp>Your Ethereum Edge</h3> <p class="text-white" data-astro-cid-mtxgg6pp>
Get first-hand research delivered by our team of experts.
</p> </div> <form action="https://cms.2077.xyz/newsletter/subscribe/" method="post" id="subscribe-form" class="flex justify-center" data-astro-cid-mtxgg6pp> <!-- CSRF token will be added dynamically --> <input type="email" name="email" placeholder="Enter your email" required class="outline-none rounded-l bg-white border border-black w-max-content p-2 text-sm w-full border-r-none text-black" data-astro-cid-mtxgg6pp> <button type="submit" class="rounded-r bg-[#91b208] px-4 py-2 font-bold min-w-[110px] min-h-[42px] text-white" data-astro-cid-mtxgg6pp>
Subscribe
</button> </form> <span id="response-message" class="text-sm" data-astro-cid-mtxgg6pp></span> </div>  </div> <div class="grid mt-16 flex justify-center" data-astro-cid-mtxgg6pp> <a href="/" class="logo" data-astro-cid-mtxgg6pp> <img src="/logo-white.webp" alt="" width="197" height="58" data-astro-cid-mtxgg6pp> </a> </div> <div class="mt-48 text-center text-white" data-astro-cid-mtxgg6pp> <p data-astro-cid-mtxgg6pp>(C) 2024 2077 Collective. All rights reserved.</p> </div> </footer> `;
}, "/Users/codewithfelix/Documents/Projects/2077/cmsFork/2077-CMS/research/src/layouts/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description, ogImage } = Astro2.props;
  const _ogImage = new URL(
    "https://res.cloudinary.com/dltdrlzdg/image/upload/v1720021067/ShMk1Iw_vrsqmi.webp"
  );
  return renderTemplate(_a || (_a = __template([`<script>
    // We need this script here to avoid flashing the light theme before the dark theme is applied
    const theme = localStorage.getItem('theme')
    if (theme === 'dark') {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
<\/script> <html lang="en" class="h-full"> `, "", "", '<body class="bg-white dark:bg-black dark:text-white min-h-screen"> ', " ", " </body></html>"])), renderComponent($$result, "BaseHead", $$BaseHead, { "ogImage": _ogImage, "title": title, "description": description }), renderComponent($$result, "Header", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "/Users/codewithfelix/Documents/Projects/2077/cmsFork/2077-CMS/research/src/components/Header.svelte", "client:component-export": "default" }), maybeRenderHead(), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/Users/codewithfelix/Documents/Projects/2077/cmsFork/2077-CMS/research/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
