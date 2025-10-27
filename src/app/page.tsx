
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, Flame, Lock, ShoppingCart, Zap, CircleCheckBig, Video, BrainCircuit, MessageSquare, Scissors, HelpCircle, Rocket, Menu, Star } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import { cn } from '@/lib/utils';
import { Bell } from 'lucide-react';
import { modules } from '@/lib/content';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import React from 'react';
import { ResultsCarousel } from '@/components/ui/results-carousel';
import { VideoCarousel } from '@/components/ui/video-carousel';

const getPlaceholderImage = (id: string) => {
  return PlaceHolderImages.find((img) => img.id === id);
};

const testimonial1Avatar = getPlaceholderImage('testimonial-1-avatar');
const testimonial2Avatar = getPlaceholderImage('testimonial-2-avatar');
const testimonial3Avatar = getPlaceholderImage('testimonial-3-avatar');


export default function HomePage() {
  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'O Método', href: '#metodo' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'FAQ', href: '#faq' },
  ];

  const featuresSuperPack = [
    '4 Módulos do Método',
    'Comandos para IA',
    'Comunidade Exclusiva',
    '4 Aulas Bônus',
    'Suporte Personalizado',
  ];

  const featuresCompleto = [
    'TUDO do Super Pack Viral',
    '+30.000 Vídeos Virais Editáveis',
    'Pack com +60.000 Vídeos Virais',
    '17 Nichos Altamente Lucrativos',
    'Acesso a Todas as Atualizações',
    'Curso Rápido "Meu Primeiro Viral"',
  ];

  const bonuses = [
    {
      icon: Video,
      title: "Banco de Vídeos Virais",
      description: "Acesso a +60.000 vídeos prontos para editar, garantindo que você nunca fique sem conteúdo.",
    },
    {
      icon: BrainCircuit,
      title: "Arsenal de Comandos para IA",
      description: "Use a inteligência artificial para fazer o trabalho pesado de roteirização e pesquisa de ideias.",
    },
    {
      icon: MessageSquare,
      title: "Comunidade Privada",
      description: "Networking e suporte contínuo em nosso grupo exclusivo no WhatsApp. Você não estará sozinho.",
    },
    {
      icon: Scissors,
      title: "Aulas de Edição no CapCut",
      description: "4 aulas bônus para você dominar a edição de vídeos de forma profissional, mesmo começando do zero.",
    },
    {
      icon: HelpCircle,
      title: "Suporte Direto no WhatsApp",
      description: "Canal de comunicação direto com nossa equipe para tirar todas as suas dúvidas rapidamente.",
    },
    {
      icon: Rocket,
      title: "Curso 'Meu Primeiro Viral'",
      description: "Um curso relâmpago focado em resultados imediatos para você ter sua primeira vitória e se manter motivado.",
    }
  ];

  const faqs = [
    {
      question: 'Preciso aparecer para ter resultados?',
      answer: 'Não! O Método Digital Dark foi desenhado exatamente para quem não quer mostrar o rosto. Todo o conteúdo e as estratégias de monetização são baseadas no anonimato.',
    },
    {
      question: 'Como receberei o acesso ao material?',
      answer: 'Imediatamente após a confirmação do pagamento, você receberá um e-mail com o link de acesso a toda a plataforma: os módulos, os packs de vídeos, a comunidade e o suporte.',
    },
    {
      question: 'E se eu não gostar ou não tiver resultados?',
      answer: 'Seu risco é zero. Você tem uma Garantia Incondicional de 7 dias. Se por qualquer motivo você não ficar satisfeito, devolvemos 100% do seu dinheiro, sem perguntas.',
    },
    {
      question: 'É um pagamento único ou mensalidade?',
      answer: 'É um pagamento único. Você paga uma vez e tem acesso vitalício a todo o material e a todas as futuras atualizações, sem taxas extras ou mensalidades.',
    },
    {
      question: 'O conteúdo é editável no Canva?',
      answer: 'Sim! Todos os vídeos dos packs são 100% editáveis na versão gratuita do Canva. Você pode customizar tudo para se alinhar à identidade visual do seu projeto.'
    }
  ];

  const GradientCard = ({ children, className, color = 'accent' }: { children: React.ReactNode, className?: string, color?: 'accent' | 'blue' }) => (
    <div className={cn("relative p-px rounded-lg", className)}>
      <div className={cn(
        "absolute inset-0 rounded-lg opacity-20",
        {
          'bg-gradient-to-r from-accent to-blue-500': color === 'accent',
          'bg-gradient-to-r from-blue-500 to-sky-400': color === 'blue'
        }
      )} />
      <div className="relative bg-card/80 backdrop-blur-sm rounded-[7px] h-full w-full">
        {children}
      </div>
    </div>
  );
  
  return (
    <div className="relative min-h-screen w-full text-white overflow-x-hidden">
      {/* Header */}
      <header className="z-20 fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="bg-red-600 text-center py-2 text-sm font-bold flex items-center justify-center shadow-lg">
            <Flame className="mr-2 h-4 w-4 animate-pulse" /> OFERTA POR TEMPO LIMITADO
        </div>
        <nav className="container mx-auto flex items-center justify-between p-4">
            <div className="text-2xl font-bold tracking-tighter">Criat.Dark</div>
            <div className="hidden md:flex items-center space-x-8">
                {navLinks.map(link => (
                    <Link key={link.name} href={link.href} className="text-sm font-medium text-gray-300 hover:text-accent transition-colors duration-300">
                        {link.name}
                    </Link>
                ))}
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5"/>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-background/95 backdrop-blur-lg">
                  <div className="flex flex-col h-full p-4">
                    <div className="text-2xl font-bold tracking-tighter mb-12">Criat.Dark</div>
                    <div className="flex flex-col items-start space-y-6">
                      {navLinks.map(link => (
                          <Link key={link.name} href={link.href} className="text-lg font-medium text-gray-200 hover:text-accent transition-colors duration-300">
                              {link.name}
                          </Link>
                      ))}
                    </div>
                  </div>
              </SheetContent>
            </Sheet>
        </nav>
      </header>
      
      <main className="container mx-auto flex flex-col items-center px-4 pt-48 sm:pt-56">
        {/* 1. ATENÇÃO (A) - Captura Imediata */}
        <section id="inicio" className="z-10 text-center w-full max-w-5xl">
            <h1 className="text-5xl font-extrabold tracking-tighter text-white sm:text-7xl">
                Ganhe de <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">R$5mil a R$100mil</span> no Instagram Sem Mostrar o Rosto
            </h1>
            <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto">
                (E a descoberta perturbadora que mudou tudo sobre monetização no digital)
            </p>
            <div className="mt-10 relative inline-block">
                <Image 
                    src="https://i.postimg.cc/g0qR2j3B/Copia-de-Copia-de-Copia-de-Post-Qroz-4-8-25-1759537252059-Bz-S2s-Ni-W.png"
                    alt="Resultado de vendas"
                    width={600}
                    height={600}
                    className="rounded-xl shadow-2xl"
                    data-ai-hint="sales result"
                />
                <div className="animate-float-and-fade absolute -right-16 top-1/4 flex items-center gap-3 rounded-xl border border-border bg-card/80 p-3 shadow-lg backdrop-blur-sm">
                    <div className="rounded-full bg-green-500/20 p-2">
                        <Bell className="h-5 w-5 text-green-400" />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-white">+R$97,00 em vendas</p>
                        <p className="text-xs text-gray-400">agora mesmo</p>
                    </div>
                </div>
            </div>
        </section>

        {/* 2. INTERESSE (I) - Construção da Narrativa e Autoridade */}
        <section className="z-10 mt-32 w-full max-w-4xl text-center">
            <h2 className="text-4xl font-bold tracking-tighter mb-4">Você Sabia?</h2>
            <p className="text-lg text-gray-400 mb-10 leading-relaxed">A maioria das pessoas falha em monetizar no Instagram porque acredita que precisa de milhões de seguidores ou de uma vida de luxo para exibir. A verdade é que o <span className="text-accent font-bold">engajamento qualificado</span> vale mais do que a popularidade.</p>
            
            <GradientCard>
              <div className="p-8">
                <h3 className="text-2xl font-bold tracking-tight">A Descoberta que Ninguém te Conta</h3>
                <p className="text-gray-300 mt-4 leading-relaxed">Durante 1 ano, analisei milhares de perfis e descobri um padrão chocante: <span className="font-bold text-white">73% dos perfis de sucesso não mostram o rosto</span>. Eles usam o que chamo de "conteúdo Dark" e, por isso, têm <span className="font-bold text-accent">340% mais engajamento</span>, pois o foco está 100% no conteúdo, não na pessoa.</p>
              </div>
            </GradientCard>
        </section>
        
        {/* "Arquitetura da Invisibilidade" */}
        <section id="metodo" className="z-10 mt-20 w-full flex flex-col overflow-hidden">
          <ContainerScroll
            titleComponent={
              <>
                <h2 className="text-4xl font-semibold text-white tracking-tighter">
                  A Arquitetura da Invisibilidade <br />
                  <span className="text-5xl md:text-[6.5rem] font-bold mt-1 leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
                    Os 4 Pilares do Método
                  </span>
                </h2>
              </>
            }
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 bg-transparent h-full">
              {modules.map((module, index) => (
                <GradientCard key={index} className="flex flex-col justify-center">
                  <div className="p-6">
                    <h3 className={cn("text-xl font-bold mb-2", module.color)}>{module.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{module.description}</p>
                  </div>
                </GradientCard>
              ))}
            </div>
          </ContainerScroll>
        </section>
        
        <section className="z-10 mt-32 w-full max-w-7xl">
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tighter">Reels de Viagens luxuosas</h2>
          </div>
          <VideoCarousel />
          <p className="text-center text-gray-400 mt-4 text-lg">edite eles em seus videos ou utilize-os como estão</p>
          <div className="mt-8 text-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/80 text-lg font-bold h-14 transition-transform duration-200 hover:scale-105">
                <Link href="#ofertas">
                    <ShoppingCart className="mr-3" />
                    Quero ter acesso agora
                </Link>
            </Button>
          </div>
        </section>

        <section className="z-10 mt-32 w-full max-w-7xl">
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tighter">O que Acontece Quando Você Entende Isso</h2>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">Essas pessoas não eram especiais. Eram trabalhadoras comuns que entenderam como o sistema realmente funciona.</p>
            <div className="flex justify-center items-center gap-1 mt-2 text-yellow-400">
                <Star className="h-4 w-4 fill-current" />
                <p className="font-semibold">Olhe os resultados de alguns nossos Alunos que aplicaram o Método</p>
            </div>
          </div>
          <ResultsCarousel />
        </section>


        {/* 3. DESEJO (D) - Detalhamento da Oferta */}
        <section id="ofertas" className="z-10 mt-32 w-full max-w-6xl">
           <h2 className="text-center text-4xl font-bold tracking-tighter mb-4">O que você vai receber?</h2>
            <p className="text-center text-gray-400 mb-16 text-lg">Tudo que você precisa para sair do zero e faturar alto, no anonimato.</p>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Offer 1: Super Pack */}
              <GradientCard className="flex flex-col">
                <CardHeader className="pt-8">
                  <CardTitle className="text-3xl font-bold tracking-tight">SUPER PACK VIRAL</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow p-6">
                  <div className="flex-grow">
                    <p className="text-5xl font-bold mb-2">R$19<span className="text-3xl font-medium align-top">,97</span></p>
                    <p className="text-sm text-gray-400 mb-8">ou 4x de R$5,53</p>
                    <ul className="space-y-4 mb-8">
                      {featuresSuperPack.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button size="lg" className="w-full bg-red-600 hover:bg-red-700 text-lg font-bold h-14 mt-auto transition-transform duration-200 hover:scale-105">
                    <ShoppingCart className="mr-3" />
                    QUERO O SUPER PACK
                  </Button>
                </CardContent>
              </GradientCard>

              {/* Offer 2: Acesso Completo */}
              <GradientCard className="flex flex-col border-2 border-accent shadow-2xl shadow-accent/20">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-lg">
                  MAIS VENDIDO
                </div>
                <CardHeader className="pt-8">
                  <CardTitle className="text-3xl font-bold tracking-tight">ACESSO COMPLETO</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow p-6">
                  <div className="flex-grow">
                    <p className="text-5xl font-bold mb-2">R$37<span className="text-3xl font-medium align-top">,00</span></p>
                    <p className="text-sm text-gray-400 mb-8">ou 8x de R$5,38</p>
                    <ul className="space-y-4 mb-8">
                      {featuresCompleto.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button size="lg" className="w-full bg-accent hover:bg-accent/80 text-lg font-bold h-14 mt-auto transition-transform duration-200 hover:scale-105">
                    <ShoppingCart className="mr-3" />
                    QUERO ACESSO COMPLETO
                  </Button>
                </CardContent>
              </GradientCard>
           </div>
        </section>

        {/* Bonus Section */}
        <section className="z-10 mt-32 w-full max-w-6xl">
            <h2 className="text-center text-4xl font-bold tracking-tighter">Desbloqueie um Arsenal de <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">Bônus Exclusivos</span></h2>
            <p className="text-center text-gray-400 mt-4 text-lg max-w-3xl mx-auto">Comprando hoje, você leva todos esses presentes para acelerar seus resultados:</p>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {bonuses.map((bonus, index) => (
                    <GradientCard key={index}>
                        <CardContent className="p-6 text-center flex flex-col items-center h-full">
                          <div className="p-4 bg-primary rounded-full inline-block mb-4">
                            <bonus.icon className="h-8 w-8 text-accent" />
                          </div>
                          <h3 className="font-bold text-xl text-white mb-2">{bonus.title}</h3>
                          <p className="text-gray-400 text-sm leading-relaxed flex-grow">{bonus.description}</p>
                        </CardContent>
                    </GradientCard>
                ))}
            </div>
        </section>

        {/* Garantia */}
        <section className="z-10 mt-32 w-full">
           <div className="text-center text-gray-300">
             <div className="bg-green-900/30 border border-green-400/50 rounded-xl p-8 max-w-3xl mx-auto backdrop-blur-sm">
                <h4 className="font-bold text-2xl text-white">Garantia Incondicional de 7 Dias</h4>
                <p className="mt-4 text-lg leading-relaxed">Assumo todo o risco para você. Teste o método por 7 dias completos. Se não for para você, devolvemos 100% do seu dinheiro. Sem perguntas, sem estresse.</p>
             </div>
           </div>
        </section>
        
        {/* "Talvez Você Esteja Pensando" */}
        <section className="z-10 mt-32 w-full max-w-5xl">
            <h2 className="text-center text-4xl font-bold tracking-tighter">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">Talvez Você Esteja Pensando...</span>
            </h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                <GradientCard color="blue">
                    <CardHeader>
                        <CardTitle>"Não tenho dinheiro para investir agora."</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-300 leading-relaxed">Por isso criei a oferta de R$19,97. É menos que um lanche. O objetivo é que você recupere esse investimento em menos de 24 horas após aplicar o pilar 3.</p>
                    </CardContent>
                </GradientCard>
                <GradientCard color="accent">
                    <CardHeader>
                        <CardTitle>"Não tenho tempo para criar conteúdo."</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-300 leading-relaxed">O Pilar 2, "Sistema de Reciclagem Inteligente", foi feito para você. Com nosso pack de +60 mil vídeos, você não cria nada do zero, apenas adapta e posta em minutos.</p>
                    </CardContent>
                </GradientCard>
            </div>
        </section>

        {/* Prova Social - Depoimentos */}
        <section id="depoimentos" className="z-10 mt-32 w-full max-w-7xl">
            <h2 className="text-center text-4xl font-bold tracking-tighter">Resultados de Alunos que Aplicaram o Método</h2>
            <p className="text-center text-gray-400 mt-4 text-lg">Eles também começaram do zero, como você.</p>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                <GradientCard>
                    <CardContent className="pt-8 text-center">
                        {testimonial1Avatar && <Image src={testimonial1Avatar.imageUrl} alt="Avatar de aluno" width={80} height={80} className="rounded-full mx-auto mb-4 border-2 border-accent/50" data-ai-hint={testimonial1Avatar.imageHint} />}
                        <p className="font-bold text-lg">Mariana S.</p>
                        <p className="text-sm text-gray-400 mb-4">De CLT a empreendedora</p>
                        <p className="italic text-gray-300">"Em 3 semanas, fiz meu primeiro saque de R$7.890. Nunca imaginei que seria possível sem aparecer."</p>
                        <p className="mt-4 text-3xl font-bold text-green-400">+ R$7.890,00</p>
                    </CardContent>
                </GradientCard>
                <GradientCard>
                    <CardContent className="pt-8 text-center">
                        {testimonial2Avatar && <Image src={testimonial2Avatar.imageUrl} alt="Avatar de aluno" width={80} height={80} className="rounded-full mx-auto mb-4 border-2 border-accent/50" data-ai-hint={testimonial2Avatar.imageHint} />}
                        <p className="font-bold text-lg">Lucas P.</p>
                        <p className="text-sm text-gray-400 mb-4">Introvertido e agora livre</p>
                        <p className="italic text-gray-300">"Odeio exposição. O método foi a única coisa que funcionou para mim. Já são R$12.300 em 45 dias."</p>
                        <p className="mt-4 text-3xl font-bold text-green-400">+ R$12.300,00</p>
                    </CardContent>
                </GradientCard>
                <GradientCard>
                    <CardContent className="pt-8 text-center">
                        {testimonial3Avatar && <Image src={testimonial3Avatar.imageUrl} alt="Avatar de aluno" width={80} height={80} className="rounded-full mx-auto mb-4 border-2 border-accent/50" data-ai-hint={testimonial3Avatar.imageHint} />}
                        <p className="font-bold text-lg">Fernanda L.</p>
                        <p className="text-sm text-gray-400 mb-4">Renda extra que virou principal</p>
                        <p className="italic text-gray-300">"Comecei para ter uma renda extra, hoje já ganho mais do que no meu antigo emprego. Fechei o mês com R$22.500."</p>
                        <p className="mt-4 text-3xl font-bold text-green-400">+ R$22.500,00</p>
                    </CardContent>
                </GradientCard>
            </div>
        </section>

        {/* 4. AÇÃO (A) - Chamada Final e Urgência */}
        <section className="z-10 mt-32 text-center w-full max-w-4xl">
            <h2 className="text-4xl font-bold tracking-tighter">Uma Última Reflexão</h2>
            <div className="mt-6 text-lg text-gray-300 space-y-5 leading-relaxed">
                <p>Imagine acordar amanhã sabendo que seu celular está gerando vendas para você enquanto você dorme, viaja ou curte sua família. Sem reuniões, sem chefe, sem a obrigação de postar sua vida.</p>
                <p>Essa é a realidade que o Digital Dark oferece. A decisão é sua: continuar sentindo que "mais uma semana foi perdida" ou tomar a atitude que pode te transformar no exemplo de superação da sua família.</p>
            </div>
            <div className="mt-12">
                <Button size="lg" className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-xl font-bold h-16 px-12 shadow-lg shadow-green-500/30 transition-transform duration-300 hover:scale-105">
                  <CircleCheckBig className="mr-3" />
                  Sim, Eu Quero Começar Agora!
                </Button>
                 <div className="text-center mt-6 flex justify-center items-center gap-2 text-gray-400 text-sm">
                    <Lock className="h-4 w-4"/>
                    <span>Pagamento seguro, acesso imediato e 7 dias de garantia.</span>
                </div>
            </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="z-10 my-32 w-full max-w-4xl">
          <h2 className="text-center text-4xl font-bold tracking-tighter">Perguntas Frequentes</h2>
          <Accordion type="single" collapsible className="mt-12 w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border/50 rounded-lg bg-card/50 backdrop-blur-sm">
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline px-6">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-300 px-6 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

      </main>

      {/* Footer */}
      <footer className="z-10 w-full border-t border-border/30 bg-background/80 backdrop-blur-md mt-20">
        <div className="container mx-auto p-8 text-center">
            <h3 className="font-bold text-xl tracking-tighter">Criat.Dark</h3>
            <p className="text-sm text-gray-400 mt-2">Sua liberdade financeira no anonimato.</p>
             <div className="mt-6 space-x-6 text-sm text-gray-300">
                <Link href="#" className="hover:text-accent transition-colors">Termos de Serviço</Link>
                <span>|</span>
                <Link href="#" className="hover:text-accent transition-colors">Política de Privacidade</Link>
            </div>
        </div>
        <div className="border-t border-border/30 py-4 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Criat.Dark. Todos os direitos reservados. Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook.
        </div>
      </footer>
    </div>
  );
}
