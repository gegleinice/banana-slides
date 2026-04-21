import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import zh from "./locales/zh.json";

// 注意：i18next init 只应在浏览器执行（需访问 localStorage / navigator）。
// 通过 providers 里的 "use client" + 顶层执行避免 SSR 调用。
if (!i18n.isInitialized) {
	i18n
		.use(LanguageDetector)
		.use(initReactI18next)
		.init({
			resources: {
				zh: { translation: zh },
				en: { translation: en },
			},
			fallbackLng: "zh",
			debug: false,
			interpolation: { escapeValue: false },
			detection: {
				order: ["localStorage", "navigator"],
				caches: ["localStorage"],
				lookupLocalStorage: "banana-slides-language",
			},
		});
}

export default i18n;
