
'use client';

import React, { useEffect } from 'react';

const VslScript: React.FC = () => {
  useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://scripts.converteai.net/1d6c7e9a-980e-4cd9-add6-571246eddeec/players/6918ca07a1e8509e85b03bcf/v4/player.js";
    s.async = true;
    document.head.appendChild(s);

    return () => {
      // Find the script and remove it
      const script = document.querySelector('script[src="https://scripts.converteai.net/1d6c7e9a-980e-4cd9-add6-571246eddeec/players/6918ca07a1e8509e85b03bcf/v4/player.js"]');
      if (script) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return null;
};

export default VslScript;
