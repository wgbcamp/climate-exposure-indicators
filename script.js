// global variables that are available to module import function and global functions
var view;
var locateAddress;
var camera;
var globeView;
var map;
var globeMap;
var highchartValue;
var chartInstance;
var chartEntries = [];
var generateChartResults;
var mapChartValue;
// var topology;

// highmaps specs
  // var highMapsTopology = async () => {
  //   topology = await fetch(
  //     'https://code.highcharts.com/mapdata/custom/world.topo.json'
  //   ).then(response => response.json());
  // }

  // highMapsTopology();

// highcharts specs
var gadm0 = [];
var gadm0Total = [
  {
    period: 1980,
    wExposed: 0,
    scenario: 'rcp4p5'
  },
  {
    period: 1980,
    wExposed: 0,
    scenario: 'rcp8p5'
  },
  {
    period: 2030,
    wExposed: 0,
    scenario: 'rcp4p5'
  },
  {
    period: 2030,
    wExposed: 0,
    scenario: 'rcp8p5'
  },
  {
    period: 2050,
    wExposed: 0,
    scenario: 'rcp4p5'
  },
  {
    period: 2050,
    wExposed: 0,
    scenario: 'rcp8p5'
  },
  {
    period: 2080,
    wExposed: 0,
    scenario: 'rcp4p5'
  },
  {
    period: 2080,
    wExposed: 0,
    scenario: 'rcp8p5'
  }
];
var gadm1 = [];
var gadm1Total = [
  {
    period: 1980,
    wExposed: 0,
    scenario: 'rcp4p5'
  },
  {
    period: 1980,
    wExposed: 0,
    scenario: 'rcp8p5'
  },
  {
    period: 2030,
    wExposed: 0,
    scenario: 'rcp4p5'
  },
  {
    period: 2030,
    wExposed: 0,
    scenario: 'rcp8p5'
  },
  {
    period: 2050,
    wExposed: 0,
    scenario: 'rcp4p5'
  },
  {
    period: 2050,
    wExposed: 0,
    scenario: 'rcp8p5'
  },
  {
    period: 2080,
    wExposed: 0,
    scenario: 'rcp4p5'
  },
  {
    period: 2080,
    wExposed: 0,
    scenario: 'rcp8p5'
  }
];

// ISO 3066 countries array
const countries = [
"Aruba",
"Afghanistan",
"Angola",
"Anguilla",
"Åland Islands",
"Albania",
"Andorra",
"United Arab Emirates",
"Argentina",
"Armenia",
"American Samoa",
"Antarctica",
"French Southern Territories",
"Antigua and Barbuda",
"Australia",
"Austria",
"Azerbaijan",
"Burundi",
"Belgium",
"Benin",
"Bonaire, Sint Eustatius and Saba",
"Burkina Faso",
"Bangladesh",
"Bulgaria",
"Bahrain",
"Bahamas",
"Bosnia and Herzegovina",
"Saint Barthélemy",
"Belarus",
"Belize",
"Bermuda",
"Bolivia, Plurinational State of",
"Brazil",
"Barbados",
"Brunei Darussalam",
"Bhutan",
"Bouvet Island",
"Botswana",
"Central African Republic",
"Canada",
"Cocos (Keeling) Islands",
"Switzerland",
"Chile",
"China",
"Côte d'Ivoire",
"Cameroon",
"Congo, the Democratic Republic of the",
"Congo",
"Cook Islands",
"Colombia",
"Comoros",
"Cape Verde",
"Costa Rica",
"Cuba",
"Curaçao",
"Christmas Island",
"Cayman Islands",
"Cyprus",
"Czech Republic",
"Germany",
"Djibouti",
"Dominica",
"Denmark",
"Dominican Republic",
"Algeria",
"Ecuador",
"Egypt",
"Eritrea",
"Western Sahara",
"Spain",
"Estonia",
"Ethiopia",
"Finland",
"Fiji",
"Falkland Islands (Malvinas)",
"France",
"Faroe Islands",
"Micronesia, Federated States of",
"Gabon",
"United Kingdom",
"Georgia",
"Guernsey",
"Ghana",
"Gibraltar",
"Guinea",
"Guadeloupe",
"Gambia",
"Guinea-Bissau",
"Equatorial Guinea",
"Greece",
"Grenada",
"Greenland",
"Guatemala",
"French Guiana",
"Guam",
"Guyana",
"Hong Kong",
"Heard Island and McDonald Islands",
"Honduras",
"Croatia",
"Haiti",
"Hungary",
"Indonesia",
"Isle of Man",
"India",
"British Indian Ocean Territory",
"Ireland",
"Iran, Islamic Republic of",
"Iraq",
"Iceland",
"Israel",
"Italy",
"Jamaica",
"Jersey",
"Jordan",
"Japan",
"Kazakhstan",
"Kenya",
"Kyrgyzstan",
"Cambodia",
"Kiribati",
"Saint Kitts and Nevis",
"Korea, Republic of",
"Kuwait",
"Lao People's Democratic Republic",
"Lebanon",
"Liberia",
"Libya",
"Saint Lucia",
"Liechtenstein",
"Sri Lanka",
"Lesotho",
"Lithuania",
"Luxembourg",
"Latvia",
"Macao",
"Saint Martin (French part)",
"Morocco",
"Monaco",
"Moldova, Republic of",
"Madagascar",
"Maldives",
"Mexico",
"Marshall Islands",
"Macedonia, the former Yugoslav Republic of",
"Mali",
"Malta",
"Myanmar",
"Montenegro",
"Mongolia",
"Northern Mariana Islands",
"Mozambique",
"Mauritania",
"Montserrat",
"Martinique",
"Mauritius",
"Malawi",
"Malaysia",
"Mayotte",
"Namibia",
"New Caledonia",
"Niger",
"Norfolk Island",
"Nigeria",
"Nicaragua",
"Niue",
"Netherlands",
"Norway",
"Nepal",
"Nauru",
"New Zealand",
"Oman",
"Pakistan",
"Panama",
"Pitcairn",
"Peru",
"Philippines",
"Palau",
"Papua New Guinea",
"Poland",
"Puerto Rico",
"Korea, Democratic People's Republic of",
"Portugal",
"Paraguay",
"Palestinian Territory, Occupied",
"French Polynesia",
"Qatar",
"Réunion",
"Romania",
"Russian Federation",
"Rwanda",
"Saudi Arabia",
"Sudan",
"Senegal",
"Singapore",
"South Georgia and the South Sandwich Islands",
"Saint Helena, Ascension and Tristan da Cunha",
"Svalbard and Jan Mayen",
"Solomon Islands",
"Sierra Leone",
"El Salvador",
"San Marino",
"Somalia",
"Saint Pierre and Miquelon",
"Serbia",
"South Sudan",
"Sao Tome and Principe",
"Suriname",
"Slovakia",
"Slovenia",
"Sweden",
"Swaziland",
"Sint Maarten (Dutch part)",
"Seychelles",
"Syrian Arab Republic",
"Turks and Caicos Islands",
"Chad",
"Togo",
"Thailand",
"Tajikistan",
"Tokelau",
"Turkmenistan",
"Timor-Leste",
"Tonga",
"Trinidad and Tobago",
"Tunisia",
"Turkey",
"Tuvalu",
"Taiwan, Province of China",
"Tanzania, United Republic of",
"Uganda",
"Ukraine",
"United States Minor Outlying Islands",
"Uruguay",
"United States",
"Uzbekistan",
"Holy See (Vatican City State)",
"Saint Vincent and the Grenadines",
"Venezuela, Bolivarian Republic of",
"Virgin Islands, British",
"Virgin Islands, U.S.",
"Viet Nam",
"Vanuatu",
"Wallis and Futuna",
"Samoa",
"Yemen",
"South Africa",
"Zambia",
"Zimbabwe"
];

