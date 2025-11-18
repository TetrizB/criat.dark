
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import ShaderBackground from '@/components/ui/shader-background';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Criat.Dark - Seu negócio anônimo no Instagram',
  description: 'Descubra o método para construir uma audiência e monetizar no Instagram sem precisar aparecer.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("dark", inter.variable)}>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preload" href="https://player-vz-5f1b2962-e2c.tv.pandavideo.com.br/embed/css/styles.css" as="style" />
        <link rel="prerender" href="https://player-vz-5f1b2962-e2c.tv.pandavideo.com.br/embed/?v=acafbd77-0f62-449f-b1cc-cc9497498103" />
        <link rel="preload" href="https://player-vz-5f1b2962-e2c.tv.pandavideo.com.br/embed/js/hls.js" as="script" />
        <link rel="preload" href="https://player-vz-5f1b2962-e2c.tv.pandavideo.com.br/embed/js/plyr.polyfilled.min.js" as="script" />
        <link rel="preload" href="https://config.tv.pandavideo.com.br/vz-5f1b2962-e2c/acafbd77-0f62-449f-b1cc-cc9497498103.json" as="fetch" />
        <link rel="preload" href="https://config.tv.pandavideo.com.br/vz-5f1b2962-e2c/config.json" as="fetch" />
        <link rel="preload" href="https://b-vz-5f1b2962-e2c.tv.pandavideo.com.br/acafbd77-0f62-449f-b1cc-cc9497498103/playlist.m3u8" as="fetch" />
        <link rel="dns-prefetch" href="https://b-vz-5f1b2962-e2c.tv.pandavideo.com.br" />
        <link rel="dns-prefetch" href="https://player-vz-5f1b2962-e2c.tv.pandavideo.com.br" />
        <link rel="dns-prefetch" href="https://vz-5f1b2962-e2c.b-cdn.net" />
      </Head>
      <body className="font-body antialiased">
        {/* Meta Pixel Code */}
        <script id="fb-pixel-script" dangerouslySetInnerHTML={{ __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1922279808691532');
          fbq('track', 'PageView');
        `}} />
        <noscript>
          <img height="1" width="1" style={{display: 'none'}}
               src="https://www.facebook.com/tr?id=1922279808691532&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Meta Pixel Code */}
        <script
          id="utmify-utms"
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck
          data-utmify-prevent-subids
          async
          defer
        ></script>
        <script id="utmify-pixel" dangerouslySetInnerHTML={{ __html: `
          window.pixelId = "6880317ef7b478570ccb782d";
          var a = document.createElement("script");
          a.setAttribute("async", "");
          a.setAttribute("defer", "");
          a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
          document.head.appendChild(a);
        `}} />
        
        <ShaderBackground />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
