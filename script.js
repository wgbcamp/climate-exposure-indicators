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
chartInstance = (longitude, latitude, position) => {
  chartEntries.push(
    new MapView({
      container: `chartMapInstance${position}`,
      map: map,
      zoom: 2,
      center: [longitude, latitude],
      constraints: {
        minZoom: 3,
        maxZoom: 10
      },
      spatialReference: {
        wkid: 3857,
        isWrappable: true
      }
    })
  )
};

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
      const countryCode = result[0].attributes.CountryCode;
      var location = result[0].location;
      chartInstance(location.longitude, location.latitude, position);

      var whereClause = `country_abr='${countryCode}' AND Admin_Filter IN ('gadm0', 'gadm1')`;
      var queryString = `where=${encodeURIComponent(whereClause)}`;
      var limit = 1000;
      var offset = 0;
      var allValues = [];
      var hasMore = true;

      console.log(`Country code: ${countryCode}`);

      //get country name from esri's servers
      const worldCountriesURL = `https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/World_Countries/FeatureServer/0/query?where=ISO_CC='${countryCode}'&outFields=COUNTRY&f=json`;
      fetch(worldCountriesURL)
        .then(response => response.json())
          .then(data => {
            var chartMapTitle = document.getElementById(`chartMapTitle${position}`);
            chartMapTitle.innerHTML = data.features[0].attributes.COUNTRY;
            console.log(data.features[0].attributes.COUNTRY)
          })


      async function fetchAllRecords() {

        while (hasMore) {

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

            //update highcharts chart
            // yourVlSpec.data.values = gadm0Total;
              //WE LEFT OFF HERE
            var seriesArray = [{
                name: 'rcp4p5',
                data: []
              },
              {
                name: 'rcp8p5',
                data: []
              }
            ];


            for (var i = 0; i < gadm0Total.length; i++) {
              for (var a = 0; a < seriesArray.length; a++) {
                if (gadm0Total[i].scenario == seriesArray[a].name) {
                  seriesArray[a].data.push(gadm0Total[i].wExposed);
                }
              }
            }

            console.log('seriesArray: ');
            console.log(seriesArray);


            // highchartValue.series[0].setData(seriesArray);


            //initialize highcharts
            // vegaEmbed('#vegaInstance', yourVlSpec)
            // console.log(yourVlSpec);

              highchartValue = Highcharts.chart(`highchartsInstance${position}`, {
                chart: {
                  type: 'line'
                },
                title: {
                  text: 'Weighted Exposure By Scenario'
                },
                xAxis: {
                  title: {
                    text: "period"
                  },
                  categories: [1980, 2030, 2050, 2080]
                },
                yAxis: {
                  title: {
                    text: "wExposed"
                  }
                },
                series: seriesArray
              })
            

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

