import Link from "next/link";


const Navbar: React.FC = () => {
    return (
        <nav className="fixed w-full h-24 shadow-xl bg-white">
            <div className="flex justify-between items-center h-full w-full px-5 2xl:px-16">
                <div>
                    <Link href="/">
                        <span>
                            MISA
                        </span>
                    </Link>
                </div>
                <div>
                    <ul className="hidden sm:flex">
                        <Link href="/about">
                            <li className="ml-10 uppercase hover-border-b text-xl">
                                About
                            </li>
                        </Link>
                        <Link href="/about">
                            <li className="ml-10 uppercase hover-border-b text-xl">
                                Events
                            </li>
                        </Link>
                        <Link href="/about">
                            <li className="ml-10 uppercase hover-border-b text-xl">
                                
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;