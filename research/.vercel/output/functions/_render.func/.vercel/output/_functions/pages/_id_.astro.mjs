/* empty css                                      */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, f as renderSlot, b as createAstro, a as renderComponent, u as unescapeHTML } from '../chunks/astro/server_BxUm2yVT.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BWOdbTHq.mjs';
import 'clsx';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const $$Astro$8 = createAstro();
const $$Email = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Email;
  const { url = Astro2.request.url, title, description } = Astro2.props;
  let URL = `mailto:?subject=${title}&body=${description}%0A${url}`;
  return renderTemplate`${maybeRenderHead()}<a class="social-share-btn" target="_blank"${addAttribute(URL, "href")} rel="noopener noreferrer" data-astro-cid-ihrh7hs4> ${renderSlot($$result, $$slots["default"], renderTemplate`  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-ihrh7hs4><title>Email</title><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" data-astro-cid-ihrh7hs4></path></svg> `)} </a>`;
}, "/Users/codewithfelix/Documents/Projects/2077/cmsFork/2077-CMS/research/node_modules/.pnpm/astro-social-share@2.0.2/node_modules/astro-social-share/src/Email.astro", void 0);

const $$Astro$7 = createAstro();
const $$Facebook = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Facebook;
  const { url = Astro2.request.url } = Astro2.props;
  let URL = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  return renderTemplate`${maybeRenderHead()}<a class="social-share-btn" target="_blank"${addAttribute(URL, "href")} rel="noopener noreferrer" data-astro-cid-m5fqzfxg> ${renderSlot($$result, $$slots["default"], renderTemplate`  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-m5fqzfxg><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" data-astro-cid-m5fqzfxg></path></svg> `)} </a>`;
}, "/Users/codewithfelix/Documents/Projects/2077/cmsFork/2077-CMS/research/node_modules/.pnpm/astro-social-share@2.0.2/node_modules/astro-social-share/src/Facebook.astro", void 0);

const $$Astro$6 = createAstro();
const $$HackerNews = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$HackerNews;
  const { url = Astro2.request.url, title } = Astro2.props;
  let URL = `http://news.ycombinator.com/submitlink?u=${url}&t=${title}`;
  return renderTemplate`${maybeRenderHead()}<a class="social-share-btn" target="_blank"${addAttribute(URL, "href")} rel="noopener noreferrer" data-astro-cid-mkk65pu3> ${renderSlot($$result, $$slots["default"], renderTemplate`  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-mkk65pu3><title>Y Combinator</title><path d="M0 24V0h24v24H0zM6.951 5.896l4.112 7.708v5.064h1.583v-4.972l4.148-7.799h-1.749l-2.457 4.875c-.372.745-.688 1.434-.688 1.434s-.297-.708-.651-1.434L8.831 5.896h-1.88z" data-astro-cid-mkk65pu3></path></svg> `)} </a>`;
}, "/Users/codewithfelix/Documents/Projects/2077/cmsFork/2077-CMS/research/node_modules/.pnpm/astro-social-share@2.0.2/node_modules/astro-social-share/src/HackerNews.astro", void 0);

const $$Astro$5 = createAstro();
const $$LinkedIn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$LinkedIn;
  const { url = Astro2.request.url } = Astro2.props;
  let URL = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
  return renderTemplate`${maybeRenderHead()}<a class="social-share-btn" target="_blank"${addAttribute(URL, "href")} rel="noopener noreferrer" data-astro-cid-g6qq46tl> ${renderSlot($$result, $$slots["default"], renderTemplate`  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-g6qq46tl><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" data-astro-cid-g6qq46tl></path></svg> `)} </a>`;
}, "/Users/codewithfelix/Documents/Projects/2077/cmsFork/2077-CMS/research/node_modules/.pnpm/astro-social-share@2.0.2/node_modules/astro-social-share/src/LinkedIn.astro", void 0);

