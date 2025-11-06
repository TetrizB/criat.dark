
'use client';

import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, Mail } from 'lucide-react';
import Link from 'next/link';

export default function ObrigadoPage() {
  return (
    <div className="relative min-h-screen w-full text-white flex items-center justify-center p-4">
      <main className="z-10 text-center w-full max-w-2xl">
        <div className="relative p-px rounded-xl bg-gradient-to-r from-accent/70 to-blue-500/70 shadow-2xl shadow-accent/20">
            <div className="relative bg-card/90 backdrop-blur-sm rounded-[11px] p-8 sm:p-12">
                <div className="flex justify-center mb-6">
                    <div className="p-4 bg-green-500/20 rounded-full w-fit border border-green-400/30">
                        <CheckCircle className="h-12 w-12 text-green-400 animate-pulse" />
                    </div>
                </div>
                <h1 className="text-4xl font-extrabold tracking-tighter text-white sm:text-5xl">
                    Parabéns e boas-vindas!
                </h1>
                <p className="mt-6 text-lg text-gray-300">
                    Sua compra foi aprovada com sucesso. Você está a um passo de transformar sua presença no Instagram.
                </p>
                <div className="mt-8 bg-primary/50 border border-border rounded-lg p-6 text-left">
                    <div className="flex items-center gap-4">
                        <Mail className="h-8 w-8 text-accent flex-shrink-0" />
                        <div>
                            <h2 className="font-bold text-white text-lg">Confira seu e-mail</h2>
                            <p className="text-gray-400 text-sm mt-1">Enviamos todas as informações de acesso para o seu endereço de e-mail cadastrado. Verifique sua caixa de entrada (e a pasta de spam, por precaução).</p>
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <Button asChild size="lg" className="w-full md:w-auto bg-accent hover:bg-accent/80 text-lg font-bold h-14 px-10 shadow-lg shadow-accent/30 transition-transform duration-300 hover:scale-105">
                        <Link href="/paginademembros">
                            Acessar a Área de Membros
                            <ArrowRight className="ml-3 h-5 w-5" />
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
}
