"use client";

import { Shield, Clock, Leaf, Award } from "lucide-react";
import { useTranslations } from "next-intl";

const WhyChooseUs = () => {
  const t = useTranslations("whyUs");

  const benefits = [
    {
      icon: Shield,
      title: t("certified.title"),
      description: t("certified.description"),
    },
    {
      icon: Clock,
      title: t("pricing.title"),
      description: t("pricing.description"),
    },
    {
      icon: Leaf,
      title: t("eco.title"),
      description: t("eco.description"),
    },
    {
      icon: Award,
      title: t("satisfaction.title"),
      description: t("satisfaction.description"),
    },
  ];

  return (
    <section id='why-us' className='py-24'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl sm:text-5xl font-bold mb-4'>{t("title")}</h2>
          <p className='text-[16px] sm:text-xl text-muted-foreground max-w-2xl mx-auto'>
            {t("subtitle")}
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className='flex gap-4 p-6 flex-col items-center text-center sm:items-start sm:text-left sm:flex-row rounded-xl hover:bg-card/50 transition-colors duration-300'
              data-testid={`benefit-card-${index}`}>
              <div className='flex-shrink-0'>
                <div className='w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center'>
                  <benefit.icon className='w-6 h-6 text-primary' />
                </div>
              </div>
              <div>
                <h3 className='text-xl font-bold mb-2'>{benefit.title}</h3>
                <p className='text-muted-foreground'>{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
