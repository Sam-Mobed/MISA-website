import Image from "next/image";
//import './index.css';

type Props = {
    value: string;
    description: string;
    image: string;
    alt: string;
}

//assuming the image is passed as a file path

function Card ({
    value,
    description,
    image,
    alt = ""
}:Props) {

    return (
        <div className="flex justify-around text-center space-x-16">
            <div className="transform h-64 vg-blue-400 w-1/5 hover:bg-blue-600 transition duration-500 hover:scale-125">
                hi
            </div>
        </div>
    );

}
//before having the pop out effect, the cards have to appear 
//in order, make sure this works well first.
//the card starts out invisible, gotta fix that

/*
value-card border-2 border-black max-w-sm p-5 m-5 rounded-md

<div className="group flex justify-center items-center rerlative w-80 h-60 bg-red-200 cursor-pointer text-4xl">
            <h2>hi</h2>
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine"></div>
        </div>
*/

export default Card;