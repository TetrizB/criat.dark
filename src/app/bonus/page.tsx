
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Gift, Sparkles, ArrowRight, CheckCircle, ExternalLink, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { DialogClose } from '@radix-ui/react-dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

interface AccessLink {
  name: string;
  url: string;
}

interface Bonus {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  price?: string;
  originalPrice?: string;
  checkoutUrl: string;
  correctCoupon?: string;
  productUrl?: string; // For direct product access after purchase
  accessContent?: {
    title: string;
    description: string;
    items: (AccessLink | { category: string; links: AccessLink[] })[];
  };
  isSpecialOffer?: boolean;
}

const bonuses: Bonus[] = [
  {
    id: "capcut-pro",
    title: "CapCut Pro Vitalício",
    subtitle: "Oferta Exclusiva",
    description: "O melhor para edição de vídeos, agora com acesso vitalício. Libere todo o seu potencial criativo.",
    imageUrl: "https://i.postimg.cc/HLY6qnMx/Copia_de_Elementos_para_Design_1.png",
    imageHint: "video editing software",
    price: "R$19,90",
    originalPrice: "R$39,90",
    checkoutUrl: "https://www.ggcheckout.com/checkout/v2/H3AAbuuI7hQoc3yK9vOM",
    correctCoupon: "CORTESCAPCUT",
    productUrl: "https://drive.google.com/drive/folders/16B-LixsrbgKQ21rPvHEd6FXQ5ZLe4JmC?usp=drive_link",
    isSpecialOffer: true,
  },
  {
    id: "design-pack",
    title: "Pack de Design para Criativos",
    subtitle: "Exclusivo para Membros Criat.Dark",
    description: "Eleve o nível dos seus posts com um arsenal de templates 100% editáveis no Canva. Crie um feed profissional em minutos e atraia mais seguidores e clientes.",
    imageUrl: "https://mulknishdhiyvgfpdmjq.supabase.co/storage/v1/object/public/post-thumbnails/thumbnails/1761707553225-wai9mvmw8br.webp",
    imageHint: "design templates mockup",
    price: "R$14,90",
    checkoutUrl: "#", // Placeholder URL
    correctCoupon: "ABA321",
    accessContent: {
        title: "Cupom Ativado com Sucesso!",
        description: "Seu acesso ao Pack de Design para Criativos foi liberado. Acesse os links abaixo:",
        items: [
            { name: "Feed Tráfego Pago Azul", url: "https://www.canva.com/design/DAGmDFqnYds/CUrrr8m5HW27pcZ-W-hDcg/view?utm_content=DAGmDFqnYds&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview" },
            { name: "Feed Tráfego Pago Verde", url: "https://www.canva.com/design/DAGTAYDvyW8/XGr7fLC1YtJ4IXQEK9SM6Q/view?utm_content=DAGTAYDvyW8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview" },
            { name: "Social Media Vermelho", url: "https://www.canva.com/design/DAGmDPtQW2k/HRoyHZBRYb8E9yZWND1XMg/view?utm_content=DAGmDPtQW2k&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview" },
            { name: "Template Variado 1", url: "https://www.canva.com/design/DAFyrgGzU00/0tDNbDRUChixgcySibfn_w/view?utm_content=DAFyrgGzU00&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview" },
            { name: "Template Variado 2", url: "https://www.canva.com/design/DAFyluVaLaE/bN1k9qH2RjhLi0Nt-6qAbA/view?utm_content=DAFyluVaLaE&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview" },
            { name: "Post de Twitter", url: "https://www.canva.com/design/DAFxw2BGNnk/Go8ghgtq-TakeV8kT-2wZA/view?utm_content=DAFxw2BGNnk&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview" },
            { name: "Carrossel Grego Vermelho", url: "https://www.canva.com/design/DAFyGJ_pgR4/9wMWJqb28nKYVHsIZodQrw/view?utm_content=DAFyGJ_pgR4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview" },
            { name: "Elementos 3D", url: "https://www.canva.com/design/DAFxF3XMUvY/zUQPGA92UWh3Cm6WaVojqA/view?utm_content=DAFxF3XMUvY&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview" },
        ]
    }
  },
  {
    id: "resource-library",
    title: "Bíblioteca de Recursos",
    subtitle: "Imagens, Vetores, Vídeos & Mockups",
    description: "Uma curadoria de ferramentas e recursos para acelerar seus projetos.",
    imageUrl: "https://i.postimg.cc/FKQWzDrx/VIAGENS-6.png",
    imageHint: "resource library collage",
    price: "R$14,90",
    checkoutUrl: "#",
    correctCoupon: "ABA321",
    accessContent: {
        title: "Biblioteca de Recursos Liberada!",
        description: "Aproveite esta curadoria de ferramentas e recursos para acelerar seus projetos.",
        items: [
            { category: "Imagens", links: [
                { name: "Freepik", url: "https://br.freepik.com/" }, { name: "Depositphotos", url: "https://br.depositphotos.com/" }, { name: "Pexels", url: "https://www.pexels.com/pt-br/" }, { name: "Unsplash", url: "https://unsplash.com/" }, { name: "Freeimages", url: "https://www.freeimages.com/pt" }, { name: "Wallhaven", url: "https://wallhaven.cc/" }, { name: "Pixabay", url: "https://pixabay.com/pt/" }, { name: "Gratisography", url: "https://gratisography.com/" }, { name: "Nappy", url: "https://nappy.co/" }, { name: "ISO Republic", url: "https://isorepublic.com/" }, { name: "Life of Pix", url: "https://www.lifeofpix.com/" }, { name: "Magdeleine", url: "https://magdeleine.co/browse/" }, { name: "Stocksnap", url: "https://stocksnap.io/" }, { name: "Farejador de Imagens", url: "https://farejadordeimagens.com.br/" }, { name: "Burst", url: "https://burst.shopify.com/" }, { name: "Morguefile", url: "https://morguefile.com/" }, { name: "Needpix", url: "https://www.needpix.com/" }, { name: "Picjumbo", url: "https://picjumbo.com/" }, { name: "Pngegg", url: "https://www.pngegg.com/" }, { name: "Pixnio", url: "https://pixnio.com/" }
            ]},
            { category: "Vídeos", links: [
                { name: "Pixabay", url: "https://pixabay.com/pt/" }, { name: "Pexels", url: "https://www.pexels.com/pt-br/" }, { name: "Videezy", url: "https://pt.videezy.com/" }, { name: "Coverr", url: "https://coverr.co/" }, { name: "Videvo", url: "https://www.videvo.net/" }, { name: "Mixkit", url: "https://mixkit.co/" }, { name: "ISO Republic", url: "https://isorepublic.com/" }, { name: "Life of Vids", url: "https://lifeofvids.com/" }, { name: "Open Footage", url: "https://www.openfootage.net/" }, { name: "Vidsplay", url: "https://www.vidsplay.com/" }
            ]},
            { category: "Vetores", links: [
                { name: "Freepik", url: "https://br.freepik.com/" }, { name: "Pngtree", url: "https://pngtree.com/so/weight-loss" }, { name: "Cleanpng", url: "https://www.cleanpng.com/" }, { name: "Freevector", url: "https://www.freevector.com/" }
            ]},
            { category: "Ícones", links: [
                { name: "Icons8", url: "https://icons8.com/" }, { name: "Cleanpng", url: "https://www.cleanpng.com/" }, { name: "Flaticon", url: "https://www.flaticon.com/" }, { name: "The Noun Project", url: "https://thenounproject.com/" }
            ]},
            { category: "Mockups", links: [
                { name: "Adazing", url: "https://www.adazing.com/cover-mocks/" }, { name: "MyEcoverMaker", url: "https://app.myecovermaker.com/auth/login" }, { name: "Mockuper", url: "https://mockuper.net/" }, { name: "Mockup World", url: "https://www.mockupworld.co" }, { name: "DIY Book Covers", url: "https://diybookcovers.com/3Dmockups/" }, { name: "Placeit", url: "https://br.placeit.net/c/mockups" }, { name: "Free Mockup", url: "https://www.free-mockup.com/downloads/category/book/" }
            ]},
            { category: "Remover Fundo", links: [
                { name: "Remove.bg", url: "https://www.remove.bg/pt-br" }, { name: "Pixlr", url: "https://pixlr.com/br/" }, { name: "Removal.ai", url: "https://removal.ai/" }
            ]},
            { category: "Fotos de Pessoas (IA)", links: [
                { name: "Generated Photos", url: "http://bride.ru/" }, { name: "This Person Does Not Exist", url: "https://this-person-does-not-exist.com/en" }
            ]},
            { category: "Patterns", links: [
                { name: "Subtle Patterns", url: "https://www.toptal.com/designers/subtlepatterns/" }
            ]},
            { category: "Criar Logo", links: [
                { name: "Logobook", url: "http://www.logobook.com/" }, { name: "Looka", url: "https://looka.com/onboarding" }
            ]},
            { category: "Ferramentas Diversas", links: [
                { name: "Canva", url: "#" }, { name: "Inshot", url: "#" }, { name: "Photoshop", url: "#" }, { name: "Veed.io", url: "http://veed.io/" }
            ]}
        ]
    }
  }
];


