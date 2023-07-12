
import MovingElements from './movingElements';

type Props = {
    section_title: string;
    section_text: string;
};

export default function Purpose({section_title,section_text}:Props){
    
    return (
        <div className='w-screen' style={{height:'80vh', backgroundColor:'bisque'}}>
            <MovingElements />

        </div>
    );
}