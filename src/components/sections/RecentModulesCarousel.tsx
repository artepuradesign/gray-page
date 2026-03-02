import React from 'react';
import { motion } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { serviceModules } from '@/components/dashboard/modules/moduleData';
import { Link } from 'react-router-dom';
import ModuleCardTemplates from '@/components/configuracoes/personalization/ModuleCardTemplates';

const recentModules = serviceModules.slice(-10).reverse();

const getIconName = (IconComponent: React.ElementType): string => {
  try {
    return (IconComponent as any).displayName || (IconComponent as any).name || 'Package';
  } catch {
    return 'Package';
  }
};

const RecentModulesCarousel: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-gradient-to-b from-background via-card/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-10"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-2">
            Novidades
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Últimos módulos adicionados
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Confira os módulos mais recentes da plataforma
          </p>
        </motion.div>

        <Carousel
          opts={{ align: 'start', loop: true }}
          plugins={[Autoplay({ delay: 3000 }) as any]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {recentModules.map((mod) => (
              <CarouselItem
                key={mod.title}
                className="pl-4 basis-[45%] sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
              >
                <Link to={mod.path} className="block homepage-module-card">
                  <ModuleCardTemplates
                    module={{
                      title: mod.title,
                      description: mod.description,
                      price: '',
                      status: 'ativo',
                      operationalStatus: 'on',
                      iconSize: 'medium',
                      showDescription: true,
                      icon: getIconName(mod.icon),
                    }}
                    template="modern"
                  />
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default RecentModulesCarousel;
