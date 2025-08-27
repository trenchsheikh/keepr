export default function FootballPlayers() {
  return (
    <div className="relative">
      {/* Left group of players (numbers 22 and 99) */}
      <div className="relative mb-8">
        {/* Starburst background */}
        <div className="absolute inset-0">
          <svg width="200" height="150" viewBox="0 0 200 150" fill="none" className="text-[--color-keepr-lime-green]">
            <path
              d="M100 0 L120 30 L150 40 L130 70 L140 100 L100 80 L60 100 L70 70 L50 40 L80 30 Z"
              fill="currentColor"
              opacity="0.3"
            />
            {/* Dotted texture */}
            <circle cx="80" cy="20" r="2" fill="currentColor" opacity="0.6" />
            <circle cx="120" cy="20" r="2" fill="currentColor" opacity="0.6" />
            <circle cx="90" cy="50" r="2" fill="currentColor" opacity="0.6" />
            <circle cx="110" cy="50" r="2" fill="currentColor" opacity="0.6" />
            <circle cx="100" cy="80" r="2" fill="currentColor" opacity="0.6" />
          </svg>
        </div>
        
        {/* Players */}
        <div className="relative z-10 flex items-center space-x-2">
          {/* Player with number 22 */}
          <div className="w-12 h-16 bg-[--color-keepr-dark-green] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg font-[--font-stadio]">22</span>
          </div>
          
          {/* Player with number 99 */}
          <div className="w-12 h-16 bg-[--color-keepr-dark-green] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg font-[--font-stadio]">99</span>
          </div>
        </div>
      </div>

      {/* Right single player (number 20) */}
      <div className="relative ml-32">
        {/* Starburst background */}
        <div className="absolute inset-0">
          <svg width="150" height="120" viewBox="0 0 150 120" fill="none" className="text-[--color-keepr-lime-green]">
            <path
              d="M75 0 L90 25 L120 30 L100 55 L110 80 L75 65 L40 80 L50 55 L30 30 L60 25 Z"
              fill="currentColor"
              opacity="0.3"
            />
            {/* Dotted texture */}
            <circle cx="60" cy="15" r="2" fill="currentColor" opacity="0.6" />
            <circle cx="90" cy="15" r="2" fill="currentColor" opacity="0.6" />
            <circle cx="70" cy="40" r="2" fill="currentColor" opacity="0.6" />
            <circle cx="80" cy="40" r="2" fill="currentColor" opacity="0.6" />
            <circle cx="75" cy="65" r="2" fill="currentColor" opacity="0.6" />
          </svg>
        </div>
        
        {/* Single player with number 20 */}
        <div className="relative z-10 w-12 h-16 bg-white border-2 border-[--color-keepr-dark-green] rounded-lg flex items-center justify-center">
          <span className="text-[--color-keepr-dark-green] font-bold text-lg font-[--font-stadio]">20</span>
        </div>
        
        {/* Football below player */}
        <div className="relative z-10 mt-2 ml-4">
          <div className="w-8 h-6 bg-white border border-[--color-keepr-dark-green] rounded-full flex items-center justify-center">
            <div className="w-6 h-4 bg-[--color-keepr-dark-green] rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
