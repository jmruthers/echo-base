import { airbnbUrl, contactEmail, listing } from '../../content/listing'

export function Hero() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-main-950 text-main-50">
      <img
        src="/images/hero-winter.jpg"
        alt="Echo Base lodge blanketed in snow at Dinner Plain"
        className="absolute inset-0 size-full object-cover hero-kenburns"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-main-950 via-main-950/55 to-main-950/25" />

      <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20">
        <p className="reveal text-acc-200">{listing.location}</p>
        <h1 className="reveal reveal-delay-1 mt-3 max-w-3xl font-display">
          {listing.name}
        </h1>
        <p className="reveal reveal-delay-1 mt-2 max-w-2xl font-display text-acc-100">
          {listing.tagline}
        </p>
        <p className="reveal reveal-delay-2 mt-5 max-w-xl text-sec-200">
          {listing.summary}
        </p>
        <div className="reveal reveal-delay-2 mt-8 flex flex-wrap gap-3">
          <a
            href={airbnbUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-acc-500 px-5 py-3 text-main-50 transition hover:bg-acc-400"
          >
            Check availability
          </a>
          <a
            href={`mailto:${contactEmail}`}
            className="rounded-full border border-sec-200/40 bg-main-950/30 px-5 py-3 text-main-50 backdrop-blur-sm transition hover:bg-main-950/50"
          >
            Contact host
          </a>
        </div>
        <p className="reveal reveal-delay-2 mt-6 text-sec-300">
          {listing.stats.guests} guests · {listing.stats.bedrooms} bedrooms ·{' '}
          {listing.stats.beds} beds · {listing.stats.baths} baths ·{' '}
          {listing.rating.overall} · {listing.rating.count} reviews
        </p>
      </div>
    </section>
  )
}
