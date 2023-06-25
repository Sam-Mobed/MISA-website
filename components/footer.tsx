import {FaInstagram} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaTelegram} from "react-icons/fa";


const Footer: React.FC = () => {
    return(
        <div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
            <div className="p-5">
                <ul>
                    <p>
                        MISA
                    </p>
                    <div className="flex gap-6 pb-5">
                    <FaInstagram className="text-xl cursor-pointer hover:text-yellow-600" />
                    <FaFacebook className="text-xl cursor-pointer hover:text-blue-600" />
                    <FaTwitter className="text-xl cursor-pointer hover:text-blue-600" />
                    <FaTelegram className="text-xl cursor-pointer hover:text-green-600" />
                    </div>
                </ul>
            </div>
            <div className="p-5">
                    <ul>
                        <p className="text-gray-800 font-bold text-2xl pb-4">Product</p>
                        <li className="text-gray-500 text-md pd-2 font-semibold hover:text-blue-600 cursor-pointer">x</li>
                        <li className="text-gray-500 text-md pd-2 font-semibold hover:text-blue-600 cursor-pointer">y</li>
                        <li className="text-gray-500 text-md pd-2 font-semibold hover:text-blue-600 cursor-pointer">z</li>
                        <li className="text-gray-500 text-md pd-2 font-semibold hover:text-blue-600 cursor-pointer">w</li>
                    </ul>
            </div>
            <div className="p-5">
                    <ul>
                        <p className="text-gray-800 font-bold text-2xl pb-4">Company</p>
                        <li className="text-gray-500 text-md pd-2 font-semibold hover:text-blue-600 cursor-pointer">x</li>
                        <li className="text-gray-500 text-md pd-2 font-semibold hover:text-blue-600 cursor-pointer">y</li>
                        <li className="text-gray-500 text-md pd-2 font-semibold hover:text-blue-600 cursor-pointer">z</li>
                        <li className="text-gray-500 text-md pd-2 font-semibold hover:text-blue-600 cursor-pointer">w</li>
                    </ul>
            </div>
            <div className="p-5">
                    <ul>
                        <p className="text-gray-800 font-bold text-2xl pb-4">Something</p>
                        <li className="text-gray-500 text-md pd-2 font-semibold hover:text-blue-600 cursor-pointer">x</li>
                        <li className="text-gray-500 text-md pd-2 font-semibold hover:text-blue-600 cursor-pointer">y</li>
                        <li className="text-gray-500 text-md pd-2 font-semibold hover:text-blue-600 cursor-pointer">z</li>
                        <li className="text-gray-500 text-md pd-2 font-semibold hover:text-blue-600 cursor-pointer">w</li>
                    </ul>
            </div>
        </div>
    );
}

export default Footer;