// ISO 3066 country code array 
const isoCountries = [
  {"alpha2": "AD", "alpha3": "AND", "name": "Andorra"},
  {"alpha2": "AE", "alpha3": "ARE", "name": "United Arab Emirates"},
  {"alpha2": "AF", "alpha3": "AFG", "name": "Afghanistan"},
  {"alpha2": "AG", "alpha3": "ATG", "name": "Antigua and Barbuda"},
  {"alpha2": "AI", "alpha3": "AIA", "name": "Anguilla"},
  {"alpha2": "AL", "alpha3": "ALB", "name": "Albania"},
  {"alpha2": "AM", "alpha3": "ARM", "name": "Armenia"},
  {"alpha2": "AO", "alpha3": "AGO", "name": "Angola"},
  {"alpha2": "AQ", "alpha3": "ATA", "name": "Antarctica"},
  {"alpha2": "AR", "alpha3": "ARG", "name": "Argentina"},
  {"alpha2": "AS", "alpha3": "ASM", "name": "American Samoa"},
  {"alpha2": "AT", "alpha3": "AUT", "name": "Austria"},
  {"alpha2": "AU", "alpha3": "AUS", "name": "Australia"},
  {"alpha2": "AW", "alpha3": "ABW", "name": "Aruba"},
  {"alpha2": "AX", "alpha3": "ALA", "name": "Åland Islands"},
  {"alpha2": "AZ", "alpha3": "AZE", "name": "Azerbaijan"},
  {"alpha2": "BA", "alpha3": "BIH", "name": "Bosnia and Herzegovina"},
  {"alpha2": "BB", "alpha3": "BRB", "name": "Barbados"},
  {"alpha2": "BD", "alpha3": "BGD", "name": "Bangladesh"},
  {"alpha2": "BE", "alpha3": "BEL", "name": "Belgium"},
  {"alpha2": "BF", "alpha3": "BFA", "name": "Burkina Faso"},
  {"alpha2": "BG", "alpha3": "BGR", "name": "Bulgaria"},
  {"alpha2": "BH", "alpha3": "BHR", "name": "Bahrain"},
  {"alpha2": "BI", "alpha3": "BDI", "name": "Burundi"},
  {"alpha2": "BJ", "alpha3": "BEN", "name": "Benin"},
  {"alpha2": "BL", "alpha3": "BLM", "name": "Saint Barthélemy"},
  {"alpha2": "BM", "alpha3": "BMU", "name": "Bermuda"},
  {"alpha2": "BN", "alpha3": "BRN", "name": "Brunei Darussalam"},
  {"alpha2": "BO", "alpha3": "BOL", "name": "Bolivia (Plurinational State of)"},
  {"alpha2": "BQ", "alpha3": "BES", "name": "Bonaire, Sint Eustatius and Saba"},
  {"alpha2": "BR", "alpha3": "BRA", "name": "Brazil"},
  {"alpha2": "BS", "alpha3": "BHS", "name": "Bahamas"},
  {"alpha2": "BT", "alpha3": "BTN", "name": "Bhutan"},
  {"alpha2": "BV", "alpha3": "BVT", "name": "Bouvet Island"},
  {"alpha2": "BW", "alpha3": "BWA", "name": "Botswana"},
  {"alpha2": "BY", "alpha3": "BLR", "name": "Belarus"},
  {"alpha2": "BZ", "alpha3": "BLZ", "name": "Belize"},
  {"alpha2": "CA", "alpha3": "CAN", "name": "Canada"},
  {"alpha2": "CC", "alpha3": "CCK", "name": "Cocos (Keeling) Islands"},
  {"alpha2": "CD", "alpha3": "COD", "name": "Congo (Democratic Republic of the)"},
  {"alpha2": "CF", "alpha3": "CAF", "name": "Central African Republic"},
  {"alpha2": "CG", "alpha3": "COG", "name": "Congo"},
  {"alpha2": "CH", "alpha3": "CHE", "name": "Switzerland"},
  {"alpha2": "CI", "alpha3": "CIV", "name": "Côte d'Ivoire"},
  {"alpha2": "CK", "alpha3": "COK", "name": "Cook Islands"},
  {"alpha2": "CL", "alpha3": "CHL", "name": "Chile"},
  {"alpha2": "CM", "alpha3": "CMR", "name": "Cameroon"},
  {"alpha2": "CN", "alpha3": "CHN", "name": "China"},
  {"alpha2": "CO", "alpha3": "COL", "name": "Colombia"},
  {"alpha2": "CR", "alpha3": "CRI", "name": "Costa Rica"},
  {"alpha2": "CU", "alpha3": "CUB", "name": "Cuba"},
  {"alpha2": "CV", "alpha3": "CPV", "name": "Cabo Verde"},
  {"alpha2": "CW", "alpha3": "CUW", "name": "Curaçao"},
  {"alpha2": "CX", "alpha3": "CXR", "name": "Christmas Island"},
  {"alpha2": "CY", "alpha3": "CYP", "name": "Cyprus"},
  {"alpha2": "CZ", "alpha3": "CZE", "name": "Czechia"},
  {"alpha2": "DE", "alpha3": "DEU", "name": "Germany"},
  {"alpha2": "DJ", "alpha3": "DJI", "name": "Djibouti"},
  {"alpha2": "DK", "alpha3": "DNK", "name": "Denmark"},
  {"alpha2": "DM", "alpha3": "DMA", "name": "Dominica"},
  {"alpha2": "DO", "alpha3": "DOM", "name": "Dominican Republic"},
  {"alpha2": "DZ", "alpha3": "DZA", "name": "Algeria"},
  {"alpha2": "EC", "alpha3": "ECU", "name": "Ecuador"},
  {"alpha2": "EE", "alpha3": "EST", "name": "Estonia"},
  {"alpha2": "EG", "alpha3": "EGY", "name": "Egypt"},
  {"alpha2": "EH", "alpha3": "ESH", "name": "Western Sahara"},
  {"alpha2": "ER", "alpha3": "ERI", "name": "Eritrea"},
  {"alpha2": "ES", "alpha3": "ESP", "name": "Spain"},
  {"alpha2": "ET", "alpha3": "ETH", "name": "Ethiopia"},
  {"alpha2": "FI", "alpha3": "FIN", "name": "Finland"},
  {"alpha2": "FJ", "alpha3": "FJI", "name": "Fiji"},
  {"alpha2": "FM", "alpha3": "FSM", "name": "Micronesia (Federated States of)"},
  {"alpha2": "FO", "alpha3": "FRO", "name": "Faroe Islands"},
  {"alpha2": "FR", "alpha3": "FRA", "name": "France"},
  {"alpha2": "GA", "alpha3": "GAB", "name": "Gabon"},
  {"alpha2": "GB", "alpha3": "GBR", "name": "United Kingdom of Great Britain and Northern Ireland"},
  {"alpha2": "GD", "alpha3": "GRD", "name": "Grenada"},
  {"alpha2": "GE", "alpha3": "GEO", "name": "Georgia"},
  {"alpha2": "GF", "alpha3": "GUF", "name": "French Guiana"},
  {"alpha2": "GG", "alpha3": "GGY", "name": "Guernsey"},
  {"alpha2": "GH", "alpha3": "GHA", "name": "Ghana"},
  {"alpha2": "GI", "alpha3": "GIB", "name": "Gibraltar"},
  {"alpha2": "GL", "alpha3": "GRL", "name": "Greenland"},
  {"alpha2": "GM", "alpha3": "GMB", "name": "Gambia"},
  {"alpha2": "GN", "alpha3": "GIN", "name": "Guinea"},
  {"alpha2": "GP", "alpha3": "GLP", "name": "Guadeloupe"},
  {"alpha2": "GQ", "alpha3": "GNQ", "name": "Equatorial Guinea"},
  {"alpha2": "GR", "alpha3": "GRC", "name": "Greece"},
  {"alpha2": "GT", "alpha3": "GTM", "name": "Guatemala"},
  {"alpha2": "GU", "alpha3": "GUM", "name": "Guam"},
  {"alpha2": "GW", "alpha3": "GNB", "name": "Guinea-Bissau"},
  {"alpha2": "GY", "alpha3": "GUY", "name": "Guyana"},
  {"alpha2": "HK", "alpha3": "HKG", "name": "Hong Kong"},
  {"alpha2": "HM", "alpha3": "HMD", "name": "Heard Island and McDonald Islands"},
  {"alpha2": "HN", "alpha3": "HND", "name": "Honduras"},
  {"alpha2": "HR", "alpha3": "HRV", "name": "Croatia"},
  {"alpha2": "HT", "alpha3": "HTI", "name": "Haiti"},
  {"alpha2": "HU", "alpha3": "HUN", "name": "Hungary"},
  {"alpha2": "ID", "alpha3": "IDN", "name": "Indonesia"},
  {"alpha2": "IE", "alpha3": "IRL", "name": "Ireland"},
  {"alpha2": "IL", "alpha3": "ISR", "name": "Israel"},
  {"alpha2": "IM", "alpha3": "IMN", "name": "Isle of Man"},
  {"alpha2": "IN", "alpha3": "IND", "name": "India"},
  {"alpha2": "IO", "alpha3": "IOT", "name": "British Indian Ocean Territory"},
  {"alpha2": "IQ", "alpha3": "IRQ", "name": "Iraq"},
  {"alpha2": "IR", "alpha3": "IRN", "name": "Iran (Islamic Republic of)"},
  {"alpha2": "IS", "alpha3": "ISL", "name": "Iceland"},
  {"alpha2": "IT", "alpha3": "ITA", "name": "Italy"},
  {"alpha2": "JE", "alpha3": "JEY", "name": "Jersey"},
  {"alpha2": "JM", "alpha3": "JAM", "name": "Jamaica"},
  {"alpha2": "JO", "alpha3": "JOR", "name": "Jordan"},
  {"alpha2": "JP", "alpha3": "JPN", "name": "Japan"},
  {"alpha2": "KE", "alpha3": "KEN", "name": "Kenya"},
  {"alpha2": "KG", "alpha3": "KGZ", "name": "Kyrgyzstan"},
  {"alpha2": "KH", "alpha3": "KHM", "name": "Cambodia"},
  {"alpha2": "KI", "alpha3": "KIR", "name": "Kiribati"},
  {"alpha2": "KM", "alpha3": "COM", "name": "Comoros"},
  {"alpha2": "KN", "alpha3": "KNA", "name": "Saint Kitts and Nevis"},
  {"alpha2": "KP", "alpha3": "PRK", "name": "Korea (Democratic People's Republic of)"},
  {"alpha2": "KR", "alpha3": "KOR", "name": "Korea (Republic of)"},
  {"alpha2": "KW", "alpha3": "KWT", "name": "Kuwait"},
  {"alpha2": "KY", "alpha3": "CYM", "name": "Cayman Islands"},
  {"alpha2": "KZ", "alpha3": "KAZ", "name": "Kazakhstan"},
  {"alpha2": "LA", "alpha3": "LAO", "name": "Lao People's Democratic Republic"},
  {"alpha2": "LB", "alpha3": "LBN", "name": "Lebanon"},
  {"alpha2": "LC", "alpha3": "LCA", "name": "Saint Lucia"},
  {"alpha2": "LI", "alpha3": "LIE", "name": "Liechtenstein"},
  {"alpha2": "LK", "alpha3": "LKA", "name": "Sri Lanka"},
  {"alpha2": "LR", "alpha3": "LBR", "name": "Liberia"},
  {"alpha2": "LS", "alpha3": "LSO", "name": "Lesotho"},
  {"alpha2": "LT", "alpha3": "LTU", "name": "Lithuania"},
  {"alpha2": "LU", "alpha3": "LUX", "name": "Luxembourg"},
  {"alpha2": "LV", "alpha3": "LVA", "name": "Latvia"},
  {"alpha2": "LY", "alpha3": "LBY", "name": "Libya"},
  {"alpha2": "MA", "alpha3": "MAR", "name": "Morocco"},
  {"alpha2": "MC", "alpha3": "MCO", "name": "Monaco"},
  {"alpha2": "MD", "alpha3": "MDA", "name": "Moldova (Republic of)"},
  {"alpha2": "ME", "alpha3": "MNE", "name": "Montenegro"},
  {"alpha2": "MF", "alpha3": "MAF", "name": "Saint Martin (French part)"},
  {"alpha2": "MG", "alpha3": "MDG", "name": "Madagascar"},
  {"alpha2": "MH", "alpha3": "MHL", "name": "Marshall Islands"},
  {"alpha2": "MK", "alpha3": "MKD", "name": "North Macedonia"},
  {"alpha2": "ML", "alpha3": "MLI", "name": "Mali"},
  {"alpha2": "MM", "alpha3": "MMR", "name": "Myanmar"},
  {"alpha2": "MN", "alpha3": "MNG", "name": "Mongolia"},
  {"alpha2": "MO", "alpha3": "MAC", "name": "Macao"},
  {"alpha2": "MP", "alpha3": "MNP", "name": "Northern Mariana Islands"},
  {"alpha2": "MQ", "alpha3": "MTQ", "name": "Martinique"},
  {"alpha2": "MR", "alpha3": "MRT", "name": "Mauritania"},
  {"alpha2": "MS", "alpha3": "MSR", "name": "Montserrat"},
  {"alpha2": "MT", "alpha3": "MLT", "name": "Malta"},
  {"alpha2": "MU", "alpha3": "MUS", "name": "Mauritius"},
  {"alpha2": "MV", "alpha3": "MDV", "name": "Maldives"},
  {"alpha2": "MW", "alpha3": "MWI", "name": "Malawi"},
  {"alpha2": "MX", "alpha3": "MEX", "name": "Mexico"},
  {"alpha2": "MY", "alpha3": "MYS", "name": "Malaysia"},
  {"alpha2": "MZ", "alpha3": "MOZ", "name": "Mozambique"},
  {"alpha2": "NA", "alpha3": "NAM", "name": "Namibia"},
  {"alpha2": "NC", "alpha3": "NCL", "name": "New Caledonia"},
  {"alpha2": "NE", "alpha3": "NER", "name": "Niger"},
  {"alpha2": "NF", "alpha3": "NFK", "name": "Norfolk Island"},
  {"alpha2": "NG", "alpha3": "NGA", "name": "Nigeria"},
  {"alpha2": "NI", "alpha3": "NIC", "name": "Nicaragua"},
  {"alpha2": "NL", "alpha3": "NLD", "name": "Netherlands"},
  {"alpha2": "NO", "alpha3": "NOR", "name": "Norway"},
  {"alpha2": "NP", "alpha3": "NPL", "name": "Nepal"},
  {"alpha2": "NR", "alpha3": "NRU", "name": "Nauru"},
  {"alpha2": "NU", "alpha3": "NIU", "name": "Niue"},
  {"alpha2": "NZ", "alpha3": "NZL", "name": "New Zealand"},
  {"alpha2": "OM", "alpha3": "OMN", "name": "Oman"},
  {"alpha2": "PA", "alpha3": "PAN", "name": "Panama"},
  {"alpha2": "PE", "alpha3": "PER", "name": "Peru"},
  {"alpha2": "PF", "alpha3": "PYF", "name": "French Polynesia"},
  {"alpha2": "PG", "alpha3": "PNG", "name": "Papua New Guinea"},
  {"alpha2": "PH", "alpha3": "PHL", "name": "Philippines"},
  {"alpha2": "PK", "alpha3": "PAK", "name": "Pakistan"},
  {"alpha2": "PL", "alpha3": "POL", "name": "Poland"},
  {"alpha2": "PM", "alpha3": "SPM", "name": "Saint Pierre and Miquelon"},
  {"alpha2": "PN", "alpha3": "PCN", "name": "Pitcairn"},
  {"alpha2": "PR", "alpha3": "PRI", "name": "Puerto Rico"},
  {"alpha2": "PT", "alpha3": "PRT", "name": "Portugal"},
  {"alpha2": "PW", "alpha3": "PLW", "name": "Palau"},
  {"alpha2": "PY", "alpha3": "PRY", "name": "Paraguay"},
  {"alpha2": "QA", "alpha3": "QAT", "name": "Qatar"},
  {"alpha2": "RE", "alpha3": "REU", "name": "Réunion"},
  {"alpha2": "RO", "alpha3": "ROU", "name": "Romania"},
  {"alpha2": "RS", "alpha3": "SRB", "name": "Serbia"},
  {"alpha2": "RU", "alpha3": "RUS", "name": "Russian Federation"},
  {"alpha2": "RW", "alpha3": "RWA", "name": "Rwanda"},
  {"alpha2": "SA", "alpha3": "SAU", "name": "Saudi Arabia"},
  {"alpha2": "SB", "alpha3": "SLB", "name": "Solomon Islands"},
  {"alpha2": "SC", "alpha3": "SYC", "name": "Seychelles"},
  {"alpha2": "SD", "alpha3": "SDN", "name": "Sudan"},
  {"alpha2": "SE", "alpha3": "SWE", "name": "Sweden"},
  {"alpha2": "SG", "alpha3": "SGP", "name": "Singapore"},
  {"alpha2": "SH", "alpha3": "SHN", "name": "Saint Helena, Ascension and Tristan da Cunha"},
  {"alpha2": "SI", "alpha3": "SVN", "name": "Slovenia"},
  {"alpha2": "SJ", "alpha3": "SJM", "name": "Svalbard and Jan Mayen"},
  {"alpha2": "SK", "alpha3": "SVK", "name": "Slovakia"},
  {"alpha2": "SL", "alpha3": "SLE", "name": "Sierra Leone"},
  {"alpha2": "SM", "alpha3": "SMR", "name": "San Marino"},
  {"alpha2": "SN", "alpha3": "SEN", "name": "Senegal"},
  {"alpha2": "SO", "alpha3": "SOM", "name": "Somalia"},
  {"alpha2": "SR", "alpha3": "SUR", "name": "Suriname"},
  {"alpha2": "SS", "alpha3": "SSD", "name": "South Sudan"},
  {"alpha2": "ST", "alpha3": "STP", "name": "Sao Tome and Principe"},
  {"alpha2": "SV", "alpha3": "SLV", "name": "El Salvador"},
  {"alpha2": "SX", "alpha3": "SXM", "name": "Sint Maarten (Dutch part)"},
  {"alpha2": "SY", "alpha3": "SYR", "name": "Syrian Arab Republic"},
  {"alpha2": "SZ", "alpha3": "SWZ", "name": "Eswatini"},
  {"alpha2": "TC", "alpha3": "TCA", "name": "Turks and Caicos Islands"},
  {"alpha2": "TD", "alpha3": "TCD", "name": "Chad"},
  {"alpha2": "TF", "alpha3": "ATF", "name": "French Southern Territories"},
  {"alpha2": "TG", "alpha3": "TGO", "name": "Togo"},
  {"alpha2": "TH", "alpha3": "THA", "name": "Thailand"},
  {"alpha2": "TJ", "alpha3": "TJK", "name": "Tajikistan"},
  {"alpha2": "TK", "alpha3": "TKL", "name": "Tokelau"},
  {"alpha2": "TL", "alpha3": "TLS", "name": "Timor-Leste"},
  {"alpha2": "TM", "alpha3": "TKM", "name": "Turkmenistan"},
  {"alpha2": "TN", "alpha3": "TUN", "name": "Tunisia"},
  {"alpha2": "TO", "alpha3": "TON", "name": "Tonga"},
  {"alpha2": "TR", "alpha3": "TUR", "name": "Turkey"},
  {"alpha2": "TT", "alpha3": "TTO", "name": "Trinidad and Tobago"},
  {"alpha2": "TV", "alpha3": "TUV", "name": "Tuvalu"},
  {"alpha2": "TZ", "alpha3": "TZA", "name": "Tanzania, United Republic of"},
  {"alpha2": "UA", "alpha3": "UKR", "name": "Ukraine"},
  {"alpha2": "UG", "alpha3": "UGA", "name": "Uganda"},
  {"alpha2": "UM", "alpha3": "UMI", "name": "United States Minor Outlying Islands"},
  {"alpha2": "US", "alpha3": "USA", "name": "United States of America"},
  {"alpha2": "UY", "alpha3": "URY", "name": "Uruguay"},
  {"alpha2": "UZ", "alpha3": "UZB", "name": "Uzbekistan"},
  {"alpha2": "VA", "alpha3": "VAT", "name": "Holy See"},
  {"alpha2": "VC", "alpha3": "VCT", "name": "Saint Vincent and the Grenadines"},
  {"alpha2": "VE", "alpha3": "VEN", "name": "Venezuela (Bolivarian Republic of)"},
  {"alpha2": "VG", "alpha3": "VGB", "name": "Virgin Islands (British)"},
  {"alpha2": "VI", "alpha3": "VIR", "name": "Virgin Islands (U.S.)"},
  {"alpha2": "VN", "alpha3": "VNM", "name": "Viet Nam"},
  {"alpha2": "VU", "alpha3": "VUT", "name": "Vanuatu"},
  {"alpha2": "WF", "alpha3": "WLF", "name": "Wallis and Futuna"},
  {"alpha2": "WS", "alpha3": "WSM", "name": "Samoa"},
  {"alpha2": "YE", "alpha3": "YEM", "name": "Yemen"},
  {"alpha2": "YT", "alpha3": "MYT", "name": "Mayotte"},
  {"alpha2": "ZA", "alpha3": "ZAF", "name": "South Africa"},
  {"alpha2": "ZM", "alpha3": "ZMB", "name": "Zambia"},
  {"alpha2": "ZW", "alpha3": "ZWE", "name": "Zimbabwe"}
];

