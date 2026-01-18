import type { Metadata } from "next";
import "@/app/styles/globals.css";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-creative";
import { CSSProperties, ReactNode } from "react";
import { SidebarNav, Header } from "@/widgets";
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
  title: "Pavel Tech",
  description: "Portfolio of Pavel",
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Pavel Tech – Портфолио Frontend-разработчика",
    description: "Искусство Frontend-разработки. Портфолио проектов на React/TypeScript.",
    url: "https://front-craft.ru",
    siteName: "Pavel Tech",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pavel Tech Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pavel Tech – Портфолио Frontend-разработчика",
    description: "Искусство Frontend-разработки. Портфолио проектов на React/TypeScript.",
    images: ["/og-image.png"],
  },
  metadataBase: new URL("https://front-craft.ru"),
  alternates: {
    canonical: "/",
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
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
