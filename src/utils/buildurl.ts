import {FilterBookProps} from "@/components/FilterBook/FilterBook";

export type FilterQuery = Record<string, string | string[]>;

export function buildUrl(base: string, query: FilterQuery) {
    const params = new URLSearchParams();

    for (const key in query) {
        const value = query[key];

        if (Array.isArray(value)) {
            value.forEach((v) => params.append(key, v));
        } else if (typeof value === 'string' && value.trim() !== '') {
            params.append(key, value);
        }
    }

    return `${base}?${params.toString()}`;
}




