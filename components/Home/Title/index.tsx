import Image from 'next/image';
import Waves from '../../images/waves.png';
import TitleText from './text';
import DynamicElements from './movingElements';

const wavesContainer = {
    width: '100vw',
    height: '10vh'
}

const wavesStyle = {
    width: 'calc(98%)',
    height: 'calc(75%)'
}

const waves = {
    width: 'calc(100%)',
    height: 'auto'
}



type Props = {
    title: string;
};

/*this border is cool, we could replicate it if time allows
https://codepen.io/MyXoToD/pen/VaazQq
*/

export default function Title({title}: Props){
    return (
        <div className=''>
            

            <div className='bg-black flex items-center justify-center' style={wavesContainer}>
                <div className='overflow-hidden' style={wavesStyle}>
                    <Image 
                    src={Waves}
                    style={waves}
                    alt="waves"
                    />
                </div>
            </div>
            
            <div className='relative'>
                <DynamicElements />

                <div className='w-screen bg-black' style={{height:'20vh'}}>

                </div>

                <div className="m-5 p-3 border-4 border-double border-black">
                    <TitleText
                        title={title}
                    />
                </div>

                <div className='w-screen bg-black' style={{height:'15vh'}}>

                </div>

            </div>
        </div>
    );
}


/*


            <Image 
            src={Waves}
            style={{width:'100vw', height:'10vh'}}
            alt="left-corner-plants"
            />

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

<Image 
            src={Simurgh}
            className='absolute'
            style={simurghStyle}
            alt="simurgh"
            />

            <Image 
            src={treeBird}
            className='absolute'
            style={treeStyle}
            alt="Tree_and_Bird"
            />


*/