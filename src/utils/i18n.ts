import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import locale files
import enCommon from '../locales/en/common.json';
import enComponents from '../locales/en/components.json';
import ruCommon from '../locales/ru/common.json';
import ruComponents from '../locales/ru/components.json';

// Initialize i18next
i18n
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize i18next
  .init({
    debug: import.meta.env.DEV,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    resources: {
      en: {
        common: enCommon,
        components: enComponents,
      },
      ru: {
        common: ruCommon,
        components: ruComponents,
      },
    },
    defaultNS: 'common',
  });

export default i18n;

// Helper type for type-safe translations
export type TranslationKeys = {
  common: typeof enCommon;
  components: typeof enComponents;
};