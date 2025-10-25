import { Button } from '@/components/ui/button';
import { Code, Rocket } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="relative min-h-screen w-full">
      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
        <div className="z-10 flex flex-col items-center text-center">
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
            Webgl Weaver
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-300">
            A mesmerizing, animated shader background using WebGL for a visually engaging user interface.
            Built with Next.js, shadcn/ui, and Tailwind CSS.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button>
              <Rocket className="mr-2 h-5 w-5" />
              Get Started
            </Button>
            <Button variant="outline">
              <Code className="mr-2 h-5 w-5" />
              View on GitHub
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
