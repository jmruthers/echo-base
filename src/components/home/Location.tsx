import { listing } from '../../content/listing'

export function Location() {
  return (
    <section id="location" className="scroll-mt-24 bg-sec-50 py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <h2>Dinner Plain</h2>
          <p className="mt-3 text-sec-700">
            A quiet alpine village with cafés, trails, and snow play on your doorstep — and Mt Hotham just a short drive away.
          </p>
          <ul className="mt-8 space-y-3 text-sec-800">
            {listing.neighbourhood.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-acc-500" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <figure className="overflow-hidden rounded-3xl">
          <img
            src="/images/back-summer.jpg"
            alt="Summer surrounds near Echo Base in Dinner Plain"
            className="h-full min-h-80 w-full object-cover"
          />
        </figure>
      </div>
    </section>
  )
}
