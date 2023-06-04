import { PortableTextBlock } from "sanity";

export type Event = {
    _id: string;
    _createdAt: Date;
    name: string;
    slug: string;
    image: string;
    url: string;
    content: PortableTextBlock[];
};

//need to add a field for when the event will happen
//when: Date