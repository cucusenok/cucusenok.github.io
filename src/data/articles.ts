export interface Article {
  title: string
  subtitle?: string
  date: string
  url: string
}

export const mediumUrl = 'https://medium.com/@cucusenok'

/** Maintained by hand: newest first. Empty list hides the rows and keeps the Medium link. */
export const articles: Article[] = []