var geoJson;

var loadGeoJson = async () => {
  var getData = await fetch('./GADM_ADMIN1.json');
  geoJson = await getData.json();
}

loadGeoJson();

const scenarios = [
  {year: 1980, url: "https://tiles.arcgis.com/tiles/weJ1QsnbMYJlCHdG/arcgis/rest/services/riverine_flood_grid_people_historical_1980/VectorTileServer"},
  {year: 2030, url: "https://tiles.arcgis.com/tiles/weJ1QsnbMYJlCHdG/arcgis/rest/services/riverine_flood_grid_people_rcp4p5_2030/VectorTileServer"},
  {year: 2050, url: "https://tiles.arcgis.com/tiles/weJ1QsnbMYJlCHdG/arcgis/rest/services/riverine_flood_grid_people_rcp4p5_2050/VectorTileServer"},
  {year: 2080, url: "https://tiles.arcgis.com/tiles/weJ1QsnbMYJlCHdG/arcgis/rest/services/riverine_flood_grid_people_rcp4p5_2080/VectorTileServer"}
]

// import esri modules and define parameters
require([
  "esri/Map", 
  "esri/views/MapView", 
  "esri/layers/FeatureLayer", 
  "esri/views/SceneView",
  "esri/widgets/Legend",
  "esri/rest/locator",
  "esri/geometry/SpatialReference",
  "esri/core/reactiveUtils",
  "esri/layers/VectorTileLayer",
  "esri/widgets/Slider",
  "esri/Basemap"
], 
  (Map, MapView, FeatureLayer, SceneView, Legend, locator, SpatialReference, reactiveUtils, VectorTileLayer, Slider, Basemap) => {

// assign feature layer 
  // var layer = new FeatureLayer({
  //   // portalItem: {
  //   //   url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/Global_Hex_Grid_50km/FeatureServer/0"
  //   // }

  //   url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/Global_Hex_Grid_50km/FeatureServer/0"    
  // });
  
  var vtlayer = new VectorTileLayer({
    url: "https://tiles.arcgis.com/tiles/weJ1QsnbMYJlCHdG/arcgis/rest/services/riverine_flood_grid_people_historical_1980/VectorTileServer"
  });

  var globeVtLayer = new VectorTileLayer({
    url: "https://tiles.arcgis.com/tiles/weJ1QsnbMYJlCHdG/arcgis/rest/services/riverine_flood_grid_people_historical_1980/VectorTileServer"
  })

  const customBasemap = new Basemap({
    portalItem: {
      id: "a66bfb7dd3b14228bf7ba42b138fe2ea"
    }
  });

// assign map and add basemap and layer properties 
  map = new Map({
    basemap: 'dark-gray'
  });
  
  map.add(vtlayer);

// assign mapView and add viewpoint properties
  view = new MapView({
    container: "viewDiv",
    map: map,
    zoom: 2,
    center: [-38.9465, 7.775],
    constraints: {
      minZoom: 3,
      maxZoom: 10
    },
    spatialReference: {
      wkid: 3857,
      isWrappable: true
    }
  });

// remove esri UI elements from mapView
  view.ui.remove("zoom");

//
const minLat = -70;
const maxLat = 85;

reactiveUtils.when(() => view.stationary, () => {
  const center = view.center;
  const clampedLat = Math.max(Math.min(center.latitude, maxLat), minLat);

  if (clampedLat !== center.latitude) {
    view.center = {
      latitude: clampedLat,
      longitude: center.longitude
    }

    view.goTo({
      center: [center.longitude, clampedLat.latitude]
    });
  }
})

globeMap = new Map({
  basemap: "dark-gray"
});

// assign sceneView and add viewpoint properties
  globeView = new SceneView({

    map: globeMap,
    container: "sceneDiv",
    center: [-38.9465, 7.775],
    zoom: 4,
    constraints: {
     altitude: {
      min: 150000
     }
    },

  });

  // globeView.map.add(vtlayer);
  globeMap.add(globeVtLayer);


// remove esri UI elements from globeView (the previous controls were zoom in/out, toggle pan & rotate controls, reset map orientation)
globeView.ui.remove(["compass", "zoom", "pan", "navigation-toggle"]);

// slider 
const slider = new Slider({
  container: "sliderDiv",
  min: 1980,
  max: 2080,
  values: [1980],
  steps: [1980,2030,2050,2080],
  tickConfigs: [{
    mode: "position",
    values: [1980,2030,2050,2080],
    labelsVisible: true
  }],

  visibleElements: {
    rangeLabels: false
  }
})

reactiveUtils.watch(() => slider.values, (value) => {
    for (var i=0; i<scenarios.length; i++) {
      if (value == scenarios[i].year) {

        globeMap.remove(globeVtLayer);
        map.remove(vtlayer);

        vtlayer = new VectorTileLayer({
          url: scenarios[i].url
        });

        globeVtLayer = new VectorTileLayer({
          url: scenarios[i].url
        })

        updateThumbLabel(value);

        map.add(vtlayer);
        globeMap.add(globeVtLayer);
      }
    }
  }
);

//slider for 900px screens and above
const lgSlider = new Slider({
  container: "lgSliderDiv",
  min: 1980,
  max: 2080,
  values: [1980],
  steps: [1980,2030,2050,2080],
  tickConfigs: [{
    mode: "position",
    values: [1980,2030,2050,2080],
    labelsVisible: true
  }],
  visibleElements: {
    rangeLabels: false
  }
})

reactiveUtils.watch(() => lgSlider.values, (value) => {
    for (var i=0; i<scenarios.length; i++) {
      if (value == scenarios[i].year) {

        globeMap.remove(globeVtLayer);
        map.remove(vtlayer);

        vtlayer = new VectorTileLayer({
          url: scenarios[i].url
        });

        globeVtLayer = new VectorTileLayer({
          url: scenarios[i].url
        })

        updateThumbLabel(value);

        map.add(vtlayer);
        globeMap.add(globeVtLayer);
      }
    }
  }
);

//CHART VIEW MAP INSTANCES
// chartInstance = (longitude, latitude, position) => {
//   chartEntries.push(
//     new MapView({
//       container: `chartMapInstance${position}`,
//       map: map,
//       zoom: 2,
//       center: [longitude, latitude],
//       constraints: {
//         minZoom: 3,
//         maxZoom: 10
//       },
//       spatialReference: {
//         wkid: 3857,
//         isWrappable: true
//       }
//     })
//   )
// };

// locateAddress function 
locateAddress = (value) => {

  // if search icon was clicked, then assign locateAddress parameter to the value of searchField div
  if (value === "searchIcon") {
    value = document.getElementById("searchField").value;
  } else if (value === "smallWidthSearchIcon") {
    value = document.getElementById("smallWidthSearchField").value;
  } else if (value === "largeWidthSearchIcon") {
    value = document.getElementById("largeWidthSearchField").value;
  }

  // url to connect to esri Geocode Server
  var url = "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer";

  // parameters to send to esri Geocode Server
  var params = {

    // assign locateAddress function parameter to single line address property value
    address: {
      "SingleLine": value
    },

    // only retrieve one location result
    maxLocations: 1
  }

  // if locateAddress function parameter is not blank, then run addressToLocations method
  if (value !== "") {
    locator.addressToLocations(url, params)
      .then((result) => {
      if (result.length) {
        document.activeElement.blur();
        var location = result[0].location;

        // apply addressToLocations response to mapView viewpoint
        view.goTo({
          center: [location.longitude, location.latitude],
          zoom: 3
        });

        // apply addressToLocations response to sceneView viewpoint
        var setZoom = 4;

        if (globeView.zoom > 4) {
          setZoom = globeView.zoom;
        }

        globeView.goTo({
          camera: {
            position: [
              location.longitude,
              location.latitude,
              50000
            ]
          },
          center: [location.longitude, location.latitude],
          zoom: setZoom
        })
      } else {

        // display browser alert if no result was contained in addressToLocations response
        alert("Not found.")
      }
    })
  }
}

//GENERATE CHART RESULTS
 generateChartResults = (value, position) => {

  document.activeElement.blur();

  var url = "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer";

  // parameters to send to esri Geocode Server
  var params = {
    // assign locateAddress function parameter to single line address property value
    address: {
      "SingleLine": value
    },
    // only retrieve one location result
    maxLocations: 1,
    outFields: ["CountryCode"]
  }

  locator.addressToLocations(url, params)
  .then((result) => {
    if (result.length) {

      console.log(result[0]);
      var countryCode = result[0].attributes.CountryCode;
      var location = result[0].location;
      // chartInstance(location.longitude, location.latitude, position);

      console.log(`Country code: ${countryCode}`);

      //get country name from esri's servers using ISO 3 country code
      const worldCountriesURL = `https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/World_Countries/FeatureServer/0/query?where=ISO_CC='${countryCode}'&outFields=COUNTRY&f=json`;
      fetch(worldCountriesURL)
        .then(response => response.json())
          .then(data => {
            var chartMapTitle = document.getElementById(`chartMapTitle${position}`);
            chartMapTitle.innerHTML = data.features[0].attributes.COUNTRY;
            console.log(data.features[0].attributes.COUNTRY)
          })


      async function fetchAllRecords(customQueryString, name, customPosition) {

        const whereClause = `country_abr='${countryCode}' AND Admin_Filter IN ('gadm0', 'gadm1')`;
        var queryString = `where=${encodeURIComponent(whereClause)}`;
        var limit = 1000;
        var offset = 0;
        var allValues = [];
        var hasMore = true;

        if (customQueryString) {
          document.getElementById(`chartMapTitle${position}`).innerHTML = name;
          queryString = customQueryString;
        }

        while (hasMore) {

          //reset gadm#Total exposure values
          for (var i = 0; i < gadm0Total.length; i++) {
            gadm0Total[i].wExposed = 0;
          }
          for (var i = 0; i < gadm1Total.length; i++) {
            gadm1Total[i].wExposed = 0;
          }

          //reset gadm# arrays
          gadm0 = [];
          gadm1 = [];

          //assign mapChartArray
          // var mapChartArray = [];

          //SQL query
          const url = `https://services9.arcgis.com/weJ1QsnbMYJlCHdG/arcgis/rest/services/Floods_riverine_people_all/FeatureServer/0/query?${queryString}&outFields=*&f=json&resultRecordCount=${limit}&resultOffset=${offset}`;
          const result = await fetch(url);
          var jsonResult = await result.json();
          
          //gather all values and sort into appropriate arrays
          allValues = allValues.concat(jsonResult.features);
          if (jsonResult.features.length < limit) {
            hasMore = false;
            console.log("allValues:");
            console.log(allValues);

            //look through the allValues data, update gadm# array objects with sums
            for (var i=0; i<allValues.length; i++) {
              if (allValues[i].attributes.Admin_Filter == "gadm0") {
                gadm0 = gadm0.concat(allValues[i]);
                
                for (var a=0; a<gadm0Total.length; a++) {
                  if (allValues[i].attributes.period == gadm0Total[a].period) {
                    if (allValues[i].attributes.scenario == gadm0Total[a].scenario) {
                      gadm0Total[a].wExposed = gadm0Total[a].wExposed + allValues[i].attributes.wExposed;
                    }
                  }
                }
                
              } else if (allValues[i].attributes.Admin_Filter == "gadm1") {
                gadm1 = gadm1.concat(allValues[i]);

                for (var a=0; a<gadm1Total.length; a++) {
                  if (allValues[i].attributes.period == gadm1Total[a].period) {
                    if (allValues[i].attributes.scenario == gadm1Total[a].scenario) {
                      gadm1Total[a].wExposed = gadm1Total[a].wExposed + allValues[i].attributes.wExposed;
                    }
                  }
                }
              }
            }

            console.log("gadm0:");
            console.log(gadm0);

            console.log("gadm0Total:");
            console.log(gadm0Total);

            console.log("gadm1:");
            console.log(gadm1);

            console.log("gadm1Total:");
            console.log(gadm1Total);

            //set series array to blank values
            var seriesArray = [{
                name: 'rcp4p5',
                data: []
              },
              {
                name: 'rcp8p5',
                data: []
              }
            ];

            // convert long data format to work in highcharts and push into seriesArray

            // if customQueryString is specified, use gadm1 instead of gadm0
            if (customQueryString) {
              for (var i = 0; i < gadm1Total.length; i++) {
                for (var a = 0; a < seriesArray.length; a++) {
                  if (gadm1Total[i].scenario == seriesArray[a].name) {
                    seriesArray[a].data.push(gadm1Total[i].wExposed);
                  }
                }
              }
            } else {
              for (var i = 0; i < gadm0Total.length; i++) {
                for (var a = 0; a < seriesArray.length; a++) {
                  if (gadm0Total[i].scenario == seriesArray[a].name) {
                    seriesArray[a].data.push(gadm0Total[i].wExposed);
                  }
                }
              }
            }

            //rename the scenarios in the seriesArray
            for (var i = 0; i < seriesArray.length; i++) {
              if (seriesArray[i].name == 'rcp4p5') {
                seriesArray[i].name = 'Disorderly';
              }
              if (seriesArray[i].name == 'rcp8p5') {
                seriesArray[i].name = 'Hot House'
              }
            }
            
            console.log('seriesArray: ');
            console.log(seriesArray);

            //initialize highcharts
            if (customQueryString) {
              position = customPosition;
            }
              highchartValue = Highcharts.chart(`highchartsInstance${position}`, {
                chart: {
                  type: 'line'
                },
                title: {
                  text: 'Exposure to Riverine Flooding'
                },
                xAxis: {
                  title: {
                    text: "period"
                  },
                  categories: [1980, 2030, 2050, 2080]
                },
                yAxis: {
                  title: {
                    text: "Population count"
                  }
                },
                series: seriesArray,
                colors: ['#658D1B', '#910048']
              })

              // DEFAULT BEHAVIOR to be set with custom/world as the geojson
              // users can use this to pick a country from interactive world map
              // at the start
              //mapChartArray is already set to blank values at the start this function above

              //push an array containing 2 character iso country code values 
              // and associated gadm# wExposed values into the mapChartArray
              // for (var i = 0; i < gadm1.length; i++) {
              //   for (var a = 0; a < isoCountries.length; a++) {
              //     if (gadm1[i].attributes.country_abr == isoCountries[a].alpha3) {
              //       mapChartArray.push([isoCountries[a].alpha2.toLocaleLowerCase(), gadm1[i].attributes.wExposed]);
              //       // break;
              //     }
              //   }
              // }

              // THIS FUNCTION WILL BE USED TO TRANSITION FROM WORLD MAP
              // TO STA GEOJSON
            // function test2(value) {
            //   //extract geojson data that is relevant to the selected country
            //   console.log(value);
            //   var regionalGeoJson = {
            //     type: "FeatureCollection",
            //     features: [

            //     ]
            //   };
            //   for (var i = 0; i < geoJson.features.length; i++) {
            //     if (geoJson.features[i].properties.GID_0 == value) {
            //       regionalGeoJson.features.push(geoJson.features[i]);
            //     }
            //   }

            //   //extract series data that is relevant to the selected country
            //   var regionalData = [];
            //   for (var i = 0; i < gadm1.length; i++) {
            //     if (value == gadm1[i].attributes.country_abr) {
            //       regionalData.push([gadm1[i].attributes.NAME_1, gadm1[i].attributes.wExposed]);
            //     }
            //   }

            //   //update map with new geojson and data array
            //   mapChartValue.update({
            //     series: [{
            //       type: 'map',
            //       mapData: regionalGeoJson,
            //       data: regionalData,
            //       joinBy: ['NAME_1', 0],
            //       keys: ['NAME_1', 'value'],
            //       point: {
            //         events: {
            //           click: function () {

            //           }
            //         }
            //       },
            //     }]
            //   }, false);

            //   mapChartValue.mapView.fitToBounds();
            //   mapChartValue.redraw();
            // }

          if (!customQueryString) {

            //extract geojson data that is relevant to the selected country
            var regionalGeoJson = {
                type: "FeatureCollection",
                features: [

                ]
              };
              for (var i = 0; i < geoJson.features.length; i++) {
                if (geoJson.features[i].properties.GID_0 == countryCode) {
                  regionalGeoJson.features.push(geoJson.features[i]);
                }
              }

              //extract series data that is relevant to the selected country
              var regionalData = []; 
              for (var i = 0; i < gadm1.length; i++) {
                var existence = false;
                if (countryCode == gadm1[i].attributes.country_abr) {
                  for (var a = 0; a < regionalData.length; a++) {
                    if (regionalData[a][0] == gadm1[i].attributes.NAME_1) {
                      existence = true;
                      regionalData[a][1] = regionalData[a][1] + gadm1[i].attributes.wExposed;
                      break;
                    }
                  }
                  if (existence == false) {
                    regionalData.push([gadm1[i].attributes.NAME_1, gadm1[i].attributes.wExposed]);
                  }
                }
              }

            //initialize highmaps
            console.log("YES")
            console.log(regionalData);
            console.log(regionalGeoJson);
            mapChartValue = Highcharts.mapChart(`chloroplethInstance${position}`, {
              title: {
                text: null
              },
              mapNavigation: {
                enabled: true,
                enableDoubleClickZoomTo: false
              },
              custom: {
                mapIndex: position
              },
              tooltip: {
                formatter: function () {
                  return `<b>${this.point.NAME_1}</b>`;
                },
              },
              legend: {
                enabled: false
              },
              series: [{
                name: "Population count",
                type: 'map',
                mapData: regionalGeoJson,
                data: regionalData,
                joinBy: ['NAME_1', 0],
                keys: ['NAME_1', 'value'],
                point: {
                  events:  {
                    click: function () {
                      loadRegion(this.series.chart.options.custom.mapIndex, this.point.NAME_1)  
                    }
                  }
                    // click: loadRegion(this.series.chart.options.custom.mapIndex, this.point.NAME_1)  
                    // click: console.log(this.series.chart.options)
                },
                color: '#0375BD',
                states: {
                  hover: {
                    color: '#FF8200'
                  }
                },
              }],
            });
          }

            // load the gadm1 information from the selected region in the map information
            // into the line chart
            function loadRegion(position, name) {

              fetchAllRecords(`where=${encodeURIComponent(`NAME_1='${name}' AND Admin_Filter IN ('gadm1')`)}`, name, position);

            }
            

            // console.log("data for map");
            // console.log(mapChartArray);

            // DEFAULT BEHAVIOR INITIALIZATION NEEDS TO BE MOVED
            // mapChartValue = Highcharts.mapChart(`chloroplethInstance${position}`, {
            //   chart: {
            //     map: 'custom/world'
            //   },
            //   title: {
            //     text: null
            //   },
            //   mapNavigation: {
            //     enabled: true,
            //     enableDoubleClickZoomTo: false
            //   },
            //   series: [{
            //     data: mapChartArray,
            //     point: {
            //       events: {
            //         click: function () {
            //           console.log(mapChartValue.series[0].options.custom.mapIndex);
            //           test2(this.properties?.['iso-a3']);
            //         }
            //       }
            //     },
            //     custom: {
            //       mapIndex: position
            //     },
            //     states: {
            //       hover: {
            //           color: '#BADA55'
            //       }
            //     },
            //   }],
              
            // });
          } else {
            offset += limit;
          }
        }

       
      }
      fetchAllRecords();  
    } 
  })


}



});

