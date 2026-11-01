export const airbnbUrl = 'https://www.airbnb.com.au/rooms/17964453'
export const contactEmail = 'echobase@therutherfords.com.au'

export const listing = {
  name: 'Echo Base',
  tagline: 'Alpine Family Retreat',
  location: 'Dinner Plain, Victoria',
  summary:
    'Spacious alpine retreat in a quiet Dinner Plain cul-de-sac. Perfect for families and groups, close to village cafés, trails, and Mt Hotham shuttle.',
  stats: {
    guests: 10,
    bedrooms: 3,
    beds: 7,
    baths: 2,
  },
  rating: {
    overall: 4.86,
    count: 86,
    cleanliness: 4.7,
    accuracy: 4.9,
    checkIn: 4.9,
    communication: 4.9,
    location: 4.9,
    value: 4.7,
  },
  highlights: [
    {
      title: 'In Dinner Plain village',
      body: 'Walking distance to village cafés, Blizzard Brewery, and the toboggan slope.',
    },
    {
      title: 'Stone hearth with wood heater',
      body: 'A slow-combustion wood heater set against a local stone hearth warms the open-plan living area.',
    },
    {
      title: 'Guests keep coming back',
      body: 'Returning guests describe it as a home away from home — some rebooking over seven years.',
    },
  ],
  levels: [
    {
      title: 'Ground floor',
      body: 'A welcoming entry lobby with seating for boots and gear, plus a drying room and full bathroom/laundry. The open-plan kitchen, dining and living area centres on the stone hearth wood heater, with window seats for alpine views and a deck for mountain air.',
    },
    {
      title: 'First floor',
      body: 'The master bedroom has a king bed (convertible to two singles). The family bedroom features a queen plus two singles through an archway. The family bathroom has a corner spa bath with overhead shower, and a separate toilet.',
    },
    {
      title: 'Loft',
      body: 'A flexible sleeping space with a king bed (or two singles) plus two more singles — reached by stairs, not a ladder. Its own TV makes it ideal for kids or teens to unwind.',
    },
  ],
  amenities: [
    { id: 'wifi', label: 'Wi-Fi' },
    { id: 'parking', label: 'Free parking' },
    { id: 'kitchen', label: 'Full kitchen' },
    { id: 'heater', label: 'Wood heater' },
    { id: 'drying', label: 'Drying room' },
    { id: 'spa', label: 'Spa bath' },
    { id: 'washer', label: 'Washer & dryer' },
    { id: 'tv', label: 'HDTV with Chromecast' },
    { id: 'nespresso', label: 'Nespresso machine' },
    { id: 'deck', label: 'Deck & backyard' },
  ],
  bedrooms: [
    {
      name: 'Master bedroom',
      detail: '1 king bed (or 2 singles)',
      image: '/images/bedroom-master.jpg',
    },
    {
      name: 'Family bedroom',
      detail: '1 queen bed + 2 singles',
      image: '/images/bedroom-family.jpg',
    },
    {
      name: 'Loft',
      detail: '1 king (or 2 singles) + 2 singles',
      image: '/images/loft.jpg',
    },
  ],
  neighbourhood: [
    'Mount Hotham ski lifts are a short 15-minute drive away',
    'Blizzard Brewery — the highest brewery in Australia',
    'Toboggan slope and tubing (open in summer too)',
    'High Plains Hotel — gourmet dining, wood-fired pizza, live music in winter',
    'Dinner Plain Hotel — family-friendly pub dining and open fireplace',
    'Mountain Kitchen Cafe — coffee, homemade delights, local produce',
    'Onsen Spa and Retreat — gym, pool, outdoor onsen, spas and saunas',
    'Extensive walking and cross-country trails around Dinner Plain',
  ],
  reviews: [
    {
      name: 'Lauren',
      date: 'August 2026',
      body: 'We have stayed here multiple times over the last 7 years and every time feels the same — being at home away from home!',
    },
    {
      name: 'Sian',
      date: 'August 2026',
      body: 'Lovely space for our holiday. We had 3 families and the configuration worked perfectly. Great location to the toboggan slope, walking distance to restaurants. The dry room was an absolute necessity.',
    },
    {
      name: 'Azmi',
      date: 'August 2025',
      body: 'From the moment I arrived, everything was well-organized and welcoming. Clean, comfortable, and perfectly set up for a relaxing getaway. Peaceful and surrounded by beautiful scenery.',
    },
  ],
  host: {
    name: 'Jessica',
    years: 12,
    blurb:
      'I’m a busy working mother who loves travel, good food, and the outdoors. We fell in love with Dinner Plain years ago and wanted to create a comfortable alpine home that families could enjoy in every season — whether for snowplay, hiking, or just relaxing by the fire.',
  },
  gallery: [
    { src: '/images/lounge-2.jpg', alt: 'Open-plan living area with stone hearth' },
    { src: '/images/kitchen-1.jpg', alt: 'Fully equipped alpine kitchen' },
    { src: '/images/dining.jpg', alt: 'Dining space for the whole group' },
    { src: '/images/lounge-1.jpg', alt: 'Lounge with alpine views' },
    { src: '/images/bedroom-master.jpg', alt: 'Master bedroom' },
    { src: '/images/loft.jpg', alt: 'Flexible loft sleeping space' },
    { src: '/images/deck-summer.jpg', alt: 'Deck in summer' },
    { src: '/images/drone.jpg', alt: 'Echo Base from above' },
  ],
  stay: {
    checkIn: 'After 4:00 pm',
    checkOut: 'Before 10:00 am',
    access: 'Self check-in with keypad (code sent on the morning of arrival)',
    rules: [
      'Close and lock all windows and doors whenever you leave the property.',
      'No loud or offensive noise, especially between 10 pm and 8 am.',
      'No smoking indoors; dispose of butts responsibly outdoors.',
      'Pets are not permitted.',
      'Please let us know promptly of any damages or breakages.',
      'Be respectful of neighbours — disruptive parties will be asked to leave.',
    ],
    provided: [
      'Beds made up on arrival (confirm your preferred bed configuration)',
      'Bath towel per guest; bath mat and hand towel per bathroom',
      'Crockery, glassware, and utensils',
      'Limited dishwasher tablets, dishwashing liquid, and toilet paper',
      'Dry wood, kindling, matches, and fire lighters by the fire',
    ],
    bring: [
      'Nespresso pods (or ground coffee for the plunger)',
      'Any specialty kitchen items you prefer',
      'Laptop or media player if you want to stream (cables ready by the TVs)',
    ],
    parking:
      'Two parking spaces at the front of the lodge. Extra parking is available at Scrubbers End — a free pass from the Dinner Plain Information Centre.',
  },
} as const
