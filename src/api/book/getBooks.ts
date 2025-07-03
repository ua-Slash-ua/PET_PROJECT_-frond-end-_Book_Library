import {buildUrl} from "@/utils/buildurl";

export async function getBook() {
    try {
        const url = buildUrl('http://localhost:5000/book', {
            genre: ['Fantasy',"Classic",'Dystopian'],
        });
        const response = await fetch(url);
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