// switchMapChart function toggles between map and chart views
const switchMapChart = () => {

  const div = document.getElementById("switchIcon");

  if (div.classList.contains("fa-globe")) {
    div.classList.replace("fa-globe", "fa-chart-simple")
  } else {
    div.classList.replace("fa-chart-simple", "fa-globe")
  }
}

// showCountryList function toggles the state of the countrySelector div

var countryList = false;
const showCountryList = () => {

    const div = document.getElementById("countryResults");

    for (var i=0; i<countries.length; i++) {
    const node = document.createElement("div");
    var divContent = `<div class="countryStyle" id="${countries[i]}" onclick="locateAddress(this.id); deactivateSmallSearch(); fillInputWithResult(this.innerHTML);" onkeydown="if(event.key === 'Enter'){ locateAddress(this.id); }" tabindex="0">${countries[i]}</div>`;
    node.innerHTML = divContent;
    div.appendChild(node);
  }
}

// filters the country list based on user input onkeyup
const filterCountryList = (value) => {
  const div = document.getElementById("countryResults");
  div.innerHTML = '';
  for (var i=0; i< countries.length; i++) {
    if (countries[i].toLowerCase().includes(value.toLowerCase())) {
      const node = document.createElement("div");
      var divContent = `<div class="countryStyle" id="${countries[i]}" onclick="locateAddress(this.id); deactivateSmallSearch(); fillInputWithResult(this.innerHTML);" onkeydown="if(event.key === 'Enter'){ locateAddress(this.id); }" tabindex="0">${countries[i]}</div>`;
      node.innerHTML = divContent;
      div.appendChild(node);
    }
  }
}

