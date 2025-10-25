import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import ShaderBackground from '@/components/ui/shader-background';


export const metadata: Metadata = {
  title: 'Webgl Weaver',
  description: 'An interactive, mesmerizing, animated shader background using WebGL for a visually engaging user interface.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <ShaderBackground />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
