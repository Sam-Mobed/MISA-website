import { createClient, groq } from "next-sanity";
import { Event } from "@/types/Event";
import { Photo } from "@/types/Photo";
import { Member } from "@/types/Member";
import clientConfig from "./config/client-config";

export async function getEvents(): Promise<Event[]>{

    return createClient(clientConfig).fetch(
        groq`*[_type == "event"] | order(_createdAt desc){
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
        groq`*[_type == "photo"] | order(_createdAt asc){
            _id,
            _createdAt,
            name_en,
            name_fa,
            date_en,
            date_fa,
            location_en,
            location_fa,
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
            degree_major_en,
            degree_major_fa,
            start_finishDates,
            role_en,
            role_fa,
            "card_image": card_image.asset->url,
            "person_image": person_image.asset->url,
        }`
    );
}

/*
export async function handler(
    req:NextApiRequest,
    res:NextApiResponse
){
    if (req.method === 'POST'){
        const { submittedText } = req.body;
        
        try{
            const response = await createClient(clientConfig).create({
                _type: 'suggestion',
                suggestion_text: submittedText
            });

            res.status(200).json({success:true,data:response});
        } catch (error) {
            console.error(error);
            res.status(500).json({success:false, error: 'Internal Server Error'});
        } 
    } else {
        res.status(405).json({ success: false, error: 'Method Not Allowed'});
    }
}
import clientConfig from "@/sanity/config/client-config";
import { createClient} from "next-sanity";
import { NextApiRequest, NextApiResponse } from 'next';

export async function handler(
    req:NextApiRequest,
    res:NextApiResponse
){
    if (req.method === 'POST'){
        const { submittedText } = req.body;
        
        try{
            const response = await createClient(clientConfig).create({
                _type: 'suggestion',
                suggestion_text: submittedText
            });

            res.status(200).json({success:true,data:response});
        } catch (error) {
            console.error(error);
            res.status(500).json({success:false, error: 'Internal Server Error'});
        } 
    } else {
        res.status(405).json({ success: false, error: 'Method Not Allowed'});
    }
}
*/