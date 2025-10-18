"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Globe, Menu, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import MopifyIcon from "../public/assets/icons/mopify-icon.svg";

const Navigation = () => {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-baseline gap-[1px]'>
            <MopifyIcon
              className='text-primary mopify-icon '
              data-testid='icon-logo'
            />
            <span
              className='text-xl font-bold gradient-text'
              data-testid='text-brand'>
              opify
            </span>
          </div>

          <div className='hidden md:flex items-center gap-8'>
            <a
              href='#services'
              className='text-foreground/80 hover:text-foreground transition-colors'
              data-testid='link-services'>
              {t("services")}
            </a>
            <a
              href='#why-us'
              className='text-foreground/80 hover:text-foreground transition-colors'
              data-testid='link-why-us'>
              {t("whyUs")}
            </a>
            <a
              href='#testimonials'
              className='text-foreground/80 hover:text-foreground transition-colors'
              data-testid='link-testimonials'>
              {t("testimonials")}
            </a>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant='outline'
                  style={{ padding: "8px 12px" }}
                  size='sm'
                  data-testid='button-language'>
                  <Globe className='w-4 h-4 mr-2 ' />
                  {locale === "ru" ? "RU" : "UZ"}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem
                  onClick={() => changeLanguage("ru")}
                  data-testid='language-ru'>
                  Русский
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => changeLanguage("uz")}
                  data-testid='language-uz'>
                  O'zbek
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button
              variant='hero'
              size='sm'
              data-testid='button-get-quote'
              onClick={() =>
                document
                  .getElementById("booking")
                  ?.scrollIntoView({ behavior: "smooth" })
              }>
              {t("getQuote")}
            </Button>
          </div>

          <div className='md:hidden'>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant='ghost'
                  size='icon'
                  data-testid='burger-menu-trigger'>
                  <Menu className='h-6 w-6' />
                </Button>
              </SheetTrigger>
              <SheetContent side='right' className='w-[280px] sm:w-[350px]'>
                <div className='flex flex-col gap-6 mt-8'>
                  <a
                    href='#services'
                    onClick={handleLinkClick}
                    className='text-lg text-foreground/80 hover:text-foreground transition-colors'
                    data-testid='mobile-link-services'>
                    {t("services")}
                  </a>
                  <a
                    href='#why-us'
                    onClick={handleLinkClick}
                    className='text-lg text-foreground/80 hover:text-foreground transition-colors'
                    data-testid='mobile-link-why-us'>
                    {t("whyUs")}
                  </a>
                  <a
                    href='#testimonials'
                    onClick={handleLinkClick}
                    className='text-lg text-foreground/80 hover:text-foreground transition-colors'
                    data-testid='mobile-link-testimonials'>
                    {t("testimonials")}
                  </a>
                  <div className='border-t pt-6'>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant='outline'
                          className='w-full justify-start'
                          data-testid='mobile-button-language'>
                          <Globe className='w-4 h-4 mr-2' />
                          {locale === "ru" ? "Русский" : "O'zbek"}
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem
                          onClick={() => changeLanguage("ru")}
                          data-testid='mobile-language-ru'>
                          Русский
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => changeLanguage("uz")}
                          data-testid='mobile-language-uz'>
                          O'zbek
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <Button
                    variant='hero'
                    className='w-full'
                    onClick={() => {
                      handleLinkClick();
                      document
                        .getElementById("booking")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    data-testid='mobile-button-get-quote'>
                    {t("getQuote")}
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
