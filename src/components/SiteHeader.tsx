import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { airbnbUrl, listing } from '../content/listing'

const navClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'text-main-800' : 'text-sec-700 hover:text-main-800'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-sec-200/80 bg-sec-50/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src="/images/logo.png"
            alt=""
            className="size-10 rounded-full object-cover"
          />
          <span className="font-display text-main-950">
            {listing.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <a href="/#gallery" className="text-sec-700 hover:text-main-800">
            Photos
          </a>
          <a href="/#lodge" className="text-sec-700 hover:text-main-800">
            The lodge
          </a>
          <a href="/#location" className="text-sec-700 hover:text-main-800">
            Location
          </a>
          <NavLink to="/stay" className={navClass}>
            Guest guide
          </NavLink>
          <a
            href={airbnbUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-acc-600 px-4 py-2 text-main-50 transition hover:bg-acc-500"
          >
            Check availability
          </a>
        </nav>

        <button
          type="button"
          className="rounded-full border border-sec-300 px-3 py-2 text-sec-800 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-sec-200 px-4 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-3">
            <li>
              <a href="/#gallery" onClick={() => setOpen(false)}>
                Photos
              </a>
            </li>
            <li>
              <a href="/#lodge" onClick={() => setOpen(false)}>
                The lodge
              </a>
            </li>
            <li>
              <a href="/#location" onClick={() => setOpen(false)}>
                Location
              </a>
            </li>
            <li>
              <NavLink to="/stay" className={navClass} onClick={() => setOpen(false)}>
                Guest guide
              </NavLink>
            </li>
            <li>
              <a
                href={airbnbUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded-full bg-acc-600 px-4 py-2 text-main-50"
                onClick={() => setOpen(false)}
              >
                Check availability
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
