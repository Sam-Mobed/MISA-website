//import { getEvents } from "@/sanity/sanity-utils"
import './index.css';

export default async function Home() {

  //const events = await getEvents();

  return (
    <div>
      <h1>Hi</h1>
      <h1>Hi</h1>
      <h1>Hi</h1>
      <h1>Hi</h1>
      <h1>Hi</h1>
      <h1>Hi</h1>
      <div className="border-2 border-black">
        Hi
      </div>
      <div className="border-2 border-black">
        <h1 className="site-title font-extrabold">
          <span className="inline-block bg-gradient-to-r from-green-500 to-red-600
          bg-clip-text text-transparent whitespace-nowrap">
            McGill Iranian Student Association
          </span>
        </h1>
      </div>
    </div>
    );
}

//this whole events thing needs to be moved to 
//another route


/*
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