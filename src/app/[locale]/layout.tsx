import type { Metadata } from "next";
import "@/app/styles/globals.css";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-creative";
import { CSSProperties, ReactNode } from "react";
import { SidebarNav, Header } from "@/widgets";
import { StarrySkyProvider } from "@/app/providers";
import { SidebarProvider } from "@/shared/ui/sidebar";
import { cookies } from "next/headers";
import { EXPANDED_SIDEBAR_WIDTH, COLLAPSED_SIDEBAR_WIDTH } from "@/shared/constants";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.paveltech.ru"),

  title: "Pavel Tech – Portfolio",

  icons: {
    icon: "/logo.svg",
  },

  openGraph: {
    title: "Pavel Tech – Portfolio",
    url: "https://www.paveltech.ru",
    siteName: "Pavel Tech",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/logo-preview.png",
        width: 1200,
        height: 630,
        alt: "Pavel Tech Portfolio",
      },
    ],
  },

  alternates: {
    canonical: "https://www.paveltech.ru",
  },
};

interface RootLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  const messages = await getMessages();
  const locale = (await params).locale;

  return (
    <html lang={locale} className={inter.variable}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <StarrySkyProvider>
            <Header />

            <SidebarProvider
              defaultOpen={defaultOpen}
              style={
                {
                  "--sidebar-width": `${EXPANDED_SIDEBAR_WIDTH}px`,
                  "--sidebar-width-icon": `${COLLAPSED_SIDEBAR_WIDTH}px`,
                } as CSSProperties
              }
            >
              <SidebarNav />
              {children}
            </SidebarProvider>
          </StarrySkyProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