// fill the input field text of the search bars when user selects a country results item
const fillInputWithResult = (value) => {
  const searchFields = document.querySelectorAll('input.smallWidthSearchField, input.searchBarSearchField');
  for (var i=0; i<searchFields.length; i++) {
    searchFields[i].value = value;
    console.log(searchFields[i]);
  }
}


// switchView function toggles between mapView and sceneView div z-index
const switchView = () => {

  const div = document.getElementById("view");
  const view = document.getElementById("viewDiv");
  const scene = document.getElementById("sceneDiv");

  if (div.innerHTML === "3D") {
    div.innerHTML = "2D";
    view.style.zIndex = -1;
    scene.style.zIndex = 0;
  } else {
    div.innerHTML = "3D";
    view.style.zIndex = 0;
    scene.style.zIndex = -1;
  }
}

// orients camera north
const orientNorth = () => {

  view.goTo({
    rotation: 0
  });

  globeView.goTo({
    heading: 0
  })
}

// when slider is moved, update the value of the thumb label
const updateThumbLabel = (value) => {
  document.getElementById("sliderThumbLabel").innerHTML = value;
}

// when a data control is clicked, remove or add class
var bgStatus = true;
const toggleData = (value) => {
  var list = document.querySelectorAll('div.sliderControls, div.scenarioDiv');
  var background = document.getElementById('dataOptionsContainer');
  var elementVisible = false;
 
  for (var i=0; i<list.length; i++){
    if (list[i].classList.contains(value) && !list[i].classList.contains('unfadeDataButtons')) {
      list[i].classList.add('unfadeDataButtons');
      list[i].style.pointerEvents = 'auto';
      list[i].classList.remove('fadeDataButtons');
      elementVisible = true;
    } else if (list[i].classList.contains(value) && list[i].classList.contains('unfadeDataButtons')) {
      list[i].classList.add('fadeDataButtons');
      list[i].style.pointerEvents = 'none';
      list[i].classList.remove('unfadeDataButtons');
    } else if (!list[i].classList.contains(value) && list[i].classList.contains('unfadeDataButtons')) {
      list[i].classList.add('fadeDataButtons');
      list[i].style.pointerEvents = 'none';
      list[i].classList.remove('unfadeDataButtons');
    }
  }

  if (elementVisible == false) {
    background.classList.add('hideDataControls');
    background.classList.remove('animateDataControls');
  } else {
    background.classList.add('animateDataControls');
    background.classList.remove('hideDataControls');
  }
}

