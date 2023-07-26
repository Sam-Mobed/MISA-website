import {FaInstagram} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaTelegram} from "react-icons/fa";

import './footer.css';

type Props = {
    misa:string;
    locale:string;
    home:string;
    goal:string;
    values:string;
    about:string;
    story:string;
    members: string;
    events: string;
    upcoming: string;
    suggest:string;
    involve:string;
    signup:string;
    socialmedia:string;
    newsletter:string;
    vercel:string;
    made:string;
}

export default function Footer(
    {
        misa,
        locale,
        home,
        goal,
        values,
        about,
        story,
        members,
        events,
        upcoming, 
        suggest,
        involve,
        signup,
        socialmedia,
        newsletter,
        vercel,
        made
    }:Props
){
    return(
        <div className="w-screen flex flex-col">
            <div className="mainFooter flex flex-row">
                <div className="flex-1 flex flex-col">
                    hi
                </div>
                <div className="flex-2 flex flex-row">
                    bye
                </div>
            </div>

            <div className="minFooter">
                bye
            </div>
        </div>
    );
}