import './style.css';

type Props = {
    misa: string;
    home: string;
    about: string;
    events: string;
    apply: string;
    contact: string;
    switchLocale: string;
    newsLetter: string;
}

export default function Navbar(
    {
       misa,
       home,
       about,
       events,
       apply,
       contact,
       switchLocale,
       newsLetter
    }:Props
){
    return (
        <nav className="fixed top-0 z-10 navContainer">
            <div className='navBtn'>
                <div className='navBtn__burger'/>
            </div>
        </nav>
    );
}