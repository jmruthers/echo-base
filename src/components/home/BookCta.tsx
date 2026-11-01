import { airbnbUrl, contactEmail, listing } from '../../content/listing'

export function BookCta() {
  return (
    <section id="book" className="scroll-mt-24 bg-acc-100 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl bg-main-950 px-6 py-12 text-main-50 sm:px-10">
          <h2 className="text-main-50">Ready for the mountains?</h2>
          <p className="mt-3 max-w-2xl text-sec-300">
            Check live availability and book securely on Airbnb, or email {listing.host.name} with questions about your stay.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={airbnbUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-acc-500 px-5 py-3 text-main-50 transition hover:bg-acc-400"
            >
              Check availability on Airbnb
            </a>
            <a
              href={`mailto:${contactEmail}`}
              className="rounded-full border border-sec-400/40 px-5 py-3 text-main-50 transition hover:bg-main-900"
            >
              Email {contactEmail}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
