// global variables that are available to module import function and global functions
var view;
var locateAddress;
var camera;
var globeView;
var map;
var globeMap;

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
  "esri/widgets/TimeSlider",
  "esri/layers/VectorTileLayer",
  "esri/widgets/Slider"
], 
  (Map, MapView, FeatureLayer, SceneView, Legend, locator, SpatialReference, reactiveUtils, TimeSlider, VectorTileLayer, Slider) => {

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

// assign map and add basemap and layer properties 
  map = new Map({
    basemap: "dark-gray"
    // layers: [layer]

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

  if (searchButtonContainer.classList.contains('selectedButton')) {
    searchButtonContainer.classList.add('removeSelectedButton');
    searchButtonContainer.classList.remove('selectedButton');
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

  if (sidebar.classList.contains('enableSidebar')) {
    sidebar.classList.add('disableSidebar');
    sidebar.classList.remove('enableSidebar');
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

  if (!searchButtonContainer.classList.contains('selectedButton')) {
    searchButtonContainer.classList.add('selectedButton');
    searchButtonContainer.classList.remove('removeSelectedButton');
  } else {
    searchButtonContainer.classList.add('removeSelectedButton');
    searchButtonContainer.classList.remove('selectedButton');
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

showCountryList();
