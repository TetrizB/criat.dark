import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, Zap, Film, Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const faqs = [
  {
    question: "Os templates do Canva são editáveis?",
    answer: "Sim, todos os 18.000+ reels são 100% customizáveis no Canva. Você pode alterar cores, fontes, adicionar seu logo e adaptar tudo à sua marca.",
  },
  {
    question: "Como recebo os arquivos digitais?",
    answer: "Após a compra, você receberá um link para download instantâneo diretamente no seu e-mail. Sem esperas, comece a usar imediatamente.",
  },
  {
    question: "Qual é a política de devolução?",
    answer: "Oferecemos uma garantia de 14 dias para devoluções sem complicações. Se você não estiver satisfeito, nós devolvemos o seu dinheiro. Menos de 1% dos clientes solicitam reembolso.",
  },
  {
    question: "Preciso de uma conta Canva Pro?",
    answer: "Não! Nossos templates são totalmente compatíveis com a versão gratuita do Canva. Você não precisa de nenhuma assinatura paga para editar e usar os reels.",
  }
];

const testimonials = [
  {
    name: "DIOR",
    role: "Luxury Fashion House",
    image: "https://picsum.photos/seed/dior/100/100",
    comment: "Uma coleção impressionante que elevou nossa estratégia de conteúdo. A estética de luxo é exatamente o que procurávamos.",
  },
  {
    name: "TOMBOY®",
    role: "Streetwear Brand",
    image: "https://picsum.photos/seed/tomboy/100/100",
    comment: "A qualidade e a variedade deste pacote são incomparáveis. Economizamos centenas de horas em criação de conteúdo.",
  },
];

