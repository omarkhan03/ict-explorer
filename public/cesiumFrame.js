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
    enableLighting: false,
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


const buildingsTileset = viewer.scene.primitives.add(Cesium.createOsmBuildings({
    style: new Cesium.Cesium3DTileStyle({
      color: {
        conditions: [
          [true, "color('#FFA500')"]
        ]
      },
      show: {
        conditions: [
          ['${elementId} === 271935039', true],
          ['${elementId} === 165680964', true],
          ['${elementId} === 25619413', true],
          ['${elementId} === 25619421', true],
          ['${elementId} === 25619419', true],
          ['${elementId} === 25619423', true],
          ['${elementId} === 392876765', true],
          ['${elementId} === 25619424', true],
          ['${elementId} === 25603078', true],
          ['${elementId} === 273190755', true],
          ['${elementId} === 4976471', true],
          ['${elementId} === 4970205', true],
          ['${elementId} === 4976661', true],
          ['${elementId} === 25619429', true],
          ['${elementId} === 4976659', true],
          ['${elementId} === 4973052', true],
          ['${elementId} === 5664022', true],
          ['${elementId} === 4973040', true],
          ['${elementId} === 749349008', true],
          ['${elementId} === 749349006', true],
          ['${elementId} === 749349007', true],
          ['${elementId} === 4973053', true],
          ['${elementId} === 539331376', true],
          ['${elementId} === 4976449', true],
          ['${elementId} === 4973050', true],
          ['${elementId} === 816331036', true],
          ['${elementId} === 539325877', true],
          ['${elementId} === 539325877', true],
          ['${elementId} === 35961860', true],
          ['${elementId} === 4976657', true],
          ['${elementId} === 4976658', true],
          ['${elementId} === 4973043', true],
          ['${elementId} === 4973049', true],
          ['${elementId} === 4973048', true],
          ['${elementId} === 990520245', true],
          ['${elementId} === 27442423', true],
          ['${elementId} === 106778987', true],
          ['${elementId} === 652771454', true],
          ['${elementId} === 106778987', true],
          ['${elementId} === 4976775', true],
          ['${elementId} === 990521865', true],
          ['${elementId} === 95030944', true],
          ['${elementId} === 35961865', true],
          ['${elementId} === 521659157', true],
          ['${elementId} === 4973045', true],
          ['${elementId} === 4973042', true],
          ['${elementId} === 4976776', true],
          ['${elementId} === 4973054', true],
          ['${elementId} === 8429088', true],
          ['${elementId} === 270493215', true],
          ['${elementId} === 95030941', true],
          ['${elementId} === 35961877', true],
          ['${elementId} === 4973044', true],
          ['${elementId} === 119876217', true],
          ['${elementId} === 539325873', true],
          ['${elementId} === 539325876', true],
          ['${elementId} === 539325875', true],
          ['${elementId} === 270493217', true],
          ['${elementId} === 270493220', true],
          ['${elementId} === 270493216', true],
          ['${elementId} === 4970219', true],
          ['${elementId} === 122800126', true],
          ['${elementId} === 35961873', true],
          ['${elementId} === 270493221', true],
          ['${elementId} === 452550147', true],
          ['${elementId} === 270493218', true],
          ['${elementId} === 605381836', true],
          ['${elementId} === 270496858', true],
          ['${elementId} === 1041852407', true],
          ['${elementId} === 23647433', true],
          [true, false]
        ]
      },
    })
  }));

// // Hide individual buildings in this area using 3D Tiles Styling language.
// buildingsTileset.style = new Cesium.Cesium3DTileStyle({
//     // Create a style rule to control each building's "show" property.
//     show: {
//     conditions : [
//         // Any building that has this elementId will have `show = false`.
//         ['${elementId} === 13816475', false],
//         // If a building does not have one of these elementIds, set `show = true`.
//         [true, true]
//     ]
//     },
//     // Set the default color style for this particular 3D Tileset.
//     // For any building that has a `cesium#color` property, use that color, otherwise make it white.
//     color: "Boolean(${feature['cesium#color']}) ? color(${feature['cesium#color']}) : color('#ffffff')"
// });    


buildingsTileset.show = false


const campusModel = viewer.scene.primitives.add(
    new Cesium.Cesium3DTileset({
    url: Cesium.IonResource.fromAssetId(1591936)
    })
);

campusModel.show = false

const ictModel = viewer.scene.primitives.add(
  new Cesium.Cesium3DTileset({
  url: Cesium.IonResource.fromAssetId(1590535)
  })
);

// viewer.camera.defaultZoomAmount = 60;
// viewer.flyTo(ictModel);
// viewer.camera.zoomOut()


viewer.camera.flyTo({
  destination: new Cesium.Cartesian3(
    -1641788.2032084605,
    -3665070.419645348,
    4939941.015410033
  ),
  orientation: {
    heading: 0.0,
    pitch: -0.4,
    roll: 0.0
  }
});





const radioButtons = document.querySelectorAll('input[name="which_view"]');
const tileOption = document.getElementById('tileOption');
    
radioButtons.forEach(radioButton => {
  radioButton.addEventListener('change', event => {
    const selectedValue = event.target.value;
    if (selectedValue == 'full') {
      campusModel.show = true;
      ictModel.show = false;
      tileOption.className = 'inactive'
      buildingsTileset.show = false

    } else if (selectedValue == 'ict') {
      campusModel.show = false;
      ictModel.show = true;
      tileOption.className = 'row'
    }

    if (defaultTiles.checked) {
      buildingsTileset.show = true
    } else {
      buildingsTileset.show = false
    }
  });
});

const defaultTiles = document.getElementById('tileset');

defaultTiles.addEventListener('change', event => {
  if (defaultTiles.checked) {
    buildingsTileset.show = true
  } else {
    buildingsTileset.show = false
  }
})

/* when a key is pressed */
document.addEventListener('keydown', function(event) {
  console.log(viewer.scene.camera)
});