
'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { modules } from '@/lib/content';
import { cn } from '@/lib/utils';
import { PlayCircle, Search, Settings, Download, Gift, ArrowRight, ExternalLink, AlertTriangle, Key, ShoppingCart, Bot, Image as ImageIcon, FileText } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const getPlaceholderImage = (id: string) => {
  return PlaceHolderImages.find((img) => img.id === id);
};

const soraAiImage = getPlaceholderImage('sora-ai');
const lovartAiImage = getPlaceholderImage('lovart-ai');
const agentsAiImage = getPlaceholderImage('agents-ai');

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
      imageUrl: "https://i.postimg.cc/hP6mQZ2J/10.png",
      imageHint: "man speaking podcast",
      hideOverlay: true,
      action: () => setIsPabloMarcalDialogOpen(true),
    },
    {
      title: "Cortes Ruyter",
      description: "Cortes de Ruyter.",
      imageUrl: "https://i.postimg.cc/4NS6bxxp/8.png",
      imageHint: "man podcast",
      hideOverlay: true,
      linkUrl: "https://drive.google.com/drive/folders/1-BzVt5a78RyP3q_MaJxGYmLpYxkvA6Rs",
    },
    {
      title: "Cortes Gringos e Diversos",
      description: "Cortes de podcasts internacionais.",
      imageUrl: "https://i.postimg.cc/sDqWGHT1/9.png",
      imageHint: "podcast international",
      hideOverlay: true,
      linkUrl: "https://drive.google.com/drive/folders/11nHOpjzNHFGOUGdpQ8q-Tk1nNydnEBFy",
    },
     {
      title: "Vídeos Satisfatórios",
      description: "Vídeos relaxantes para aumentar o engajamento.",
      imageUrl: "https://i.postimg.cc/fyRxY0Hz/11.png",
      imageHint: "satisfying videos",
      hideOverlay: true,
      linkUrl: "https://drive.google.com/drive/u/0/folders/1vY5G2AlTgqRb9jZvSjbjx4eFR3LcvpFT",
    },
    {
      title: "Cortes Flow Podcast",
      description: "Cortes do Flow Podcast.",
      imageUrl: "https://i.postimg.cc/wTTPs8x8/12.png",
      imageHint: "podcast studio",
      hideOverlay: true,
      linkUrl: "https://drive.google.com/drive/folders/1A7Xdtt12mkXKDJWGX-yPYXPJQb92OpHL",
    },
    {
      title: "Cortes Podpah",
      description: "Cortes do Podpah.",
      imageUrl: "https://i.postimg.cc/tCCfVQRb/13.png",
      imageHint: "podcast interview",
      hideOverlay: true,
      linkUrl: "https://drive.google.com/drive/folders/1Hjf3WKHkh68cfgR6fKU-I6frgiDY6_f0",
    }
  ];

  return (
    <>
      <div className="relative min-h-screen w-full text-white bg-background">
        {/* Header */}
        <header className="z-20 sticky top-0 bg-background/80 backdrop-blur-md border-b border-border/50">
          <div className="container mx-auto flex items-center justify-between p-4">
            <Link href="/" className="text-2xl font-bold tracking-tighter">Criat.Dark</Link>
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
          <section className="mb-12 relative w-full h-64 sm:h-80 rounded-lg overflow-hidden">
            <Image
              src="https://i.postimg.cc/nh6q3g8G/lanches-fit-de-nutri-8.png"
              alt="Banner da Área de Membros"
              layout="fill"
              className="object-cover"
              data-ai-hint="membership area banner"
              priority
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center p-4">
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tighter text-white">Bem-vindo(a), {userName}!</h1>
              <p className="mt-4 text-lg text-gray-200 max-w-2xl">Este é o seu QG. Explore os módulos, baixe os recursos e comece a construir seu império anônimo.</p>
            </div>
          </section>

          {/* Bonus Section */}
           <section id="bonus" className="mb-20">
              <div className="flex items-center gap-4 mb-8">
                  <Gift className="h-8 w-8 text-accent flex-shrink-0" />
                  <div>
                      <h2 className="text-2xl font-bold tracking-tighter text-white">
                          Bônus Exclusivos Desbloqueados
                      </h2>
                      <p className="text-gray-400">Acesso a ferramentas e conteúdos para acelerar seus resultados.</p>
                  </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {/* Capcut Pro Card */}
                  <Link href="/bonus" className="block group">
                      <div className="relative rounded-xl overflow-hidden border border-amber-500/50 shadow-lg bg-card/80 flex flex-col items-center justify-center text-center p-6 hover:border-amber-500 transition-all duration-300">
                          <div className="mb-4 p-4 bg-primary rounded-full border border-dashed border-amber-500/50">
                            <ShoppingCart className="h-10 w-10 text-amber-400" />
                          </div>
                          <h3 className="text-xl font-bold text-amber-400">CapCut Pro Vitalício</h3>
                          <p className="text-gray-400 mt-2 mb-4">Oferta especial para ter acesso vitalício à melhor ferramenta de edição de vídeos.</p>
                          <Button variant="outline" className="mt-auto border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-black">
                              Acessar Oferta <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                      </div>
                  </Link>
                  {/* Other Bonuses Card */}
                  <Link href="/bonus" className="block group">
                      <div className="relative rounded-xl overflow-hidden border border-border/30 shadow-lg bg-card/80 flex flex-col items-center justify-center text-center p-6 hover:border-accent/50 transition-all duration-300">
                          <div className="mb-4 p-4 bg-primary rounded-full border border-dashed border-accent/50">
                            <Gift className="h-10 w-10 text-accent" />
                          </div>
                          <h3 className="text-xl font-bold text-white">Mais Ferramentas</h3>
                          <p className="text-gray-400 mt-2 mb-4">Acesse o pack de design, biblioteca de recursos e muito mais para acelerar seus projetos.</p>
                          <Button variant="outline" className="mt-auto">
                              Ver Ofertas <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                      </div>
                  </Link>
              </div>
          </section>

          {/* AI Section */}
          <section id="ai-tools" className="mb-20">
              <div className="flex items-center gap-4 mb-8">
                  <Bot className="h-8 w-8 text-accent flex-shrink-0" />
                  <div>
                      <h2 className="text-2xl font-bold tracking-tighter text-white">
                          Inteligência Artificial
                      </h2>
                      <p className="text-gray-400">Ferramentas e guias para potencializar sua criação de conteúdo com IA.</p>
                  </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  <Link href="/ia/sora" className="block group">
                      <div className="relative rounded-xl overflow-hidden border border-border/30 shadow-lg bg-card/80 flex flex-col hover:border-accent/50 transition-all duration-300">
                          {soraAiImage && <Image src={soraAiImage.imageUrl} alt="Sora AI" width={500} height={281} className="object-cover" data-ai-hint={soraAiImage.imageHint} />}
                          <div className="p-6">
                            <h3 className="text-xl font-bold text-white">Sora 2 AI Grátis e Ilimitado</h3>
                            <p className="text-gray-400 mt-2 mb-4">Aprenda a gerar vídeos incríveis com IA de forma gratuita.</p>
                            <Button variant="outline" className="mt-auto">
                                Acessar Guia <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </div>
                      </div>
                  </Link>
                  <Link href="/ia/lovart" className="block group">
                      <div className="relative rounded-xl overflow-hidden border border-border/30 shadow-lg bg-card/80 flex flex-col hover:border-accent/50 transition-all duration-300">
                          {lovartAiImage && <Image src={lovartAiImage.imageUrl} alt="Lovart AI" width={500} height={281} className="object-cover" data-ai-hint={lovartAiImage.imageHint} />}
                          <div className="p-6">
                            <h3 className="text-xl font-bold text-white">I.A. para Criativos em Imagem</h3>
                            <p className="text-gray-400 mt-2 mb-4">Crie imagens espetaculares para seus projetos com esta ferramenta.</p>
                            <Button variant="outline" className="mt-auto">
                                Acessar Ferramenta <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </div>
                      </div>
                  </Link>
                  <Link href="/ia/agentes" className="block group">
                     <div className="relative rounded-xl overflow-hidden border border-border/30 shadow-lg bg-card/80 flex flex-col hover:border-accent/50 transition-all duration-300">
                          {agentsAiImage && <Image src={agentsAiImage.imageUrl} alt="Agentes de IA" width={500} height={281} className="object-cover" data-ai-hint={agentsAiImage.imageHint} />}
                          <div className="p-6">
                            <h3 className="text-xl font-bold text-white">Agentes de IA para Vendas</h3>
                            <p className="text-gray-400 mt-2 mb-4">Agentes GPTs especializados em criar e otimizar páginas de vendas.</p>
                             <Button variant="outline" className="mt-auto">
                                Acessar Agentes <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </div>
                      </div>
                  </Link>
              </div>
          </section>
          
          <section className="mb-20">
              <h2 className="text-2xl font-bold tracking-tighter mb-2">CORTES VIRAIS</h2>
              <p className="text-gray-400 mb-8">Clique em qualquer card para ser redirecionado para a pasta com os vídeos.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-start">
                  {videoBanks.map((bank, index) => {
                      const cardContent = (
                          <div className="group relative rounded-xl overflow-hidden border border-border/30 shadow-lg w-full">
                              <Image 
                                  src={bank.imageUrl}
                                  alt={bank.title}
                                  width={500}
                                  height={888}
                                  className="object-cover w-full h-auto transform group-hover:scale-110 transition-transform duration-500"
                                  data-ai-hint={bank.imageHint}
                              />
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
                              <Link key={index} href={bank.linkUrl} target="_blank" rel="noopener noreferrer" className="block">
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
                  className="cursor-pointer group relative rounded-xl border border-border/30 bg-card/50 overflow-hidden shadow-lg hover:shadow-accent/20 transition-shadow duration-300 h-full"
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

    