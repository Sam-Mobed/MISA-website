//import { getEvents } from "@/sanity/sanity-utils"
import './index.css';

export default async function Home() {

  //const events = await getEvents();

  return (
    <div className='main-container'>

      <div className='buffer'>Mountain</div>
      <div className='buffer-space relative'>
        <h1 className="site-title font-extrabold absolute bottom-8 w-full">
          <span className="inline-block bg-gradient-to-r from-green-500 to-red-600
          bg-clip-text text-transparent whitespace-nowrap">
            McGill Iranian Student Association
          </span>
        </h1>
      </div>

      <div className='purpose'>
        <h2 className='purpose-title pt-5 pl-5'>Our Purpose</h2>
        <p className='text-justify p-5'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div className='p-5'>
        <h2>Our Values</h2>
        <div className='values-box border-2 border-black flex justify-between'>
          <div className='border-2 border-black'>

            <h3 className='value'>
              Value1
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </p>
          </div>

          <div className='border-2 border-black'>
            <h3 className='value'>
              Value2
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </p>
          </div>

          <div className='border-2 border-black'>
            <h3 className='value'>
              Value3
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </p>
          </div>

        </div>

      </div>
      
    </div>
    );
}

//this whole events thing needs to be moved to 
//another route


/*

<h1 className="site-title font-extrabold">
        <span className="inline-block bg-gradient-to-r from-green-500 to-red-600
        bg-clip-text text-transparent whitespace-nowrap">
          McGill Iranian Student Association
        </span>
      </h1>


sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl

className="max-w-5xl mx-auto py-20"

<p className="mt-3 text-xl text-gray-600">
        description of the association
      </p>

      <h2 className="mt-24 font-bold text-gray-700 text-3xl">
        Our Values
      </h2>

{events.map((event) => (
        <div key={event._id}>
          {event.name}
        </div>
      ))}


*/