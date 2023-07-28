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
    content_en: PortableTextBlock[];
    content_fa: PortableTextBlock[];
    links: [string];
};