export function buildUrl(base: string, query: Record<string, string[]>) {
    const params = new URLSearchParams();

    for (const key in query) {
        const values = query[key];
        values.forEach((value) => {
            params.append(key, value);
        });
    }

    return `${base}?${params.toString()}`;
}



