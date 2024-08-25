/* empty css                                         */
import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_BxUm2yVT.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BWOdbTHq.mjs';
/* empty css                                         */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$category = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$category;
  let articles = [];
  const category = Astro2.params.category;
  try {
    const response = await fetch(
      `https://cms.2077.xyz/api/articles/category/${category}/`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    articles = data.data;
  } catch (error) {
    console.error("Error fetching articles:", error);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${category} | 2077 Research`, "description": "Deep dives and technical analyses on Ethereum infrastructure, protocols, and applications", "data-astro-cid-o37a6lt4": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-screen-3xl m-auto" data-astro-cid-o37a6lt4> <section class="pt-8 px-6 lg:px-32 mb-24" data-astro-cid-o37a6lt4> <div class="flex justify-between" data-astro-cid-o37a6lt4> <div class="menu hidden lg:block bg-black text-white rounded-xl h-[520px] mr-12 xl:w-1/6" data-astro-cid-o37a6lt4> <div class="font-bold mt-16 px-8 flex flex-col" data-astro-cid-o37a6lt4> ${Array.from(
    new Set(
      articles.flatMap(
        (article) => article.categories.map(
          (category2) => category2.name
        )
      )
    )
  ).map((cat) => renderTemplate`<a${addAttribute(`/categories/${cat}`, "href")}${addAttribute(
    cat === Astro2.params.category ? "p-4 mb-6 text-black bg-greenLm rounded" : "bg-black text-white p-4 mb-6",
    "class"
  )} data-astro-cid-o37a6lt4> ${cat} </a>`)} </div> </div> <ul class="mb-32 grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 xl:w-5/6" data-astro-cid-o37a6lt4> ${articles.map((article) => renderTemplate`<li${addAttribute(article.id, "data-key")} data-astro-cid-o37a6lt4> <a class="bg-transparent"${addAttribute(`/${article.slug}`, "href")} data-astro-cid-o37a6lt4> <img${addAttribute(`${article.thumb}`, "src")} alt="" width="720" height="480" data-astro-cid-o37a6lt4> </a> <ul class="flex py-2" data-astro-cid-o37a6lt4> ${article?.categories.map((category2) => renderTemplate`<li data-astro-cid-o37a6lt4> <a${addAttribute(`/categories/${category2.name}`, "href")} class="mr-2 font-bold flex items-center gap-0.5 text-sm bg-[#1B1B1B] text-[#C6FF50] max-w-fit-content px-2 py-1.5 rounded-md" data-astro-cid-o37a6lt4> ${category2.name} </a> </li>`)} </ul> <h2 class="mb-2 text-xl font-bold" data-astro-cid-o37a6lt4> ${article.title} </h2> <p class="text-lg text-gray-900 font-bold mb-4" data-astro-cid-o37a6lt4> ${article.summary} </p> </li>`)} </ul> </div> </section> </main> ` })} `;
}, "/Users/codewithfelix/Documents/Projects/2077/cmsFork/2077-CMS/research/src/pages/[categories]/[category].astro", void 0);

const $$file = "/Users/codewithfelix/Documents/Projects/2077/cmsFork/2077-CMS/research/src/pages/[categories]/[category].astro";
const $$url = "/[categories]/[category]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$category,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
