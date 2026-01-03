import Image from "next/image";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tornado Alley - F3",
    description: "A free fitness group dedicated to building stronger men through peer-led workouts, leadership development, and community service.",
    url: "https://tornadoalley.f3nation.com",
    logo: "https://tornadoalley.f3nation.com/tornado-alley-logo.png",
    sameAs: [
      "https://www.facebook.com/f3tornadoalley",
      "https://www.instagram.com/f3tornadoalley/",
      "https://x.com/f3tornadoalley",
      "https://www.tiktok.com/@f3tornadoalley",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="relative w-full min-h-[calc(100vh-64px)] bg-white flex flex-col">
        {/* Hero Image Section - fills available space minus principles section */}
        <div className="relative w-full flex-1 min-h-[50vh]">
          <Image
            src="https://pub-c59a7d8d850842288d7852af88d4ee66.r2.dev/images/2025_12_31_ground_zero.jpg"
            alt="Tornado Alley Ground Zero"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>

          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col items-center px-6 text-center">
            {/* Tornado Alley Heading - positioned higher */}
            <div className="mt-[8vh]">
              <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl drop-shadow-2xl">
                Tornado Alley
              </h1>
            </div>

            {/* Social Media Links - positioned at bottom with padding */}
            <div className="absolute bottom-28 sm:bottom-24 md:bottom-28 left-0 right-0 flex flex-wrap items-center justify-center gap-2 px-4 sm:px-6">
              <a
                href="https://www.facebook.com/f3tornadoalley"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1 sm:gap-1.5 rounded-full bg-blue-600 w-[72px] sm:w-28 md:w-32 h-8 sm:h-9 text-white transition-all hover:bg-blue-700 hover:scale-105 shadow-xl backdrop-blur-sm text-xs sm:text-sm"
                aria-label="Visit our Facebook page"
              >
                <svg
                  className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-medium hidden sm:inline">Facebook</span>
                <span className="font-medium sm:hidden">FB</span>
              </a>

              <a
                href="https://www.instagram.com/f3tornadoalley/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1 sm:gap-1.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 w-[72px] sm:w-28 md:w-32 h-8 sm:h-9 text-white transition-all hover:from-purple-700 hover:to-pink-700 hover:scale-105 shadow-xl backdrop-blur-sm text-xs sm:text-sm"
                aria-label="Visit our Instagram page"
              >
                <svg
                  className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-medium hidden sm:inline">Instagram</span>
                <span className="font-medium sm:hidden">IG</span>
              </a>

              <a
                href="https://x.com/f3tornadoalley"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1 sm:gap-1.5 rounded-full bg-white/10 backdrop-blur-sm w-[72px] sm:w-28 md:w-32 h-8 sm:h-9 text-white transition-all hover:bg-white/20 hover:scale-105 shadow-xl border border-white/20 text-xs sm:text-sm"
                aria-label="Visit our X (Twitter) page"
              >
                <svg
                  className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span className="font-medium">X</span>
              </a>

              <a
                href="https://www.tiktok.com/@f3tornadoalley"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1 sm:gap-1.5 rounded-full bg-white/10 backdrop-blur-sm w-[72px] sm:w-28 md:w-32 h-8 sm:h-9 text-white transition-all hover:bg-white/20 hover:scale-105 shadow-xl border border-white/20 text-xs sm:text-sm"
                aria-label="Visit our TikTok page"
              >
                <svg
                  className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
                <span className="font-medium hidden sm:inline">TikTok</span>
                <span className="font-medium sm:hidden">TT</span>
              </a>
            </div>
          </div>

          {/* Mission Statement Callout - overlaying bottom of hero */}
          <div className="absolute bottom-0 left-0 right-0 bg-white py-2 px-4">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-base md:text-lg font-semibold text-gray-800 font-(family-name:--font-titillium-web)">
                The Mission of F3 is to plant, grow and serve small workout groups for men for the invigoration of male community leadership.
              </h2>
            </div>
          </div>
        </div>

        {/* 5 Core Principles Section */}
        <div className="bg-white py-6 px-4 flex-shrink-0">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
              {/* Principle 1: Free of Charge */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-2 w-12 h-12 flex items-center justify-center">
                  <Image
                    src="/images/principles/Free-of-charge.svg"
                    alt="Free of Charge"
                    width={48}
                    height={48}
                    unoptimized
                  />
                </div>
                <h3 className="text-sm font-bold mb-0.5 text-gray-800 font-(family-name:--font-titillium-web)">
                  Free of Charge
                </h3>
                <p className="text-xs text-gray-600">
                  Never pay to workout
                </p>
              </div>

              {/* Principle 2: Open to all Men */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-2 w-12 h-12 flex items-center justify-center">
                  <Image
                    src="/images/principles/Open-to-all-men.svg"
                    alt="Open to all Men"
                    width={48}
                    height={48}
                    unoptimized
                  />
                </div>
                <h3 className="text-sm font-bold mb-0.5 text-gray-800 font-(family-name:--font-titillium-web)">
                  Open to all Men
                </h3>
                <p className="text-xs text-gray-600">
                  All are welcome
                </p>
              </div>

              {/* Principle 3: Held Outdoors */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-2 w-12 h-12 flex items-center justify-center">
                  <Image
                    src="/images/principles/Held-outdoors.svg"
                    alt="Held Outdoors"
                    width={48}
                    height={48}
                    unoptimized
                  />
                </div>
                <h3 className="text-sm font-bold mb-0.5 text-gray-800 font-(family-name:--font-titillium-web)">
                  Held Outdoors
                </h3>
                <p className="text-xs text-gray-600">
                  Rain or shine
                </p>
              </div>

              {/* Principle 4: Peer Led */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-2 w-12 h-12 flex items-center justify-center">
                  <Image
                    src="/images/principles/Peer-led.svg"
                    alt="Peer Led"
                    width={48}
                    height={48}
                    unoptimized
                  />
                </div>
                <h3 className="text-sm font-bold mb-0.5 text-gray-800 font-(family-name:--font-titillium-web)">
                  Peer Led
                </h3>
                <p className="text-xs text-gray-600">
                  Rotating leadership
                </p>
              </div>

              {/* Principle 5: Ends with a COT */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-2 w-12 h-12 flex items-center justify-center">
                  <Image
                    src="/images/principles/Ends-in-a-COT.svg"
                    alt="Ends with a COT"
                    width={48}
                    height={48}
                    unoptimized
                  />
                </div>
                <h3 className="text-sm font-bold mb-0.5 text-gray-800 font-(family-name:--font-titillium-web)">
                  Ends with a COT
                </h3>
                <p className="text-xs text-gray-600">
                  Circle of Trust
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
