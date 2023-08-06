import { state } from './script.js'
import { selectedFloor } from './script.js'

window.addEventListener('keydown', e=> {
    if (e.key == 'q' && state == 2) {
        
    }
})

function activate() {
    if(!connected0 && !connected1) {
       window.setTimeout(activate, 100); /* this checks the flag every 100 milliseconds*/
    } else {
       createSources()
    }
}
activate()

export function navToFloor() {
    if (selectedFloor < 5) {
        mpSdk0.Floor.moveTo(selectedFloor-1)
    } else {
        mpSdk1.Floor.moveTo(selectedFloor-5)
    }

}

function createSources() {
    mpSdk0.Room.data.subscribe({
        onAdded: async function(index, item, collection) {
            console.log (item.center);
            console.log(item.size)
            const source = await Promise.all([
            mpSdk0.Sensor.createSource(mpSdk0.Sensor.SourceType.SPHERE, {
                origin: { x: -9, y: 1, z: -1},
                radius: 10,
                userData: {
                id: 'Safety Equipment',
                },
            }),
            mpSdk0.Sensor.createSource(mpSdk0.Sensor.SourceType.BOX, {
                center: { x: -10, y: 1, z: -1},
                size: { x: 13, y: 5, z: 6 },
                userData: {
                id: 'Elevators Area',
                },
            })
            ]);
            const sensor = await mpSdk0.Sensor.createSensor(mpSdk0.Sensor.SensorType.CAMERA);
            sensor.addSource(...source);
            sensor.showDebug(true);
            }
        })
    console.log('done creating sources')

    mpSdk1.Room.data.subscribe({
        onAdded: async function(index, item, collection) {
            console.log (item.center);
            console.log(item.size)
            const source = await Promise.all([
            mpSdk1.Sensor.createSource(mpSdk1.Sensor.SourceType.SPHERE, {
                origin: { x: -9, y: 1, z: -1},
                radius: 10,
                userData: {
                id: 'Safety Equipment',
                },
            }),
            mpSdk1.Sensor.createSource(mpSdk1.Sensor.SourceType.BOX, {
                center: { x: -10, y: 1, z: -1},
                size: { x: 13, y: 5, z: 6 },
                userData: {
                id: 'Elevators Area',
                },
            })
            ]);
            const sensor = await mpSdk1.Sensor.createSensor(mpSdk1.Sensor.SensorType.CAMERA);
            sensor.addSource(...source);
            sensor.showDebug(true);
            }
        })
}