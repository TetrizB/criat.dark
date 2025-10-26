
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { modules } from '@/lib/content';
import { cn } from '@/lib/utils';
import { PlayCircle, Search, Settings } from 'lucide-react';

export default function MembersPage() {
  const userName = "Aluno"; // Placeholder for user name
  const userAvatarUrl = "https://i.pravatar.cc/150?u=a042581f4e29026704d"; // Placeholder for user avatar

  return (
    <div className="relative min-h-screen w-full text-white">
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
        <section className="mb-16">
          <h1 className="text-4xl font-bold tracking-tighter">Bem-vindo, {userName}!</h1>
          <p className="text-lg text-gray-400 mt-2">Continue de onde parou e acelere seus resultados.</p>
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

    