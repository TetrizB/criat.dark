import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, Download, Film, Palette, ShoppingCart, Zap, Flame, Lock } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';

const getPlaceholderImage = (id: string) => {
  return PlaceHolderImages.find((img) => img.id === id);
};

const productMockup = getPlaceholderImage('reels-bundle-devices');
const founderPortrait = getPlaceholderImage('founder-portrait');
const testimonial1Avatar = getPlaceholderImage('testimonial-1-avatar');
const testimonial2Avatar = getPlaceholderImage('testimonial-2-avatar');
const testimonial3Avatar = getPlaceholderImage('testimonial-3-avatar');


export default function HomePage() {
  const navLinks = ['Início', 'O Método', 'Depoimentos', 'FAQ'];

  const featuresSuperPack = [
    '4 Módulos do Método',
    'Comandos para IA',
    'Comunidade Exclusiva',
    '4 Aulas Bônus',
    'Suporte Personalizado',
    '+30.000 Vídeos Virais Editáveis',
  ];

  const featuresCompleto = [
    'TUDO do Super Pack Viral',
    'Pack com +60.000 Vídeos Virais',
    '17 Nichos Altamente Lucrativos',
    'Acesso a Todas as Atualizações',
  ];

  const modules = [
    {
      title: "Pilar 1: Seleção Estratégica de Nicho",
      description: "Aprenda a identificar mercados sub-explorados e lucrativos onde a concorrência é baixa e o potencial de ganho é alto."
    },
    {
      title: "Pilar 2: Sistema de Reciclagem Inteligente",
      description: "Descubra como criar conteúdo viral de alta qualidade sem precisar gravar nada do zero, usando nosso sistema de reciclagem."
    },
    {
      title: "Pilar 3: Monetização Silenciosa",
      description: "O segredo para gerar receita. Conheça as 4 formas comprovadas de monetizar seu perfil sem nunca mostrar o rosto."
    },
    {
      title: "Pilar 4: Viralização Programada",
      description: "Receba acesso a fórmulas, roteiros e templates prontos para garantir que seu conteúdo alcance milhões de pessoas."
    }
  ]

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
  
  return (
    <div className="relative min-h-screen w-full text-white">
      {/* Header */}
      <header className="z-20 fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm">
        <div className="bg-red-600 text-center py-2 text-sm font-bold flex items-center justify-center">
            <Flame className="mr-2 h-4 w-4" /> OFERTA POR TEMPO LIMITADO
        </div>
        <nav className="container mx-auto flex items-center justify-between p-4">
            <div className="text-xl font-bold">Digital Dark</div>
            <div className="hidden md:flex items-center space-x-6">
                {navLinks.map(link => (
                    <Link key={link} href="#" className="text-sm hover:text-accent transition-colors">
                        {link}
                    </Link>
                ))}
            </div>
            <Button variant="outline" size="sm" className="hidden md:block bg-accent hover:bg-accent/80 text-white">Quero Começar</Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Zap className="h-5 w-5"/>
            </Button>
        </nav>
      </header>
      
      <main className="container mx-auto flex flex-col items-center px-4 pt-40 sm:pt-48">
        {/* Hero Section */}
        <section className="z-10 text-center w-full max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Ganhe de <span className="text-accent">R$5mil a R$100mil</span> no Instagram Sem Mostrar o Rosto
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            A descoberta que ninguém te conta: 73% dos perfis de sucesso não mostram o rosto e contas "Dark" têm <span className="font-bold">340% mais engajamento</span>. Liberte-se do seu emprego e conquiste a liberdade financeira no anonimato.
          </p>
          <div className="mt-8">
            {productMockup && (
              <Image
                src={productMockup.imageUrl}
                alt={productMockup.description}
                width={800}
                height={500}
                className="rounded-lg shadow-2xl shadow-accent/20 mx-auto"
                data-ai-hint={productMockup.imageHint}
                priority
              />
            )}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="z-10 mt-24 w-full max-w-5xl">
           <h2 className="text-center text-3xl font-bold mb-12">Escolha o seu acesso e comece hoje</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Offer 1: Super Pack */}
              <Card className="bg-card/80 backdrop-blur-sm border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">SUPER PACK VIRAL</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col h-full">
                  <div className="flex-grow">
                    <p className="text-4xl font-bold mb-4">R$19<span className="text-2xl">,97</span></p>
                    <p className="text-sm text-gray-400 mb-6">ou 4x de R$5,53</p>
                    <ul className="space-y-3 mb-8">
                      {featuresSuperPack.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-accent" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button size="lg" className="w-full bg-red-600 hover:bg-red-700 text-lg font-bold h-12 mt-auto">
                    <ShoppingCart className="mr-2" />
                    QUERO O SUPER PACK
                  </Button>
                </CardContent>
              </Card>

              {/* Offer 2: Acesso Completo */}
              <Card className="bg-card/80 backdrop-blur-sm border-2 border-accent relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-bold">
                  MAIS VENDIDO
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">ACESSO COMPLETO</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col h-full">
                  <div className="flex-grow">
                    <p className="text-4xl font-bold mb-4">R$37<span className="text-2xl">,00</span></p>
                    <p className="text-sm text-gray-400 mb-6">ou 8x de R$5,38</p>
                    <ul className="space-y-3 mb-8">
                      {featuresCompleto.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-400" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button size="lg" className="w-full bg-accent hover:bg-accent/80 text-lg font-bold h-12 mt-auto">
                    <ShoppingCart className="mr-2" />
                    QUERO ACESSO COMPLETO
                  </Button>
                </CardContent>
              </Card>
           </div>
           <div className="text-center mt-8 flex justify-center items-center gap-2 text-gray-300">
             <Lock className="h-4 w-4"/>
             <span>Pagamento seguro e garantia incondicional de 7 dias.</span>
           </div>
        </section>

        {/* Modules Section */}
        <section className="z-10 mt-24 w-full flex flex-col overflow-hidden">
          <ContainerScroll
            titleComponent={
              <>
                <h1 className="text-4xl font-semibold text-white">
                  A Arquitetura da Invisibilidade <br />
                  <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                    Os 4 Pilares do Método
                  </span>
                </h1>
              </>
            }
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-background/80 rounded-2xl">
              {modules.map((module, index) => (
                <div key={index}>
                  <h3 className="text-xl font-bold text-accent mb-2">{module.title}</h3>
                  <p className="text-gray-300">{module.description}</p>
                </div>
              ))}
            </div>
          </ContainerScroll>
        </section>


        {/* Social Proof Section */}
        <section className="z-10 mt-24 w-full max-w-6xl">
            <h2 className="text-center text-3xl font-bold">Resultados de Alunos que Aplicaram o Método</h2>
            <p className="text-center text-gray-400 mt-2">Eles também começaram do zero, como você.</p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="bg-card/80 backdrop-blur-sm">
                    <CardContent className="pt-6 text-center">
                        {testimonial1Avatar && <Image src={testimonial1Avatar.imageUrl} alt="Avatar de aluno" width={80} height={80} className="rounded-full mx-auto mb-4" data-ai-hint={testimonial1Avatar.imageHint} />}
                        <p className="font-bold">Mariana S.</p>
                        <p className="text-sm text-gray-400 mb-2">De CLT a empreendedora</p>
                        <p className="italic">"Em 3 semanas, fiz meu primeiro saque de R$7.890. Nunca imaginei que seria possível sem aparecer."</p>
                        <p className="mt-4 text-2xl font-bold text-green-400">+ R$7.890,00</p>
                    </CardContent>
                </Card>
                <Card className="bg-card/80 backdrop-blur-sm">
                    <CardContent className="pt-6 text-center">
                        {testimonial2Avatar && <Image src={testimonial2Avatar.imageUrl} alt="Avatar de aluno" width={80} height={80} className="rounded-full mx-auto mb-4" data-ai-hint={testimonial2Avatar.imageHint} />}
                        <p className="font-bold">Lucas P.</p>
                        <p className="text-sm text-gray-400 mb-2">Introvertido e agora livre</p>
                        <p className="italic">"Odeio exposição. O método foi a única coisa que funcionou para mim. Já são R$12.300 em 45 dias."</p>
                        <p className="mt-4 text-2xl font-bold text-green-400">+ R$12.300,00</p>
                    </CardContent>
                </Card>
                <Card className="bg-card/80 backdrop-blur-sm">
                    <CardContent className="pt-6 text-center">
                        {testimonial3Avatar && <Image src={testimonial3Avatar.imageUrl} alt="Avatar de aluno" width={80} height={80} className="rounded-full mx-auto mb-4" data-ai-hint={testimonial3Avatar.imageHint} />}
                        <p className="font-bold">Fernanda L.</p>
                        <p className="text-sm text-gray-400 mb-2">Renda extra que virou principal</p>
                        <p className="italic">"Comecei para ter uma renda extra, hoje já ganho mais do que no meu antigo emprego. Fechei o mês com R$22.500."</p>
                        <p className="mt-4 text-2xl font-bold text-green-400">+ R$22.500,00</p>
                    </CardContent>
                </Card>
            </div>
        </section>


        {/* FAQ Section */}
        <section className="z-10 my-24 w-full max-w-4xl">
          <h2 className="text-center text-3xl font-bold">Perguntas Frequentes</h2>
          <Accordion type="single" collapsible className="mt-8 w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card/50 backdrop-blur-sm border-border rounded-lg mb-2 px-4">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-300">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

      </main>

      {/* Footer */}
      <footer className="z-10 w-full border-t border-border/50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto p-8 text-center">
            <h3 className="font-bold text-lg">Digital Dark</h3>
            <p className="text-sm text-gray-400 mt-2">Sua liberdade financeira no anonimato.</p>
             <div className="mt-4 space-x-4 text-sm text-gray-300">
                <Link href="#" className="hover:text-accent">Termos de Serviço</Link>
                <span>|</span>
                <Link href="#" className="hover:text-accent">Política de Privacidade</Link>
            </div>
        </div>
        <div className="border-t border-border/50 py-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Digital Dark. Todos os direitos reservados. Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook.
        </div>
      </footer>
    </div>
  );
}
