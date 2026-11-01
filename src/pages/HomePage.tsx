import { Amenities } from '../components/home/Amenities'
import { BookCta } from '../components/home/BookCta'
import { Gallery } from '../components/home/Gallery'
import { Hero } from '../components/home/Hero'
import { Location } from '../components/home/Location'
import { Lodge } from '../components/home/Lodge'
import { Reviews } from '../components/home/Reviews'
import { Sleep } from '../components/home/Sleep'

export function HomePage() {
  return (
    <>
      <Hero />
      <Gallery />
      <Lodge />
      <Amenities />
      <Sleep />
      <Location />
      <Reviews />
      <BookCta />
    </>
  )
}
