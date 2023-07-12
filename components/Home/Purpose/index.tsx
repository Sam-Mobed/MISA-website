
import MovingElements from './movingElements';

type Props = {
    section_title: string;
    section_text: string;
};

export default function Purpose({section_title,section_text}:Props){
    
    return (
        <div>
            <MovingElements />

        </div>
    );
}