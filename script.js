require(["esri/Map", "esri/views/MapView", "esri/layers/FeatureLayer", "esri/widgets/Legend"], (Map, MapView, FeatureLayer, Legend) => {

  
  const layer = new FeatureLayer({
    // portalItem: {
    //   url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/Global_Hex_Grid_50km/FeatureServer/0"
    // }

    url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/Global_Hex_Grid_50km/FeatureServer/0"    
  });

  const map = new Map({
    basemap: "dark-gray",
    layers: [layer]
  });

  const view = new MapView({
    container: "viewDiv",
    map: map,
    zoom: 4,
    center: [290, 25]
  });

  view.ui.remove("zoom");
});

const switchMapChart = () => {

  const div = document.getElementById("switchIcon");

  if (div.classList.contains("fa-globe")) {
    div.classList.replace("fa-globe", "fa-chart-simple")
  } else {
    div.classList.replace("fa-chart-simple", "fa-globe")
  }
}
