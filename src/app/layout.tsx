
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
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("dark", inter.variable)}>
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
        <script id="converteai-preload-1" dangerouslySetInnerHTML={{ __html: `!function(i,n){i._plt=i._plt||(n&&n.timeOrigin?n.timeOrigin+n.now():Date.now())}(window,performance);` }} />
        <link rel="preload" href="https://scripts.converteai.net/1d6c7e9a-980e-4cd9-add6-571246eddeec/players/690d6cc852aad814cc4b8e94/v4/player.js" as="script" />
        <link rel="preload" href="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/smartplayer.js" as="script" />
        <link rel="preload" href="https://cdn.converteai.net/1d6c7e9a-980e-4cd9-add6-571246eddeec/690d6cc550f24252ef419513/main.m3u8" as="fetch" />
        <link rel="dns-prefetch" href="https://cdn.converteai.net" />
        <link rel="dns-prefetch" href="https://scripts.converteai.net" />
        <link rel="dns-prefetch" href="https://images.converteai.net" />
        <link rel="dns-prefetch" href="https://api.vturb.com.br" />
        
        <ShaderBackground />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
