"use client";

import { Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import BookingForm from "@/components/BookingForm";

const CTA = () => {
  const t = useTranslations("cta");

  return (
    <section className='py-24' id='booking'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl sm:text-5xl font-bold mb-6'>
            {t("title")}{" "}
            <span className='gradient-text'>{t("titleHighlight")}</span>
          </h2>
          <p className='text-[16px] sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-4'>
            {t("description")}
          </p>
          <div className='flex items-center justify-center gap-2 text-muted-foreground'>
            <Phone className='w-4 h-4' />
            <a
              href='tel:+998999483113'
              className='hover:text-primary transition-colors'>
              +998 99 948 31 13
            </a>
          </div>
        </div>

        <div className='max-w-4xl mx-auto'>
          <BookingForm />
        </div>

        <p className='text-sm text-muted-foreground text-center mt-8'>
          {t("availability")}
        </p>
      </div>
    </section>
  );
};

export default CTA;
