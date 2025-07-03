export async function getFilter(label:'author'| 'genre'){
    try {
        const response = await fetch(`http://localhost:5000/book/${label}`); // або process.env["BACKEND"]

        if (!response.ok) {
            return `Помилка: статус ${response.status}`;
        }

        const data = await response.json();

        if (!data || data.length === 0) {
            return `Помилка отримання фільтру книг ${label} або пустий фільтр!`;
        }

        return data.data;
    } catch (e) {
        return `Помилка отримання книг: ${e}`;
    }
}