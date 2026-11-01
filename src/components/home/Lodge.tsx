import { listing } from '../../content/listing'

export function Lodge() {
  return (
    <section id="lodge" className="scroll-mt-24 border-y border-sec-200 bg-main-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2>The lodge</h2>
        <p className="mt-3 max-w-3xl text-sec-700">
          Spread across three levels, Echo Base sleeps up to ten guests and combines cozy mountain charm with the practical amenities you need for an easy stay in Dinner Plain.
        </p>

        <ul className="mt-10 grid gap-8 md:grid-cols-3">
          {listing.levels.map((level) => (
            <li key={level.title}>
              <h3>{level.title}</h3>
              <p className="mt-3 text-sec-700">{level.body}</p>
            </li>
          ))}
        </ul>

        <ul className="mt-12 grid gap-6 border-t border-sec-200 pt-10 sm:grid-cols-3">
          {listing.highlights.map((item) => (
            <li key={item.title}>
              <h3>{item.title}</h3>
              <p className="mt-2 text-sec-700">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