// toggleScenario
const applyScenario = (value) => {
  var list = document.querySelectorAll('div.scenario');
  for (var i=0; i<list.length; i++) {
    if (list[i].classList.contains('activeScenario')) {
      list[i].classList.remove('activeScenario');
    }
    if (list[i].classList.contains(value)) {
      list[i].classList.add('activeScenario');
    }
  }
}

// toggle between map and chart views on click
const toggleMapChart = (value) => {
  var list = document.querySelectorAll('div.cmID');
  var chartView = document.getElementById('chartView');
  var chartDiv = document.getElementById('chartDiv');

  for (var i=0; i<list.length; i++) {
    if ((list[i].classList.contains('selectedButton') 
      || list[i].classList.contains('defaultSelectedButton'))
       && list[i].id !== value) {
      for (var a=0; a<list.length; a++) {
        if (list[a].classList.contains('defaultSelectedButton')) {
          list[a].classList.remove('defaultSelectedButton');
        } else {
          list[a].classList.toggle('selectedButton');
        }
        
      }
    }
  }

  if (value == 'chartDiv' && chartDiv.classList.contains('selectedButton')) {
    chartView.classList.add('presentView');
    chartView.classList.remove('concealView');
  } else if (chartView.classList.contains('presentView')) {
    chartView.classList.add('concealView');
    chartView.classList.remove('presentView')
  }
}

