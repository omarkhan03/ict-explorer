import { navToFloor } from './matterport.js';
import { flyToDirectionAndPosition } from './cesiumFrame.js'
import { flyToInitial } from './cesiumFrame.js'

export let state = 0;
export let selectedFloor;

let rememberState = null;

// Media query for mobile
var x = window.matchMedia("(max-width: 30em)")

const floor7 = document.getElementsByClassName('f7')[0]
const floor6 = document.getElementsByClassName('f6')[0]
const floor5 = document.getElementsByClassName('f5')[0]
const floor4 = document.getElementsByClassName('f4')[0]
const floor3 = document.getElementsByClassName('f3')[0]
const floor2 = document.getElementsByClassName('f2')[0]
const floor1 = document.getElementsByClassName('f1')[0]
const reset = document.getElementsByClassName('reset')[0]
const switchView = document.getElementsByClassName('switch')[0]
const goto = document.getElementById('goto')
const error = document.getElementById('error')
const sourceCode = document.getElementById('source-code')

const bottomFloorsFrame = document.getElementById('bottom-floors')
const topFloorsFrame = document.getElementById('top-floors')
const header = document.getElementById('header')

const dropdowns = document.getElementsByClassName('dropdowns')[0]


const cesium = document.getElementById('cesiumContainer')


function disableGoto() {
    goto.className = "goto-inactive"
}

function enableGoto() {
    goto.className = "goto-active"
}

floor7.addEventListener('click', () => { 
    enableGoto()
    goto.innerHTML = "Click for inside view of floor 7! &rarr;"
    selectedFloor = 7
})

floor6.addEventListener('click', () => { 
    enableGoto()
    goto.innerHTML = "Click for inside view of floor 6! &rarr;"
    selectedFloor = 6
})

floor5.addEventListener('click', () => {
    enableGoto()
    goto.innerHTML = "Click for inside view of floor 5! &rarr;"
    selectedFloor = 5
})

floor4.addEventListener('click', () => {
    enableGoto()
    goto.innerHTML = "Click for inside view of floor 4! &rarr;"
    selectedFloor = 4
})

floor3.addEventListener('click', () => {
    enableGoto()
    goto.innerHTML = "Click for inside view of floor 3! &rarr;"
    selectedFloor = 3
})

floor2.addEventListener('click', () => {
    enableGoto()
    goto.innerHTML = "Click for inside view of floor 2! &rarr;"
    selectedFloor = 2
})

floor1.addEventListener('click', () => {
    enableGoto()
    goto.innerHTML = "Click for inside view of floor 1! &rarr;"
    selectedFloor = 1
})

goto.addEventListener('click', () => {
    if (state == 2) {
        deactivateMatterport()

    } else {
        state = 2;
        console.log('Going to floor ' + selectedFloor)
        // selected.visible = false
        switch(selectedFloor) {
            case 7:
                activateMatterport()
                break;
            case 6:
                activateMatterport()
                break;
            case 5:
                activateMatterport()
                break;
            case 4:
                activateMatterport()
                break;
            case 3:
                activateMatterport()
                break;
            case 2:
                activateMatterport()
                break;
            case 1:
                activateMatterport()
                break;
        }
    }
})

// This hides everything except for the matterport iframe
function activateMatterport (){

    /*

    direction:
    {
        "x": 0.9200000059730695,
        "y": -0.13855138081700066,
        "z": -0.3666108343778927
    }

    position:
    {
        "x": -1641758.8895907598,
        "y": -3664891.752286862,
        "z": 4940029.303949921
    }

    */

    let direction;
    let position;

    if (selectedFloor < 3) {
        direction = new Cesium.Cartesian3(0.9333524490626779, -0.28830323482087306, -0.21385614468731529);
        position = new Cesium.Cartesian3(-1641756.2604049654, -3664877.8571480466, 4940010.406183958);
    } else if (selectedFloor < 6) {
        direction = new Cesium.Cartesian3(0.9208569304669825, -0.10765409947640325, -0.374744057293577);
        position = new Cesium.Cartesian3(-1641759.457647591, -3664885.3889656225, 4940022.071455598);
    } else {
        direction = new Cesium.Cartesian3(0.9200000059730695, -0.13855138081700066, -0.3666108343778927);
        position = new Cesium.Cartesian3(-1641758.8895907598, -3664891.752286862, 4940029.303949921);
    }

    // Use the function and then execute code after the animation is complete
    flyToDirectionAndPosition(direction, position).then(() => {
        if (selectedFloor < 5) {
            bottomFloorsFrame.className = "webgl"
        } else {
            topFloorsFrame.className = "webgl"
        }
    
        cesium.className = "inactive"
        dropdowns.className = "inactive"
        goto.className = "goto-active"
        goto.innerHTML = "&larr; Return to outside view"
        navToFloor()
    });


}

// This shows everything except for the matterport iframe
function deactivateMatterport (){
    state = 0;

    // const cesiumWidget = document.getElementsByClassName('cesium-widget')[0]

    bottomFloorsFrame.className = "inactive"
    topFloorsFrame.className = "inactive"
    cesium.className = "webgl"
    dropdowns.className = ""
    selectedFloor = null;
    goto.className = "goto-inactive"
    goto.innerHTML = "Select a floor."

    flyToInitial()
}


