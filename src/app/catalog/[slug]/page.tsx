'use client'
import {useParams} from "next/navigation";

export default function Book() {
    const params = useParams(); // { slug: 'some-value' }
    return (
        <div>
            Book {params.slug}
        </div>
    );
}
