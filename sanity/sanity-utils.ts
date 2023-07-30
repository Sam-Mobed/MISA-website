import { createClient, groq } from "next-sanity";
import { Event } from "@/types/Event";
import { Photo } from "@/types/Photo";
import { Member } from "@/types/Member";
import clientConfig from "./config/client-config";

export async function getEvents(): Promise<Event[]>{

    return createClient(clientConfig).fetch(
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
            links_slug,
            is_there_space_left,
            is_there_waitlist,
            waitlist_link,
        }`
    );
}

export async function getPhotos(): Promise<Photo[]>{

    return createClient(clientConfig).fetch(
        groq`*[_type == "photo"]{
            _id,
            _createdAt,
            name_en,
            name_fa,
            date,
            location,
            "image":image.asset->url,
        }`
    );
}

export async function getMembers(): Promise<Member[]>{

    return createClient(clientConfig).fetch(
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
            "card_image":image.asset->url,
            "person_image":image.asset->url,
        }`
    );
}