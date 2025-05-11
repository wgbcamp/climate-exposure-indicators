// global variables that are available to module import function and global functions
var view;
var locateAddress;

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

// import esri modules and define parameters
require([
  "esri/Map", 
  "esri/views/MapView", 
  "esri/layers/FeatureLayer", 
  "esri/views/SceneView",
  "esri/widgets/Legend",
  "esri/rest/locator",
  "esri/geometry/SpatialReference",
  "esri/core/reactiveUtils"
], 
  (Map, MapView, FeatureLayer, SceneView, Legend, locator, SpatialReference, reactiveUtils) => {

// assign feature layer 
  var layer = new FeatureLayer({
    // portalItem: {
    //   url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/Global_Hex_Grid_50km/FeatureServer/0"
    // }

    // url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/Global_Hex_Grid_50km/FeatureServer/0"    
  });

// assign map and add basemap and layer properties 
  var map = new Map({
    basemap: "dark-gray"
    // layers: [layer]
  });
  
// assign mapView and add viewpoint properties
  view = new MapView({
    container: "viewDiv",
    map: map,
    zoom: 3,
    center: [33.939, 67.709],
    constraints: {
      minZoom: 2,
      maxZoom: 16
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

// assign sceneView and add viewpoint properties
  var globeView = new SceneView({

    map: new Map({
      basemap: "hybrid"
    }),
    container: "sceneDiv",
    zoom: 3,
    center: [33.939, 67.709],

  });

// remove esri UI elements from globeView (the previous controls were zoom in/out, toggle pan & rotate controls, reset map orientation)
globeView.ui.remove(["compass", "zoom", "pan", "navigation-toggle"]);

// locateAddress function 
locateAddress = (value) => {

  console.log(value);
  // if search icon was clicked, then assign locateAddress parameter to the value of searchField div
  if (value === "searchIcon") {
    value = document.getElementById("searchField").value;
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
        globeView.goTo({
          camera: {
            position: [
              location.longitude,
              location.latitude,
              50000
            ]
          },
          center: [location.longitude, location.latitude],
          zoom: 4
        })
      } else {

        // display browser alert if no result was contained in addressToLocations response
        alert("Not found.")
      }
    })
  }
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

    const div = document.getElementById("countrySelector");

    if (div.classList.contains("noCountrySelector")) {
      div.classList.replace("noCountrySelector", "countrySelector")
    } else if (div.classList.contains("default")) {
      div.classList.replace("default", "countrySelector")
    } else {
      div.classList.replace("countrySelector", "noCountrySelector")
    }

    // loop through the countries array and append divs to the countrySelector div
    // when the popup is active 
    if (div.classList.contains("countrySelector")) {
      for (var i=0; i<countries.length; i++) {
          const node = document.createElement("div");
          var divContent = `<div class="countryStyle" id="${countries[i]}" onclick="locateAddress(this.id)" onkeydown="if(event.key === 'Enter'){ locateAddress(this.id); }" tabindex="0">${countries[i]}</div>`;
          node.innerHTML = divContent;
          div.appendChild(node);
        }
    } else {
      // clear the countrySelector div when the popup is inactive
      div.innerHTML = '';
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
