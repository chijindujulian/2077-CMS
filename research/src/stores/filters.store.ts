import { atom } from 'nanostores'

export const categories = atom<string[]>([])
export const searchTerm = atom<string>('')

export function addCategory(category: string) {
    const currentCategories = categories.get()

    if (!currentCategories.includes(category)) {
        categories.set([...currentCategories, category])
    }
}

export function removeCategory(category: string) {
    const currentCategories = categories.get()
    categories.set(currentCategories.filter((c) => c !== category))
}

export function clearCategories() {
    categories.set([])
}

export function toggleCategory(category: string) {
    const currentCategories = categories.get()

    if (currentCategories.includes(category)) {
        removeCategory(category)
    } else {
        addCategory(category)
    }
}
