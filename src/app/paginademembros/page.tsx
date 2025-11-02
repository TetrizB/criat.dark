
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { modules } from '@/lib/content';
import { cn } from '@/lib/utils';
import { PlayCircle, Search, Settings, Download } from 'lucide-react';
import Image from 'next/image';

export default function MembersPage() {
  const userName = "Aluno"; // Placeholder for user name
  const userAvatarUrl = "https://i.pravatar.cc/150?u=a042581f4e29026704d"; // Placeholder for user avatar

  const videoBanks = [
    {
      title: "Viagens de Luxo",
      description: "Vídeos de alto impacto para engajamento.",
      imageUrl: "https://i.postimg.cc/N0sdcLfk/VIAGENS.png",
      imageHint: "luxury travel",
      hideOverlay: true,
    },
    {
      title: "Relógios e Carros",
      description: "Conteúdo sobre relógios e carros de luxo.",
      imageUrl: "https://i.postimg.cc/yYhh8BGQ/VIAGENS-1.png",
      imageHint: "luxury watches cars",
      hideOverlay: true,
    },
    {
      title: "Podcast Brasil",
      description: "Cortes de podcasts brasileiros.",
      imageUrl: "https://i.postimg.cc/QdQjzYHB/VIAGENS-3.png",
      imageHint: "podcast brazil",
      hideOverlay: true,
    },
    {
      title: "Memes",
      description: "Memes virais para engajamento.",
      imageUrl: "https://i.postimg.cc/zBB5VJpX/VIAGENS-4.png",
      imageHint: "viral memes",
      hideOverlay: true,
    },
    {
      title: "Shape",
      description: "Conteúdo de academia e lifestyle.",
      imageUrl: "https://i.postimg.cc/zBB5VJpX/VIAGENS-4.png", // Using the same image as memes as per request
      imageHint: "fitness lifestyle",
      hideOverlay: true,
    },
    {
      title: "Receitas Virais",
      description: "Conteúdo delicioso e fácil de compartilhar.",
      imageUrl: "https://picsum.photos/seed/recipe/600/400",
      imageHint: "food recipe",
    },
    {
      title: "Curiosidades Rápidas",
      description: "Pílulas de conhecimento que prendem a atenção.",
      imageUrl: "https://picsum.photos/seed/curiosity/600/400",
      imageHint: "abstract knowledge",
    },
  ];

  return (
    <div className="relative min-h-screen w-full text-white bg-background">
      {/* Header */}
      <header className="z-20 sticky top-0 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="text-2xl font-bold tracking-tighter">Criat.Dark</div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            <Avatar>
              <AvatarImage src={userAvatarUrl} alt={userName} />
              <AvatarFallback>{userName.charAt(0)}</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <section className="mb-12">
          <Image
            src="https://i.postimg.cc/nh6q3g8G/lanches-fit-de-nutri-8.png"
            alt="Banner da Área de Membros"
            width={1200}
            height={400}
            className="rounded-lg object-cover w-full"
            data-ai-hint="membership area banner"
            priority
          />
        </section>

        <section className="mb-20">
            <h2 className="text-2xl font-bold tracking-tighter mb-8">CORTES VIRAIS</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {videoBanks.map((bank, index) => (
                    <div key={index} className="group relative rounded-xl overflow-hidden border border-border/30 shadow-lg">
                        <Image 
                            src={bank.imageUrl}
                            alt={bank.title}
                            width={600}
                            height={400}
                            className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                            data-ai-hint={bank.imageHint}
                        />
                        {(bank as any).hideOverlay ? null : (
                          <>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                <h3 className="text-xl font-bold text-white mb-1">{bank.title}</h3>
                                <p className="text-gray-300 text-sm mb-4">{bank.description}</p>
                                <Button className="w-full bg-accent hover:bg-accent/80 transition-transform duration-200 group-hover:scale-105">
                                    <Download className="mr-2 h-4 w-4" />
                                    Baixar Pacote
                                </Button>
                            </div>
                          </>
                        )}
                    </div>
                ))}
            </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold tracking-tighter mb-8">Módulos Principais</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {modules.map((module, index) => (
              <div
                key={index}
                className="group relative rounded-xl border border-border/30 bg-card/50 overflow-hidden shadow-lg hover:shadow-accent/20 transition-shadow duration-300"
              >
                <div className="relative p-6 flex flex-col h-full">
                  <div className="mb-4 p-3 bg-primary rounded-full w-fit">
                    <module.icon className={cn("h-7 w-7", module.color)} />
                  </div>
                  <h3 className={cn("text-xl font-bold mb-2 text-white", module.color)}>{module.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-grow">{module.description}</p>
                  
                  <div className="mt-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-semibold text-gray-400">Progresso</span>
                      <span className={cn("text-xs font-bold", module.color)}>{module.progress}%</span>
                    </div>
                    <Progress value={module.progress} className="h-2 [&>div]:bg-gradient-to-r from-accent to-blue-500" />
                  </div>
                  
                  <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button variant="ghost" size="icon" className="h-20 w-20">
                      <PlayCircle className="h-16 w-16 text-accent" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
