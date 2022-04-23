export type article = {
    user_id: string,
    title: string,
    description: string,
    content: string
}

export type homePageType = {
    articleList: Array<article>
}
