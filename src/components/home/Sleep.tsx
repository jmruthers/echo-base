import { listing } from '../../content/listing'

export function Sleep() {
  return (
    <section id="sleep" className="scroll-mt-24 bg-main-950 py-16 text-sec-100 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-main-50">Where you’ll sleep</h2>
        <p className="mt-3 max-w-2xl text-sec-300">
          Flexible bed setups so families and friend groups can settle in comfortably.
        </p>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {listing.bedrooms.map((room) => (
            <li key={room.name} className="overflow-hidden rounded-2xl bg-main-900">
              <img
                src={room.image}
                alt={room.name}
                className="h-52 w-full object-cover"
              />
              <div className="px-5 py-5">
                <h3 className="text-main-50">{room.name}</h3>
                <p className="mt-2 text-sec-300">{room.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
