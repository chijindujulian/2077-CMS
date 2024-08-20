import { atom } from 'nanostores'

const Themes = {
    Light: 'light',
    Dark: 'dark',
} as const
type Theme = (typeof Themes)[keyof typeof Themes]
const LOCAL_STORAGE_KEY = 'theme'

export const theme = atom<Theme>(Themes.Light)

export const anotherStuff = atom<boolean>(false)

export function toggleTheme() {
    console.log('toggleTheme called')

    const currentTheme = localStorage.getItem(LOCAL_STORAGE_KEY)

    if (currentTheme === Themes.Dark || !currentTheme) {
        theme.set(Themes.Light)
        localStorage.setItem(LOCAL_STORAGE_KEY, Themes.Light)
        document.documentElement.classList.remove('dark')
    } else {
        theme.set(Themes.Dark)
        localStorage.setItem(LOCAL_STORAGE_KEY, Themes.Dark)
        document.documentElement.classList.add('dark')
    }
}

export function getTheme() {
    return theme
}
