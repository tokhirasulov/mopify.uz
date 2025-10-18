"use client";

import { Star } from "lucide-react";
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Testimonials = () => {
  const t = useTranslations("testimonials");

  const testimonials = [
    {
      name: t("client1.name"),
      role: t("client1.role"),
      content: t("client1.content"),
      rating: 5,
    },
    {
      name: t("client2.name"),
      role: t("client2.role"),
      content: t("client2.content"),
      rating: 5,
    },
    {
      name: t("client3.name"),
      role: t("client3.role"),
      content: t("client3.content"),
      rating: 5,
    },
    {
      name: t("client1.name"),
      role: t("client1.role"),
      content: t("client1.content"),
      rating: 5,
    },
    {
      name: t("client2.name"),
      role: t("client2.role"),
      content: t("client2.content"),
      rating: 5,
    },
    {
      name: t("client3.name"),
      role: t("client3.role"),
      content: t("client3.content"),
      rating: 5,
    },
  ];

  return (
    <section id='testimonials' className='py-24 bg-card/30'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl sm:text-5xl font-bold mb-4'>{t("title")}</h2>
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
            {t("subtitle")}
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay, Keyboard]}
          loop={true}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          keyboard={{ enabled: true }}
          spaceBetween={24}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },

            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          aria-live='polite'>
          {testimonials.map((testimonial, index) => (
            <SwiperSlide
              key={index}
              data-testid={`testimonial-card-${index}`}
              className='p-3'>
              <div className='glass-card p-8 rounded-2xl hover:scale-105 transition-transform duration-300 h-full'>
                <div className='flex gap-1 mb-4' aria-hidden='true'>
                  {[...Array(testimonial.rating || 0)].map((_, i) => (
                    <Star key={i} className='w-5 h-5 fill-accent text-accent' />
                  ))}
                </div>

                <p className='text-foreground/90 mb-6 leading-relaxed'>
                  "{testimonial.content}"
                </p>

                <div>
                  <div className='font-bold'>{testimonial.name}</div>
                  <div className='text-sm text-muted-foreground'>
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
