import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Providers } from "@/components/Providers";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mopify.uz";

  const title =
    locale === "ru"
      ? "Mopify - Профессиональная уборка | Клининговые услуги в Узбекистане"
      : "Mopify - Professional Cleaning | Tozalash xizmatlari O'zbekistonda";

  const description =
    locale === "ru"
      ? "Профессиональные услуги по уборке в Узбекистане. Клининг домов и офисов. Tozalash xizmatlari. ✓ Экологически чистые продукты ✓ 24/7 доступность ✓ 98% довольных клиентов"
      : "Professional tozalash xizmatlari O'zbekistonda. Uy va ofis tozalash. ✓ Ekologik toza mahsulotlar ✓ 24/7 mavjudlik ✓ 98% qoniqgan mijozlar";

  const keywords =
    locale === "ru"
      ? "cleaning, cleaning service, клининг, уборка, tozalash, uy tozalash, профессиональная уборка, клининговые услуги, cleaning uzbekistan, уборка квартир, офисная уборка, глубокая уборка, tozalash xizmatlari, professional cleaning, чистка ковров, мойка окон, уборка при переезде, коммерческая уборка, уборка дома, клининг ташкент, уборка ташкент, cleaning tashkent, tozalash toshkent"
      : "cleaning, cleaning service, tozalash, uy tozalash, tozalash xizmatlari, professional cleaning, gilam tozalash, deraza tozalash, ofis tozalash, uy tozalash xizmati, toshkent tozalash, клининг, уборка, cleaning uzbekistan, cleaning tashkent";

  return {
    metadataBase: new URL(baseUrl),
    title,
    description,
    keywords,
    authors: [{ name: "Mopify" }],
    creator: "Mopify",
    publisher: "Mopify",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        ru: `${baseUrl}/ru`,
        uz: `${baseUrl}/uz`,
        "x-default": `${baseUrl}/ru`,
      },
    },
    openGraph: {
      type: "website",
      locale: locale,
      alternateLocale: locale === "ru" ? ["uz"] : ["ru"],
      url: `${baseUrl}/${locale}`,
      title,
      description,
      siteName: "Mopify",
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}/og-image.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "your-google-verification-code",
      yandex: "your-yandex-verification-code",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mopify.uz";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Mopify",
    image: `${baseUrl}/og-image.jpg`,
    description:
      locale === "ru"
        ? "Профессиональные услуги по уборке домов и офисов в Узбекистане"
        : "Professional tozalash xizmatlari O'zbekistonda. Uy va ofis tozalash.",
    "@id": `${baseUrl}/${locale}`,
    url: `${baseUrl}/${locale}`,
    telephone: "+998-90-123-45-67",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Clean Street",
      addressLocality: "Tashkent",
      addressRegion: "Tashkent",
      postalCode: "100000",
      addressCountry: "UZ",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.2995,
      longitude: 69.2401,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    sameAs: [
      "https://www.facebook.com/mopify",
      "https://www.instagram.com/mopify",
      "https://t.me/mopify",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "500",
    },
    areaServed: {
      "@type": "City",
      name: locale === "ru" ? "Ташкент" : "Toshkent",
    },
    serviceType:
      locale === "ru"
        ? [
            "Cleaning Service",
            "Клининговые услуги",
            "Уборка домов",
            "Офисная уборка",
            "Глубокая уборка",
            "Чистка ковров",
          ]
        : [
            "Cleaning Service",
            "Tozalash xizmatlari",
            "Uy tozalash",
            "Ofis tozalash",
            "Gilam tozalash",
          ],
    inLanguage: locale,
  };

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel='icon' href='/favicon.svg' />
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
