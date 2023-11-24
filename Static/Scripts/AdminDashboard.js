var socket1; // Variable for the WebSocket connection for Truck 1
var socket2; // Variable for the WebSocket connection for Truck 2
var socket3; // Variable for the WebSocket connection for Truck 3
var socket4; // Variable for the WebSocket connection for Truck 4

function initializeTruckSocket(id, color, socket) {

    let truckBtn = document.getElementById(`Truck_${id}_info`);
    let truckX = document.getElementById(`truck${id}x`);
    let truckY = document.getElementById(`truck${id}y`);
    let truckPointer = document.getElementById(`Truck${id}Pointer`);


    truckBtn.addEventListener("change", function () {
        if (truckBtn.checked) {
            // console.log(`truck${id} socket checked`);
            socket = new WebSocket(`ws://localhost:3000/truck${id}`);
            socket.onopen = () => {
                console.log(`truck${id} WebSocket connection established.`);
                truckX.innerHTML = "Loading...";
                truckY.innerHTML = "Loading...";
            };

            socket.onmessage = (event) => {
                console.log(`Received truck${id} data`, JSON.parse(event.data));
                truckPointer.setAttribute("visibility", "visible");

                let truckData = JSON.parse(event.data);
                truckX.innerHTML = truckData.x;
                truckY.innerHTML = truckData.y;
                drawPoint(`Truck${id}Pointer`, truckData.x, truckData.y, color);
            };

            socket.onclose = () => {
                console.log(`truck${id} WebSocket connection closed.`);
                truckX.innerHTML = "No Data";
                truckY.innerHTML = "No Data";
                truckPointer.setAttribute("visibility", "hidden");
            };

        } else {
            // console.log(`truck${id} socket unchecked`);
            socket.close();
        }
    });
}

initializeTruckSocket(1, "red", socket1);
initializeTruckSocket(2, "blue", socket2);
initializeTruckSocket(3, "green", socket3);
initializeTruckSocket(4, "yellow", socket4);


function drawPoint(id, x, y, color) {

    X = -8.25 * y + 818;
    Y = -8.1 * x + 702

    console.log("X: " + X + " Y: " + Y);
    document.getElementById(id).setAttribute("cx", X);
    document.getElementById(id).setAttribute("cy", Y);

}