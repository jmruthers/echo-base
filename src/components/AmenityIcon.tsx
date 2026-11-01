type AmenityIconProps = {
  id: string
  className?: string
}

export function AmenityIcon({ id, className = 'size-6' }: AmenityIconProps) {
  const common = {
    className,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }

  switch (id) {
    case 'wifi':
      return (
        <svg {...common}>
          <path d="M5 12.5a9 9 0 0 1 14 0" />
          <path d="M8.5 15.5a4.5 4.5 0 0 1 7 0" />
          <circle cx="12" cy="19" r="1" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'parking':
      return (
        <svg {...common}>
          <rect x="4" y="3" width="16" height="18" rx="2" />
          <path d="M9 17V7h4.5a3 3 0 0 1 0 6H9" />
        </svg>
      )
    case 'kitchen':
      return (
        <svg {...common}>
          <path d="M5 3v8a2 2 0 0 0 2 2h0v8" />
          <path d="M9 3v8a2 2 0 0 1-2 2" />
          <path d="M15 3v18" />
          <path d="M19 3v7a2 2 0 0 1-2 2h-2" />
        </svg>
      )
    case 'heater':
      return (
        <svg {...common}>
          <path d="M8 21h8" />
          <path d="M7 17h10" />
          <path d="M9 17c0-3 1.5-4.5 3-6 1.5 1.5 3 3 3 6" />
          <path d="M10 11c0-2 .8-3.2 2-4.5 1.2 1.3 2 2.5 2 4.5" />
        </svg>
      )
    case 'drying':
      return (
        <svg {...common}>
          <path d="M4 7h16" />
          <path d="M7 7v10a2 2 0 0 0 2 2h0" />
          <path d="M12 7v12" />
          <path d="M17 7v10a2 2 0 0 1-2 2h0" />
        </svg>
      )
    case 'spa':
      return (
        <svg {...common}>
          <path d="M4 14c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2" />
          <path d="M4 18c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2" />
          <path d="M8 7c1.2-1.5 2.5-2 4-2s2.8.5 4 2" />
        </svg>
      )
    case 'washer':
      return (
        <svg {...common}>
          <rect x="4" y="3" width="16" height="18" rx="2" />
          <circle cx="12" cy="13" r="4" />
          <circle cx="8" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
          <circle cx="11" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'tv':
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="12" rx="2" />
          <path d="M8 21h8" />
          <path d="M12 17v4" />
        </svg>
      )
    case 'nespresso':
      return (
        <svg {...common}>
          <path d="M7 9h10v5a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4V9Z" />
          <path d="M6 9h12" />
          <path d="M9 5h6" />
          <path d="M8 21h8" />
        </svg>
      )
    case 'deck':
      return (
        <svg {...common}>
          <path d="M3 14h18" />
          <path d="M5 14v6" />
          <path d="M19 14v6" />
          <path d="M8 14V8l4-3 4 3v6" />
        </svg>
      )
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
        </svg>
      )
  }
}