// toggles sidebar that contain hazards and exposures
const toggleSidebar = () => {
  var sidebar = document.getElementById('sidebar');
  var dataControls = document.getElementById('dataControls');
  var dataOptionsContainer = document.getElementById('dataOptionsContainer');
  var dataDivs = document.querySelectorAll('div.scenario, div.sliderControls');
  const searchSideBar = document.getElementById('searchSidebar');

  if (!sidebar.classList.contains('enableSidebar')) {
    sidebar.classList.add('enableSidebar');
    sidebar.classList.remove('disableSidebar', 'defaultSidebar');
    dataControls.classList.add('disableDataControls');
    dataControls.classList.remove('enableDataControls');
   
    
    if (dataOptionsContainer.classList.contains('animateDataControls')) {
      dataOptionsContainer.classList.add('removeDataControlsAfterAnimate');
    } else {
      dataOptionsContainer.classList.add('removeDataControlsWithoutAnimate');
      dataOptionsContainer.classList.remove('hideDataControls');
    }
    dataOptionsContainer.classList.remove('animateDataControls');
    
    for (var i=0; i<dataDivs.length; i++) {
      if (dataDivs[i].id == 'sliderControls') {
        if (dataDivs[i].classList.contains('unfadeDataButtons')) {
          dataDivs[i].classList.add('disableDataControls');
        }
      } else {
        dataDivs[i].classList.add('disableDataControls');
      }
    }
  } else {
    sidebar.classList.add('disableSidebar');
    sidebar.classList.remove('enableSidebar');
    dataControls.classList.add('enableDataControls');
    dataControls.classList.remove('disableDataControls');
    // dataOptionsContainer.classList.add('enableDataControls');
    // dataOptionsContainer.classList.remove('removeDataControls');
    if (dataOptionsContainer.classList.contains('removeDataControlsAfterAnimate')) {
      dataOptionsContainer.classList.add('animateDataControls');
    } else {

    }
    dataOptionsContainer.classList.remove('removeDataControlsAfterAnimate');
    dataOptionsContainer.classList.remove('removeDataControlsWithoutAnimate');

    for (var i=0; i<dataDivs.length; i++) {
      dataDivs[i].classList.remove('disableDataControls');
    }
  }

  //resets the state of the hazards and exposures sidebars
  var riskFactor = document.querySelectorAll('div.riskFactorChoiceContainer, div.riskFactorTitleContainer');
  for (var i=0; i<riskFactor.length; i++) {
    riskFactor[i].classList.remove('fadeDataButtons');
    riskFactor[i].classList.add('unfadeDataButtons');
  }
  var hazardsSidebar = document.getElementById('hazardsSidebar');
  if (hazardsSidebar.classList.contains('enableSidebar')) {
    hazardsSidebar.classList.remove('enableSidebar');
    hazardsSidebar.classList.add('disableSidebar');
  }
  var exposuresSidebar = document.getElementById('exposuresSidebar');
  if (exposuresSidebar.classList.contains('enableSidebar')) {
    exposuresSidebar.classList.remove('enableSidebar');
    exposuresSidebar.classList.add('disableSidebar');
  }

  if (searchSideBar.classList.contains('enableSidebar')) {
    searchSideBar.classList.add('disableSidebar');
    searchSideBar.classList.remove('enableSidebar');
  }

}

