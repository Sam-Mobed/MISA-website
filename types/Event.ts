import { PortableTextBlock } from "sanity";

export type Event = {
    _id: string;
    _createdAt: Date;
    name_en: string;
    name_fa: string;
    datetime: string;
    location:string;
    cost:string;
    image: string;
    content_en: string;
    content_fa: string;
    links: string[];
    links_slug: string[];
    is_there_space_left: boolean;
    is_there_waitlist: boolean;
    waitlist_link:string;
};