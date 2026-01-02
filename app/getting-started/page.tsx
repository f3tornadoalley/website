export default function GettingStartedPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 font-(family-name:--font-titillium-web)">
          Getting Started
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-base text-gray-700 mb-4">
            Welcome to F3 Tornado Alley! Here&apos;s how to join your first workout.
          </p>

          <div className="bg-gray-50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-(family-name:--font-titillium-web)">
              What to Expect
            </h2>
            <p className="text-gray-700 mb-4">
              F3 workouts are free, peer-led, and held outdoors in all weather conditions.
              No experience is necessary, and all fitness levels are welcome.
            </p>
          </div>

          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-(family-name:--font-titillium-web)">
                Step 1: Find a Workout
              </h3>
              <p className="text-gray-700">
                Browse our locations page to find a workout near you. Each location lists
                meeting times and details.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-(family-name:--font-titillium-web)">
                Step 2: Just Show Up
              </h3>
              <p className="text-gray-700">
                No registration required. Simply show up at the designated time and location.
                Introduce yourself and let us know you&apos;re new!
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-(family-name:--font-titillium-web)">
                Step 3: Post Workout
              </h3>
              <p className="text-gray-700">
                After the workout, stick around for coffee and conversation. This is where
                the real F3 experience happens.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded-lg mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-(family-name:--font-titillium-web)">
              What to Bring
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Athletic clothing appropriate for the weather</li>
              <li>Water bottle</li>
              <li>A positive attitude</li>
              <li>No equipment necessary - we provide everything</li>
            </ul>
          </div>

          <div className="mt-8 p-6 bg-gray-900 text-white rounded-lg">
            <p className="text-lg mb-4">
              Ready to start? Find a workout location near you!
            </p>
            <a
              href="/locations"
              className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-colors"
            >
              View Locations
              <svg
                className="ml-2 w-4 h-4"
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
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
