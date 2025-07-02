export async function getBook() {
    try {
        const response = await fetch('http://localhost:5000/book'); // або process.env["BACKEND"]

        if (!response.ok) {
            return `Помилка: статус ${response.status}`;
        }

        const data = await response.json();

        if (!data || data.length === 0) {
            return `Помилка отримання книг або пустий список`;
        }

        return data.data;
    } catch (e) {
        return `Помилка отримання книг: ${e}`;
    }
}
