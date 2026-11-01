import { listing } from '../../content/listing'

export function Gallery() {
  const [featured, ...rest] = listing.gallery

  return (
    <section id="gallery" className="scroll-mt-24 bg-sec-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2>Inside the lodge</h2>
        <p className="mt-3 max-w-2xl text-sec-700">
          Open-plan living around the stone hearth, a practical drying room for ski days, and flexible sleeping for families and groups.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          <figure className="overflow-hidden rounded-2xl sm:col-span-2 sm:row-span-2">
            <img
              src={featured.src}
              alt={featured.alt}
              className="h-full min-h-72 w-full object-cover transition duration-700 hover:scale-[1.03]"
            />
          </figure>
          {rest.slice(0, 6).map((photo) => (
            <figure key={photo.src} className="overflow-hidden rounded-2xl">
              <img
                src={photo.src}
                alt={photo.alt}
                className="h-44 w-full object-cover transition duration-700 hover:scale-[1.03] sm:h-48"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
