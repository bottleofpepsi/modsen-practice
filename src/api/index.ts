import { Books, DetailedBook, SearchParams } from "../types";

interface Keyable {
    [key: string]: Keyable;
}

function processQuery(params: SearchParams): string {
    const API_KEY = process.env.API_KEY;
    const API_URL = process.env.API_URL;

    return (
        `${API_URL}?q=${params.query.trim().replace(/\s/g, "+")}` +
        `${params.category !== "all" ? `+subject:${params.category}` : ""}` +
        `&orderBy=${params.sorting}&startIndex=${params.startIndex}&maxResults=${30}` +
        `&key=${API_KEY}`
    );
}

export async function fetchBooksByQuery(params: SearchParams) {
    const url = processQuery(params);
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Failed to fetch books!");
    }

    const rawData = response.json();

    return rawData.then((data) => {
        const processedData = {} as Books;

        processedData.total = data.totalItems;
        processedData.books =
            data.items?.map((book: Keyable) => ({
                id: book.id,
                title: book.volumeInfo.title,
                authors: book.volumeInfo.authors,
                category: book.volumeInfo.categories?.[0],
                thumbnailLink: book.volumeInfo.imageLinks?.thumbnail,
            })) || [];

        return new Promise<Books>((resolve) => resolve(processedData));
    });
}

export async function fetchBookById(id: string | undefined) {
    const API_URL = process.env.API_URL;

    const response = await fetch(`${API_URL}/${id}`);
    const rawData = response.json();
    if (!response.ok) {
        throw new Error("Failed to fetch book details!");
    }

    return rawData.then((data) => {
        const processedData: DetailedBook = {
            id: data.id,
            title: data.volumeInfo.title,
            authors: data.volumeInfo.authors,
            category: data.volumeInfo.categories?.[0],
            thumbnailLink: data.volumeInfo.imageLinks?.thumbnail,
            mediumImageLink: data.volumeInfo.imageLinks?.medium,
            largeImageLink: data.volumeInfo.imageLinks?.extraLarge,
            description: data.volumeInfo.description,
            publisher: data.volumeInfo.publisher,
            publishedDate: data.volumeInfo.publishedDate,
            isbn: data.volumeInfo.industryIdentifiers?.[1]?.identifier,
            allCategories: data.volumeInfo.categories,
            pageCount: data.volumeInfo.pageCount,
        };

        return new Promise<DetailedBook>((resolve) => resolve(processedData));
    });
}
