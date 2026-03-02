import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, ListChecks, CreditCard, Search, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const steps = [
  {
    icon: UserPlus,
    title: 'Crie sua conta',
    desc: 'Cadastro em menos de 1 minuto com e-mail e senha',
    illustration: '👤',
  },
  {
    icon: ListChecks,
    title: 'Escolha seu plano',
    desc: 'Selecione o plano ideal para suas necessidades',
    illustration: '📋',
  },
  {
    icon: CreditCard,
    title: 'Pague ou recarregue',
    desc: 'Assine um plano ou recarregue saldo para economizar',
    illustration: '💳',
  },
  {
    icon: Search,
    title: 'Faça suas consultas',
    desc: 'Acesse informações completas em segundos',
    illustration: '🔍',
  },
];

const CleanHowItWorksSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-2">
            Passo a passo
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Como funciona</h2>
          <p className="text-muted-foreground max-w-md mx-auto">4 passos simples para começar a consultar</p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-24 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.12 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step number badge */}
                <div className="relative z-10 mb-4">
                  <div className="h-20 w-20 rounded-2xl bg-card border-2 border-primary/20 shadow-lg flex items-center justify-center text-4xl relative group-hover:scale-105 transition-transform">
                    <span>{step.illustration}</span>
                  </div>
                  <span className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shadow-md">
                    {i + 1}
                  </span>
                </div>

                {/* Arrow between steps (mobile/tablet) */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-1">
                    <ArrowRight className="h-4 w-4 text-primary/40 rotate-90 sm:rotate-0" />
                  </div>
                )}

                <h3 className="font-semibold text-foreground text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-[200px]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="font-semibold px-8 shadow-lg hover:shadow-xl transition-shadow"
            onClick={() => navigate('/registration')}
          >
            Comece em 1 minuto
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CleanHowItWorksSection;
