import './index.css';

function Front(){
    return(
        <div className="absolute inset-0 w-full h-full flex justify-center items-center
        bg-gray-900 transition-all duration-100 delay-200 z-20 hover:opacity-0">
            front
        </div>
    );
}

function Back(){
    return(
        <div className="absolute inset-0 w-full h-full flex justify-center items-center
        bg-black transition-all z-10 card-back">
            back
        </div>
    );
}

export default function MemberCard(){
    return(
        <div className='relative w-60 h-96 rounded-2xl text-white overflow-hidden cursor-pointer transition-all duration-700 card'>
            <Front />
            <Back />
        </div>
    );
}