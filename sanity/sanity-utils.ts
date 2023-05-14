import { createClient, groq } from "next-sanity";

export async function getEvents(){
    const client = createClient({
        projectId: "eqw6b56r",
        dataset: "production",
        apiVersion: "2023-05-14",
    });

    return client.fetch(
        groq`*[_type = "event"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`
    )
}