const reset = document.getElementsByClassName('reset')[0]

Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3Y2M1NmIwYi1lZjcyLTQwMjAtODNmYS0wMDJkNmExMTM4ZDkiLCJpZCI6MTI5NTQyLCJpYXQiOjE2NzkzNDQ4ODV9.GGVY2EFdi_q-4JAWLhMhoWY_kx1r0oh0gmJ-ixzSsEg';

// Initialize the viewer with Cesium World Terrain.
const viewer = new Cesium.Viewer('cesiumContainer', {
    terrainProvider: Cesium.createWorldTerrain(),
    animation: false,
    homeButton: false,
    navigationHelpButton: false,
    fullscreenButton: false,
    sceneModePicker: false,
    timeline: false,
});

viewer.scene.light = new Cesium.DirectionalLight({
    direction: viewer.scene.camera.directionWC,
  });
  viewer.scene.preRender.addEventListener(function (scene, time) {
    viewer.scene.light.direction = Cesium.Cartesian3.clone(
      viewer.scene.camera.directionWC,
      viewer.scene.light.direction
    );
  });

// Add Cesium OSM Buildings.
const buildingsTileset = viewer.scene.primitives.add(Cesium.createOsmBuildings());

const campusModel = viewer.scene.primitives.add(
    new Cesium.Cesium3DTileset({
    url: Cesium.IonResource.fromAssetId(1591936)
    })
);

viewer.flyTo(campusModel);