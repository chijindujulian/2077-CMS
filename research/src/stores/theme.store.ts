import { atom } from 'nanostores'

const Themes = {
    Light: 'light',
    Dark: 'dark',
} as const
type Theme = (typeof Themes)[keyof typeof Themes]
const LOCAL_STORAGE_KEY = 'theme'

export const theme = atom<Theme>(getLocalStorageTheme())

export function toggleTheme() {
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

function getLocalStorageTheme(): Theme {
    const localStorageTheme = localStorage.getItem(LOCAL_STORAGE_KEY)

    if (!localStorageTheme) {
        return Themes.Light
    }

    if (localStorageTheme === Themes.Dark) {
        return Themes.Dark
    }

    return Themes.Light
}
