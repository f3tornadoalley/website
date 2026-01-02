import Link from 'next/link';

export default function NormanPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/locations"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Locations
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 font-(family-name:--font-titillium-web)">
          Norman
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 mb-6">
            This is a placeholder page for Norman workout locations.
            Information about Norman F3 locations will be added here.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-(family-name:--font-titillium-web)">
              Coming Soon
            </h2>
            <p className="text-gray-700">
              Detailed information about workout locations, times, and meeting points
              in the Norman area will be available soon.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
