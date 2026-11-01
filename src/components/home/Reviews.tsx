import { listing } from '../../content/listing'

export function Reviews() {
  return (
    <section id="reviews" className="scroll-mt-24 border-y border-sec-200 bg-main-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2>
          {listing.rating.overall} · {listing.rating.count} reviews
        </h2>
        <p className="mt-3 text-sec-700">
          Guests mention hospitality, comfort, location, and family-friendly space.
        </p>

        <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-sec-700">
          <li>Cleanliness {listing.rating.cleanliness}</li>
          <li>Accuracy {listing.rating.accuracy}</li>
          <li>Check-in {listing.rating.checkIn}</li>
          <li>Communication {listing.rating.communication}</li>
          <li>Location {listing.rating.location}</li>
          <li>Value {listing.rating.value}</li>
        </ul>

        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {listing.reviews.map((review) => (
            <li
              key={review.name + review.date}
              className="rounded-2xl border border-sec-200 bg-sec-50 px-5 py-6"
            >
              <p className="text-sec-800">“{review.body}”</p>
              <p className="mt-4 text-sec-600">
                {review.name} · {review.date}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
