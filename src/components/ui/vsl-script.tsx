
'use client';

import Script from 'next/script';

const VslScript = () => {
  return (
    <Script
      id="vsl-script"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          var s=document.createElement("script");
          s.src="https://scripts.converteai.net/1d6c7e9a-980e-4cd9-add6-571246eddeec/players/690d6cc852aad814cc4b8e94/v4/player.js",
          s.async=!0,
          document.head.appendChild(s);
        `,
      }}
    />
  );
};

export default VslScript;
