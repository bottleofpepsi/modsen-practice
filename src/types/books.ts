export type Book = {
    id: string;
    title: string;
    authors: string[] | undefined;
    category: string | undefined;
    thumbnailLink: string | undefined;
};

export interface DetailedBook extends Book {
    description: string;
    publisher: string | undefined;
    publishedDate: string | undefined;
    isbn: string | undefined;
    allCategories: string[];
    pageCount: number | undefined;
    mediumImageLink: string | undefined;
    largeImageLink: string | undefined;
}

export type Books = {
    total: number;
    books: Book[];
};
