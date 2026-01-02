import Link from 'next/link';

export default function LocationsPage() {
  const locations = [
    { name: 'Oklahoma City', path: '/locations/okc', description: 'OKC area workout locations' },
    { name: 'Edmond', path: '/locations/edmond', description: 'Edmond area workout locations' },
    { name: 'Norman', path: '/locations/norman', description: 'Norman area workout locations' },
    { name: 'Yukon', path: '/locations/yukon', description: 'Yukon area workout locations' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 font-(family-name:--font-titillium-web)">
          Locations
        </h1>

        <p className="text-lg text-gray-700 mb-12 max-w-3xl">
          F3 Tornado Alley has workout locations across the Oklahoma City metro area.
          Select a city below to find workout locations near you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((location) => (
            <Link
              key={location.path}
              href={location.path}
              className="group block p-6 bg-white border-2 border-gray-200 rounded-lg hover:border-gray-900 hover:shadow-lg transition-all"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors font-(family-name:--font-titillium-web)">
                {location.name}
              </h2>
              <p className="text-gray-600">
                {location.description}
              </p>
              <div className="mt-4 flex items-center text-blue-600 font-medium">
                View Locations
                <svg
                  className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
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
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
