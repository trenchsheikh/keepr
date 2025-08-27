import Image from 'next/image'

export default function MainContent() {
  return (
    <div className="relative z-10 flex justify-center items-center min-h-[90vh] px-6">
      {/* Green Border Card - positioned behind all content */}
      <div className="absolute inset-20 z-0">
        <div className="w-full h-full bg-[#2e5b0b] rounded-3xl"></div>
      </div>

      {/* Trophy Icon - positioned above the playershoot image on the right */}
      <div className="absolute -right-16 top-4 z-0">
        <Image
          src="/trophy.png"
          alt="Golden trophy"
          width={300}
          height={300}
          className="object-contain"
        />
      </div>

      {/* Playershoot Image - positioned in the background on the right */}
      <div className="absolute -right-16 top-48 z-0">
        <Image
          src="/playershoot.png"
          alt="Soccer player in action"
          width={800}
          height={800}
          className="object-contain"
        />
      </div>

      {/* Football Icon - positioned above the playerhuddle image on the left */}
      <div className="absolute -left-8 top-80 z-10">
        <Image
          src="/football.png"
          alt="Soccer ball"
          width={200}
          height={200}
          className="object-contain"
        />
      </div>

      {/* Playerhuddle Image - positioned in the background on the left, lower and smaller */}
      <div className="absolute -left-16 top-96 z-0">
        <Image
          src="/playerhuddle.png"
          alt="Soccer players huddled together"
          width={700}
          height={700}
          className="object-contain"
        />
      </div>

      {/* Main Dark Green Block */}
      <div className="bg-[--color-keepr-dark-green] rounded-3xl p-12 max-w-4xl w-full relative overflow-hidden z-20">
        {/* Headline */}
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-7xl font-bold text-[#dbff70] leading-tight" style={{ fontFamily: 'Stadio Now Display, sans-serif', fontWeight: 700 }}>
            <span className="text-8xl md:text-9xl">*</span> Think you can stick to your budget? Let your mates be the ref.
          </h2>
        </div>

        {/* Three Ticket Cards */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8">
          {/* Left Card - JOIN A LEAGUE */}
          <div className="bg-[--color-keepr-light-beige] border-2 border-[#dbff70] rounded-lg p-6 text-center transform -rotate-2 hover:rotate-0 transition-transform duration-300 cursor-pointer hover:shadow-lg">
            <h3 className="text-xl font-bold text-[#dbff70] font-[--font-stadio] uppercase">
              JOIN A LEAGUE
            </h3>
          </div>

          {/* Middle Card - MAKE A NEW LEAGUE (Highlighted) */}
          <div className="bg-[--color-keepr-dark-green] rounded-lg p-6 text-center relative transform rotate-1 hover:rotate-0 transition-transform duration-300 cursor-pointer hover:shadow-lg group">
            {/* Animated light yellow border - shows on hover */}
            <div className="absolute inset-0 rounded-lg border-4 border-[#dbff70] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"></div>
            
            {/* Highlight circle around middle card */}
            <div className="absolute -inset-2 border-2 border-gray-600 rounded-full opacity-50"></div>
            <h3 className="text-xl font-bold text-[#dbff70] font-[--font-stadio] uppercase relative z-10">
              MAKE A NEW LEAGUE
            </h3>
          </div>

          {/* Right Card - HERE TO EXPLORE */}
          <div className="bg-[--color-keepr-light-beige] border-2 border-[#dbff70] rounded-lg p-6 text-center transform rotate-2 hover:rotate-0 transition-transform duration-300 cursor-pointer hover:shadow-lg">
            <h3 className="text-xl font-bold text-[#dbff70] font-[--font-stadio] uppercase">
              HERE TO EXPLORE ?
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}