const $$Astro$4 = createAstro();
const $$Reddit = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Reddit;
  const { url = Astro2.request.url, title } = Astro2.props;
  const encoded_url = encodeURIComponent(url);
  let URL = `https://www.reddit.com/submit?url=${encoded_url}&title=${title}`;
  return renderTemplate`${maybeRenderHead()}<a class="social-share-btn" target="_blank"${addAttribute(URL, "href")} rel="noopener noreferrer" data-astro-cid-m5cdef5h> ${renderSlot($$result, $$slots["default"], renderTemplate`  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-m5cdef5h><title>Reddit</title><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" data-astro-cid-m5cdef5h></path></svg> `)} </a>`;
}, "/Users/codewithfelix/Documents/Projects/2077/cmsFork/2077-CMS/research/node_modules/.pnpm/astro-social-share@2.0.2/node_modules/astro-social-share/src/Reddit.astro", void 0);

const $$Astro$3 = createAstro();
const $$Twitter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Twitter;
  const { url = Astro2.request.url, description, via } = Astro2.props;
  let URL = `https://twitter.com/intent/tweet?url=${url}`;
  if (description) URL += `&text=${description}`;
  if (via) URL += `&via=${via}`;
  return renderTemplate`${maybeRenderHead()}<a class="social-share-btn" target="_blank"${addAttribute(URL, "href")} rel="noopener noreferrer" data-astro-cid-p54nhqmw> ${renderSlot($$result, $$slots["default"], renderTemplate`  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-p54nhqmw><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" data-astro-cid-p54nhqmw></path></svg> `)} </a>`;
}, "/Users/codewithfelix/Documents/Projects/2077/cmsFork/2077-CMS/research/node_modules/.pnpm/astro-social-share@2.0.2/node_modules/astro-social-share/src/Twitter.astro", void 0);

const $$Astro$2 = createAstro();
const $$Whatsapp = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Whatsapp;
  const { url = Astro2.request.url, description, style } = Astro2.props;
  let URL = `whatsapp://send?text=`;
  if (description) URL += `${description} `;
  URL += `${url}`;
  return renderTemplate`${maybeRenderHead()}<a class="social-share-btn" target="_blank"${addAttribute(encodeURI(URL), "href")} rel="noopener noreferrer" data-action="share/whatsapp/share" data-astro-cid-nneamb4z> ${renderSlot($$result, $$slots["default"], renderTemplate`  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-nneamb4z><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" data-astro-cid-nneamb4z></path></svg> `)} </a>`;
}, "/Users/codewithfelix/Documents/Projects/2077/cmsFork/2077-CMS/research/node_modules/.pnpm/astro-social-share@2.0.2/node_modules/astro-social-share/src/Whatsapp.astro", void 0);

