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
      description: 'OKC, Norman, Yukon, and Mustang area workout locations',
      statsUrl: 'https://pax-vault.f3nation.com/stats/region/50857',
      regionInfoUrl: null,
      cities: [
        { name: 'Oklahoma City', path: '/locations/okc' },
        { name: 'Norman', path: '/locations/norman' },
        { name: 'Yukon', path: '/locations/yukon' },
        { name: 'Mustang', path: '/locations/mustang' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-(family-name:--font-titillium-web)">
          Locations
        </h1>

        {/* Map and Regions Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-12">
          {/* F3 Nation Map Section - Takes up 2/3 on desktop */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-bold text-gray-900 font-(family-name:--font-titillium-web)">
                F3 Workout Map
              </h2>
              <a
                href="https://map.f3nation.com/?lat=35.520000&lng=-97.493300&zoom=11"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center text-xs"
              >
                Full Screen
                <svg
                  className="w-3 h-3 ml-1"
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
            <div className="bg-gray-100 rounded-lg overflow-hidden border-2 border-gray-200 h-[600px]">
              <iframe
                src="https://map.f3nation.com/?lat=35.520000&lng=-97.493300&zoom=11"
                className="w-full h-full"
                title="F3 Nation Workout Map"
                loading="lazy"
              />
            </div>
          </div>

          {/* Regions Section - Takes up 1/3 on desktop, stacked vertically */}
          <div className="lg:col-span-1 flex flex-col gap-3">
            <h2 className="text-xl font-bold text-gray-900 font-(family-name:--font-titillium-web)">
              Our Regions
            </h2>

            {regions.map((region) => (
              <div
                key={region.name}
                className="bg-white border-2 border-gray-200 rounded-lg p-3 hover:shadow-lg transition-shadow flex-1"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-1 font-(family-name:--font-titillium-web)">
                  {region.name}
                </h3>
                <p className="text-gray-700 mb-2 text-xs">
                  {region.description}
                </p>

                {/* Region Links */}
                <div className="flex gap-1.5 mb-2">
                  <a
                    href={region.statsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-2 py-1.5 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors font-medium text-xs"
                  >
                    Stats
                    <svg
                      className="w-3 h-3 ml-1"
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
                      className="flex-1 inline-flex items-center justify-center px-2 py-1.5 bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors font-medium text-xs"
                    >
                      Info
                      <svg
                        className="w-3 h-3 ml-1"
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
                    <span className="flex-1 inline-flex items-center justify-center px-2 py-1.5 bg-gray-200 text-gray-500 rounded font-medium text-xs">
                      Info Soon
                    </span>
                  )}
                </div>

                {/* City Links */}
                <div className="border-t border-gray-200 pt-2">
                  <p className="text-xs font-semibold text-gray-900 mb-1.5">
                    Workout Locations:
                  </p>
                  <div className="flex flex-col gap-1">
                    {region.cities.map((city) => (
                      <Link
                        key={city.path}
                        href={city.path}
                        className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-900 rounded hover:bg-gray-200 transition-colors text-xs font-medium"
                      >
                        {city.name}
                        <svg
                          className="ml-auto w-3 h-3"
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
    </div>
  );
}
