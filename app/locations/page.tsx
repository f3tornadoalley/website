import Link from 'next/link';

export default function LocationsPage() {
  const regions = [
    {
      name: 'Tornado Alley',
      description: 'Edmond area workout locations',
      statsUrl: 'https://pax-vault.f3nation.com/stats/region/35003',
      regionInfoUrl: 'https://regions.f3nation.com/tornado-alley',
      cities: [
        { name: 'Edmond', path: '/locations/edmond' }
      ]
    },
    {
      name: 'Boomtown',
      description: 'OKC, Norman, and Yukon area workout locations',
      statsUrl: 'https://pax-vault.f3nation.com/stats/region/50857',
      regionInfoUrl: null,
      cities: [
        { name: 'Oklahoma City', path: '/locations/okc' },
        { name: 'Norman', path: '/locations/norman' },
        { name: 'Yukon', path: '/locations/yukon' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 font-(family-name:--font-titillium-web)">
          Locations
        </h1>

        <p className="text-lg text-gray-700 mb-8 max-w-3xl">
          F3 Tornado Alley is made up of two regions across the Oklahoma City metro area.
          Explore the map below or select a region to find workout locations near you.
        </p>

        {/* F3 Nation Map Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900 font-(family-name:--font-titillium-web)">
              F3 Workout Map
            </h2>
            <a
              href="https://map.f3nation.com/?lat=35.697119&lng=-97.493300&zoom=15"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
            >
              Open in Full Screen
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
          <div className="bg-gray-100 rounded-lg overflow-hidden border-2 border-gray-200">
            <iframe
              src="https://map.f3nation.com/?lat=35.697119&lng=-97.493300&zoom=15"
              className="w-full h-[500px]"
              title="F3 Nation Workout Map"
              loading="lazy"
            />
          </div>
        </div>

        {/* Regions Section */}
        <h2 className="text-3xl font-bold text-gray-900 mb-6 font-(family-name:--font-titillium-web)">
          Our Regions
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {regions.map((region) => (
            <div
              key={region.name}
              className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-3 font-(family-name:--font-titillium-web)">
                {region.name}
              </h3>
              <p className="text-gray-700 mb-4">
                {region.description}
              </p>

              {/* Region Links */}
              <div className="flex flex-wrap gap-3 mb-6">
                <a
                  href={region.statsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  View Stats
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>

                {region.regionInfoUrl ? (
                  <a
                    href={region.regionInfoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
                  >
                    Region Info
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                ) : (
                  <span className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-500 rounded-lg font-medium">
                    Region Info - Coming Soon
                  </span>
                )}
              </div>

              {/* City Links */}
              <div className="border-t border-gray-200 pt-4">
                <p className="text-sm font-semibold text-gray-900 mb-3">
                  Workout Locations:
                </p>
                <div className="flex flex-wrap gap-2">
                  {region.cities.map((city) => (
                    <Link
                      key={city.path}
                      href={city.path}
                      className="inline-flex items-center px-3 py-2 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
                    >
                      {city.name}
                      <svg
                        className="ml-1 w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
