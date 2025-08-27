interface TrophyProps {
  className?: string
}

export default function Trophy({ className = "" }: TrophyProps) {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
        {/* Trophy base */}
        <rect x="35" y="75" width="30" height="8" fill="#fbbf24" stroke="#92400e" strokeWidth="1" />
        
        {/* Trophy stem */}
        <rect x="45" y="45" width="10" height="30" fill="#fbbf24" stroke="#92400e" strokeWidth="1" />
        
        {/* Trophy cup */}
        <path
          d="M25 45 Q50 25 75 45 L70 65 Q50 55 30 65 Z"
          fill="#fbbf24"
          stroke="#92400e"
          strokeWidth="2"
        />
        
        {/* Trophy handles */}
        <path
          d="M25 45 Q15 50 20 60 Q25 55 30 65"
          fill="none"
          stroke="#92400e"
          strokeWidth="2"
        />
        <path
          d="M75 45 Q85 50 80 60 Q75 55 70 65"
          fill="none"
          stroke="#92400e"
          strokeWidth="2"
        />
        
        {/* Trophy rim */}
        <path
          d="M25 45 L75 45"
          fill="none"
          stroke="#92400e"
          strokeWidth="3"
        />
        
        {/* Shine effect */}
        <path
          d="M30 50 Q50 40 70 50"
          fill="none"
          stroke="#fef3c7"
          strokeWidth="2"
          opacity="0.6"
        />
      </svg>
    </div>
  )
}
