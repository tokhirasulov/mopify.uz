"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import heroImg from "../public/assets/hero-cleaning.jpg";
import { useEffect, useState } from "react";

const Hero = () => {
  const t = useTranslations("hero");
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  return (
    <section className='text-center md:text-left relative min-h-screen flex items-center pt-24 pb-16 md:pt-32 md:pb-24'>
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-background via-background to-card' />
        <Image
          src={heroImg}
          alt='Sparkling clean home interior'
          fill
          className='object-cover opacity-10'
          priority
        />
      </div>

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <div className='space-y-8'>
            <h1 className='text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight break-words hyphens-auto'>
              {t(`${windowWidth < 768 ? "smallTitle" : "title"}`)} <br />
              <span className='gradient-text'>{t("titleHighlight")}</span>
            </h1>

            <p className='text-[16px] sm:text-xl text-muted-foreground max-w-2xl'>
              {t("description")}
            </p>

            <div className='flex flex-col justify-center md:justify-start sm:flex-row gap-4'>
              <Button
                variant='hero'
                size='lg'
                className='text-lg px-8'
                data-testid='button-get-started'
                onClick={() =>
                  document
                    .getElementById("booking")
                    ?.scrollIntoView({ behavior: "smooth" })
                }>
                {t("getStarted")}
                <ArrowRight className='w-5 h-5' />
              </Button>
              <Button
                variant='secondary'
                size='lg'
                className='text-lg px-8'
                data-testid='button-learn-more'
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }>
                {t("learnMore")}
              </Button>
            </div>

            <div className='flex flex-wrap gap-6 pt-4 md:justify-start justify-center'>
              <div className='flex items-center gap-2'>
                <CheckCircle2 className='w-5 h-5 text-accent' />
                <span className='text-sm'>{t("benefit1")}</span>
              </div>
              <div className='flex items-center gap-2'>
                <CheckCircle2 className='w-5 h-5 text-accent' />
                <span className='text-sm'>{t("benefit2")}</span>
              </div>
              <div className='flex items-center gap-2'>
                <CheckCircle2 className='w-5 h-5 text-accent' />
                <span className='text-sm'>{t("benefit3")}</span>
              </div>
            </div>
          </div>

          <div className='relative'>
            <div className='grid grid-cols-2 gap-6'>
              <div
                className='glass-card p-6 rounded-2xl hover:scale-105 transition-transform duration-300 h-32 flex flex-col justify-center'
                data-testid='stat-availability'>
                <div className='text-2xl sm:text-4xl font-bold text-primary mb-2'>
                  {t("stat1Value")}
                </div>
                <div className='text-[12px] sm:text-sm text-muted-foreground'>
                  {t("stat1Title")}
                </div>
              </div>

              <div
                className='glass-card p-6 rounded-2xl hover:scale-105 transition-transform duration-300 h-32 flex flex-col justify-center'
                data-testid='stat-satisfaction'>
                <div className='text-2xl sm:text-4xl font-bold text-secondary mb-2'>
                  {t("stat2Value")}
                </div>
                <div className='text-[12px] sm:text-sm text-muted-foreground'>
                  {t("stat2Title")}
                </div>
              </div>

              <div
                className='glass-card p-6 rounded-2xl hover:scale-105 transition-transform duration-300 h-32 flex flex-col justify-center'
                data-testid='stat-homes-cleaned'>
                <div className='text-2xl sm:text-4xl font-bold text-accent mb-2'>
                  {t("stat3Value")}
                </div>
                <div className='text-[12px] sm:text-sm text-muted-foreground'>
                  {t("stat3Title")}
                </div>
              </div>

              <div
                className='glass-card p-6 rounded-2xl hover:scale-105 transition-transform duration-300 h-32 flex flex-col justify-center'
                data-testid='stat-response-time'>
                <div className='text-2xl sm:text-4xl font-bold text-primary mb-2'>
                  {t("stat4Value")}
                </div>
                <div className='text-[12px] sm:text-sm text-muted-foreground'>
                  {t("stat4Title")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
