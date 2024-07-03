import { Book } from "../types";

export function setDelimeter(array: string[] | undefined, delimeter: string) {
    return array ? array.join(delimeter) : "";
}

export function getDateFromString(
    stringWithDate: string | undefined
): string[] | undefined {
    return stringWithDate?.split(/\D+/g);
}

export function uniqueCategories(categories: string[] | undefined) {
    return setDelimeter(
        [...new Set(categories?.join(" ").split(/[^a-z]+/gi))],
        " / "
    );
}

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
