
import { Button } from '@/components/ui/button';
import { ArrowLeft, Check, Chrome, Download, LogIn } from 'lucide-react';
import Link from 'next/link';

const steps = [
    {
        icon: Chrome,
        title: "Passo 1: Instale a Extensão",
        description: "Acesse a Chrome Web Store e instale a extensão Deepsider. É rápido e seguro.",
        action: {
            href: "https://chromewebstore.google.com/detail/deepsider/dfbnddndcmilnhdfmmaolepiaefacnpo?utm_source=item-share-cb",
            text: "Ir para a Chrome Store",
            icon: Download
        }
    },
    {
        icon: LogIn,
        title: "Passo 2: Faça o Login",
        description: "Após instalar, clique no ícone da extensão no seu navegador. Faça login com qualquer e-mail para começar. Você receberá 200 créditos gratuitos instantaneamente.",
    },
    {
        icon: Check,
        title: "Passo 3: Comece a Criar",
        description: "Dentro do painel, você encontrará o modelo Sora 2. Ele está disponível para uso ilimitado, sem marca d'água, e gera vídeos de 10 segundos com ótima qualidade e fluidez, em formato horizontal ou vertical.",
    }
];

export default function SoraAIPage() {
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
                    GUIA RÁPIDO
                </p>
            </div>
            <h1 className="text-5xl font-extrabold tracking-tighter text-white sm:text-6xl">
                Sora 2 AI: Grátis e Ilimitado
            </h1>
            <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
                Siga os passos abaixo para começar a gerar vídeos com uma das mais poderosas ferramentas de inteligência artificial do mercado.
            </p>
        </section>

        <section className="mt-20 max-w-2xl mx-auto">
            <div className="space-y-12">
                {steps.map((step, index) => (
                    <div key={index} className="relative flex items-start gap-6">
                        <div className="absolute left-6 top-12 h-full border-l-2 border-dashed border-border/50 -translate-x-1/2"></div>
                        <div className="relative z-10 flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-primary border-2 border-accent">
                            <step.icon className="h-6 w-6 text-accent" />
                        </div>
                        <div className="bg-card/50 p-6 rounded-lg border border-border/50 flex-1">
                            <h2 className="text-2xl font-bold text-white mb-3">{step.title}</h2>
                            <p className="text-gray-300 leading-relaxed">{step.description}</p>
                            {step.action && (
                                <Button asChild className="mt-6 bg-accent hover:bg-accent/80 text-white font-bold">
                                    <Link href={step.action.href} target='_blank' rel='noopener noreferrer'>
                                        <step.action.icon className="mr-2 h-4 w-4" />
                                        {step.action.text}
                                    </Link>
                                </Button>
                            )}
                        </div>
                    </div>
                ))}
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

    