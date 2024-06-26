export async function searchBooks(query: string) {
    const API_KEY = process.env.API_KEY;
    const API_URL = process.env.API_URL;

    const response = await fetch(`${API_URL}?q=${query}&key=${API_KEY}`);
    response.json().then((data) => {
        console.log(data);
    });
}

export async function getBookInfo(id: string) {
    const API_URL = process.env.API_URL;

    const response = await fetch(`${API_URL}/${id}`);
    response.json().then((data) => {
        console.log(data);
    });
}
