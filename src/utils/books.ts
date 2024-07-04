import { Book } from "../types/books";

export const removeDuplicates = (books: Book[]): Book[] => {
    const uniqueIds: string[] = [];
    return books.filter((book) => {
        if (uniqueIds.includes(book.id)) {
            return false;
        }
        uniqueIds.push(book.id);
        return true;
    });
};

export const filterBooksWithoutImage = (books: Book[]): Book[] => {
    return books.filter((book) => book.thumbnailLink);
};

export const filterBooks = (books: Book[]): Book[] => {
    return filterBooksWithoutImage(removeDuplicates(books));
};
