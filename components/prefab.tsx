import React from 'react'

const PrefabSvg = () => {
  return (
       <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center overflow-hidden relative">
                {/* Stylized home illustration */}
                <svg viewBox="0 0 400 300" className="w-full h-full p-4">
                  {/* Sky */}
                  <rect x="0" y="0" width="400" height="150" fill="#E0F2FE" />
                  {/* Ground */}
                  <rect x="0" y="150" width="400" height="150" fill="#ECFDF5" />
                  
                  {/* Modern Prefab Home */}
                  <g transform="translate(80, 80)">
                    {/* Main structure */}
                    <rect x="0" y="50" width="240" height="100" fill="#1F2937" rx="4" />
                    {/* Roof accent */}
                    <rect x="0" y="40" width="240" height="15" fill="#2D5016" rx="2" />
                    {/* Large window */}
                    <rect x="20" y="70" width="80" height="60" fill="#0EA5E9" opacity="0.6" rx="2" />
                    <rect x="25" y="75" width="70" height="50" fill="#BFDBFE" rx="1" />
                    {/* Door */}
                    <rect x="130" y="80" width="40" height="70" fill="#374151" rx="2" />
                    <circle cx="160" cy="115" r="3" fill="#F59E0B" />
                    {/* Small windows */}
                    <rect x="190" y="70" width="35" height="35" fill="#0EA5E9" opacity="0.6" rx="2" />
                    <rect x="193" y="73" width="29" height="29" fill="#BFDBFE" rx="1" />
                    {/* Battery unit on side */}
                    <rect x="245" y="90" width="25" height="60" fill="#2D5016" rx="2" />
                    <rect x="250" y="100" width="15" height="8" fill="#22C55E" rx="1" />
                    <rect x="250" y="112" width="15" height="8" fill="#22C55E" rx="1" />
                    <rect x="250" y="124" width="15" height="8" fill="#22C55E" rx="1" />
                  </g>
                  
                  {/* Sun */}
                  <circle cx="350" cy="50" r="30" fill="#F59E0B" />
                  
                  {/* Trees */}
                  <g transform="translate(30, 120)">
                    <rect x="15" y="40" width="10" height="30" fill="#8B5A2B" />
                    <polygon points="20,0 0,45 40,45" fill="#2D5016" />
                  </g>
                  <g transform="translate(340, 130)">
                    <rect x="15" y="40" width="10" height="25" fill="#8B5A2B" />
                    <polygon points="20,0 0,40 40,40" fill="#2D5016" />
                  </g>
                </svg>
              </div>
  )
}

export default PrefabSvg