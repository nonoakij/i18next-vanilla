import "./style.css";
import i18next from "i18next";

import ns1 from "../locales/en/ns1.json";
import ns2 from "../locales/en/ns2.json";
import ns3 from "../locales/en/ns3.json";
import ns4 from "../locales/en/ns4.json";
import ns5 from "../locales/en/ns5.json";
import ns6 from "../locales/en/ns6.json";
import ns7 from "../locales/en/ns7.json";
import ns8 from "../locales/en/ns8.json";
import ns9 from "../locales/en/ns9.json";
import ns10 from "../locales/en/ns10.json";
import ns11 from "../locales/en/ns11.json";
import ns12 from "../locales/en/ns12.json";
import ns13 from "../locales/en/ns13.json";
import ns14 from "../locales/en/ns14.json";
import ns15 from "../locales/en/ns15.json";
import ns16 from "../locales/en/ns16.json";
import ns17 from "../locales/en/ns17.json";
import ns18 from "../locales/en/ns18.json";
import ns19 from "../locales/en/ns19.json";
import ns20 from "../locales/en/ns20.json";
import ns21 from "../locales/en/ns21.json";
import ns22 from "../locales/en/ns22.json";
import ns23 from "../locales/en/ns23.json";
import ns24 from "../locales/en/ns24.json";
import ns25 from "../locales/en/ns25.json";
import ns26 from "../locales/en/ns26.json";
import ns27 from "../locales/en/ns27.json";
import ns28 from "../locales/en/ns28.json";
import ns29 from "../locales/en/ns29.json";
import ns30 from "../locales/en/ns30.json";
import ns31 from "../locales/en/ns31.json";
import ns32 from "../locales/en/ns32.json";
import ns33 from "../locales/en/ns33.json";
import ns34 from "../locales/en/ns34.json";
import ns35 from "../locales/en/ns35.json";
import ns36 from "../locales/en/ns36.json";
import ns37 from "../locales/en/ns37.json";
import ns38 from "../locales/en/ns38.json";
import ns39 from "../locales/en/ns39.json";
import ns40 from "../locales/en/ns40.json";
import ns41 from "../locales/en/ns41.json";
import ns42 from "../locales/en/ns42.json";
import ns43 from "../locales/en/ns43.json";
import ns44 from "../locales/en/ns44.json";
import ns45 from "../locales/en/ns45.json";
import ns46 from "../locales/en/ns46.json";
import ns47 from "../locales/en/ns47.json";

export const resources = {
  en: {
    ns1,
    ns2,
    ns3,
    ns4,
    ns5,
    ns6,
    ns7,
    ns8,
    ns9,
    ns10,
    ns11,
    ns12,
    ns13,
    ns14,
    ns15,
    ns16,
    ns17,
    ns18,
    ns19,
    ns20,
    ns21,
    ns22,
    ns23,
    ns24,
    ns25,
    ns26,
    ns27,
    ns28,
    ns29,
    ns30,
    ns31,
    ns32,
    ns33,
    ns34,
    ns35,
    ns36,
    ns37,
    ns38,
    ns39,
    ns40,
    ns41,
    ns42,
    ns43,
    ns44,
    ns45,
    ns46,
    ns47,
  },
} as const;

await i18next.init({
  lng: "en",
  resources,
});

document.getElementById("app")!.innerHTML = i18next.t("key", { ns: "ns1" });