const BonusCard = ({ bonus }: { bonus: Bonus }) => {
    const [couponCode, setCouponCode] = useState('');
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [showAccessInput, setShowAccessInput] = useState(false);
  
    const handleApplyCoupon = () => {
      if (bonus.correctCoupon && couponCode.toUpperCase() === bonus.correctCoupon.toUpperCase()) {
        setIsDialogOpen(true);
        setError(null);
      } else if (bonus.productUrl && !bonus.correctCoupon) {
        setIsDialogOpen(true);
        setError(null);
      }
      else {
        setError("Código de cupom inválido.");
      }
    };

    const handleAccess = () => {
      if(bonus.isSpecialOffer) {
        if (bonus.correctCoupon && couponCode.toUpperCase() === bonus.correctCoupon.toUpperCase()){
          setIsDialogOpen(true);
          setError(null);
        } else {
          setError("Senha de acesso inválida.");
        }
      } else {
        handleApplyCoupon();
      }
    }
  
    return (
      <>
        <div className="relative group">
            <div className={`absolute -inset-0.5 bg-gradient-to-r ${bonus.isSpecialOffer ? 'from-amber-500 to-yellow-400' : 'from-accent to-blue-500'} rounded-xl blur opacity-20 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-tilt`}></div>
            <Card className="relative bg-card/80 backdrop-blur-sm border-border/30 overflow-hidden h-full flex flex-col">
                <div className="relative min-h-[250px]">
                    <Image
                        src={bonus.imageUrl}
                        alt={bonus.title}
                        fill
                        className="object-cover"
                        data-ai-hint={bonus.imageHint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent"></div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                    <div>
                        <p className={`text-sm font-medium ${bonus.isSpecialOffer ? 'text-amber-400' : 'text-accent'} mb-1`}>{bonus.subtitle}</p>
                        <h3 className="text-2xl font-bold tracking-tight">{bonus.title}</h3>
                        <p className="text-base text-gray-400 leading-relaxed mt-2">
                            {bonus.description}
                        </p>
                    </div>

                    <div className="mt-auto pt-6">
                        {bonus.isSpecialOffer ? (
                            <>
                                {!showAccessInput ? (
                                    <>
                                        <div className="flex items-baseline gap-2 mb-4">
                                            <p className="text-4xl font-bold text-amber-400">{bonus.price}</p>
                                            {bonus.originalPrice && <p className="text-lg font-medium text-gray-500 line-through">{bonus.originalPrice}</p>}
                                        </div>
                                        <Button asChild size="lg" className="w-full bg-amber-500 hover:bg-amber-600 text-black text-lg font-bold h-12 transition-transform duration-200 hover:scale-105">
                                            <Link href={bonus.checkoutUrl}>
                                                <ShoppingCart className="mr-3 h-5 w-5" />
                                                Quero esta Oferta
                                            </Link>
                                        </Button>
                                        <p className="text-xs text-center text-gray-500 mt-2">Pagamento único. Acesso vitalício.</p>
                                        <Button variant="link" className="text-gray-400 w-full mt-1" onClick={() => setShowAccessInput(true)}>
                                            Já adquiriu? Acesse aqui.
                                        </Button>
                                    </>
                                ) : (
                                    <div>
                                        <label htmlFor={`access-coupon-${bonus.id}`} className="text-xs font-bold text-gray-400 uppercase tracking-wider">Insira a senha para acessar</label>
                                        <div className="flex items-center gap-2 mt-2">
                                            <Input
                                                id={`access-coupon-${bonus.id}`}
                                                placeholder="Sua senha de acesso"
                                                className="bg-primary/50 border-border"
                                                value={couponCode}
                                                onChange={(e) => setCouponCode(e.target.value)}
                                            />
                                            <Button variant="secondary" className="flex-shrink-0" onClick={handleAccess}>
                                              <ArrowRight className="h-4 w-4" />
                                            </Button>
                                        </div>
                                        {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
                                        <Button variant="link" size="sm" className="text-gray-500 w-full mt-1" onClick={() => {setShowAccessInput(false); setError(null);}}>
                                            Voltar para a compra
                                        </Button>
                                    </div>
                                )}
                            </>
                        ) : (
                            <>
                                <div className="mb-6">
                                    <label htmlFor={`coupon-${bonus.id}`} className="text-xs font-bold text-gray-400 uppercase tracking-wider">Tem um cupom?</label>
                                    <div className="flex items-center gap-2 mt-2">
                                        <Input
                                            id={`coupon-${bonus.id}`}
                                            placeholder="Seu código aqui"
                                            className="bg-primary/50 border-border"
                                            value={couponCode}
                                            onChange={(e) => setCouponCode(e.target.value)}
                                        />
                                        <Button variant="secondary" className="flex-shrink-0" onClick={handleApplyCoupon}>Aplicar</Button>
                                    </div>
                                    {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
                                </div>
                                
                                <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/80 text-lg font-bold h-12 transition-transform duration-200 hover:scale-105">
                                  <Link href={bonus.checkoutUrl} className="flex items-center justify-center">
                                    <Sparkles className="mr-3 h-5 w-5" />
                                    Acesso Imediato por {bonus.price}
                                  </Link>
                                </Button>
                                <p className="text-xs text-center text-gray-500 mt-2">Pagamento único. Acesso vitalício.</p>
                            </>
                        )}
                    </div>
                </div>
            </Card>
        </div>
        { (bonus.accessContent || bonus.productUrl) && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent className="sm:max-w-2xl bg-card border-accent/50 text-white">
                <DialogHeader className="items-center text-center">
                    <div className="p-3 bg-green-500/20 rounded-full w-fit mb-4">
                        <CheckCircle className="h-8 w-8 text-green-400" />
                    </div>
                    <DialogTitle className="text-2xl">{bonus.accessContent?.title || "Acesso Liberado!"}</DialogTitle>
                    <DialogDescription className="text-gray-400 pt-2">
                        {bonus.accessContent?.description || "Seu acesso ao conteúdo foi liberado. Aproveite!"}
                    </DialogDescription>
                </DialogHeader>
                
                {bonus.productUrl && (
                    <div className='p-4'>
                         <Button asChild className="w-full justify-start bg-primary hover:bg-primary/80">
                            <Link href={bonus.productUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-3 h-4 w-4" />
                                Acessar Conteúdo
                            </Link>
                        </Button>
                    </div>
                )}
                
                {bonus.accessContent && (
                <ScrollArea className="h-96 w-full p-4">
                    <div className="space-y-4">
                        {bonus.accessContent.items.map((item, index) => {
                            if ('category' in item) {
                                return (
                                    <div key={index}>
                                        <h4 className="font-bold text-lg text-accent mb-2">{item.category}</h4>
                                        <div className="space-y-2">
                                            {item.links.map(link => (
                                                <Button key={link.name} asChild className="w-full justify-start bg-primary hover:bg-primary/80">
                                                    <Link href={link.url} target="_blank" rel="noopener noreferrer">
                                                        <ExternalLink className="mr-3 h-4 w-4" />
                                                        {link.name}
                                                    </Link>
                                                </Button>
                                            ))}
                                        </div>
                                    </div>
                                )
                            }
                            return (
                                <Button key={item.name} asChild className="w-full justify-start bg-primary hover:bg-primary/80">
                                    <Link href={item.url} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="mr-3 h-4 w-4" />
                                        {item.name}
                                    </Link>
                                </Button>
                            )
                        })}
                    </div>
                </ScrollArea>
                )}
                <DialogFooter className="sm:justify-center mt-4">
                    <DialogClose asChild>
                    <Button type="button" variant="ghost">
                        Fechar
                    </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
        )}
      </>
    );
};


export default function BonusPage() {
  return (
    <div className="relative min-h-screen w-full text-white bg-background">
      {/* Header */}
      <header className="z-20 sticky top-0 bg-background/80 backdrop-blur-md border-b border-border/50">
        <nav className="container mx-auto flex items-center justify-between p-4">
            <Link href="/paginademembros" className="text-2xl font-bold tracking-tighter">Criat.Dark</Link>
            <Button variant="ghost" asChild>
                <Link href="/paginademembros">
                    Voltar para a Área de Membros <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="z-10 text-center w-full max-w-4xl mx-auto mb-16">
            <div className="inline-block rounded-full bg-accent/10 px-4 py-2 border border-accent/30 mb-6">
                <p className="flex items-center text-accent font-semibold">
                    <Gift className="mr-2 h-5 w-5"/> Bônus Exclusivos Desbloqueados
                </p>
            </div>
            <h1 className="text-5xl font-extrabold tracking-tighter text-white sm:text-6xl">
                Sua Jornada Acabou de Ficar Melhor
            </h1>
            <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
                Como membro, você tem acesso a ferramentas e conteúdos premium para acelerar ainda mais seus resultados. Explore os bônus abaixo.
            </p>
        </section>

        {/* Bonus Card Section */}
        <section className="z-10 w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {bonuses.map(bonus => (
                  <BonusCard key={bonus.id} bonus={bonus} />
              ))}
            </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="z-10 w-full border-t border-border/30 bg-background/80 backdrop-blur-md mt-32">
        <div className="container mx-auto p-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Criat.Dark. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
