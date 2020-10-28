import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";

import Level1T from '../levels/level1/locales/index.js';
import Level2T from '../levels/level2/locales/index.js';
import Level3T from '../levels/level3/locales/index.js';
import Level4T from '../levels/level4/locales/index.js';
import Resources from '../levels/resources/locales/index.js';

// the translations
const resources = {
  en:{},//default
  jp:{
    ...Level1T.jp,
    ...Level2T.jp,
    ...Level3T.jp,
    ...Level4T.jp,
    ...Resources.jp
  }
};

i18n
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",


    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });
export default i18n;
