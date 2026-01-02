import Link from 'next/link';

interface Workout {
  name: string;
  address: string;
  schedule: { day: string; time: string; type: string }[];
  notes?: string;
  mapUrl: string;
  latitude: number;
  longitude: number;
}

export default function EdmondPage() {
  const aos: Workout[] = [
    {
      name: 'Ground Zero',
      address: '2221 E Memorial Rd, Edmond, OK 73013',
      schedule: [
        { day: 'Monday', time: '0530-0615', type: 'Bootcamp' },
        { day: 'Wednesday', time: '0530-0615', type: 'Bootcamp' },
        { day: 'Friday', time: '0530-0615', type: 'Bootcamp' },
        { day: 'Saturday', time: '0700-0745', type: 'Bootcamp' },
      ],
      latitude: 35.6092652,
      longitude: -97.4722437,
      mapUrl: 'https://map.f3nation.com/?lat=35.6092652&lon=-97.4722437&zoom=15'
    },
    {
      name: 'Iron Pup Tire Co.',
      address: '1901 W 15th St, Edmond, OK 73013',
      schedule: [
        { day: 'Saturday', time: '0530-0615', type: 'Bootcamp' },
      ],
      notes: 'Santa Fe High School - meet in the parking lot near the football stadium "The Wolf Den"',
      latitude: 35.6422334520722,
      longitude: -97.5101519855726,
      mapUrl: 'https://map.f3nation.com/?lat=35.6422334520722&lon=-97.5101519855726&zoom=15'
    },
    {
      name: 'The Gas Station',
      address: '4901 Explorer Dr, Edmond, OK 73012',
      schedule: [
        { day: 'Monday', time: '0530-0615', type: 'Bootcamp' },
        { day: 'Wednesday', time: '0530-0615', type: 'Bootcamp' },
      ],
      latitude: 35.6776422385679,
      longitude: -97.5488619498245,
      mapUrl: 'https://map.f3nation.com/?lat=35.6776422385679&lon=-97.5488619498245&zoom=15'
    },
    {
      name: 'The Jungle',
      address: '2733 Marilyn Williams Dr, Edmond, OK 73003',
      schedule: [
        { day: 'Tuesday', time: '0530-0615', type: 'Run' },
        { day: 'Friday', time: '0530-0615', type: 'Ruck' },
      ],
      notes: 'Typically a 5K Run on Tuesdays. Fridays are Ruck - bring a weighted vest or backpack!',
      latitude: 35.683104,
      longitude: -97.507206,
      mapUrl: 'https://map.f3nation.com/?lat=35.683104&lon=-97.507206&zoom=15'
    },
    {
      name: 'The Junkyard',
      address: '1034 S Bryant Ave, Edmond, OK 73034',
      schedule: [
        { day: 'Tuesday', time: '0530-0615', type: 'Bootcamp' },
        { day: 'Thursday', time: '0530-0615', type: 'Bootcamp' },
      ],
      notes: 'E.C. Hafer Park - meet at the second parking lot in the back left past the baseball diamonds',
      latitude: 35.645888,
      longitude: -97.456338,
      mapUrl: 'https://map.f3nation.com/?lat=35.645888&lon=-97.456338&zoom=15'
    },
  ];

  const getGoogleMapsUrl = (ao: Workout) => {
    return `https://www.google.com/maps/dir/?api=1&destination=${ao.latitude},${ao.longitude}`;
  };

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

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-(family-name:--font-titillium-web)">
          Edmond
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          {aos.length} workout locations in the Edmond area
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aos.map((ao) => (
            <div
              key={ao.name}
              className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow flex flex-col h-full min-h-[380px]"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-(family-name:--font-titillium-web)">
                {ao.name}
              </h2>

              <div className="space-y-3 mb-4 flex-grow">
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-gray-600 mr-2 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Location</p>
                    <p className="text-sm text-gray-700">{ao.address}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-gray-600 mr-2 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Schedule</p>
                    {ao.schedule.map((s, idx) => (
                      <p key={idx} className="text-sm text-gray-700">
                        {s.day}: {s.time} ({s.type})
                      </p>
                    ))}
                  </div>
                </div>

                {ao.notes && (
                  <div className="flex items-start">
                    <svg
                      className="w-5 h-5 text-gray-600 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Notes</p>
                      <p className="text-sm text-gray-700">{ao.notes}</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-2 mt-auto">
                <a
                  href={getGoogleMapsUrl(ao)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium text-sm"
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
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Get Directions
                </a>
                <a
                  href={ao.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
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
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                  View on F3 Map
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
