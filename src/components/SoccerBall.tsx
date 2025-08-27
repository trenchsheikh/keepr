interface SoccerBallProps {
  className?: string
}

export default function SoccerBall({ className = "" }: SoccerBallProps) {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
        {/* Main ball circle */}
        <circle cx="50" cy="50" r="45" fill="white" stroke="black" strokeWidth="2" />
        
        {/* Soccer ball pattern - simplified hexagon design */}
        <path
          d="M50 5 L80 25 L80 75 L50 95 L20 75 L20 25 Z"
          fill="black"
          opacity="0.3"
        />
        
        {/* Center lines */}
        <line x1="50" y1="5" x2="50" y2="95" stroke="black" strokeWidth="1" />
        <line x1="20" y1="60" x2="80" y2="40" stroke="black" strokeWidth="1" />
        <line x1="20" y1="40" x2="80" y2="60" stroke="black" strokeWidth="1" />
        
        {/* Small decorative circles */}
        <circle cx="50" cy="50" r="8" fill="black" />
        <circle cx="35" cy="35" r="3" fill="black" />
        <circle cx="65" cy="35" r="3" fill="black" />
        <circle cx="35" cy="65" r="3" fill="black" />
        <circle cx="65" cy="65" r="3" fill="black" />
      </svg>
    </div>
  )
}
