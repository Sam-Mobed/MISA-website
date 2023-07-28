import { createClient, groq } from "next-sanity";
import { Event } from "@/types/Event";
import { Photo } from "@/types/Photo";

export async function getEvents(): Promise<Event[]>{
    const client = createClient({
        projectId: "eqw6b56r",
        dataset: "production",
        apiVersion: "2023-05-14",
    });

    return client.fetch(
        groq`*[_type == "event"]{
            _id,
            _createdAt,
            name_en,
            name_fa,
            datetime,
            location,
            cost,
            "image":image.asset->url,
            content_en,
            content_fa,
            links,
        }`
    )
}