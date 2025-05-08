require(["esri/Map", "esri/views/MapView", "esri/Basemap"], (Map, MapView, Basemap) => {

  const map = new Map({
    basemap: new Basemap({
      portalItem: {
        id: "6553466517dd4d5e8b0c518b8d6b64cb"
      }
    })
    
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
