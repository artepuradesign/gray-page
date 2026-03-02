import React from 'react';
import { motion } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { serviceModules } from '@/components/dashboard/modules/moduleData';
import { useNavigate } from 'react-router-dom';

const recentModules = serviceModules.slice(-10).reverse();

const RecentModulesCarousel: React.FC = () => {
  const navigate = useNavigate();

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
                className="pl-4 basis-[70%] sm:basis-1/2 md:basis-1/3 lg:basis-1/5"
              >
                <motion.div
                  whileHover={{ y: -6, scale: 1.03 }}
                  className="group relative bg-card/80 backdrop-blur-sm rounded-2xl p-5 cursor-pointer border border-border/50 hover:border-primary/40 shadow-sm hover:shadow-lg transition-all duration-300 h-full"
                  onClick={() => navigate(mod.path)}
                >
                  <div className="h-12 w-12 rounded-xl bg-primary/10 ring-1 ring-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <mod.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground text-base mb-1">{mod.title}</h3>
                  <p className="text-xs text-muted-foreground mb-3">{mod.description}</p>
                  <span className="text-sm font-semibold text-primary">R$ {mod.price}</span>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default RecentModulesCarousel;
