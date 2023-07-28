import { createClient, groq } from "next-sanity";
import { Event } from "@/types/Event";
import { Photo } from "@/types/Photo";
import { Member } from "@/types/Member";

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

export async function getPhotos(): Promise<Photo[]>{
    const client = createClient({
        projectId: "eqw6b56r",
        dataset: "production",
        apiVersion: "2023-05-14",
    });

    return client.fetch(
        groq`*[_type == "photo"]{
            _id,
            _createdAt,
            name_en,
            name_fa,
            date,
            location,
            "image":image.asset->url,
        }`
    )
}

export async function getMembers(): Promise<Member[]>{
    const client = createClient({
        projectId: "eqw6b56r",
        dataset: "production",
        apiVersion: "2023-05-14",
    });

    return client.fetch(
        groq`*[_type == "member"]{
            _id,
            _createdAt,
            name_en,
            name_fa,
            degreemajor_en,
            degreemajor_fa,
            startfinish,
            role_en,
            role_fa,
            "image":image.asset->url,
        }`
    )
}