export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 font-(family-name:--font-titillium-web)">
          Resources
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 mb-8">
            This is a placeholder page for F3 Tornado Alley resources.
            Information about workouts, terminology, and other helpful resources will be added here.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-(family-name:--font-titillium-web)">
                F3 Nation
              </h2>
              <p className="text-gray-700 mb-4">
                Learn more about the F3 Nation and our mission to invigorate male community leadership.
              </p>
              <a
                href="https://f3nation.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
              >
                Visit F3 Nation
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

            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-(family-name:--font-titillium-web)">
                F3 Lexicon
              </h2>
              <p className="text-gray-700 mb-4">
                Familiarize yourself with F3 terminology and workout formats.
              </p>
              <a
                href="https://f3nation.com/lexicon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
              >
                View Lexicon
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

            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-(family-name:--font-titillium-web)">
                Exicon
              </h2>
              <p className="text-gray-700 mb-4">
                Browse the complete exercise library with demonstrations and instructions.
              </p>
              <a
                href="https://f3nation.com/exicon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
              >
                View Exicon
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

            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-(family-name:--font-titillium-web)">
                Q Source
              </h2>
              <p className="text-gray-700 mb-4">
                Leadership resources and guides for leading F3 workouts.
              </p>
              <a
                href="https://f3nation.com/q-source"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
              >
                View Q Source
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
          </div>
        </div>
      </div>
    </div>
  );
}