//toggles risk factor sidebars
const toggleRiskFactorSidebar = (type, value) => {
  var riskFactorSidebar = document.getElementById(type);
  var sidebar = document.getElementById('sidebar');
  var dataDivs = document.querySelectorAll('div.scenario, div.sliderControls');
  var dataOptionsContainer = document.getElementById('dataOptionsContainer');
  if (riskFactorSidebar.classList.contains('enableSidebar')) {
    riskFactorSidebar.classList.add('disableSidebar');
    riskFactorSidebar.classList.remove('enableSidebar');
    sidebar.classList.remove('enableSidebar');
    sidebar.classList.add('disableSidebar');
  } else {
    riskFactorSidebar.classList.add('enableSidebar');
    riskFactorSidebar.classList.remove('defaultSidebar');
    riskFactorSidebar.classList.remove('disableSidebar');
  }
  var riskFactor = document.querySelectorAll('div.riskFactorChoiceContainer, div.riskFactorTitleContainer');
  for (var i=0; i<riskFactor.length; i++) {
    if (riskFactor[i].classList.contains('unfadeDataButtons')) {
      riskFactor[i].classList.remove('unfadeDataButtons');
      riskFactor[i].classList.add('fadeDataButtons');
    }
  }
  var dataControls = document.getElementById('dataControls');
  if (value == 'exit') {
    dataControls.classList.add('enableDataControls');
    dataControls.classList.remove('disableDataControls');

    if (dataOptionsContainer.classList.contains('removeDataControlsAfterAnimate')) {
      dataOptionsContainer.classList.add('animateDataControls');
    }
    dataOptionsContainer.classList.remove('removeDataControlsWithoutAnimate');
    dataOptionsContainer.classList.remove('removeDataControlsAfterAnimate');

   

    for (var i=0; i<dataDivs.length; i++) {
        if (dataDivs[i].classList.contains('disableDataControls')) {
          dataDivs[i].classList.remove('disableDataControls');
        }
    }
  }

  if (searchButtonContainer.classList.contains('selectedButton')) {
    searchButtonContainer.classList.add('removeSelectedButton');
    searchButtonContainer.classList.remove('selectedButton');
  } 
}

//toggle search side bar
const toggleSearchBar = () => {
  const searchSideBar = document.getElementById('searchSidebar');

  var sidebar = document.getElementById('sidebar');
  var dataControls = document.getElementById('dataControls');
  var dataOptionsContainer = document.getElementById('dataOptionsContainer');
  var dataDivs = document.querySelectorAll('div.scenario, div.sliderControls');

  var searchButtonContainer = document.getElementById('searchButtonContainer');

  if (!searchSideBar.classList.contains('enableSidebar')) {
    searchSideBar.classList.add('enableSidebar');
    searchSideBar.classList.remove('disableSidebar');
    searchSideBar.classList.remove('defaultSidebar');

    dataControls.classList.add('disableDataControls');
    dataControls.classList.remove('enableDataControls');

    if (dataOptionsContainer.classList.contains('animateDataControls')) {
    dataOptionsContainer.classList.add('removeDataControlsAfterAnimate');
    } else {
      dataOptionsContainer.classList.add('removeDataControlsWithoutAnimate');
      dataOptionsContainer.classList.remove('hideDataControls');
    }
    dataOptionsContainer.classList.remove('animateDataControls');

  } else {
    searchSideBar.classList.add('disableSidebar');
    searchSideBar.classList.remove('enableSidebar');
    searchSideBar.classList.remove('defaultSidebar');

    dataControls.classList.add('enableDataControls');
    dataControls.classList.remove('disableDataControls');

    if (dataOptionsContainer.classList.contains('removeDataControlsAfterAnimate')) {
      dataOptionsContainer.classList.add('animateDataControls');
    } else {

    }
    dataOptionsContainer.classList.remove('removeDataControlsAfterAnimate');
    dataOptionsContainer.classList.remove('removeDataControlsWithoutAnimate');

  }

  for (var i=0; i<dataDivs.length; i++) {
    if (dataDivs[i].classList.contains('disableDataControls')) {
      dataDivs[i].classList.remove('disableDataControls');
    }
  }

  // if (sidebar.classList.contains('enableSidebar')) {
  //   sidebar.classList.add('disableSidebar');
  //   sidebar.classList.remove('enableSidebar');
  // }

  var hazardsSidebar = document.getElementById('hazardsSidebar');
  if (hazardsSidebar.classList.contains('enableSidebar')) {
    hazardsSidebar.classList.remove('enableSidebar');
    hazardsSidebar.classList.add('disableSidebar');
  }
  var exposuresSidebar = document.getElementById('exposuresSidebar');
  if (exposuresSidebar.classList.contains('enableSidebar')) {
    exposuresSidebar.classList.remove('enableSidebar');
    exposuresSidebar.classList.add('disableSidebar');
  }    
}

const tapSmallSearch = () => {
  const searchSideBar = document.getElementById('searchSidebar');
  if (!searchSideBar.classList.contains('enableSidebar')) {
    toggleSearchBar();
  }
}

const deactivateSmallSearch = () => {
  if (window.innerWidth <= 900) {
    toggleSearchBar();
    var sidebar = document.getElementById('sidebar');
    if (sidebar.classList.contains('enableSidebar')) {
      sidebar.classList.add('disableSidebar');
      sidebar.classList.remove('enableSidebar');
    }
  }
}

// zoom function
const zoomInOut = (value) => {
  if (value == '+') {
    view.zoom++;
    globeView.zoom++;
  }

  if (value == '-') {
    view.zoom--;
    globeView.zoom--;
  }
}

// acquire user geolocation
const success = (value) => {
  console.log(value)
  view.goTo({
    center: [value.coords.longitude, value.coords.latitude],
    zoom: 7
  });
  globeView.goTo({
    center: [value.coords.longitude, value.coords.latitude],
    zoom: 7
  });
}

const error = (value) => {
  console.log(value);
  alert(value.message);
} 

const geolocate = () => {
  navigator.geolocation.getCurrentPosition(success, error);
}

const home = () => {
  view.goTo({
    center: [-38.9465, 7.775],
    zoom: 2
  });

  globeView.goTo({
    center: [-38.9465, 7.775],
    zoom: 4,
  });
}


const hover = (value) => {
  var lgSidebar = document.getElementById('lgSidebar');
  if (value === 'enter') {
    if (!lgSidebar.classList.contains('blocker')) {
      lgSidebar.classList.add('growLgSidebar');
      lgSidebar.classList.remove('shrinkLgSidebar');
      lgSidebar.classList.add('blocker');
      setTimeout(() => {
        lgSidebar.classList.remove('blocker');
      }, 350);
    }
  } else if (value === 'exit') {
    if (!lgSidebar.classList.contains('blocker'))
      lgSidebar.classList.replace('growLgSidebar','shrinkLgSidebar');
      lgSidebar.classList.add('blocker');
      setTimeout(() => {
        lgSidebar.classList.remove('blocker');
      }, 350);
  }
}

const hazards = ["Riverine Flooding", "Coastal Flooding"];
const exposures = ["Buildings", "GDP", "Urban GDP", "Population"];

const toggleHoverOptions = (value) => {
  var dataSidebarTitle = document.getElementById('dataSidebarTitle');
  dataSidebarTitle.innerHTML = value;
  
  var dataSidebarElements = document.getElementById('dataSidebarElements');
  dataSidebarElements.innerHTML = '';

  var array;
  if (value === 'Hazards') {
    array = hazards;
  } else if (value === 'Exposures') {
    array = exposures;
  }

  for (var i=0; i<array.length; i++) {
    var node = document.createElement('div');
    node.innerHTML = `
    <div class="lgSidebarElement lgSidebarText">
      <div>${array[i]}</div>
      <i class="fa-solid fa-chevron-right fa-lg padIconRight"></i>
    </div>`;
    dataSidebarElements.appendChild(node);
  }

  var dataSidebar = document.getElementById('dataSidebar');

  if (dataSidebar.classList.contains('concealDataSidebar')) {
    dataSidebar.classList.replace('concealDataSidebar', 'revealDataSidebar')
  }
  dataSidebar.classList.add('revealDataSidebar');
}

const concealHoverOptions = () => {
  var dataSidebar = document.getElementById('dataSidebar');
  dataSidebar.classList.add('concealDataSidebar');
  dataSidebar.classList.remove('revealDataSidebar');
}

window.addEventListener("resize", () => {
  if (window.innerWidth < 900) {
    var hoverOptions = document.getElementById('hoverOptions');
    var hoverSidebar = document.getElementById('hoverSidebar');
    hoverSidebar.classList.remove('concealHoverMenu');
    hoverSidebar.classList.remove('revealHoverMenu');
    hoverOptions.classList.remove('concealHoverOptions');
    hoverOptions.classList.remove('revealHoverOptions');
  } else if (window.innerWidth >= 900) {
    var sidebar = document.getElementById('sidebar');
    var hazardsSidebar = document.getElementById('hazardsSidebar');
    var exposuresSidebar = document.getElementById('exposuresSidebar');
    sidebar.classList.replace('enableSidebar', 'defaultSidebar');
    hazardsSidebar.classList.replace('enableSidebar', 'defaultSidebar');
    exposuresSidebar.classList.replace('enableSidebar', 'defaultSidebar');
  }
})

showCountryList();

