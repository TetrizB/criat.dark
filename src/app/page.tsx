import ShaderBackground from '@/components/ui/shader-background';

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <ShaderBackground />
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center p-4 text-center text-foreground">
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
        <div className="relative z-10">
          <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl font-headline" style={{ textShadow: '0 4px 15px rgba(0,0,0,0.4)' }}>
            Webgl Weaver
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-foreground/80 md:text-xl" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>
            An interactive, mesmerizing, animated shader background using WebGL for a visually engaging user interface.
          </p>
        </div>
      </main>
    </div>
  );
}
