
'use client';

import React from 'react';

// This is a workaround for using a custom element in React.
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'vturb-smartplayer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        id: string;
      };
    }
  }
}


const VslPlayer = () => {
  return (
    <div className='w-full max-w-4xl mx-auto'>
        <vturb-smartplayer id="vid-690d6cc852aad814cc4b8e94"></vturb-smartplayer>
    </div>
  );
};

export default VslPlayer;
