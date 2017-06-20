const counterpart = require("counterpart");


let locales = ["cn", "en"];

let localeData = {};

locales.forEach(locale => {
    localeData[locale] = require("assets/locales/" + locale + ".json");
});

let registerLocale = (locale) => {

    counterpart.registerTranslations(locale, localeData[locale]);

    counterpart.setLocale(locale);
}

export {locales, registerLocale};
