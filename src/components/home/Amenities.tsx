import { listing } from '../../content/listing'
import { AmenityIcon } from '../AmenityIcon'

export function Amenities() {
  return (
    <section id="amenities" className="scroll-mt-24 bg-sec-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2>What this place offers</h2>
        <p className="mt-3 max-w-2xl text-sec-700">
          Everything you need for a mountain escape — from the drying room after a snow day to the spa bath when you get home.
        </p>
        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {listing.amenities.map((amenity) => (
            <li
              key={amenity.id}
              className="flex items-center gap-3 rounded-2xl border border-sec-200 bg-main-50 px-4 py-4"
            >
              <span className="text-main-700">
                <AmenityIcon id={amenity.id} />
              </span>
              <span>{amenity.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
