"use client";

import { Sparkles, Mail, Phone, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import MopifyIcon from "../public/assets/icons/mopify-icon.svg";

const Footer = () => {
  const t = useTranslations("footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-card/50 border-t border-border pt-16 pb-8'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid md:grid-cols-4 gap-12 mb-12'>
          <div className='col-span-2'>
            <div className='flex items-baseline gap-[1px] mb-4 justify-center md:justify-start'>
              <MopifyIcon className=' text-primary mopify-icon' />
              <span className='text-xl font-bold gradient-text'>opify</span>
            </div>
            <p className='text-muted-foreground mb-6 text-center md:text-left'>
              {t("description")}
            </p>
            <div className='space-y-3'>
              <div className='flex items-center gap-3 text-muted-foreground'>
                <Phone className='w-5 h-5 text-primary' />
                <a
                  href='tel:+998999483113'
                  className='hover:text-primary transition-colors'>
                  +998 99 948 31 13
                </a>
              </div>
              <div className='flex items-center gap-3 text-muted-foreground'>
                <Mail className='w-5 h-5 text-primary' />
                <a
                  href='mailto:mopifyuz@gmail.com'
                  className='hover:text-primary transition-colors'>
                  mopifyuz@gmail.com
                </a>
              </div>
              <div className='flex items-center gap-3 text-muted-foreground'>
                <MapPin className='w-5 h-5 text-primary' />
                <a
                  href='https://yandex.uz/maps/-/CLVERQ-T'
                  target='_blank'
                  className='hover:text-primary transition-colors'>
                  Toshkent shahri, Mirzo Ulugbek tumani, Akhmad Yugnakiy
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className='font-bold mb-4'>{t("services")}</h3>
            <ul className='space-y-2 text-muted-foreground'>
              <li>
                <a
                  href='#services'
                  className='hover:text-foreground transition-colors'>
                  {t("residential")}
                </a>
              </li>
              <li>
                <a
                  href='#services'
                  className='hover:text-foreground transition-colors'>
                  {t("commercial")}
                </a>
              </li>
              <li>
                <a
                  href='#services'
                  className='hover:text-foreground transition-colors'>
                  {t("deepCleaning")}
                </a>
              </li>
              <li>
                <a
                  href='#services'
                  className='hover:text-foreground transition-colors'>
                  {t("specialized")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='font-bold mb-4'>{t("company")}</h3>
            <ul className='space-y-2 text-muted-foreground'>
              <li>
                <a href='#' className='hover:text-foreground transition-colors'>
                  {t("about")}
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-foreground transition-colors'>
                  {t("careers")}
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-foreground transition-colors'>
                  {t("contact")}
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-foreground transition-colors'>
                  {t("blog")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='border-t border-border pt-8 text-center text-sm text-muted-foreground'>
          <p>{t("copyright", { year: currentYear })}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
