// "use client";

// import i18n from "i18next";
// import LanguageDetector from "i18next-browser-languagedetector";
// import { initReactI18next } from "react-i18next";

// import en from "../../../../public/locales/en/en.json";
// import ru from "../../../../public/locales/ru/ru.json";

// const resources: Record<string, { translation: typeof en }> = {
//   en: { translation: en },
//   ru: { translation: ru },
// };

// void i18n
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     resources,
//     detection: {
//       order: ["localStorage", "navigator"],
//       caches: ["localStorage"],
//       lookupLocalStorage: "i18nextLng",
//     },
//     fallbackLng: "en",
//     interpolation: {
//       escapeValue: false,
//     },
//   });

// export default i18n;

// import { getRequestConfig } from "next-intl/server";
// import { notFound } from "next/navigation";
// import { locales } from "../../../../config";
// import { GetRequestConfigParams, RequestConfig } from "next-intl/server";

// type Locale = "en" | "ru";
// type Messages = Record<string, string>;

// export default getRequestConfig(
//   async ({ locale }: GetRequestConfigParams): Promise<RequestConfig> => {
//     if (!locales.includes(locale as Locale)) notFound();

//     return {
//       locale: locale as Locale,
//       messages: (await import(`../../../../public/locales/${locale}.json`)) as Messages,
//     };
//   },
// );
