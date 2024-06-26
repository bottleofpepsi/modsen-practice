export async function searchBooks(
    query: string,
    category: string,
    sorting: string
) {
    const url = processQuery(query, category, sorting);
    const response = await fetch(url);

    const data = await response.json();
    console.log(data);
}

export async function getBookInfo(id: string) {
    const API_URL = process.env.API_URL;

    const response = await fetch(`${API_URL}/${id}`);

    const data = await response.json();
    console.log(data);
}

function processQuery(
    query: string,
    category: string,
    sorting: string
): string {
    const API_KEY = process.env.API_KEY;
    const API_URL = process.env.API_URL;

    return (
        `${API_URL}?q=${query.trim().replace(/\s/g, "+")}` +
        `${category !== "all" && `+subject:${category}`}` +
        `+&orderBy=${sorting}&key=${API_KEY}`
    );
}
