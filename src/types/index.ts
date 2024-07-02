export type SearchParams = {
    query: string;
    category: string;
    sorting: string;
    startIndex: number;
};

export type Book = {
    id: string;
    title: string;
    authors: string[] | undefined;
    category: string | undefined;
    thumbnailLink: string | undefined;
};

export interface DetailedBook extends Book {}

export type Books = {
    total: number;
    books: Book[];
};
