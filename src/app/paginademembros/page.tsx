
'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { modules } from '@/lib/content';
import { cn } from '@/lib/utils';
import { PlayCircle, Search, Settings, Download, Gift, ArrowRight, ExternalLink, X, AlertTriangle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';

const driveLinks = [
  "https://drive.google.com/drive/folders/1HhhL8Q77y5ryfI4gztkDUy0GQiZuJBUP",
  "https://drive.google.com/drive/folders/1H7LK1FbyfKuM7nDm3DKssogXot9Sf-gA",
  "https://drive.google.com/drive/folders/1EAlBRwQstPIwzKUtj0P2iUjJ8fp4jBDt",
  "https://drive.google.com/drive/folders/1QAsKc3icy_NNrSACwwHwX4nDg7rrxmrF",
  "https://drive.google.com/drive/folders/12j4SWIQKbsFtbOjL75YHxbNDyKmdscza"
];

const movieLinks = [
    "https://drive.google.com/drive/folders/1Lf-UtTuspT09K9_9SyBilsrJI11xp72X",
    "https://drive.google.com/drive/folders/1p8ITT6kZtKzjh3TtNNZwU6kxgwCYU4yB",
];

const pabloMarcalLinks = [
    "https://drive.google.com/drive/folders/1RqNvEhelljZYgSe3VLAvbgv2rCDekD8s",
    "https://drive.google.com/drive/folders/11PaJNc67qqvK-HkIEx2tmORkcGw3SA9Q",
    "https://drive.google.com/drive/folders/1TP0Ae-xZNnt3jvQ91pMJ4JU_s9iwb6GQ",
    "https://drive.google.com/drive/folders/1iSHwp0fPW7yF8np_M-lETcuPHblxH2zq"
];


export default function MembersPage() {
  const userName = "Aluno"; // Placeholder for user name
  const userAvatarUrl = "https://i.pravatar.cc/150?u=a042581f4e29026704d"; // Placeholder for user avatar
  const [isLinkDialogOpen, setIsLinkDialogOpen] = useState(false);
  const [isMovieLinkDialogOpen, setIsMovieLinkDialogOpen] = useState(false);
  const [isPabloMarcalDialogOpen, setIsPabloMarcalDialogOpen] = useState(false);
  const [isMaintenanceDialogOpen, setIsMaintenanceDialogOpen] = useState(false);

  const videoBanks = [
    {
      title: "Viagens de Luxo",
      description: "Vídeos de alto impacto para engajamento.",
      imageUrl: "https://i.postimg.cc/N0sdcLfk/VIAGENS.png",
      imageHint: "luxury travel",
      hideOverlay: true,
      linkUrl: "https://drive.google.com/drive/folders/1BVPPZau6wXm5_USsOaItGhZx4_wwmbxF",
    },
    {
      title: "Relógios e Carros",
      description: "Conteúdo sobre relógios e carros de luxo.",
      imageUrl: "https://i.postimg.cc/yYhh8BGQ/VIAGENS-1.png",
      imageHint: "luxury watches cars",
      hideOverlay: true,
      action: () => setIsLinkDialogOpen(true), // This will open the dialog
    },
    {
      title: "Podcast Brasil",
      description: "Cortes de podcasts brasileiros.",
      imageUrl: "https://i.postimg.cc/QdQjzYHB/VIAGENS-3.png",
      imageHint: "podcast brazil",
      hideOverlay: true,
      linkUrl: "https://drive.google.com/drive/folders/1lzgSenFbnC4WzoHoJq7ZuI9jcPwedgG-",
    },
    {
      title: "Memes",
      description: "Memes virais para engajamento.",
      imageUrl: "https://i.postimg.cc/zBB5VJpX/VIAGENS-4.png",
      imageHint: "viral memes",
      hideOverlay: true,
      linkUrl: "https://drive.google.com/drive/folders/17-lkb-3wZhcmjRYMyxyvVUuPmy-JZM24",
    },
    {
      title: "Shape",
      description: "Conteúdo de academia e lifestyle.",
      imageUrl: "https://i.postimg.cc/Gmwcqn3V/VIAGENS-2.png",
      imageHint: "fitness lifestyle",
      hideOverlay: true,
      linkUrl: "https://drive.google.com/drive/folders/1H7LK1FbyfKuM7nDm3DKssogXot9Sf-gA",
    },
    {
      title: "Homens de Poder",
      description: "Conteúdo sobre sucesso e mentalidade.",
      imageUrl: "https://i.postimg.cc/j5rgFvnK/VIAGENS-5.png",
      imageHint: "powerful men success",
      hideOverlay: true,
      linkUrl: "https://drive.google.com/drive/folders/1YdNOjmAwmjT2ZXO8UjLpRQexKGFu5Zbe",
    },
     {
      title: "Cortes Filmes e Séries",
      description: "Cortes de filmes e séries populares.",
      imageUrl: "https://i.postimg.cc/7P7J32zg/VIAGENS-7.png",
      imageHint: "movie series clips",
      hideOverlay: true,
      action: () => setIsMovieLinkDialogOpen(true),
    },
    {
      title: "Cortes Pablo Marçal",
      description: "Cortes de Pablo Marçal.",
      imageUrl: "https://i.postimg.cc/KzYJzT5J/placeholder-pablo.png",
      imageHint: "man speaking podcast",
      hideOverlay: true,
      action: () => setIsPabloMarcalDialogOpen(true),
    },
    {
      title: "Cortes Ruyter",
      description: "Cortes de Ruyter.",
      imageUrl: "https://i.postimg.cc/W3hBwB3z/placeholder-ruyter.png",
      imageHint: "man podcast",
      hideOverlay: true,
      linkUrl: "https://drive.google.com/drive/folders/1-BzVt5a78RyP3q_MaJxGYmLpYxkvA6Rs",
    },
    {
      title: "Cortes Gringos e Diversos",
      description: "Cortes de podcasts internacionais.",
      imageUrl: "https://i.postimg.cc/bNqDXJcQ/placeholder-gringo.png",
      imageHint: "podcast international",
      hideOverlay: true,
      linkUrl: "https://drive.google.com/drive/folders/11nHOpjzNHFGOUGdpQ8q-Tk1nNydnEBFy",
    },
  ];

  return (
    <>
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

          {/* Bonus Banner Section */}
          <section className="mb-20">
              <Link href="/bonus" className="block group">
                  <div className="relative rounded-xl p-px bg-gradient-to-r from-accent/70 to-blue-500/70 hover:shadow-2xl hover:shadow-accent/20 transition-all duration-300 transform hover:-translate-y-1">
                      <div className="relative rounded-[11px] p-8 bg-card/80 backdrop-blur-sm flex items-center justify-between">
                          <div className="flex items-center gap-6">
                              <Gift className="h-12 w-12 text-accent flex-shrink-0" />
                              <div>
                                  <h2 className="text-2xl font-bold tracking-tighter text-white">
                                      Bônus Exclusivos Desbloqueados!
                                  </h2>
                                  <p className="text-gray-400 mt-1">Clique aqui para ver os presentes que preparamos para você.</p>
                              </div>
                          </div>
                          <Button variant="ghost" size="icon" className="text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-transform duration-300">
                              <ArrowRight className="h-6 w-6" />
                          </Button>
                      </div>
                  </div>
              </Link>
          </section>
          
          <section className="mb-20">
              <h2 className="text-2xl font-bold tracking-tighter mb-2">CORTES VIRAIS</h2>
              <p className="text-gray-400 mb-8">Clique em qualquer card para ser redirecionado para a pasta com os vídeos.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {videoBanks.map((bank, index) => {
                      const cardContent = (
                          <div className="group relative rounded-xl overflow-hidden border border-border/30 shadow-lg h-full">
                              <Image 
                                  src={bank.imageUrl}
                                  alt={bank.title}
                                  width={600}
                                  height={400}
                                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                                  data-ai-hint={bank.imageHint}
                              />
                              {bank.hideOverlay ? null : (
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
                      );

                      if (bank.action) {
                        return (
                          <div key={index} onClick={bank.action} className="cursor-pointer">
                            {cardContent}
                          </div>
                        )
                      }
                      
                      if (bank.linkUrl) {
                          return (
                              <Link key={index} href={bank.linkUrl} target="_blank" rel="noopener noreferrer" className="block h-full">
                                  {cardContent}
                              </Link>
                          );
                      }

                      return <div key={index}>{cardContent}</div>;
                  })}
              </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tighter mb-8">Módulos Principais</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {modules.map((module, index) => (
                <div
                  key={index}
                  onClick={() => setIsMaintenanceDialogOpen(true)}
                  className="cursor-pointer group relative rounded-xl border border-border/30 bg-card/50 overflow-hidden shadow-lg hover:shadow-accent/20 transition-shadow duration-300"
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

      {/* Dialog for Maintenance */}
      <Dialog open={isMaintenanceDialogOpen} onOpenChange={setIsMaintenanceDialogOpen}>
        <DialogContent className="sm:max-w-md bg-card border-accent/50 text-white">
          <DialogHeader className="items-center text-center">
            <div className="p-3 bg-yellow-500/20 rounded-full w-fit mb-4">
              <AlertTriangle className="h-8 w-8 text-yellow-400" />
            </div>
            <DialogTitle className="text-2xl">Módulo em Breve!</DialogTitle>
            <DialogDescription className="text-gray-400 pt-2">
              Estamos trabalhando para finalizar este conteúdo. Fique tranquilo, você será notificado assim que ele estiver disponível!
            </DialogDescription>
          </DialogHeader>
          <DialogClose asChild>
            <Button type="button" variant="secondary" className="w-full mt-4">
              Entendido
            </Button>
          </DialogClose>
        </DialogContent>
      </Dialog>

      <Dialog open={isLinkDialogOpen} onOpenChange={setIsLinkDialogOpen}>
        <DialogContent className="sm:max-w-md bg-card border-accent/50 text-white">
            <DialogHeader>
                <DialogTitle>Pacotes de Vídeos (Relógios e Carros)</DialogTitle>
                <DialogDescription>
                    Acesse as pastas abaixo para baixar os vídeos.
                </DialogDescription>
            </DialogHeader>
            <div className="space-y-2 py-4">
                {driveLinks.map((link, index) => (
                    <Button key={index} asChild className="w-full justify-start bg-primary hover:bg-primary/80">
                        <Link href={link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-3 h-4 w-4" />
                            Pacote de Vídeos {index + 1}
                        </Link>
                    </Button>
                ))}
            </div>
            <DialogClose asChild>
                <Button type="button" variant="secondary" className="w-full">
                    Fechar
                </Button>
            </DialogClose>
        </DialogContent>
      </Dialog>

      <Dialog open={isMovieLinkDialogOpen} onOpenChange={setIsMovieLinkDialogOpen}>
        <DialogContent className="sm:max-w-md bg-card border-accent/50 text-white">
            <DialogHeader>
                <DialogTitle>Pacotes de Filmes e Séries</DialogTitle>
                <DialogDescription>
                    Acesse as pastas abaixo para baixar os vídeos.
                </DialogDescription>
            </DialogHeader>
            <div className="space-y-2 py-4">
                {movieLinks.map((link, index) => (
                    <Button key={index} asChild className="w-full justify-start bg-primary hover:bg-primary/80">
                        <Link href={link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-3 h-4 w-4" />
                            Pacote de Vídeos {index + 1}
                        </Link>
                    </Button>
                ))}
            </div>
            <DialogClose asChild>
                <Button type="button" variant="secondary" className="w-full">
                    Fechar
                </Button>
            </DialogClose>
        </DialogContent>
      </Dialog>

      <Dialog open={isPabloMarcalDialogOpen} onOpenChange={setIsPabloMarcalDialogOpen}>
        <DialogContent className="sm:max-w-md bg-card border-accent/50 text-white">
            <DialogHeader>
                <DialogTitle>Pacotes de Cortes (Pablo Marçal)</DialogTitle>
                <DialogDescription>
                    Acesse as pastas abaixo para baixar os vídeos.
                </DialogDescription>
            </DialogHeader>
            <div className="space-y-2 py-4">
                {pabloMarcalLinks.map((link, index) => (
                    <Button key={index} asChild className="w-full justify-start bg-primary hover:bg-primary/80">
                        <Link href={link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-3 h-4 w-4" />
                            Pacote de Vídeos {index + 1}
                        </Link>
                    </Button>
                ))}
            </div>
            <DialogClose asChild>
                <Button type="button" variant="secondary" className="w-full">
                    Fechar
                </Button>
            </DialogClose>
        </DialogContent>
      </Dialog>
    </>
  );
}
