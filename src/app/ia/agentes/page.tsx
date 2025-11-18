
import { Button } from '@/components/ui/button';
import { ArrowLeft, Bot, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const agents = [
    {
        name: "Estrutura Sites AI",
        description: "Um especialista em arquitetura de sites, ideal para planejar a estrutura da sua página de vendas.",
        url: "https://chatgpt.com/g/g-eBlrDE0VE-estrutura-sites-ai",
    },
    {
        name: "Analisador Crítico de Páginas de Vendas",
        description: "Receba uma análise detalhada e crítica sobre sua página de vendas para identificar pontos de melhoria.",
        url: "https://chatgpt.com/g/g-6835474b36dc819187926bf1da4afe23-analisador-critico-de-paginas",
    },
    {
        name: "Landing Page Builder",
        description: "Construa uma landing page do zero com a ajuda deste agente, que guia você por todo o processo.",
        url: "https://chatgpt.com/g/g-6861c94d8bc081918fe2fb660ac8ce1d-landing-page-builder",
    },
    {
        name: "PromptNinja - Crie como um Ninja",
        description: "Aprimore suas habilidades de criação de prompts para extrair o máximo de qualquer modelo de IA.",
        url: "https://chatgpt.com/g/g-681157f187d0819190a9c26aa3a47e33-promptninja-crie-como-um-ninja-v-1-3",
    },
    {
        name: "Easy Coder",
        description: "Um assistente de programação para ajudar com snippets de código e soluções de desenvolvimento web.",
        url: "https://chatgpt.com/g/g-n5VTqMnMU-easy-coder",
    }
]

export default function AgentsAIPage() {
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
                    <Bot className="mr-2 h-5 w-5"/> AGENTES GPT
                </p>
            </div>
            <h1 className="text-5xl font-extrabold tracking-tighter text-white sm:text-6xl">
                Agentes de IA para Páginas de Vendas
            </h1>
            <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
                Uma curadoria de agentes GPT especializados que vão te ajudar a criar e otimizar páginas de vendas de alta conversão.
            </p>
        </section>

        <section className="mt-20 max-w-3xl mx-auto">
            <div className="space-y-6">
                {agents.map((agent) => (
                    <div key={agent.name} className="bg-card/50 p-6 rounded-lg border border-border/50 transition-all hover:border-accent/50 hover:bg-card">
                       <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between'>
                            <div>
                                <h2 className="text-2xl font-bold text-white">{agent.name}</h2>
                                <p className="text-gray-400 leading-relaxed mt-2 mb-4 sm:mb-0">{agent.description}</p>
                            </div>
                            <Button asChild className="bg-primary hover:bg-accent shrink-0">
                                <Link href={agent.url} target='_blank' rel='noopener noreferrer'>
                                    Acessar Agente <ExternalLink className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
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

    