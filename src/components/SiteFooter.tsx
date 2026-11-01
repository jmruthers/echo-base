import { Link } from 'react-router-dom'
import { airbnbUrl, contactEmail, listing } from '../content/listing'

export function SiteFooter() {
  return (
    <footer className="border-t border-sec-200 bg-main-950 text-sec-200">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="font-display text-main-50">{listing.name}</p>
          <p className="mt-2 max-w-md text-sec-300">{listing.host.blurb}</p>
          <p className="mt-4 text-sec-400">
            Hosted by {listing.host.name} · {listing.host.years} years hosting
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <a href={airbnbUrl} target="_blank" rel="noreferrer">
            Book on Airbnb
          </a>
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          <Link to="/stay">Guest guide</Link>
          <p className="mt-4 text-sec-500">
            {listing.location}
          </p>
        </div>
      </div>
    </footer>
  )
}
