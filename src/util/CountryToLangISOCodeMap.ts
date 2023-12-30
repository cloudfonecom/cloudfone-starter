import { cache } from "react";
import get from "get-object-value";
const data = `
{
  "AD": [
    "ca"
  ],
  "AE": [
    "ar"
  ],
  "AF": [
    "ps",
    "uz",
    "tk"
  ],
  "AG": [
    "en"
  ],
  "AI": [
    "en"
  ],
  "AL": [
    "sq"
  ],
  "AM": [
    "hy",
    "ru"
  ],
  "AO": [
    "pt"
  ],
  "AQ": [],
  "AR": [
    "es",
    "gn"
  ],
  "AS": [
    "en",
    "sm"
  ],
  "AT": [
    "de"
  ],
  "AU": [
    "en"
  ],
  "AW": [
    "nl",
    "pa"
  ],
  "AX": [
    "sv"
  ],
  "AZ": [
    "az"
  ],
  "BA": [
    "bs",
    "hr",
    "sr"
  ],
  "BB": [
    "en"
  ],
  "BD": [
    "bn"
  ],
  "BE": [
    "nl",
    "fr",
    "de"
  ],
  "BF": [
    "fr",
    "ff"
  ],
  "BG": [
    "bg"
  ],
  "BH": [
    "ar"
  ],
  "BI": [
    "fr",
    "rn"
  ],
  "BJ": [
    "fr"
  ],
  "BL": [
    "fr"
  ],
  "BM": [
    "en"
  ],
  "BN": [
    "ms"
  ],
  "BO": [
    "es",
    "ay",
    "qu"
  ],
  "BQ": [
    "nl"
  ],
  "BR": [
    "pt"
  ],
  "BS": [
    "en"
  ],
  "BT": [
    "dz"
  ],
  "BV": [
    "no",
    "nb",
    "nn"
  ],
  "BW": [
    "en",
    "tn"
  ],
  "BY": [
    "be",
    "ru"
  ],
  "BZ": [
    "en",
    "es"
  ],
  "CA": [
    "en",
    "fr"
  ],
  "CC": [
    "en"
  ],
  "CD": [
    "fr",
    "ln",
    "kg",
    "sw",
    "lu"
  ],
  "CF": [
    "fr",
    "sg"
  ],
  "CG": [
    "fr",
    "ln"
  ],
  "CH": [
    "de",
    "fr",
    "it"
  ],
  "CI": [
    "fr"
  ],
  "CK": [
    "en"
  ],
  "CL": [
    "es"
  ],
  "CM": [
    "en",
    "fr"
  ],
  "CN": [
    "zh"
  ],
  "CO": [
    "es"
  ],
  "CR": [
    "es"
  ],
  "CU": [
    "es"
  ],
  "CV": [
    "pt"
  ],
  "CW": [
    "nl",
    "pa",
    "en"
  ],
  "CX": [
    "en"
  ],
  "CY": [
    "el",
    "tr",
    "hy"
  ],
  "CZ": [
    "cs"
  ],
  "DE": [
    "de"
  ],
  "DJ": [
    "fr",
    "ar"
  ],
  "DK": [
    "da"
  ],
  "DM": [
    "en"
  ],
  "DO": [
    "es"
  ],
  "DZ": [
    "ar"
  ],
  "EC": [
    "es"
  ],
  "EE": [
    "et"
  ],
  "EG": [
    "ar"
  ],
  "EH": [
    "es"
  ],
  "ER": [
    "ti",
    "ar",
    "en"
  ],
  "ES": [
    "es",
    "eu",
    "ca",
    "gl",
    "oc"
  ],
  "ET": [
    "am"
  ],
  "FI": [
    "fi",
    "sv"
  ],
  "FJ": [
    "en",
    "fj",
    "hi",
    "ur"
  ],
  "FK": [
    "en"
  ],
  "FM": [
    "en"
  ],
  "FO": [
    "fo"
  ],
  "FR": [
    "fr"
  ],
  "GA": [
    "fr"
  ],
  "GB": [
    "en"
  ],
  "GD": [
    "en"
  ],
  "GE": [
    "ka"
  ],
  "GF": [
    "fr"
  ],
  "GG": [
    "en",
    "fr"
  ],
  "GH": [
    "en"
  ],
  "GI": [
    "en"
  ],
  "GL": [
    "kl"
  ],
  "GM": [
    "en"
  ],
  "GN": [
    "fr",
    "ff"
  ],
  "GP": [
    "fr"
  ],
  "GQ": [
    "es",
    "fr"
  ],
  "GR": [
    "el"
  ],
  "GS": [
    "en"
  ],
  "GT": [
    "es"
  ],
  "GU": [
    "en",
    "ch",
    "es"
  ],
  "GW": [
    "pt"
  ],
  "GY": [
    "en"
  ],
  "HK": [
    "zh-hant",
    "zh",
    "en"
  ],
  "HM": [
    "en"
  ],
  "HN": [
    "es"
  ],
  "HR": [
    "hr"
  ],
  "HT": [
    "fr",
    "ht"
  ],
  "HU": [
    "hu"
  ],
  "ID": [
    "id"
  ],
  "IE": [
    "ga",
    "en"
  ],
  "IL": [
    "he",
    "ar"
  ],
  "IM": [
    "en",
    "gv"
  ],
  "IN": [
    "hi",
    "en"
  ],
  "IO": [
    "en"
  ],
  "IQ": [
    "ar",
    "ku"
  ],
  "IR": [
    "fa"
  ],
  "IS": [
    "is"
  ],
  "IT": [
    "it"
  ],
  "JE": [
    "en",
    "fr"
  ],
  "JM": [
    "en"
  ],
  "JO": [
    "ar"
  ],
  "JP": [
    "ja"
  ],
  "KE": [
    "en",
    "sw"
  ],
  "KG": [
    "ky",
    "ru"
  ],
  "KH": [
    "km"
  ],
  "KI": [
    "en"
  ],
  "KM": [
    "ar",
    "fr"
  ],
  "KN": [
    "en"
  ],
  "KP": [
    "ko"
  ],
  "KR": [
    "ko"
  ],
  "KW": [
    "ar"
  ],
  "KY": [
    "en"
  ],
  "KZ": [
    "kk",
    "ru"
  ],
  "LA": [
    "lo"
  ],
  "LB": [
    "ar",
    "fr"
  ],
  "LC": [
    "en"
  ],
  "LI": [
    "de"
  ],
  "LK": [
    "si",
    "ta"
  ],
  "LR": [
    "en"
  ],
  "LS": [
    "en",
    "st"
  ],
  "LT": [
    "lt"
  ],
  "LU": [
    "fr",
    "de",
    "lb"
  ],
  "LV": [
    "lv"
  ],
  "LY": [
    "ar"
  ],
  "MA": [
    "ar"
  ],
  "MC": [
    "fr"
  ],
  "MD": [
    "ro"
  ],
  "ME": [
    "sr",
    "bs",
    "sq",
    "hr"
  ],
  "MF": [
    "en",
    "fr",
    "nl"
  ],
  "MG": [
    "fr",
    "mg"
  ],
  "MH": [
    "en",
    "mh"
  ],
  "MK": [
    "mk"
  ],
  "ML": [
    "fr"
  ],
  "MM": [
    "my"
  ],
  "MN": [
    "mn"
  ],
  "MO": [
    "zh",
    "pt"
  ],
  "MP": [
    "en",
    "ch"
  ],
  "MQ": [
    "fr"
  ],
  "MR": [
    "ar"
  ],
  "MS": [
    "en"
  ],
  "MT": [
    "mt",
    "en"
  ],
  "MU": [
    "en"
  ],
  "MV": [
    "dv"
  ],
  "MW": [
    "en",
    "ny"
  ],
  "MX": [
    "es"
  ],
  "MY": [
    "ms"
  ],
  "MZ": [
    "pt"
  ],
  "NA": [
    "en",
    "af"
  ],
  "NC": [
    "fr"
  ],
  "NE": [
    "fr"
  ],
  "NF": [
    "en"
  ],
  "NG": [
    "en"
  ],
  "NI": [
    "es"
  ],
  "NL": [
    "nl"
  ],
  "NO": [
    "no",
    "nb",
    "nn"
  ],
  "NP": [
    "ne"
  ],
  "NR": [
    "en",
    "na"
  ],
  "NU": [
    "en"
  ],
  "NZ": [
    "en",
    "mi"
  ],
  "OM": [
    "ar"
  ],
  "PA": [
    "es"
  ],
  "PE": [
    "es"
  ],
  "PF": [
    "fr"
  ],
  "PG": [
    "en"
  ],
  "PH": [
    "en"
  ],
  "PK": [
    "en",
    "ur"
  ],
  "PL": [
    "pl"
  ],
  "PM": [
    "fr"
  ],
  "PN": [
    "en"
  ],
  "PR": [
    "es",
    "en"
  ],
  "PS": [
    "ar"
  ],
  "PT": [
    "pt"
  ],
  "PW": [
    "en"
  ],
  "PY": [
    "es",
    "gn"
  ],
  "QA": [
    "ar"
  ],
  "RE": [
    "fr"
  ],
  "RO": [
    "ro"
  ],
  "RS": [
    "sr"
  ],
  "RU": [
    "ru"
  ],
  "RW": [
    "rw",
    "en",
    "fr"
  ],
  "SA": [
    "ar"
  ],
  "SB": [
    "en"
  ],
  "SC": [
    "fr",
    "en"
  ],
  "SD": [
    "ar",
    "en"
  ],
  "SE": [
    "sv"
  ],
  "SG": [
    "en",
    "ms",
    "ta",
    "zh"
  ],
  "SH": [
    "en"
  ],
  "SI": [
    "sl"
  ],
  "SJ": [
    "no"
  ],
  "SK": [
    "sk"
  ],
  "SL": [
    "en"
  ],
  "SM": [
    "it"
  ],
  "SN": [
    "fr"
  ],
  "SO": [
    "so",
    "ar"
  ],
  "SR": [
    "nl"
  ],
  "SS": [
    "en"
  ],
  "ST": [
    "pt"
  ],
  "SV": [
    "es"
  ],
  "SX": [
    "nl",
    "en"
  ],
  "SY": [
    "ar"
  ],
  "SZ": [
    "en",
    "ss"
  ],
  "TC": [
    "en"
  ],
  "TD": [
    "fr",
    "ar"
  ],
  "TF": [
    "fr"
  ],
  "TG": [
    "fr"
  ],
  "TH": [
    "th"
  ],
  "TJ": [
    "tg",
    "ru"
  ],
  "TK": [
    "en"
  ],
  "TL": [
    "pt"
  ],
  "TM": [
    "tk",
    "ru"
  ],
  "TN": [
    "ar"
  ],
  "TO": [
    "en",
    "to"
  ],
  "TR": [
    "tr"
  ],
  "TT": [
    "en"
  ],
  "TV": [
    "en"
  ],
  "TW": [
    "zh-hant",
    "zh"
  ],
  "TZ": [
    "sw",
    "en"
  ],
  "UA": [
    "uk"
  ],
  "UG": [
    "en",
    "sw"
  ],
  "UM": [
    "en"
  ],
  "US": [
    "en"
  ],
  "UY": [
    "es"
  ],
  "UZ": [
    "uz",
    "ru"
  ],
  "VA": [
    "it",
    "la"
  ],
  "VC": [
    "en"
  ],
  "VE": [
    "es"
  ],
  "VG": [
    "en"
  ],
  "VI": [
    "en"
  ],
  "VN": [
    "vi"
  ],
  "VU": [
    "bi",
    "en",
    "fr"
  ],
  "WF": [
    "fr"
  ],
  "WS": [
    "sm",
    "en"
  ],
  "XK": [
    "sq",
    "sr"
  ],
  "YE": [
    "ar"
  ],
  "YT": [
    "fr"
  ],
  "ZA": [
    "af",
    "en",
    "nr",
    "st",
    "ss",
    "tn",
    "ts",
    "ve",
    "xh",
    "zu"
  ],
  "ZM": [
    "en"
  ],
  "ZW": [
    "en",
    "sn",
    "nd"
  ]
}`;

// `

const getCountryToLangISOCodeMap = cache((): { [key: string]: string } =>
  JSON.parse(data)
);

export const countryToLang = cache((key: string): string[] => {
  const arr = getCountryToLangISOCodeMap();
  return get(arr, [key.toUpperCase()], [key]);
});