export default function LuxuryReelsPage() {
  return (
    <div className="bg-background text-foreground antialiased">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Film className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg">Hyper Reels</span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            <Link href="#features" className="transition-colors hover:text-primary">Recursos</Link>
            <Link href="#testimonials" className="transition-colors hover:text-primary">Depoimentos</Link>
            <Link href="#portfolio" className="transition-colors hover:text-primary">Portfólio</Link>
            <Link href="#faq" className="transition-colors hover:text-primary">FAQ</Link>
          </nav>
          <Button>
            Comprar Agora
            <ShoppingCart className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </header>

      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div className="space-y-6 text-center md:text-left">
                <Badge variant="outline" className="border-primary text-primary">Edição Limitada</Badge>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  18.000+ Luxury Aesthetic Reels Bundle
                </h1>
                <p className="text-lg text-muted-foreground">
                  Visuais que param a rolagem, feitos para serem tendência. Destaque-se e posicione sua marca como líder com visuais limpos e cativantes.
                </p>
                <div className="flex flex-col items-center gap-4 md:flex-row">
                  <Button size="lg" className="w-full md:w-auto">
                    ADICIONAR AO CARRINHO
                  </Button>
                  <div className="text-center">
                    <span className="text-3xl font-bold">$18.00 USD</span>
                    <span className="ml-2 text-lg text-muted-foreground line-through">$109.90</span>
                  </div>
                </div>
                 <p className="text-sm text-muted-foreground">Pagamento seguro com Shop Pay, Cartão de Crédito.</p>
              </div>
              <div className="relative">
                 <Image
                  src="https://picsum.photos/seed/devices/800/600"
                  alt="Product displayed on multiple devices"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-2xl"
                  data-ai-hint="digital product mockup"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 bg-card/50 sm:py-24">
          <div className="container mx-auto px-4 md:px-6">
             <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center text-center">
                <Zap className="h-10 w-10 text-primary mb-4"/>
                <h3 className="text-xl font-bold">Entrega Instantânea</h3>
                <p className="text-muted-foreground mt-2">Receba acesso imediato por link após a compra.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mb-4"><path d="M12 1.5A3.5 3.5 0 0 1 15.5 5c0 1.03-.48 1.94-1.25 2.5a3.5 3.5 0 0 1-4.5 0C8.98 6.94 8.5 6.03 8.5 5A3.5 3.5 0 0 1 12 1.5Zm0 11.5a3.5 3.5 0 0 1 3.5 3.5c0 1.03-.48 1.94-1.25 2.5a3.5 3.5 0 0 1-4.5 0c-.77-.56-1.25-1.47-1.25-2.5a3.5 3.5 0 0 1 3.5-3.5Z"/><path d="M15.5 19a3.5 3.5 0 0 1 0-7H8.5a3.5 3.5 0 0 1 0 7Z"/></svg>
                <h3 className="text-xl font-bold">100% Customizável</h3>
                <p className="text-muted-foreground mt-2">Edite tudo no Canva para combinar com sua marca.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <CheckCircle className="h-10 w-10 text-primary mb-4"/>
                <h3 className="text-xl font-bold">Plug & Play</h3>
                <p className="text-muted-foreground mt-2">Fácil de usar, mesmo para iniciantes. É só arrastar e soltar.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Star className="h-10 w-10 text-primary mb-4"/>
                <h3 className="text-xl font-bold">Garantia de 14 Dias</h3>
                <p className="text-muted-foreground mt-2">Devoluções sem complicações e sem riscos.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Social Proof Section */}
        <section id="portfolio" className="py-16 sm:py-24">
           <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Usado por Marcas de Destaque</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-12">Nossos criativos já geraram resultados incríveis para clientes de alto nível.</p>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="border border-border/50 rounded-lg p-6">
                    <p className="text-4xl font-bold text-primary">$2M+</p>
                    <p className="text-muted-foreground mt-2">Receita gerada para clientes em 2023</p>
                </div>
                <div className="border border-border/50 rounded-lg p-6">
                    <p className="text-4xl font-bold text-primary">$500k+</p>
                    <p className="text-muted-foreground mt-2">Em anúncios para clientes em 2023</p>
                </div>
                <div className="border border-border/50 rounded-lg p-6">
                    <p className="text-4xl font-bold text-primary">$50k</p>
                    <p className="text-muted-foreground mt-2">Recorde de receita com um único criativo</p>
                </div>
                <div className="border border-border/50 rounded-lg p-6">
                    <p className="text-4xl font-bold text-primary">8,000+</p>
                    <p className="text-muted-foreground mt-2">Criativos produzidos em 2023</p>
                </div>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-16 sm:py-24 bg-card/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-3 gap-12 items-center">
              <div className="md:col-span-1">
                <Avatar className="w-32 h-32 mx-auto md:mx-0">
                  <AvatarImage src="https://picsum.photos/seed/founder/200/200" alt="Founder" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </div>
              <div className="md:col-span-2 space-y-4">
                <h3 className="text-2xl font-bold">Uma palavra do nosso fundador</h3>
                <p className="text-muted-foreground">
                  "Com anos de experiência em e-commerce, aprendi que o sucesso é um jogo de longo prazo. Não se trata de truques, mas de construir uma marca forte e autêntica. Criamos este pacote para dar a você as ferramentas para fazer exatamente isso, com uma estética premium que gera confiança e resultados."
                </p>
                <p className="font-semibold">— John Doe, Fundador da Hyper Reels</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 sm:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tight text-center">O que nossos clientes dizem</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-center mt-4 mb-12">
                A confiança de gigantes da indústria.
            </p>
            <div className="grid gap-8 lg:grid-cols-2">
              {testimonials.map((testimonial, index) => (
                <Card key={index}>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Avatar className="w-14 h-14">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint="logo" />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle>{testimonial.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg">"{testimonial.comment}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 sm:py-24 bg-card/50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tight text-center">Perguntas Frequentes</h2>
             <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto mt-12">
              {faqs.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="text-lg font-semibold">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-4xl font-bold tracking-tight">Pronto para Elevar sua Marca?</h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              Junte-se a milhares de criadores e marcas que estão dominando as redes sociais com visuais de luxo.
            </p>
             <div className="flex flex-col items-center gap-4 mt-8">
                <Button size="lg">
                    OBTENHA SEU PACOTE POR APENAS $18
                </Button>
                <p className="text-sm text-muted-foreground">Oferta por tempo limitado. Preço original $109.90.</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Download Instantâneo</span>
                    <Separator orientation="vertical" className="h-4" />
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>100% Seguro</span>
                     <Separator orientation="vertical" className="h-4" />
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Garantia de 14 Dias</span>
                </div>
            </div>
          </div>
        </section>

      </main>

       <footer className="py-8 bg-card/50">
         <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
           <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Hyper Reels. Todos os direitos reservados.</p>
           <div className="flex gap-4 mt-4 md:mt-0">
             <Link href="#" className="text-sm text-muted-foreground hover:text-primary">Termos de Serviço</Link>
             <Link href="#" className="text-sm text-muted-foreground hover:text-primary">Política de Privacidade</Link>
           </div>
         </div>
       </footer>

    </div>
  );
}