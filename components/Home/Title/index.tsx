//import './style.css'
import Image from 'next/image';
import Simurgh from '../../images/simurgh-hunting.png';
import treeBird from '../../images/treeBird.png';
import whiteDiv from '../../images/whiteDiv.png';
import TitleText from './text';

const simurghStyle = {
    height: 'auto',
    width: '30vw',
    top: -20,
    right: -5,
}

const treeStyle = {
    height: 'auto',
    width: '20vw',
    bottom: -20,
    left: -5,
}

const divStyle = {
    height: 'auto',
    width: '20vw',
    bottom: -19,
    right: 5,
}

type Props = {
    title: string;
};

/*this border is cool, we could replicate it if time allows
https://codepen.io/MyXoToD/pen/VaazQq
*/

export default function Title({title}: Props){
    return (
        <div className='relative'>
             
            <Image 
            src={Simurgh}
            className='absolute'
            style={simurghStyle}
            alt="simurgh"
            />
            
            <div className="m-5 p-3 border-4 border-double border-black">

                <TitleText
                    title={title}
                />
                
                <Image
                src={whiteDiv}
                className='absolute'
                style={divStyle}
                alt="white_deev"
                />
                
            </div>
            
                

            <Image 
            src={treeBird}
            className='absolute'
            style={treeStyle}
            alt="Tree_and_Bird"
            />
                
                
            
            
        </div>
    );
}