const $$Astro$1 = createAstro();
const $$SocialShare = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SocialShare;
  const DEFAULT_COMPONENTS = [$$Twitter, $$Facebook, $$HackerNews, $$LinkedIn, $$Reddit, $$Email, $$Whatsapp];
  const { buttons = DEFAULT_COMPONENTS, url = Astro2.request.url, title, description, via } = Astro2.props;
  return renderTemplate`${renderSlot($$result, $$slots["astro-social-share-css"], renderTemplate`  ${maybeRenderHead()}<div class="astro-social-share"> ${buttons.map((Button) => renderTemplate`${renderComponent($$result, "Button", Button, { "url": url, "description": description, "via": via, "title": title })}`)} </div>`)}`;
}, "/Users/codewithfelix/Documents/Projects/2077/cmsFork/2077-CMS/research/node_modules/.pnpm/astro-social-share@2.0.2/node_modules/astro-social-share/src/SocialShare.astro", void 0);

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const id = Astro2.params.id;
  let article = null;
  try {
    const response = await fetch(`https://cms.2077.xyz/api/articles/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    if (data && data.success && data.data) {
      article = data;
    } else {
      throw new Error("Invalid article data");
    }
  } catch (error) {
    console.error("Error fetching article:", error);
  }
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    }).format(date);
  };
  const created_at = article?.data.created_at;
  const formattedDate = formatDate(created_at);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": article?.data?.title ?? "", "description": article?.data?.summary ?? "", "data-astro-cid-p5zaeqd4": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-screen-3xl m-auto" data-astro-cid-p5zaeqd4> <article class="pt-8 px-6 lg:px-32" data-astro-cid-p5zaeqd4> <div class="mb-4" data-astro-cid-p5zaeqd4> <a href="/" data-astro-cid-p5zaeqd4>&larr; Back</a> </div> ${article ? renderTemplate`<article data-astro-cid-p5zaeqd4> <div data-astro-cid-p5zaeqd4> <ul class="flex gap-x-2 mb-4" data-astro-cid-p5zaeqd4> ${article.data?.categories.map(
    (category) => renderTemplate`<li data-astro-cid-p5zaeqd4> <a class="font-bold flex items-center gap-0.5 text-sm bg-[#1B1B1B] text-[#C6FF50] max-w-fit-content px-2 py-1.5 rounded-md"${addAttribute(`/categories/${category.name}`, "href")} data-astro-cid-p5zaeqd4> ${category.name} </a> </li>`
  )} </ul> <div class="flex flex-col gap-4 mb-2" data-astro-cid-p5zaeqd4> <h1 class="text-5xl font-bold" data-astro-cid-p5zaeqd4> ${article.data?.title} </h1> <p class="text-2xl font-bold" data-astro-cid-p5zaeqd4> ${article.data?.summary} </p> </div> <div class="mb-2 md:flex items-center justify-between" data-astro-cid-p5zaeqd4> <div class="pt-2 text-[#a2a8ad]" data-astro-cid-p5zaeqd4> <div class="flex gap-x-2" data-astro-cid-p5zaeqd4> <span data-astro-cid-p5zaeqd4>Written by:</span>${" "} <span class="flex gap-x-2 capitalize" data-astro-cid-p5zaeqd4> ${article.data?.authors.map((author) => renderTemplate`<a${addAttribute(`https://twitter.com/${author.twitter_username}`, "href")} target="_blank" class="underline underline-offset-2 transition duration-300 hover:text-green-900" data-astro-cid-p5zaeqd4> ${author.username} </a>`)} </span> </div> <div data-astro-cid-p5zaeqd4> <span class="" data-astro-cid-p5zaeqd4>${formattedDate}</span> </div> </div> <div class="flex items-center gap-x-1" data-astro-cid-p5zaeqd4> <p class="text-xl pr-2" data-astro-cid-p5zaeqd4>Share:</p> ${renderComponent($$result2, "TwitterShareButton", $$Twitter, { "data-astro-cid-p5zaeqd4": true }, { "default": ($$result3) => renderTemplate` <svg class="hover:scale-110 transition-transform duration-300" width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-p5zaeqd4> <path d="M34.9341 29.871V9.95699L17.7 0L0.467041 9.95699V29.871L17.7 39.8279L34.9341 29.871Z" fill="white" class="hover:fill-[#C6FF50]" data-astro-cid-p5zaeqd4></path> <path d="M19.8009 18.7913L25.4425 11.7993H22.9245L18.6185 17.1394L14.7985 11.7993H9.31665L15.7129 20.739L9.70177 28.1874H12.2206L16.8953 22.3942L21.0423 28.1874H26.5242L19.8009 18.7913ZM17.8508 21.2085L16.6667 19.5542L12.0699 13.1325H13.9627L17.6729 18.3087L18.8553 19.9639L23.7865 26.8542H21.8937L17.8508 21.2085Z" fill="#2B2D2D" data-astro-cid-p5zaeqd4></path> </svg> ` })} ${renderComponent($$result2, "FacebookShareButton", $$Facebook, { "data-astro-cid-p5zaeqd4": true }, { "default": ($$result3) => renderTemplate` <svg class="hover:scale-110 transition-transform duration-300" width="36" height="40" viewBox="0 0 36 40" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-p5zaeqd4> <path d="M35.4012 29.871V9.95699L18.1671 0L0.934082 9.95699V29.871L18.1671 39.8279L35.4012 29.871Z" fill="white" class="hover:fill-[#C6FF50]" data-astro-cid-p5zaeqd4></path> <path d="M18.0835 11C13.1215 11 9.0835 15.038 9.0835 20C9.0835 24.962 13.1215 29 18.0835 29C23.0455 29 27.0835 24.962 27.0835 20C27.0835 15.038 23.0455 11 18.0835 11ZM18.0835 12.5C22.2347 12.5 25.5835 15.8488 25.5835 20C25.5853 21.7955 24.9415 23.5317 23.7695 24.892C22.5975 26.2522 20.9755 27.1456 19.1995 27.4093V22.187H21.3355L21.6707 20.0173H19.1995V18.8322C19.1995 17.9323 19.4957 17.132 20.338 17.132H21.6917V15.239C21.454 15.2068 20.9507 15.137 19.9997 15.137C18.0137 15.137 16.8497 16.1855 16.8497 18.575V20.0173H14.8082V22.187H16.8497V27.3905C15.0983 27.1022 13.5064 26.2006 12.3585 24.8468C11.2106 23.4929 10.5815 21.775 10.5835 20C10.5835 15.8488 13.9322 12.5 18.0835 12.5Z" fill="black" data-astro-cid-p5zaeqd4></path> </svg> ` })} </div> </div> <div class="flex justify-center py-8" data-astro-cid-p5zaeqd4> <img${addAttribute(`${article.data?.thumb}`, "src")} alt="" width="1024" height="682" data-astro-cid-p5zaeqd4> </div> <div class=" text-red
                                max-w-screen-lg m-auto flex flex-col gap-y-4 mb-32 dark:text-white
                                [&>p>a]:text-green-900 [&>p>a]:font-semibold
                                [&>h1]:text-3xl [&>h2]:text-2xl [&>h3]:text-xl [&>h4]:text-lg [&>h1]:font-semibold
                                [&>h2]:font-semibold [&>h3]:font-semibold [&>h4]:font-semibold
                                [&>ul]:list-disc [&>ol]:list-decimal [&>ul]:pl-6 [&>ol>li]:pl-4 [&>ol]:pl-6
                                [&>ul>li>ul]:list-disc [&>ul>li>ul]:pl-8 [&>ul>li>ul>li>ul]:list-disc [&>ul>li>ul>li>ul]:pl-8
                                [&>ul>li>ul>li>ul>li>ul]:list-disc [&>ul>li>ul>li>ul>li>ul]:pl-8
                                [&>p>em]:text-gray-200 [&>p>em]:text-center [&>p>img]:mx-auto [&>p>img]:mt-4 [&>p:has(img)]:text-center
                                [&>p>em>img]:mx-auto [&>p>em>img]:mt-4 [&>h3>img]:mx-auto [&>h3:has(img)]:text-center
                                [&>pre]:bg-gray [&>pre]:text-white [&>pre]:rounded-md [&>pre]:p-4 [&>pre]:overflow-x-scroll
                                [&>pre>code>.hljs-string]:text-[#d69d85] [&>pre>code>.hljs-literal]:text-[#569cd6] [&>pre>code>.hljs-comment]:text-[#a2a8ad]
                                [&>pre>code>.hljs-keyword]:text-[#d69d85]
                                " data-astro-cid-p5zaeqd4>${unescapeHTML(article.data?.content.replace(
    /<hr\s*\/?>/g,
    ""
  ))}</div> </div> </article>` : renderTemplate`<p data-astro-cid-p5zaeqd4> ${article === null ? "Error loading article. Please try again." : "Article not found."} </p>`} </article> </main> ` })} `;
}, "/Users/codewithfelix/Documents/Projects/2077/cmsFork/2077-CMS/research/src/pages/[id].astro", void 0);

const $$file = "/Users/codewithfelix/Documents/Projects/2077/cmsFork/2077-CMS/research/src/pages/[id].astro";
const $$url = "/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
