import '../../shared/border.css';
import MovingElements from './movingElements';

type Props = {
    section_title: string;
    section_text: string;
};

export default function Purpose({section_title,section_text}:Props){
    
    return (
        <div className='w-screen outer-div' style={{height:'80vh'}}>
            <div className='inner-div'>
                <MovingElements />
            </div>
        </div>
    );
}