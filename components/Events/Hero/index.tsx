import './index.css';

import Image from 'next/image';
import TitleText from './text';
import Block from './block';


import dragon from '../../images/dragon.png';
import tree from '../../images/tree.png';
import deer from '../../images/goldenDeer.png';

import soldiers2 from '../../images/soldiers1.png';
import soldiers from '../../images/soldiers.png';
import warrior from '../../images/warrior.png';

type Props = {
    title:string
}

const dragonStyle = {
    width:'38vmin',
    height:'auto'
}

const treeStyle = {
    width:'45vmin',
    height:'auto'
}

const mainContainer = {
    backgroundColor: 'bisque',
    height: '46vmax',
    width: '100vw'
}

const sndRow = {
    width:'17vmax',
    height:'auto'
}

const deerStyle = {
    width:'10vmax',
    height:'auto'
}

export default function Hero({title}:Props){
    return (
    <div>
        <div style={mainContainer} className='overflow-hidden relative'>
            <div className='absolute top-0 flex flex-col w-screen h-[100%] justify-center items-center'>
                <TitleText title={title} />
            </div>
            <div className='relative w-screen h-[100%]'>

                <Image 
                src={deer}
                style={deerStyle}
                alt="deer"
                className='absolute top-0 deer'
                />

                <Image 
                src={soldiers2}
                style={sndRow}
                alt="soldiers"
                className='absolute bottom-[50vmin] soldiers2'
                />

                <Image 
                src={soldiers}
                style={sndRow}
                alt="soldiers"
                className='absolute bottom-[35vmin] right-0 soldiers1'
                />

                <Image 
                src={tree}
                style={treeStyle }
                alt="tree"
                className='absolute bottom-[30vmin] tree'
                />

                <Image 
                src={dragon}
                style={dragonStyle}
                alt="dragon"
                className='absolute bottom-0 dragon'
                />
                <Image 
                src={warrior}
                style={dragonStyle}
                alt="warrior"
                className='absolute bottom-0 warrior'
                />
            </div>
        </div>
        <Block />
    </div>
    );
}

/*

<div className='flex justify-center items-center w-[100%] h-[100%]'>
            <TitleText title={title} />
        </div>
        
        <Image 
        src={dragon}
        style={dragonStyle}
        alt="dragon"
        className='absolute bottom-[12vmin] left-0'
        />

<div className='relative overflow-hidden w-screen'>
        <div className='w-[100%] h-[100%] flex justify-center items-center'>
            <TitleText title={title} />
        </div>

        <Image 
        src={king}
        style={dragonStyle}
        alt="king"
        className='absolute top-0 right-[50%]'
        />

        <Image 
        src={black_deev}
        style={dragonStyle}
        alt="black_deev"
        className='absolute bottom-80 left-0'
        />

        <Image 
        src={soldiers2}
        style={dragonStyle}
        alt="soldiers"
        className='absolute bottom-80 right-0'
        />

        <Image 
        src={pink_deev}
        style={dragonStyle}
        alt="pink_deev"
        className='absolute bottom-60 left-0'
        />

        <Image 
        src={soldiers}
        style={dragonStyle}
        alt="soldiers"
        className='absolute bottom-[15vmax] right-[8vmax]'
        />

        <Image 
        src={dragon}
        style={dragonStyle}
        alt="dragon"
        className='absolute bottom-[10vmin] left-0'
        />

        <Image 
        src={warrior}
        style={dragonStyle}
        alt="warrior"
        className='absolute bottom-16 right-0'
        />
        </div>

*/