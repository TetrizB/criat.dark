
'use client';

import React from 'react';

// This is a workaround for using a custom element in React.
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'vturb-smartplayer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        id: string;
        style?: React.CSSProperties;
      };
    }
  }
}


const VslPlayer = () => {
  return (
    <div className='w-full max-w-4xl mx-auto'>
        <vturb-smartplayer 
          id="vid-6918ca07a1e8509e85b03bcf"
          style={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '400px' }}
        ></vturb-smartplayer>
    </div>
  );
};

export default VslPlayer;
