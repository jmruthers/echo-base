import { Link } from 'react-router-dom'
import { airbnbUrl, contactEmail, listing } from '../content/listing'

export function StayPage() {
  const { stay } = listing

  return (
    <div className="bg-sec-50">
      <section className="border-b border-sec-200 bg-main-950 px-4 py-16 text-main-50 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <p className="text-acc-200">Guest guide</p>
          <h1 className="mt-3 text-main-50">Staying at Echo Base</h1>
          <p className="mt-4 max-w-2xl text-sec-300">
            Essentials for a smooth arrival and departure. For live booking and dates, use Airbnb.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <h2>Arrivals & departures</h2>
        <ul className="mt-6 space-y-3 text-sec-800">
          <li>
            <strong>Check-in:</strong> {stay.checkIn}
          </li>
          <li>
            <strong>Check-out:</strong> {stay.checkOut}
          </li>
          <li>
            <strong>Access:</strong> {stay.access}
          </li>
        </ul>

        <h2 className="mt-12">House rules</h2>
        <ul className="mt-6 space-y-3 text-sec-800">
          {stay.rules.map((rule) => (
            <li key={rule} className="flex gap-3">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-acc-500" aria-hidden />
              <span>{rule}</span>
            </li>
          ))}
        </ul>

        <h2 className="mt-12">What we provide</h2>
        <ul className="mt-6 space-y-3 text-sec-800">
          {stay.provided.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-main-500" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h2 className="mt-12">What to bring</h2>
        <ul className="mt-6 space-y-3 text-sec-800">
          {stay.bring.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-main-500" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h2 className="mt-12">Parking</h2>
        <p className="mt-4 text-sec-800">{stay.parking}</p>

        <div className="mt-12 flex flex-wrap gap-3 border-t border-sec-200 pt-10">
          <a
            href={airbnbUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-acc-600 px-5 py-3 text-main-50 transition hover:bg-acc-500"
          >
            Check availability
          </a>
          <a
            href={`mailto:${contactEmail}`}
            className="rounded-full border border-sec-300 px-5 py-3 text-sec-900 transition hover:bg-sec-100"
          >
            Email host
          </a>
          <Link
            to="/"
            className="rounded-full border border-sec-300 px-5 py-3 text-sec-900 transition hover:bg-sec-100"
          >
            Back to home
          </Link>
        </div>
      </section>
    </div>
  )
}
