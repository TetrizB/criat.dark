
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const getPlaceholderImage = (id: string) => {
    return PlaceHolderImages.find((img) => img.id === id);
};

export default function LovartAIPage() {
  const lovartImage = getPlaceholderImage('lovart-ai');
  return (
    <div className="relative min-h-screen w-full text-white bg-background">
      <header className="z-20 sticky top-0 bg-background/80 backdrop-blur-md border-b border-border/50">
        <nav className="container mx-auto flex items-center justify-between p-4">
            <Link href="/paginademembros" className="text-2xl font-bold tracking-tighter">Criat.Dark</Link>
            <Button variant="ghost" asChild>
                <Link href="/paginademembros">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para a Área de Membros
                </Link>
            </Button>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="text-center w-full max-w-4xl mx-auto">
            <div className="inline-block rounded-full bg-accent/10 px-4 py-2 border border-accent/30 mb-6">
                <p className="flex items-center text-accent font-semibold">
                    <Sparkles className="mr-2 h-5 w-5"/> FERRAMENTA DE IMAGEM
                </p>
            </div>
            <h1 className="text-5xl font-extrabold tracking-tighter text-white sm:text-6xl">
                I.A. para Criativos em Imagem
            </h1>
            <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
                Utilize a Lovart AI para gerar imagens fantásticas e elevar o nível visual dos seus projetos.
            </p>
        </section>

        <section className="mt-20 max-w-xl mx-auto">
            <div className="relative p-px rounded-xl bg-gradient-to-r from-accent/70 to-blue-500/70 shadow-2xl shadow-accent/20">
                <div className="relative bg-card/90 backdrop-blur-sm rounded-[11px] p-8 sm:p-12 text-center">
                    {lovartImage && (
                        <div className="mb-8 rounded-lg overflow-hidden">
                             <Image 
                                src={lovartImage.imageUrl} 
                                alt="Lovart AI" 
                                width={1200} 
                                height={675}
                                className="object-cover"
                                data-ai-hint={lovartImage.imageHint} 
                            />
                        </div>
                    )}
                    <h2 className="text-3xl font-bold text-white">Lovart AI</h2>
                    <p className="text-gray-300 mt-4 mb-8">Clique no botão abaixo para acessar a ferramenta e começar a criar imagens impressionantes para seus conteúdos.</p>
                    <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/80 text-lg font-bold h-14 px-10 shadow-lg shadow-accent/30 transition-transform duration-300 hover:scale-105">
                        <Link href="https://lovart.ai/" target="_blank" rel="noopener noreferrer">
                            Acessar Lovart AI
                            <ExternalLink className="ml-3 h-5 w-5" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
      </main>
      
      <footer className="z-10 w-full border-t border-border/30 bg-background/80 backdrop-blur-md mt-32">
        <div className="container mx-auto p-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Criat.Dark. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

    