class Pages {
    HOME = '/';
    CATALOG = '/catalog';
    CONTACTS = '/contacts';
    BOOKS(id: string | number): string {
        return `/catalog/${id}`;
    }
}

export const PAGES = new Pages()
