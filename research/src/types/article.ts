export interface Category {
    name: string
}

export interface Article {
    id: string
    title: string
    authors: { username: string }[]
    content: string
    views: string
    summary: string
    categories: Category[]
    thumb: {
        url: string
    }
    slug: string
}
