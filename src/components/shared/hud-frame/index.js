// @vendors
import React from 'react';

// Outlined panel with a clipped top-right corner: the outer layer's background shows through the padding as the border
export const HudFrame = ({ children, className = '' }) => (
  <div className={`hud-frame ${className}`.trim()}>
    <div className='hud-frame__panel'>
      {children}
    </div>
  </div>
);
