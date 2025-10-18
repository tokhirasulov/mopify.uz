"use client";

import { Home, Building2, Sparkles, Droplets, Wind, Shirt } from "lucide-react";
import { useTranslations } from "next-intl";

const Services = () => {
  const t = useTranslations("services");

  const services = [
    {
      icon: Home,
      title: t("residential.title"),
      description: t("residential.description"),
      color: "text-primary",
    },
    {
      icon: Building2,
      title: t("commercial.title"),
      description: t("commercial.description"),
      color: "text-secondary",
    },
    {
      icon: Sparkles,
      title: t("deepCleaning.title"),
      description: t("deepCleaning.description"),
      color: "text-accent",
    },
    {
      icon: Droplets,
      title: t("carpet.title"),
      description: t("carpet.description"),
      color: "text-primary",
    },
    {
      icon: Wind,
      title: t("window.title"),
      description: t("window.description"),
      color: "text-secondary",
    },
    {
      icon: Shirt,
      title: t("moveCleaning.title"),
      description: t("moveCleaning.description"),
      color: "text-accent",
    },
  ];

  return (
    <section
      id='services'
      className='text-center md:text-left py-24 bg-card/30'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl sm:text-5xl font-bold mb-4'>{t("title")}</h2>
          <p className='text-[16px] sm:text-xl text-muted-foreground max-w-2xl mx-auto'>
            {t("subtitle")}
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <div
              key={index}
              className='glass-card p-4 sm:p-8 rounded-2xl hover:scale-105 transition-all duration-300 group flex flex-col items-center md:items-start'
              data-testid={`service-card-${index}`}>
              <div
                className={`w-14 h-14 rounded-xl bg-background/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className={`w-7 h-7 ${service.color}`} />
              </div>
              <h3 className='text-xl sm:text-2xl font-bold mb-3'>
                {service.title}
              </h3>
              <p className='text-[14px] sm:text-[16px] text-muted-foreground leading-relaxed'>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
