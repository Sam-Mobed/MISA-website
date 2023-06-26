import { getEvents } from "@/sanity/sanity-utils"

export default async function Home() {

  const events = await getEvents();

  return (
    <div className="max-w-5xl mx-auto py-20">
      <h1 className="text-7xl font-extrabold">
        <span className="bg-gradient-to-r from-green-400 via-white-500 to-red-600
        bg-clip-text text-transparent whitespace-nowrap">
          McGill Iranian Student Association
        </span>
      </h1>

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
    </div>
    );
}

//this whole events thing needs to be moved to 
//another route


/*



*/