
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Gift, Sparkles, ArrowRight, CheckCircle, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { DialogClose } from '@radix-ui/react-dialog';

export default function BonusPage() {
  const [couponCode, setCouponCode] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const bonus = {
    title: "Pack de Design para Criativos",
    subtitle: "Exclusivo para Membros Criat.Dark",
    description: "Eleve o nível dos seus posts com um arsenal de templates 100% editáveis no Canva. Crie um feed profissional em minutos e atraia mais seguidores e clientes.",
    imageUrl: "https://mulknishdhiyvgfpdmjq.supabase.co/storage/v1/object/public/post-thumbnails/thumbnails/1761707553225-wai9mvmw8br.webp",
    imageHint: "design templates mockup",
    price: "R$97",
    checkoutUrl: "#", // Placeholder URL
  };

  const correctCoupon = "ABA321";
  
  const accessLinks = [
    { name: "Feed Tráfego Pago Azul", url: "https://www.canva.com/design/DAGmDFqnYds/CUrrr8m5HW27pcZ-W-hDcg/view?utm_content=DAGmDFqnYds&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview" },
    { name: "Feed Tráfego Pago Verde", url: "https://www.canva.com/design/DAGTAYDvyW8/XGr7fLC1YtJ4IXQEK9SM6Q/view?utm_content=DAGTAYDvyW8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview" },
    { name: "Social Media Vermelho", url: "https://www.canva.com/design/DAGmDPtQW2k/HRoyHZBRYb8E9yZWND1XMg/view?utm_content=DAGmDPtQW2k&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview" },
    { name: "Template Variado 1", url: "https://www.canva.com/design/DAFyrgGzU00/0tDNbDRUChixgcySibfn_w/view?utm_content=DAFyrgGzU00&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview" },
    { name: "Template Variado 2", url: "https://www.canva.com/design/DAFyluVaLaE/bN1k9qH2RjhLi0Nt-6qAbA/view?utm_content=DAFyluVaLaE&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview" },
    { name: "Post de Twitter", url: "https://www.canva.com/design/DAFxw2BGNnk/Go8ghgtq-TakeV8kT-2wZA/view?utm_content=DAFxw2BGNnk&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview" },
    { name: "Carrossel Grego Vermelho", url: "https://www.canva.com/design/DAFyGJ_pgR4/9wMWJqb28nKYVHsIZodQrw/view?utm_content=DAFyGJ_pgR4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview" },
    { name: "Elementos 3D", url: "https://www.canva.com/design/DAFxF3XMUvY/zUQPGA92UWh3Cm6WaVojqA/view?utm_content=DAFxF3XMUvY&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview" },
  ];

  const handleApplyCoupon = () => {
    if (couponCode.toUpperCase() === correctCoupon) {
      setIsDialogOpen(true);
      setError(null);
    } else {
      setError("Código de cupom inválido.");
    }
  };


  return (
    <div className="relative min-h-screen w-full text-white overflow-x-hidden">
      {/* Header */}
      <header className="z-20 fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md">
        <nav className="container mx-auto flex items-center justify-between p-4">
            <Link href="/paginademembros" className="text-2xl font-bold tracking-tighter">Criat.Dark</Link>
            <Button variant="ghost" asChild>
                <Link href="/paginademembros">
                    Voltar para a Área de Membros <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
        </nav>
      </header>

      <main className="container mx-auto flex flex-col items-center px-4 pt-36 sm:pt-48">
        {/* Hero Section */}
        <section className="z-10 text-center w-full max-w-4xl">
            <div className="inline-block rounded-full bg-accent/10 px-4 py-2 border border-accent/30 mb-6">
                <p className="flex items-center text-accent font-semibold">
                    <Gift className="mr-2 h-5 w-5"/> Bônus Exclusivos Desbloqueados
                </p>
            </div>
            <h1 className="text-5xl font-extrabold tracking-tighter text-white sm:text-7xl">
                Sua Jornada Acabou de Ficar Melhor
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Como membro, você tem acesso a ferramentas e conteúdos premium para acelerar ainda mais seus resultados. Explore os bônus abaixo.
            </p>
        </section>

        {/* Bonus Card Section */}
        <section className="z-10 mt-24 w-full max-w-4xl">
            <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-blue-500 rounded-xl blur opacity-20 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <Card className="relative bg-card/80 backdrop-blur-sm border-border/30 overflow-hidden">
                    <div className="grid md:grid-cols-2">
                        <div className="p-8 flex flex-col justify-between">
                            <div>
                                <CardHeader className="p-0 mb-4">
                                    <p className="text-sm font-medium text-accent mb-1">{bonus.subtitle}</p>
                                    <CardTitle className="text-3xl tracking-tight">{bonus.title}</CardTitle>
                                </CardHeader>
                                <CardDescription className="text-base text-gray-400 leading-relaxed">
                                    {bonus.description}
                                </CardDescription>
                            </div>

                            <div className="mt-8">
                                <div className="mb-6">
                                    <label htmlFor="coupon" className="text-xs font-bold text-gray-400 uppercase tracking-wider">Tem um cupom?</label>
                                    <div className="flex items-center gap-2 mt-2">
                                        <Input
                                          id="coupon"
                                          placeholder="Seu código aqui"
                                          className="bg-primary/50 border-border"
                                          value={couponCode}
                                          onChange={(e) => setCouponCode(e.target.value)}
                                        />
                                        <Button variant="secondary" className="flex-shrink-0" onClick={handleApplyCoupon}>Aplicar</Button>
                                    </div>
                                    {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
                                </div>
                                
                                <Button size="lg" className="w-full bg-accent hover:bg-accent/80 text-lg font-bold h-14 transition-transform duration-200 hover:scale-105">
                                    <Sparkles className="mr-3 h-5 w-5" />
                                    Acesso Imediato por {bonus.price}
                                </Button>
                                <p className="text-xs text-center text-gray-500 mt-2">Pagamento único. Acesso vitalício.</p>
                            </div>
                        </div>

                        <div className="relative min-h-[300px] md:min-h-0">
                            <Image
                                src={bonus.imageUrl}
                                alt={bonus.title}
                                fill
                                className="object-cover"
                                data-ai-hint={bonus.imageHint}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent md:bg-gradient-to-r md:from-card md:via-card/50 md:to-transparent"></div>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="z-10 w-full border-t border-border/30 bg-background/80 backdrop-blur-md mt-32">
        <div className="container mx-auto p-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Criat.Dark. Todos os direitos reservados.</p>
        </div>
      </footer>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-lg bg-card border-accent/50 text-white">
          <DialogHeader className="items-center text-center">
            <div className="p-3 bg-green-500/20 rounded-full w-fit mb-4">
              <CheckCircle className="h-8 w-8 text-green-400" />
            </div>
            <DialogTitle className="text-2xl">Cupom Ativado com Sucesso!</DialogTitle>
            <DialogDescription className="text-gray-400 pt-2">
              Seu acesso ao Pack de Design para Criativos foi liberado. Acesse os links abaixo:
            </DialogDescription>
          </DialogHeader>
          <div className="py-4 space-y-3 max-h-60 overflow-y-auto pr-2">
            {accessLinks.map((link) => (
              <Button key={link.name} asChild className="w-full justify-start bg-primary hover:bg-primary/80">
                <Link href={link.url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-3 h-4 w-4" />
                  {link.name}
                </Link>
              </Button>
            ))}
          </div>
          <DialogFooter className="sm:justify-center">
            <DialogClose asChild>
              <Button type="button" variant="ghost">
                Fechar
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

    </div>
  );
}
