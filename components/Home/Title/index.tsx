import Image from 'next/image';
import Waves from '../../images/waves.png';
import TitleText from './text';
import DynamicElements from './movingElements';
import StaticElements from './staticElements';

const wavesContainer = {
    width: '100vw',
    height: '8vh'
}

const wavesStyle = {
    width: 'calc(96%)',
    height: 'calc(70%)'
}

const waves = {
    width: 'calc(100%)',
    height: 'auto'
}

const waves2 = {
    width: 'calc(100%)',
    height: 'auto',
    transform: 'scaleY(-1)'
}


type Props = {
    title: string;
};

export default function Title({title}: Props){
    return (
        <div style={{backgroundColor:'bisque'}}>
            

            <div className='bg-black flex items-center justify-center' style={wavesContainer}>
                <div className='overflow-hidden' style={wavesStyle}>
                    <Image 
                    src={Waves}
                    style={waves}
                    alt="waves"
                    />
                </div>
            </div>
            
            <div className='relative overflow-hidden'>
                <DynamicElements />
                <StaticElements />

                <div className='w-screen' style={{height:'22vw'}} />

                <div className="m-5 p-3">
                    <TitleText
                        title={title}
                    />
                </div>

                

            </div>

            <div className='bg-black flex items-center justify-center' style={wavesContainer}>
                <div className='overflow-hidden' style={wavesStyle}>
                    <Image 
                    src={Waves}
                    style={waves2}
                    alt="waves"
                    />
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