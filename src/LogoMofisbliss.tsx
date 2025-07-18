import React from 'react';

const LogoMofisbliss: React.FC<{size?: number}> = ({ size = 120 }) => (
  <svg width={size} height={size * 1.4} viewBox="0 0 180 250" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Bread Loaf */}
    <ellipse cx="90" cy="60" rx="45" ry="25" fill="#fff" stroke="#f7a13d" strokeWidth="3"/>
    <path d="M45 60 Q90 10 135 60" fill="#f7a13d"/>
    {/* Bread slices */}
    <rect x="110" y="38" width="13" height="35" rx="6" fill="#f7a13d" stroke="#fff" strokeWidth="2" transform="rotate(-10 116 55)"/>
    <rect x="124" y="44" width="10" height="28" rx="5" fill="#f7a13d" stroke="#fff" strokeWidth="2" transform="rotate(-5 129 58)"/>
    {/* Wheat left */}
    <g>
      <ellipse cx="38" cy="38" rx="3" ry="10" fill="#f7a13d" transform="rotate(-25 38 38)"/>
      <ellipse cx="30" cy="52" rx="2.5" ry="7" fill="#f7a13d" transform="rotate(-20 30 52)"/>
      <ellipse cx="48" cy="26" rx="2.5" ry="7" fill="#f7a13d" transform="rotate(-35 48 26)"/>
    </g>
    {/* Wheat right */}
    <g>
      <ellipse cx="142" cy="38" rx="3" ry="10" fill="#f7a13d" transform="rotate(25 142 38)"/>
      <ellipse cx="150" cy="52" rx="2.5" ry="7" fill="#f7a13d" transform="rotate(20 150 52)"/>
      <ellipse cx="132" cy="26" rx="2.5" ry="7" fill="#f7a13d" transform="rotate(35 132 26)"/>
    </g>
    {/* Brand Text */}
    <text x="90" y="110" textAnchor="middle" fontFamily="Segoe Script, Brush Script MT, cursive" fontWeight="bold" fontSize="32" fill="#4b2170">Mofisbliss</text>
    <text x="90" y="135" textAnchor="middle" fontFamily="Segoe Script, Brush Script MT, cursive" fontWeight="bold" fontSize="32" fill="#4b2170">Bread</text>
    {/* Subtitle */}
    <text x="90" y="150" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#4b2170">A division under Blissful Foods and Beverages Ltd</text>
    {/* Ribbon */}
    <g>
      <rect x="40" y="170" width="100" height="28" rx="10" fill="#f7a13d" stroke="#fff" strokeWidth="3"/>
      <text x="90" y="190" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="16" fill="#fff">NEAT & SWEET</text>
    </g>
  </svg>
);

export default LogoMofisbliss; 